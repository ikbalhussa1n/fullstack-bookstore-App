import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { getBooks } from "./getBooks";
import { useEffect, useState } from "react";

const Courses = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 sm:p-0 flex flex-col  max-w-4xl mx-auto ">
        <div className="p-5">
          <h1 className="sm:text-4xl text-2xl mt-5 sm:mt-10 font-bold text-center">
            We're Delighted to have you{" "}
            <span className="text-[#F09C20]">here :)</span>
          </h1>
        </div>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          tempore odio sed omnis odit! Labore vitae atque nostrum dignissimos
          culpa!
        </p>
        <div className="flex justify-center ">
          <Link to={"/"}>
            <button class="my-2 text-2xl cursor-pointer text-[#F09C20] border-2 border-[#2F4E50] font-bold  rounded-2xl w-fit px-8 ">
              Back
            </button>
          </Link>
        </div>

        <div className=" grid frid-cols-1 sm:grid-cols-3 p-5">
          {books.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
