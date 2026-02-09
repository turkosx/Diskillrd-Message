(() => {
  const scriptId = 'diskill-message-page';
  if (document.getElementById(scriptId)) return;

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = chrome.runtime.getURL('page.js');
  script.type = 'text/javascript';
  script.onload = () => script.remove();

  (document.head || document.documentElement).appendChild(script);
})();
