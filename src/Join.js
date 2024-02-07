import Btc from "./images/bitcoin.e146d46fb598ae0d8f43.png"
import Eth from "./images/ethereum.c6cffe78f0c6abc85da9.png"
import "./Join.css"

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div className="join-content">
            <img alt="coin_img" className="join-content__btc" src={Btc} />
            <img alt="coin_img" className="join-content__eth" src={Eth} />
            <div className="join-content__text">
              <h2 className="font-bold text-7xl text-white p-4">
                Join Us Via <br /> <span className="font-bold text-7xl bg-gradient-to-r from-purple-600 to-pink-600 p-4 inline-block text-transparent bg-clip-text">DISCORD</span>
              </h2>
              <p className="text-neutral-300 text-xl"> Invest and manage all your crypto at one place.</p>
              <button type="button" id="Discord_btn" class="text-white bg-gradient-to-r from-purple-600 to-pink-600 focus:outline-none p-4 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-lg shadow-purple-500/50">DISCORD</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;