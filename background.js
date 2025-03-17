function closeInactiveTabs() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
		// 활성화 되어 있지 않고, 고정되어 있지 않고, 메모리에서 내려갔다면 시간을 확인해서 탭을 닫아 보자. 
		if(!tab.active && !tab.pinned && tab.discarded){
			browser.tabs.remove(tab.id);
		}
    });
  });
}

// 주기적으로 비활성화된 탭을 확인
setInterval(closeInactiveTabs, 60000); // 1분마다 실행
