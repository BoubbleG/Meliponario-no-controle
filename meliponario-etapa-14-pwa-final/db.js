(function(global){
  'use strict';
  const DB_NAME='MeuMeliponarioDB';
  const DB_VERSION=1;
  const ENTITY_STORES=['apiaries','colonies','agenda','traps','captures','divisions','harvests','inspections','feedings','activities','media'];
  const SINGLETON_STORES=['profile','settings','staticData','meta'];
  let db=null;
  const req=(r)=>new Promise((resolve,reject)=>{r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error||new Error('IndexedDB error'));});
  function txDone(tx){return new Promise((resolve,reject)=>{tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error||new Error('Transaction error'));tx.onabort=()=>reject(tx.error||new Error('Transaction aborted'));});}
  function open(){
    if(db) return Promise.resolve(db);
    return new Promise((resolve,reject)=>{
      const r=indexedDB.open(DB_NAME,DB_VERSION);
      r.onupgradeneeded=()=>{
        const d=r.result;
        for(const s of ENTITY_STORES){if(!d.objectStoreNames.contains(s)){const os=d.createObjectStore(s,{keyPath:'id'});if(['colonies','agenda','traps','captures','divisions','harvests','inspections','feedings','activities'].includes(s)) os.createIndex('apiaryId','apiaryId',{unique:false});}}
        for(const s of SINGLETON_STORES){if(!d.objectStoreNames.contains(s)) d.createObjectStore(s,{keyPath:'id'});}
      };
      r.onsuccess=()=>{db=r.result;db.onversionchange=()=>{db.close();db=null};resolve(db)};
      r.onerror=()=>reject(r.error||new Error('Não foi possível abrir o banco local.'));
    });
  }
  function clone(v){return JSON.parse(JSON.stringify(v));}
  function stampRows(rows){const now=new Date().toISOString();return (rows||[]).map(x=>({...x,createdAt:x.createdAt||now,updatedAt:x.updatedAt||now}));}
  async function putAll(store,rows,clear=true,txOverride=null){
    const d=await open(), tx=txOverride||d.transaction(store,'readwrite'), os=tx.objectStore(store); if(clear) os.clear(); for(const row of stampRows(rows)) os.put(clone(row)); if(!txOverride) await txDone(tx);
  }
  async function getAll(store){const d=await open();return req(d.transaction(store,'readonly').objectStore(store).getAll());}
  async function getOne(store,id){const d=await open();return req(d.transaction(store,'readonly').objectStore(store).get(id));}
  async function putOne(store,value){const d=await open(),tx=d.transaction(store,'readwrite');tx.objectStore(store).put(clone(value));await txDone(tx);}
  async function isInitialized(){const m=await getOne('meta','state');return !!m?.initialized;}
  async function replaceAll(data,settings){
    const d=await open(); const stores=[...ENTITY_STORES,...SINGLETON_STORES]; const tx=d.transaction(stores,'readwrite'); const now=new Date().toISOString();
    for(const s of ENTITY_STORES){const os=tx.objectStore(s);os.clear();for(const row of stampRows(data[s]||[])) os.put(clone(row));}
    tx.objectStore('profile').clear();tx.objectStore('profile').put({id:'user',...(clone(data.user||{name:'Meliponicultor'})),updatedAt:now});
    tx.objectStore('settings').clear();tx.objectStore('settings').put({id:'preferences',...(clone(settings||{})),updatedAt:now});
    tx.objectStore('staticData').clear();tx.objectStore('staticData').put({id:'quickActions',value:clone(data.quickActions||[])});tx.objectStore('staticData').put({id:'notifications',value:clone(data.notifications||[])});
    tx.objectStore('meta').clear();tx.objectStore('meta').put({id:'state',initialized:true,schemaVersion:DB_VERSION,lastSavedAt:now});
    await txDone(tx);
  }
  async function seedIfNeeded(seed,settings){if(!(await isInitialized())) await replaceAll(seed,settings);}
  async function loadAll(){
    const out={};
    for(const s of ENTITY_STORES) out[s]=await getAll(s);
    out.user=(await getOne('profile','user'))||{name:'Meliponicultor'}; delete out.user.id;
    const qa=await getOne('staticData','quickActions'),nt=await getOne('staticData','notifications'); out.quickActions=qa?.value||[]; out.notifications=nt?.value||[];
    const settings=(await getOne('settings','preferences'))||null; if(settings) delete settings.id;
    return {data:out,settings,meta:await getOne('meta','state')};
  }
  async function saveAll(data,settings){await replaceAll(data,settings);}
  function mergeById(a,b){const m=new Map((a||[]).map(x=>[x.id,x]));for(const x of (b||[]))m.set(x.id,{...(m.get(x.id)||{}),...x});return [...m.values()];}
  async function mergeAll(imported,settings){const current=await loadAll(), merged={...current.data};for(const s of ENTITY_STORES)merged[s]=mergeById(current.data[s],imported[s]);merged.user={...(current.data.user||{}),...(imported.user||{})};merged.quickActions=imported.quickActions?.length?imported.quickActions:current.data.quickActions;merged.notifications=imported.notifications?.length?imported.notifications:current.data.notifications;await replaceAll(merged,{...(current.settings||{}),...(settings||{})});return merged;}
  async function estimate(){let usage=0,quota=0,persisted=false;try{const e=await navigator.storage?.estimate?.();usage=e?.usage||0;quota=e?.quota||0;persisted=!!(await navigator.storage?.persisted?.());}catch(e){}return {usage,quota,persisted};}
  async function requestPersistence(){try{if(navigator.storage?.persist)return !!(await navigator.storage.persist());}catch(e){}return false;}
  async function reset(){if(db){db.close();db=null;}await new Promise((resolve,reject)=>{const r=indexedDB.deleteDatabase(DB_NAME);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);r.onblocked=()=>resolve();});}
  global.MeliponarioDB={DB_NAME,DB_VERSION,ENTITY_STORES,open,seedIfNeeded,loadAll,saveAll,replaceAll,mergeAll,estimate,requestPersistence,reset};
})(window);
