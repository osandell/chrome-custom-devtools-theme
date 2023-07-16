// OBS! Remember to go to "experiments" and check "allow extensions to load custom stylesheets"

var x = new XMLHttpRequest();
x.open("GET", "style.css");
x.onload = function () {
  chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
