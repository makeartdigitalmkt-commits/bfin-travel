# BFin Travel – app (GitHub Pages)

Arquivos deste pacote: index.html, privacidade.html, manifest.webmanifest, sw.js, icons/ (4 imagens) e este LEIA-ME.

## 1. Códigos do Google (já preenchidos)
Abra o index.html e procure por `COLE_AQUI`. Troque:
- `COLE_AQUI_O_ID_DO_CLIENTE.apps.googleusercontent.com` → seu ID do cliente
- `COLE_AQUI_A_CHAVE_DE_API` → sua chave de API
- `COLE_AQUI_O_NUMERO_DO_PROJETO` → número do projeto
(Ou mande os 3 para o Claude, que devolve o index.html pronto.)

## 2. Publicar no GitHub (grátis)
1. Em github.com, clique em **+ > New repository**. Nome: `bfin-travel`. Marque **Public**. Clique em **Create repository**.
2. Clique em **uploading an existing file**. Arraste TODOS os arquivos e a pasta `icons`. Clique em **Commit changes**.
3. Vá em **Settings > Pages**. Em *Source*, escolha **Deploy from a branch**, branch **main**, pasta **/(root)**, **Save**.
4. Espere 1 a 2 minutos. O app fica em: https://makeartdigitalmkt-commits.github.io/bfin-travel/

## 3. Testar
Abra o link no Chrome (não pelo navegador do WhatsApp), toque em **Entrar com Google**, aceite as permissões.
Enquanto o app estiver em "Teste" no Google Cloud, só e-mails cadastrados em **Público-alvo > Usuários de teste** conseguem entrar (até 100).

## 4. Liberar para família e amigos
Google Cloud > Google Auth Platform > **Público-alvo > Publicar app**. Como o app só usa permissões não sensíveis
(nome, e-mail e drive.file), não precisa de verificação paga. Coloque o link da política:
https://makeartdigitalmkt-commits.github.io/bfin-travel/privacidade.html
Não envie logotipo na tela de consentimento por enquanto (isso exige verificação da marca).

## Atualizar depois
Suba de novo o index.html (Add file > Upload files) e faça Commit. O app instalado pega a versão nova ao abrir com internet.
