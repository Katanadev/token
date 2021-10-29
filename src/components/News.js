import React from "react";

const News = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <div className="pc-inner-widget index-page-view">
          <section
            id="community_main"
            className="community-main pt-80 pb-50 section"
          >
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
                      NEWS
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row partners-list wow fadeInUp">
                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://finance.yahoo.com/news/#"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/YahooFinanceLogo.png" />
                  </a>
                </div>

                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://news.yahoo.com/news/#"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
