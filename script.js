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
