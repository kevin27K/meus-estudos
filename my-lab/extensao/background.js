function logTabs() {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(tab => {
        console.log(`Tab ID: ${tab.id}, URL: ${tab.url}, Title: ${tab.title}`);
      });
    });
  }
  
  // Monitorar quando uma aba é atualizada
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(`Tab atualizada: ID ${tabId}, URL: ${tab.url}, Title: ${tab.title}`);
    logTabs();
  });
  
  // Monitorar quando uma aba é criada
  chrome.tabs.onCreated.addListener(function(tab) {
    console.log(`Tab criada: ID ${tab.id}, URL: ${tab.url}, Title: ${tab.title}`);
    logTabs();
  });
  
  // Monitorar quando uma aba é removida
  chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    console.log(`Tab removida: ID ${tabId}`);
    logTabs();
  });
  
  // Monitorar quando uma aba é ativada
  chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
      console.log(`Tab ativada: ID ${tab.id}, URL: ${tab.url}, Title: ${tab.title}`);
      logTabs();
    });
  });
  
  // Inicializa o log das abas abertas ao carregar a extensão
  logTabs();
  