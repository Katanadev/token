import React from "react";
import FomoFlag from "../assets/Image4.png";

const HowToBuy = () => {
  return (
    <section className="pt-110 pb-80 section howtobuy">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-heading text-center mb-70">
              <h2
                data-wow-duration="1s"
                data-wow-delay=".1s"
                className="wow flipInX"
                style={{ marginBottom: "30px" }}
              >
                How To Buy $BakedCake ?
              </h2>
            </div>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-xl-9 buy-list">
            <div className="wow slideInUp">
              <div className="buy-item">
                <div className="item-title">
                  <i>1</i>
                  <div className="item-title">Create a Wallet</div>
                </div>
                <div className="item-content">
                  On Google Chrome, visit metamask.io to download the extension
                  and set up a wallet. Android and iOS users can download the
                  Trust Wallet app on your phone.
                </div>
              </div>
              <div className="buy-item">
                <div className="item-title">
                  <i>2</i>
                  <div className="item-title">Send $BNB to your BSC wallet</div>
                </div>
                <div className="item-content">
                  Buy $BNB from Binance Exchange and transfer to your BSC wallet
                  address.
                </div>
              </div>
              <div className="buy-item">
                <div className="item-title">
                  <i>3</i>
                  <div className="item-title">Swap $BNB for $BakedCake</div>
                </div>
                <div className="item-content">
                  Go to the DApps tab at the bottom, find PancakeSwap V2, click
                  “Select a Currency”, enter the contract address in the search
                  bar, and you should be able to find $BakedCake. <br />
                  <br />
                  $BakedCake contract address:
                  0x3629618f2fcec1f79db01721faff1f55abd0d31d
                  <br />
                  <br />
                  Before the Swap, click the gear and set the{" "}
                  <span>slippage to 10-12%</span>, set the amount you want to
                  buy and click the “Swap” button.
                </div>
              </div>
              <div className="buy-extra">
                <p>
                  If you are operating on the PC, please enter the POOCOIN
                  official website and click “Connect Wallet” at the top right
                  of the website.
                </p>
                <p>
                  POOCOIN:{" "}
                  <a
                    target="_blank"
                    href="https://poocoin.app/tokens/0x3629618f2fcec1f79db01721faff1f55abd0d31d"
                    className="item-title"
                  >
                    https://poocoin.app/tokens/0x3629618f2fcec1f79db01721faff1f55abd0d31d
                  </a>
                </p>
                </div>
            </div>
          </div>

          <div className="col-xl-3 d-none d-xl-block howtobuy-cover">
            <img
              data-wow-delay=".1s"
              data-wow-duration="1s"
              src={FomoFlag}
              className="howtobuy-user wow slideInRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
