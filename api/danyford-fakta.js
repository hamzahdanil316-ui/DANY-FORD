// api/danyford-fakta.js
// Dany Ford Fakta API — fakta unik acak
// Sumber data: uselessfacts.jsph.pl (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Fakta API",
      fakta: data.text,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Fakta API", error: "Gagal mengambil data" });
  }
}
