import React, { useState } from "react";
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
import team_banner from "../../../assets/images/Team/team_banner.jpg";
import "./Team.css";
import TeamComponent from "./TeamComponent";
const Team = () => {
  const [isStaff, setIsStaff] = useState(true);
  const [isBoard, setIsBoard] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  return (
    <div className="bg-[#efe4ce] text-center align-middle content-center ">
      <div>
        <div className="banner ">
          <img className="bannerImage " src={team_banner} alt="team_banner" />
          <h1 className="lg:text-5xl text-4xl font-bold text-center text-white">
            OUR TEAM
          </h1>
        </div>

        <img
          className="w-full"
          src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png"
          alt=""
        />
      </div>
      <div className="mb-0 mt-14">
        <h1 className=" text-center text-[#8c0804] font-extrabold  text-[30px] mb-[30px]">
          OUR TEAM
        </h1>
        <div
          className="justify-center leading-[1.5] text-[18px] w-[90%]"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Too Young to Wed operates with the support of a dedicated group of
          individuals whose commitment to end child marriage fuels our ability
          to empower girls around the world.
        </div>
      </div>

      <div className="mt-8 grid place-items-center p-10 ">
        <div className="flex text-[#4a4a4a] text-center font-semibold mb-[104px] ">
          <h1
            className="ml-[8px] mr-[25px] cursor-pointer lg:text-[24px]  "
            style={{
              borderBottom: isStaff ? "solid 7px #8c0804" : "",
              letterSpacing: "2.9",
            }}
            onClick={() => {
              setIsStaff(true);
              setIsBoard(false);
              setIsPartner(false);
            }}
          >
            STAFF
          </h1>
          <h1
            className="mr-[25px] cursor-pointer lg:text-[24px]"
            style={{
              borderBottom: isBoard ? "solid 7px #8c0804" : "",
              letterSpacing: "2.9",
            }}
            onClick={() => {
              setIsStaff(false);
              setIsBoard(true);
              setIsPartner(false);
            }}
          >
            BOARD
          </h1>
          <h1
            className="mr-[25px] cursor-pointer  lg:text-[24px]"
            style={{
              borderBottom: isPartner ? "solid 7px #8c0804" : "",
              letterSpacing: "2.9",
            }}
            onClick={() => {
              setIsStaff(false);
              setIsBoard(false);
              setIsPartner(true);
            }}
          >
            PARTNERS
          </h1>
        </div>
        {/* section staff */}
        {isStaff && (
          <div className="lg:max-w-[988px] w-full mx-auto lg:flex block ">
            <div className="team-section lg:w-2/5 w-full">
              <div className="w-[290px]">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold mb-[50px]  text-center ">
                  OUR TEAM
                </h1>
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]  text-center">
                  Headquaters
                </h1>
              </div>
              <TeamComponent sections={headquaters} />
              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  Afghanistan / Pakistan
                </h1>
              </div>
              <TeamComponent sections={afghanistanPakistan} />
              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  kenya
                </h1>
              </div>
              <TeamComponent sections={kenya} />

              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  Nepal
                </h1>
              </div>
              <TeamComponent sections={nepal} />
            </div>
            <div className="additional-section lg:w-3/5 w-full ">
              <div className="w-[300px] lg:ml-12 align-middle">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold mb-[50px] ">
                  ADDITIONAL CONSULTANTS
                </h1>
              </div>
              <TeamComponent sections={additionalConsulties} />
            </div>
          </div>
        )}
        {/* section board */}

        {isBoard && (
          <div className="lg:max-w-[988px] w-full mx-auto lg:flex block">
            <div className="team-section lg:w-2/5 w-full">
              <div className="w-[290px]">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold  mb-[50px]  text-center ">
                  BOARD OF DIRECTORS
                </h1>
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]  text-center">
                  TYTW Global
                </h1>
              </div>
              <TeamComponent sections={tytw_global} />
              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  TYTW Afghanistan
                </h1>
              </div>
              <TeamComponent sections={tytw_afganisthan} />
              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  TYTW Middle East / Africa
                </h1>
              </div>
              <TeamComponent sections={tytw_africa} />

              <div className="w-[290px]">
                <h1 className="w-[ 290px] text-[20px] text-[#4a4a4a] font-bold mb-[15px]">
                  General
                </h1>
              </div>
              <TeamComponent sections={general} />
            </div>
            <div className="additional-section lg:w-3/5 w-full">
              <div className="w-[300px] lg:ml-12 align-middle">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold  mb-[50px] ">
                  BOARD OF ADVISORS
                </h1>
              </div>
              <TeamComponent sections={board_adviser} />
            </div>
          </div>
        )}
        {/* section partner */}

        {isPartner && (
          <div className="lg:max-w-[988px] w-full mx-auto lg:flex block">
            <div className="team-section lg:w-3/5 w-full">
              <div className="w-[290px]">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold   text-center ">
                  GLOBAL PARTNERS
                </h1>
              </div>
              <TeamComponent sections={glbal_partner} />
            </div>
            <div className="additional-section lg:w-3/5 w-full ">
              <div className="w-[400px]  align-middle">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold  mb-[50px]  text-center ">
                IMPLEMENTATION PARTNERS
                </h1>
              </div>
              <TeamComponent sections={implemantation_partner} />
              <div className="w-[300px] lg:ml-12 align-middle">
                <h1 className="text-[20px] text-[#4a4a4a] font-extrabold  mb-[50px]  text-center ">
                CORPORATE PARTNERS
                </h1>
              </div>
              <TeamComponent sections={corporate_partner} />
            </div>
          </div>
        )}
         <div className='flex justify-center py-[40px]'>
                        <img src="https://tooyoungtowed.org/assets/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363.png" alt="" />
                    </div>
      </div>
    </div>
  );
};

export default Team;
