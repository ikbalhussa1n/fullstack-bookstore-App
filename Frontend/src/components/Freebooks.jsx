import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { getBooks } from "./getBooks";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";
const Freebooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBooks(); // fetch from API
      setBooks(data);
    };
    fetchData();
  }, []);
  const filterData = books.filter((data) => data.category === "Free");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="p-5 flex mt-10  flex-col  max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Free Offered Books</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus
            doloremque ex blanditiis aspernatur, earum expedita dolorem ad
            incidunt tempore.
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebooks;
