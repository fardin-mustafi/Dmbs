/* ===== LIVE TIME ===== */
function updateTime(){
  document.getElementById("liveTime").innerText =
    new Date().toLocaleString();
}
setInterval(updateTime,1000);
updateTime();

/* ===== MENU ACTIVE ===== */
document.querySelectorAll("nav a").forEach(link=>{
  if(link.href === window.location.href){
    link.classList.add("active");
  }
});

/* ===== APPROVAL DEMO ===== */
function approve(btn){
  btn.parentElement.innerHTML = "<span style='color:#2ecc71'>Approved</span>";
}

function reject(btn){
  btn.parentElement.innerHTML = "<span style='color:#e74c3c'>Rejected</span>";
}

/* ===== MAP AUTO FOCUS (SOS → MAP) ===== */
function focusBangladesh(){
  if(window.map){
    map.setView([22.5,90.3],7);
  }
}
