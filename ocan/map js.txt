const map = L.map("map").setView([22.5, 91.8], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

/* Coast Guard Station */
L.marker([22.3, 91.8]).addTo(map)
  .bindPopup("Coast Guard Station");

/* SOS Boat */
const sosMarker = L.circleMarker([21.9, 91.5], {
  radius:10,
  color:"red",
  fillColor:"red",
  fillOpacity:1
}).addTo(map);

setInterval(()=>{
  sosMarker.setStyle({
    fillOpacity: sosMarker.options.fillOpacity === 1 ? 0.3 : 1
  });
},600);
