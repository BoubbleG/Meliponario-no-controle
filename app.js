const icon = (name) => ICONS[name] || ICONS.more;
const ICONS = {
  bee:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.2 9.5C5.6 6.7 3 7.1 3 9c0 1.8 2.2 3.2 5.1 2.9M15.8 9.5C18.4 6.7 21 7.1 21 9c0 1.8-2.2 3.2-5.1 2.9"/><ellipse cx="12" cy="13" rx="4.2" ry="5.8"/><path d="M8.2 11h7.6M8 14h8M9.2 17h5.6M10.1 7 9 4.8M13.9 7 15 4.8"/></svg>`,
  bell:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>`,
  down:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 10 5 5 5-5"/></svg>`,
  right:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>`,
  filter:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/><circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  sort:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M4 7l3-3 3 3M17 20V4M14 17l3 3 3-3"/></svg>`,
  grid:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/></svg>`,
  list:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="5" cy="6" r="1" fill="currentColor"/><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="5" cy="18" r="1" fill="currentColor"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>`,
  pin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  inspection:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4M8.8 11h4.4M11 8.8v4.4"/></svg>`,
  feeding:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s5 5.8 5 10a5 5 0 0 1-10 0c0-4.2 5-10 5-10Z"/><path d="M9.6 14c.5 1.2 1.5 1.9 2.8 1.9"/></svg>`,
  capture:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>`,
  trap:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8M9 3v4l-2 3v9h10v-9l-2-3V3"/><path d="M9 12h6M10 15h4"/></svg>`,
  more:`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,
  home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>`,
  hive:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10l2 4H5l2-4ZM5 8h14l1 4H4l1-4ZM4 12h16l-1 7H5l-1-7Z"/><path d="M9 16h6"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 7h14M5 12h14M5 17h14"/></svg>`,
  sparkle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.3 4.1L17 9l-3.7 1.9L12 15l-1.3-4.1L7 9l3.7-1.9L12 3Z"/><path d="m19 15 .7 2.2L22 18l-2.3.8L19 21l-.7-2.2L16 18l2.3-.8L19 15Z"/></svg>`,
  close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
  division:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="6" r="2"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/><path d="M7 8v3c0 3 2 5 5 5h3M9 6h3c3 0 5 2 5 5v5"/></svg>`,
  harvest:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8l2 4-2 12H8L6 8l2-4Z"/><path d="M7 8h10M9 12h6"/></svg>`,
  occurrence:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4M12 16h.01"/></svg>`,
  back:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  crown:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m4 8 4 4 4-7 4 7 4-4-2 10H6L4 8Z"/><path d="M7 21h10"/></svg>`,
  brood:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4 4 6.5v5L8 14l4-2.5v-5L8 4Z"/><path d="m16 10-4 2.5v5L16 20l4-2.5v-5L16 10Z"/><path d="m8 14 4 2.5"/></svg>`,
  history:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"/></svg>`,
  qr:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM18 14h2v5h-2zM14 18h3v2h-3z"/></svg>`,
  camera:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h4l2-3h4l2 3h4v13H4V7Z"/><circle cx="12" cy="13" r="4"/></svg>`,
  box:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/><path d="M12 11v10"/></svg>`,
  transfer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3"/></svg>`,
  book:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.86 2.86-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.86-2.86.06-.06A1.7 1.7 0 0 0 4.2 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2v-4h.5A1.7 1.7 0 0 0 4.2 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06L6.66 3.8l.06.06A1.7 1.7 0 0 0 8.6 4.2a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2h4v.5a1.7 1.7 0 0 0 1 1.7 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.86 2.86-.06.06A1.7 1.7 0 0 0 19.4 8.6a1.7 1.7 0 0 0 .6 1 1.7 1.7 0 0 0 1.1.4H22v4h-.9a1.7 1.7 0 0 0-1.7 1Z"/></svg>`,
  database:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17V5M7 10l5-5 5 5M4 21h16"/></svg>`,
  shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v5.5c0 4.7 3 7.9 7.5 9.5 4.5-1.6 7.5-4.8 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10 5h4M11 18.5h2"/></svg>`
};

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let DATA;
let currentApiaryId='principal';
let currentPriorityIndex=0;
let currentPage='colonies';
let selectedColonyId='c04';
let searchTerm='';
let statusFilter='all';
let speciesFilter='all';
let sortMode='priority';
let compactView=false;
let advancedFilters={origin:'all',local:'all'};
let historyFilter='all';
let agendaView='today';
let agendaSelectedDate='2026-09-20';
let trapFilter='all';
let trapSearch='';
let captureTrapId=null;
let captureStep=1;
let captureDraft={species:'Jataí',speciesKey:'jatai',date:'2026-09-20',note:'',photo:'',createColony:true,colonyName:'',boxType:'Isca PET'};
let divisionMode='hub';
let divisionStep=1;
let divisionMotherId=null;
let divisionDraft={date:'2026-09-20',name:'',boxType:'INPA',local:'',note:''};
let productionMode='hub';
let productionPeriod='month';
let reportsPeriod='year';
let toolsMode='apiaries';
let qrColonyId='c01';
let libraryCategory='all';
let libraryResourceId=null;
let appSettings={userName:'Fabrício',defaultApiary:'principal',inspectionInterval:'15',productionUnit:'ml',notifications:true,haptics:true,lastBackupAt:null};

// ETAPA 13 — persistência local definitiva (IndexedDB)
let persistenceReady=false,persistTimer=null,lastSavedAt=null;
function plainClone(value){return JSON.parse(JSON.stringify(value));}
function persistentProxy(root){
  const cache=new WeakMap();
  const wrap=(obj)=>{
    if(!obj||typeof obj!=='object')return obj;
    if(cache.has(obj))return cache.get(obj);
    const proxy=new Proxy(obj,{
      get(target,key,receiver){return wrap(Reflect.get(target,key,receiver));},
      set(target,key,value,receiver){const ok=Reflect.set(target,key,value,receiver);if(persistenceReady)schedulePersist();return ok;},
      deleteProperty(target,key){const ok=Reflect.deleteProperty(target,key);if(persistenceReady)schedulePersist();return ok;}
    });
    cache.set(obj,proxy);return proxy;
  };
  return wrap(root);
}
function schedulePersist(){clearTimeout(persistTimer);persistTimer=setTimeout(()=>persistNow(),220);}
async function persistNow(){
  if(!persistenceReady||!window.MeliponarioDB)return;
  try{await MeliponarioDB.saveAll(plainClone(DATA),plainClone(appSettings));lastSavedAt=new Date().toISOString();updateLocalDbBadge('Salvo agora');}
  catch(err){console.error('Falha ao salvar localmente',err);updateLocalDbBadge('Falha ao salvar');}
}
function updateLocalDbBadge(text){const el=document.querySelector('#localDbState');if(el)el.textContent=text;}
async function bootLocalDatabase(){
  const defaults={userName:'Fabrício',defaultApiary:'principal',inspectionInterval:'15',productionUnit:'ml',notifications:true,haptics:true,lastBackupAt:null};
  try{
    if(!window.indexedDB||!window.MeliponarioDB)throw new Error('IndexedDB indisponível');
    await MeliponarioDB.open();
    await MeliponarioDB.seedIfNeeded(window.MELIPONARIO_SEED||{},defaults);
    const loaded=await MeliponarioDB.loadAll();
    DATA=persistentProxy(loaded.data);
    appSettings=persistentProxy({...defaults,...(loaded.settings||{})});
    if(DATA.user?.name) appSettings.userName=DATA.user.name;
    currentApiaryId=DATA.apiaries?.some(a=>a.id===appSettings.defaultApiary)?appSettings.defaultApiary:(DATA.apiaries?.[0]?.id||'principal');
    persistenceReady=true;
    await MeliponarioDB.requestPersistence();
    return true;
  }catch(err){
    console.error('Banco local indisponível; usando memória nesta sessão.',err);
    DATA=persistentProxy(plainClone(window.MELIPONARIO_SEED||{}));
    appSettings=persistentProxy(defaults);
    currentApiaryId=DATA.apiaries?.[0]?.id||'principal';
    persistenceReady=false;
    return false;
  }
}
const LIBRARY_RESOURCES=[
  {id:'pdf-projects',kind:'Projetos',title:'Projetos de caixas e meliponários',subtitle:'Projetos em PDF · visualizar ou baixar',fileId:'1VjWuZAQCOInV1plCjB2fWXFdUPj05zbH'},
  {id:'pdf-attractants',kind:'Atrativos',title:'Atrativos',subtitle:'Material em PDF · visualizar ou baixar',fileId:'1gbAF_KV_sac9Brj_8CQDKxg5VPMWOAMC'},
  {id:'pdf-bonuses',kind:'Bônus',title:'6 bônus',subtitle:'Pacote de bônus em PDF · visualizar ou baixar',fileId:'1nnAVkbD7hC_z-pgMY--SCpo4v0scspDT'}
];
function drivePreviewUrl(fileId){return `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`;}
function driveViewUrl(fileId){return `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/view?usp=sharing`;}
function driveDownloadUrl(fileId){return `https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=download&confirm=t`;}
const LIBRARY_ARTICLES=[
  {id:'l1',category:'species',title:'Jataí',subtitle:'Tetragonisca angustula',icon:'bee',body:'Abelha pequena e muito comum em áreas urbanas. Observe atividade de entrada, reserva de alimento e condição da cria durante os manejos.'},
  {id:'l2',category:'species',title:'Mandaçaia',subtitle:'Melipona quadrifasciata',icon:'bee',body:'Espécie robusta e bastante criada em caixas racionais. Acompanhe população, discos de cria e disponibilidade de alimento.'},
  {id:'l3',category:'capture',title:'Acompanhar uma isca',subtitle:'O que observar durante a espera',icon:'trap',body:'Registre data, local e atividade. Evite abrir a isca sem necessidade. Quando houver ocupação consistente, registre a captura no aplicativo.'},
  {id:'l4',category:'feeding',title:'Alimentação complementar',subtitle:'Quando registrar',icon:'feeding',body:'Use o registro de alimentação para acompanhar colônias com baixa reserva ou em períodos de escassez. Anote o tipo e a quantidade oferecida.'},
  {id:'l5',category:'division',title:'Divisão de colônias',subtitle:'Mantenha a linhagem registrada',icon:'division',body:'Ao realizar uma divisão, vincule a nova colônia à colônia mãe. Isso mantém a origem e os descendentes organizados ao longo do tempo.'},
  {id:'l6',category:'pests',title:'Problemas e pragas',subtitle:'Registre antes de esquecer',icon:'occurrence',body:'Formigas, forídeos, excesso de umidade e danos na caixa devem entrar no histórico da colônia para facilitar o acompanhamento.'},
  {id:'l7',category:'boxes',title:'Caixas e transferências',subtitle:'Identificação clara',icon:'box',body:'Mantenha o tipo de caixa e o local atualizados. Em uma transferência, registre a origem e o destino para preservar o histórico.'},
  {id:'l8',category:'plants',title:'Floradas no entorno',subtitle:'Leitura prática do ambiente',icon:'sparkle',body:'Observe plantas em floração próximas ao meliponário. Essas anotações ajudam a relacionar oferta de recurso e comportamento das colônias.'}
];
let harvestStep=1;
let harvestColonyId=null;
let harvestDraft={date:'2026-09-20',quantity:'',unit:'ml',note:''};

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1900)}
function apiary(){return DATA.apiaries.find(a=>a.id===currentApiaryId)||DATA.apiaries[0]}
function apiaryColonies(){return DATA.colonies.filter(c=>c.apiaryId===currentApiaryId)}
function openSheet(html){$('#sheetContent').innerHTML=html;document.body.classList.add('sheet-open');$('#sheetBackdrop').classList.add('open');$('#bottomSheet').classList.add('open');$('#bottomSheet').setAttribute('aria-hidden','false');$('#bottomSheet').scrollTop=0;$$('[data-close]').forEach(b=>b.onclick=closeSheet)}
function closeSheet(){$('#sheetBackdrop').classList.remove('open');$('#bottomSheet').classList.remove('open');$('#bottomSheet').setAttribute('aria-hidden','true');document.body.classList.remove('sheet-open')}
function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}

function hiveArt(visual='honey'){
  const themes={
    sun:['#ffe79c','#efb43b','#744814'], honey:['#ffe8aa','#d99a21','#6d4211'], rose:['#f5d8ca','#c6815d','#70452f'], leaf:['#dce9c4','#7ca360','#45653f'], lilac:['#e9dff2','#9a80b4','#5b496b'], forest:['#d8e5d2','#678b63','#3f5d3c'], amber:['#f8dfaf','#d18a25','#7f4d0e'], sky:['#dbeaf0','#78a5b3','#496b75']
  };
  const [bg,wood,dark]=themes[visual]||themes.honey;
  return `<svg class="hive-art" viewBox="0 0 100 110" aria-hidden="true"><defs><linearGradient id="g-${visual}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="${wood}"/></linearGradient><filter id="s-${visual}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="${dark}" flood-opacity=".16"/></filter></defs><g filter="url(#s-${visual})"><path d="M22 31h56l7 12H15l7-12Z" fill="${dark}" opacity=".92"/><rect x="20" y="42" width="60" height="49" rx="5" fill="url(#g-${visual})"/><rect x="25" y="49" width="50" height="8" rx="2.5" fill="#fff" opacity=".28"/><path d="M20 64h60" stroke="${dark}" stroke-opacity=".22"/><path d="M20 76h60" stroke="${dark}" stroke-opacity=".18"/><rect x="42" y="80" width="16" height="4" rx="2" fill="${dark}"/><rect x="24" y="91" width="7" height="10" rx="2" fill="${dark}" opacity=".82"/><rect x="69" y="91" width="7" height="10" rx="2" fill="${dark}" opacity=".82"/></g><g transform="translate(66 19) rotate(11)"><ellipse cx="0" cy="0" rx="4" ry="6" fill="#2e281f"/><path d="M-4-1h8M-4 2h8" stroke="#f2b52d" stroke-width="2"/><ellipse cx="-5" cy="-4" rx="4" ry="2.7" fill="#fff" opacity=".86"/><ellipse cx="5" cy="-4" rx="4" ry="2.7" fill="#fff" opacity=".86"/></g><circle cx="17" cy="21" r="3" fill="#fff" opacity=".7"/><circle cx="81" cy="18" r="2" fill="#fff" opacity=".62"/></svg>`;
}

function renderShell(){
  $('#brandMark').innerHTML=icon('bee');$('#bellIcon').innerHTML=icon('bell');$('#chevDown').innerHTML=icon('down');$('#arrowRight1').innerHTML=icon('right');$('#sparkleIcon').innerHTML=icon('sparkle');
  $('#navHome').innerHTML=icon('home');$('#navHive').innerHTML=icon('hive');$('#navPlus').innerHTML=icon('plus');$('#navCalendar').innerHTML=icon('calendar');$('#navMenu').innerHTML=icon('menu');
  $('#addColonyIcon').innerHTML=icon('plus');$('#searchIcon').innerHTML=icon('search');$('#searchClearIcon').innerHTML=icon('close');$('#filterIcon').innerHTML=icon('filter');$('#viewIcon').innerHTML=icon('list');$('#sortIcon').innerHTML=icon('sort');$('#emptyBee').innerHTML=icon('bee');
  $('#userName').textContent=DATA.user.name;
  if($('#detailBackIcon')) $('#detailBackIcon').innerHTML=icon('back');
  if($('#detailMoreIcon')) $('#detailMoreIcon').innerHTML=icon('more');
  if($('#detailPinIcon')) $('#detailPinIcon').innerHTML=icon('pin');
  if($('#queenIcon')) $('#queenIcon').innerHTML=icon('crown');
  if($('#populationIcon')) $('#populationIcon').innerHTML=icon('bee');
  if($('#broodIcon')) $('#broodIcon').innerHTML=icon('brood');
  if($('#foodIcon')) $('#foodIcon').innerHTML=icon('feeding');
  if($('#managementNoteIcon')) $('#managementNoteIcon').innerHTML=icon('sparkle');
  if($('#registerManagementIcon')) $('#registerManagementIcon').innerHTML=icon('right');
  if($('#calendarSmallIcon')) $('#calendarSmallIcon').innerHTML=icon('calendar');
  if($('#inspectionRoundIcon')) $('#inspectionRoundIcon').innerHTML=icon('inspection');
  if($('#dataOriginIcon')) $('#dataOriginIcon').innerHTML=icon('capture');
  if($('#dataBoxIcon')) $('#dataBoxIcon').innerHTML=icon('box');
  if($('#dataPlaceIcon')) $('#dataPlaceIcon').innerHTML=icon('pin');
  if($('#dataCodeIcon')) $('#dataCodeIcon').innerHTML=icon('qr');
  if($('#historyBottomIcon')) $('#historyBottomIcon').innerHTML=icon('history');
  if($('#manageBottomIcon')) $('#manageBottomIcon').innerHTML=icon('plus');
  if($('#historyBackIcon')) $('#historyBackIcon').innerHTML=icon('back');
  if($('#historyFilterIcon')) $('#historyFilterIcon').innerHTML=icon('filter');
  if($('#historySummaryIcon1')) $('#historySummaryIcon1').innerHTML=icon('history');
  if($('#historySummaryIcon2')) $('#historySummaryIcon2').innerHTML=icon('inspection');
  if($('#historySummaryIcon3')) $('#historySummaryIcon3').innerHTML=icon('calendar');
  if($('#historyEmptyIcon')) $('#historyEmptyIcon').innerHTML=icon('history');
  if($('#agendaAddIcon')) $('#agendaAddIcon').innerHTML=icon('plus');
  if($('#agendaHeroCalendarIcon')) $('#agendaHeroCalendarIcon').innerHTML=icon('calendar');
  if($('#agendaEmptyIcon')) $('#agendaEmptyIcon').innerHTML=icon('calendar');
  if($('#trapsAddIcon')) $('#trapsAddIcon').innerHTML=icon('plus');
  if($('#trapSearchIcon')) $('#trapSearchIcon').innerHTML=icon('search');
  if($('#trapSearchClearIcon')) $('#trapSearchClearIcon').innerHTML=icon('close');
  if($('#trapsEmptyIcon')) $('#trapsEmptyIcon').innerHTML=icon('trap');
  if($('#trapHeroArt')) $('#trapHeroArt').innerHTML=trapArt('hero');
  if($('#captureBackIcon')) $('#captureBackIcon').innerHTML=icon('back');
  if($('#captureCloseIcon')) $('#captureCloseIcon').innerHTML=icon('close');
  if($('#productionBackIcon')) $('#productionBackIcon').innerHTML=icon('back');
  if($('#productionAddTopIcon')) $('#productionAddTopIcon').innerHTML=icon('plus');
  if($('#reportsBackIcon')) $('#reportsBackIcon').innerHTML=icon('back');
  if($('#reportsInfoIcon')) $('#reportsInfoIcon').innerHTML=icon('history');
  if($('#toolsBackIcon')) $('#toolsBackIcon').innerHTML=icon('back');
  if($('#toolsInfoIcon')) $('#toolsInfoIcon').innerHTML=icon('history');
}

function setPage(page){
  currentPage=page;
  $('#homePage').classList.toggle('is-hidden',page!=='home');
  $('#coloniesPage').classList.toggle('is-hidden',page!=='colonies');
  $('#detailPage').classList.toggle('is-hidden',page!=='details');
  $('#inspectionPage').classList.toggle('is-hidden',page!=='inspection');
  $('#historyPage').classList.toggle('is-hidden',page!=='history');
  $('#agendaPage').classList.toggle('is-hidden',page!=='agenda');
  $('#trapsPage').classList.toggle('is-hidden',page!=='traps');
  $('#capturePage').classList.toggle('is-hidden',page!=='capture');
  $('#divisionPage').classList.toggle('is-hidden',page!=='division');
  $('#productionPage').classList.toggle('is-hidden',page!=='production');
  $('#reportsPage').classList.toggle('is-hidden',page!=='reports');
  $('#toolsPage').classList.toggle('is-hidden',page!=='tools');
  $('#globalTopbar').classList.toggle('is-hidden',page==='details'||page==='inspection'||page==='history'||page==='capture'||page==='division'||page==='production'||page==='reports'||page==='tools');
  $$('[data-nav]').forEach(b=>{const activePage=(page==='details'||page==='inspection'||page==='history')?'colonies':((page==='traps'||page==='capture'||page==='division'||page==='production'||page==='reports'||page==='tools')?'more':page);b.classList.toggle('active',b.dataset.nav===activePage)});
  if(page==='home') renderHome();
  if(page==='colonies') renderColoniesPage();
  if(page==='details') renderColonyDetails(selectedColonyId);
  if(page==='inspection') renderInspection();
  if(page==='history') renderHistoryPage();
  if(page==='agenda') renderAgendaPage();
  if(page==='traps') renderTrapsPage();
  if(page==='capture') renderCapture();
  if(page==='division') renderDivisionPage();
  if(page==='production') renderProductionPage();
  if(page==='reports') renderReportsPage();
  if(page==='tools') renderToolsPage();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderHome(){
  const a=apiary(),s=a.summary;
  $('#apiaryName').textContent=a.name;$('#colonyCount').textContent=s.colonies;$('#healthyCount').textContent=s.healthy;$('#attentionCount').textContent=s.attention;$('#managementCount').textContent=s.management;$('#priorityCount').textContent=`${a.priorities.length} ${a.priorities.length===1?'ação':'ações'}`;
  const pct=Math.round((s.weeklyDone/s.weeklyTotal)*100);$('#weekTitle').textContent=`${s.weeklyDone} de ${s.weeklyTotal} manejos concluídos`;$('#insightBody').textContent=a.insight.body;$('#weekPercent').textContent=`${pct}%`;$('#weekRing').style.setProperty('--p',pct);requestAnimationFrame(()=>$('#weekProgress').style.width=`${pct}%`);
  renderPriorities();renderQuick();renderSchedule();
}
function renderPriorities(){const a=apiary();const track=$('#priorityTrack');track.innerHTML=a.priorities.map((p,i)=>`<article class="priority-card tone-${p.tone}" data-priority-index="${i}"><div class="priority-top"><div class="priority-icon">${icon(p.kind)}</div><div class="priority-copy"><strong>${esc(p.colony)}</strong><span>${esc(p.title)}</span><small>${esc(p.meta)}</small></div><span class="priority-badge">${esc(p.detail)}</span></div><div class="priority-actions"><button class="btn-primary tap" data-priority-action="${i}">${esc(p.cta)}</button><button class="btn-secondary tap" data-priority-detail="${i}">Detalhes</button></div></article>`).join('');$('#priorityPager').innerHTML=a.priorities.map((_,i)=>`<i class="${i===0?'active':''}"></i>`).join('');currentPriorityIndex=0;$$('[data-priority-action]').forEach(b=>b.onclick=()=>openRegisterSheet(a.priorities[+b.dataset.priorityAction].kind,a.priorities[+b.dataset.priorityAction].colony));$$('[data-priority-detail]').forEach(b=>b.onclick=()=>priorityDetail(a.priorities[+b.dataset.priorityDetail]));track.onscroll=()=>{const idx=Math.round(track.scrollLeft/(track.clientWidth*.88+10));if(idx!==currentPriorityIndex){currentPriorityIndex=Math.max(0,Math.min(idx,a.priorities.length-1));$$('#priorityPager i').forEach((x,j)=>x.classList.toggle('active',j===currentPriorityIndex))}}}
function renderQuick(){$('#quickGrid').innerHTML=DATA.quickActions.map(q=>`<button class="quick-action tap" data-quick="${q.key}"><span class="quick-icon">${icon(q.key==='more'?'more':q.key)}</span><strong>${q.label}</strong><small>${q.hint}</small></button>`).join('');$$('[data-quick]').forEach(b=>b.onclick=()=>b.dataset.quick==='more'?openRegisterSheet():openRegisterSheet(b.dataset.quick))}
function renderSchedule(){const a=apiary();$('#scheduleList').innerHTML=a.upcoming.map(u=>`<button class="schedule-row tap" data-schedule="${u.id}"><span class="date-block"><strong>${u.day}</strong><small>${u.time}</small></span><span class="schedule-main"><strong>${u.title}</strong><span>${u.task}</span></span><span class="schedule-chevron">${icon('right')}</span></button>`).join('');$$('[data-schedule]').forEach(b=>b.onclick=()=>{const item=a.upcoming.find(x=>x.id===b.dataset.schedule);openRegisterSheet(item.kind,item.title)})}

function speciesList(){return [...new Set(apiaryColonies().map(c=>c.species))].sort((a,b)=>a.localeCompare(b,'pt-BR'))}
function activeAdvancedCount(){return Object.values(advancedFilters).filter(v=>v!=='all').length}
function filteredColonies(){
  const term=searchTerm.trim().toLocaleLowerCase('pt-BR');
  let rows=apiaryColonies().filter(c=>{
    const statusOk=statusFilter==='all'||c.status===statusFilter;
    const speciesOk=speciesFilter==='all'||c.species===speciesFilter;
    const originOk=advancedFilters.origin==='all'||c.origin===advancedFilters.origin;
    const localOk=advancedFilters.local==='all'||c.local===advancedFilters.local;
    const text=`${c.name} ${c.species} ${c.local} ${c.boxType}`.toLocaleLowerCase('pt-BR');
    return statusOk&&speciesOk&&originOk&&localOk&&(!term||text.includes(term));
  });
  const statusRank={management:0,attention:1,healthy:2};
  rows.sort((a,b)=>{
    if(sortMode==='name') return a.name.localeCompare(b.name,'pt-BR',{numeric:true});
    if(sortMode==='recent') return a.lastInspectionDays-b.lastInspectionDays;
    if(sortMode==='next') return a.nextActionDays-b.nextActionDays;
    return (statusRank[a.status]-statusRank[b.status]) || (a.priority-b.priority) || a.name.localeCompare(b.name,'pt-BR',{numeric:true});
  });
  return rows;
}

function renderColoniesPage(){
  const a=apiary(), all=apiaryColonies();
  $('#apiaryName').textContent=a.name;
  $('#visibleColoniesCount').textContent=all.length;
  $('#chipAll').textContent=all.length;
  const healthy=all.filter(c=>c.status==='healthy').length,attention=all.filter(c=>c.status==='attention').length,management=all.filter(c=>c.status==='management').length;
  $('#overviewHealthy').textContent=healthy;$('#overviewAttention').textContent=attention;$('#overviewManagement').textContent=management;$('#healthPercent').textContent=all.length?Math.round(healthy/all.length*100):0;
  renderSpeciesChips();renderAttention();renderColonyList();renderFilterBadge();
}
function renderSpeciesChips(){
  const list=['all',...speciesList()];
  $('#speciesChips').innerHTML=list.map(s=>`<button class="species-chip tap ${speciesFilter===s?'active':''}" data-species="${esc(s)}"><span class="species-bee">${icon('bee')}</span>${s==='all'?'Todas espécies':esc(s)}</button>`).join('');
  $$('[data-species]').forEach(b=>b.onclick=()=>{speciesFilter=b.dataset.species;renderSpeciesChips();renderColonyList();renderFilterBadge()});
}
function renderAttention(){
  const urgent=apiaryColonies().filter(c=>c.status!=='healthy').sort((a,b)=>a.priority-b.priority);
  $('#attentionSection').style.display=urgent.length?'block':'none';
  $('#attentionCarousel').innerHTML=urgent.map(c=>{
    const kind=c.nextAction.toLowerCase().includes('alimenta')?'feeding':c.nextAction.toLowerCase().includes('tampa')?'occurrence':'inspection';
    const pct=c.status==='management'?88:66;
    return `<button class="attention-mini tap ${c.tone}" data-colony-open="${c.id}"><div class="attention-mini-top"><span class="attention-mini-icon">${icon(kind)}</span><span class="attention-mini-copy"><strong>${esc(c.name)}</strong><span>${esc(c.nextAction)}</span><small>${esc(c.species)} · ${esc(c.local)}</small></span><span class="mini-arrow">${icon('right')}</span></div><div class="attention-progress"><span style="width:${pct}%"></span></div></button>`;
  }).join('');
  $$('[data-colony-open]').forEach(b=>b.onclick=()=>openColonyDetails(b.dataset.colonyOpen));
}
function colonyCard(c){
  const visualBg={sun:'linear-gradient(145deg,#fff1bf,#f5d36f)',honey:'linear-gradient(145deg,#fff3c7,#e8be55)',rose:'linear-gradient(145deg,#f9e7df,#e4b197)',leaf:'linear-gradient(145deg,#eef3da,#b8cf96)',lilac:'linear-gradient(145deg,#f2ebf7,#cab8da)',forest:'linear-gradient(145deg,#e6efe1,#9fbb95)',amber:'linear-gradient(145deg,#fff0cc,#e8bd67)',sky:'linear-gradient(145deg,#edf5f7,#b6d3dc)'}[c.visual]||'linear-gradient(145deg,#fff3c7,#e8be55)';
  return `<article class="colony-card tap" data-card="${c.id}"><div class="colony-card-inner"><div class="colony-visual" style="--visual-bg:${visualBg}">${hiveArt(c.visual)}<span class="colony-visual-label">${esc(c.boxType)}</span></div><div class="colony-main"><div class="colony-topline"><div class="colony-name"><strong>${esc(c.name)}</strong><span>${esc(c.species)} · ${esc(c.origin)}</span></div><span class="status-badge ${c.status}"><i></i>${esc(c.statusLabel)}</span></div><p class="colony-note">${esc(c.note)}</p><div class="colony-metrics"><div class="colony-metric"><span>Última inspeção</span><strong>${esc(c.lastInspection)}</strong></div><div class="colony-metric"><span>Próxima ação</span><strong>${esc(c.nextAction)}</strong></div></div></div></div><div class="colony-footer"><span class="colony-local">${icon('pin')}${esc(c.local)}</span><span class="colony-open">Abrir colônia ${icon('right')}</span></div></article>`;
}
function renderColonyList(){
  const rows=filteredColonies();
  $('#coloniesList').classList.toggle('compact',compactView);
  $('#coloniesList').innerHTML=rows.map(colonyCard).join('');
  $('#emptyColonies').hidden=rows.length!==0;
  $('#coloniesList').style.display=rows.length?'grid':'none';
  const descriptors=[];
  if(statusFilter!=='all') descriptors.push({healthy:'saudáveis',attention:'em atenção',management:'em manejo'}[statusFilter]);
  if(speciesFilter!=='all') descriptors.push(speciesFilter);
  if(searchTerm.trim()) descriptors.push(`“${searchTerm.trim()}”`);
  $('#resultMeta').textContent=`${rows.length} ${rows.length===1?'colônia encontrada':'colônias encontradas'}${descriptors.length?' · '+descriptors.join(' · '):''}`;
  $('#listKicker').textContent=statusFilter==='all'&&speciesFilter==='all'&&!searchTerm?'TODAS':'RESULTADOS';
  $('#listTitle').textContent=statusFilter==='management'?'Precisam de manejo':statusFilter==='attention'?'Em atenção':speciesFilter!=='all'?speciesFilter:'Suas colônias';
  $$('[data-card]').forEach(b=>b.onclick=()=>openColonyDetails(b.dataset.card));
  $$('#statusChips [data-status-filter]').forEach(b=>b.classList.toggle('active',b.dataset.statusFilter===statusFilter));
}
function renderFilterBadge(){const n=(statusFilter!=='all'?1:0)+(speciesFilter!=='all'?1:0)+activeAdvancedCount();$('#filterBadge').textContent=n;$('#filterBadge').classList.toggle('show',n>0)}

function sheetHeader(kicker,title){return `<div class="sheet-head"><div><p>${kicker}</p><h3>${title}</h3></div><button class="sheet-close tap" data-close aria-label="Fechar">${icon('close')}</button></div>`}
function openRegisterSheet(preselected='',colony=''){
  const opts=[['inspection','Inspeção','Avaliar população, cria, rainha e alimento'],['feeding','Alimentação','Registrar uma alimentação realizada'],['capture','Captura','Registrar captura em uma isca'],['division','Divisão','Criar uma nova colônia a partir de outra'],['harvest','Colheita','Registrar produção de mel'],['occurrence','Ocorrência','Registrar praga, dano ou observação'],['transfer','Transferência','Mover a colônia ou trocar de caixa']];
  openSheet(`${sheetHeader('REGISTRO RÁPIDO',colony?`Registrar em ${colony}`:'O que você quer registrar?')}<div class="sheet-list">${opts.map(([k,l,h])=>`<button class="sheet-option tap ${preselected===k?'active':''}" data-register="${k}"><span class="sheet-option-icon">${icon(k)}</span><span class="sheet-option-copy"><strong>${l}</strong><small>${h}</small></span>${icon('right')}</button>`).join('')}</div><div class="sheet-tip">Inspeções, capturas, divisões e colheitas já estão disponíveis. Os demais manejos entram nas próximas etapas.</div>`);
  $$('[data-register]').forEach(b=>b.onclick=()=>{
    const type=b.dataset.register;
    closeSheet();
    if(type==='inspection') beginInspection(colony);
    else if(type==='capture') beginCapture();
    else if(type==='division') beginDivision(colony);
    else if(type==='harvest') beginHarvest(colony);
    else toast(`${b.querySelector('strong').textContent}: será conectado em uma próxima etapa.`);
  });
}
function priorityDetail(p){openSheet(`${sheetHeader('PRIORIDADE',p.colony)}<div class="sheet-list"><div class="sheet-option active"><span class="sheet-option-icon">${icon(p.kind)}</span><span class="sheet-option-copy"><strong>${p.title}</strong><small>${p.meta} · ${p.detail}</small></span></div></div><div class="sheet-tip">Sugestão: resolva esta prioridade antes dos manejos de rotina.</div><div style="display:flex;gap:8px;margin-top:14px"><button class="btn-primary tap" style="flex:1;height:44px" id="detailAction">${p.cta}</button><button class="btn-secondary tap" style="height:44px" data-close>Agora não</button></div>`);$('#detailAction').onclick=()=>{closeSheet();openRegisterSheet(p.kind,p.colony)}}
function openApiarySheet(){openSheet(`${sheetHeader('LOCAL','Escolha o meliponário')}<div class="sheet-list">${DATA.apiaries.map(a=>`<button class="sheet-option tap ${a.id===currentApiaryId?'apiary-current':''}" data-apiary="${a.id}"><span class="sheet-option-icon">${icon('hive')}</span><span class="sheet-option-copy"><strong>${esc(a.name)}</strong><small>${esc(a.subtitle)} · ${a.summary.colonies} colônias</small></span>${a.id===currentApiaryId?'✓':icon('right')}</button>`).join('')}</div>`);$$('[data-apiary]').forEach(b=>b.onclick=()=>{currentApiaryId=b.dataset.apiary;searchTerm='';statusFilter='all';speciesFilter='all';advancedFilters={origin:'all',local:'all'};$('#colonySearch').value='';closeSheet();currentPage==='home'?renderHome():renderColoniesPage();toast(`${apiary().name} selecionado.`)})}
function openNotifications(){openSheet(`${sheetHeader('ATUALIZAÇÕES','Notificações')}<div class="notification-list">${DATA.notifications.map(n=>`<div class="notification-item ${n.tone}"><span class="n-dot"></span><div><strong>${n.title}</strong><p>${n.body}</p></div><time>${n.time}</time></div>`).join('')}</div><div class="sheet-tip">As notificações locais serão conectadas à agenda em uma etapa própria.</div>`) }
function openColonyPreview(id){
  const c=DATA.colonies.find(x=>x.id===id);if(!c)return;
  const gradients={sun:['#fff1bd','#f0c64f'],honey:['#fff1c1','#e5b443'],rose:['#f8e5dd','#dca185'],leaf:['#edf4da','#b2ce90'],lilac:['#f0e8f6','#c8b4d9'],forest:['#e3eee0','#9ab88f'],amber:['#ffedc1','#e5b35a'],sky:['#e9f3f6','#b1d0d9']};
  const g=gradients[c.visual]||gradients.honey;
  openSheet(`${sheetHeader('PRÉVIA DA COLÔNIA',c.name)}<div class="colony-preview-hero" style="--preview-a:${g[0]};--preview-b:${g[1]}"><span class="preview-status"><span class="mini-dot ${c.status==='healthy'?'healthy':c.status==='attention'?'attention':'management'}"></span>${c.statusLabel}</span><h4>${esc(c.name)}</h4><p>${esc(c.species)} · ${esc(c.local)}</p><div class="preview-art">${hiveArt(c.visual)}</div></div><div class="preview-grid"><div class="preview-stat"><span>Força</span><strong>${esc(c.strength)}</strong></div><div class="preview-stat"><span>Alimento</span><strong>${esc(c.food)}</strong></div><div class="preview-stat"><span>Última inspeção</span><strong>${esc(c.lastInspection)}</strong></div><div class="preview-stat"><span>Próxima ação</span><strong>${esc(c.nextAction)}</strong></div></div><div class="sheet-tip">${esc(c.note)}</div><div class="preview-action"><button class="btn-primary tap" id="openFullColony">Abrir ficha completa</button><button class="btn-secondary tap" id="quickManage">Registrar</button></div>`);
  $('#openFullColony').onclick=()=>{closeSheet();openColonyDetails(id);};
  $('#quickManage').onclick=()=>{closeSheet();openRegisterSheet('',c.name)};
}

function dateFromOffset(days){const base=new Date(2026,8,20,12,0,0);base.setDate(base.getDate()+Number(days||0));return {day:String(base.getDate()).padStart(2,'0'),month:['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'][base.getMonth()]};}
function fullDateFromLast(c){const names={jan:'janeiro',fev:'fevereiro',mar:'março',abr:'abril',mai:'maio',jun:'junho',jul:'julho',ago:'agosto',set:'setembro',out:'outubro',nov:'novembro',dez:'dezembro'};const p=(c.lastInspection||'').split(' ');return p.length>1?`${p[0]} de ${names[p[1].toLowerCase()]||p[1]}`:c.lastInspection;}
function colonyHealth(c){return {queen:c.status==='management'?'Não confirmada':'Vista',population:c.strength||'Média',brood:c.status==='management'?'Regular':'Boa',food:c.food||'Normal',score:c.status==='healthy'?'Boa':c.status==='attention'?'Atenção':'Revisar'};}
function historyFor(c){const oi=c.origin==='Divisão'?'division':c.origin==='Captura'?'capture':'hive';const ot=c.origin==='Divisão'?'Divisão registrada':c.origin==='Captura'?'Captura da colônia':'Entrada no meliponário';return [{date:c.lastInspection.toUpperCase(),icon:'inspection',tone:c.status==='management'?'danger':c.status==='attention'?'warning':'good',title:'Inspeção',text:c.status==='healthy'?'Colônia estável e sem alterações importantes.':c.note},{date:'29 AGO',icon:'feeding',tone:'brand',title:'Alimentação',text:c.food==='Baixo'?'Reforço de alimento registrado.':'Alimentação preventiva registrada.'},{date:'18 JUN',icon:oi,tone:'neutral',title:ot,text:`Origem: ${c.origin}. Caixa ${c.boxType}.`}];}

function fullHistoryFor(c){
  const originIcon=c.origin==='Divisão'?'division':c.origin==='Captura'?'capture':'hive';
  const originTitle=c.origin==='Divisão'?'Divisão que originou a colônia':c.origin==='Captura'?'Captura registrada':'Entrada no meliponário';
  const inspectionTone=c.status==='management'?'danger':c.status==='attention'?'warning':'good';
  const sp=speciesVisual(c.species);
  return [
    {id:'h1',month:'SETEMBRO 2026',category:'inspection',date:c.lastInspection.toUpperCase(),icon:'inspection',tone:inspectionTone,title:'Inspeção completa',text:c.note||'Estado geral da colônia registrado.',meta:[`População ${c.strength}`,`Alimento ${c.food}`],image:sp.image},
    {id:'h2',month:'SETEMBRO 2026',category:'management',date:'10 SET',icon:'occurrence',tone:c.status==='healthy'?'neutral':'warning',title:'Acompanhamento da entrada',text:'Movimento e comportamento externo observados durante o manejo de rotina.',meta:['Observação','Sem abertura da caixa']},
    {id:'h3',month:'AGOSTO 2026',category:'feeding',date:'29 AGO',icon:'feeding',tone:'brand',title:'Alimentação complementar',text:c.food==='Baixo'?'Reforço alimentar registrado após queda nas reservas.':'Alimentação preventiva registrada.',meta:['Alimentação','Registro concluído']},
    {id:'h4',month:'AGOSTO 2026',category:'inspection',date:'17 AGO',icon:'inspection',tone:'good',title:'Inspeção de rotina',text:'Cria com aspecto uniforme e população ativa.',meta:['Rainha verificada','Sem pragas']},
    {id:'h5',month:'JULHO 2026',category:'management',date:'22 JUL',icon:'box',tone:'neutral',title:'Revisão da caixa',text:`Condição da caixa ${c.boxType} conferida. Estrutura sem danos relevantes.`,meta:[c.boxType,c.local]},
    {id:'h6',month:'JULHO 2026',category:'inspection',date:'05 JUL',icon:'inspection',tone:'good',title:'Inspeção geral',text:'Desenvolvimento dentro do esperado para a espécie.',meta:[c.species,'Estado estável']},
    {id:'h7',month:'JUNHO 2026',category:'origin',date:'18 JUN',icon:originIcon,tone:'brand',title:originTitle,text:`Origem cadastrada como ${c.origin}. A colônia passou a fazer parte deste meliponário.`,meta:[`Origem: ${c.origin}`,`Caixa ${c.boxType}`],image:sp.image},
    {id:'h8',month:'JUNHO 2026',category:'management',date:'18 JUN',icon:'pin',tone:'neutral',title:'Instalada no local atual',text:`Colônia posicionada em ${c.local}.`,meta:[c.local]}
  ];
}
function historyCategoryLabel(cat){return ({inspection:'Inspeção',feeding:'Alimentação',management:'Manejo',origin:'Origem'})[cat]||'Registro'}
function renderHistoryPage(){
  const c=DATA.colonies.find(x=>x.id===selectedColonyId);if(!c)return;
  const sp=speciesVisual(c.species),all=fullHistoryFor(c),rows=historyFilter==='all'?all:all.filter(x=>x.category===historyFilter);
  $('#historyTopName').textContent=c.name;$('#historySpeciesImage').src=sp.image;$('#historySpeciesImage').alt=c.species;
  $('#historyStatus').className=`history-status ${c.status}`;$('#historyStatus').innerHTML=`<i></i>${esc(c.statusLabel)}`;
  $('#historyTotalEvents').textContent=all.length;$('#historyInspectionCount').textContent=all.filter(x=>x.category==='inspection').length;$('#historyLastAge').textContent=c.lastInspectionDays===0?'Hoje':`${c.lastInspectionDays}d`;
  $$('[data-history-filter]').forEach(b=>b.classList.toggle('active',b.dataset.historyFilter===historyFilter));
  const groups=[];rows.forEach(e=>{let g=groups.find(x=>x.month===e.month);if(!g){g={month:e.month,items:[]};groups.push(g)}g.items.push(e)});
  $('#historyTimeline').innerHTML=groups.map(g=>`<section class="history-month"><h2 class="history-month-title">${esc(g.month)}</h2>${g.items.map(e=>`<article class="history-event"><div class="history-event-rail"><span class="history-event-icon ${e.tone}">${icon(e.icon)}</span></div><button class="history-event-card tap" data-history-event="${e.id}"><div class="history-event-head"><div><small>${historyCategoryLabel(e.category)}</small><strong>${esc(e.title)}</strong></div><span class="history-event-date">${esc(e.date)}</span></div><p>${esc(e.text)}</p><div class="history-event-meta">${e.meta.map(m=>`<span>${esc(m)}</span>`).join('')}</div>${e.image&&e.id==='h1'?`<div class="history-event-photo"><img src="${e.image}" alt="${esc(c.species)}" /></div>`:''}</button></article>`).join('')}</section>`).join('');
  $('#historyEmpty').hidden=rows.length>0;
  $$('[data-history-event]').forEach(b=>b.onclick=()=>openHistoryEvent(all.find(x=>x.id===b.dataset.historyEvent),c));
}
function openHistoryEvent(e,c){if(!e)return;openSheet(`${sheetHeader(historyCategoryLabel(e.category),e.title)}<div class="history-sheet-hero"><span>${icon(e.icon)}</span><div><small>${esc(e.date)} · ${esc(c.name)}</small><strong>${esc(e.title)}</strong></div></div><div class="history-sheet-body"><div class="history-sheet-row"><span>Descrição</span><strong>${esc(e.text)}</strong></div>${e.meta.map((m,i)=>`<div class="history-sheet-row"><span>${i===0?'Informação':'Detalhe'}</span><strong>${esc(m)}</strong></div>`).join('')}</div>`)}

function openColonyDetails(id){if(!DATA.colonies.find(x=>x.id===id))return;selectedColonyId=id;setPage('details');}
function renderColonyDetails(id){
 const c=DATA.colonies.find(x=>x.id===id);if(!c)return;const h=colonyHealth(c),next=dateFromOffset(c.nextActionDays),s=c.status==='healthy'?'healthy':c.status==='attention'?'attention':'management';
 $('#detailTopName').textContent=c.name;$('#detailName').textContent=c.name;$('#detailSpecies').textContent=c.species.toUpperCase();$('#detailLocal').textContent=c.local;$('#detailOrigin').textContent=c.origin;$('#detailBox').textContent=`Caixa ${c.boxType}`;$('#detailStatus').className=`profile-status ${s}`;$('#detailStatus').innerHTML=`<i></i>${esc(c.statusLabel)}`;
 $('#detailUpdated').textContent=`Atualizado há ${c.lastInspectionDays} ${c.lastInspectionDays===1?'dia':'dias'}`;$('#detailQueen').textContent=h.queen;$('#detailQueenHint').textContent=h.queen==='Vista'?'na última inspeção':'verificar no próximo manejo';$('#detailPopulation').textContent=h.population;$('#detailBrood').textContent=h.brood;$('#detailBroodHint').textContent=h.brood==='Boa'?'distribuição uniforme':'acompanhar evolução';$('#detailFood').textContent=h.food;$('#detailFoodHint').textContent=h.food==='Baixo'?'reserva abaixo do ideal':h.food==='Alto'?'boa reserva disponível':'reserva adequada';$('#foodHealthCard').className=`health-card ${h.food==='Baixo'?'health-warning':'health-good'}`;
 $('#nextManagementTitle').textContent=c.nextAction.toLowerCase().includes('alimenta')?'Revisar alimentação':'Inspeção geral';$('#nextManagementMeta').textContent=c.nextActionDays<0?`Atrasada há ${Math.abs(c.nextActionDays)} dias`:c.nextActionDays===0?'Programada para hoje':`Programada para daqui a ${c.nextActionDays} dias`;$('#nextManagementDate').innerHTML=`<strong>${next.day}</strong><span>${next.month}</span>`;$('#nextManagementCard').classList.toggle('management-overdue',c.nextActionDays<0);
 $('#lastInspectionTitle').textContent=c.status==='healthy'?'Tudo dentro do esperado':c.status==='attention'?'Um ponto pede atenção':'Manejo precisa ser retomado';$('#lastInspectionDate').textContent=fullDateFromLast(c);$('#lastInspectionAge').textContent=`há ${c.lastInspectionDays} ${c.lastInspectionDays===1?'dia':'dias'}`;$('#inspectionScore').textContent=h.score;$('#inspectionScore').className=`inspection-score ${s}`;$('#lastInspectionNote').textContent=c.note;$('#lastQueen').textContent=h.queen;$('#lastPopulation').textContent=h.population;$('#lastBrood').textContent=h.brood;$('#lastFood').textContent=h.food;
 $('#dataOrigin').textContent=c.origin;$('#dataBox').textContent=c.boxType;$('#dataPlace').textContent=c.local;$('#dataCode').textContent=`COL-${c.id.toUpperCase()}`;$('#miniTimeline').innerHTML=historyFor(c).map((e,i)=>`<article class="timeline-row"><div class="timeline-date">${esc(e.date)}</div><div class="timeline-rail"><span class="timeline-dot ${e.tone}">${icon(e.icon)}</span>${i<2?'<i></i>':''}</div><div class="timeline-copy"><strong>${esc(e.title)}</strong><p>${esc(e.text)}</p></div></article>`).join('');
 const sp=speciesVisual(c.species);$('#speciesPortraitScientific').textContent=sp.scientific;$('#speciesPortraitImage').src=sp.image;$('#speciesPortraitImage').alt=`${c.species} em composição floral`;
 renderLineage(c);
}
function openColonyMore(){const c=DATA.colonies.find(x=>x.id===selectedColonyId);if(!c)return;openSheet(`${sheetHeader('COLÔNIA',c.name)}<div class="sheet-list"><button class="sheet-option tap" data-detail-action="edit"><span class="sheet-option-icon">${icon('edit')}</span><span class="sheet-option-copy"><strong>Editar colônia</strong><small>Nome, espécie, caixa, origem e local.</small></span>${icon('right')}</button><button class="sheet-option tap" data-detail-action="qr"><span class="sheet-option-icon">${icon('qr')}</span><span class="sheet-option-copy"><strong>QR da colônia</strong><small>Gerar identificação para esta caixa.</small></span>${icon('right')}</button><button class="sheet-option tap" data-detail-action="transfer"><span class="sheet-option-icon">${icon('transfer')}</span><span class="sheet-option-copy"><strong>Mover colônia</strong><small>Trocar local ou meliponário.</small></span>${icon('right')}</button><button class="sheet-option tap danger-option" data-detail-action="archive"><span class="sheet-option-icon">${icon('occurrence')}</span><span class="sheet-option-copy"><strong>Arquivar colônia</strong><small>Manter o histórico, removendo das ativas.</small></span>${icon('right')}</button></div>`);$$('[data-detail-action]').forEach(b=>b.onclick=()=>{const m={edit:'Edição',qr:'QR Code',transfer:'Transferência',archive:'Arquivamento'};toast(`${m[b.dataset.detailAction]} será conectado na etapa correspondente.`);closeSheet()});}
function openInspectionDetail(){const c=DATA.colonies.find(x=>x.id===selectedColonyId);if(!c)return;const h=colonyHealth(c);openSheet(`${sheetHeader('INSPEÇÃO',fullDateFromLast(c))}<div class="inspection-sheet-summary"><div class="sheet-summary-row"><span>Rainha</span><strong>${esc(h.queen)}</strong></div><div class="sheet-summary-row"><span>População</span><strong>${esc(h.population)}</strong></div><div class="sheet-summary-row"><span>Cria</span><strong>${esc(h.brood)}</strong></div><div class="sheet-summary-row"><span>Alimento</span><strong>${esc(h.food)}</strong></div></div><div class="sheet-tip">${esc(c.note)}</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" id="newInspectionFromSheet">Registrar nova inspeção</button>`);$('#newInspectionFromSheet').onclick=()=>{closeSheet();openRegisterSheet('inspection',c.name)};}


const SPECIES_VISUALS={
  'Jataí':{image:'./assets/jatai.webp',scientific:'Tetragonisca angustula'},
  'Mandaçaia':{image:'./assets/mandacaia.webp',scientific:'Melipona quadrifasciata'},
  'Uruçu-amarela':{image:'./assets/urucu.webp',scientific:'Melipona flavolineata'},
  'Uruçu':{image:'./assets/urucu.webp',scientific:'Melipona spp.'}
};
function speciesVisual(species){return SPECIES_VISUALS[species]||{image:'./assets/bee-flower.webp',scientific:'Abelha nativa sem ferrão'};}

const INSPECTION_STEPS=[
  {key:'population',kicker:'INSPEÇÃO · 1 DE 6',title:'População',question:'Como está a população?',helper:'Observe a quantidade de abelhas adultas e o movimento geral da colônia.',icon:'bee',options:[['Fraca','Poucas abelhas e baixo movimento'],['Média','Quantidade e movimento moderados'],['Forte','Muitas abelhas e movimento intenso']]},
  {key:'brood',kicker:'INSPEÇÃO · 2 DE 6',title:'Cria',question:'Como está a área de cria?',helper:'Observe a quantidade, o aspecto e a distribuição dos discos de cria.',icon:'brood',options:[['Pouca','Área de cria reduzida'],['Normal','Desenvolvimento adequado'],['Boa','Área de cria ampla e uniforme']]},
  {key:'queen',kicker:'INSPEÇÃO · 3 DE 6',title:'Rainha',question:'A rainha foi vista?',helper:'Registre apenas o que você realmente conseguiu verificar nesta inspeção.',icon:'crown',options:[['Sim','Rainha vista durante a inspeção'],['Não','Rainha não foi localizada'],['Não foi possível','Não foi possível verificar']]},
  {key:'food',kicker:'INSPEÇÃO · 4 DE 6',title:'Alimento',question:'Como estão as reservas?',helper:'Avalie as reservas de mel e pólen visíveis na colônia.',icon:'feeding',options:[['Baixo','Pouca reserva disponível'],['Médio','Quantidade suficiente'],['Alto','Boa quantidade de reservas']]},
  {key:'problems',kicker:'INSPEÇÃO · 5 DE 6',title:'Problemas',question:'Encontrou algum problema?',helper:'Marque um ou mais sinais observados. Se estiver tudo normal, escolha “Nenhum”.',icon:'occurrence',multi:true,options:[['Nenhum','Nenhum problema observado'],['Forídeos','Presença ou sinais de forídeos'],['Formigas','Presença de formigas'],['Umidade','Excesso de umidade na caixa'],['Caixa danificada','Danos ou vedação inadequada'],['Outro','Outro ponto que exige atenção']]},
  {key:'notes',kicker:'INSPEÇÃO · 6 DE 6',title:'Observações',question:'Quer acrescentar algo?',helper:'Registre detalhes adicionais e defina quando deseja revisar esta colônia novamente.',icon:'edit'}
];
let inspectionState={step:0,answers:{population:'',brood:'',queen:'',food:'',problems:[],notes:'',nextDays:15},saved:false};

function beginInspection(colonyName=''){
  let c=colonyName?DATA.colonies.find(x=>x.name===colonyName):DATA.colonies.find(x=>x.id===selectedColonyId);
  if(!c){openInspectionColonyPicker();return;}
  selectedColonyId=c.id;
  inspectionState={step:0,answers:{population:'',brood:'',queen:'',food:'',problems:[],notes:'',nextDays:15},saved:false};
  setPage('inspection');
}
function openInspectionColonyPicker(){
  const rows=apiaryColonies().slice().sort((a,b)=>a.name.localeCompare(b.name,'pt-BR',{numeric:true}));
  openSheet(`${sheetHeader('INSPEÇÃO','Escolha uma colônia')}<div class="sheet-list">${rows.map(c=>`<button class="sheet-option tap" data-inspection-colony="${c.id}"><span class="sheet-option-icon">${icon('bee')}</span><span class="sheet-option-copy"><strong>${esc(c.name)}</strong><small>${esc(c.species)} · ${esc(c.local)}</small></span>${icon('right')}</button>`).join('')}</div>`);
  $$('[data-inspection-colony]').forEach(b=>b.onclick=()=>{selectedColonyId=b.dataset.inspectionColony;closeSheet();beginInspection(DATA.colonies.find(x=>x.id===selectedColonyId)?.name||'')});
}
function inspectionSelected(step){
  const a=inspectionState.answers;
  if(step.key==='problems') return a.problems.length>0;
  if(step.key==='notes') return true;
  return !!a[step.key];
}
function renderInspection(){
  const c=DATA.colonies.find(x=>x.id===selectedColonyId);if(!c)return;
  const sp=speciesVisual(c.species);
  $('#inspectionColonyName').textContent=c.name;$('#inspectionSpeciesName').textContent=c.species;$('#inspectionSpeciesImage').src=sp.image;
  $('#inspectionBackIcon').innerHTML=icon('back');$('#inspectionCloseIcon').innerHTML=icon('close');
  if(inspectionState.saved){renderInspectionSuccess(c);return;}
  const i=inspectionState.step,step=INSPECTION_STEPS[i];
  $('#inspectionStepCounter').textContent=`${i+1} de ${INSPECTION_STEPS.length}`;$('#inspectionProgressBar').style.width=`${((i+1)/INSPECTION_STEPS.length)*100}%`;
  if(step.key==='notes'){
    const a=inspectionState.answers;
    $('#inspectionContent').innerHTML=`<p class="inspection-kicker">${step.kicker}</p><h1 class="inspection-question">${step.title}</h1><p class="inspection-helper">${step.question}<br>${step.helper}</p><div class="inspection-field-group"><div class="inspection-field-label"><strong>Observações</strong><small><span id="notesCount">${a.notes.length}</span>/500</small></div><textarea class="inspection-textarea" id="inspectionNotes" maxlength="500" placeholder="Ex.: movimento forte na entrada, boa vedação, potes de alimento bem preenchidos...">${esc(a.notes)}</textarea></div><div class="inspection-next-date"><strong>Próxima inspeção</strong><p>Em quantos dias você quer revisar esta colônia?</p><div class="next-date-chips">${[7,15,30,45].map(d=>`<button class="next-date-chip tap ${a.nextDays===d?'selected':''}" data-next-days="${d}">${d} dias</button>`).join('')}</div></div><div class="inspection-summary-card">${[['População',a.population],['Cria',a.brood],['Rainha',a.queen],['Alimento',a.food],['Problemas',a.problems.join(', ')||'Nenhum']].map(([k,v])=>`<div class="inspection-review-row"><span>${k}</span><strong>${esc(v)}</strong></div>`).join('')}</div><button class="inspection-inline-action tap" id="inspectionInlineFinish">Finalizar inspeção</button><p class="inspection-inline-hint">Use a seta no topo para voltar a uma etapa anterior.</p>`;
    $('#inspectionNotes').oninput=e=>{inspectionState.answers.notes=e.target.value;$('#notesCount').textContent=e.target.value.length};
    $$('[data-next-days]').forEach(b=>b.onclick=()=>{inspectionState.answers.nextDays=+b.dataset.nextDays;renderInspection()});
    $('#inspectionInlineFinish').onclick=saveInspection;return;
  }
  const current=inspectionState.answers[step.key];
  $('#inspectionContent').innerHTML=`<p class="inspection-kicker">${step.kicker}</p><h1 class="inspection-question">${step.title}</h1><p class="inspection-helper">${step.question}<br>${step.helper}</p><div class="inspection-options">${step.options.map(([value,hint])=>{const selected=step.multi?inspectionState.answers.problems.includes(value):current===value;return `<button class="inspection-option tap ${selected?'selected':''}" data-inspection-value="${esc(value)}"><span class="inspection-option-icon">${icon(step.icon)}</span><span class="inspection-option-copy"><strong>${esc(value)}</strong><small>${esc(hint)}</small></span><span class="inspection-option-check">${icon('check')}</span></button>`}).join('')}</div>${step.multi?'<div class="inspection-problem-note">Você pode marcar mais de uma opção. Ao escolher “Nenhum”, as demais opções são desmarcadas.</div><button class="inspection-inline-action tap" id="inspectionInlineContinue" '+(inspectionState.answers.problems.length?'':'disabled')+'>Continuar</button>':''}`;
  $$('[data-inspection-value]').forEach(b=>b.onclick=()=>{
    const v=b.dataset.inspectionValue;
    if(step.multi){
      let arr=[...inspectionState.answers.problems];
      if(v==='Nenhum') arr=['Nenhum'];
      else {arr=arr.filter(x=>x!=='Nenhum');arr=arr.includes(v)?arr.filter(x=>x!==v):[...arr,v];}
      inspectionState.answers.problems=arr;
      renderInspection();
    }else{
      inspectionState.answers[step.key]=v;
      renderInspection();
      setTimeout(()=>{if(inspectionState.step<INSPECTION_STEPS.length-1){inspectionState.step++;renderInspection();}},180);
    }
  });
  const inline=$('#inspectionInlineContinue');
  if(inline) inline.onclick=inspectionGoNext;
}
function renderInspectionSuccess(c){
  const sp=speciesVisual(c.species),days=inspectionState.answers.nextDays;
  $('#inspectionStepCounter').textContent='Concluído';$('#inspectionProgressBar').style.width='100%';
  $('#inspectionContent').innerHTML=`<div class="inspection-success"><div class="success-icon">${icon('check')}</div><h1>Inspeção registrada!</h1><p>${esc(c.name)} · ${esc(c.species)}<br>Os dados desta inspeção foram aplicados à ficha.</p><div class="success-next"><span class="success-next-icon">${icon('calendar')}</span><div><small>PRÓXIMA INSPEÇÃO</small><strong>Em ${days} dias</strong></div></div><div class="success-actions"><button class="success-main tap" id="successViewColony">Ver colônia</button><button class="success-outline tap" id="successNewInspection">Nova inspeção</button></div><div class="success-bee-strip"><img src="${sp.image}" alt="${esc(c.species)}" /></div></div>`;
  $('#successViewColony').onclick=()=>setPage('details');
  $('#successNewInspection').onclick=()=>{inspectionState={step:0,answers:{population:'',brood:'',queen:'',food:'',problems:[],notes:'',nextDays:15},saved:false};renderInspection()};
}
function saveInspection(){
  const c=DATA.colonies.find(x=>x.id===selectedColonyId);if(!c)return;
  const a=inspectionState.answers,problems=a.problems.filter(x=>x!=='Nenhum');
  c.lastInspection='20 SET';c.lastInspectionDays=0;c.nextAction='Inspeção';c.nextActionDays=a.nextDays;c.strength=a.population==='Fraca'?'Fraca':a.population==='Forte'?'Forte':'Média';c.food=a.food==='Baixo'?'Baixo':a.food==='Alto'?'Alto':'Normal';
  const attention=a.population==='Fraca'||a.food==='Baixo'||a.queen==='Não'||problems.length>0;
  c.status=attention?'attention':'healthy';c.statusLabel=attention?'Atenção':'Saudável';c.tone=attention?'warning':'healthy';c.priority=attention?2:5;c.note=a.notes.trim()|| (attention?'Inspeção registrada com pontos para acompanhamento.':'Inspeção registrada sem alterações importantes.');
  DATA.inspections=DATA.inspections||[];
  DATA.inspections.push({id:'insp'+Date.now(),apiaryId:currentApiaryId,colonyId:c.id,date:'2026-09-20',population:a.population,brood:a.brood,queen:a.queen,food:a.food,problems:[...problems],notes:a.notes.trim(),nextDays:a.nextDays,status:attention?'attention':'healthy'});
  inspectionState.saved=true;renderInspection();
}
function inspectionGoBack(){
  if(inspectionState.saved){setPage('details');return;}
  if(inspectionState.step===0){setPage('details');return;}
  inspectionState.step--;renderInspection();
}
function inspectionGoNext(){
  const step=INSPECTION_STEPS[inspectionState.step];if(!inspectionSelected(step))return;
  if(inspectionState.step===INSPECTION_STEPS.length-1){saveInspection();return;}
  inspectionState.step++;renderInspection();
}


// ETAPA 6 — AGENDA
const AGENDA_BASE_DATE='2026-09-20';
const AGENDA_DAYS=[
  {date:'2026-09-20',dow:'Dom',day:'20'},
  {date:'2026-09-21',dow:'Seg',day:'21'},
  {date:'2026-09-22',dow:'Ter',day:'22'},
  {date:'2026-09-23',dow:'Qua',day:'23'},
  {date:'2026-09-24',dow:'Qui',day:'24'},
  {date:'2026-09-25',dow:'Sex',day:'25'},
  {date:'2026-09-26',dow:'Sáb',day:'26'}
];
function agendaTasks(){return (DATA.agenda||[]).filter(t=>t.apiaryId===currentApiaryId)}
function agendaDateLabel(date){
  const labels={'2026-09-20':'Hoje','2026-09-21':'Amanhã','2026-09-22':'Terça, 22 set','2026-09-23':'Quarta, 23 set','2026-09-24':'Quinta, 24 set','2026-09-25':'Sexta, 25 set','2026-09-26':'Sábado, 26 set'};
  return labels[date]||date.split('-').reverse().join('/');
}
function agendaKindLabel(kind){return ({inspection:'Inspeção',feeding:'Alimentação',trap:'Isca',division:'Divisão',harvest:'Colheita',occurrence:'Ocorrência'})[kind]||'Manejo'}
function agendaTaskTone(t){return t.status==='overdue'?'danger':t.status==='done'?'good':t.tone||'brand'}
function agendaVisibleTasks(){
  const all=agendaTasks();
  if(agendaView==='today') return all.filter(t=>t.date===AGENDA_BASE_DATE&&t.status!=='overdue');
  if(agendaView==='week') return all.filter(t=>t.date>='2026-09-20'&&t.date<='2026-09-26'&&t.status!=='overdue');
  if(agendaView==='overdue') return all.filter(t=>t.status==='overdue');
  if(agendaView==='day') return all.filter(t=>t.date===agendaSelectedDate&&t.status!=='overdue');
  return all.filter(t=>t.status!=='overdue');
}
function renderAgendaWeek(){
  const tasks=agendaTasks();
  $('#agendaWeekStrip').innerHTML=AGENDA_DAYS.map(d=>{
    const has=tasks.some(t=>t.date===d.date&&t.status!=='done');
    return `<button class="agenda-day tap ${d.date===AGENDA_BASE_DATE?'today':''} ${agendaView==='day'&&agendaSelectedDate===d.date?'selected':''}" data-agenda-date="${d.date}"><small>${d.dow}</small><strong>${d.day}</strong>${has?'<i></i>':''}</button>`;
  }).join('');
  $$('[data-agenda-date]').forEach(b=>b.onclick=()=>{agendaSelectedDate=b.dataset.agendaDate;agendaView='day';renderAgendaPage();});
}
function agendaTaskRow(t){
  const tone=agendaTaskTone(t),day=agendaDateLabel(t.date);
  return `<button class="agenda-task-row tap ${t.status==='done'?'done':''}" data-agenda-task="${t.id}"><div class="agenda-time"><strong>${esc(t.time)}</strong><small>${day==='Hoje'?'HOJE':day==='Amanhã'?'AMANHÃ':day.split(',')[0].toUpperCase()}</small></div><div class="agenda-task-copy"><strong>${esc(t.title)}</strong><span>${esc(t.task)}</span><small>${agendaKindLabel(t.kind)} · ${esc(t.note)}</small></div><div class="agenda-row-action"><i class="agenda-kind-dot ${tone}"></i><span class="agenda-task-chevron">${icon('right')}</span></div></button>`;
}
function renderAgendaPage(){
  const all=agendaTasks(),today=all.filter(t=>t.date===AGENDA_BASE_DATE&&t.status!=='done'&&t.status!=='overdue'),overdue=all.filter(t=>t.status==='overdue'),week=all.filter(t=>t.date>='2026-09-20'&&t.date<='2026-09-26'&&t.status!=='done'),done=all.filter(t=>t.status==='done');
  $('#agendaTodayCount').textContent=today.length;$('#agendaOverdueCount').textContent=overdue.length;$('#agendaWeekCount').textContent=week.length;$('#agendaDoneCount').textContent=done.length;$('#agendaAlertCount').textContent=overdue.length;
  $('#agendaHeroText').textContent=overdue.length?`Você tem ${overdue.length} manejo${overdue.length>1?'s':''} atrasado${overdue.length>1?'s':''}. Resolva primeiro o que pede atenção.`:'Nenhum manejo atrasado. Seu dia está organizado.';
  $('#agendaOverdueBlock').style.display=(overdue.length&&agendaView!=='overdue')?'block':'none';
  $('#agendaOverdueList').innerHTML=overdue.map(t=>`<button class="agenda-overdue-card tap" data-agenda-task="${t.id}"><span class="agenda-task-icon danger">${icon(t.kind)}</span><span class="agenda-task-copy"><strong>${esc(t.title)}</strong><span>${esc(t.task)}</span><small>${esc(t.note)}</small></span><span class="agenda-task-chevron">${icon('right')}</span></button>`).join('');
  renderAgendaWeek();
  $$('[data-agenda-view]').forEach(b=>b.classList.toggle('active',b.dataset.agendaView===agendaView));
  const rows=agendaVisibleTasks();
  const titles={today:['HOJE','Próximos manejos'],week:['ESTA SEMANA','Sua semana'],all:['TODOS','Todos os manejos'],overdue:['ATRASADOS','Precisam de atenção'],day:[agendaDateLabel(agendaSelectedDate).toUpperCase(),'Manejos do dia']};
  const meta=titles[agendaView]||titles.today;$('#agendaListKicker').textContent=meta[0];$('#agendaListTitle').textContent=meta[1];$('#agendaListCount').textContent=`${rows.length} ${rows.length===1?'tarefa':'tarefas'}`;
  const dates=[...new Set(rows.map(t=>t.date))].sort();
  $('#agendaGroups').innerHTML=dates.map(date=>`<section class="agenda-group"><h3 class="agenda-group-title">${esc(agendaDateLabel(date).toUpperCase())}</h3><div class="agenda-task-list">${rows.filter(t=>t.date===date).sort((a,b)=>String(a.time).localeCompare(String(b.time))).map(agendaTaskRow).join('')}</div></section>`).join('');
  $('#agendaEmpty').hidden=rows.length>0;$('#agendaGroups').style.display=rows.length?'grid':'none';
  $$('[data-agenda-task]').forEach(b=>b.onclick=()=>openAgendaTask(b.dataset.agendaTask));
}
function openAgendaTask(id){
  const t=(DATA.agenda||[]).find(x=>x.id===id);if(!t)return;
  const c=t.colonyId?DATA.colonies.find(x=>x.id===t.colonyId):null;
  openSheet(`${sheetHeader('AGENDA',t.title)}<div class="agenda-sheet-summary"><span>${icon(t.kind)}</span><div><small>${agendaKindLabel(t.kind)} · ${agendaDateLabel(t.date)} ${t.time!=='—'?'· '+t.time:''}</small><strong>${esc(t.task)}</strong></div></div><div class="agenda-sheet-info"><div><span>Meliponário</span><strong>${esc(apiary().name)}</strong></div><div><span>Referência</span><strong>${esc(t.title)}</strong></div><div><span>Status</span><strong>${t.status==='overdue'?'Atrasado':t.status==='done'?'Concluído':'Programado'}</strong></div><div><span>Observação</span><strong>${esc(t.note)}</strong></div></div><div class="agenda-sheet-actions">${t.status!=='done'?`<button class="btn-primary tap" id="agendaDoNow">${t.kind==='inspection'?'Inspecionar agora':'Registrar agora'}</button><button class="agenda-complete tap" id="agendaComplete" aria-label="Marcar como concluído">${icon('check')}</button>`:`<button class="btn-secondary tap" style="grid-column:1/3" data-close>Fechar</button>`}</div>`);
  const doNow=$('#agendaDoNow');if(doNow) doNow.onclick=()=>{closeSheet();if(c){selectedColonyId=c.id;if(t.kind==='inspection')beginInspection(c.name);else openRegisterSheet(t.kind,c.name)}else openRegisterSheet(t.kind,t.title)};
  const complete=$('#agendaComplete');if(complete) complete.onclick=()=>{t.status='done';closeSheet();renderAgendaPage();toast('Manejo marcado como concluído.')};
}
function openAgendaCreate(){
  const colonies=apiaryColonies();let draftKind='inspection';
  const markup=()=>`${sheetHeader('NOVO LEMBRETE','Adicionar à agenda')}<div class="agenda-form"><div class="agenda-form-group"><label>TIPO DE MANEJO</label><div class="agenda-type-grid"><button class="agenda-type-option tap active" data-new-kind="inspection"><span>${icon('inspection')}</span>Inspeção</button><button class="agenda-type-option tap" data-new-kind="feeding"><span>${icon('feeding')}</span>Alimentação</button><button class="agenda-type-option tap" data-new-kind="trap"><span>${icon('trap')}</span>Isca</button></div></div><div class="agenda-form-group"><label>COLÔNIA / REFERÊNCIA</label><select id="agendaNewColony"><option value="">Sem colônia</option>${colonies.map(c=>`<option value="${c.id}">${esc(c.name)} · ${esc(c.species)}</option>`).join('')}</select></div><div class="agenda-form-group"><label>DATA</label><select id="agendaNewDate">${AGENDA_DAYS.map(d=>`<option value="${d.date}">${agendaDateLabel(d.date)}</option>`).join('')}</select></div><div class="agenda-form-group"><label>HORÁRIO</label><input id="agendaNewTime" type="time" value="09:00"></div><button class="agenda-create-button tap" id="agendaCreateConfirm">Adicionar lembrete</button></div>`;
  openSheet(markup());
  $$('[data-new-kind]').forEach(b=>b.onclick=()=>{draftKind=b.dataset.newKind;$$('[data-new-kind]').forEach(x=>x.classList.toggle('active',x===b));});
  $('#agendaCreateConfirm').onclick=()=>{const cid=$('#agendaNewColony').value,date=$('#agendaNewDate').value,time=$('#agendaNewTime').value||'—',c=cid?DATA.colonies.find(x=>x.id===cid):null;const ref=c?c.name:(draftKind==='trap'?'Nova isca':'Lembrete');DATA.agenda.push({id:'new'+Date.now(),apiaryId:currentApiaryId,colonyId:cid||null,date,time,kind:draftKind,title:ref,task:agendaKindLabel(draftKind),note:'Lembrete criado manualmente.',status:'pending',tone:draftKind==='feeding'?'warning':'brand'});closeSheet();agendaView='week';renderAgendaPage();toast('Lembrete adicionado à agenda.')};
}

function openFilters(){
  const origins=[...new Set(apiaryColonies().map(c=>c.origin))].sort();
  const locals=[...new Set(apiaryColonies().map(c=>c.local))].sort();
  openSheet(`${sheetHeader('FILTROS','Encontre a colônia certa')}<div class="filter-section"><div class="filter-title"><strong>Origem</strong></div><div class="filter-options">${['all',...origins].map(v=>`<button class="filter-option tap ${advancedFilters.origin===v?'active':''}" data-filter-origin="${esc(v)}">${v==='all'?'Todas':esc(v)}</button>`).join('')}</div></div><div class="filter-section"><div class="filter-title"><strong>Local</strong></div><div class="filter-options">${['all',...locals].map(v=>`<button class="filter-option tap ${advancedFilters.local===v?'active':''}" data-filter-local="${esc(v)}">${v==='all'?'Todos':esc(v)}</button>`).join('')}</div></div><div class="filter-footer"><button class="btn-secondary tap" id="resetAdvanced">Limpar</button><button class="btn-primary tap" id="applyAdvanced">Aplicar filtros</button></div>`);
  let draft={...advancedFilters};
  const sync=()=>{$$('[data-filter-origin]').forEach(b=>b.classList.toggle('active',b.dataset.filterOrigin===draft.origin));$$('[data-filter-local]').forEach(b=>b.classList.toggle('active',b.dataset.filterLocal===draft.local))};
  $$('[data-filter-origin]').forEach(b=>b.onclick=()=>{draft.origin=b.dataset.filterOrigin;sync()});$$('[data-filter-local]').forEach(b=>b.onclick=()=>{draft.local=b.dataset.filterLocal;sync()});
  $('#resetAdvanced').onclick=()=>{draft={origin:'all',local:'all'};sync()};$('#applyAdvanced').onclick=()=>{advancedFilters=draft;closeSheet();renderColonyList();renderFilterBadge();toast('Filtros aplicados.')};
}
function openSort(){
  const opts=[['priority','Prioridade'],['name','Nome A–Z'],['recent','Inspeção mais recente'],['next','Próxima ação']];
  openSheet(`${sheetHeader('ORDENAR','Como quer organizar?')}<div class="sort-list">${opts.map(([k,l])=>`<button class="sort-option tap ${sortMode===k?'active':''}" data-sort="${k}"><span>${l}</span><span class="sort-check">${icon('check')}</span></button>`).join('')}</div>`);
  $$('[data-sort]').forEach(b=>b.onclick=()=>{sortMode=b.dataset.sort;$('#sortLabel').textContent=opts.find(x=>x[0]===sortMode)[1];closeSheet();renderColonyList();toast('Ordem atualizada.')});
}
function openAddColony(){openSheet(`${sheetHeader('NOVA COLÔNIA','Cadastrar colônia')}<div class="sheet-list"><div class="sheet-option active"><span class="sheet-option-icon">${icon('hive')}</span><span class="sheet-option-copy"><strong>Cadastro em poucos passos</strong><small>Identificação, espécie, origem, caixa, local e foto opcional.</small></span></div></div><div class="sheet-tip">O fluxo completo de cadastro será construído junto da ficha da colônia, para manter os dois consistentes.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" id="addComingSoon">Entendi</button>`);$('#addComingSoon').onclick=closeSheet}
function clearFilters(){searchTerm='';statusFilter='all';speciesFilter='all';advancedFilters={origin:'all',local:'all'};$('#colonySearch').value='';$('#searchClear').classList.remove('show');renderSpeciesChips();renderColonyList();renderFilterBadge()}


function trapArt(mode='card'){
  const wide=mode==='hero';
  return `<svg viewBox="0 0 90 118" aria-hidden="true"><defs><linearGradient id="b-${mode}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff9dc"/><stop offset=".58" stop-color="#e8c778"/><stop offset="1" stop-color="#9d7a37"/></linearGradient><linearGradient id="wrap-${mode}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6c4c23"/><stop offset="1" stop-color="#3e2a17"/></linearGradient></defs><g transform="translate(7 2)"><path d="M30 1h18v10l5 6v12H25V17l5-6V1Z" fill="#d6b36c" opacity=".75"/><rect x="23" y="25" width="32" height="77" rx="12" fill="url(#b-${mode})" stroke="#8f702f" stroke-width="1.2"/><path d="M27 41h24v44H27z" fill="url(#wrap-${mode})" opacity=".92"/><path d="M27 49h24M27 60h24M27 71h24" stroke="#dba94b" stroke-width="1.5" opacity=".55"/><path d="M33 91h12" stroke="#6b4c21" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="39" cy="106" rx="18" ry="4" fill="#6a4b1f" opacity=".12"/><g transform="translate(54 27) rotate(13)"><ellipse cx="0" cy="0" rx="4" ry="6" fill="#2f281f"/><path d="M-4-1h8M-4 2h8" stroke="#f0b62d" stroke-width="2"/><ellipse cx="-5" cy="-4" rx="4" ry="2.6" fill="#fff" opacity=".86"/><ellipse cx="5" cy="-4" rx="4" ry="2.6" fill="#fff" opacity=".86"/></g><path d="M22 36c-8 6-10 17-5 26M58 56c8 5 10 14 6 22" stroke="#6b8a45" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/><path d="M17 50c-7-2-10 1-11 6 5 0 9-2 11-6ZM63 70c7-3 11 0 13 5-5 1-10-1-13-5Z" fill="#8ca75b" opacity=".84"/></g></svg>`;
}
function currentTraps(){return (DATA.traps||[]).filter(t=>t.apiaryId===currentApiaryId)}
function trapStatusLabel(status){return ({waiting:'Aguardando',check:'Verificar',captured:'Capturada',removed:'Retirada'})[status]||status}
function filteredTraps(){
  const term=trapSearch.trim().toLocaleLowerCase('pt-BR');
  let rows=currentTraps().filter(t=>trapFilter==='all'||t.status===trapFilter).filter(t=>!term||`${t.name} ${t.local} ${t.attractant} ${t.captureSpecies||''}`.toLocaleLowerCase('pt-BR').includes(term));
  const rank={check:0,waiting:1,captured:2,removed:3};
  return rows.sort((a,b)=>(rank[a.status]-rank[b.status])||(b.days-a.days));
}
function trapDateShort(iso){if(!iso)return '—';const [y,m,d]=iso.split('-');return `${d}/${m}/${y.slice(2)}`}
function renderTrapsPage(){
  const traps=currentTraps();
  const waiting=traps.filter(t=>t.status==='waiting').length, captured=traps.filter(t=>t.status==='captured').length, check=traps.filter(t=>t.status==='check').length;
  $('#trapsTotal').textContent=traps.length;$('#trapsWaiting').textContent=waiting;$('#trapsCaptured').textContent=captured;$('#trapsCheck').textContent=check;$('#trapChipAll').textContent=traps.length;$('#trapsAlertCount').textContent=check;
  $('#trapsAttentionBlock').hidden=!check;
  const needs=traps.filter(t=>t.status==='check');
  $('#trapsAttentionList').innerHTML=needs.map(t=>`<button class="trap-attention-card tap" data-trap-id="${t.id}"><span class="trap-mini-art">${trapArt('attention')}</span><span class="trap-attention-copy"><strong>${esc(t.name)}</strong><span>${esc(t.local)}</span><small>${esc(t.note)}</small></span><span class="trap-days-badge">${t.days} dias</span></button>`).join('');
  $$('[data-trap-filter]').forEach(b=>b.classList.toggle('active',b.dataset.trapFilter===trapFilter));
  renderTrapList();
  $$('[data-trap-id]').forEach(b=>b.onclick=()=>openTrapDetail(b.dataset.trapId));
}
function renderTrapList(){
  const rows=filteredTraps(),all=currentTraps();
  const labels={all:['EM CAMPO','Suas iscas'],waiting:['AGUARDANDO','Em observação'],check:['ATENÇÃO','Para verificar'],captured:['CAPTURADAS','Capturas confirmadas']};
  const [k,t]=labels[trapFilter]||labels.all;$('#trapsListKicker').textContent=k;$('#trapsListTitle').textContent=t;$('#trapsListCount').textContent=`${rows.length} ${rows.length===1?'isca':'iscas'}`;
  $('#trapsList').innerHTML=rows.map(x=>`<button class="trap-card ${x.status} tap" data-trap-card="${x.id}"><span class="trap-card-art">${trapArt(x.id)}</span><span class="trap-card-copy"><span class="trap-card-top"><strong>${esc(x.name)}</strong><em class="trap-status ${x.status}">${trapStatusLabel(x.status)}</em></span><span>${icon('pin')} ${esc(x.local)}</span><span class="trap-card-meta"><span>${icon('calendar')} ${x.days} dias</span><span>${icon('trap')} ${esc(x.volume)}</span></span>${x.status==='captured'?`<span class="trap-card-capture">🐝 ${esc(x.captureSpecies||'Espécie registrada')}</span>`:''}</span><span class="trap-card-chevron">${icon('right')}</span></button>`).join('');
  $('#trapsEmpty').hidden=!!rows.length;
  $$('[data-trap-card]').forEach(b=>b.onclick=()=>openTrapDetail(b.dataset.trapCard));
}
function openTrapDetail(id){
  const t=(DATA.traps||[]).find(x=>x.id===id);if(!t)return;
  const captured=t.status==='captured';
  openSheet(`${sheetHeader('FICHA DA ISCA',t.name)}<div class="trap-detail-head"><div class="trap-detail-art">${trapArt('detail')}</div><div><small class="trap-detail-status ${t.status}">${trapStatusLabel(t.status)}</small><h3>${esc(t.name)}</h3><p>${esc(t.local)}</p></div></div><div class="trap-detail-info"><div><span>Instalada em</span><strong>${trapDateShort(t.installedAt)}</strong></div><div><span>Tempo em campo</span><strong>${t.days} dias</strong></div><div><span>Volume</span><strong>${esc(t.volume)}</strong></div><div><span>Atrativo</span><strong>${esc(t.attractant)}</strong></div>${captured?`<div><span>Espécie capturada</span><strong>${esc(t.captureSpecies||'Não informada')}</strong></div><div><span>Captura registrada</span><strong>${trapDateShort(t.capturedAt)}</strong></div>`:`<div><span>Última verificação</span><strong>${trapDateShort(t.lastCheck)}</strong></div>`}</div><div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(t.note||'Sem observações.')}</p></div><div class="trap-detail-actions"><button class="btn-primary tap" id="trapMainAction">${captured?'Ver captura':'Registrar verificação'}</button><button class="trap-detail-secondary tap" id="trapEditAction" aria-label="Editar">${icon('edit')}</button></div>${captured?'':`<button class="trap-capture-cta tap" id="trapCaptureAction"><span>${icon('capture')}</span><span><strong>Registrar captura</strong><small>Identificar espécie e criar a nova colônia</small></span>${icon('right')}</button>`}`);
  $('#trapMainAction').onclick=()=>{if(captured){closeSheet();openCaptureSummary(t.id)}else{t.lastCheck='2026-09-20';if(t.status==='check')t.status='waiting';closeSheet();renderTrapsPage();toast('Verificação registrada.')}};
  if($('#trapCaptureAction')) $('#trapCaptureAction').onclick=()=>{closeSheet();beginCapture(t.id)};
  $('#trapEditAction').onclick=()=>toast('Edição detalhada será conectada ao armazenamento local.');
}
function openAddTrap(){
  openSheet(`${sheetHeader('NOVA ISCA','Cadastrar isca')}<div class="trap-form"><div class="trap-form-grid"><div class="trap-form-group"><label>IDENTIFICAÇÃO</label><input id="newTrapName" value="Isca #${String(currentTraps().length+1).padStart(2,'0')}" /></div><div class="trap-form-group"><label>VOLUME</label><select id="newTrapVolume"><option>2 L</option><option>1,5 L</option><option>3 L</option></select></div></div><div class="trap-form-group"><label>LOCAL</label><input id="newTrapLocal" placeholder="Ex.: Mangueira · quintal" /></div><div class="trap-form-grid"><div class="trap-form-group"><label>DATA DE INSTALAÇÃO</label><input id="newTrapDate" type="date" value="2026-09-20" /></div><div class="trap-form-group"><label>ATRATIVO</label><select id="newTrapAttractant"><option>Atrativo artesanal</option><option>Própolis + álcool</option><option>Própolis + cera</option><option>Outro</option></select></div></div><div class="trap-form-group"><label>OBSERVAÇÃO</label><textarea id="newTrapNote" placeholder="Detalhes do ponto de instalação..."></textarea></div><button class="trap-form-submit tap" id="newTrapSave">Salvar isca</button></div>`);
  $('#newTrapSave').onclick=()=>{const name=$('#newTrapName').value.trim()||`Isca #${currentTraps().length+1}`,local=$('#newTrapLocal').value.trim()||'Local não informado',installedAt=$('#newTrapDate').value||'2026-09-20',volume=$('#newTrapVolume').value,attractant=$('#newTrapAttractant').value,note=$('#newTrapNote').value.trim()||'Sem observações.';DATA.traps.push({id:'t'+Date.now(),apiaryId:currentApiaryId,name,local,installedAt,days:0,status:'waiting',volume,attractant,note,lastCheck:null});closeSheet();trapFilter='all';renderTrapsPage();toast('Isca cadastrada.');};
}

const CAPTURE_SPECIES=[
  {key:'jatai',label:'Jataí',scientific:'Tetragonisca angustula',image:'./assets/jatai.webp'},
  {key:'mandacaia',label:'Mandaçaia',scientific:'Melipona quadrifasciata',image:'./assets/mandacaia.webp'},
  {key:'urucu',label:'Uruçu-amarela',scientific:'Melipona scutellaris',image:'./assets/urucu.webp'},
  {key:'other',label:'Outra espécie',scientific:'Identificar manualmente',image:''}
];
function captureSpeciesMeta(key=captureDraft.speciesKey){return CAPTURE_SPECIES.find(x=>x.key===key)||CAPTURE_SPECIES[3]}
function captureTrap(){return (DATA.traps||[]).find(t=>t.id===captureTrapId)}
function captureEligibleTraps(){return currentTraps().filter(t=>t.status==='waiting'||t.status==='check').sort((a,b)=>(a.status==='check'?-1:1)-(b.status==='check'?-1:1)||b.days-a.days)}
function speciesKeyFromLabel(label=''){const v=label.toLocaleLowerCase('pt-BR');if(v.includes('jata'))return 'jatai';if(v.includes('manda'))return 'mandacaia';if(v.includes('uru'))return 'urucu';return 'other'}
function suggestColonyName(species){const base=species==='Uruçu-amarela'?'Uruçu':species||'Colônia';const nums=apiaryColonies().filter(c=>(c.species||'').toLocaleLowerCase('pt-BR').includes(base.toLocaleLowerCase('pt-BR').replace('-amarela',''))||(c.name||'').toLocaleLowerCase('pt-BR').startsWith(base.toLocaleLowerCase('pt-BR'))).map(c=>{const m=(c.name||'').match(/#\s*(\d+)/);return m?Number(m[1]):0});const n=Math.max(0,...nums)+1;return `${base} #${String(n).padStart(2,'0')}`}
function captureDateLong(iso){if(!iso)return '—';const [y,m,d]=iso.split('-').map(Number);const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];return `${d} de ${months[m-1]} de ${y}`}
function resetCaptureDraft(){captureDraft={species:'',speciesKey:'',date:'2026-09-20',note:'',photo:'',createColony:true,colonyName:'',boxType:'Isca PET',newColonyId:null}}
function beginCapture(trapId=''){
  resetCaptureDraft();
  const eligible=captureEligibleTraps();
  captureTrapId=trapId&&eligible.some(t=>t.id===trapId)?trapId:(eligible[0]?.id||null);
  captureStep=trapId&&captureTrapId?2:1;
  setPage('capture');
}
function captureIdentityMarkup(){const t=captureTrap();if(!t)return `<div class="capture-identity-empty"><span>${icon('capture')}</span><div><small>NOVA CAPTURA</small><strong>Selecione uma isca</strong></div></div>`;return `<div class="capture-trap-thumb">${trapArt('capture')}</div><div class="capture-identity-copy"><span>CAPTURA · ${trapStatusLabel(t.status).toUpperCase()}</span><strong>${esc(t.name)}</strong><small>${icon('pin')} ${esc(t.local)} · ${t.days} dias em campo</small></div>`}
function renderCapture(){
  const total=4,success=captureStep===5,pct=success?100:(captureStep/total)*100;
  $('#captureProgressBar').style.width=`${pct}%`;$('#captureStepCounter').textContent=success?'Concluído':`${captureStep} de ${total}`;
  $('#captureIdentity').innerHTML=captureIdentityMarkup();
  const content=$('#captureContent');
  if(success){renderCaptureSuccess(content);return}
  if(captureStep===1) renderCaptureTrapStep(content);
  if(captureStep===2) renderCaptureSpeciesStep(content);
  if(captureStep===3) renderCaptureEvidenceStep(content);
  if(captureStep===4) renderCaptureReviewStep(content);
}
function renderCaptureTrapStep(content){
  const rows=captureEligibleTraps();
  content.innerHTML=`<p class="capture-kicker">ETAPA 1 · ISCA</p><h1 class="capture-question">Qual isca teve captura?</h1><p class="capture-helper">Escolha a isca onde você confirmou a entrada e permanência das abelhas.</p><div class="capture-trap-list">${rows.map(t=>`<button class="capture-trap-option tap ${captureTrapId===t.id?'selected':''}" data-capture-trap="${t.id}"><span class="capture-trap-option-art">${trapArt(t.id)}</span><span class="capture-trap-option-copy"><strong>${esc(t.name)}</strong><span>${esc(t.local)}</span><small>${t.days} dias em campo · ${esc(t.volume)}</small></span><span class="capture-select-mark">${icon('check')}</span></button>`).join('')}</div>${rows.length?`<button class="capture-main-button tap" id="captureContinueTrap">Continuar ${icon('right')}</button>`:`<div class="capture-empty"><span>${icon('trap')}</span><h3>Nenhuma isca disponível</h3><p>As iscas deste meliponário já estão capturadas ou não podem receber um novo registro agora.</p><button class="capture-main-button tap" id="captureReturnTraps">Voltar às iscas</button></div>`}`;
  $$('[data-capture-trap]').forEach(b=>b.onclick=()=>{captureTrapId=b.dataset.captureTrap;renderCapture()});
  if($('#captureContinueTrap')) $('#captureContinueTrap').onclick=()=>{captureStep=2;renderCapture()};
  if($('#captureReturnTraps')) $('#captureReturnTraps').onclick=()=>setPage('traps');
}
function renderCaptureSpeciesStep(content){
  content.innerHTML=`<p class="capture-kicker">ETAPA 2 · ESPÉCIE</p><h1 class="capture-question">Quem chegou na isca?</h1><p class="capture-helper">Selecione a espécie observada. A imagem ajuda a diferenciar rapidamente as espécies mais comuns do seu meliponário.</p><div class="capture-species-grid">${CAPTURE_SPECIES.map(sp=>`<button class="capture-species-card tap ${captureDraft.speciesKey===sp.key?'selected':''}" data-capture-species="${sp.key}">${sp.image?`<span class="capture-species-image"><img src="${sp.image}" alt="" /></span>`:`<span class="capture-species-image capture-species-other">${icon('bee')}</span>`}<span class="capture-species-copy"><strong>${sp.label}</strong><small>${sp.scientific}</small></span><span class="capture-species-check">${icon('check')}</span></button>`).join('')}</div><div class="capture-other-field ${captureDraft.speciesKey==='other'?'show':''}" id="captureOtherWrap"><label>QUAL ESPÉCIE?</label><input id="captureOtherSpecies" value="${captureDraft.speciesKey==='other'?esc(captureDraft.species):''}" placeholder="Ex.: Iraí" /></div><button class="capture-main-button tap" id="captureContinueSpecies" ${captureDraft.speciesKey?'':'disabled'}>Continuar ${icon('right')}</button>`;
  $$('[data-capture-species]').forEach(b=>b.onclick=()=>{const meta=captureSpeciesMeta(b.dataset.captureSpecies);captureDraft.speciesKey=meta.key;captureDraft.species=meta.key==='other'?'':meta.label;captureDraft.colonyName=captureDraft.species?suggestColonyName(captureDraft.species):'';renderCapture()});
  if($('#captureOtherSpecies')) $('#captureOtherSpecies').addEventListener('input',e=>{captureDraft.species=e.target.value.trim();captureDraft.colonyName=captureDraft.species?suggestColonyName(captureDraft.species):'';$('#captureContinueSpecies').disabled=!captureDraft.species});
  $('#captureContinueSpecies').onclick=()=>{if(!captureDraft.species)return;captureStep=3;renderCapture()};
}
function renderCaptureEvidenceStep(content){
  content.innerHTML=`<p class="capture-kicker">ETAPA 3 · REGISTRO</p><h1 class="capture-question">Registre esse momento</h1><p class="capture-helper">A foto é opcional, mas ajuda a acompanhar a entrada, o tubo e a evolução da captura depois.</p><div class="capture-photo-box ${captureDraft.photo?'has-photo':''}" id="capturePhotoBox">${captureDraft.photo?`<img src="${captureDraft.photo}" alt="Foto da captura" /><span class="capture-photo-change">${icon('camera')} Trocar foto</span>`:`<span class="capture-photo-icon">${icon('camera')}</span><strong>Adicionar foto</strong><small>Use a câmera ou escolha da galeria</small>`}<input id="capturePhotoInput" type="file" accept="image/*" capture="environment" /></div><div class="capture-fields"><label><span>DATA DA CAPTURA</span><input id="captureDate" type="date" value="${captureDraft.date}" /></label><label><span>OBSERVAÇÃO <em>opcional</em></span><textarea id="captureNote" placeholder="Ex.: entrada ativa, bom movimento, tubo já formado...">${esc(captureDraft.note)}</textarea></label></div><button class="capture-main-button tap" id="captureContinueEvidence">Continuar ${icon('right')}</button>`;
  $('#capturePhotoBox').onclick=e=>{if(e.target.id!=='capturePhotoInput')$('#capturePhotoInput').click()};
  $('#capturePhotoInput').onchange=e=>{const f=e.target.files?.[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{captureDraft.photo=reader.result;renderCapture()};reader.readAsDataURL(f)};
  $('#captureDate').onchange=e=>captureDraft.date=e.target.value||'2026-09-20';
  $('#captureNote').oninput=e=>captureDraft.note=e.target.value;
  $('#captureContinueEvidence').onclick=()=>{captureDraft.date=$('#captureDate').value||captureDraft.date;captureDraft.note=$('#captureNote').value.trim();if(!captureDraft.colonyName)captureDraft.colonyName=suggestColonyName(captureDraft.species);captureStep=4;renderCapture()};
}
function renderCaptureReviewStep(content){
  const t=captureTrap(),sp=captureSpeciesMeta();if(!t){captureStep=1;renderCapture();return}
  const image=sp.image||'./assets/bee-flower.webp';
  content.innerHTML=`<p class="capture-kicker">ETAPA 4 · FINALIZAR</p><h1 class="capture-question">Transformar em colônia?</h1><p class="capture-helper">A captura ficará vinculada à isca. Você também pode criar a nova colônia automaticamente agora.</p><article class="capture-review-hero"><img src="${image}" alt="" /><div><span>CAPTURA CONFIRMADA</span><strong>${esc(captureDraft.species)}</strong><small>${esc(t.name)} · ${captureDateLong(captureDraft.date)}</small></div></article><button class="capture-colony-toggle tap ${captureDraft.createColony?'selected':''}" id="captureCreateColony"><span class="capture-toggle-icon">${icon('hive')}</span><span><strong>Criar nova colônia</strong><small>Origem e vínculo com a isca serão preenchidos automaticamente.</small></span><i>${captureDraft.createColony?icon('check'):''}</i></button><div class="capture-colony-fields ${captureDraft.createColony?'show':''}" id="captureColonyFields"><label><span>NOME DA COLÔNIA</span><input id="captureColonyName" value="${esc(captureDraft.colonyName||suggestColonyName(captureDraft.species))}" /></label><label><span>CAIXA ATUAL</span><select id="captureBoxType"><option ${captureDraft.boxType==='Isca PET'?'selected':''}>Isca PET</option><option ${captureDraft.boxType==='INPA'?'selected':''}>INPA</option><option ${captureDraft.boxType==='Nordestina'?'selected':''}>Nordestina</option><option ${captureDraft.boxType==='Racional'?'selected':''}>Racional</option></select></label><div class="capture-origin-note">${icon('pin')} A nova colônia ficará em <strong>${esc(t.local)}</strong> e terá origem <strong>Captura</strong>.</div></div><div class="capture-review-list"><div><span>Isca</span><strong>${esc(t.name)}</strong></div><div><span>Espécie</span><strong>${esc(captureDraft.species)}</strong></div><div><span>Data</span><strong>${captureDateLong(captureDraft.date)}</strong></div><div><span>Foto</span><strong>${captureDraft.photo?'Adicionada':'Não adicionada'}</strong></div></div><button class="capture-main-button capture-confirm tap" id="captureConfirm">${icon('check')} Confirmar captura</button>`;
  $('#captureCreateColony').onclick=()=>{captureDraft.createColony=!captureDraft.createColony;if($('#captureColonyName'))captureDraft.colonyName=$('#captureColonyName').value.trim();if($('#captureBoxType'))captureDraft.boxType=$('#captureBoxType').value;renderCapture()};
  if($('#captureColonyName')) $('#captureColonyName').oninput=e=>captureDraft.colonyName=e.target.value;
  if($('#captureBoxType')) $('#captureBoxType').onchange=e=>captureDraft.boxType=e.target.value;
  $('#captureConfirm').onclick=()=>{if($('#captureColonyName'))captureDraft.colonyName=$('#captureColonyName').value.trim()||suggestColonyName(captureDraft.species);if($('#captureBoxType'))captureDraft.boxType=$('#captureBoxType').value;completeCapture()};
}
function completeCapture(){
  const t=captureTrap();if(!t)return;
  DATA.captures=DATA.captures||[];
  t.status='captured';t.captureSpecies=captureDraft.species;t.capturedAt=captureDraft.date;t.note=captureDraft.note||`Captura de ${captureDraft.species} confirmada e registrada.`;
  const rec={id:'cap'+Date.now(),apiaryId:currentApiaryId,trapId:t.id,species:captureDraft.species,speciesKey:captureDraft.speciesKey,date:captureDraft.date,note:captureDraft.note,photo:captureDraft.photo||'',colonyId:null};
  if(captureDraft.createColony){
    const key=captureDraft.speciesKey==='other'?speciesKeyFromLabel(captureDraft.species):captureDraft.speciesKey;
    const visual=key==='jatai'?'sun':key==='mandacaia'?'rose':key==='urucu'?'leaf':'honey';
    const id='c'+Date.now();
    const name=captureDraft.colonyName||suggestColonyName(captureDraft.species);
    DATA.colonies.push({id,apiaryId:currentApiaryId,name,species:captureDraft.species,speciesKey:key,status:'attention',statusLabel:'Atenção',tone:'warning',local:t.local,origin:'Captura',boxType:captureDraft.boxType||'Isca PET',lastInspection:'—',lastInspectionDays:0,nextAction:'Acompanhar captura',nextActionDays:7,food:'Não avaliado',strength:'Não avaliada',note:`Nova colônia originada da ${t.name}. Acompanhar estabilização antes da transferência.`,visual,priority:4,originTrapId:t.id});
    rec.colonyId=id;t.colonyId=id;captureDraft.newColonyId=id;selectedColonyId=id;
    const a=apiary();a.summary.colonies+=1;a.summary.attention+=1;
  }
  DATA.captures.push(rec);t.captureRecordId=rec.id;
  captureStep=5;renderCapture();
}
function renderCaptureSuccess(content){
  const t=captureTrap(),sp=captureSpeciesMeta(),img=sp.image||'./assets/bee-flower.webp';
  content.innerHTML=`<div class="capture-success"><span class="capture-success-check">${icon('check')}</span><p class="capture-kicker">CAPTURA REGISTRADA</p><h1>${esc(captureDraft.species)} confirmada</h1><p>${t?esc(t.name):'Isca'} agora está marcada como capturada.${captureDraft.newColonyId?' A nova colônia já foi criada e vinculada à origem.':''}</p><div class="capture-success-species"><img src="${img}" alt="" /><div><small>NOVA ORIGEM</small><strong>${captureDraft.newColonyId?esc(captureDraft.colonyName):esc(t?.name||'Captura')}</strong><span>${captureDateLong(captureDraft.date)}</span></div></div>${captureDraft.newColonyId?`<button class="capture-main-button tap" id="captureOpenColony">Ver nova colônia ${icon('right')}</button>`:''}<button class="capture-secondary-button tap" id="captureBackTraps">Voltar às iscas</button></div>`;
  if($('#captureOpenColony')) $('#captureOpenColony').onclick=()=>setPage('details');
  $('#captureBackTraps').onclick=()=>{trapFilter='captured';setPage('traps')};
}
function openCaptureSummary(trapId){
  const t=(DATA.traps||[]).find(x=>x.id===trapId);if(!t)return;const rec=(DATA.captures||[]).find(x=>x.trapId===trapId);const key=rec?.speciesKey||speciesKeyFromLabel(t.captureSpecies||'');const sp=CAPTURE_SPECIES.find(x=>x.key===key);const colony=t.colonyId?DATA.colonies.find(c=>c.id===t.colonyId):null;const img=sp?.image||'./assets/bee-flower.webp';
  openSheet(`${sheetHeader('CAPTURA','Registro da isca')}<div class="capture-summary-visual">${rec?.photo?`<img src="${rec.photo}" alt="Foto da captura" />`:`<img src="${img}" alt="" />`}<span>${icon('check')} Confirmada</span></div><div class="capture-summary-title"><small>${esc(t.name)}</small><h3>${esc(t.captureSpecies||rec?.species||'Espécie registrada')}</h3><p>${esc(t.local)}</p></div><div class="trap-detail-info"><div><span>Data da captura</span><strong>${captureDateLong(t.capturedAt||rec?.date)}</strong></div><div><span>Tempo em campo</span><strong>${t.days} dias</strong></div><div><span>Origem</span><strong>${esc(t.name)}</strong></div><div><span>Nova colônia</span><strong>${colony?esc(colony.name):'Ainda não criada'}</strong></div></div>${(rec?.note||t.note)?`<div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(rec?.note||t.note)}</p></div>`:''}<div class="capture-summary-actions">${colony?`<button class="btn-primary tap" id="captureSummaryColony">Abrir colônia</button>`:`<button class="btn-primary tap" id="captureSummaryCreate">Criar colônia</button>`}<button class="btn-secondary tap" data-close>Fechar</button></div>`);
  if($('#captureSummaryColony')) $('#captureSummaryColony').onclick=()=>{selectedColonyId=colony.id;closeSheet();setPage('details')};
  if($('#captureSummaryCreate')) $('#captureSummaryCreate').onclick=()=>{closeSheet();resetCaptureDraft();captureTrapId=t.id;captureDraft.species=t.captureSpecies||'';captureDraft.speciesKey=speciesKeyFromLabel(captureDraft.species);captureDraft.date=t.capturedAt||'2026-09-20';captureDraft.note=t.note||'';captureDraft.colonyName=suggestColonyName(captureDraft.species);captureStep=4;setPage('capture')};
}


function divisionsForApiary(){return (DATA.divisions||[]).filter(d=>d.apiaryId===currentApiaryId)}
function divisionMother(){return DATA.colonies.find(c=>c.id===divisionMotherId)}
function childColonies(motherId){return DATA.colonies.filter(c=>c.parentColonyId===motherId)}
function divisionDateLong(v){if(!v)return '—';const [y,m,d]=v.split('-');const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];return `${Number(d)} de ${months[Number(m)-1]} de ${y}`}
function nextSpeciesNumber(species){const nums=DATA.colonies.filter(c=>c.species===species).map(c=>{const m=c.name.match(/#\s*(\d+)/);return m?+m[1]:0});return (Math.max(0,...nums)+1)}
function suggestedDivisionName(c){return c?`${c.species.replace('-amarela','')} #${String(nextSpeciesNumber(c.species)).padStart(2,'0')}`:'Nova colônia'}
function beginDivision(colonyName=''){
  divisionMode='flow';divisionStep=1;divisionMotherId=null;divisionDraft={date:'2026-09-20',name:'',boxType:'INPA',local:'',note:''};
  if(colonyName){const c=apiaryColonies().find(x=>x.name===colonyName);if(c){divisionMotherId=c.id;divisionDraft.name=suggestedDivisionName(c);divisionDraft.local=c.local;divisionStep=2}}
  closeSheet();setPage('division');
}
function resetDivisionToHub(){divisionMode='hub';divisionStep=1;divisionMotherId=null;renderDivisionPage()}
function divisionGoBack(){if(divisionMode==='hub'){openMoreSheet();return}if(divisionStep>1&&divisionStep<4){divisionStep--;renderDivisionPage()}else{divisionMode='hub';divisionStep=1;renderDivisionPage()}}
function divisionStatusTone(c){return c.status==='healthy'?'healthy':c.status==='attention'?'attention':'management'}
function colonyMiniVisual(c){const sp=speciesVisual(c.species);return `<span class="division-colony-img"><img src="${sp.image}" alt="" /></span><span class="division-colony-copy"><small>${esc(c.species)}</small><strong>${esc(c.name)}</strong><em>${esc(c.local)}</em></span>`}
function renderDivisionPage(){
  $('#divisionBackIcon').innerHTML=icon('back');$('#divisionAddTopIcon').innerHTML=divisionMode==='hub'?icon('plus'):icon('close');
  $('#divisionHub').classList.toggle('is-hidden',divisionMode!=='hub');$('#divisionFlow').classList.toggle('is-hidden',divisionMode!=='flow');
  $('#divisionTopKicker').textContent=divisionMode==='hub'?'DIVISÕES':'NOVA DIVISÃO';$('#divisionTopTitle').textContent=divisionMode==='hub'?'Linhas do meliponário':`Etapa ${Math.min(divisionStep,3)} de 3`;
  if(divisionMode==='hub')renderDivisionHub();else renderDivisionFlow();
}
function renderDivisionHub(){
  const root=$('#divisionHub'),records=divisionsForApiary(),colonies=apiaryColonies(),mothers=[...new Set(records.map(d=>d.motherId))].map(id=>DATA.colonies.find(c=>c.id===id)).filter(Boolean),children=records.map(d=>DATA.colonies.find(c=>c.id===d.daughterId)).filter(Boolean);
  const families=mothers.map(m=>({mother:m,children:childColonies(m.id)})).filter(f=>f.children.length);
  root.innerHTML=`<section class="division-hero reveal"><div class="division-hero-copy"><p class="section-kicker">LINHAGEM DO MELIPONÁRIO</p><h1>Divisões</h1><p>Acompanhe de qual colônia cada nova família se originou.</p><button class="division-new-button tap" id="divisionNewMain">${icon('division')} Registrar nova divisão</button></div><div class="division-hero-orbit">${icon('division')}<i></i><i></i></div></section>
  <section class="division-metrics reveal delay-1"><div><strong>${records.length}</strong><span>divisões</span></div><div><strong>${mothers.length}</strong><span>colônias mãe</span></div><div><strong>${children.length}</strong><span>descendentes</span></div></section>
  <section class="division-section reveal delay-2"><div class="section-heading compact"><div><p class="section-kicker">ÁRVORE</p><h2>Famílias registradas</h2></div></div><div class="division-family-list">${families.length?families.map(f=>familyCard(f)).join(''):`<div class="division-empty-small">Nenhuma linhagem registrada neste meliponário.</div>`}</div></section>
  <section class="division-section reveal delay-3"><div class="section-heading compact"><div><p class="section-kicker">REGISTROS</p><h2>Divisões recentes</h2></div><span class="traps-list-count">${records.length}</span></div><div class="division-record-list">${records.length?records.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(divisionRecordCard).join(''):`<div class="division-empty-small">Registre a primeira divisão para começar o histórico.</div>`}</div></section><div class="bottom-spacer"></div>`;
  $('#divisionNewMain').onclick=()=>beginDivision();
  $$('[data-family-mother]').forEach(b=>b.onclick=()=>{selectedColonyId=b.dataset.familyMother;setPage('details')});
  $$('[data-division-record]').forEach(b=>b.onclick=()=>openDivisionRecord(b.dataset.divisionRecord));
}
function familyCard(f){return `<article class="division-family-card"><button class="family-mother tap" data-family-mother="${f.mother.id}">${colonyMiniVisual(f.mother)}<span class="family-role">MÃE</span></button><div class="family-stem"><span></span></div><div class="family-children">${f.children.map(c=>`<button class="family-child tap" data-family-mother="${c.id}">${colonyMiniVisual(c)}<span class="family-role child">FILHA</span></button>`).join('')}</div></article>`}
function divisionRecordCard(d){const m=DATA.colonies.find(c=>c.id===d.motherId),c=DATA.colonies.find(x=>x.id===d.daughterId);if(!m||!c)return'';return `<button class="division-record tap" data-division-record="${d.id}"><span class="division-record-icon">${icon('division')}</span><span><small>${divisionDateLong(d.date)}</small><strong>${esc(m.name)} <i>→</i> ${esc(c.name)}</strong><em>${esc(c.species)} · ${esc(d.local||c.local)}</em></span>${icon('right')}</button>`}
function openDivisionRecord(id){const d=(DATA.divisions||[]).find(x=>x.id===id);if(!d)return;const m=DATA.colonies.find(c=>c.id===d.motherId),c=DATA.colonies.find(x=>x.id===d.daughterId);if(!m||!c)return;openSheet(`${sheetHeader('DIVISÃO',divisionDateLong(d.date))}<div class="division-sheet-tree"><button class="division-sheet-node mother" id="divisionSheetMother">${colonyMiniVisual(m)}<b>MÃE</b></button><span class="division-sheet-arrow">${icon('division')}</span><button class="division-sheet-node child" id="divisionSheetChild">${colonyMiniVisual(c)}<b>FILHA</b></button></div><div class="trap-detail-info"><div><span>Espécie</span><strong>${esc(c.species)}</strong></div><div><span>Nova caixa</span><strong>${esc(d.boxType||c.boxType)}</strong></div><div><span>Local</span><strong>${esc(d.local||c.local)}</strong></div><div><span>Data</span><strong>${divisionDateLong(d.date)}</strong></div></div>${d.note?`<div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(d.note)}</p></div>`:''}`);$('#divisionSheetMother').onclick=()=>{selectedColonyId=m.id;closeSheet();setPage('details')};$('#divisionSheetChild').onclick=()=>{selectedColonyId=c.id;closeSheet();setPage('details')}}
function renderDivisionFlow(){
  const root=$('#divisionFlow'),m=divisionMother();
  if(divisionStep===1){
    const candidates=apiaryColonies().filter(c=>c.status!=='management');
    root.innerHTML=`<div class="division-flow-head"><p class="section-kicker">ETAPA 1 · ORIGEM</p><h1>Qual foi a colônia mãe?</h1><p>Selecione a colônia que deu origem à nova divisão.</p></div><div class="division-mother-list">${candidates.map(c=>`<button class="division-mother-option tap ${divisionMotherId===c.id?'selected':''}" data-division-mother="${c.id}">${colonyMiniVisual(c)}<span class="division-health ${divisionStatusTone(c)}">${esc(c.statusLabel)}</span></button>`).join('')}</div>`;
    $$('[data-division-mother]').forEach(b=>b.onclick=()=>{divisionMotherId=b.dataset.divisionMother;const c=divisionMother();divisionDraft.name=suggestedDivisionName(c);divisionDraft.local=c.local;divisionStep=2;renderDivisionPage()});return;
  }
  if(!m){divisionStep=1;renderDivisionPage();return}
  if(divisionStep===2){
    root.innerHTML=`<div class="division-flow-head"><p class="section-kicker">ETAPA 2 · NOVA COLÔNIA</p><h1>Dados da colônia filha</h1><p>A espécie é herdada da colônia mãe. Ajuste nome, caixa e local.</p></div><article class="division-selected-mother"><span>MÃE SELECIONADA</span>${colonyMiniVisual(m)}</article><div class="division-form"><label><span>NOME DA NOVA COLÔNIA</span><input id="divisionName" value="${esc(divisionDraft.name||suggestedDivisionName(m))}" /></label><div class="division-form-grid"><label><span>DATA</span><input type="date" id="divisionDate" value="${esc(divisionDraft.date)}" /></label><label><span>CAIXA</span><select id="divisionBox"><option ${divisionDraft.boxType==='INPA'?'selected':''}>INPA</option><option ${divisionDraft.boxType==='Nordestina'?'selected':''}>Nordestina</option><option ${divisionDraft.boxType==='Racional'?'selected':''}>Racional</option><option ${divisionDraft.boxType==='Isca PET'?'selected':''}>Isca PET</option></select></label></div><label><span>LOCAL</span><input id="divisionLocal" value="${esc(divisionDraft.local||m.local)}" /></label><label><span>OBSERVAÇÕES <i>opcional</i></span><textarea id="divisionNote" rows="3" placeholder="Ex.: divisão realizada com boa reserva de alimento...">${esc(divisionDraft.note)}</textarea></label></div><button class="division-main-button tap" id="divisionReview">Revisar divisão ${icon('right')}</button>`;
    $('#divisionReview').onclick=()=>{divisionDraft.name=$('#divisionName').value.trim()||suggestedDivisionName(m);divisionDraft.date=$('#divisionDate').value||'2026-09-20';divisionDraft.boxType=$('#divisionBox').value;divisionDraft.local=$('#divisionLocal').value.trim()||m.local;divisionDraft.note=$('#divisionNote').value.trim();divisionStep=3;renderDivisionPage()};return;
  }
  if(divisionStep===3){
    const sp=speciesVisual(m.species);
    root.innerHTML=`<div class="division-flow-head"><p class="section-kicker">ETAPA 3 · CONFIRMAR</p><h1>Revise a nova linhagem</h1><p>A relação ficará registrada no histórico das duas colônias.</p></div><article class="division-review-tree"><div class="division-review-node mother"><img src="${sp.image}" alt="" /><span><small>COLÔNIA MÃE</small><strong>${esc(m.name)}</strong><em>${esc(m.species)}</em></span></div><div class="division-review-connector"><i></i><span>${icon('division')}</span><b>DIVISÃO</b></div><div class="division-review-node child"><img src="${sp.image}" alt="" /><span><small>NOVA COLÔNIA</small><strong>${esc(divisionDraft.name)}</strong><em>${esc(divisionDraft.local)}</em></span></div></article><div class="division-review-info"><div><span>Data</span><strong>${divisionDateLong(divisionDraft.date)}</strong></div><div><span>Caixa</span><strong>${esc(divisionDraft.boxType)}</strong></div><div><span>Espécie</span><strong>${esc(m.species)}</strong></div><div><span>Origem</span><strong>Divisão</strong></div></div>${divisionDraft.note?`<div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(divisionDraft.note)}</p></div>`:''}<button class="division-main-button tap" id="divisionConfirm">${icon('check')} Confirmar divisão</button>`;
    $('#divisionConfirm').onclick=completeDivision;return;
  }
  const d=(DATA.divisions||[]).find(x=>x.id===divisionDraft.recordId),child=d&&DATA.colonies.find(c=>c.id===d.daughterId);root.innerHTML=`<div class="division-success"><span class="division-success-check">${icon('check')}</span><p class="section-kicker">DIVISÃO REGISTRADA</p><h1>Nova linhagem criada</h1><p>${child?`${esc(child.name)} agora está vinculada à colônia mãe ${esc(m.name)}.`:'A divisão foi salva no meliponário.'}</p>${child?`<div class="division-success-pair"><div>${colonyMiniVisual(m)}<small>MÃE</small></div><span>${icon('division')}</span><div>${colonyMiniVisual(child)}<small>FILHA</small></div></div>`:''}<button class="division-main-button tap" id="divisionOpenChild">Ver nova colônia ${icon('right')}</button><button class="division-secondary-button tap" id="divisionOpenTree">Ver árvore de divisões</button></div>`;$('#divisionOpenChild').onclick=()=>{if(child){selectedColonyId=child.id;setPage('details')}};$('#divisionOpenTree').onclick=()=>{divisionMode='hub';renderDivisionPage()};
}
function completeDivision(){
  const m=divisionMother();if(!m)return;DATA.divisions=DATA.divisions||[];const id='div'+Date.now(),childId='c'+Date.now();const sp=speciesVisual(m.species),visual=m.visual||'honey';
  const child={id:childId,apiaryId:currentApiaryId,name:divisionDraft.name||suggestedDivisionName(m),species:m.species,speciesKey:m.speciesKey||speciesKeyFromLabel(m.species),status:'attention',statusLabel:'Atenção',tone:'warning',local:divisionDraft.local||m.local,origin:'Divisão',boxType:divisionDraft.boxType||'INPA',lastInspection:'—',lastInspectionDays:0,nextAction:'Acompanhar divisão',nextActionDays:7,food:'Não avaliado',strength:'Não avaliada',note:`Nova colônia originada por divisão de ${m.name}. Acompanhar estabilização.`,visual,priority:4,parentColonyId:m.id,divisionId:id};
  DATA.colonies.push(child);DATA.divisions.push({id,apiaryId:currentApiaryId,motherId:m.id,daughterId:childId,date:divisionDraft.date,boxType:divisionDraft.boxType,local:divisionDraft.local,note:divisionDraft.note});divisionDraft.recordId=id;
  const a=apiary();a.summary.colonies+=1;a.summary.attention+=1;divisionStep=4;renderDivisionPage();
}
function renderLineage(c){
  const section=$('#lineageSection'),parent=c.parentColonyId?DATA.colonies.find(x=>x.id===c.parentColonyId):null,children=childColonies(c.id);if(!section)return;section.hidden=!parent&&!children.length;if(section.hidden)return;
  let html='';if(parent)html+=`<button class="lineage-node parent tap" data-lineage-colony="${parent.id}"><span class="lineage-role">MÃE</span>${colonyMiniVisual(parent)}</button><div class="lineage-arrow">${icon('division')}</div>`;html+=`<button class="lineage-node current"><span class="lineage-role">ATUAL</span>${colonyMiniVisual(c)}</button>`;if(children.length)html+=`<div class="lineage-branch"><span></span></div><div class="lineage-children">${children.map(x=>`<button class="lineage-node child tap" data-lineage-colony="${x.id}"><span class="lineage-role">FILHA</span>${colonyMiniVisual(x)}</button>`).join('')}</div>`;$('#lineageCard').innerHTML=html;$$('[data-lineage-colony]').forEach(b=>b.onclick=()=>openColonyDetails(b.dataset.lineageColony));
}

function apiaryHarvests(){return (DATA.harvests||[]).filter(h=>h.apiaryId===currentApiaryId)}
function harvestColony(h){return DATA.colonies.find(c=>c.id===h.colonyId)}
function harvestDateLong(date){const d=new Date(date+'T12:00:00');return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})}
function harvestDateShort(date){const d=new Date(date+'T12:00:00');return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}).replace('.','').toUpperCase()}
function harvestToMl(h){if(h.unit==='L')return Number(h.quantity)*1000;if(h.unit==='ml')return Number(h.quantity);return 0}
function formatVolume(ml){if(ml>=1000)return `${(ml/1000).toLocaleString('pt-BR',{minimumFractionDigits:ml%1000?1:0,maximumFractionDigits:2})} L`;return `${Math.round(ml)} ml`}
function displayHarvestAmount(h){const q=Number(h.quantity);return `${q.toLocaleString('pt-BR',{maximumFractionDigits:2})} ${h.unit}`}
function productionPeriodHarvests(){
  const rows=apiaryHarvests();
  if(productionPeriod==='all')return rows;
  if(productionPeriod==='year')return rows.filter(h=>h.date.startsWith('2026-'));
  if(productionPeriod==='90')return rows.filter(h=>h.date>='2026-06-22');
  return rows.filter(h=>h.date>='2026-09-01');
}
function productionSpeciesStats(rows){
  const map={};rows.forEach(h=>{const c=harvestColony(h);if(!c)return;const k=c.species;map[k]=map[k]||{species:k,ml:0,count:0,image:speciesVisual(k).image};map[k].ml+=harvestToMl(h);map[k].count++});return Object.values(map).sort((a,b)=>b.ml-a.ml)
}
function productionColonyStats(rows){
  const map={};rows.forEach(h=>{const c=harvestColony(h);if(!c)return;map[c.id]=map[c.id]||{colony:c,ml:0,count:0};map[c.id].ml+=harvestToMl(h);map[c.id].count++});return Object.values(map).sort((a,b)=>b.ml-a.ml)
}
function productionPeriodLabel(){return ({month:'Setembro',90:'Últimos 90 dias',year:'2026',all:'Todo o histórico'})[productionPeriod]}
function renderProductionPage(){
  $('#productionHub').classList.toggle('is-hidden',productionMode!=='hub');$('#productionFlow').classList.toggle('is-hidden',productionMode==='hub');
  if(productionMode==='hub')renderProductionHub();else renderHarvestFlow();
}
function renderProductionHub(){
  const rows=productionPeriodHarvests().slice().sort((a,b)=>b.date.localeCompare(a.date));
  const totalMl=rows.reduce((s,h)=>s+harvestToMl(h),0),colonyStats=productionColonyStats(rows),speciesStats=productionSpeciesStats(rows);const totalCount=rows.length;
  const root=$('#productionHub');
  root.innerHTML=`<section class="production-hero reveal"><div class="production-hero-head"><div><p class="section-kicker">PRODUÇÃO REGISTRADA</p><div class="production-total"><strong>${formatVolume(totalMl).replace(' L','').replace(' ml','')}</strong><span>${totalMl>=1000?'litros':'ml'}<br>de mel</span></div></div><span class="production-period-chip">${productionPeriodLabel()}</span></div><div class="production-hero-stats"><div class="production-stat"><strong>${totalCount}</strong><span>${totalCount===1?'colheita':'colheitas'}</span></div><div class="production-stat"><strong>${colonyStats.length}</strong><span>colônias produtoras</span></div><div class="production-stat"><strong>${speciesStats.length}</strong><span>espécies</span></div></div><div class="production-hero-note">${icon('harvest')} Os números são calculados a partir das colheitas registradas.</div></section>
  <div class="production-periods">${[['month','Este mês'],['90','90 dias'],['year','Este ano'],['all','Tudo']].map(([k,l])=>`<button class="production-period tap ${productionPeriod===k?'active':''}" data-production-period="${k}">${l}</button>`).join('')}</div>
  <section class="production-section reveal delay-1"><div class="section-heading compact"><div><p class="section-kicker">DESTAQUES</p><h2>Mais produtivas</h2></div><span class="traps-list-count">${colonyStats.length}</span></div>${colonyStats.length?`<div class="production-ranking">${colonyStats.slice(0,4).map((x,i)=>{const sp=speciesVisual(x.colony.species);return `<button class="producer-card tap" data-producer-colony="${x.colony.id}"><div class="producer-image"><img src="${sp.image}" alt=""><span class="producer-rank">${i+1}º</span></div><div class="producer-copy"><strong>${esc(x.colony.name)}</strong><span>${esc(x.colony.species)} · ${x.count} ${x.count===1?'colheita':'colheitas'}</span><span class="producer-amount"><b>${formatVolume(x.ml)}</b><small>no período</small></span></div></button>`}).join('')}</div>`:`<div class="production-empty"><span>${icon('harvest')}</span><h3>Sem produção neste período</h3><p>Altere o período ou registre uma nova colheita.</p></div>`}</section>
  <section class="production-section reveal delay-2"><div class="section-heading compact"><div><p class="section-kicker">ESPÉCIES</p><h2>Produção por espécie</h2></div></div>${speciesStats.length?`<div class="species-production-card">${speciesStats.map(s=>`<div class="species-production-row"><div class="species-production-copy"><span class="species-production-thumb"><img src="${s.image}" alt=""></span><span><strong>${esc(s.species)}</strong><small>${s.count} ${s.count===1?'registro':'registros'}</small></span></div><span class="species-production-amount">${formatVolume(s.ml)}</span><div class="species-production-bar"><span style="width:${totalMl?Math.max(8,Math.round(s.ml/totalMl*100)):0}%"></span></div></div>`).join('')}</div>`:`<div class="production-empty"><p>Nenhuma espécie com produção registrada no período.</p></div>`}</section>
  <section class="production-section reveal delay-3"><div class="section-heading compact"><div><p class="section-kicker">HISTÓRICO</p><h2>Últimas colheitas</h2></div><span class="traps-list-count">${rows.length}</span></div>${rows.length?`<div class="harvest-list">${rows.map(h=>{const c=harvestColony(h);return `<button class="harvest-row tap" data-harvest="${h.id}"><span class="harvest-icon">${icon('harvest')}</span><span class="harvest-copy"><strong>${esc(c?.name||'Colônia')}</strong><span>${esc(c?.species||'')} · ${esc(c?.local||'')}</span><small>${harvestDateShort(h.date)}</small></span><span class="harvest-amount"><strong>${displayHarvestAmount(h)}</strong><small>mel</small></span><span class="harvest-chevron">${icon('right')}</span></button>`}).join('')}</div>`:`<div class="production-empty"><span>${icon('harvest')}</span><h3>Nenhuma colheita</h3><p>Registre a primeira produção deste período.</p></div>`}</section>
  <button class="production-new-main tap" id="productionNewMain">${icon('plus')} Registrar nova colheita</button><div class="bottom-spacer"></div>`;
  $$('[data-production-period]').forEach(b=>b.onclick=()=>{productionPeriod=b.dataset.productionPeriod;renderProductionHub()});
  $$('[data-producer-colony]').forEach(b=>b.onclick=()=>{selectedColonyId=b.dataset.producerColony;setPage('details')});
  $$('[data-harvest]').forEach(b=>b.onclick=()=>openHarvestDetail(b.dataset.harvest));
  $('#productionNewMain').onclick=()=>beginHarvest();
}
function beginHarvest(colonyName=''){
  productionMode='flow';harvestStep=1;harvestColonyId=null;harvestDraft={date:'2026-09-20',quantity:'',unit:'ml',note:''};
  if(colonyName){const c=apiaryColonies().find(x=>x.name===colonyName);if(c){harvestColonyId=c.id;harvestStep=2}}
  setPage('production');
}
function harvestSelectedColony(){return DATA.colonies.find(c=>c.id===harvestColonyId)}
function productionGoBack(){if(productionMode==='hub'){openMoreSheet();return}if(harvestStep===4){productionMode='hub';harvestStep=1;renderProductionPage();return}if(harvestStep>1){harvestStep--;renderProductionPage();return}productionMode='hub';renderProductionPage()}
function renderHarvestFlow(){
  const root=$('#productionFlow'),c=harvestSelectedColony();
  if(harvestStep===1){const cols=apiaryColonies().filter(x=>x.status!=='management'||x.strength!=='Fraca');root.innerHTML=`<div class="harvest-flow-head"><p class="section-kicker">ETAPA 1 · COLÔNIA</p><h1>Qual colônia produziu?</h1><p>Escolha a caixa em que a colheita foi realizada.</p></div><div class="harvest-colony-list">${cols.map(x=>{const sp=speciesVisual(x.species);return `<button class="harvest-colony-option tap" data-harvest-colony="${x.id}"><span class="harvest-colony-thumb"><img src="${sp.image}" alt=""></span><span><strong>${esc(x.name)}</strong><span>${esc(x.species)} · ${esc(x.local)}</span></span><i>${icon('right')}</i></button>`}).join('')}</div><div class="bottom-spacer"></div>`;$$('[data-harvest-colony]').forEach(b=>b.onclick=()=>{harvestColonyId=b.dataset.harvestColony;harvestStep=2;renderProductionPage()});return}
  if(!c){harvestStep=1;renderProductionPage();return}
  const sp=speciesVisual(c.species);
  if(harvestStep===2){root.innerHTML=`<div class="harvest-flow-head"><p class="section-kicker">ETAPA 2 · COLHEITA</p><h1>Quanto foi coletado?</h1><p>Registre quantidade, unidade e data da colheita.</p></div><article class="harvest-selected-colony"><img src="${sp.image}" alt=""><div><small>COLÔNIA SELECIONADA</small><strong>${esc(c.name)}</strong><span>${esc(c.species)} · ${esc(c.local)}</span></div></article><div class="harvest-form"><label><span>QUANTIDADE</span><div class="harvest-quantity-wrap"><input id="harvestQuantity" inputmode="decimal" placeholder="Ex.: 750" value="${esc(harvestDraft.quantity)}"><b id="harvestUnitHint">${esc(harvestDraft.unit)}</b></div></label><div class="harvest-form-grid"><label><span>UNIDADE</span><select id="harvestUnit"><option ${harvestDraft.unit==='ml'?'selected':''}>ml</option><option ${harvestDraft.unit==='L'?'selected':''}>L</option><option ${harvestDraft.unit==='g'?'selected':''}>g</option><option ${harvestDraft.unit==='kg'?'selected':''}>kg</option></select></label><label><span>DATA</span><input type="date" id="harvestDate" value="${esc(harvestDraft.date)}"></label></div><label><span>OBSERVAÇÕES <i>opcional</i></span><textarea id="harvestNote" rows="4" placeholder="Ex.: colheita parcial, boa reserva mantida...">${esc(harvestDraft.note)}</textarea></label></div><button class="production-new-main tap" id="harvestReview">Revisar colheita ${icon('right')}</button><button class="production-secondary-button tap" id="harvestChangeColony">Trocar colônia</button><div class="bottom-spacer"></div>`;$('#harvestUnit').onchange=e=>{$('#harvestUnitHint').textContent=e.target.value};$('#harvestChangeColony').onclick=()=>{harvestStep=1;renderProductionPage()};$('#harvestReview').onclick=()=>{const raw=$('#harvestQuantity').value.trim().replace(',','.');const q=Number(raw);if(!q||q<=0){toast('Informe uma quantidade válida.');return}harvestDraft.quantity=String(q);harvestDraft.unit=$('#harvestUnit').value;harvestDraft.date=$('#harvestDate').value||'2026-09-20';harvestDraft.note=$('#harvestNote').value.trim();harvestStep=3;renderProductionPage()};return}
  if(harvestStep===3){const preview={quantity:Number(harvestDraft.quantity),unit:harvestDraft.unit};root.innerHTML=`<div class="harvest-flow-head"><p class="section-kicker">ETAPA 3 · CONFIRMAR</p><h1>Revise a colheita</h1><p>Confira os dados antes de registrar a produção.</p></div><article class="harvest-review-card"><div class="harvest-review-colony"><img src="${sp.image}" alt=""><div><small>COLÔNIA</small><strong>${esc(c.name)}</strong><span>${esc(c.species)} · ${esc(c.local)}</span></div></div><div class="harvest-review-amount"><span>QUANTIDADE DE MEL</span><strong>${displayHarvestAmount(preview)}</strong></div><div class="harvest-review-grid"><div><span>Data</span><strong>${harvestDateLong(harvestDraft.date)}</strong></div><div><span>Unidade</span><strong>${esc(harvestDraft.unit)}</strong></div></div>${harvestDraft.note?`<div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(harvestDraft.note)}</p></div>`:''}</article><button class="production-new-main tap" id="harvestConfirm">${icon('check')} Registrar colheita</button><button class="production-secondary-button tap" id="harvestEdit">Editar informações</button><div class="bottom-spacer"></div>`;$('#harvestEdit').onclick=()=>{harvestStep=2;renderProductionPage()};$('#harvestConfirm').onclick=completeHarvest;return}
  const h=(DATA.harvests||[]).find(x=>x.id===harvestDraft.recordId);root.innerHTML=`<div class="harvest-success"><span class="harvest-success-check">${icon('check')}</span><p class="section-kicker">COLHEITA REGISTRADA</p><h1>Produção salva</h1><p>${esc(c.name)} teve uma nova colheita adicionada ao histórico de produção.</p><div class="harvest-success-summary"><span>${harvestDateLong(h?.date||harvestDraft.date)}<br>${esc(c.species)}</span><strong>${h?displayHarvestAmount(h):''}</strong></div><button class="production-new-main tap" id="harvestBackHub">Ver produção</button><button class="production-secondary-button tap" id="harvestOpenColony">Abrir ficha da colônia</button></div>`;$('#harvestBackHub').onclick=()=>{productionMode='hub';productionPeriod='month';renderProductionPage()};$('#harvestOpenColony').onclick=()=>{selectedColonyId=c.id;setPage('details')};
}
function completeHarvest(){const c=harvestSelectedColony();if(!c)return;DATA.harvests=DATA.harvests||[];const id='h'+Date.now();const h={id,apiaryId:currentApiaryId,colonyId:c.id,date:harvestDraft.date,quantity:Number(harvestDraft.quantity),unit:harvestDraft.unit,note:harvestDraft.note};DATA.harvests.push(h);harvestDraft.recordId=id;harvestStep=4;renderProductionPage()}
function openHarvestDetail(id){const h=(DATA.harvests||[]).find(x=>x.id===id);if(!h)return;const c=harvestColony(h);openSheet(`${sheetHeader('COLHEITA',c?.name||'Produção')}<div class="harvest-detail-hero"><span>${icon('harvest')}</span><strong>${displayHarvestAmount(h)}</strong><small>${harvestDateLong(h.date)}</small></div><div class="trap-detail-info"><div><span>Espécie</span><strong>${esc(c?.species||'—')}</strong></div><div><span>Local</span><strong>${esc(c?.local||'—')}</strong></div><div><span>Unidade</span><strong>${esc(h.unit)}</strong></div><div><span>Registro</span><strong>${esc(c?.name||'—')}</strong></div></div>${h.note?`<div class="trap-detail-note"><small>OBSERVAÇÕES</small><p>${esc(h.note)}</p></div>`:''}<button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" id="harvestDetailColony">Abrir colônia</button>`);$('#harvestDetailColony').onclick=()=>{if(c){selectedColonyId=c.id;closeSheet();setPage('details')}}}


function reportPeriodStart(){
  if(reportsPeriod==='all')return '0000-01-01';
  if(reportsPeriod==='year')return '2026-01-01';
  if(reportsPeriod==='90')return '2026-06-22';
  return '2026-09-01';
}
function reportPeriodLabel(){return ({month:'Este mês',90:'90 dias',year:'Este ano',all:'Todo o histórico'})[reportsPeriod]||'Este ano'}
function reportDateInPeriod(date){return !!date && date>=reportPeriodStart()}
function reportCaptured(){return (DATA.traps||[]).filter(t=>t.apiaryId===currentApiaryId&&t.status==='captured'&&reportDateInPeriod(t.capturedAt||t.installedAt))}
function reportDivisions(){return (DATA.divisions||[]).filter(d=>d.apiaryId===currentApiaryId&&reportDateInPeriod(d.date))}
function reportHarvests(){return (DATA.harvests||[]).filter(h=>h.apiaryId===currentApiaryId&&reportDateInPeriod(h.date))}
function reportAgenda(){return (DATA.agenda||[]).filter(a=>a.apiaryId===currentApiaryId&&reportDateInPeriod(a.date))}
function reportSpeciesStats(){
  const cols=apiaryColonies(); const m=new Map();
  cols.forEach(c=>m.set(c.species,(m.get(c.species)||0)+1));
  return [...m.entries()].map(([species,count])=>({species,count,pct:cols.length?Math.round(count/cols.length*100):0,visual:speciesVisual(species)})).sort((a,b)=>b.count-a.count);
}
function reportOriginStats(){
  const cols=apiaryColonies(); const keys=['Captura','Divisão','Compra','Presente','Outro']; const map={};
  cols.forEach(c=>{const k=keys.includes(c.origin)?c.origin:'Outro';map[k]=(map[k]||0)+1});
  return Object.entries(map).map(([origin,count])=>({origin,count,pct:cols.length?Math.round(count/cols.length*100):0})).sort((a,b)=>b.count-a.count);
}
function reportMonthKey(date){return String(date||'').slice(0,7)}
function reportMonthLabel(key){const [y,m]=key.split('-');return ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'][Number(m)-1]||m}
function reportActivitySeries(){
  const keys=['2026-04','2026-05','2026-06','2026-07','2026-08','2026-09'];
  const rows=keys.map(k=>({key:k,label:reportMonthLabel(k),captures:0,divisions:0,harvests:0,tasks:0,total:0})); const by=Object.fromEntries(rows.map(r=>[r.key,r]));
  (DATA.traps||[]).filter(t=>t.apiaryId===currentApiaryId&&t.status==='captured').forEach(t=>{const r=by[reportMonthKey(t.capturedAt)];if(r)r.captures++});
  (DATA.divisions||[]).filter(d=>d.apiaryId===currentApiaryId).forEach(d=>{const r=by[reportMonthKey(d.date)];if(r)r.divisions++});
  (DATA.harvests||[]).filter(h=>h.apiaryId===currentApiaryId).forEach(h=>{const r=by[reportMonthKey(h.date)];if(r)r.harvests++});
  (DATA.agenda||[]).filter(a=>a.apiaryId===currentApiaryId&&a.status==='completed').forEach(a=>{const r=by[reportMonthKey(a.date)];if(r)r.tasks++});
  rows.forEach(r=>r.total=r.captures+r.divisions+r.harvests+r.tasks); return rows;
}
function reportHealthStats(){
  const cols=apiaryColonies(), out={healthy:0,attention:0,management:0};
  cols.forEach(c=>{if(out[c.status]!=null)out[c.status]++});
  const total=cols.length||1; return {...out,total:cols.length,healthyPct:Math.round(out.healthy/total*100),attentionPct:Math.round(out.attention/total*100),managementPct:Math.round(out.management/total*100)};
}
function renderReportsPage(){
  const root=$('#reportsRoot'); if(!root)return;
  const h=reportHealthStats(), captures=reportCaptured(), divisions=reportDivisions(), harvests=reportHarvests(), agenda=reportAgenda();
  const harvestMl=harvests.reduce((s,x)=>s+harvestToMl(x),0), species=reportSpeciesStats(), origins=reportOriginStats();
  const completed=agenda.filter(a=>a.status==='completed').length, overdue=agenda.filter(a=>a.status==='overdue').length;
  const allTraps=(DATA.traps||[]).filter(t=>t.apiaryId===currentApiaryId), captureRate=allTraps.length?Math.round(allTraps.filter(t=>t.status==='captured').length/allTraps.length*100):0;
  const productionByColony=productionColonyStats(harvests), topProducer=productionByColony[0];
  const activity=reportActivitySeries(), maxActivity=Math.max(1,...activity.map(x=>x.total));
  const commonSpecies=species[0];
  const summaryCards=[
    ['capture',captures.length,'capturas','Iscas com captura confirmada'],
    ['division',divisions.length,'divisões','Novas colônias por divisão'],
    ['harvest',harvests.length,'colheitas',formatVolume(harvestMl)+' registrados'],
    ['check',completed,'concluídos',overdue?overdue+' tarefa(s) atrasada(s)':'Agenda em dia']
  ];
  root.innerHTML=`
  <section class="reports-hero reveal">
    <div class="reports-hero-copy"><p class="section-kicker">VISÃO GERAL</p><h1>Seu meliponário<br><span>em números</span></h1><p>${esc(apiary().name)} · ${reportPeriodLabel()}</p></div>
    <div class="reports-health-ring" style="--health:${h.healthyPct}"><div><strong>${h.healthyPct}%</strong><small>saudáveis</small></div></div>
    <div class="reports-hero-bottom"><div><strong>${h.total}</strong><span>colônias<br>ativas</span></div><span class="reports-period-chip">${reportPeriodLabel()}</span></div>
  </section>
  <div class="reports-periods">${[['month','Este mês'],['90','90 dias'],['year','Este ano'],['all','Tudo']].map(([k,l])=>`<button class="reports-period tap ${reportsPeriod===k?'active':''}" data-reports-period="${k}">${l}</button>`).join('')}</div>
  <section class="reports-section reveal delay-1"><div class="section-heading compact"><div><p class="section-kicker">NO PERÍODO</p><h2>Movimentação</h2></div></div><div class="reports-summary-grid">${summaryCards.map(([ic,n,label,meta])=>`<article class="report-summary-card"><span class="report-summary-icon">${icon(ic)}</span><div><strong>${n}</strong><span>${label}</span><small>${meta}</small></div></article>`).join('')}</div></section>
  <section class="reports-section reveal delay-2"><div class="section-heading compact"><div><p class="section-kicker">SAÚDE ATUAL</p><h2>Estado das colônias</h2></div><button class="text-button tap" id="reportsOpenColonies">Ver colônias</button></div><article class="reports-health-card"><div class="reports-health-header"><div><strong>${h.healthyPct}%</strong><span>do meliponário está saudável</span></div><span>${h.healthy} de ${h.total}</span></div><div class="reports-health-bar"><span class="healthy" style="width:${h.healthyPct}%"></span><span class="attention" style="width:${h.attentionPct}%"></span><span class="management" style="width:${h.managementPct}%"></span></div><div class="reports-health-legend"><div><i class="healthy"></i><strong>${h.healthy}</strong><span>Saudáveis</span></div><div><i class="attention"></i><strong>${h.attention}</strong><span>Atenção</span></div><div><i class="management"></i><strong>${h.management}</strong><span>Manejo</span></div></div></article></section>
  <section class="reports-section reveal delay-3"><div class="section-heading compact"><div><p class="section-kicker">ATIVIDADE</p><h2>Últimos meses</h2></div><span class="reports-mini-label">registros</span></div><article class="reports-chart-card"><div class="reports-bars">${activity.map(r=>`<div class="reports-bar-col"><div class="reports-bar-value">${r.total||''}</div><div class="reports-bar-track"><span style="height:${Math.max(r.total?18:4,Math.round(r.total/maxActivity*100))}%"></span></div><small>${r.label}</small></div>`).join('')}</div><div class="reports-chart-legend"><span><i></i>Capturas, divisões, colheitas e manejos concluídos</span></div></article></section>
  <section class="reports-section reveal delay-4"><div class="section-heading compact"><div><p class="section-kicker">COMPOSIÇÃO</p><h2>Espécies do meliponário</h2></div><span class="reports-mini-label">${species.length} espécies</span></div><article class="reports-species-card">${species.slice(0,6).map(s=>`<div class="reports-species-row"><span class="reports-species-thumb"><img src="${s.visual.image}" alt=""></span><div class="reports-species-main"><div><strong>${esc(s.species)}</strong><span>${s.count} colônias · ${s.pct}%</span></div><div class="reports-species-track"><span style="width:${Math.max(7,s.pct)}%"></span></div></div></div>`).join('')}</article></section>
  <section class="reports-section reveal delay-5"><div class="section-heading compact"><div><p class="section-kicker">ORIGEM</p><h2>Como suas colônias chegaram</h2></div></div><div class="reports-origin-grid">${origins.map(o=>`<article><strong>${o.count}</strong><span>${esc(o.origin)}</span><small>${o.pct}% do total</small></article>`).join('')}</div></section>
  <section class="reports-section reveal delay-5"><div class="section-heading compact"><div><p class="section-kicker">PRODUÇÃO</p><h2>Resultado das colheitas</h2></div><button class="text-button tap" id="reportsOpenProduction">Ver produção</button></div><article class="reports-production-card"><div class="reports-production-total"><span>${icon('harvest')}</span><div><small>TOTAL NO PERÍODO</small><strong>${formatVolume(harvestMl)}</strong><em>${harvests.length} ${harvests.length===1?'colheita':'colheitas'}</em></div></div>${topProducer?`<div class="reports-top-producer"><span class="reports-species-thumb"><img src="${speciesVisual(topProducer.colony.species).image}" alt=""></span><div><small>MAIS PRODUTIVA</small><strong>${esc(topProducer.colony.name)}</strong><span>${formatVolume(topProducer.ml)} · ${esc(topProducer.colony.species)}</span></div></div>`:''}</article></section>
  <section class="reports-section reveal delay-5"><div class="section-heading compact"><div><p class="section-kicker">LEITURA RÁPIDA</p><h2>O que os dados mostram</h2></div></div><div class="reports-insights"><article><span class="good">${icon('check')}</span><div><strong>${h.healthyPct}% saudáveis</strong><p>${h.healthy} das ${h.total} colônias estão em estado saudável agora.</p></div></article>${commonSpecies?`<article><span class="brand">${icon('bee')}</span><div><strong>${esc(commonSpecies.species)} é a espécie mais presente</strong><p>${commonSpecies.count} colônias, representando ${commonSpecies.pct}% do meliponário.</p></div></article>`:''}<article><span class="warning">${icon('trap')}</span><div><strong>${captureRate}% das iscas estão capturadas</strong><p>${allTraps.filter(t=>t.status==='captured').length} de ${allTraps.length} iscas cadastradas têm captura confirmada.</p></div></article></div></section>
  <div class="reports-local-note">${icon('history')} Todos estes indicadores são calculados localmente a partir dos registros deste aparelho.</div><div class="bottom-spacer"></div>`;
  $$('[data-reports-period]').forEach(b=>b.onclick=()=>{reportsPeriod=b.dataset.reportsPeriod;renderReportsPage()});
  $('#reportsOpenColonies').onclick=()=>setPage('colonies');
  $('#reportsOpenProduction').onclick=()=>{productionMode='hub';setPage('production')};
}


function toolTitle(mode){return {apiaries:['ORGANIZAÇÃO','Seus meliponários'],qr:['IDENTIFICAÇÃO','QR das colônias'],library:['BIBLIOTECA','Aprender e consultar'],pdf:['BIBLIOTECA','Visualizar PDF'],settings:['PREFERÊNCIAS','Configurações'],backup:['DADOS LOCAIS','Backup e privacidade']}[mode]||['FERRAMENTAS','Mais'];}
function selectTool(mode){toolsMode=mode;closeSheet();setPage('tools')}
function renderToolsPage(){
  const root=$('#toolsRoot'), [kicker,title]=toolTitle(toolsMode); $('#toolsTopKicker').textContent=kicker; $('#toolsTopTitle').textContent=title;
  if(toolsMode==='apiaries') renderApiariesTool(root);
  else if(toolsMode==='qr') renderQrTool(root);
  else if(toolsMode==='library') renderLibraryTool(root);
  else if(toolsMode==='pdf') renderLibraryPdf(root);
  else if(toolsMode==='settings') renderSettingsTool(root);
  else renderBackupTool(root);
}
function renderApiariesTool(root){
  const cards=DATA.apiaries.map(a=>{const current=a.id===currentApiaryId;return `<article class="apiary-tool-card ${current?'current':''}"><div class="apiary-tool-art">${hiveArt(a.id==='principal'?'honey':'leaf')}</div><div class="apiary-tool-main"><span class="apiary-tool-kicker">${current?'EM USO':'MELIPONÁRIO'}</span><strong>${esc(a.name)}</strong><small>${esc(a.subtitle||'')}</small><div class="apiary-tool-stats"><span><b>${a.summary.colonies}</b> colônias</span><span><i class="healthy"></i>${a.summary.healthy} saudáveis</span></div></div>${current?`<span class="apiary-current-badge">Atual</span>`:`<button class="apiary-use tap" data-use-apiary="${a.id}">Usar</button>`}</article>`}).join('');
  root.innerHTML=`<section class="tool-hero apiary-hero reveal"><div><p class="section-kicker">SEUS LOCAIS</p><h1>Organize por meliponário</h1><p>Separe as colônias por casa, sítio ou propriedade sem misturar os manejos.</p></div><span class="tool-hero-icon">${icon('hive')}</span></section><section class="tool-section reveal delay-1"><div class="section-heading compact"><div><p class="section-kicker">CADASTRADOS</p><h2>${DATA.apiaries.length} meliponários</h2></div><button class="tool-add tap" id="newApiaryTool">${icon('plus')} Novo</button></div><div class="apiary-tool-list">${cards}</div></section><section class="tool-section reveal delay-2"><article class="tool-note"><span>${icon('pin')}</span><div><strong>Meliponário ativo</strong><p>Home, Colônias, Agenda e Relatórios passam a mostrar os dados do local escolhido.</p></div></article></section><div class="bottom-spacer"></div>`;
  $$('[data-use-apiary]').forEach(b=>b.onclick=()=>{currentApiaryId=b.dataset.useApiary;renderToolsPage();renderHome();toast('Meliponário alterado.')});
  $('#newApiaryTool').onclick=openCreateApiaryTool;
}
function openCreateApiaryTool(){openSheet(`${sheetHeader('NOVO LOCAL','Criar meliponário')}<div class="tool-form"><label>Nome<input id="newApiaryName" placeholder="Ex.: Meliponário do Sítio"></label><label>Descrição ou local<input id="newApiaryPlace" placeholder="Ex.: Sítio · Zona rural"></label><button class="btn-primary tap" id="saveNewApiary">Criar meliponário</button></div>`);$('#saveNewApiary').onclick=()=>{const name=$('#newApiaryName').value.trim();if(!name){toast('Digite um nome.');return}const id='apiary-'+Date.now();DATA.apiaries.push({id,name,subtitle:$('#newApiaryPlace').value.trim()||'Novo local',summary:{colonies:0,healthy:0,attention:0,management:0,weeklyDone:0,weeklyTotal:0},priorities:[],upcoming:[],insight:{title:'Novo meliponário',body:'Cadastre a primeira colônia para começar.'}});currentApiaryId=id;closeSheet();renderToolsPage();toast('Meliponário criado.')};}
function pseudoQrForColony(c){return `./assets/qr-${c.id}.png`}
function renderQrTool(root){
  const colonies=apiaryColonies(); if(!colonies.find(c=>c.id===qrColonyId)) qrColonyId=colonies[0]?.id||DATA.colonies[0]?.id; const c=DATA.colonies.find(x=>x.id===qrColonyId)||DATA.colonies[0]; const uri=`meliponario://colony/${c.id}`;
  root.innerHTML=`<section class="tool-hero qr-hero reveal"><div><p class="section-kicker">ACESSO RÁPIDO</p><h1>Uma etiqueta por caixa</h1><p>Escaneie o código no meliponário e abra diretamente a ficha da colônia.</p></div><span class="tool-hero-icon">${icon('qr')}</span></section><section class="tool-section reveal delay-1"><label class="tool-select-label">COLÔNIA<select id="qrColonySelect">${colonies.map(x=>`<option value="${x.id}" ${x.id===c.id?'selected':''}>${esc(x.name)} · ${esc(x.species)}</option>`).join('')}</select></label><article class="qr-card"><div class="qr-image-wrap"><img src="${pseudoQrForColony(c)}" alt="QR da ${esc(c.name)}"></div><div class="qr-card-copy"><span>CÓDIGO LOCAL</span><h2>${esc(c.name)}</h2><p>${esc(c.species)} · ${esc(c.local)}</p><code>${uri}</code></div></article><div class="qr-actions"><button class="btn-primary tap" id="qrDownload">${icon('download')} Salvar etiqueta</button><button class="tool-secondary tap" id="qrOpenColony">${icon('hive')} Ver colônia</button></div></section><section class="tool-section reveal delay-2"><article class="tool-note"><span>${icon('shield')}</span><div><strong>O QR não guarda seus dados</strong><p>Ele contém apenas o identificador local da colônia. As informações continuam no aparelho.</p></div></article></section><div class="bottom-spacer"></div>`;
  $('#qrColonySelect').onchange=e=>{qrColonyId=e.target.value;renderQrTool(root)};
  $('#qrOpenColony').onclick=()=>{selectedColonyId=c.id;setPage('details')};
  $('#qrDownload').onclick=()=>{const a=document.createElement('a');a.href=pseudoQrForColony(c);a.download=`qr-${c.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.png`;a.click();toast('Etiqueta preparada para salvar.')};
}
function renderLibraryTool(root){
  const cats=[['all','Todos','book'],['materials','PDFs','download'],['species','Espécies','bee'],['capture','Captura','trap'],['feeding','Alimentação','feeding'],['division','Divisão','division'],['pests','Pragas','occurrence'],['boxes','Caixas','box'],['plants','Floradas','sparkle']];
  const resources=(libraryCategory==='all'||libraryCategory==='materials')?LIBRARY_RESOURCES:[];
  const articles=libraryCategory==='materials'?[]:LIBRARY_ARTICLES.filter(a=>libraryCategory==='all'||a.category===libraryCategory);
  const resourceBlock=resources.length?`<section class="tool-section library-materials-section reveal delay-2"><div class="section-heading compact"><div><p class="section-kicker">PROJETOS E BÔNUS</p><h2>Materiais em PDF</h2></div><span class="library-online-pill">Online</span></div><div class="library-resource-list">${resources.map(r=>`<article class="library-resource-card"><button class="library-resource-open tap" data-library-resource="${r.id}"><span class="library-resource-icon">${icon(r.id==='pdf-projects'?'box':r.id==='pdf-attractants'?'trap':'book')}</span><span class="library-resource-copy"><small>${esc(r.kind)}</small><strong>${esc(r.title)}</strong><em>${esc(r.subtitle)}</em></span>${icon('right')}</button><div class="library-resource-actions"><button class="tap" data-library-resource="${r.id}">${icon('book')} Visualizar</button><a class="tap" href="${driveDownloadUrl(r.fileId)}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" download>${icon('download')} Baixar PDF</a></div></article>`).join('')}</div><p class="library-online-note">Os PDFs estão hospedados no Google Drive e precisam de internet para abrir ou baixar.</p></section>`:'';
  const articleBlock=articles.length?`<section class="tool-section reveal delay-3"><div class="${resources.length?'section-heading compact':''}">${resources.length?'<div><p class="section-kicker">CONSULTA OFFLINE</p><h2>Guias rápidos</h2></div>':''}</div><div class="library-list">${articles.map(a=>`<button class="library-card tap" data-library-id="${a.id}"><span class="library-card-icon">${icon(a.icon)}</span><span><strong>${esc(a.title)}</strong><small>${esc(a.subtitle)}</small></span>${icon('right')}</button>`).join('')}</div></section>`:'';
  root.innerHTML=`<section class="tool-hero library-hero reveal"><div><p class="section-kicker">BIBLIOTECA</p><h1>Biblioteca de campo</h1><p>Guias rápidos offline e seus projetos em PDF reunidos no aplicativo.</p></div><span class="tool-hero-icon">${icon('book')}</span></section><div class="library-chips reveal delay-1">${cats.map(([k,l,ic])=>`<button class="library-chip tap ${libraryCategory===k?'active':''}" data-library-cat="${k}">${icon(ic)} ${l}</button>`).join('')}</div>${resourceBlock}${articleBlock}<div class="bottom-spacer"></div>`;
  $$('[data-library-cat]').forEach(b=>b.onclick=()=>{libraryCategory=b.dataset.libraryCat;renderLibraryTool(root)});
  $$('[data-library-id]').forEach(b=>b.onclick=()=>openLibraryArticle(b.dataset.libraryId));
  $$('[data-library-resource]').forEach(b=>b.onclick=e=>{if(e.currentTarget.tagName==='A')return;openLibraryResource(b.dataset.libraryResource)});
}
function openLibraryArticle(id){const a=LIBRARY_ARTICLES.find(x=>x.id===id);if(!a)return;openSheet(`${sheetHeader('BIBLIOTECA',a.title)}<div class="library-article"><span class="library-article-icon">${icon(a.icon)}</span><p class="library-article-subtitle">${esc(a.subtitle)}</p><p>${esc(a.body)}</p><div class="sheet-tip">Este conteúdo faz parte da biblioteca local do aplicativo e fica disponível offline.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:14px" data-close>Fechar</button></div>`)}
function openLibraryResource(id){const r=LIBRARY_RESOURCES.find(x=>x.id===id);if(!r)return;libraryResourceId=id;toolsMode='pdf';renderToolsPage();}
function renderLibraryPdf(root){
  const r=LIBRARY_RESOURCES.find(x=>x.id===libraryResourceId)||LIBRARY_RESOURCES[0]; libraryResourceId=r.id;
  $('#toolsTopKicker').textContent=r.kind.toUpperCase(); $('#toolsTopTitle').textContent=r.title;
  root.innerHTML=`<section class="pdf-viewer-shell reveal"><div class="pdf-viewer-meta"><div><span>${icon('book')}</span><div><small>${esc(r.kind)}</small><strong>${esc(r.title)}</strong></div></div><span class="pdf-online-badge">Online</span></div><div class="pdf-viewer-actions"><a class="btn-primary tap" href="${driveViewUrl(r.fileId)}" target="_blank" rel="noopener">${icon('book')} Abrir no Drive</a><a class="tool-secondary tap" href="${driveDownloadUrl(r.fileId)}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" download>${icon('download')} Baixar PDF</a></div><div class="pdf-frame-wrap"><iframe class="pdf-frame" src="${drivePreviewUrl(r.fileId)}" title="${esc(r.title)}" loading="eager" allow="fullscreen"></iframe><div class="pdf-frame-fallback"><strong>Não conseguiu carregar?</strong><span>Use “Abrir no Drive” acima.</span></div></div><p class="pdf-viewer-note">A visualização usa o Google Drive dentro do PWA e precisa de internet.</p></section><div class="bottom-spacer"></div>`;
}
function renderSettingsTool(root){
  root.innerHTML=`<section class="tool-hero settings-hero reveal"><div><p class="section-kicker">SEU JEITO DE USAR</p><h1>Configurações</h1><p>Ajuste padrões do aplicativo sem complicar o manejo.</p></div><span class="tool-hero-icon">${icon('settings')}</span></section><section class="tool-section reveal delay-1"><div class="settings-group"><p class="section-kicker">PERFIL</p><label class="settings-row input-row"><span><strong>Seu nome</strong><small>Usado na saudação da Home</small></span><input id="settingUserName" value="${esc(appSettings.userName)}"></label><label class="settings-row select-row"><span><strong>Meliponário padrão</strong><small>Local aberto primeiro</small></span><select id="settingDefaultApiary">${DATA.apiaries.map(a=>`<option value="${a.id}" ${a.id===appSettings.defaultApiary?'selected':''}>${esc(a.name)}</option>`).join('')}</select></label></div><div class="settings-group"><p class="section-kicker">MANEJO</p><label class="settings-row select-row"><span><strong>Próxima inspeção</strong><small>Intervalo sugerido ao registrar</small></span><select id="settingInspection"><option value="7" ${appSettings.inspectionInterval==='7'?'selected':''}>7 dias</option><option value="15" ${appSettings.inspectionInterval==='15'?'selected':''}>15 dias</option><option value="30" ${appSettings.inspectionInterval==='30'?'selected':''}>30 dias</option><option value="45" ${appSettings.inspectionInterval==='45'?'selected':''}>45 dias</option></select></label><label class="settings-row select-row"><span><strong>Unidade de produção</strong><small>Padrão para novas colheitas</small></span><select id="settingUnit"><option value="ml" ${appSettings.productionUnit==='ml'?'selected':''}>ml</option><option value="L" ${appSettings.productionUnit==='L'?'selected':''}>L</option><option value="g" ${appSettings.productionUnit==='g'?'selected':''}>g</option><option value="kg" ${appSettings.productionUnit==='kg'?'selected':''}>kg</option></select></label></div><div class="settings-group"><p class="section-kicker">EXPERIÊNCIA</p><button class="settings-row toggle-row tap" id="settingNotifications"><span><strong>Lembretes</strong><small>Alertas de manejos e inspeções</small></span><i class="switch ${appSettings.notifications?'on':''}"><b></b></i></button><button class="settings-row toggle-row tap" id="settingHaptics"><span><strong>Resposta ao toque</strong><small>Feedback visual e tátil quando disponível</small></span><i class="switch ${appSettings.haptics?'on':''}"><b></b></i></button></div><button class="settings-save btn-primary tap" id="saveSettings">Salvar alterações</button></section><div class="bottom-spacer"></div>`;
  $('#settingNotifications').onclick=()=>{appSettings.notifications=!appSettings.notifications;renderSettingsTool(root)};$('#settingHaptics').onclick=()=>{appSettings.haptics=!appSettings.haptics;renderSettingsTool(root)};$('#saveSettings').onclick=()=>{appSettings.userName=$('#settingUserName').value.trim()||'Meliponicultor';appSettings.defaultApiary=$('#settingDefaultApiary').value;appSettings.inspectionInterval=$('#settingInspection').value;appSettings.productionUnit=$('#settingUnit').value;DATA.user.name=appSettings.userName;currentApiaryId=appSettings.defaultApiary;renderShell();renderHome();toast('Configurações salvas neste aparelho.')};
}
function dataStats(){return {colonies:DATA.colonies.length,traps:(DATA.traps||[]).length,divisions:(DATA.divisions||[]).length,harvests:(DATA.harvests||[]).length,agenda:(DATA.agenda||[]).length}}
async function storageState(){
  let persisted='Não disponível',usage='—';
  try{
    const state=await MeliponarioDB.estimate();persisted=state.persisted?'Ativa':'Disponível';
    if(state.usage) usage=state.usage<1024*1024?`${Math.max(1,Math.round(state.usage/1024))} KB`:`${(state.usage/1024/1024).toFixed(1).replace('.',',')} MB`;
  }catch(e){}
  const el=$('#storagePersistence'),use=$('#storageUsage');if(el)el.textContent=persisted;if(use)use.textContent=usage;
}
function renderBackupTool(root){const s=dataStats();const pwa=window.PWAController?.status?.()||{};const backupLabel=appSettings.lastBackupAt?new Date(appSettings.lastBackupAt).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'}):'Nunca';root.innerHTML=`<section class="tool-hero backup-hero reveal"><div><p class="section-kicker">100% LOCAL</p><h1>Seus dados ficam aqui</h1><p>Colônias, manejos e registros são gravados no banco local deste aparelho.</p></div><span class="tool-hero-icon">${icon('shield')}</span></section><section class="tool-section reveal delay-1"><article class="privacy-card"><span>${icon('phone')}</span><div><small>ARMAZENAMENTO</small><strong>IndexedDB no aparelho</strong><p>Persistência: <b id="storagePersistence">Verificando...</b> · Uso: <b id="storageUsage">—</b></p><p>Banco: <b id="localDbState">${lastSavedAt?'Salvo localmente':'Ativo'}</b></p><p>Offline: <b>${pwa.serviceWorker?'Pronto':'Navegador sem suporte'}</b> · App: <b>${pwa.installed?'Instalado':'No navegador'}</b></p><p>Último backup: <b id="lastBackupLabel">${backupLabel}</b></p></div></article><div class="data-stat-grid"><article><strong>${s.colonies}</strong><span>Colônias</span></article><article><strong>${s.traps}</strong><span>Iscas</span></article><article><strong>${s.divisions}</strong><span>Divisões</span></article><article><strong>${s.harvests}</strong><span>Colheitas</span></article></div></section><section class="tool-section reveal delay-2"><div class="section-heading compact"><div><p class="section-kicker">CÓPIA DE SEGURANÇA</p><h2>Backup manual</h2></div></div><div class="backup-actions"><button class="backup-action tap primary" id="exportBackup"><span>${icon('download')}</span><div><strong>Exportar backup</strong><small>Compartilha ou salva uma cópia completa dos dados locais</small></div>${icon('right')}</button><button class="backup-action tap" id="importBackup"><span>${icon('upload')}</span><div><strong>Importar backup</strong><small>Mesclar ou substituir os dados atuais</small></div>${icon('right')}</button><input type="file" id="backupFileInput" accept="application/json,.json,.meliponario" hidden></div></section><section class="tool-section reveal delay-3"><article class="tool-note danger-note"><span>${icon('occurrence')}</span><div><strong>Sem servidor de recuperação</strong><p>O banco fica somente neste aparelho. Mantenha um backup fora dele para recuperar após perda ou limpeza do navegador.</p></div></article></section><div class="bottom-spacer"></div>`; storageState(); $('#exportBackup').onclick=exportLocalBackup;$('#importBackup').onclick=()=>$('#backupFileInput').click();$('#backupFileInput').onchange=previewBackupImport;}
async function exportLocalBackup(){
  try{
    await persistNow();
    const exportedAt=new Date().toISOString();
    appSettings.lastBackupAt=exportedAt;
    const payload={meta:{app:'Meu Meliponário',version:'14.5',schemaVersion:1,exportedAt},settings:plainClone(appSettings),data:plainClone(DATA)};
    const filename=`meliponario-backup-${exportedAt.slice(0,10)}.meliponario`;
    const file=new File([JSON.stringify(payload,null,2)],filename,{type:'application/json'});
    let shared=false;
    try{if(navigator.canShare?.({files:[file]})&&navigator.share){await navigator.share({title:'Backup Meu Meliponário',text:'Backup local do Meu Meliponário',files:[file]});shared=true;}}catch(err){if(err?.name!=='AbortError')console.warn('Compartilhamento indisponível',err);}
    if(!shared){const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
    await persistNow();
    const label=document.getElementById('lastBackupLabel');if(label)label.textContent=new Date(exportedAt).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
    toast(shared?'Backup compartilhado.':'Backup salvo no aparelho.');
  }catch(err){console.error(err);toast('Não foi possível gerar o backup.');}
}
function validateBackupPayload(b){const d=b?.data||b;if(!d||!Array.isArray(d.apiaries)||!Array.isArray(d.colonies))throw new Error('Estrutura inválida');return {data:{...d,captures:d.captures||[],inspections:d.inspections||[],feedings:d.feedings||[],activities:d.activities||[],media:d.media||[],agenda:d.agenda||[],traps:d.traps||[],divisions:d.divisions||[],harvests:d.harvests||[],quickActions:d.quickActions||window.MELIPONARIO_SEED.quickActions||[],notifications:d.notifications||[]},settings:b.settings||{}};}
function previewBackupImport(e){const file=e.target.files?.[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{const parsed=validateBackupPayload(JSON.parse(r.result)),d=parsed.data;window.__pendingBackup=parsed;const counts={colonies:(d.colonies||[]).length,traps:(d.traps||[]).length,divisions:(d.divisions||[]).length,harvests:(d.harvests||[]).length};openSheet(`${sheetHeader('IMPORTAR BACKUP','Arquivo reconhecido')}<div class="backup-preview"><div><strong>${counts.colonies}</strong><span>colônias</span></div><div><strong>${counts.traps}</strong><span>iscas</span></div><div><strong>${counts.divisions}</strong><span>divisões</span></div><div><strong>${counts.harvests}</strong><span>colheitas</span></div></div><div class="sheet-tip">Escolha <b>Mesclar</b> para manter o que já existe ou <b>Substituir</b> para restaurar exatamente este backup.</div><div class="backup-restore-actions"><button class="btn-secondary tap" id="backupMerge">Mesclar dados</button><button class="btn-primary tap" id="backupReplace">Substituir dados</button></div>`);$('#backupMerge').onclick=()=>restoreBackup('merge');$('#backupReplace').onclick=()=>restoreBackup('replace');}catch(err){console.error(err);toast('Arquivo de backup inválido.')}};r.readAsText(file);e.target.value=''}
async function restoreBackup(mode){const b=window.__pendingBackup;if(!b)return;try{persistenceReady=false;if(mode==='merge'){const merged=await MeliponarioDB.mergeAll(plainClone(b.data),plainClone(b.settings));const loaded=await MeliponarioDB.loadAll();DATA=persistentProxy(loaded.data);appSettings=persistentProxy({...appSettings,...(loaded.settings||{})});}else{await MeliponarioDB.replaceAll(plainClone(b.data),plainClone(b.settings));const loaded=await MeliponarioDB.loadAll();DATA=persistentProxy(loaded.data);appSettings=persistentProxy({...appSettings,...(loaded.settings||{})});}currentApiaryId=DATA.apiaries.some(a=>a.id===appSettings.defaultApiary)?appSettings.defaultApiary:(DATA.apiaries[0]?.id||'principal');persistenceReady=true;window.__pendingBackup=null;closeSheet();renderShell();renderHome();renderColoniesPage();if(currentPage==='tools')renderToolsPage();toast(mode==='merge'?'Backup mesclado com sucesso.':'Backup restaurado com sucesso.');}catch(err){persistenceReady=true;console.error(err);toast('Não foi possível restaurar o backup.');}}

function openMoreSheet(){
  const pwa=window.PWAController?.status?.()||{};
  openSheet(`${sheetHeader('MAIS','Ferramentas do meliponário')}<div class="more-sheet-section"><p class="section-kicker">MANEJO</p><div class="more-menu-grid"><button class="more-menu-card tap" id="moreTraps"><span>${icon('trap')}</span><div><strong>Iscas</strong><small>Instalações, verificações e capturas</small></div></button><button class="more-menu-card tap" id="moreDivisions"><span>${icon('division')}</span><div><strong>Divisões</strong><small>Colônias mãe, filhas e linhagens</small></div></button><button class="more-menu-card tap" id="moreProduction"><span>${icon('harvest')}</span><div><strong>Produção</strong><small>Colheitas e rendimento</small></div></button><button class="more-menu-card tap" id="moreReports"><span>${icon('history')}</span><div><strong>Relatórios</strong><small>Saúde, evolução e indicadores</small></div></button></div></div><div class="more-sheet-section"><p class="section-kicker">ORGANIZAÇÃO</p><div class="more-menu-grid"><button class="more-menu-card tap" id="moreApiaries"><span>${icon('hive')}</span><div><strong>Meliponários</strong><small>Locais e colônias por área</small></div></button><button class="more-menu-card tap" id="moreQr"><span>${icon('qr')}</span><div><strong>QR Code</strong><small>Etiquetas para abrir cada caixa</small></div></button><button class="more-menu-card tap" id="moreLibrary"><span>${icon('book')}</span><div><strong>Biblioteca</strong><small>Consulta rápida e offline</small></div></button><button class="more-menu-card tap" id="moreSettings"><span>${icon('settings')}</span><div><strong>Configurações</strong><small>Padrões e preferências do app</small></div></button></div></div><button class="more-data-card tap" id="moreBackup"><span>${icon('database')}</span><div><strong>Dados e backup</strong><small>Privacidade, exportação e restauração local</small></div>${icon('right')}</button><button class="more-data-card tap pwa-install-card" id="moreInstall"><span>${icon('download')}</span><div><strong>${pwa.installed?'Aplicativo instalado':'Instalar aplicativo'}</strong><small>${pwa.installed?'Abrindo em modo standalone':'Tela cheia, ícone no celular e uso offline'}</small></div>${icon('right')}</button><div class="more-sheet-note">100% local, instalável e preparado para funcionar sem internet.</div>`);
  $('#moreTraps').onclick=()=>{closeSheet();setPage('traps')};
  $('#moreDivisions').onclick=()=>{closeSheet();divisionMode='hub';setPage('division')};
  $('#moreProduction').onclick=()=>{closeSheet();productionMode='hub';setPage('production')};
  $('#moreReports').onclick=()=>{closeSheet();setPage('reports')};
  $('#moreApiaries').onclick=()=>selectTool('apiaries'); $('#moreQr').onclick=()=>selectTool('qr'); $('#moreLibrary').onclick=()=>selectTool('library'); $('#moreSettings').onclick=()=>selectTool('settings'); $('#moreBackup').onclick=()=>selectTool('backup'); $('#moreInstall').onclick=()=>window.PWAController?.openInstallSheet?.();
}

function bind(){
  $('#sheetBackdrop').onclick=closeSheet;$('#apiaryPicker').onclick=openApiarySheet;$('#notificationButton').onclick=openNotifications;$('#registerFab').onclick=()=>openRegisterSheet();$('#viewColonies').onclick=()=>setPage('colonies');$('#seeAgenda').onclick=()=>setPage('agenda');$('#priorityCount').onclick=()=>$('#priorityTrack').scrollTo({left:0,behavior:'smooth'});
  $$('[data-status]').forEach(b=>b.onclick=()=>{statusFilter=b.dataset.status;setPage('colonies')});
  $$('[data-nav]').forEach(b=>b.onclick=()=>{const page=b.dataset.nav;if(page==='home'||page==='colonies'||page==='agenda')setPage(page);else if(page==='more')openMoreSheet();else toast(`${b.querySelector('small').textContent}: será desenvolvido em uma etapa própria.`)});
  $('#addColonyButton').onclick=openAddColony;$('#openFilters').onclick=openFilters;$('#sortButton').onclick=openSort;$('#attentionAll').onclick=()=>{statusFilter='attention';renderColonyList();document.querySelector('.colony-list-section').scrollIntoView({behavior:'smooth',block:'start'})};
  $('#colonySearch').addEventListener('input',e=>{searchTerm=e.target.value;$('#searchClear').classList.toggle('show',!!searchTerm);renderColonyList()});$('#searchClear').onclick=()=>{searchTerm='';$('#colonySearch').value='';$('#searchClear').classList.remove('show');renderColonyList()};
  $$('#statusChips [data-status-filter]').forEach(b=>b.onclick=()=>{statusFilter=b.dataset.statusFilter;renderColonyList();renderFilterBadge()});
  $$('[data-colony-status]').forEach(b=>b.onclick=()=>{statusFilter=b.dataset.colonyStatus;renderColonyList();document.querySelector('.colony-list-section').scrollIntoView({behavior:'smooth',block:'start'})});
  $('#viewToggle').onclick=()=>{compactView=!compactView;$('#viewIcon').innerHTML=icon(compactView?'grid':'list');renderColonyList();toast(compactView?'Visualização compacta.':'Cartões detalhados.')};
  $('#clearAllFilters').onclick=clearFilters;
  $('#detailBack').onclick=()=>setPage('colonies');
  $('#detailMore').onclick=openColonyMore;
  $('#registerManagement').onclick=()=>{const c=DATA.colonies.find(x=>x.id===selectedColonyId);openRegisterSheet('',c?.name||'')};
  $('#manageBottom').onclick=()=>{const c=DATA.colonies.find(x=>x.id===selectedColonyId);openRegisterSheet('',c?.name||'')};
  $('#rescheduleManagement').onclick=()=>{agendaView='week';setPage('agenda');toast('Escolha o melhor dia na agenda.');};
  $('#inspectionDetails').onclick=openInspectionDetail;
  $('#openHistory').onclick=()=>setPage('history');
  $('#historyBottom').onclick=()=>setPage('history');
  $('#editColony').onclick=()=>toast('Edição da colônia será conectada ao cadastro completo.');
  $('#historyBack').onclick=()=>setPage('details');
  $('#historyFilterButton').onclick=()=>document.getElementById('historyFilterChips').scrollIntoView({behavior:'smooth',block:'center'});
  $$('[data-history-filter]').forEach(b=>b.onclick=()=>{historyFilter=b.dataset.historyFilter;renderHistoryPage();});
  $('#agendaAddButton').onclick=openAgendaCreate;
  $('#agendaEmptyAdd').onclick=openAgendaCreate;
  $('#agendaGoToday').onclick=()=>{agendaView='today';agendaSelectedDate=AGENDA_BASE_DATE;renderAgendaPage();};
  $('#agendaHeroOverdue').onclick=()=>{agendaView='overdue';renderAgendaPage();};
  $('#agendaHeroWeek').onclick=()=>{agendaView='week';renderAgendaPage();};
  $$('[data-agenda-view]').forEach(b=>b.onclick=()=>{agendaView=b.dataset.agendaView;if(agendaView==='today')agendaSelectedDate=AGENDA_BASE_DATE;renderAgendaPage();});
  $('#trapsAddButton').onclick=openAddTrap;
  $('#trapsEmptyAdd').onclick=openAddTrap;
  $('#trapSearch').addEventListener('input',e=>{trapSearch=e.target.value;$('#trapSearchClear').classList.toggle('show',!!trapSearch);renderTrapList()});
  $('#trapSearchClear').onclick=()=>{trapSearch='';$('#trapSearch').value='';$('#trapSearchClear').classList.remove('show');renderTrapList()};
  $$('[data-trap-filter]').forEach(b=>b.onclick=()=>{trapFilter=b.dataset.trapFilter;renderTrapsPage()});
  $$('[data-trap-status-short]').forEach(b=>b.onclick=()=>{trapFilter=b.dataset.trapStatusShort;renderTrapsPage();document.querySelector('.traps-list-section').scrollIntoView({behavior:'smooth',block:'start'})});
  $('#captureBack').onclick=()=>{if(captureStep===5){setPage('traps')}else if(captureStep>1){captureStep--;renderCapture()}else setPage('traps')};
  $('#captureClose').onclick=()=>setPage('traps');
  $('#divisionBack').onclick=divisionGoBack;
  $('#divisionAddTop').onclick=()=>{if(divisionMode==='hub')beginDivision();else resetDivisionToHub();};
  $('#openDivisionFamily').onclick=()=>{divisionMode='hub';setPage('division');};
  $('#productionBack').onclick=productionGoBack;
  $('#productionAddTop').onclick=()=>beginHarvest();
  $('#reportsBack').onclick=openMoreSheet;
  $('#toolsBack').onclick=()=>{if(toolsMode==='pdf'){toolsMode='library';renderToolsPage();}else openMoreSheet();};
  $('#toolsInfo').onclick=()=>openSheet(`${sheetHeader('FERRAMENTAS','Local, instalável e offline')}<div class="sheet-tip">Os dados ficam no IndexedDB deste aparelho. O PWA pode ser instalado e o Service Worker mantém os arquivos essenciais disponíveis sem internet.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Entendi</button>`);
  $('#reportsInfo').onclick=()=>openSheet(`${sheetHeader('RELATÓRIOS','Como os números são calculados')}<div class="sheet-tip">Os indicadores usam somente colônias, iscas, divisões, agenda e colheitas registradas neste aparelho. Nenhum dado é enviado para servidor.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Entendi</button>`);
  $('#inspectionBack').onclick=inspectionGoBack;$('#inspectionClose').onclick=()=>setPage('details');
}

bootLocalDatabase().then(ok=>{renderShell();renderHome();renderColoniesPage();bind();setPage('home');if(!ok)toast('Banco local indisponível; dados temporários nesta sessão.');}).catch(err=>{console.error(err);toast('Não foi possível iniciar o aplicativo.');});
