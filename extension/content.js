(() => {
  const EXT_SOURCE = 'diskill-message-extension';
  const TOGGLE = 'DISKILL_TOGGLE_PANEL';

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (!message || message.type !== TOGGLE) return;
    window.postMessage({ source: EXT_SOURCE, type: TOGGLE }, '*');
    sendResponse({ ok: true });
  });
})();
