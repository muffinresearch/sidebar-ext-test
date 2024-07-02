browser.sidebarAction.setPanel({ panel: 'sidebar/default.html' });

browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create(
    {
      id: "setpanel",
      title: 'Run setPanel()',
      contexts: ["all"],
    },
  );
  browser.contextMenus.create(
    {
      id: "default",
      title: 'Open default Panel',
      contexts: ["all"],
    },
  );
  browser.contextMenus.create(
    {
      id: "close",
      title: 'Close Panel',
      contexts: ["all"],
    },
  );
  browser.contextMenus.create(
    {
      id: "toggle",
      title: 'Toggle Panel',
      contexts: ["all"],
    },
  );

});


browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "setpanel":
      browser.sidebarAction.setPanel({
        tabId: tab.id,
        panel: 'sidebar/setPanel.html',
      });
      browser.sidebarAction.open();
      break;
    case "default":
      browser.sidebarAction.setPanel({
        tabId: tab.id,
        panel: 'sidebar/default.html',
      });
      browser.sidebarAction.open();
      break;
    case "close":
      browser.sidebarAction.close();
      break;
    case "toggle":
      browser.sidebarAction.toggle();
      break;
  }
});

