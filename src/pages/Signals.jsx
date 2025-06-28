import React, { useState, useEffect } from 'react';

function Signals() {
  const [signals, setSignals] = useState([]);
  const [filterType, setFilterType] = useState("Tümü");
  const [intervalFilter, setIntervalFilter] = useState("Tümü");
  const [signalType, setSignalType] = useState("Tümü");
  const [minScore, setMinScore] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/signals")
      .then(res => res.json())
      .then(data => setSignals(data));
  }, []);

  const filteredSignals = signals.filter((signal) => {
    const matchType = filterType === "Tümü" || signal.type === filterType;
    const matchInterval = intervalFilter === "Tümü" || signal.interval === intervalFilter;
    const matchSignalType = signalType === "Tümü" || signal.direction === signalType.toLowerCase();
    const matchScore = signal.score >= minScore;
    const matchSearch = signal.symbol.toLowerCase().includes(search.toLowerCase());
    return matchType && matchInterval && matchSignalType && matchScore && matchSearch;
  });

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📡 Crypto Sinyal Paneli</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Parite ara (örn: BTCUSDT)"
          className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
        >
          <option value="Tümü">🔎 Tüm Türler</option>
          <option value="VIP">💎 VIP</option>
          <option value="Genel">👥 Genel</option>
        </select>
        <select
          value={intervalFilter}
          onChange={(e) => setIntervalFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
        >
          <option value="Tümü">⏱️ Tüm Zamanlar</option>
          <option value="15m">15 Dakika</option>
          <option value="1h">1 Saat</option>
          <option value="4h">4 Saat</option>
        </select>
        <select
          value={signalType}
          onChange={(e) => setSignalType(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
        >
          <option value="Tümü">📈 Tüm Yönler</option>
          <option value="BUY">📗 Al (Long)</option>
          <option value="SELL">📕 Sat (Short)</option>
        </select>
        <input
          type="number"
          min="0"
          max="100"
          step="5"
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
          placeholder="📊 Min. Skor"
          className="p-2 w-32 rounded bg-gray-800 border border-gray-600 text-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredSignals.map((signal, index) => (
          <div key={index} className="border border-gray-700 rounded p-4 bg-gray-800">
            <h2 className="text-xl font-bold mb-2">{signal.symbol} - {signal.interval}</h2>
            <p>📈 Sinyal: <strong>{signal.direction.toUpperCase()}</strong></p>
            <p>🎯 Giriş: {signal.entry}</p>
            <p>🎯 TP: {signal.tp1} / {signal.tp2} / {signal.tp3}</p>
            <p>🛑 SL: {signal.sl}</p>
            <p>📊 Skor: {signal.score}</p>
            <p className="mt-2 italic text-sm text-gray-400">🔐 Tür: {signal.type || (signal.score >= 70 ? "VIP" : "Genel")}</p>

            <div className="mt-4">
              <iframe
                src={`https://www.tradingview.com/widgetembed/?frameElementId=tradingview_${index}&symbol=BINANCE:${signal.symbol}&interval=60&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1`}
                width="100%"
                height="250"
                frameBorder="0"
                allowtransparency="true"
                scrolling="no"
                title={`${signal.symbol} chart`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Signals;
