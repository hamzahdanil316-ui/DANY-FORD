// api/danyford-kurs.js
// Dany Ford Kurs API — konversi mata uang
// Sumber data: exchangerate.host (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  const from = (req.query.from || "USD").toUpperCase();
  const to = (req.query.to || "IDR").toUpperCase();
  const amount = req.query.amount || 1;

  try {
    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({
      api: "Dany Ford Kurs API",
      from,
      to,
      amount: Number(amount),
      result: data.result,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Kurs API", error: "Gagal mengambil data" });
  }
}
