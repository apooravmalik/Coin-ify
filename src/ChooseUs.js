import React from "react";
import ChooseUsimg from "./images/Investment data-amico.svg";
import ChooseBox from "./ChooseBox";
import "./ChooseUs.css"
import {
  IconChecklist,
  IconDeviceMobileMessage,
  IconMoneybag,
  IconPencilBolt,
  IconStack,
  IconWallet,
} from "@tabler/icons-react";

const ChooseUs = () => {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2 className="font-bold text-6xl flex flex-col">
              WHY <span className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 inline-block text-transparent bg-clip-text">CHOOSE US</span>
            </h2>
            <div className="choose-container__content p-4">
              <div className="choose-container__content__1">
                <ChooseBox
                  img={<IconWallet className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="CONNECT YOUR WALLET"
                  text="Use Trust Wallet, Metamask or to connect to the app."
                />
                <ChooseBox
                  img={<IconPencilBolt className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="SELECT YOUR QUANTITY"
                  text="Upload your crypto and set a title, description and price."
                />
                <ChooseBox
                  img={<IconChecklist className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="CONFIRM TRANSACTION"
                  text="Earn by selling your crypto on our marketplace."
                />
              </div>
              <div className="choose-container__content__2">
                <img src={ChooseUsimg} alt="hand_img" id="ChooseUsimg" />
              </div>
              <div className="choose-container__content__3">
                <ChooseBox
                  img={<IconDeviceMobileMessage className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="RECEIVE YOUR OWN NFTS"
                  text="Invest all your crypto at one place on one platform."
                />
                <ChooseBox
                  img={<IconMoneybag className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="TAKE A MARKET
                  TO SELL"
                  text="Discover, collect the right crypto collections to buy or sell."
                />
                <ChooseBox
                  img={<IconStack className="bg-gradient-to-r from-purple-600 to-pink-600 size-12 p-3 rounded-lg" />}
                  title="DRIVE YOUR COLLECTION"
                  text="We make it easy to Discover, Invest and manage."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
