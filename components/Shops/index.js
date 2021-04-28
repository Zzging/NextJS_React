import React from "react";
import CardShop from "../../components/product";
function index(props) {
  return (
    <>
      <div>
        <main>
          {/* Hero Area Start*/}
          <div className="slider-area">
            <div className="single-slider slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>Perfume Shop</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End*/}
          {/* Latest Products Start */}
          <section className="popular-items latest-padding">
            <div className="container">
              <div className="row product-btn justify-content-between mb-40">
                <div className="properties__button">
                  {/*Nav Button  */}
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Quartz
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Automatic
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Eco_Drive
                      </a>
                    </div>
                  </nav>
                  {/*End Nav Button  */}
                </div>
                {/* Grid and List view */}
                <div className="grid-list-view" />
                {/* Select items */}
              </div>
              {/* Nav Card */}

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    {/* card one */}
                    {props.data.map((data) => (
                      <CardShop data={data} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Latest Products End */}
          {/*? Shop Method Start*/}
          <div className="shop-method-area">
            <div className="container">
              <div className="method-wrapper">
                <div className="row d-flex justify-content-between">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-method mb-40">
                      <i className="ti-package" />
                      <h6>Free Shipping Method</h6>
                      <p>
                        aorem ixpsacdolor sit ameasecur adipisicing elitsf
                        edasd.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-method mb-40">
                      <i className="ti-unlock" />
                      <h6>Secure Payment System</h6>
                      <p>
                        aorem ixpsacdolor sit ameasecur adipisicing elitsf
                        edasd.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-method mb-40">
                      <i className="ti-reload" />
                      <h6>Secure Payment System</h6>
                      <p>
                        aorem ixpsacdolor sit ameasecur adipisicing elitsf
                        edasd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop Method End*/}
        </main>

        {/*? Search model Begin */}
        <div className="search-model-box">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-btn">+</div>
            <form className="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Searching key....."
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
