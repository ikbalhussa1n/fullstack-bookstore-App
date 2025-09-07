import React from "react";
import booklist from "../data/Booklist";
const Cards = ({ item }) => {
  //   console.log(item);
  // console.log("Book Item:", item);
  return (
    <div className="">
      <div className="card bg-base-100 min-w-28 m-1 shadow-sm shadow-amber-200 h-80 py-5 hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="book" width={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            {item.title}
            <div className=" badge badge-secondary bg-[#FBECD7] border-none text-black ">
              {item.category}
            </div>
          </h2>
          <p>{item.name}</p>
          <div className=" flex card-actions justify-between">
            <div className="badge badge-outline">{"$ " + item.price}</div>
            <div className="badge badge-outline cursor-pointer sm:hover:bg-[#FBECD7]">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
