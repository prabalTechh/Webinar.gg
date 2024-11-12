/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { SlCalender, SlPlus, SlCamera } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import img from "../assets/ProfilePicturea (1).png"
import img from "../assets/profilePicture.jpg";
import Calender from "./Calender";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="h-screen flex bg-white">
      <Sidebar isOpen={isOpen} setIsOpen={setisOpen} />
      <MainConent />
    </div>
  );
};

function Sidebar({ isOpen, setIsOpen }) {
  if (!isOpen) {
    return (
      <div className="hidden w-28 md:flex flex-col items-center gap-10 py-10 h-full border">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" px-4 text-sm border py-1.5 rounded-md bg-blue_700 text-white"
        >
          Webinar<span className="text-blue-400 font-medium">.gg</span>
        </button>
        <ul className="flex flex-col items-center  text-xl gap-4 ">
          <li className="text-slate-400 hover:text-black">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" px-4 text-sm border py-1.5 rounded-md bg-blue_700 text-white"
            >
              <FaHome />
            </button>
          </li>
          <li className="text-slate-400 hover:text-black">
            <IoIosPeople />
          </li>
          <li className="text-slate-400 hover:text-black">
            <FaMoneyBills />
          </li>
          <li className="text-slate-400 hover:text-black">
            <FaUsersBetweenLines />
          </li>
          <li className="text-slate-400 hover:text-black">
            <IoIosSettings />
          </li>
        </ul>
      </div>
    );
  }
  if (isOpen)
    return (
      <div className="sm:w-96 w-9 transition-all delay-150 bg-white h-full px-6 pt-12  flex flex-col drop-shadow-xl  gap-10">
        <div className="flex justify-between items-center ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 text-sm border py-1.5 rounded-md bg-blue_700 text-white"
          >
            Webinar<span className="text-blue-400 font-medium">.gg</span>
          </button>
          <img src={img} alt="" className="h-12" />
        </div>
        <ul className="flex flex-col   text-xl gap-4 ">
          <li className="text-slate-400 hover:text-black hover:font-medium flex px-2 justify-between hover:bg-gray-200 py-2">
            <h3 className="text-base">Home</h3>
            <FaHome />
          </li>
          <li className="text-slate-400 hover:text-black hover:font-medium flex px-2 justify-between hover:bg-gray-200 py-2">
            <h3 className="text-base">Webinars</h3>
            <IoIosPeople />
          </li>
          <li className="text-slate-400 hover:text-black hover:font-medium flex px-2 justify-between hover:bg-gray-200 py-2">
            <h3 className="text-base">Billing</h3>
            <FaMoneyBills />
          </li>
          <li className="text-slate-400 hover:text-black hover:font-medium flex px-2 justify-between hover:bg-gray-200 py-2">
            <h3 className="text-base">User Manangement</h3>
            <FaUsersBetweenLines />
          </li>
          <li className="text-slate-400 hover:text-black hover:font-medium flex px-2 justify-between hover:bg-gray-200 py-2">
            <h3 className="text-base">Settings</h3>
            <IoIosSettings />
          </li>
        </ul>
      </div>
    );
}

function MainConent() {
  const options = { weekday: "long", day: "numeric", month: "long" };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div className="flex-1 flex flex-col h-screen bg-white ">
      <img
        src="https://e0.pxfuel.com/wallpapers/393/237/desktop-wallpaper-facebook-cover-grey-abstract-3440x1440-abstract.jpg"
        alt="img"
        className="w-full h-36 hidden md:block"
      />
      <div className="sm:grid flex flex-col grid-cols-11 gap-4 md:p-4 py-10 h-96 flex-1 ">
        <div className="h-80 bg-white xl:col-span-3  md:-translate-y-16 rounded-xl flex flex-col items-center pt-12 gap-4 pb-6 text-sm shadow-xl ">
          <img src={img} alt="" className="h-[8rem]  w-[7rem]" />
          <h1>Prabal Chanpuria</h1>
          <p>
            id.prabal@gmail.com <br />
            +91 9644554494
          </p>
          <p>Delhi, India</p>
        </div>
        <div className="h-full  col-span-5  px-4 ">
          <h3 className="font-medium text-slate-400">{formattedDate}</h3>

          <h1 className="font-semibold text-2xl">Good morning, Prabal 👋</h1>

          <div className="mx-2 shadow-xl flex flex-col gap-2 py-4 px-4 mt-2  ">
            <div className="flex justify-between  py-2 bg-gray-200 gap-2 items-center  px-2">
              <div className="flex gap-2 items-center">
                <SlCalender /> {formattedDate} <MdKeyboardArrowDown />
              </div>
              <div className="flex gap-5">
                <FaArrowLeft /> <FaArrowRight />
              </div>
            </div>
            <Calender />
            <hr className="border border-gray-300" />
            <Calender />
            <hr className="border border-gray-300" />
            <Calender />
            <hr className="border border-gray-300" />
            <Calender />
          </div>
        </div>
        <div className="h-96 col-span-3  flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-xl flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8">
              {/* Schedule a Webinar */}
              <div className="flex flex-col items-center">
                <span className="p-4 bg-teal-300 rounded-md text-2xl text-blue-900">
                  <SlCalender />
                </span>
                <p className="mt-2 font-semibold text-gray-800">
                  Schedule a Webinar
                </p>
              </div>

              {/* Join a Webinar */}
              <div className="flex flex-col items-center">
                <span className="p-4 bg-teal-300 rounded-md text-2xl text-blue-900">
                  <SlPlus />
                </span>
                <p className="mt-2 font-semibold text-gray-800">
                  Join a Webinar
                </p>
              </div>

              {/* Open Recordings */}
              <div className="flex flex-col items-center">
                <span className="p-4 bg-teal-300 rounded-md text-2xl text-blue-900">
                  <SlCamera />
                </span>
                <p className="mt-2 font-semibold text-gray-800">
                  Open Recordings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
