import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const requestUrl = `https://tiki.vn/api/v2/widgets/banners_home`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const data = responseJSON;
        setBanner(data.row1);
      } catch (error) {
        console.log("Failed to fetch banner", error.message);
      }
    };
    fetchBanner();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="homepage__banner-block">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div className="homepage__banner-block__list" key={banner.id}>
            <div className="homepage__banner-block__list-title">
              <Link
                to={{ pathname: banner.url }}
                target="_blank"
              >
                {banner.title}
              </Link>
            </div>
            <img
              className="homepage__banner-block__list-image"
              src={banner.image_url}
              alt="banner"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
