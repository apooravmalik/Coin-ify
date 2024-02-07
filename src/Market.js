import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./Market.css";

function Market() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
            )
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text font-bold bg-gradient-to-r from-purple-600 to-pink-600 p-4 inline-block text-transparent bg-clip-text">Search a currency</h1>
                <form>
                    <input
                        className="coin-input relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        type="text"
                        onChange={handleChange}
                        placeholder="Search" />
                </form>
            </div>
            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h} />
                );
            })}
        </div>
    );
}
  
  export default Market;
  
