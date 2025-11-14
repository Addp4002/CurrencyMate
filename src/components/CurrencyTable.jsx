import React from "react";

function CurrencyTable({ baseCurrency, amount, rates }) {
  if (!rates || Object.keys(rates).length === 0) {
    return <p className="text-gray-500 text-center mt-4">Loading rates...</p>;
  }

  const topCurrencies = ["usd", "inr", "eur", "gbp", "jpy", "cad", "aud", "chf", "cny"];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full text-sm border border-gray-300 bg-white rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Currency</th>
            <th className="py-2 px-4 text-left">Converted Amount</th>
          </tr>
        </thead>
        <tbody>
          {topCurrencies.map((currency) => (
            <tr key={currency} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 uppercase">{currency}</td>
              <td className="py-2 px-4">
                {(rates[currency] * amount).toFixed(2)} {currency.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;
