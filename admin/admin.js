// LIVE CLOCK
function updateTime(){
  document.getElementById("liveTime").innerText =
    new Date().toLocaleString();
}
updateTime();
setInterval(updateTime,1000);

// APPROVAL DEMO
function approve(btn){
  btn.closest("tr").remove();
  alert("User Approved (demo)");
}

function reject(btn){
  btn.closest("tr").remove();
  alert("User Rejected (demo)");
}
