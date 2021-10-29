import React from "react";

const Process = () => {
  return (
    <section className="process2 pt-110 pb-80 section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-heading text-center mb-70">
              <span
                data-wow-duration="1s"
                data-wow-delay="0s"
                className="text-primary text-uppercase mb-10 d-inline-block wow slideInUp"
              ></span>
              <h2
                data-wow-duration="1s"
                data-wow-delay=".1s"
                className="wow flipInX"
                style={{ marginBottom: "30px" }}
              >
                REBASE ALGORITHM
              </h2>
              <p>
                Rebasing algorithm allows $BakedCake to maintain an upward movement and keep charts green
                constantly. Which in turn helps it trend on major platforms and bring in new investors,
                thus pushing up the value of $BakedCake
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-xl-4 col-lg-4">
            <div
              data-wow-delay=".1s"
              className="process-item mb-5 mb-xl-0 text-center wow zoomIn style-2"
            >
              <div className="process-icon">
                <img src="https://bakedcake.finance/images/bake-logo.svg" />
              </div>
              <h3 className="mb-15">$BAKE Rewards</h3>
              <p className="mb-40">
                3% of every transaction goes straight back to your wallet in the form of $BAKE tokens. 
                Automatically converted as its traded so it doesn't affect the price of the token.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div
              data-wow-delay=".1s"
              className="process-item mb-5 mb-xl-0 text-center wow zoomIn style-2"
            >
              <div className="process-icon">
                <img src="https://bakedcake.finance/images/pcs-logo.svg" />
              </div>
              <h3 className="mb-15">$BAKE Rewards</h3>
              <p className="mb-40">
                3% of every transaction goes straight back to your wallet in the form of $CAKE tokens. 
                Automatically converted as its traded so it doesn't affect the price of the token.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div
              data-wow-delay=".1s"
              className="process-item mb-5 mb-xl-0 text-center wow zoomIn style-2"
            >
              <div className="process-icon">
                <img src="https://bakedcake.finance/images/benefit-icon-4.png" />
              </div>
              <h3 className="mb-15">Staking Options</h3>
              <p className="mb-40">
                $BakedCake holders will have options to earn extra by staking into our Staking Pools
                and earn other tokens on BSC.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div
              data-wow-delay=".1s"
              className="process-item mb-5 mb-xl-0 text-center wow zoomIn style-2"
            >
              <div className="process-icon">
                <img src="https://bakedcake.finance/images/benefit-icon-3.png" />
              </div>
              <h3 className="mb-15">Strong Community</h3>
              <p className="mb-40">
                BakedCake community is strong and we have investors from our previous projects. Which 
                proves their trust in our abilities and decision making.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div
              data-wow-delay=".1s"
              className="process-item mb-5 mb-xl-0 text-center wow zoomIn style-2"
            >
              <div className="process-icon">
                <img src="https://bakedcake.finance/images/benefit-icon-2.png" />
              </div>
              <h3 className="mb-15">Upward Moving Price</h3>
              <p className="mb-40">
                Using the rebasing mechanism judiciously the price of $BakedCake will be pushed
                upwards which will help bring more investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
