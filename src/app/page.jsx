"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiGame } from "react-icons/bi";
import checkLocalStorage from "./_utilities/checkLocalStorage";
import LoadBar from "./_components/LoadBar";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleBtnAction = (action) => {
    if (!action) {
      localStorage.setItem("preference", "skillset");
      return router.push("/skillset");
    } else {
      localStorage.setItem("preference", "personality");
      router.push('/secret-gateway')
    }
  };

  useEffect(() => {
  const preference = checkLocalStorage('preference');
  if (preference === 'skillset') {
    return router.push("/skillset");
  }
  if (preference === 'personality') {
    return router.push("/secret-gateway");
  }
  setLoading(false)
  }, []);

  return (
    <>
    {loading ? <LoadBar /> : 
    <div className="flex flex-col items-center pb-4 space-y-10">
      <span className="text-6xl text-black dark:text-white animate-spin-slow ">
        <BiGame />
      </span>
      <div className=" max-w-[321px] md:max-w-none">
        <h1 className="font-bold uppercase text-7xl font-header">
          Wish to know
          <br />
          <span className="text-custYellow">me</span> better first?
        </h1>
      </div>

      <div className="flex flex-row gap-5 pt-10 text-lg sm:flex-row sm:gap-10 sm:text-4xl lg:pt-20">
        <button
          onClick={() => handleBtnAction(true)}
          className="roundedBtn bg-custTurq text-custBackground"
        >
          yes way!
        </button>
        <button
          onClick={() => handleBtnAction(false)}
          className="border border-white roundedBtn"
        >
          later skater
        </button>
      </div>
    </div>
    }
    </>
  );
};

export default Home;