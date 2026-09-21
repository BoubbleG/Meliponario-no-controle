# Auditoria — instalação e downloads no Chrome móvel

## Resultado

### 1. Instalação do PWA
**Causa encontrada:** `preview.html` é uma prévia autocontida para inspeção, não uma URL PWA instalável. Ela não possui o manifest como recurso externo nem consegue registrar o Service Worker no contexto de prévia/sandbox.

**Correção aplicada:** o botão de instalação agora identifica esse contexto e informa claramente que a instalação deve ocorrer pelo `index.html` publicado em HTTPS. O controlador só tenta registrar o Service Worker em HTTPS ou localhost.

### 2. Pacote PWA
**Verificado:** o ZIP contém `index.html`, `manifest.webmanifest`, `service-worker.js`, `pwa.js`, CSS, JavaScript, IndexedDB, ícones 192/512/maskable e assets necessários. O manifest é JSON válido e os ícones possuem as dimensões declaradas.

### 3. Service Worker
**Risco encontrado:** o pré-cache inicial tinha muitos arquivos. `cache.addAll()` pode cancelar a instalação inteira do Service Worker se apenas um recurso retornar erro no servidor.

**Correção aplicada:** o pré-cache foi reduzido ao núcleo essencial e passou a ser resiliente a falha individual de recurso. Cache atualizado para `meu-meliponario-v14.5`.

### 4. Download dos PDFs do Google Drive
**Risco encontrado:** os botões usavam `drive.google.com/uc?export=download`, que pode abrir preview/intersticial ou falhar em alguns fluxos de Chrome móvel.

**Correção aplicada:** os links de download agora usam `drive.usercontent.google.com/download?...&confirm=t`, mantendo **Abrir no Drive** como fallback.

**Limitação externa:** o download ainda depende de cada arquivo do Drive estar compartilhado como **qualquer pessoa com o link**. O ambiente de auditoria não permite transferir os arquivos do Google Drive, portanto a permissão real dos três PDFs não pôde ser confirmada daqui.

### 5. Preview vs aplicativo instalado
O `preview.html` continua servindo para visualizar o app dentro do ChatGPT/arquivo. Ele não deve ser usado como teste de instalação PWA. Para testar instalação, publique a pasta completa em HTTPS e abra a URL do `index.html` no Chrome.

## Recomendação para download 100% confiável
Para eliminar a dependência do Google Drive e permitir download/offline sem redirecionamentos, coloque os PDFs fisicamente dentro do projeto, por exemplo em `/biblioteca/pdfs/`. Para isso, os arquivos PDF precisam ser fornecidos diretamente ao projeto.
