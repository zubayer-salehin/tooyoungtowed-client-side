import React from "react";
import {
  headquaters,
  afghanistanPakistan,
  kenya,
  nepal,
  additionalConsulties,
  tytw_global,
  tytw_afganisthan,
  tytw_africa,
  general,
  board_adviser,
  glbal_partner,
  implemantation_partner,
  corporate_partner,
} from "../../../assets/pageJsonData/Team/TeamData";  
const Team = () => {
  console.log(headquaters);
  return (
    <div className="bg-[#f0e4cf] mt-[53px] p-10  ">
      <h1 className=" text-center text-[#8c0804] font-bold text-[30px] mb-[30px]">
        OUR TEAM
      </h1>
      <div
        className="justify-center leading-[1.5] text-[18px] w-[90%]"
        style={{ margin: "0 auto", display: "block", textAlign: "center" }}
      >
        Too Young to Wed operates with the support of a dedicated group of
        individuals whose commitment to end child marriage fuels our ability to
        empower girls around the world.
      </div>
      <div className="mt-0 grid h-screen place-items-center">
        <div className="flex text-[#4a4a4a] text-center font-semibold">
          <h1
            className="ml-[8px] mr-[25px] cursor-pointer"
            style={{
              borderBottom: "solid 7px #8c0804",
              letterSpacing: "2.9px",
            }}
          >
            STAFF
          </h1>
          <h1
            className="mr-[25px] cursor-pointer"
            style={{ borderBottom: "", letterSpacing: "2.9px" }}
          >
            BOARD
          </h1>
          <h1
            className="mr-[25px] cursor-pointer"
            style={{ borderBottom: "", letterSpacing: "2.9px" }}
          >
            PARTNERS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Team;
