// api/danyford-quotes.js
// Dany Ford Quotes API — quote motivasi acak
// Sumber data: quotable.io (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Quotes API",
      quote: data.content,
      author: data.author,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Quotes API", error: "Gagal mengambil data" });
  }
}
