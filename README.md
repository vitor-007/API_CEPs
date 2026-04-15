# 🌍 Consulta de CEP - Interface e API

Olá! Que bom ter você aqui para testar este projeto. 

Este sistema foi construído para ser uma ferramenta simples de busca de endereços através do CEP. Ele é dividido em duas partes que trabalham juntas:
1. **O Back-end (A Engrenagem):** Uma API feita em Node.js que busca os dados reais no ViaCEP.
2. **O Front-end (A Tela):** Uma interface feita em React (com um tema escuro e moderno) onde você digita o CEP e vê o resultado.

---

## 🛑 Pare! O que você precisa ter instalado?

Antes de começar, seu computador precisa de apenas um programa instalado: o **Node.js**.
Se você não tem certeza se tem ele instalado, abra o terminal do seu computador (ou o prompt de comando) e digite:
`node -v`

Se aparecer a versão (ex: `v18...` ou `v20...`), você está pronto. Se der erro, [baixe e instale o Node.js aqui](https://nodejs.org/).

---

## 🚀 Passo a Passo à Prova de Falhas

Como o projeto tem um Back-end e um Front-end, **você vai precisar rodar os dois ao mesmo tempo**. Siga os passos exatos abaixo:

### Passo 1: Preparando o terreno
Abra a pasta deste projeto no seu editor de código (como o VS Code) ou no terminal, e digite o comando abaixo para baixar todas as ferramentas que o projeto precisa para funcionar:
```bash

npm install

(Aguarde a barrinha carregar até o final).

Passo 2: Ligando a API (Back-end)
Ainda no mesmo terminal, ligue o servidor digitando:

Bash
node server.js
✅ Sinal de sucesso: Vai aparecer a mensagem "Servidor rodando em http://localhost:3000".
⚠️ MUITO IMPORTANTE: Não feche esta janela do terminal! A API precisa ficar rodando no fundo para o site funcionar.

Passo 3: Ligando a Tela (Front-end)
Deixe o terminal do Passo 2 quietinho lá e abra um NOVO terminal na mesma pasta do projeto. Nele, digite:

Bash
npm run dev
✅ Sinal de sucesso: Ele vai te dar um link parecido com http://localhost:5173/.

Pronto! É só segurar a tecla Ctrl e clicar nesse link (ou copiar e colar no seu navegador Edge, Chrome, etc). A tela vai abrir e você já pode digitar um CEP para testar!

🛠️ Resolvendo Erros Comuns
Se a tela abrir, mas aparecer algum erro vermelho na hora de buscar o CEP, verifique isso:

Erro de conexão (O servidor Node está rodando?): Isso significa que você pulou o Passo 2 ou fechou a janela do terminal onde a API estava rodando. Volte e rode node server.js.

Erro de bloqueio pelo CORS (No console do navegador): Isso acontece se a API tentar rodar uma versão desatualizada. Vá no terminal da API, aperte Ctrl + C para desligar, garanta que o arquivo server.js está salvo, e rode node server.js novamente.
