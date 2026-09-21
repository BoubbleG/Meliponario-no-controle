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
  transfer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3"/></svg>`
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

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1900)}
function apiary(){return DATA.apiaries.find(a=>a.id===currentApiaryId)||DATA.apiaries[0]}
function apiaryColonies(){return DATA.colonies.filter(c=>c.apiaryId===currentApiaryId)}
function openSheet(html){$('#sheetContent').innerHTML=html;$('#sheetBackdrop').classList.add('open');$('#bottomSheet').classList.add('open');$('#bottomSheet').setAttribute('aria-hidden','false');$$('[data-close]').forEach(b=>b.onclick=closeSheet)}
function closeSheet(){$('#sheetBackdrop').classList.remove('open');$('#bottomSheet').classList.remove('open');$('#bottomSheet').setAttribute('aria-hidden','true')}
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
  $('#globalTopbar').classList.toggle('is-hidden',page==='details'||page==='inspection'||page==='history'||page==='capture'||page==='division');
  $$('[data-nav]').forEach(b=>{const activePage=(page==='details'||page==='inspection'||page==='history')?'colonies':((page==='traps'||page==='capture'||page==='division')?'more':page);b.classList.toggle('active',b.dataset.nav===activePage)});
  if(page==='home') renderHome();
  if(page==='colonies') renderColoniesPage();
  if(page==='details') renderColonyDetails(selectedColonyId);
  if(page==='inspection') renderInspection();
  if(page==='history') renderHistoryPage();
  if(page==='agenda') renderAgendaPage();
  if(page==='traps') renderTrapsPage();
  if(page==='capture') renderCapture();
  if(page==='division') renderDivisionPage();
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
  openSheet(`${sheetHeader('REGISTRO RÁPIDO',colony?`Registrar em ${colony}`:'O que você quer registrar?')}<div class="sheet-list">${opts.map(([k,l,h])=>`<button class="sheet-option tap ${preselected===k?'active':''}" data-register="${k}"><span class="sheet-option-icon">${icon(k)}</span><span class="sheet-option-copy"><strong>${l}</strong><small>${h}</small></span>${icon('right')}</button>`).join('')}</div><div class="sheet-tip">Inspeções e capturas já estão disponíveis. Os demais manejos entram nas próximas etapas.</div>`);
  $$('[data-register]').forEach(b=>b.onclick=()=>{
    const type=b.dataset.register;
    closeSheet();
    if(type==='inspection') beginInspection(colony);
    else if(type==='capture') beginCapture();
    else if(type==='division') beginDivision(colony);
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
function openMoreSheet(){
  openSheet(`${sheetHeader('MAIS','Ferramentas do meliponário')}<div class="more-menu-grid"><button class="more-menu-card tap" id="moreTraps"><span>${icon('trap')}</span><div><strong>Iscas</strong><small>Instalações, verificações e capturas</small></div></button><button class="more-menu-card tap" id="moreDivisions"><span>${icon('division')}</span><div><strong>Divisões</strong><small>Colônias mãe, filhas e linhagens</small></div></button><button class="more-menu-card disabled" id="moreProduction"><span>${icon('harvest')}</span><div><strong>Produção</strong><small>Colheitas e rendimento</small></div></button><button class="more-menu-card disabled" id="moreReports"><span>${icon('history')}</span><div><strong>Relatórios</strong><small>Evolução do meliponário</small></div></button></div><div class="more-sheet-note">Iscas, Capturas e <strong>Divisões</strong> já estão ativas. Produção e relatórios entram nas próximas etapas.</div>`);
  $('#moreTraps').onclick=()=>{closeSheet();setPage('traps')};
  $('#moreDivisions').onclick=()=>{closeSheet();divisionMode='hub';setPage('division')};
  ['moreProduction','moreReports'].forEach(id=>$('#'+id).onclick=()=>toast('Este módulo entra em uma próxima etapa.'));
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
  $('#inspectionBack').onclick=inspectionGoBack;$('#inspectionClose').onclick=()=>setPage('details');
}

fetch('./data.json',{cache:'no-store'}).then(r=>r.json()).then(d=>{DATA=d;renderShell();renderHome();renderColoniesPage();bind();divisionMode='hub';setPage('division')}).catch(err=>{console.error(err);toast('Não foi possível carregar os dados de demonstração.')});
