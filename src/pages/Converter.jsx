import { useState } from "react";
import InputBox from "../components/inputBox";
import Hook from "../hooks/useCurrencyhook";

function Converter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(85.72);

  const values = Hook(from);
  const options = Object.keys(values);

  const swapfunc = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  function submit(e) {
    e.preventDefault();
    let rate = values[to];
    let output = rate * amount;
    setConvertedAmount(output);
  }

  return (
    <div
      className="flex justify-center items-center w-full h-[calc(100vh-4rem)] bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://static5.depositphotos.com/1005893/446/i/950/depositphotos_4460344-stock-photo-indian-currency.jpg)",
      }}
    >
      <div className="max-w-80 text-[small] sm:text-base sm:max-w-[65%] md:max-w-[55%] lg:max-w-[44%] border rounded-lg p-2 sm:p-6 pb-1 backdrop-brightness-80 backdrop-blur-sm text-center">
        <form onSubmit={submit} className="relative">
          <InputBox
            label="From"
            amount={amount}
            selectedCurrency={from}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={(Currency) => setFrom(Currency)}
            currencyOptions={options}
          />
          <button
            type="button"
            className="text-white bg-blue-600 rounded-lg px-3 py-2 font-normal absolute top-[28%] left-[40%]"
            onClick={swapfunc}
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            selectedCurrency={to}
            amountDisabled={true}
            onCurrencyChange={(Currency) => setTo(Currency)}
            currencyOptions={options}
          />
          <button
            type="Submit"
            className="w-full text-white bg-blue-600 rounded-lg my-3 py-3"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Converter;
