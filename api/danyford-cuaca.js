// api/danyford-cuaca.js
// Dany Ford Cuaca API — cuaca terkini berdasarkan koordinat
// Sumber data: Open-Meteo (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  const lat = req.query.lat || "-6.2088"; // default: Jakarta
  const lon = req.query.lon || "106.8456";

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Cuaca API",
      lokasi: { lat: Number(lat), lon: Number(lon) },
      cuaca: data.current_weather,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Cuaca API", error: "Gagal mengambil data" });
  }
}
