# Meu Meliponário — Etapa 14 · PWA final

Esta etapa parte diretamente da Etapa 13 e preserva a interface e os módulos já aprovados. O trabalho desta entrega está concentrado na camada PWA, instalação, uso offline, atualização, backup e validação final do pacote.

## O que foi adicionado

- `manifest.webmanifest` completo para instalação no celular
- Service Worker próprio (`service-worker.js`)
- cache local do app shell, imagens de espécies e QR Codes
- fallback de navegação para o app quando o aparelho está offline
- limpeza automática de caches antigos ao atualizar a versão
- ícones 32, 180, 192 e 512 px
- ícone maskable 512 px para Android
- metatags de instalação para Android/iOS
- orientação principal em retrato
- suporte a safe areas já existente preservado
- controlador de instalação em `pwa.js`
- opção **Mais → Instalar aplicativo**
- instrução específica para instalação no iPhone/Safari
- aviso de conexão offline/online sem bloquear o uso
- detecção de nova versão do Service Worker
- backup local revisado para mobile
- compartilhamento do backup via Web Share quando o aparelho suporta arquivos
- fallback para download local quando compartilhamento não está disponível
- extensão de backup `.meliponario` (conteúdo JSON legível)
- registro da data do último backup

## Arquitetura final

O app continua sem backend e sem conta:

`Interface → IndexedDB → armazenamento do dispositivo`

Os arquivos do aplicativo são disponibilizados offline pelo Service Worker. Os dados do meliponário ficam no IndexedDB.

Nenhum dado operacional é enviado para servidor.

## Arquivos PWA

- `manifest.webmanifest`
- `service-worker.js`
- `pwa.js`
- `icons/icon-32.png`
- `icons/icon-180.png`
- `icons/icon-192.png`
- `icons/icon-512.png`
- `icons/maskable-512.png`

## Instalação

### Android / Chrome

1. Hospede a pasta em HTTPS.
2. Abra o endereço no Chrome.
3. Entre em **Mais → Instalar aplicativo** ou use a opção de instalação do navegador.
4. O app passa a abrir em modo standalone.

### iPhone / Safari

1. Abra o endereço no Safari.
2. Toque em **Compartilhar**.
3. Escolha **Adicionar à Tela de Início**.
4. Abra pelo novo ícone.

## Hospedagem

Não é necessário servidor de aplicação. Basta publicar estes arquivos em um host estático com HTTPS.

O Service Worker não funciona em `file://`; para instalação real, use HTTPS. `localhost` também é aceito pelos navegadores durante desenvolvimento.

## Backup

Em **Mais → Dados e backup**:

- **Exportar backup** gera um arquivo `.meliponario`.
- Em celulares compatíveis, o sistema abre o compartilhamento nativo para salvar em Arquivos, Drive, WhatsApp etc.
- Se Web Share com arquivos não estiver disponível, o navegador baixa o arquivo.
- **Importar backup** aceita `.meliponario` e `.json`.
- O usuário escolhe entre **Mesclar** ou **Substituir**.

## Atualizações

O cache tem versão `meu-meliponario-v14.5`. Uma nova versão deve alterar esse nome. O Service Worker apaga caches antigos da família `meu-meliponario-*`.

## Observação importante

Como o produto é 100% local, excluir os dados do navegador/PWA pode apagar o banco IndexedDB. Por isso o backup externo continua sendo essencial.
### Ajuste mobile de navegação
A versão final inclui proteção contra sobreposição da barra inferior e bottom sheets presos à viewport. Em telas pequenas, o menu Registrar se expande para cima e compacta os itens para manter todas as ações acessíveis.


## Auditoria de instalação e downloads

A Etapa 14.5 corrige dois pontos que costumam falhar no Chrome de celular:

- **Instalação PWA:** `preview.html` agora se identifica claramente como prévia e não promete instalação. A instalação real deve ser feita pelo `index.html` publicado em HTTPS.
- **PDFs do Google Drive:** o botão **Baixar PDF** passou a usar o endpoint `drive.usercontent.google.com`, mais adequado para entrega direta de arquivo em navegadores móveis, mantendo **Abrir no Drive** como alternativa.
- **Service Worker:** o pré-cache inicial foi reduzido aos arquivos essenciais e não falha por completo se um recurso secundário estiver indisponível.
- O pacote ZIP foi auditado para conter `index.html`, manifest, Service Worker, ícones, CSS, JavaScript, banco local e assets.

## Biblioteca de projetos em PDF

A Biblioteca agora também possui três materiais hospedados no Google Drive: **Projetos de caixas e meliponários**, **Atrativos** e **6 bônus**. Cada card oferece visualização dentro do PWA e acesso para download. Como os arquivos permanecem no Google Drive, essa parte da Biblioteca precisa de internet; os guias rápidos locais continuam disponíveis offline.
