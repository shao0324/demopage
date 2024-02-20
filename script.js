// Enable Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Scroll to top function
function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

// JavaScript to set default tab
$(document).ready(function () {
  // 選擇默認顯示的 tab id
  $('#myTabs a[href="#about"]').tab("show");
});

// Add to favorite
function AddFavorite(title, url) {
  try {
    window.addFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, "");
    } catch (e) {
      alert("加入收藏失敗，請使用 Ctrl+D 手動加入收藏。");
    }
  }
}

// Add to desktop
function toDesktop(sUrl, sName) {
  try {
    var WshShell = new ActiveXObject("WScript.Shell");
    var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
    oUrlLink.TargetPath = sUrl;
    oUrlLink.Save();
  } catch (e) {
    alert("当前IE安全级别不允许操作！");
  }
}