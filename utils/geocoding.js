module.exports.geocodeAddress = async function (address) {
  const baseUrl = "https://nominatim.openstreetmap.org/search";
  const params = new URLSearchParams({
    addressdetails: "1",
    q: address,
    format: "jsonv2",
    limit: "1",
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`, {
      headers: {
        "User-Agent": "MyGeocoderApp/1.0 ",
      },
    });

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error during geocoding:", error.message);
  }
};
