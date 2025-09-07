const Banner = () => {
  return (
    <>
      <div className="mt-20 ">
        <div className=" sm:p-0 flex flex-col sm:flex-row max-w-4xl mx-auto">
          <div className="pl-2 sm:w-1/2  mt-2 sm:mt-8 sm:order-1 order-2 space-y-4 sm:space-y-8">
            <h1 className="p-4 sm:p-0 text-3xl font-bold ">
              Hello, Welcome to the Bookstore.{" "}
              <span className="text-[#F09C20]">
                There is always something new to learn everday!!
              </span>
            </h1>
            <p className="text-xl p-4 sm:p-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              error odit officia animi possimus. Harum odit ipsum quaerat autem
              molestiae, fugiat id placeat. Veritatis, pariatur.
            </p>

            <div className="flex justify-center ">
              <button className="text-2xl cursor-pointer text-[#F09C20] border-2 border-[#2F4E50] font-bold py-1 rounded-2xl  px-5 ">
                Join Today
              </button>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row justify-center  w-fit sm:w-1/2 order-1">
            <img src="books.jpg" alt="books" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
