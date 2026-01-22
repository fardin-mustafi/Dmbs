// ⏰ Live Time
function updateTime(){
  document.getElementById("time").innerText =
    new Date().toLocaleString("en-GB");
}
updateTime();
setInterval(updateTime,1000);

// 🌍 MAP INIT
const map = L.map("bdMap").setView([23.685, 90.3563], 7);

// Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
  attribution:"© OpenStreetMap"
}).addTo(map);

// 🇧🇩 Bangladesh Boundary (simplified highlight)
fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries/BGD.geo.json")
.then(res=>res.json())
.then(data=>{
  L.geoJSON(data,{
    style:{
      color:"#626769ff",
      weight:2,
      fillOpacity:0.05
    }
  }).addTo(map);
});

// 📌 Marker store
let markers = {};

// 🔁 Table → Map focus (backend-ready)
document.getElementById("sosTable").addEventListener("click", e=>{
  const row = e.target.closest("tr");
  if(!row) return;

  const lat = row.dataset.lat;
  const lng = row.dataset.lng;

  if(!lat || !lng) return;

  map.setView([lat,lng], 11);

  if(markers[row.dataset.boat]){
    markers[row.dataset.boat].openPopup();
  }
});


