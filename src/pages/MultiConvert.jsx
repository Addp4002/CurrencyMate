import { useState } from "react";
import InputBox from "../components/inputBox";
import useCurrencyhook from "../hooks/useCurrencyhook";
import CurrencyTable from "../components/CurrencyTable";

function MultiConvert() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");

  const values = useCurrencyhook(from);
  const options = Object.keys(values);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-4">
          🌍 Multi-Currency Converter
        </h2>

        <InputBox
          label="From"
          amount={amount}
          selectedCurrency={from}
          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(Currency) => setFrom(Currency)}
          currencyOptions={options}
        />

        <CurrencyTable baseCurrency={from} amount={amount} rates={values} />
      </div>
    </div>
  );
}

export default MultiConvert;
