(function(global){
  'use strict';
  let deferredPrompt = null;
  let registration = null;
  let updateAvailable = false;

  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
  const swSupported = () => 'serviceWorker' in navigator;
  const isLocalhost = () => ['localhost','127.0.0.1','[::1]'].includes(location.hostname);
  const canUsePWA = () => location.protocol === 'https:' || (location.protocol === 'http:' && isLocalhost());
  const hasManifest = () => !!document.querySelector('link[rel="manifest"]');
  const isPreview = () => /(?:^|\/)preview\.html$/i.test(location.pathname) || !hasManifest();

  function status(){
    return {
      installed: isStandalone(),
      installable: !!deferredPrompt,
      online: navigator.onLine,
      serviceWorker: swSupported(),
      secureContext: canUsePWA(),
      manifest: hasManifest(),
      preview: isPreview(),
      updateAvailable
    };
  }

  function dispatch(){
    window.dispatchEvent(new CustomEvent('meliponario:pwa-status',{detail:status()}));
  }

  async function register(){
    if(!swSupported() || !canUsePWA() || !hasManifest()) return null;
    try{
      registration = await navigator.serviceWorker.register('./service-worker.js',{scope:'./'});
      if(registration.waiting){ updateAvailable=true; dispatch(); }
      registration.addEventListener('updatefound',()=>{
        const worker=registration.installing;
        if(!worker) return;
        worker.addEventListener('statechange',()=>{
          if(worker.state==='installed' && navigator.serviceWorker.controller){
            updateAvailable=true;
            dispatch();
            if(global.toast) global.toast('Nova versão pronta para atualizar.');
          }
        });
      });
      return registration;
    }catch(err){ console.warn('Service Worker não registrado',err); return null; }
  }

  async function install(){
    if(isStandalone()){
      global.toast?.('O aplicativo já está instalado.');
      return false;
    }
    if(deferredPrompt){
      deferredPrompt.prompt();
      const choice=await deferredPrompt.userChoice;
      deferredPrompt=null;
      dispatch();
      return choice?.outcome==='accepted';
    }
    return false;
  }

  function installSheet(){
    const st=status();
    if(!global.openSheet || !global.sheetHeader) return;
    if(st.installed){
      global.openSheet(`${global.sheetHeader('APLICATIVO','Já está instalado')}<div class="sheet-tip">O Meu Meliponário está rodando como aplicativo neste aparelho. Seus registros continuam armazenados localmente.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Fechar</button>`);
      return;
    }
    if(st.preview || !st.secureContext){
      global.openSheet(`${global.sheetHeader('INSTALAÇÃO','Esta prévia não é instalável')}<div class="sheet-tip">O arquivo <b>preview.html</b> serve apenas para visualizar o aplicativo. No Chrome, a instalação real exige o projeto publicado em <b>HTTPS</b>, abrindo o <b>index.html</b> com manifest, ícones e Service Worker disponíveis no mesmo endereço.<br><br>Depois de publicar, abra o endereço no Chrome e volte em <b>Mais → Instalar aplicativo</b>.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Entendi</button>`);
      return;
    }
    if(deferredPrompt){
      global.openSheet(`${global.sheetHeader('INSTALAR','Meu Meliponário no celular')}<div class="sheet-tip">Instale o PWA para abrir em tela cheia, usar sem internet e acessar como um aplicativo comum.</div><button class="btn-primary tap" style="width:100%;height:48px;margin-top:13px" id="pwaInstallNow">Instalar aplicativo</button>`);
      const b=document.getElementById('pwaInstallNow'); if(b) b.onclick=async()=>{const ok=await install(); if(ok){global.closeSheet?.();global.toast?.('Aplicativo instalado.');}};
      return;
    }
    if(isIOS()){
      global.openSheet(`${global.sheetHeader('INSTALAR NO IPHONE','Adicionar à Tela de Início')}<div class="sheet-tip"><b>1.</b> Abra este app no Safari.<br><b>2.</b> Toque em Compartilhar.<br><b>3.</b> Escolha <b>Adicionar à Tela de Início</b>.<br><br>Depois ele abre em tela cheia e continua disponível offline.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Entendi</button>`);
      return;
    }
    global.openSheet(`${global.sheetHeader('INSTALAR','Adicionar ao dispositivo')}<div class="sheet-tip">Este endereço já está em contexto compatível, mas o Chrome ainda não liberou o prompt automático. Recarregue a página uma vez e, no menu ⋮ do Chrome, procure por <b>Instalar aplicativo</b> ou <b>Adicionar à tela inicial</b>.</div><button class="btn-primary tap" style="width:100%;height:44px;margin-top:13px" data-close>Entendi</button>`);
  }

  function applyUpdate(){
    if(registration?.waiting){ registration.waiting.postMessage({type:'SKIP_WAITING'}); }
  }

  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;dispatch();});
  window.addEventListener('appinstalled',()=>{deferredPrompt=null;dispatch();global.toast?.('Meu Meliponário instalado.');});
  window.addEventListener('online',()=>{dispatch();global.toast?.('Conexão restabelecida.');});
  window.addEventListener('offline',()=>{dispatch();global.toast?.('Sem internet — o app continua funcionando offline.');});
  navigator.serviceWorker?.addEventListener('controllerchange',()=>{ if(updateAvailable) location.reload(); });

  global.PWAController={status,register,install,openInstallSheet:installSheet,applyUpdate};
  register().then(dispatch);
})(window);
