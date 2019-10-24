var ag = document.createElement('link');
ag.rel = "stylesheet";
ag.type = "text/css";
ag.href = chrome.extension.getURL('css/gmail-reverse-conversation.css');
(document.head || document.documentElement).appendChild(ag);
