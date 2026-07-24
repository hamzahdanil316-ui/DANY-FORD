// api/danyford-nasihat.js
// Dany Ford Nasihat API — nasihat acak
// Sumber data: Advice Slip API (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Nasihat API",
      nasihat: data.slip?.advice,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Nasihat API", error: "Gagal mengambil data" });
  }
}
