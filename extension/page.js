
(function () {
  'use strict';
  if (window.__diskillMessageLoaded) return;
  window.__diskillMessageLoaded = true;

  const VERSION = "1.0.0";
  const BRAND_NAME = "Diskill Message";
  const PREFIX = '[DISKILL MESSAGE]';

  // Links - Duvidas ? Discord: @tur.ko //
  const HOME = 'https://github.com/turkosx/Diskillrd-Message';
  const DOCS = HOME + '#'; // Ancora de docs - Duvidas ? Discord: @tur.ko //

  // UI (modelo base) - Duvidas ? Discord: @tur.ko //
  // CSS/HTML apenas (IDs mantidos) - Duvidas ? Discord: @tur.ko //
  var themeCss = (`
/* Diskill Message UI (light/red) - Duvidas ? Discord: @tur.ko // */
#undiscord{
  /* Tokens (clean + vermelho) - Duvidas ? Discord: @tur.ko // */
  --dm-bg: #f6f7f9;
  --dm-surface: #ffffff;
  --dm-card: #ffffff;
  --dm-card-2: #f3f4f6;

  --dm-text: #111827;
  --dm-muted: #6b7280;
  --dm-muted-2: #9ca3af;

  --dm-border: #e5e7eb;
  --dm-border-2: #edf0f2;

  --dm-primary-from: #ff3b3b;
  --dm-primary-to: #ff6b6b;
  --dm-primary: #ff4d4d;
  --dm-primary-hover: #e11d48;

  --dm-success: #16a34a;

  --dm-danger-from: #e11d48;
  --dm-danger-to: #fb7185;
  --dm-danger: #e11d48;
  --dm-danger-hover: #be123c;

  --dm-toggle-off: #e5e7eb;

  --dm-focus: rgba(255, 59, 59, .18);

  --dm-radius: 18px;
  --dm-radius-sm: 14px;

  --dm-shadow: 0 30px 80px rgba(16,24,40,.18);
  --dm-shadow-soft: 0 12px 26px rgba(16,24,40,.12);

  color: var(--dm-text);
  background: var(--dm-bg) !important;
  border: 1px solid var(--dm-border);
}

/* Reset/Box - Duvidas ? Discord: @tur.ko // */
#undiscord, #undiscord * { box-sizing: border-box; }
#undiscord { 
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
#undiscord b, #undiscord strong{
  font-weight: 500;
}

/* Window container - Duvidas ? Discord: @tur.ko // */
#undiscord.browser{
  box-shadow: var(--dm-shadow);
  border-radius: var(--dm-radius);
  overflow: hidden;
}

/* Header - Duvidas ? Discord: @tur.ko // */
#undiscord .header{
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid var(--dm-border-2);
  background:
    radial-gradient(900px 120px at 20% 0%, rgba(255,59,59,.18), transparent 55%),
    linear-gradient(180deg, #ffffff, #f4f5f7);
  cursor: grab;
}

#undiscord .header .brandMark{
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(255,59,59,.18), rgba(255,107,107,.12));
  border: 1px solid var(--dm-border);
  color: var(--dm-danger);
  flex: 0 0 auto;
}

#undiscord .header h3{
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: .15px;

  /* Titulo com gradiente - Duvidas ? Discord: @tur.ko // */
  background: linear-gradient(90deg, var(--dm-primary-from), var(--dm-primary-to));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

#undiscord .header .subtitle{
  margin-top: 2px;
  font-size: 11px;
  font-weight: 600;
  color: var(--dm-muted);
  white-space: nowrap;

  display: inline-flex;
  align-items: center;
  gap: 8px;
}
#undiscord .header .subtitle::before{
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--dm-primary);
  box-shadow: 0 0 0 6px rgba(255,59,59,.12);
}
#undiscord .header .spacer{ flex: 1; }

#undiscord .header .iconBtn{
  width: 40px; height: 40px;
  border-radius: 14px;
  border: 1px solid var(--dm-border);
  background: #ffffff;
  color: var(--dm-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .12s ease, background .12s ease, border-color .12s ease, color .12s ease;
}
#undiscord .header .iconBtn:hover{
  color: #111827;
  border-color: #d1d5db;
  background: #f3f4f6;
}
#undiscord .header .iconBtn:active{ transform: translateY(1px); }

/* Layout - Duvidas ? Discord: @tur.ko // */
#undiscord .window-body{ height: calc(100% - 56px); display: flex; }

#undiscord .sidebar{
  width: 320px;
  min-width: 300px;
  height: 100%;
  padding: 14px;
  background: var(--dm-card-2) !important;
  border-right: 1px solid var(--dm-border-2);
  overflow: auto;
}
#undiscord .main{
  flex: 1;
  background: linear-gradient(180deg, #f8fafc, #f2f4f7) !important;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
#undiscord.hide-sidebar .sidebar{ display:none; }
#undiscord.hide-sidebar .main{ max-width: 100%; }

/* Sections (cards) - Duvidas ? Discord: @tur.ko // */
#undiscord details{
  border: 1px solid var(--dm-border);
  background: var(--dm-surface);
  border-radius: var(--dm-radius-sm);
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: var(--dm-shadow-soft);
}
#undiscord details[open]{ border-color: rgba(255,59,59,.45); }
#undiscord summary{
  list-style: none;
  cursor: pointer;
  padding: 12px 12px;
  font-weight: 600;
  font-size: 13px;
  color: var(--dm-text);
  background: linear-gradient(180deg, #ffffff, #f3f4f6);
  border-bottom: 1px solid var(--dm-border-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#undiscord summary .summary-inner{
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
#undiscord summary:hover{
  background: linear-gradient(180deg, #f9fafb, #f3f4f6);
}
#undiscord summary::-webkit-details-marker{ display:none; }
#undiscord summary::after{
  content: '▾';
  color: var(--dm-primary);
  font-weight: 600;
}
#undiscord details[open] summary::after{ content: '▴'; }

#undiscord fieldset{
  border: none;
  margin: 0;
  padding: 12px;
}

#undiscord legend{
  color: var(--dm-muted);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .7px;
  margin-bottom: 8px;

  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
}
#undiscord label{
  color: var(--dm-text);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .2px;
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

#undiscord .sectionDescription{
  margin-top: 8px;
  margin-bottom: 8px;
  color: var(--dm-muted);
  font-size: 12px;
  line-height: 17px;
  font-weight: 500;
  overflow-wrap: anywhere;
}

/* Inputs - Duvidas ? Discord: @tur.ko // */
#undiscord .input-wrapper{ width: 100%; }
#undiscord input[type="text"],
#undiscord input[type="search"],
#undiscord input[type="password"],
#undiscord input[type="datetime-local"],
#undiscord input[type="number"],
#undiscord input[type="file"]{
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid var(--dm-border);
  background: #fff !important;
  color: var(--dm-text);
  font-size: 13px;
  font-weight: 500;
  outline: none;
  transition: box-shadow .12s ease, border-color .12s ease, background .12s ease;
}
#undiscord input[type="file"]{
  padding: 8px 12px;
  height: auto;
}
#undiscord input::placeholder{ color: var(--dm-muted-2); font-weight: 500; }
#undiscord input:focus{
  border-color: rgba(255,59,59,.75) !important;
  box-shadow: 0 0 0 4px var(--dm-focus);
  background: #fff !important;
}

/* Toggles - Duvidas ? Discord: @tur.ko // */
#undiscord .toggle{
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  color: var(--dm-text);
  font-size: 12px;
  font-weight: 500;
}
#undiscord .toggle input{
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}
#undiscord .toggle .toggle-ui{
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: var(--dm-toggle-off);
  border: 1px solid var(--dm-border);
  position: relative;
  flex: 0 0 auto;
  transition: background .15s ease, border-color .15s ease, box-shadow .15s ease;
}
#undiscord .toggle .toggle-ui::after{
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(16,24,40,.18);
  transition: transform .15s ease;
}
#undiscord .toggle input:checked + .toggle-ui{
  background: linear-gradient(90deg, var(--dm-primary-from), var(--dm-primary-to));
  border-color: rgba(255,59,59,.6);
  box-shadow: 0 0 0 4px var(--dm-focus);
}
#undiscord .toggle input:checked + .toggle-ui::after{
  transform: translateX(20px);
}
#undiscord .toggle input:focus-visible + .toggle-ui{
  box-shadow: 0 0 0 4px var(--dm-focus);
}
#undiscord .toggle--compact .toggle-ui{
  width: 38px;
  height: 20px;
}
#undiscord .toggle--compact .toggle-ui::after{
  width: 16px;
  height: 16px;
}
#undiscord .toggle--compact input:checked + .toggle-ui::after{
  transform: translateX(18px);
}

/* Multi input row - Duvidas ? Discord: @tur.ko // */
#undiscord .multiInput{
  display: flex;
  gap: 8px;
  align-items: center;
}
#undiscord .multiInput > button{
  min-width: 90px;
}

#undiscord .spacer{ flex: 1; }

#undiscord .toggle-group{
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 6px 10px;
  border-radius: 12px;
  border: 1px solid var(--dm-border);
  background: var(--dm-card-2);
}

/* Range - Duvidas ? Discord: @tur.ko // */
#undiscord input[type="range"]{
  width: 100%;
  accent-color: var(--dm-primary);
}
#undiscord #searchDelayValue, #undiscord #deleteDelayValue{
  margin-top: 6px;
  font-size: 12px;
  color: var(--dm-muted);
  font-weight: 500;
}

/* Links - Duvidas ? Discord: @tur.ko // */
#undiscord a{
  color: var(--dm-primary);
  text-decoration: none;
  font-weight: 600;
}
#undiscord a:hover{ text-decoration: underline; }

/* Icons - Duvidas ? Discord: @tur.ko // */
#undiscord .ui-ico{
  width: 16px;
  height: 16px;
  display: inline-block;
  flex: 0 0 auto;
  color: currentColor;
}
#undiscord .summary-ico{
  width: 14px;
  height: 14px;
  color: var(--dm-muted);
}
#undiscord details[open] summary .summary-ico{
  color: var(--dm-primary);
}
#undiscord .btn-icon .ui-ico{
  width: 18px;
  height: 18px;
}

/* Buttons - Duvidas ? Discord: @tur.ko // */
#undiscord button{
  height: 40px;
  border-radius: 12px;
  padding: 0 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .15px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  transition: transform .12s ease, background .12s ease, border-color .12s ease, color .12s ease, box-shadow .12s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
}
#undiscord button:active{ transform: translateY(1px); }

#undiscord .btn-primary{
  background: linear-gradient(90deg, var(--dm-primary-from), var(--dm-primary-to)) !important;
  color: #fff;
  border-color: rgba(255,59,59,.45);
  box-shadow: 0 14px 30px rgba(255,59,59,.22);
}
#undiscord .btn-primary:hover{ filter: brightness(.97); }

#undiscord .btn-outline{
  background: #fff !important;
  color: #374151;
  border-color: var(--dm-border);
}
#undiscord .btn-outline:hover{
  background: var(--dm-card-2) !important;
  border-color: #d1d5db;
}

#undiscord .btn-danger{
  background: #fff !important;
  color: #b91c1c;
  border-color: rgba(255,59,59,.45);
  box-shadow: none;
}
#undiscord .btn-danger:hover{ background: rgba(255,59,59,.08) !important; }

#undiscord .btn-icon{
  width: 40px;
  padding: 0;
}

#undiscord button:disabled{
  opacity: .55;
  cursor: not-allowed;
  pointer-events: none;
}

/* Toolbar - Duvidas ? Discord: @tur.ko // */
#undiscord .tbar{
  padding: 12px;
  border-bottom: 1px solid var(--dm-border-2);
  background: linear-gradient(180deg, #ffffff, #f3f4f6);
}
#undiscord .tbar .row{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
#undiscord .tbar .row label{
  margin: 0;
}
#undiscord .tbar progress{ width: 100%; height: 10px; margin-top: 10px; }

/* Progress styling (webkit) - Duvidas ? Discord: @tur.ko // */
#undiscord progress{
  appearance: none;
  border: none;
  border-radius: 999px;
  overflow: hidden;
  background: #e5e7eb;
}
#undiscord progress::-webkit-progress-bar{ background: #e5e7eb; }
#undiscord progress::-webkit-progress-value{ 
  background: linear-gradient(90deg, var(--dm-primary-from), var(--dm-primary-to)); 
}

/* Log area - Duvidas ? Discord: @tur.ko // */
#undiscord #logArea{
  margin: 12px;
  border-radius: 16px;
  border: 1px solid var(--dm-border);
  background: #ffffff;
  padding: 12px;
  overflow: auto;
  flex: 1;
  min-height: 0;
  max-width: 100%;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  line-height: 17px;
  font-weight: 500;
  color: var(--dm-text);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
}
#undiscord .log{
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 18px 1fr;
  align-items: start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--dm-border);
  background: #f9fafb;
  color: var(--dm-text);
  max-width: 100%;
  overflow-wrap: anywhere;
}
#undiscord .log:last-child{ margin-bottom: 0; }
#undiscord .log .log-text{
  min-width: 0;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
}
#undiscord .log-ico{
  width: 16px;
  height: 16px;
  color: currentColor;
  opacity: .85;
}
#undiscord .log-debug{ color: #334155; background: #f8fafc; }
#undiscord .log-verb{ color: #6b7280; background: #f8fafc; }
#undiscord .log-info{ color: #b91c1c; background: #fff1f2; border-color: #fecdd3; }
#undiscord .log-warn{ color: #92400e; background: #fffbeb; border-color: #fde68a; }
#undiscord .log-error{ color: #991b1b; background: #fef2f2; border-color: #fecaca; }
#undiscord .log-success{ color: #166534; background: #f0fdf4; border-color: #bbf7d0; }

/* Notice inside log - Duvidas ? Discord: @tur.ko // */
#undiscord .dmNotice{
  padding: 12px;
  border: 1px solid #fecdd3;
  border-radius: 16px;
  background: #fff1f2;
  font-weight: 600;
  color: #7f1d1d;
}
#undiscord .dmCenter{
  margin-top: 10px;
  text-align: center;
}
#undiscord .dmCenter .repo{
  font-weight: 600;
}
#undiscord .dmCenter .hint{
  margin-top: 6px;
  font-weight: 500;
  color: var(--dm-muted);
}

/* Footer - Duvidas ? Discord: @tur.ko // */
#undiscord .footer{
  padding: 10px 12px;
  border-top: 1px solid var(--dm-border-2);
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
}
#undiscord .footer #progressPercent{
  font-size: 12px;
  color: var(--dm-muted);
  font-weight: 500;
}

/* Resize handle - Duvidas ? Discord: @tur.ko // */
.resize-handle{
  position: absolute;
  bottom: -14px;
  right: -14px;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background:
    repeating-linear-gradient(45deg, rgba(17,24,39,.12), rgba(17,24,39,.12) 1px, transparent 2px, transparent 4px);
  cursor: nwse-resize;
  border: 1px solid rgba(17,24,39,.12);
}

/* Streamer (redact) - Duvidas ? Discord: @tur.ko // */
#undiscord.redact .priv{
  color: transparent !important;
  background-color: rgba(17,24,39,.08) !important;
  border-radius: 8px;
  cursor: default;
  user-select: none;
}
#undiscord.redact .priv::selection{
  color: transparent !important;
  background-color: rgba(17,24,39,.12) !important;
}
#undiscord.redact [priv]{ -webkit-text-security: disc !important; }
`);

  // Botao da toolbar no Discord - Duvidas ? Discord: @tur.ko //
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
  border-radius: 8px;
  padding: 2px 6px;
  transition: background .12s ease, color .12s ease;
}
#undicord-btn:hover{ 
  color: #fca5a5; 
  background: rgba(255,59,59,.12);
}
#undicord-btn progress { position: absolute; top: 23px; left: -4px; width: 32px; height: 12px; display: none; }
#undicord-btn.running { color: #ef4444 !important; background: rgba(255,59,59,.18); }
#undicord-btn.running progress { display: block; }

/* Container window positioning - Duvidas ? Discord: @tur.ko // */
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
[name^="grab-"]:hover{ background: rgba(255,59,59,0.12); }
[name="grab-t"] { top: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-top: var(--offset); cursor: ns-resize; }
[name="grab-r"] { top: var(--corner-size); bottom: var(--corner-size); right: 0px; width: var(--size); margin-right: var(--offset); cursor: ew-resize; }
[name="grab-b"] { bottom: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-bottom: var(--offset); cursor: ns-resize; }
[name="grab-l"] { top: var(--corner-size); bottom: var(--corner-size); left: 0px; width: var(--size); margin-left: var(--offset); cursor: ew-resize; }
[name="grab-tl"] { top: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-left: var(--offset); cursor: nwse-resize; }
[name="grab-tr"] { top: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-right: var(--offset); cursor: nesw-resize; }
[name="grab-br"] { bottom: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-right: var(--offset); cursor: nwse-resize; }
[name="grab-bl"] { bottom: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-left: var(--offset); cursor: nesw-resize; }
`);

  // Icone do botao no Discord - Duvidas ? Discord: @tur.ko //
  var buttonHtml = (`
<div id="undicord-btn" tabindex="0" role="button" aria-label="Diskill Message" title="Diskill Message • Apagar suas mensagens">
  <svg aria-hidden="false" width="22" height="22" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
    <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
  </svg>
  <progress></progress>
</div>
`);

  // Template da janela (IDs essenciais) - Duvidas ? Discord: @tur.ko //
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
      <div class="subtitle">Exclusão em massa de mensagens</div>
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
        <summary>
          <span class="summary-inner">
            <svg class="ui-ico summary-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4 5h7v7H4V5zm9 0h7v7h-7V5zM4 14h7v7H4v-7zm9 0h7v7h-7v-7z"/>
            </svg>
            Geral
          </span>
        </summary>
        <fieldset>
          <legend>
            <span>ID do usuário</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="multiInput">
            <div class="input-wrapper">
              <input id="authorId" type="text" priv placeholder="Seu ID (auto se vazio)">
            </div>
            <button id="getAuthor" class="btn-outline">meu ID</button>
          </div>

          <div class="sectionDescription">
            Dica: deixe em branco para preencher automaticamente com seu ID.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>ID do servidor</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>
          <div class="multiInput">
            <div class="input-wrapper">
              <input id="guildId" type="text" priv placeholder="Ex: 123... ou @me (DMs)">
            </div>
            <button id="getGuild" class="btn-outline">servidor</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>ID do canal</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>
          <div class="multiInput">
            <div class="input-wrapper">
              <input id="channelId" type="text" priv placeholder="Ex: 123... (ou vários separados por vírgula)">
            </div>
            <button id="getChannel" class="btn-outline">canal</button>
          </div>

          <div class="sectionDescription">
            <label class="toggle">
              <input id="includeNsfw" type="checkbox">
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Canal NSFW</span>
            </label>
          </div>
        </fieldset>
      </details>

      <details>
        <summary>
          <span class="summary-inner">
            <svg class="ui-ico summary-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 3l5 5h-3v6h-4V8H7l5-5zm-7 13h14v4H5v-4z"/>
            </svg>
            Importar arquivo do Discord
          </span>
        </summary>
        <fieldset>
          <legend>
            <span>Arquivo de mensagens (index.json)</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="input-wrapper">
            <input type="file" id="importJsonInput" accept="application/json,.json" style="width:100%;">
          </div>

          <div class="sectionDescription">
            Após solicitar seus dados ao Discord, importe o arquivo <b>messages/index.json</b>.
          </div>
        </fieldset>
      </details>

      <details>
        <summary>
          <span class="summary-inner">
            <svg class="ui-ico summary-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 5h18l-7 8v5l-4 2v-7L3 5z"/>
            </svg>
            Filtros
          </span>
        </summary>
        <fieldset>
          <legend>
            <span>Filtro por texto</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="input-wrapper">
            <input id="search" type="text" placeholder="Texto contém" priv>
          </div>

          <div class="sectionDescription">Apaga apenas mensagens que contenham o texto informado.</div>

          <div class="sectionDescription">
            <label class="toggle">
              <input id="hasLink" type="checkbox">
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Contém link</span>
            </label>
          </div>

          <div class="sectionDescription">
            <label class="toggle">
              <input id="hasFile" type="checkbox">
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Contém arquivo</span>
            </label>
          </div>

          <div class="sectionDescription">
            <label class="toggle">
              <input id="includePinned" type="checkbox">
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Incluir fixadas</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Regex (opcional)</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="sectionDescription">
            Apaga mensagens que combinem com a expressão regular informada.
          </div>

          <div class="input-wrapper">
            <input id="pattern" type="text" placeholder="ex: (promo|cupom|link)" priv>
          </div>
        </fieldset>
      </details>

      <details>
        <summary>
          <span class="summary-inner">
            <svg class="ui-ico summary-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z"/>
            </svg>
            Intervalos
          </span>
        </summary>

        <fieldset>
          <legend>
            <span>Por ID de mensagem</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="multiInput">
            <div class="input-wrapper">
              <input id="minId" type="text" placeholder="Depois desta mensagem" priv>
            </div>
            <button id="pickMessageAfter" class="btn-outline">selecionar</button>
          </div>

          <div class="multiInput" style="margin-top:10px;">
            <div class="input-wrapper">
              <input id="maxId" type="text" placeholder="Antes desta mensagem" priv>
            </div>
            <button id="pickMessageBefore" class="btn-outline">selecionar</button>
          </div>

          <div class="sectionDescription">
            Use para limitar o intervalo pelo ID da mensagem.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Por data</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="input-wrapper">
            <input id="minDate" type="datetime-local" title="Mensagens enviadas DEPOIS desta data">
          </div>

          <div class="input-wrapper" style="margin-top:10px;">
            <input id="maxDate" type="datetime-local" title="Mensagens enviadas ANTES desta data">
          </div>

          <div class="sectionDescription">
            Obs.: o filtro por data não funciona se você usar intervalo por mensagem.
          </div>
        </fieldset>
      </details>

      <details>
        <summary>
          <span class="summary-inner">
            <svg class="ui-ico summary-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4 6h9v2H4V6zm0 5h16v2H4v-2zm0 5h11v2H4v-2zm12-11h4v4h-4V5zm4 10h-4v4h4v-4z"/>
            </svg>
            Avançado
          </span>
        </summary>

        <fieldset>
          <legend>
            <span>Atraso de busca</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="input-wrapper">
            <input id="searchDelay" type="range" value="30000" step="100" min="100" max="60000">
            <div id="searchDelayValue"></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Atraso entre exclusões</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
          </legend>

          <div class="input-wrapper">
            <input id="deleteDelay" type="range" value="1000" step="50" min="50" max="10000">
            <div id="deleteDelayValue"></div>
          </div>

          <div class="sectionDescription">
            Ajuste para reduzir o risco de rate limit.
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Token de autorização</span>
            <a href="{{DOCS}}" title="Como obter" target="_blank" rel="noopener noreferrer">como obter</a>
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
          <button id="toggleSidebar" class="btn-outline btn-icon" title="Mostrar/ocultar painel">
            <svg class="ui-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4 5h16v3H4V5zm0 5h10v3H4v-3zm0 5h16v3H4v-3z"/>
            </svg>
          </button>

          <button id="start" class="btn-primary" style="min-width: 170px;" title="Iniciar exclusão">
            <svg class="ui-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M9 3h6v2H9V3zm-4 2h14v2H5V5zm2 4h10l-1 12H8L7 9zm4 2v8h2v-8h-2z"/>
            </svg>
            Apagar
          </button>

          <button id="stop" class="btn-danger" title="Parar" disabled>
            <svg class="ui-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M7 7h10v10H7V7z"/>
            </svg>
            Parar
          </button>

          <button id="clear" class="btn-outline" title="Limpar log">
            <svg class="ui-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h10v2H3v-2zm13.5-1.5 2.5 2.5 2.5-2.5 1.5 1.5-2.5 2.5 2.5 2.5-1.5 1.5-2.5-2.5-2.5 2.5-1.5-1.5 2.5-2.5-2.5-2.5z"/>
            </svg>
            Limpar log
          </button>

          <span class="spacer"></span>

          <div class="toggle-group">
            <label class="toggle toggle--compact" title="Ocultar informações sensíveis para prints ou stream">
              <input id="redact" type="checkbox" checked>
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Modo streamer</span>
            </label>

            <label class="toggle toggle--compact" title="Rolar o log automaticamente durante a execução">
              <input id="autoScroll" type="checkbox" checked>
              <span class="toggle-ui" aria-hidden="true"></span>
              <span>Rolagem automática</span>
            </label>
          </div>
        </div>

        <progress id="progressBar" style="display:none;"></progress>
      </div>

      <div id="logArea" class="logarea scroll"></div>

      <div class="footer row">
        <div id="progressPercent"></div>
        <span class="spacer"></span>
        <div class="resize-handle"></div>
      </div>
    </div>
  </div>
</div>
`);

  // Log - Duvidas ? Discord: @tur.ko //
  const log = {
    msg() { return logFn ? logFn('msg', arguments) : console.log.apply(console, arguments); },
    debug() { return logFn ? logFn('debug', arguments) : console.debug.apply(console, arguments); },
    info() { return logFn ? logFn('info', arguments) : console.info.apply(console, arguments); },
    verb() { return logFn ? logFn('verb', arguments) : console.log.apply(console, arguments); },
    warn() { return logFn ? logFn('warn', arguments) : console.warn.apply(console, arguments); },
    error() { return logFn ? logFn('error', arguments) : console.error.apply(console, arguments); },
    success() { return logFn ? logFn('success', arguments) : console.info.apply(console, arguments); },
  };

  var logFn;
  const setLogFn = (fn) => logFn = fn;

  const LOG_ICONS = {
    debug: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.7 7.3 4 12l4.7 4.7 1.4-1.4L6.8 12l3.3-3.3-1.4-1.4zm6.6 0-1.4 1.4L17.2 12l-3.3 3.3 1.4 1.4L20 12l-4.7-4.7z"/></svg>',
    verb: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z"/></svg>',
    info: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM11 10h2v7h-2v-7z"/></svg>',
    warn: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3l10 18H2L12 3zm-1 6v5h2V9h-2zm0 7v2h2v-2h-2z"/></svg>',
    error: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5-1.4-1.4L12 9.1 9.9 7.1 8.5 8.5 10.6 10.6 8.5 12.7l1.4 1.4 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1z"/></svg>',
    success: '<svg class="log-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 13-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5z"/></svg>',
  };
  const getLogIcon = (type) => LOG_ICONS[type] || LOG_ICONS.info;

  // Helpers - Duvidas ? Discord: @tur.ko //
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
  const allowLogMarkup = html => {
    const escaped = escapeHTML(html);
    return escaped
      .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
      .replace(/&lt;(\/?)\s*(b|i|sup|sub)\s*&gt;/gi, '<$1$2>')
      .replace(/&lt;span class=&quot;priv&quot;&gt;/gi, '<span class="priv">')
      .replace(/&lt;\/span&gt;/gi, '</span>');
  };
  const isRedactMode = () => !!(ui.window && ui.window.classList.contains('redact'));
  const formatLogArg = (o) => {
    if (o instanceof Error) {
      if (isRedactMode()) return redact('[erro]');
      return escapeHTML(o.stack || o.message || String(o));
    }
    if (typeof o === 'object') {
      if (isRedactMode()) return redact('[objeto]');
      return escapeHTML(JSON.stringify(o, o instanceof Error && Object.getOwnPropertyNames(o)));
    }
    return allowLogMarkup(o);
  };
  const redact = str => `<span class="priv">${escapeHTML(str)}</span>`;
  const queryString = params => params.filter(p => p[1] !== undefined).map(p => p[0] + '=' + encodeURIComponent(p[1])).join('&');
  const ask = async msg => new Promise(resolve => setTimeout(() => resolve(window.confirm(msg)), 10));
  const toSnowflake = (date) => /:/.test(date) ? ((new Date(date).getTime() - 1420070400000) * Math.pow(2, 22)) : date;
  const replaceInterpolations = (str, obj, removeMissing = false) =>
    str.replace(/\{\{([\w_]+)\}\}/g, (m, key) => obj[key] || (removeMissing ? '' : m));

  const pad2 = (n) => String(n ?? 0).padStart(2, '0');
  const displayName = (msg) => {
    const user = msg?.author;
    if (!user) return 'Usuário';
    const base = user.username || user.global_name || 'Usuário';
    const discr = user.discriminator && user.discriminator !== '0' ? `#${user.discriminator}` : '';
    return `${base}${discr}`;
  };
  const displayMessage = (msg) => {
    if (!msg) return '[sem mensagem]';
    if (msg.content && msg.content.trim()) return msg.content.replace(/\s+/g, ' ').trim();
    if (msg.attachments && msg.attachments.length) return `[${msg.attachments.length} anexo(s)]`;
    return '[sem texto]';
  };
  const formatLogLine = (msg, current, total) => {
    const ts = msg?.timestamp ? new Date(msg.timestamp).toLocaleString() : '-';
    if (isRedactMode()) {
      return `[${pad2(current)}/${pad2(total)}] ${pad2(current)} - ${ts} - [oculto] - [oculto]`;
    }
    return `[${pad2(current)}/${pad2(total)}] ${pad2(current)} - ${ts} - ${displayName(msg)} - ${displayMessage(msg)}`;
  };

  // DOM helpers - Duvidas ? Discord: @tur.ko //
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

  // Core: apagar mensagens do Discord (somente do authorId) - Duvidas ? Discord: @tur.ko //
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
      searchErrors: 0,
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
        searchErrors: 0,
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
        if (!this.state.running) break;
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
          // Confirmacao desativada, segue para delete - Duvidas ? Discord: @tur.ko //
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
// Parte 2/3 - Duvidas ? Discord: @tur.ko //
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
      // Sem confirmacao/preview (sem window.confirm) - Duvidas ? Discord: @tur.ko //
      this.options.askForConfirmation = false;
      return true;
    }

    async search() {
      let API_SEARCH_URL;
      if (this.options.guildId === '@me') API_SEARCH_URL = `https://discord.com/api/v9/channels/${this.options.channelId}/messages/`;
      else API_SEARCH_URL = `https://discord.com/api/v9/guilds/${this.options.guildId}/messages/`;

      while (this.state.running) {
        let resp;
        try {
          this.beforeRequest();
          resp = await fetch(API_SEARCH_URL + 'search?' + queryString([
            // Sempre author_id - Duvidas ? Discord: @tur.ko //
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
          this.state.searchErrors++;
          await wait(Math.min(30000, 1000 * this.state.searchErrors));
          continue;
        }

        if (resp.status === 202) {
          let w = (await resp.json()).retry_after * 1000;
          w = w || this.stats.searchDelay;
          this.stats.throttledCount++;
          this.stats.throttledTotalTime += w;
          await wait(w);
          continue;
        }

        if (!resp.ok) {
          if (resp.status === 401 || resp.status === 403) {
            this.state.running = false;
            alert('Falha de autenticação. Verifique o token e tente novamente.');
            return null;
          }
          if (resp.status === 429) {
            let w = (await resp.json()).retry_after * 1000;
            w = w || this.stats.searchDelay;

            this.stats.throttledCount++;
            this.stats.throttledTotalTime += w;
            this.stats.searchDelay = (this.stats.searchDelay || 0) + w;
            w = this.stats.searchDelay;

            await wait(w * 2);
            continue;
          }
          this.state.searchErrors++;
          await wait(Math.min(30000, 1000 * this.state.searchErrors));
          continue;
        }

        const data = await resp.json();
        this.state.searchErrors = 0;
        this.state._seachResponse = data;
        return data;
      }
      return null;
    }

    async filterResponse() {
      const data = this.state._seachResponse;
      if (!data || !Array.isArray(data.messages)) {
        this.state._seachResponse = { messages: [], total_results: 0 };
        this.state._messagesToDelete = [];
        this.state._skippedMessages = [];
        return;
      }

      const total = data.total_results;
      if (total > this.state.grandTotal) this.state.grandTotal = total;

      const discoveredMessages = data.messages.map(convo => convo.find(message => message.hit === true));

      let messagesToDelete = discoveredMessages.filter(Boolean);

      // Apenas tipos deletaveis - Duvidas ? Discord: @tur.ko //
      messagesToDelete = messagesToDelete.filter(msg => msg.type === 0 || (msg.type >= 6 && msg.type <= 21));
      messagesToDelete = messagesToDelete.filter(msg => msg.pinned ? this.options.includePinned : true);

      // Failsafe: so apaga mensagens do autor - Duvidas ? Discord: @tur.ko //
      if (this.options.authorId) {
        messagesToDelete = messagesToDelete.filter(msg => msg?.author?.id === this.options.authorId);
      } else {
        messagesToDelete = [];
      }

      // Regex opcional - Duvidas ? Discord: @tur.ko //
      try {
        const regex = new RegExp(this.options.pattern, 'i');
        messagesToDelete = messagesToDelete.filter(msg => regex.test(msg.content));
      } catch (e) {
        // Ignora pattern vazio ou invalido - Duvidas ? Discord: @tur.ko //
      }

      const skippedMessages = discoveredMessages.filter(msg => !messagesToDelete.find(m => m.id === msg.id));

      this.state._messagesToDelete = messagesToDelete;
      this.state._skippedMessages = skippedMessages;
    }

    async deleteMessagesFromList() {
      for (let i = 0; i < this.state._messagesToDelete.length; i++) {
        const message = this.state._messagesToDelete[i];
        if (!this.state.running) return log.error('Parado por você!');

        // Failsafe extra - Duvidas ? Discord: @tur.ko //
        if (this.options.authorId && message?.author?.id !== this.options.authorId) {
          log.warn('Pulando mensagem (não é sua).');
          this.state.offset++;
          continue;
        }

        const current = this.state.delCount + this.state.failCount + 1;
        const total = Math.max(this.state.grandTotal, current);
        log.msg(formatLogLine(message, current, total));

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

        // Pula 404/403 - Duvidas ? Discord: @tur.ko //
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

  // Drag + resize - Duvidas ? Discord: @tur.ko //
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
// Parte 3/3 - Duvidas ? Discord: @tur.ko //
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

  // Message picker - Duvidas ? Discord: @tur.ko //
  // UI no mesmo tema - Duvidas ? Discord: @tur.ko //
  const messagePickerCss = `
body.undiscord-pick-message [data-list-id="chat-messages"] {
  background-color: rgba(255,59,59,.06) !important;
  box-shadow: inset 0 0 0px 2px rgba(255,59,59,.35) !important;
}
body.undiscord-pick-message [id^="message-content-"]:hover {
  cursor: cell;
  background: rgba(255,59,59,.08) !important;
}
body.undiscord-pick-message [id^="message-content-"]:hover::after {
  position: absolute;
  top: calc(50% - 11px);
  left: 6px;
  z-index: 10;
  width: 98px;
  height: 22px;
  line-height: 22px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: linear-gradient(90deg, #ff3b3b, #ff6b6b);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  content: 'ESTE';
  border: 1px solid rgba(255,255,255,.18);
}
body.undiscord-pick-message.before [id^="message-content-"]:hover::after { content: 'ANTES'; }
body.undiscord-pick-message.after [id^="message-content-"]:hover::after { content: 'DEPOIS'; }
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

  const EXT_SOURCE = 'diskill-message-extension';
  const TOGGLE = 'DISKILL_TOGGLE_PANEL';
  let pendingToggle = false;

  function toggleWindow() {
    if (!ui.window) return;
    if (ui.window.style.display !== 'none') ui.window.style.display = 'none';
    else ui.window.style.display = '';
  }

  function toggleWindowExternal() {
    if (ui.window) toggleWindow();
    else pendingToggle = true;
  }

  window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    const data = event.data || {};
    if (data.source === EXT_SOURCE && data.type === TOGGLE) {
      toggleWindowExternal();
    }
  });

  function initUI() {
    insertCss(themeCss);
    insertCss(mainCss);
    insertCss(dragCss);

    const html = replaceInterpolations(undiscordTemplate, { DOCS });
    ui.window = createElm(html);
    document.body.appendChild(ui.window);
    if (pendingToggle) {
      pendingToggle = false;
      toggleWindow();
    }

    // Anti-autofill - Duvidas ? Discord: @tur.ko //
    hardenInputsAgainstAutofill(ui.window);

    new DragResize({ elm: ui.window, moveHandle: $('.header') });

    // Botao no Discord - Duvidas ? Discord: @tur.ko //
    ui.btn = createElm(buttonHtml);
    ui.btn.addEventListener('click', toggleWindow);

    // Host fallback - Duvidas ? Discord: @tur.ko //
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

      // Fallback: mais alto e a direita - Duvidas ? Discord: @tur.ko //
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

    ui.logArea = $('#logArea');
    ui.autoScroll = $('#autoScroll');
    ui.progressMain = $('#progressBar');
    ui.progressIcon = ui.btn.querySelector('progress');
    ui.percent = $('#progressPercent');

    // Handlers - Duvidas ? Discord: @tur.ko //
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
      if (b) {
        ui.logArea.innerHTML = '';
        alert('Modo streamer ativado.\nO log foi limpo para evitar vazamentos.');
      }
    };

    $('#pickMessageAfter').onclick = async () => {
      alert('Selecione uma mensagem no chat.\nA mensagem abaixo dela será apagada.');
      toggleWindow();
      const id = await messagePicker.grab('after');
      if (id) $('input#minId').value = id;
      toggleWindow();
    };

    $('#pickMessageBefore').onclick = async () => {
      alert('Selecione uma mensagem no chat.\nA mensagem acima dela será apagada.');
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

    // Log renderer - Duvidas ? Discord: @tur.ko //
    setLogFn(printLog);
    setupCoreHooks();
  }

  function safeArgToText(arg) {
    if (typeof arg === 'string') return arg;
    if (typeof arg === 'number' || typeof arg === 'boolean') return String(arg);
    if (arg instanceof Error) return arg.message || 'Erro';
    return '';
  }

  const statusBuffer = new Map();
  const statusOrder = [
    'search',
    'total',
    'etr',
    'delay',
    'rate_limit',
    'rate_limited',
    'indexing',
  ];
  const statusMatchers = [
    { key: 'search', re: /^Buscando mensagens/i },
    { key: 'total', re: /^Total geral:/i },
    { key: 'etr', re: /^Tempo estimado restante:/i },
    { key: 'delay', re: /^Atraso exclusão:/i },
    { key: 'rate_limit', re: /^Rate limit/i },
    { key: 'rate_limited', re: /^Rate limited:/i },
    { key: 'indexing', re: /^Este canal ainda não foi indexado/i },
  ];
  const isAwaitLine = (text) => /^Aguardando /i.test(text);
  const isImmediateLine = (text) => [
    /^Iniciado em /i,
    /^Encerrado em /i,
    /^Apagadas /i,
    /^Parado por você!/i,
    /^Nada para apagar nesta página/i,
    /^Finalizado: a API retornou página vazia/i,
    /^Rodando lote com /i,
    /^Iniciando tarefa\.\.\./i,
    /^Tarefa finalizada\./i,
    /^Lote finalizado\./i,
  ].some((re) => re.test(text));

  function getStatusKey(text) {
    for (const { key, re } of statusMatchers) {
      if (re.test(text)) return key;
    }
    return null;
  }

  function appendLogLine(text, type = 'info') {
    const line = document.createElement('div');
    const safeType = type === 'debug' ? 'info' : (type || 'info');
    line.className = `log log-${safeType}`;
    line.insertAdjacentHTML('beforeend', getLogIcon(safeType));
    const textEl = document.createElement('div');
    textEl.className = 'log-text';
    textEl.textContent = text;
    line.appendChild(textEl);
    ui.logArea.appendChild(line);
    if (ui.autoScroll.checked) line.scrollIntoView(false);
  }

  function flushStatusBuffer() {
    for (const key of statusOrder) {
      const item = statusBuffer.get(key);
      if (item) appendLogLine(item.text, item.type);
    }
    statusBuffer.clear();
  }

  function printLog(type = '', args) {
    const safeType = type === 'debug' ? 'info' : (type || 'info');
    const raw = Array.from(args).map(safeArgToText).join(' ');
    const cleaned = raw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (!cleaned) return;

    if (type === 'msg') {
      appendLogLine(cleaned, 'info');
      return;
    }

    if (isImmediateLine(cleaned)) {
      appendLogLine(cleaned, safeType);
      return;
    }

    if (isAwaitLine(cleaned)) {
      appendLogLine(cleaned, safeType);
      flushStatusBuffer();
      return;
    }

    const statusKey = getStatusKey(cleaned);
    if (statusKey) {
      statusBuffer.set(statusKey, { text: cleaned, type: safeType });
      return;
    }
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

      // Refletir sliders - Duvidas ? Discord: @tur.ko //
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

    // Forca authorId quando vazio - Duvidas ? Discord: @tur.ko //
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

    // Token - Duvidas ? Discord: @tur.ko //
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

  // Start - Duvidas ? Discord: @tur.ko //
  initUI();

})();
