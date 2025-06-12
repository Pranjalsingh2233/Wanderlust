const map = new maplibregl.Map({
  container: "map",
  style:
    "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
  center: listing.geometry.coordinates, //starting position [long, lati]
  zoom: 9,
});

const marker = new maplibregl.Marker({ color: "red" }) //For marker
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maplibregl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);
