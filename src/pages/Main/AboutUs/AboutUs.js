import React from "react";
import flower from "../../../../src/assets/images/Issue/flower.png";
import flowerBorderTop from "../../../../src/assets/images/Issue/flowerBorderTop.png";
import redpattern from "../../../../src/assets/images/Issue/redpattern.png";
import aboutOverlay from "../../../assets/images/AboutUs/aboutOverlay.jpg";
import aboutUsBanner from "../../../assets/images/AboutUs/aboutUsBanner.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#f2e6d0]">
      {/* banner part start */}
      <div
        className="lg:h-[75vh] md:h-[460px] h-[260px] bg-no-repeat lg:bg-cover bg-[length:100%] relative"
        style={{ backgroundImage: `url(${aboutUsBanner})` }}
      >
        <div className="lg:max-w-[1180px] md:w-[900px] h-[800px] mx-auto w-full lg:pt-[30vh] md:pt-[160px] pt-[75px] ">
          <div
            className="text-white font-bold lg:text-[48px] text-[40px] lg:ml-0 ml-[25px] "
            style={{ textShadow: "2px 2px 5px #000000" }}
          >
            ABOUT US
          </div>
        </div>
        <div
          className="w-full h-[25px] absolute bottom-0"
          style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
        ></div>
      </div>
      <div>
        <div
          className="w-full h-[33.7px]"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
      </div>
      {/* banner part end */}

      {/* content part start */}

      <div class="max-w-[1140px] w-[89%] mx-auto pt-[53px] pb-[40px] flex flex-col gap-7 ">
        <h1 class="text-center lg:text-[48px] md:text-[36px] text-[30px] font-bold text-[#8c0804]">
          OUR MISSION & VISION
        </h1>
        <p class="font-bold text-[22px] text-center">
          Too Young to Wed's mission is to empower girls and end child marriage
          globally.
        </p>
        <div className="text-[22px] text-center">
          <p>We envision a world where:</p>
          <p>
            Every girl can decide for herself, if, when and to whom she will
            marry;{" "}
          </p>
          <p>
            Girls are free to be children and teens, with access to
            gender-specific healthcare and all levels of education;
          </p>
          <p>All girls are free to determine the course of their own lives.</p>
        </div>
        <p className="text-center text-[#4a4a4a] lg:text-[22px] text-[18px] italic">
          Above, the mother of a Tehani Workshop participant in Samburu County,
          Kenya with TYTW Founder
          <span class="block"> Stephanie Sinclair.</span>
        </p>
        <div className="lg:w-3/5 w-full mx-auto">
          <p className="lg:text-[64px] text-[48px] text-center leading-[1.0] text-[#5c1112]">
            "Choices define us and allow us to realize our potential. Child
            marriage robs girls of this chance."
          </p>
          <p className="italic text-[20px] text-center my-5 text-[#5c1112]">
            Archbishop Desmond Tutu and Graça Machel
          </p>
        </div>
      </div>
      {/* content part end */}
      <div>
        <div
          className="w-full h-[33.7px] rotate-180"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
        <div
          className="lg:h-[75vh] md:h-full lg:bg-fixed md:bg-[length:100%] bg-no-repeat lg:bg-cover bg-center relative"
          style={{ backgroundImage: `url(${aboutOverlay})` }}
        >
          <div
            className="w-full h-[25px] absolute top-0 rotate-180"
            style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
          ></div>
          <img className="lg:invisible w-full" src={aboutOverlay} alt="" />
          <div
            className="w-full h-[25px] absolute bottom-0 "
            style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
          ></div>
        </div>
        <div
          className="w-full h-[33.7px]"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
      </div>
      <div class="max-w-[1140px] w-[89%] mx-auto pt-[53px] pb-[40px] flex flex-col gap-7 ">
        <img className="mx-auto" width={75} src={flower} alt="" />
        <h1 class="text-center lg:text-[48px] md:text-[36px] text-[30px] font-bold text-[#8c0804]">
          OUR HISTORY
        </h1>
        <p className="text-center text-[#4a4a4a] lg:text-[22px] text-[18px] italic mb-10">
          Too Young to Wed traces its official launch back to October 11, 2012 -
          the first International Day of the Girl Child. Dignitaries from around
          the world gathered at the United Nations in New York City that day
          and, surrounded by photographs of child brides as young as five,
          pledged to do whatever it took to end child marriage.
        </p>
        <p className="md:text-[22px] text-[18px]">
          But the initiative's roots stretch back another decade, to Herat,
          Afghanistan, where visual journalist Stephanie Sinclair was working on
          a story about girls and women who set themselves on fire. There, she
          discovered a disturbing pattern among the scarred patients in the
          hospital’s burn ward: Most of them had been forced into marriage as
          children. Horrified to learn that child marriage was common in
          communities throughout the world, Sinclair dedicated the next fifteen
          years of her life to documenting the practice in hopes of inspiring
          change.
        </p>
        <p className="md:text-[22px] text-[18px]">
          Too Young to Wed’s international traveling photo exhibition is the
          centerpiece of our advocacy effort and features the haunting stories
          of child brides from Nepal, India, Tanzania, Ethiopia, Yemen,
          Afghanistan and yes, even the United States.
        </p>
      </div>

      <div className="relative">
        <div
          className="w-full h-[33.7px] rotate-180"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
        <div className="lg:h-full md:h-full ">
          <div
            className="w-full h-[25px] absolute top-8 rotate-180 "
            style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
          ></div>
          <video loop autoPlay={true} muted>
            <source
              src={"https://tooyoungtowed.org/uploads/11.mov"}
              type="video/mp4"
            />
          </video>
          <div
            className="w-full h-[25px] absolute bottom-7 "
            style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
          ></div>
        </div>
        <div
          className="w-full h-[33.7px]"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
      </div>

      <div class="max-w-[1140px] w-[89%] mx-auto pt-[53px] pb-[40px] flex flex-col gap-7 ">
        <h1 class="text-center lg:text-[40px] md:text-[36px] text-[30px] font-bold text-[#8c0804]">
          DISCLAIMER
        </h1>
        <p className="md:text-[22px] text-[18px] font-bold">
          TYTW is a secular organization that works with some of the most
          difficult-to-reach, vulnerable girls in the world.
        </p>
        <p className="md:text-[22px] text-[18px]">
          We partner with grassroots organizations providing direct relief to
          their own communities, instead of parachuting in without an
          understanding of contextual realities.
        </p>
        <p className="md:text-[22px] text-[18px]">
          In some field programming circumstances, faith-based community
          organizations may be best-equipped with staff capacity and resources
          to offer substantial support -- especially during humanitarian crises.
          Occasionally, TYTW will partner with such organizations referred to us
          by local experts in order to best support our beneficiaries. TYTW does
          not partner with faith-based groups adherent to religions practiced
          outside of the beneficiary community. TYTW remains fully secular with
          no religious affiliations or agenda, and no TYTW funds are used for
          any religious purposes.
        </p>
        <img className="mx-auto pt-10 pb-5" width={75} src={flower} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
