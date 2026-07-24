// api/danyford-lelucon.js
// Dany Ford Lelucon API — lelucon acak (bahasa Inggris)
// Sumber data: Official Joke API (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Lelucon API",
      setup: data.setup,
      punchline: data.punchline,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Lelucon API", error: "Gagal mengambil data" });
  }
}
