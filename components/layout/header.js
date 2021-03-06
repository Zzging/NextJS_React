import Head from "next/head";
function header() {
  return (
    <header>
      {/* <!-- Header Start --> */}
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div class="menu-wrapper">
              {/* <!-- Logo --> */}
              <div class="logo">
                <a href="/">
                  <img src="/assets/img/logo/logo.png" alt="" />
                </a>
              </div>
              {/* <!-- Main-menu --> */}
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/shop">shop</a>
                    </li>

                    <li>
                      <a href="#">Admin</a>
                      <ul class="submenu">
                        <li>
                          <a href="/stock">Stock</a>
                        </li>
                        <li>
                          <a href="/create">New Product</a>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- <li class="hot">
                  <a href="#">Latest</a>
                  <ul class="submenu">
                    <li><a href="shop.html"> Product list</a></li>
                    <li>
                      <a href="product_details.html"> Product Details</a>
                    </li>
                  </ul>
                </li> --> */}
                  </ul>
                </nav>
              </div>
              {/* <!-- Header Right --> */}
              <div class="header-right">
                <ul>
                  <li>
                    <a href="/cart">
                      <span class="flaticon-shopping-cart"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Mobile Menu --> */}
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </header>
  );
}

export default header;
