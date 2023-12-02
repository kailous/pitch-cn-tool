// 监听扩展安装事件，在安装时设置请求拦截规则
chrome.runtime.onInstalled.addListener(() => {
  const blockRule = {
    id: 13943,
    priority: 1,
    action: {
      type: 'block'
    },
    condition: {
      urlFilter: 'https://app.pitch.com/static/app/*/js/l10n/base.js'
    }
  };

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [blockRule]
  });
});