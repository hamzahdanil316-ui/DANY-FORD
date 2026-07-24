// api/danyford-crypto.js
// Dany Ford Crypto API — harga cryptocurrency terkini
// Sumber data: CoinGecko (API publik gratis, tidak perlu API key)

export default async function handler(req, res) {
  const coin = req.query.coin || "bitcoin";
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(coin)}&vs_currencies=usd,idr`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data[coin]) {
      return res.status(404).json({
        api: "Dany Ford Crypto API",
        error: `Koin '${coin}' tidak ditemukan. Coba: bitcoin, ethereum, dogecoin, dll.`,
      });
    }

    res.status(200).json({
      api: "Dany Ford Crypto API",
      coin,
      price_usd: data[coin].usd,
      price_idr: data[coin].idr,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ api: "Dany Ford Crypto API", error: "Gagal mengambil data" });
  }
}
