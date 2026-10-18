document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", () => {
 resetTabs();
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function resetTabs() {
 const contents = document.querySelectorAll(".tabcontent");
 contents.forEach(content => {
  if (!content.classList.contains("active")) {
   content.style.display = "none";
   }
  });
}
