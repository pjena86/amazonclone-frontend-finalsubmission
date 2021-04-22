import React from 'react';
import "../css/PromotionalSection.css";
import Carousel from 'react-bootstrap/Carousel'


function PromotionalSection() {
  return (
    <>
      <div className="carousel-content">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTgxNjE2MzAt/ZTgxNjE2MzAt-YWM4MWZiZTMt-w1500._CB659998062_.jpg"
              alt="alexa"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_00000_GWBleedingHero_1500x600_POST_Final_en-CA_FT_PVD6645._CB660540760_.jpg"
              alt="prime video"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Consumer_Electronics/XCM_Manual_1311890_1601389_CA_ca_ce_office_3719577_1500x600_fr_CA._CB659392429_.jpg"
              alt="office essentials"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel_card_area">
        <div class="a-carousel" role="list" >

          <div className="carousel_card" role="listitem"><image>

            <img src="https://images-na.ssl-images-amazon.com/images/G/15/GW/Dashboard/XCM_Manual_1198132_977325_ca_dex_dashboard_cards_379x304_1573283685._SY304_CB427434581_.jpg"
              alt="p1" class="card_image" />
            <h2>A smarter home</h2>
          </image></div>

          <div className="carousel_card" role="listitem"><image>

            <img src="https://images-na.ssl-images-amazon.com/images/G/15/gift-certificates/consumer/2021/Cash/bannercollection/Cash_CA_EN_379x304_20210108._SY304_CB411734083_.jpg"
              alt="p2" class="card_image" />
            <h2>Shop with cash</h2>
          </image></div>

          <div className="carousel_card" role="listitem">

            <image>
              <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Amazon_Familyx2FMom/XCM_CUTTLE_1320331_1643386_CA_3767802_379x304_1X_en_CA._SY304_CB655389043_.jpg"
                alt="p3" class="card_image" />
              <h2>Kid's Superstore</h2>
            </image></div>

          <div className="carousel_card" role="listitem"><image>

            <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Events/XCM_CUTTLE_1315370_1622071_CA_3734514_379x304_1X_en_CA._SY304_CB658181540_.jpg"
              alt="p4" class="card_image" />
            <h2> Decorative Items</h2>
          </image></div>

        </div>
      </div>
    </>

  )
}


export default PromotionalSection
