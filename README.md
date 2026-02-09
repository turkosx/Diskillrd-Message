<p align="center">
  <img src="images/lixeira.png" alt="Diskill Message" width="120" />
</p>

<h1 align="center">Diskill Message</h1>

<p align="center">
  Apaga somente suas mensagens em um canal ou DM no Discord (exclusao em massa) via Tampermonkey.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Userscript-Tampermonkey-ff3b3b?style=flat-square&logo=tampermonkey&logoColor=ffffff&labelColor=0b0f14" alt="Tampermonkey" />
  <img src="https://img.shields.io/badge/JavaScript-ES2020-ff3b3b?style=flat-square&logo=javascript&logoColor=ffffff&labelColor=0b0f14" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Discord-Web-ff3b3b?style=flat-square&logo=discord&logoColor=ffffff&labelColor=0b0f14" alt="Discord" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-ff3b3b?style=flat-square&labelColor=0b0f14" alt="License MIT" /></a>
</p>

<p align="center">
  <a href="https://turkosx.github.io/Diskillrd-Message/">Pagina de instalacao</a> ·
  <a href="https://www.youtube.com/watch?v=O8EQvi84kx0">Tutorial em video</a> ·
  <a href="https://github.com/turkosx/Diskillrd-Message/issues">Issues</a> ·
  <a href="https://raw.githubusercontent.com/turkosx/Diskillrd-Message/main/diskill-message.user.js">RAW</a>
</p>

<p align="center">
  <img src="https://cdn.simpleicons.org/discord/ff3b3b" height="20" alt="Discord" />
  <img src="https://cdn.simpleicons.org/javascript/ff3b3b" height="20" alt="JavaScript" />
  <img src="https://cdn.simpleicons.org/googlechrome/ff3b3b" height="20" alt="Chrome" />
  <img src="https://cdn.simpleicons.org/github/ff3b3b" height="20" alt="GitHub" />
</p>

---

## Sumario
- <img src="https://cdn.simpleicons.org/discord/ff3b3b" height="14" alt="" /> [Visao geral](#visao-geral)
- <img src="https://cdn.simpleicons.org/tampermonkey/ff3b3b" height="14" alt="" /> [Instalacao rapida](#instalacao-rapida)
- <img src="https://cdn.simpleicons.org/discord/ff3b3b" height="14" alt="" /> [Uso rapido](#uso-rapido)
- <img src="https://cdn.simpleicons.org/javascript/ff3b3b" height="14" alt="" /> [Filtros disponiveis](#filtros-disponiveis)
- <img src="https://cdn.simpleicons.org/discord/ff3b3b" height="14" alt="" /> [Importar export do Discord](#importar-export-do-discord)
- <img src="https://cdn.simpleicons.org/javascript/ff3b3b" height="14" alt="" /> [Configuracoes avancadas](#configuracoes-avancadas)
- <img src="https://cdn.simpleicons.org/github/ff3b3b" height="14" alt="" /> [Troubleshooting](#troubleshooting)
- <img src="https://cdn.simpleicons.org/github/ff3b3b" height="14" alt="" /> [Licenca](#licenca)

## Visao geral
- Exclui somente mensagens do seu usuario em canais ou DMs.
- Interface dedicada com seletores de canal, filtros e intervalos.
- Importacao opcional do export do Discord (messages/index.json).
- Controles de atraso para reduzir risco de rate limit.

## Instalacao rapida
Requisito: Tampermonkey instalado no navegador.

### 1) Instale o Tampermonkey
- Chrome / Edge / Brave: https://www.tampermonkey.net/
- Firefox: https://www.tampermonkey.net/

### 2) Instale ou atualize o script
- RAW (Tampermonkey): https://raw.githubusercontent.com/turkosx/Diskillrd-Message/main/diskill-message.user.js

### 3) Pagina de instalacao (recomendado)
- https://turkosx.github.io/Diskillrd-Message/

## Uso rapido
1. Abra o Discord no navegador e va ao canal ou DM.
2. Clique no icone de lixeira e abra o painel do Diskill Message.
3. Preencha Autor, Servidor e Canal (ou use os botoes de auto-preenchimento).
4. Clique em Apagar e acompanhe o log.
5. Se ocorrer rate limit, aumente os atrasos nas configuracoes avancadas.

## Filtros disponiveis
- Texto contendo
- Contem link
- Contem arquivo
- Incluir fixadas
- Regex (opcional)
- Intervalo por mensagem (min/max)
- Intervalo por data (min/max)

## Importar export do Discord
- Importe o arquivo `messages/index.json` gerado no export de dados do Discord.
- Isso ajuda a filtrar e operar em lote com maior controle de mensagens.

## Configuracoes avancadas
- Atraso de busca (search delay)
- Atraso entre exclusoes (delete delay)
- Token de autorizacao (opcional, com preenchimento facilitado)

## Troubleshooting
- Rate limit: aumente os atrasos de busca e exclusao.
- Erro 404/403: algumas mensagens podem nao ser apagaveis (permissoes, threads, etc.).
- Mudancas no Discord: se algo quebrar, abra uma issue no GitHub.

## Licenca
Este projeto e distribuido sob a licenca MIT. Veja `LICENSE`.
