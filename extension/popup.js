const TOGGLE = 'DISKILL_TOGGLE_PANEL';
const status = document.getElementById('status');
const toggleBtn = document.getElementById('toggleBtn');
const openDiscord = document.getElementById('openDiscord');

let activeTabId = null;
let isDiscord = false;

function setStatus(text) {
  if (status) status.textContent = text;
}

async function init() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs && tabs[0];
  if (!tab) {
    toggleBtn.disabled = true;
    setStatus('Nenhuma aba ativa.');
    return;
  }

  activeTabId = tab.id;
  const url = tab.url || '';
  isDiscord = /https?:\/\/(?:[^/]+\.)?discord\.com\//i.test(url);

  if (isDiscord) {
    try {
      await chrome.tabs.sendMessage(activeTabId, { type: TOGGLE });
      window.close();
      return;
    } catch (err) {
      setStatus('Não encontrei o painel nesta aba. Recarregue o Discord e tente de novo.');
    }
  } else {
    setStatus('Abra o Discord Web para usar o painel.');
  }
}

toggleBtn.addEventListener('click', async () => {
  if (!activeTabId) return;
  if (!isDiscord) {
    await chrome.tabs.create({ url: 'https://discord.com/channels/@me' });
    window.close();
    return;
  }

  try {
    await chrome.tabs.sendMessage(activeTabId, { type: TOGGLE });
    window.close();
  } catch (err) {
    setStatus('Não encontrei o painel nesta aba. Recarregue o Discord e tente de novo.');
  }
});

openDiscord.addEventListener('click', async () => {
  await chrome.tabs.create({ url: 'https://discord.com/channels/@me' });
  window.close();
});

init();
