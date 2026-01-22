// ======================= PARTE 1/3 =======================
// ==UserScript==
// @name            Diskill Message - Apagar mensagens (DM/Canal) em massa
// @description     Apaga SOMENTE suas mensagens em um canal ou DM (exclusão em massa)
// @version         1.0.0
// @author          turkosx
// @homepageURL     https://github.com/turkosx/Diskillrd-Message
// @supportURL      https://github.com/turkosx/Diskillrd-Message/issues
// @match           https://discord.com/app*
// @match           https://discord.com/channels/*
// @match           https://discord.com/login*
// @match           https://*.discord.com/app*
// @match           https://*.discord.com/channels/*
// @match           https://*.discord.com/login*
// @run-at          document-idle
// @license         MIT
// @namespace       https://github.com/turkosx/Diskillrd-Message
// @icon            https://raw.githubusercontent.com/turkosx/Diskillrd-Message/main/images/lixeira.png
// @downloadURL     https://raw.githubusercontent.com/turkosx/Diskillrd-Message/main/diskill-message.user.js
// @grant           none
// ==/UserScript==

(function () {
  'use strict';

  const VERSION = "1.0.0";
  const BRAND_NAME = "Diskill Message";
  const PREFIX = '[DISKILL MESSAGE]';

  // links
  const HOME = 'https://github.com/turkosx/Diskillrd-Message';
  const DOCS = HOME + '#'; // você pode criar âncoras no README depois (ex: #como-usar)

  // ===================== UI PREMIUM (DO ZERO) =====================
  // Mantive o id #undiscord para não quebrar nenhum seletor/JS já esperado,
  // mas todo o branding é "Diskill Message".
  var themeCss = (`
/* ==========================================================
   Diskill Message UI — Premium (Light)
   ========================================================== */
#undiscord{
  --dm-bg: #0b1220;
  --dm-surface: #ffffff;
  --dm-surface-2: #f7f9fc;
  --dm-surface-3: #f1f5f9;

  --dm-text: #0f172a;
  --dm-muted: #5b677a;
  --dm-muted-2: #7b8798;

  --dm-border: #d7deea;
  --dm-border-2: #e8eef7;

  --dm-primary: #2563eb;
  --dm-primary-hover: #1d4ed8;
  --dm-primary-press: #1e40af;

  --dm-danger: #dc2626;
  --dm-danger-hover: #b91c1c;

  --dm-focus: rgba(37, 99, 235, .22);

  --dm-radius: 16px;
  --dm-radius-sm: 12px;
  --dm-shadow: 0 20px 60px rgba(2, 6, 23, .18);
  --dm-shadow-soft: 0 10px 30px rgba(2, 6, 23, .10);

  color: var(--dm-text);
  background: var(--dm-surface) !important;
  border: 1px solid var(--dm-border);
}

/* Reset/Box */
#undiscord, #undiscord * { box-sizing: border-box; }
#undiscord { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"; }

/* Window container */
#undiscord.browser{
  box-shadow: var(--dm-shadow);
  border-radius: var(--dm-radius);
  overflow: hidden;
}

/* Header */
#undiscord .header{
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid var(--dm-border);
  background:
    radial-gradient(1200px 90px at 20% 0%, rgba(37,99,235,.16), transparent 55%),
    linear-gradient(180deg, #ffffff, #fbfdff);
  cursor: grab;
}

#undiscord .header .brandMark{
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(37,99,235,.18), rgba(37,99,235,.06));
  border: 1px solid var(--dm-border-2);
  color: var(--dm-primary);
  flex: 0 0 auto;
}

#undiscord .header h3{
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 800;
  color: var(--dm-text);
  letter-spacing: .2px;
}
#undiscord .header .subtitle{
  font-size: 12px;
  color: var(--dm-muted);
  font-weight: 600;
  white-space: nowrap;
}
#undiscord .header .spacer{ flex: 1; }

#undiscord .header .iconBtn{
  width: 40px; height: 40px;
  border-radius: 12px;
  border: 1px solid var(--dm-border-2);
  background: #fff;
  color: var(--dm-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .12s ease, background .12s ease, border-color .12s ease, color .12s ease;
}
#undiscord .header .iconBtn:hover{
  color: var(--dm-text);
  border-color: var(--dm-border);
  background: var(--dm-surface-2);
}
#undiscord .header .iconBtn:active{ transform: translateY(1px); }

/* Layout */
#undiscord .window-body{ height: calc(100% - 56px); display: flex; }
#undiscord .sidebar{
  width: 320px;
  min-width: 300px;
  height: 100%;
  padding: 14px;
  background: var(--dm-surface-2) !important;
  border-right: 1px solid var(--dm-border);
  overflow: auto;
}
#undiscord .main{
  flex: 1;
  background: var(--dm-surface) !important;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
#undiscord.hide-sidebar .sidebar{ display:none; }
#undiscord.hide-sidebar .main{ max-width: 100%; }

/* Sections */
#undiscord details{
  border: 1px solid var(--dm-border);
  background: #fff;
  border-radius: var(--dm-radius-sm);
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: var(--dm-shadow-soft);
}
#undiscord details[open]{ border-color: rgba(37,99,235,.28); }
#undiscord summary{
  list-style: none;
  cursor: pointer;
  padding: 12px 12px;
  font-weight: 800;
  font-size: 13px;
  color: var(--dm-text);
  background:
    linear-gradient(180deg, #ffffff, #fbfdff);
  border-bottom: 1px solid var(--dm-border-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#undiscord summary::-webkit-details-marker{ display:none; }
#undiscord summary::after{
  content: '▾';
  color: var(--dm-muted);
  font-weight: 900;
}
#undiscord details[open] summary::after{ content: '▴'; }

#undiscord fieldset{
  border: none;
  margin: 0;
  padding: 12px;
}

#undiscord legend, #undiscord label{
  color: var(--dm-muted);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin-bottom: 8px;
  display: block;
}

#undiscord .sectionDescription{
  margin-top: 8px;
  margin-bottom: 8px;
  color: var(--dm-muted);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}

/* Inputs */
#undiscord .input-wrapper{ width: 100%; }
#undiscord input[type="text"],
#undiscord input[type="search"],
#undiscord input[type="password"],
#undiscord input[type="datetime-local"],
#undiscord input[type="number"]{
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid var(--dm-border);
  background: #fff !important;
  color: var(--dm-text);
  font-size: 13px;
  font-weight: 650;
  outline: none;
  transition: box-shadow .12s ease, border-color .12s ease;
}
#undiscord input::placeholder{ color: var(--dm-muted-2); font-weight: 650; }
#undiscord input:focus{
  border-color: rgba(37,99,235,.55) !important;
  box-shadow: 0 0 0 4px var(--dm-focus);
}

/* Multi input row */
#undiscord .multiInput{
  display: flex;
  gap: 8px;
  align-items: center;
}

/* Range */
#undiscord input[type="range"]{
  width: 100%;
  accent-color: var(--dm-primary);
}
#undiscord #searchDelayValue, #undiscord #deleteDelayValue{
  margin-top: 6px;
  font-size: 12px;
  color: var(--dm-muted);
  font-weight: 700;
}

/* Links */
#undiscord a{
  color: var(--dm-primary);
  text-decoration: none;
  font-weight: 800;
}
#undiscord a:hover{ text-decoration: underline; }

/* Buttons */
#undiscord button{
  height: 42px;
  border-radius: 12px;
  padding: 0 14px;
  font-size: 13px;
  font-weight: 850;
  letter-spacing: .2px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  transition: transform .12s ease, background .12s ease, border-color .12s ease, color .12s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
}

#undiscord button:active{ transform: translateY(1px); }

#undiscord .btn-primary{
  background: var(--dm-primary) !important;
  color: #fff;
  border-color: rgba(37,99,235,.65);
}
#undiscord .btn-primary:hover{ background: var(--dm-primary-hover) !important; }

#undiscord .btn-outline{
  background: #fff !important;
  color: var(--dm-primary);
  border-color: rgba(37,99,235,.35);
}
#undiscord .btn-outline:hover{
  background: rgba(37,99,235,.06) !important;
  border-color: rgba(37,99,235,.55);
}

#undiscord .btn-danger{
  background: var(--dm-danger) !important;
  color: #fff;
  border-color: rgba(220,38,38,.65);
}
#undiscord .btn-danger:hover{ background: var(--dm-danger-hover) !important; }

#undiscord .btn-icon{
  width: 42px;
  padding: 0;
}

#undiscord button:disabled{
  opacity: .55;
  cursor: not-allowed;
  pointer-events: none;
}

/* Toolbar */
#undiscord .tbar{
  padding: 12px;
  border-bottom: 1px solid var(--dm-border);
  background: linear-gradient(180deg, var(--dm-surface), var(--dm-surface-2));
}
#undiscord .tbar .row{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
#undiscord .tbar .row label{
  margin: 0;
  font-size: 12px;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 800;
  color: var(--dm-muted);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
#undiscord .tbar progress{ width: 100%; height: 10px; margin-top: 10px; }

/* progress styling (webkit) */
#undiscord progress{
  appearance: none;
  border: none;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(2,6,23,.08);
}
#undiscord progress::-webkit-progress-bar{ background: rgba(2,6,23,.08); }
#undiscord progress::-webkit-progress-value{ background: linear-gradient(90deg, var(--dm-primary), #60a5fa); }

/* Log area */
#undiscord #logArea{
  margin: 12px;
  border-radius: 14px;
  border: 1px solid var(--dm-border);
  background: #fff;
  padding: 12px;
  overflow: auto;
  flex: 1;
  min-height: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  line-height: 16px;
  color: var(--dm-text);
}
#undiscord .log{ margin-bottom: 6px; }
#undiscord .log-debug{ color: var(--dm-text); }
#undiscord .log-verb{ color: var(--dm-muted); }
#undiscord .log-info{ color: var(--dm-primary); font-weight: 800; }
#undiscord .log-warn{ color: #9a6700; font-weight: 850; }
#undiscord .log-error{ color: #b42318; font-weight: 900; }
#undiscord .log-success{ color: #1a7f37; font-weight: 900; }

/* Footer */
#undiscord .footer{
  padding: 10px 12px;
  border-top: 1px solid var(--dm-border);
  background: var(--dm-surface-2);
  display: flex;
  align-items: center;
  gap: 10px;
}
#undiscord .footer #progressPercent{
  font-size: 12px;
  color: var(--dm-muted);
  font-weight: 800;
}

/* Resize handle */
.resize-handle{
  position: absolute;
  bottom: -14px;
  right: -14px;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background:
    repeating-linear-gradient(45deg, rgba(2,6,23,.18), rgba(2,6,23,.18) 1px, transparent 2px, transparent 4px);
  cursor: nwse-resize;
  border: 1px solid rgba(2,6,23,.10);
}

/* Streamer (redact) */
#undiscord.redact .priv{ display:none !important; }
#undiscord.redact x:not(:active){
  color: transparent !important;
  background-color: #e2e8f0 !important;
  border-radius: 6px;
  cursor: default;
  user-select: none;
}
#undiscord.redact [priv]{ -webkit-text-security: disc !important; }
`);

  // Botão de toolbar (no Discord)
  var mainCss = (`
#undicord-btn {
  position: relative;
  z-index: 5;
  width: auto;
  height: 24px;
  margin: 0 8px;
  cursor: pointer;
  color: #9ca3af;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
}
#undicord-btn:hover{ color: #e5e7eb; }
#undicord-btn progress { position: absolute; top: 23px; left: -4px; width: 32px; height: 12px; display: none; }
#undicord-btn.running { color: #fca5a5 !important; }
#undicord-btn.running progress { display: block; }

/* Container window positioning */
#undiscord{
  position: fixed;
  z-index: 9999;
  top: 64px;
  right: 14px;
  display: flex;
  flex-direction: column;
  width: 880px;
  height: 82vh;
  min-width: 680px;
  max-width: calc(100vw - 20px);
  min-height: 520px;
  max-height: calc(100vh - 20px);
}
`);

  var dragCss = (`
[name^="grab-"] { position: absolute; --size: 8px; --corner-size: 18px; --offset: -1px; z-index: 20; }
[name^="grab-"]:hover{ background: rgba(37,99,235,0.10); }
[name="grab-t"] { top: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-top: var(--offset); cursor: ns-resize; }
[name="grab-r"] { top: var(--corner-size); bottom: var(--corner-size); right: 0px; width: var(--size); margin-right: var(--offset); cursor: ew-resize; }
[name="grab-b"] { bottom: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-bottom: var(--offset); cursor: ns-resize; }
[name="grab-l"] { top: var(--corner-size); bottom: var(--corner-size); left: 0px; width: var(--size); margin-left: var(--offset); cursor: ew-resize; }
[name="grab-tl"] { top: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-left: var(--offset); cursor: nwse-resize; }
[name="grab-tr"] { top: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-right: var(--offset); cursor: nesw-resize; }
[name="grab-br"] { bottom: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-right: var(--offset); cursor: nwse-resize; }
[name="grab-bl"] { bottom: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-left: var(--offset); cursor: nesw-resize; }
`);

  // Ícone do botão no Discord (lixeira estilizada)
  var buttonHtml = (`
<div id="undicord-btn" tabindex="0" role="button" aria-label="Diskill Message" title="Diskill Message • apagar suas mensagens">
  <svg aria-hidden="false" width="22" height="22" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
    <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
  </svg>
  <progress></progress>
</div>
`);

  // Template da janela — IDs essenciais mantidos
  var undiscordTemplate = (`
<div id="undiscord" class="browser container redact" style="display:none;">
  <div class="header">
    <div class="brandMark" title="${BRAND_NAME}">
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M9 3h6v2H9V3zm-4 2h14v2H5V5zm2 4h10l-1 12H8L7 9zm4 2v8h2v-8h-2z"/>
      </svg>
    </div>

    <div class="col" style="display:flex; flex-direction:column; gap:2px;">
      <h3>${BRAND_NAME}</h3>
      <div class="subtitle">Apagar mensagens em massa • somente as suas</div>
    </div>

    <div class="spacer"></div>

    <div id="hide" class="iconBtn" aria-label="Fechar" role="button" tabindex="0" title="Fechar">
      <svg aria-hidden="false" width="22" height="22" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
        </path>
      </svg>
    </div>
  </div>

  <div class="window-body">
    <div class="sidebar scroll">

      <details open>
        <summary>Geral</summary>
        <fieldset>
          <legend>
            ID do autor
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="multiInput">
            <div class="input-wrapper">
              <input id="authorId" type="text" priv placeholder="Seu ID (recomendado: automático)">
            </div>
            <button id="getAuthor" class="btn-outline">eu</button>
          </div>

          <div class="sectionDescription">
            Dica: se você deixar vazio, o script preenche automaticamente com seu ID.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            ID do servidor
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>
          <div class="multiInput">
            <div class="input-wrapper">
              <input id="guildId" type="text" priv placeholder="Ex: 123... ou @me (DMs)">
            </div>
            <button id="getGuild" class="btn-outline">atual</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            ID do canal
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>
          <div class="multiInput">
            <div class="input-wrapper">
              <input id="channelId" type="text" priv placeholder="Ex: 123... (ou vários separados por vírgula)">
            </div>
            <button id="getChannel" class="btn-outline">atual</button>
          </div>

          <div class="sectionDescription">
            <label style="display:flex; align-items:center; gap:8px;">
              <input id="includeNsfw" type="checkbox"> Este é um canal NSFW
            </label>
          </div>
        </fieldset>
      </details>

      <details>
        <summary>Limpar arquivo (export do Discord)</summary>
        <fieldset>
          <legend>
            Importar index.json
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="input-wrapper">
            <input type="file" id="importJsonInput" accept="application/json,.json" style="width:100%;">
          </div>

          <div class="sectionDescription">
            Depois de solicitar seus dados ao Discord, importe o arquivo <b>messages/index.json</b>.
          </div>
        </fieldset>
      </details>

      <details>
        <summary>Filtros</summary>
        <fieldset>
          <legend>
            Busca por texto
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="input-wrapper">
            <input id="search" type="text" placeholder="Contendo texto" priv>
          </div>

          <div class="sectionDescription">Apaga apenas mensagens que contenham o texto.</div>

          <div class="sectionDescription">
            <label style="display:flex; align-items:center; gap:8px;">
              <input id="hasLink" type="checkbox"> tem: link
            </label>
          </div>

          <div class="sectionDescription">
            <label style="display:flex; align-items:center; gap:8px;">
              <input id="hasFile" type="checkbox"> tem: arquivo
            </label>
          </div>

          <div class="sectionDescription">
            <label style="display:flex; align-items:center; gap:8px;">
              <input id="includePinned" type="checkbox"> incluir fixadas
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Regex (opcional)
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="sectionDescription">
            Apaga mensagens que combinem com a expressão regular.
          </div>

          <div class="input-wrapper">
            <input id="pattern" type="text" placeholder="ex: (promo|cupom|link)" priv>
          </div>
        </fieldset>
      </details>

      <details>
        <summary>Intervalos</summary>

        <fieldset>
          <legend>
            Intervalo por mensagem
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="multiInput">
            <div class="input-wrapper">
              <input id="minId" type="text" placeholder="Depois de uma mensagem" priv>
            </div>
            <button id="pickMessageAfter" class="btn-outline">escolher</button>
          </div>

          <div class="multiInput" style="margin-top:10px;">
            <div class="input-wrapper">
              <input id="maxId" type="text" placeholder="Antes de uma mensagem" priv>
            </div>
            <button id="pickMessageBefore" class="btn-outline">escolher</button>
          </div>

          <div class="sectionDescription">
            Use isso para limitar o intervalo pelo ID da mensagem.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Intervalo por data
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="input-wrapper">
            <input id="minDate" type="datetime-local" title="Mensagens enviadas DEPOIS desta data">
          </div>

          <div class="input-wrapper" style="margin-top:10px;">
            <input id="maxDate" type="datetime-local" title="Mensagens enviadas ANTES desta data">
          </div>

          <div class="sectionDescription">
            * O filtro por data não funciona se você usar o intervalo por mensagem.
          </div>
        </fieldset>
      </details>

      <details>
        <summary>Avançado</summary>

        <fieldset>
          <legend>
            Atraso da busca
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="input-wrapper">
            <input id="searchDelay" type="range" value="30000" step="100" min="100" max="60000">
            <div id="searchDelayValue"></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Atraso da exclusão
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="input-wrapper">
            <input id="deleteDelay" type="range" value="1000" step="50" min="50" max="10000">
            <div id="deleteDelayValue"></div>
          </div>

          <div class="sectionDescription">
            Ajuste para reduzir risco de rate limit.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Token de autorização
            <a href="{{DOCS}}" title="Ajuda" target="_blank" rel="noopener noreferrer">ajuda</a>
          </legend>

          <div class="multiInput">
            <div class="input-wrapper">
              <input id="token" type="password" autocomplete="new-password" priv placeholder="Token (use 'preencher')">
            </div>
            <button id="getToken" class="btn-outline">preencher</button>
          </div>
        </fieldset>

        <div class="sectionDescription" style="margin-top:12px;">
          Versão: <b>${VERSION}</b> • GitHub: <a href="${HOME}" target="_blank" rel="noopener noreferrer">turkosx</a>
        </div>
      </details>

    </div>

    <div class="main col">
      <div class="tbar col">
        <div class="row">
          <button id="toggleSidebar" class="btn-outline btn-icon" title="Mostrar/ocultar painel">☰</button>

          <button id="start" class="btn-primary" style="min-width: 170px;" title="Iniciar exclusão">
            ▶︎ Apagar
          </button>

          <button id="stop" class="btn-danger" title="Parar" disabled>
            🛑 Parar
          </button>

          <button id="clear" class="btn-outline" title="Limpar log">
            Limpar log
          </button>

          <label title="Ocultar informações sensíveis para prints/stream">
            <input id="redact" type="checkbox" checked> Modo streamer
          </label>

          <label title="Auto rolar log enquanto roda">
            <input id="autoScroll" type="checkbox" checked> Rolagem automática
          </label>
        </div>

        <progress id="progressBar" style="display:none;"></progress>
      </div>

      <pre id="logArea" class="logarea scroll">
<div style="padding:10px; border:1px solid rgba(37,99,235,.22); border-radius:14px; background:rgba(37,99,235,.06); font-weight:800;">
${BRAND_NAME}: este script apaga SOMENTE suas mensagens. Use com cuidado e confira filtros/intervalos antes de rodar.
</div>

<center style="margin-top:10px;">
  <div style="font-weight:900;">Repo: <a href="${HOME}" target="_blank" rel="noopener noreferrer">Diskillrd-Message</a></div>
  <div style="margin-top:6px; font-weight:800; color:#5b677a;">Se der rate limit, aumente os atrasos no painel Avançado.</div>
</center>
      </pre>

      <div class="footer row">
        <div id="progressPercent"></div>
        <span class="spacer"></span>
        <div class="resize-handle"></div>
      </div>
    </div>
  </div>
</div>
`);

  // ======================= LOG =======================
  const log = {
    debug() { return logFn ? logFn('debug', arguments) : console.debug.apply(console, arguments); },
    info() { return logFn ? logFn('info', arguments) : console.info.apply(console, arguments); },
    verb() { return logFn ? logFn('verb', arguments) : console.log.apply(console, arguments); },
    warn() { return logFn ? logFn('warn', arguments) : console.warn.apply(console, arguments); },
    error() { return logFn ? logFn('error', arguments) : console.error.apply(console, arguments); },
    success() { return logFn ? logFn('success', arguments) : console.info.apply(console, arguments); },
  };

  var logFn;
  const setLogFn = (fn) => logFn = fn;

  // ======================= HELPERS =======================
  const normalizeToken = (t) => {
    if (!t) return '';
    if (typeof t === 'object') t = t.token || '';
    if (typeof t !== 'string') t = String(t);
    t = t.trim();

    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      try { t = JSON.parse(t); } catch { t = t.slice(1, -1); }
    }
    return (t || '').trim();
  };

  const looksLikeDiscordToken = (t) => {
    t = normalizeToken(t);
    if (!t) return false;
    if (t.includes('@')) return false;
    if (/\s/.test(t)) return false;
    if (t.length < 30) return false;
    const hasDots = (t.match(/\./g) || []).length >= 1;
    return hasDots || t.startsWith('mfa.');
  };

  const maskToken = (t) => {
    t = normalizeToken(t);
    if (!t) return '(vazio)';
    if (t.length <= 12) return '(**curto demais**)';
    return `${t.slice(0, 6)}…${t.slice(-4)} (len=${t.length})`;
  };

  const hardenInputsAgainstAutofill = (root) => {
    root.querySelectorAll('input, textarea').forEach((el, i) => {
      el.setAttribute('autocomplete', 'off');
      el.setAttribute('autocapitalize', 'off');
      el.setAttribute('autocorrect', 'off');
      el.setAttribute('spellcheck', 'false');
      if (!el.getAttribute('name')) el.setAttribute('name', `diskill_${el.id || 'field'}_${i}`);
      el.setAttribute('data-lpignore', 'true');
      el.setAttribute('data-1p-ignore', 'true');
    });

    const tokenEl = root.querySelector('input#token');
    if (tokenEl) {
      tokenEl.setAttribute('autocomplete', 'new-password');
      tokenEl.setAttribute('name', 'diskill_auth_token');
      tokenEl.setAttribute('data-form-type', 'other');
    }
  };

  async function testAuthToken(token) {
    token = normalizeToken(token);
    try {
      const resp = await fetch('https://discord.com/api/v9/users/@me', {
        headers: { 'Authorization': token },
        credentials: 'include',
      });
      return resp.ok;
    } catch {
      return false;
    }
  }

  const wait = async ms => new Promise(done => setTimeout(done, ms));
  const msToHMS = s => `${s / 3.6e6 | 0}h ${(s % 3.6e6) / 6e4 | 0}m ${(s % 6e4) / 1000 | 0}s`;
  const escapeHTML = html => String(html).replace(/[&<"']/g, m => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', '\'': '&#039;' })[m]);
  const redact = str => `<x>${escapeHTML(str)}</x>`;
  const queryString = params => params.filter(p => p[1] !== undefined).map(p => p[0] + '=' + encodeURIComponent(p[1])).join('&');
  const ask = async msg => new Promise(resolve => setTimeout(() => resolve(window.confirm(msg)), 10));
  const toSnowflake = (date) => /:/.test(date) ? ((new Date(date).getTime() - 1420070400000) * Math.pow(2, 22)) : date;
  const replaceInterpolations = (str, obj, removeMissing = false) =>
    str.replace(/\{\{([\w_]+)\}\}/g, (m, key) => obj[key] || (removeMissing ? '' : m));

  // ======================= DOM HELPERS =======================
  function createElm(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.removeChild(temp.firstElementChild);
  }

  function insertCss(css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return style;
  }
// ======================= PARTE 2/3 =======================

  /**
   * Core: apagar mensagens do Discord (somente do authorId)
   */
  class DiskillCore {

    options = {
      authToken: null,
      authorId: null,
      guildId: null,
      channelId: null,
      minId: null,
      maxId: null,
      content: null,
      hasLink: null,
      hasFile: null,
      includeNsfw: null,
      includePinned: null,
      pattern: null,
      searchDelay: null,
      deleteDelay: null,
      maxAttempt: 2,
      askForConfirmation: true,
    };

    state = {
      running: false,
      delCount: 0,
      failCount: 0,
      grandTotal: 0,
      offset: 0,
      iterations: 0,
      _seachResponse: null,
      _messagesToDelete: [],
      _skippedMessages: [],
    };

    stats = {
      startTime: new Date(),
      throttledCount: 0,
      throttledTotalTime: 0,
      lastPing: null,
      avgPing: null,
      etr: 0,
    };

    onStart = undefined;
    onProgress = undefined;
    onStop = undefined;

    resetState() {
      this.state = {
        running: false,
        delCount: 0,
        failCount: 0,
        grandTotal: 0,
        offset: 0,
        iterations: 0,
        _seachResponse: null,
        _messagesToDelete: [],
        _skippedMessages: [],
      };
      this.options.askForConfirmation = true;
    }

    async runBatch(queue) {
      if (this.state.running) return log.error('Já está rodando!');
      log.info(`Rodando lote com ${queue.length} tarefas`);

      for (let i = 0; i < queue.length; i++) {
        const job = queue[i];
        log.info('Iniciando tarefa...', `(${i + 1}/${queue.length})`);

        this.options = { ...this.options, ...job };

        await this.run(true);
        if (!this.state.running) break;

        log.info('Tarefa finalizada.', `(${i + 1}/${queue.length})`);
        this.resetState();
        this.options.askForConfirmation = false;
        this.state.running = true;
      }

      log.info('Lote finalizado.');
      this.state.running = false;
    }

    async run(isJob = false) {
      if (this.state.running && !isJob) return log.error('Já está rodando!');

      this.state.running = true;
      this.stats.startTime = new Date();

      log.success(`\nIniciado em ${this.stats.startTime.toLocaleString()}`);
      log.debug(
        `authorId = "${redact(this.options.authorId)}"`,
        `guildId = "${redact(this.options.guildId)}"`,
        `channelId = "${redact(this.options.channelId)}"`,
        `minId = "${redact(this.options.minId)}"`,
        `maxId = "${redact(this.options.maxId)}"`,
        `hasLink = ${!!this.options.hasLink}`,
        `hasFile = ${!!this.options.hasFile}`,
      );

      if (this.onStart) this.onStart(this.state, this.stats);

      do {
        this.state.iterations++;

        log.verb('Buscando mensagens...');
        await this.search();
        await this.filterResponse();

        log.verb(
          `Total geral: ${this.state.grandTotal}`,
          `(Nesta página: ${this.state._seachResponse.messages.length}`,
          `Para apagar: ${this.state._messagesToDelete.length}`,
          `Puladas: ${this.state._skippedMessages.length})`,
          `offset: ${this.state.offset}`
        );

        this.printStats();
        this.calcEtr();
        log.verb(`Tempo estimado restante: ${msToHMS(this.stats.etr)}`);

        if (this.state._messagesToDelete.length > 0) {
          if (await this.confirm() === false) {
            this.state.running = false;
            break;
          }
          await this.deleteMessagesFromList();
        } else if (this.state._skippedMessages.length > 0) {
          const oldOffset = this.state.offset;
          this.state.offset += this.state._skippedMessages.length;
          log.verb('Nada para apagar nesta página. Indo para a próxima...');
          log.verb(`Puladas ${this.state._skippedMessages.length} de ${this.state._seachResponse.messages.length}.`, `(Offset era ${oldOffset}, ajustado para ${this.state.offset})`);
        } else {
          log.verb('Finalizado: a API retornou página vazia.');
          log.verb('[Estado final]', this.state);
          if (isJob) break;
          this.state.running = false;
        }

        log.verb(`Aguardando ${(this.options.searchDelay / 1000).toFixed(2)}s antes da próxima página...`);
        await wait(this.options.searchDelay);

      } while (this.state.running);

      this.stats.endTime = new Date();
      log.success(`Encerrado em ${this.stats.endTime.toLocaleString()}! Tempo total: ${msToHMS(this.stats.endTime.getTime() - this.stats.startTime.getTime())}`);
      this.printStats();
      log.debug(`Apagadas ${this.state.delCount} mensagens, ${this.state.failCount} falharam.\n`);

      if (this.onStop) this.onStop(this.state, this.stats);
    }

    stop() {
      this.state.running = false;
      if (this.onStop) this.onStop(this.state, this.stats);
    }

    calcEtr() {
      this.stats.etr =
        (this.options.searchDelay * Math.round(this.state.grandTotal / 25)) +
        ((this.options.deleteDelay + this.stats.avgPing) * this.state.grandTotal);
    }

    async confirm() {
      if (!this.options.askForConfirmation) return true;

      log.verb('Aguardando sua confirmação...');
      const preview = this.state._messagesToDelete
        .slice(0, 12)
        .map(m => `${m.author.username}#${m.author.discriminator}: ${m.attachments.length ? '[ANEXOS]' : m.content}`)
        .join('\n');

      const answer = await ask(
        `Deseja apagar ~${this.state.grandTotal} mensagens? (Estimativa: ${msToHMS(this.stats.etr)})` +
        '\n(O número real pode ser menor se você estiver usando filtros)' +
        '\n\n---- Prévia (até 12) ----\n' + preview
      );

      if (!answer) {
        log.error('Cancelado por você!');
        return false;
      } else {
        log.verb('OK');
        this.options.askForConfirmation = false;
        return true;
      }
    }

    async search() {
      let API_SEARCH_URL;
      if (this.options.guildId === '@me') API_SEARCH_URL = `https://discord.com/api/v9/channels/${this.options.channelId}/messages/`;
      else API_SEARCH_URL = `https://discord.com/api/v9/guilds/${this.options.guildId}/messages/`;

      let resp;
      try {
        this.beforeRequest();
        resp = await fetch(API_SEARCH_URL + 'search?' + queryString([
          // 🔒 sempre author_id (evita puxar msg de terceiros)
          ['author_id', this.options.authorId || undefined],
          ['channel_id', (this.options.guildId !== '@me' ? this.options.channelId : undefined) || undefined],
          ['min_id', this.options.minId ? toSnowflake(this.options.minId) : undefined],
          ['max_id', this.options.maxId ? toSnowflake(this.options.maxId) : undefined],
          ['sort_by', 'timestamp'],
          ['sort_order', 'desc'],
          ['offset', this.state.offset],
          ['has', this.options.hasLink ? 'link' : undefined],
          ['has', this.options.hasFile ? 'file' : undefined],
          ['content', this.options.content || undefined],
          ['include_nsfw', this.options.includeNsfw ? true : undefined],
        ]), {
          headers: { 'Authorization': this.options.authToken }
        });
        this.afterRequest();
      } catch (err) {
        this.state.running = false;
        log.error('A requisição de busca falhou:', err);
        throw err;
      }

      if (resp.status === 202) {
        let w = (await resp.json()).retry_after * 1000;
        w = w || this.stats.searchDelay;
        this.stats.throttledCount++;
        this.stats.throttledTotalTime += w;
        log.warn(`Este canal ainda não foi indexado. Aguardando ${w}ms...`);
        await wait(w);
        return await this.search();
      }

      if (!resp.ok) {
        if (resp.status === 429) {
          let w = (await resp.json()).retry_after * 1000;
          w = w || this.stats.searchDelay;

          this.stats.throttledCount++;
          this.stats.throttledTotalTime += w;
          this.stats.searchDelay += w;
          w = this.stats.searchDelay;

          log.warn(`Rate limit na busca (${w}ms). Aumentando atraso da busca...`);
          this.printStats();
          log.verb(`Resfriando por ${w * 2}ms antes de tentar novamente...`);

          await wait(w * 2);
          return await this.search();
        } else {
          this.state.running = false;
          log.error(`Erro ao buscar mensagens (HTTP ${resp.status})!\n`, await resp.json());
          throw resp;
        }
      }

      const data = await resp.json();
      this.state._seachResponse = data;
      return data;
    }

    async filterResponse() {
      const data = this.state._seachResponse;

      const total = data.total_results;
      if (total > this.state.grandTotal) this.state.grandTotal = total;

      const discoveredMessages = data.messages.map(convo => convo.find(message => message.hit === true));

      let messagesToDelete = discoveredMessages;

      // Apenas tipos deletáveis
      messagesToDelete = messagesToDelete.filter(msg => msg.type === 0 || (msg.type >= 6 && msg.type <= 21));
      messagesToDelete = messagesToDelete.filter(msg => msg.pinned ? this.options.includePinned : true);

      // ✅ FAILSAFE: nunca tenta apagar msg que não é sua
      if (this.options.authorId) {
        messagesToDelete = messagesToDelete.filter(msg => msg?.author?.id === this.options.authorId);
      } else {
        messagesToDelete = [];
      }

      // Regex opcional
      try {
        const regex = new RegExp(this.options.pattern, 'i');
        messagesToDelete = messagesToDelete.filter(msg => regex.test(msg.content));
      } catch (e) {
        // pattern vazio ou inválido = ignora
      }

      const skippedMessages = discoveredMessages.filter(msg => !messagesToDelete.find(m => m.id === msg.id));

      this.state._messagesToDelete = messagesToDelete;
      this.state._skippedMessages = skippedMessages;
    }

    async deleteMessagesFromList() {
      for (let i = 0; i < this.state._messagesToDelete.length; i++) {
        const message = this.state._messagesToDelete[i];
        if (!this.state.running) return log.error('Parado por você!');

        // failsafe extra
        if (this.options.authorId && message?.author?.id !== this.options.authorId) {
          log.warn('Pulando mensagem (não é sua).');
          this.state.offset++;
          continue;
        }

        log.debug(
          `[${this.state.delCount + 1}/${this.state.grandTotal}] ` +
          `<sup>${new Date(message.timestamp).toLocaleString()}</sup> ` +
          `<b>${redact(message.author.username + '#' + message.author.discriminator)}</b>` +
          `: <i>${redact(message.content).replace(/\n/g, '↵')}</i>` +
          (message.attachments.length ? redact(JSON.stringify(message.attachments)) : ''),
          `<sup>{ID:${redact(message.id)}}</sup>`
        );

        let attempt = 0;
        while (attempt < this.options.maxAttempt) {
          const result = await this.deleteMessage(message);

          if (result === 'RETRY') {
            attempt++;
            log.verb(`Tentando novamente em ${this.options.deleteDelay}ms... (${attempt}/${this.options.maxAttempt})`);
            await wait(this.options.deleteDelay);
          } else break;
        }

        this.calcEtr();
        if (this.onProgress) this.onProgress(this.state, this.stats);

        await wait(this.options.deleteDelay);
      }
    }

    async deleteMessage(message) {
      const API_DELETE_URL = `https://discord.com/api/v9/channels/${message.channel_id}/messages/${message.id}`;
      let resp;

      try {
        this.beforeRequest();
        resp = await fetch(API_DELETE_URL, {
          method: 'DELETE',
          headers: { 'Authorization': this.options.authToken },
        });
        this.afterRequest();
      } catch (err) {
        log.error('Erro na requisição de exclusão:', err);
        this.state.failCount++;
        return 'FAILED';
      }

      if (!resp.ok) {
        if (resp.status === 429) {
          const w = (await resp.json()).retry_after * 1000;
          this.stats.throttledCount++;
          this.stats.throttledTotalTime += w;
          this.options.deleteDelay = w;
          log.warn(`Rate limit ao apagar (${w}ms). Ajustando atraso da exclusão para ${this.options.deleteDelay}ms.`);
          this.printStats();
          log.verb(`Resfriando por ${w * 2}ms antes de tentar novamente...`);
          await wait(w * 2);
          return 'RETRY';
        }

        // ✅ evita travar: se não pode apagar (404/403), pula
        if (resp.status === 404 || resp.status === 403) {
          log.warn(`Não foi possível apagar (HTTP ${resp.status}). Pulando esta mensagem.`);
          this.state.offset++;
          this.state.failCount++;
          return 'FAIL_SKIP';
        }

        const body = await resp.text();
        try {
          const r = JSON.parse(body);

          if (resp.status === 400 && r.code === 50083) {
            log.warn('Não foi possível apagar (thread arquivada). Pulando.');
            this.state.offset++;
            this.state.failCount++;
            return 'FAIL_SKIP';
          }

          log.error(`Erro ao apagar (HTTP ${resp.status})!`, r);
          this.state.failCount++;
          return 'FAILED';
        } catch {
          log.error(`Falha ao interpretar resposta (HTTP ${resp.status})!`, body);
          this.state.failCount++;
          return 'FAILED';
        }
      }

      this.state.delCount++;
      return 'OK';
    }

    #beforeTs = 0;
    beforeRequest() { this.#beforeTs = Date.now(); }
    afterRequest() {
      this.stats.lastPing = (Date.now() - this.#beforeTs);
      this.stats.avgPing = this.stats.avgPing > 0
        ? (this.stats.avgPing * 0.9) + (this.stats.lastPing * 0.1)
        : this.stats.lastPing;
    }

    printStats() {
      log.verb(
        `Atraso exclusão: ${this.options.deleteDelay}ms, Atraso busca: ${this.options.searchDelay}ms`,
        `Ping: ${this.stats.lastPing}ms, Média: ${this.stats.avgPing | 0}ms`,
      );
      log.verb(
        `Rate limited: ${this.stats.throttledCount}x.`,
        `Tempo total em rate limit: ${msToHMS(this.stats.throttledTotalTime)}.`
      );
    }
  }

  // ======================= DRAG + RESIZE =======================
  const MOVE = 0;
  const RESIZE_T = 1;
  const RESIZE_B = 2;
  const RESIZE_L = 4;
  const RESIZE_R = 8;
  const RESIZE_TL = RESIZE_T + RESIZE_L;
  const RESIZE_TR = RESIZE_T + RESIZE_R;
  const RESIZE_BL = RESIZE_B + RESIZE_L;
  const RESIZE_BR = RESIZE_B + RESIZE_R;

  class DragResize {
    constructor({ elm, moveHandle, options }) {
      this.options = defaultArgs({
        enabledDrag: true,
        enabledResize: true,
        minWidth: 560,
        maxWidth: Infinity,
        minHeight: 420,
        maxHeight: Infinity,
        dragAllowX: true,
        dragAllowY: true,
        resizeAllowX: true,
        resizeAllowY: true,
        draggingClass: 'drag',
        useMouseEvents: true,
        useTouchEvents: true,
        createHandlers: true,
      }, options);
      Object.assign(this, options);
      options = undefined;

      elm.style.position = 'fixed';
      this.drag_m = new Draggable(elm, moveHandle, MOVE, this.options);

      if (this.options.createHandlers) {
        this.el_t = createElement('div', { name: 'grab-t' }, elm);
        this.drag_t = new Draggable(elm, this.el_t, RESIZE_T, this.options);
        this.el_r = createElement('div', { name: 'grab-r' }, elm);
        this.drag_r = new Draggable(elm, this.el_r, RESIZE_R, this.options);
        this.el_b = createElement('div', { name: 'grab-b' }, elm);
        this.drag_b = new Draggable(elm, this.el_b, RESIZE_B, this.options);
        this.el_l = createElement('div', { name: 'grab-l' }, elm);
        this.drag_l = new Draggable(elm, this.el_l, RESIZE_L, this.options);
        this.el_tl = createElement('div', { name: 'grab-tl' }, elm);
        this.drag_tl = new Draggable(elm, this.el_tl, RESIZE_TL, this.options);
        this.el_tr = createElement('div', { name: 'grab-tr' }, elm);
        this.drag_tr = new Draggable(elm, this.el_tr, RESIZE_TR, this.options);
        this.el_br = createElement('div', { name: 'grab-br' }, elm);
        this.drag_br = new Draggable(elm, this.el_br, RESIZE_BR, this.options);
        this.el_bl = createElement('div', { name: 'grab-bl' }, elm);
        this.drag_bl = new Draggable(elm, this.el_bl, RESIZE_BL, this.options);
      }
    }
  }

  class Draggable {
    constructor(targetElm, handleElm, op, options) {
      Object.assign(this, options);
      options = undefined;

      this._targetElm = targetElm;
      this._handleElm = handleElm;

      let vw = window.innerWidth;
      let vh = window.innerHeight;
      let initialX, initialY, initialT, initialL, initialW, initialH;

      const clamp = (value, min, max) => value < min ? min : value > max ? max : value;

      const moveOp = (x, y) => {
        const deltaX = (x - initialX);
        const deltaY = (y - initialY);
        const t = clamp(initialT + deltaY, 0, vh - initialH);
        const l = clamp(initialL + deltaX, 0, vw - initialW);
        this._targetElm.style.top = t + 'px';
        this._targetElm.style.left = l + 'px';
      };

      const resizeOp = (x, y) => {
        x = clamp(x, 0, vw);
        y = clamp(y, 0, vh);
        const deltaX = (x - initialX);
        const deltaY = (y - initialY);
        const resizeDirX = (op & RESIZE_L) ? -1 : 1;
        const resizeDirY = (op & RESIZE_T) ? -1 : 1;
        const deltaXMax = (this.maxWidth - initialW);
        const deltaXMin = (this.minWidth - initialW);
        const deltaYMax = (this.maxHeight - initialH);
        const deltaYMin = (this.minHeight - initialH);
        const t = initialT + clamp(deltaY * resizeDirY, deltaYMin, deltaYMax) * resizeDirY;
        const l = initialL + clamp(deltaX * resizeDirX, deltaXMin, deltaXMax) * resizeDirX;
        const w = initialW + clamp(deltaX * resizeDirX, deltaXMin, deltaXMax);
        const h = initialH + clamp(deltaY * resizeDirY, deltaYMin, deltaYMax);
        if (op & RESIZE_T) { this._targetElm.style.top = t + 'px'; this._targetElm.style.height = h + 'px'; }
        if (op & RESIZE_B) { this._targetElm.style.height = h + 'px'; }
        if (op & RESIZE_L) { this._targetElm.style.left = l + 'px'; this._targetElm.style.width = w + 'px'; }
        if (op & RESIZE_R) { this._targetElm.style.width = w + 'px'; }
      };

      let operation = op === MOVE ? moveOp : resizeOp;

      function dragStartHandler(e) {
        const touch = e.type === 'touchstart';
        if ((e.buttons === 1 || e.which === 1) || touch) {
          e.preventDefault();
          const x = touch ? e.touches[0].clientX : e.clientX;
          const y = touch ? e.touches[0].clientY : e.clientY;
          initialX = x; initialY = y;
          vw = window.innerWidth; vh = window.innerHeight;
          initialT = this._targetElm.offsetTop;
          initialL = this._targetElm.offsetLeft;
          initialW = this._targetElm.clientWidth;
          initialH = this._targetElm.clientHeight;

          if (this.useMouseEvents) {
            document.addEventListener('mousemove', this._dragMoveHandler);
            document.addEventListener('mouseup', this._dragEndHandler);
          }
          if (this.useTouchEvents) {
            document.addEventListener('touchmove', this._dragMoveHandler, { passive: false });
            document.addEventListener('touchend', this._dragEndHandler);
          }
          this._targetElm.classList.add(this.draggingClass);
        }
      }

      function dragMoveHandler(e) {
        e.preventDefault();
        let x, y;
        const touch = e.type === 'touchmove';
        if (touch) {
          const t = e.touches[0];
          x = t.clientX; y = t.clientY;
        } else {
          if ((e.buttons || e.which) !== 1) {
            this._dragEndHandler();
            return;
          }
          x = e.clientX; y = e.clientY;
        }
        operation(x, y);
      }

      function dragEndHandler() {
        if (this.useMouseEvents) {
          document.removeEventListener('mousemove', this._dragMoveHandler);
          document.removeEventListener('mouseup', this._dragEndHandler);
        }
        if (this.useTouchEvents) {
          document.removeEventListener('touchmove', this._dragMoveHandler);
          document.removeEventListener('touchend', this._dragEndHandler);
        }
        this._targetElm.classList.remove(this.draggingClass);
      }

      this._dragStartHandler = dragStartHandler.bind(this);
      this._dragMoveHandler = dragMoveHandler.bind(this);
      this._dragEndHandler = dragEndHandler.bind(this);

      this.enable();
    }

    enable() {
      this.destroy();
      if (this.useMouseEvents) this._handleElm.addEventListener('mousedown', this._dragStartHandler);
      if (this.useTouchEvents) this._handleElm.addEventListener('touchstart', this._dragStartHandler, { passive: false });
    }

    destroy() {
      this._targetElm.classList.remove(this.draggingClass);
      if (this.useMouseEvents) {
        this._handleElm.removeEventListener('mousedown', this._dragStartHandler);
        document.removeEventListener('mousemove', this._dragMoveHandler);
        document.removeEventListener('mouseup', this._dragEndHandler);
      }
      if (this.useTouchEvents) {
        this._handleElm.removeEventListener('touchstart', this._dragStartHandler);
        document.removeEventListener('touchmove', this._dragMoveHandler);
        document.removeEventListener('touchend', this._dragEndHandler);
      }
    }
  }

  function createElement(tag='div', attrs, parent) {
    const elm = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => elm.setAttribute(k, v));
    if (parent) parent.appendChild(elm);
    return elm;
  }

  function defaultArgs(defaults, options) {
    function isObj(x) { return x !== null && typeof x === 'object'; }
    function hasOwn(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
    if (isObj(options)) for (let prop in defaults) {
      if (hasOwn(defaults, prop) && hasOwn(options, prop) && options[prop] !== undefined) {
        if (isObj(defaults[prop])) defaultArgs(defaults[prop], options[prop]);
        else defaults[prop] = options[prop];
      }
    }
    return defaults;
  }

  // ======================= MESSAGE PICKER =======================
  const messagePickerCss = `
body.undiscord-pick-message [data-list-id="chat-messages"] {
  background-color: rgba(37,99,235,.06) !important;
  box-shadow: inset 0 0 0px 2px rgba(37,99,235,.35) !important;
}
body.undiscord-pick-message [id^="message-content-"]:hover {
  cursor: cell;
  background: rgba(37,99,235,.08) !important;
}
body.undiscord-pick-message [id^="message-content-"]:hover::after {
  position: absolute;
  top: calc(50% - 11px);
  left: 6px;
  z-index: 10;
  width: 98px;
  height: 22px;
  line-height: 22px;
  font-family: var(--font-display);
  background-color: #2563eb;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  border-radius: 8px;
  content: 'ESTE 👉';
}
body.undiscord-pick-message.before [id^="message-content-"]:hover::after { content: 'ANTES 👆'; }
body.undiscord-pick-message.after [id^="message-content-"]:hover::after { content: 'DEPOIS 👇'; }
`;

  const messagePicker = {
    init() { insertCss(messagePickerCss); },
    grab(auxiliary) {
      return new Promise((resolve) => {
        document.body.classList.add('undiscord-pick-message');
        if (auxiliary) document.body.classList.add(auxiliary);

        function clickHandler(e) {
          const message = e.target.closest('[id^="message-content-"]');
          if (message) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            if (auxiliary) document.body.classList.remove(auxiliary);
            document.body.classList.remove('undiscord-pick-message');
            document.removeEventListener('click', clickHandler);

            try { resolve(message.id.match(/message-content-(\d+)/)[1]); }
            catch { resolve(null); }
          }
        }

        document.addEventListener('click', clickHandler);
      });
    }
  };
  window.messagePicker = messagePicker;

  function getToken() {
    window.dispatchEvent(new Event('beforeunload'));
    const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
    try {
      return JSON.parse(LS.token);
    } catch {
      log.info('Não foi possível detectar o token no localStorage automaticamente.');
      log.info('Tentando capturar token via webpack...');
      return (window.webpackChunkdiscord_app.push([[''], {}, e => { window.m = []; for (let c in e.c) window.m.push(e.c[c]); }]), window.m)
        .find(m => m?.exports?.default?.getToken !== void 0)
        .exports.default.getToken();
    }
  }

  function getAuthorId() {
    const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
    return JSON.parse(LS.user_id_cache);
  }

  function getGuildId() {
    const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
    if (m) return m[1];
    else alert('Não foi possível encontrar o ID do servidor!\nConfirme se você está em um servidor ou DM.');
  }

  function getChannelId() {
    const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
    if (m) return m[2];
    else alert('Não foi possível encontrar o ID do canal!\nConfirme se você está em um canal ou DM.');
  }

  function fillToken() {
    try {
      const t = normalizeToken(getToken());
      if (!looksLikeDiscordToken(t)) {
        log.error('Token não parece válido. Possível autofill do navegador (senha/email caindo aqui).');
        log.info('Dica: desative/remova senha salva do Discord no navegador (isso costuma quebrar o script).');
        log.info('Token detectado:', maskToken(t));
        return '';
      }
      return t;
    } catch (err) {
      log.error('Não consegui detectar automaticamente o Token.');
      log.info('Dica: pode ser autofill do gerenciador de senhas preenchendo o campo errado.');
      return '';
    }
  }

  const diskillCore = new DiskillCore();
  messagePicker.init();
// ======================= PARTE 3/3 =======================

  const ui = {
    window: null,
    btn: null,
    logArea: null,
    autoScroll: null,
    progressMain: null,
    progressIcon: null,
    percent: null,
  };

  const $ = (s) => ui.window.querySelector(s);

  function initUI() {
    insertCss(themeCss);
    insertCss(mainCss);
    insertCss(dragCss);

    const html = replaceInterpolations(undiscordTemplate, { DOCS });
    ui.window = createElm(html);
    document.body.appendChild(ui.window);

    // Anti-autofill
    hardenInputsAgainstAutofill(ui.window);

    new DragResize({ elm: ui.window, moveHandle: $('.header') });

    // Botão no Discord
    ui.btn = createElm(buttonHtml);
    ui.btn.addEventListener('click', toggleWindow);

    // Host fallback
    const FALLBACK_HOST_ID = 'diskill-fallback-host';

    function isVisible(el) {
      if (!el || !el.isConnected) return false;
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      const cs = getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0';
    }

    function ensureFallbackHost() {
      let host = document.getElementById(FALLBACK_HOST_ID);
      if (!host) {
        host = document.createElement('div');
        host.id = FALLBACK_HOST_ID;
        host.style.position = 'fixed';
        host.style.top = '12px';
        host.style.right = '12px';
        host.style.zIndex = '9999';
        document.body.appendChild(host);
      }
      return host;
    }

    function findBestToolbar() {
      const root = document.querySelector('#app-mount');
      if (!root) return null;

      const toolbars = Array.from(root.querySelectorAll('[role="toolbar"], [class*="toolbar"]')).filter(isVisible);
      if (!toolbars.length) return null;

      const list = root.querySelector('[data-list-id="chat-messages"]');
      const listRect = list && isVisible(list) ? list.getBoundingClientRect() : null;

      if (listRect) {
        let best = null;
        let bestScore = Infinity;

        for (const tb of toolbars) {
          const r = tb.getBoundingClientRect();
          const verticalGap = listRect.top - r.bottom;
          if (verticalGap >= -10 && verticalGap <= 140) {
            const score = Math.abs(verticalGap) + (Math.abs(listRect.right - r.right) * 0.01);
            if (score < bestScore) {
              bestScore = score;
              best = tb;
            }
          }
        }
        if (best) return best;
      }

      // fallback: mais alto e à direita
      let best = null;
      let bestScore = -Infinity;
      for (const el of toolbars) {
        const r = el.getBoundingClientRect();
        const score = r.right - (r.top * 10);
        if (score > bestScore) {
          bestScore = score;
          best = el;
        }
      }
      return best;
    }

    function mountBtn() {
      const toolbar = findBestToolbar();
      if (toolbar) {
        if (!toolbar.contains(ui.btn)) toolbar.insertBefore(ui.btn, toolbar.firstChild);
        return true;
      }
      const host = ensureFallbackHost();
      if (!host.contains(ui.btn)) host.appendChild(ui.btn);
      return true;
    }

    let mountTries = 0;
    function ensureMount({ reset = false } = {}) {
      if (reset) mountTries = 0;
      const ok = mountBtn();
      if (ok) { mountTries = 0; return; }
      if (mountTries++ < 120) setTimeout(() => ensureMount(), 250);
    }

    ensureMount({ reset: true });

    function attachObserver() {
      const root = document.querySelector('#app-mount');
      if (!root) {
        const mo = new MutationObserver(() => {
          if (document.querySelector('#app-mount')) {
            mo.disconnect();
            attachObserver();
            ensureMount({ reset: true });
          }
        });
        mo.observe(document.documentElement, { childList: true, subtree: true });
        return;
      }

      let throttled = null;
      const observer = new MutationObserver(() => {
        if (throttled) return;
        throttled = setTimeout(() => {
          throttled = null;
          if (!document.body.contains(ui.btn)) ensureMount({ reset: true });
          else ensureMount();
        }, 250);
      });

      observer.observe(root, { childList: true, subtree: true });
    }
    attachObserver();

    function toggleWindow() {
      if (ui.window.style.display !== 'none') {
        ui.window.style.display = 'none';
      } else {
        ui.window.style.display = '';
      }
    }

    ui.logArea = $('#logArea');
    ui.autoScroll = $('#autoScroll');
    ui.progressMain = $('#progressBar');
    ui.progressIcon = ui.btn.querySelector('progress');
    ui.percent = $('#progressPercent');

    // Handlers
    $('#hide').onclick = toggleWindow;
    $('#toggleSidebar').onclick = () => ui.window.classList.toggle('hide-sidebar');
    $('button#start').onclick = startAction;
    $('button#stop').onclick = stopAction;
    $('button#clear').onclick = () => ui.logArea.innerHTML = '';

    $('button#getAuthor').onclick = () => $('input#authorId').value = getAuthorId();
    $('button#getGuild').onclick = () => {
      const guildId = $('input#guildId').value = getGuildId();
      if (guildId === '@me') $('input#channelId').value = getChannelId();
    };
    $('button#getChannel').onclick = () => {
      $('input#channelId').value = getChannelId();
      $('input#guildId').value = getGuildId();
    };

    $('#redact').onchange = () => {
      const b = ui.window.classList.toggle('redact');
      if (b) alert('Modo streamer ativo.\nConfira sempre se não ficou nada sensível na tela.');
    };

    $('#pickMessageAfter').onclick = async () => {
      alert('Selecione uma mensagem no chat.\nA mensagem ABAIXO dela será apagada.');
      toggleWindow();
      const id = await messagePicker.grab('after');
      if (id) $('input#minId').value = id;
      toggleWindow();
    };

    $('#pickMessageBefore').onclick = async () => {
      alert('Selecione uma mensagem no chat.\nA mensagem ACIMA dela será apagada.');
      toggleWindow();
      const id = await messagePicker.grab('before');
      if (id) $('input#maxId').value = id;
      toggleWindow();
    };

    $('button#getToken').onclick = () => $('input#token').value = fillToken();

    $('input#searchDelay').addEventListener('input', (event) => {
      $('div#searchDelayValue').textContent = event.target.value + 'ms';
      const v = parseInt(event.target.value);
      if (v) diskillCore.options.searchDelay = v;
    });

    $('input#deleteDelay').addEventListener('input', (event) => {
      $('div#deleteDelayValue').textContent = event.target.value + 'ms';
      const v = parseInt(event.target.value);
      if (v) diskillCore.options.deleteDelay = v;
    });

    const fileSelection = $('input#importJsonInput');
    fileSelection.onchange = async () => {
      const files = fileSelection.files;
      if (files.length === 0) return log.warn('Nenhum arquivo selecionado.');

      const channelIdField = $('input#channelId');
      const guildIdField = $('input#guildId');
      guildIdField.value = '@me';

      $('input#authorId').value = getAuthorId();

      try {
        const file = files[0];
        const text = await file.text();
        const json = JSON.parse(text);
        const channelIds = Object.keys(json);
        channelIdField.value = channelIds.join(',');
        log.info(`Carregado: ${channelIds.length} canais.`);
      } catch (err) {
        log.error('Erro ao ler o arquivo JSON!', err);
      }
    };

    // log renderer
    setLogFn(printLog);
    setupCoreHooks();
  }

  function printLog(type = '', args) {
    ui.logArea.insertAdjacentHTML(
      'beforeend',
      `<div class="log log-${type}">${Array.from(args).map(o =>
        typeof o === 'object'
          ? JSON.stringify(o, o instanceof Error && Object.getOwnPropertyNames(o))
          : o
      ).join('\t')}</div>`
    );
    if (ui.autoScroll.checked) ui.logArea.querySelector('div:last-child').scrollIntoView(false);
    if (type === 'error') console.error(PREFIX, ...Array.from(args));
  }

  function setupCoreHooks() {
    diskillCore.onStart = () => {
      $('#start').disabled = true;
      $('#stop').disabled = false;

      ui.btn.classList.add('running');
      ui.progressMain.style.display = 'block';
      ui.percent.style.display = 'block';
    };

    diskillCore.onProgress = (state, stats) => {
      let max = state.grandTotal;
      const value = state.delCount + state.failCount;
      max = Math.max(max, value, 0);

      const percent = value >= 0 && max ? Math.round(value / max * 100) + '%' : '';
      const elapsed = msToHMS(Date.now() - stats.startTime.getTime());
      const remaining = msToHMS(stats.etr);
      ui.percent.innerHTML = `${percent} (${value}/${max}) • Decorrido: ${elapsed} • Restante: ${remaining}`;

      ui.progressIcon.value = value;
      ui.progressMain.value = value;

      if (max) {
        ui.progressIcon.setAttribute('max', max);
        ui.progressMain.setAttribute('max', max);
      } else {
        ui.progressIcon.removeAttribute('value');
        ui.progressMain.removeAttribute('value');
        ui.percent.innerHTML = '...';
      }

      // refletir sliders
      const sd = $('input#searchDelay');
      sd.value = diskillCore.options.searchDelay;
      $('div#searchDelayValue').textContent = diskillCore.options.searchDelay + 'ms';

      const dd = $('input#deleteDelay');
      dd.value = diskillCore.options.deleteDelay;
      $('div#deleteDelayValue').textContent = diskillCore.options.deleteDelay + 'ms';
    };

    diskillCore.onStop = () => {
      $('#start').disabled = false;
      $('#stop').disabled = true;

      ui.btn.classList.remove('running');
      ui.progressMain.style.display = 'none';
      ui.percent.style.display = 'none';
    };
  }

  async function startAction() {
    console.log(PREFIX, 'startAction');

    // 🔒 Força authorId = seu usuário se estiver vazio (evita 404 por msg de terceiros)
    let authorId = $('input#authorId').value.trim();
    if (!authorId) {
      authorId = String(getAuthorId()).trim();
      $('input#authorId').value = authorId;
      log.info('Author ID estava vazio — usando automaticamente o seu ID.');
    }

    const guildId = $('input#guildId').value.trim();
    const channelIds = $('input#channelId').value.trim().split(/\s*,\s*/).filter(Boolean);
    const includeNsfw = $('input#includeNsfw').checked;

    const content = $('input#search').value.trim();
    const hasLink = $('input#hasLink').checked;
    const hasFile = $('input#hasFile').checked;
    const includePinned = $('input#includePinned').checked;
    const pattern = $('input#pattern').value;

    const minId = $('input#minId').value.trim();
    const maxId = $('input#maxId').value.trim();

    const minDate = $('input#minDate').value.trim();
    const maxDate = $('input#maxDate').value.trim();

    const searchDelay = parseInt($('input#searchDelay').value.trim());
    const deleteDelay = parseInt($('input#deleteDelay').value.trim());

    // Token
    let authToken = normalizeToken($('input#token').value);

    if (!looksLikeDiscordToken(authToken)) {
      const auto = normalizeToken(fillToken());
      if (looksLikeDiscordToken(auto)) {
        authToken = auto;
        $('input#token').value = auto;
        log.info('Token auto-detectado:', maskToken(authToken));
      }
    }

    if (!looksLikeDiscordToken(authToken)) {
      log.error('Token inválido/ausente — a API vai retornar 401.');
      log.info('Isso geralmente é autofill do navegador colocando senha no campo do token.');
      log.info('Token atual:', maskToken(authToken));
      return;
    }

    const ok = await testAuthToken(authToken);
    if (!ok) {
      log.error('Token foi rejeitado pelo Discord (401).');
      log.info('De novo: isso costuma ser autofill (senha no campo do token).');
      log.info('Token atual:', maskToken(authToken));
      return;
    }

    if (!guildId) return log.error('Preencha o "ID do servidor" (ou @me em DMs).');
    if (!channelIds.length) return log.error('Preencha o "ID do canal".');

    ui.logArea.innerHTML = '';

    diskillCore.resetState();
    diskillCore.options = {
      ...diskillCore.options,
      authToken,
      authorId,
      guildId,
      channelId: channelIds.length === 1 ? channelIds[0] : undefined,
      minId: minId || minDate,
      maxId: maxId || maxDate,
      content,
      hasLink,
      hasFile,
      includeNsfw,
      includePinned,
      pattern,
      searchDelay,
      deleteDelay,
    };

    if (channelIds.length > 1) {
      const jobs = channelIds.map(ch => ({
        guildId,
        channelId: ch,
        authorId,
        authToken,
      }));
      try { await diskillCore.runBatch(jobs); }
      catch (err) { log.error('CoreException', err); }
    } else {
      try { await diskillCore.run(); }
      catch (err) {
        log.error('CoreException', err);
        diskillCore.stop();
      }
    }
  }

  function stopAction() {
    console.log(PREFIX, 'stopAction');
    diskillCore.stop();
  }

  // START
  initUI();

})();
