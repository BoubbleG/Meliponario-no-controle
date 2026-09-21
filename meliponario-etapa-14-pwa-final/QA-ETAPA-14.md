# QA — Etapa 14

## Validações concluídas no pacote

- JavaScript principal: sintaxe válida
- camada IndexedDB: sintaxe válida
- controlador PWA: sintaxe válida
- Service Worker: sintaxe válida
- manifest: JSON válido
- nenhum recurso HTTP/HTTPS externo referenciado pelo `index.html`
- todos os arquivos locais referenciados pelo `index.html` existem
- todos os arquivos declarados no precache do Service Worker existem
- ícones 192×192, 512×512 e maskable presentes
- conteúdo estrutural das telas anteriores preservado; a Etapa 14 altera head/scripts e lógica PWA, não redesenha as telas
- `preview.html` gerado como arquivo autocontido para inspeção visual no ChatGPT

## Teste que deve ser feito no endereço final HTTPS

1. abrir uma vez online
2. instalar o PWA
3. criar ou alterar um registro
4. fechar completamente o app
5. abrir novamente e confirmar persistência
6. ativar modo avião
7. abrir o app e navegar entre Home, Colônias, Ficha, Agenda, Iscas, Produção e Biblioteca
8. registrar uma alteração offline
9. fechar e reabrir ainda offline
10. exportar um backup
11. importar o backup em modo Mesclar
12. testar uma atualização alterando a versão do cache

O teste real do Service Worker/instalação depende de um contexto seguro HTTPS (ou localhost) e deve ser repetido no dispositivo de destino.

- Correção visual: removida a rolagem vazia extra nas telas de Ferramentas/Seus meliponários; permanece apenas o respiro necessário acima da navegação inferior.

## Correção mobile — navegação e Registro Rápido
- A barra inferior fixa agora possui área de segurança suficiente em todas as telas para não cobrir o último conteúdo.
- O Registro Rápido passou a ser um bottom sheet fixo à viewport, independente da rolagem da página.
- Em telas baixas, o sheet usa layout compacto e ocupa a altura disponível, com rolagem interna apenas quando necessária.
- Enquanto um bottom sheet está aberto, a página ao fundo não rola.
- Validado em 320×568, 360×640 e 390×844 sem sobreposição do último manejo com a navegação.

## Biblioteca PDF
- 3 cards adicionados: Projetos, Atrativos e 6 bônus.
- Cada card abre um visualizador interno usando Google Drive `/preview`.
- Links de abertura e download usam os IDs fornecidos pelo usuário.
- Navegação de volta retorna para a Biblioteca.
- Os guias locais continuam offline; PDFs remotos exigem conexão.
- O ambiente de QA bloqueia o conteúdo externo do Drive dentro do iframe por política administrativa, então a renderização do PDF remoto deve ser validada no host HTTPS final; a estrutura e os URLs foram validados.


## Auditoria 14.5 — instalação e downloads no Chrome móvel
- `preview.html` não é tratado como instalável; mostra orientação correta para publicação HTTPS.
- `index.html` possui manifest, ícones, scripts e Service Worker presentes no pacote.
- Manifest validado e ícones 192×192/512×512 conferidos.
- Service Worker usa pré-cache essencial resiliente: um recurso secundário ausente não invalida a instalação inteira.
- Links **Baixar PDF** migrados de `drive.google.com/uc` para `drive.usercontent.google.com/download?...&confirm=t`.
- **Abrir no Drive** permanece como fallback quando o Google exigir autenticação/confirmação.
- O ambiente de QA não consegue efetuar a transferência real do Google Drive; o download externo ainda depende de os três arquivos estarem compartilhados como “qualquer pessoa com o link”.
