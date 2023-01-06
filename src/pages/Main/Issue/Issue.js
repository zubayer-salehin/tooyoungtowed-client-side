import React from "react";
import flower from "../../../../src/assets/images/Issue/flower.png";
import flowerBorderTop from "../../../../src/assets/images/Issue/flowerBorderTop.png";
import girlsAtHill from "../../../../src/assets/images/Issue/girlsAtHill.jpg";
import issueBanner from "../../../../src/assets/images/Issue/issueBanner.jpg";
import marriage from "../../../../src/assets/images/Issue/marriage.jpg";
import redpattern from "../../../../src/assets/images/Issue/redpattern.png";

const Issue = () => {
  return (
    <div className="bg-[#f2e6d0]">
      {/* banner part start */}
      <div
        className="lg:h-[75vh] md:h-[460px] h-[260px] bg-no-repeat lg:bg-cover bg-[length:100%] relative"
        style={{ backgroundImage: `url(${issueBanner})` }}
      >
        <div className="lg:max-w-[1180px] md:w-[900px] h-[800px] mx-auto w-full lg:pt-[30vh] md:pt-[160px] pt-[75px] ">
          <div
            className="text-white font-bold lg:text-[48px] text-[40px] lg:ml-0 ml-[25px] "
            style={{ textShadow: "2px 2px 5px #000000" }}
          >
            THE ISSUE
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
          THE GLOBAL ISSUE OF CHILD MARRIAGE
        </h1>
        <p className="text-center text-[#4a4a4a] lg:text-[22px] text-[18px] italic">
          Above, 15-year-old Radha on her wedding day in Rajasthan, India.
        </p>
        <p className="md:text-[22px] text-[18px]">
          In many societies, marriage is a celebrated institution signifying a
          union between two adults and the beginning of their future together.
          Unfortunately, millions of girls still suffer from a vastly different
          marriage experience every year. Many brides around the world are still
          children, not even teenagers. So young are some girls that they hold
          onto their toys during the wedding ceremony. Usually these girls
          become mothers in their early teens, while they are still children
          themselves. The practice can result in profound negative consequences
          for the girls, their families, and their entire communities. Globally,
          an estimated 12 million girls are married before reaching age 18; Join
          us in our mission to empower girls and end child marriage.
        </p>
      </div>
      {/* content part end */}
      <div>
        <div
          className="w-full h-[33.7px] rotate-180"
          style={{ backgroundImage: `url(${redpattern})` }}
        ></div>
        <div
          className="lg:h-[75vh] md:h-full lg:bg-fixed md:bg-[length:100%] bg-no-repeat lg:bg-cover bg-center relative"
          style={{ backgroundImage: `url(${marriage})` }}
        >
          <div
            className="w-full h-[25px] absolute top-0 rotate-180"
            style={{ background: `url(${flowerBorderTop}) 0px -25px repeat-x` }}
          ></div>
          <img className="lg:invisible w-full" src={marriage} alt="" />
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
        <p className="text-center text-[#4a4a4a] lg:text-[22px] text-[18px] italic mb-10">
          Above, Faiz, 40, and Ghulam, 11, sit for a portrait in her home prior
          to their wedding in Afghanistan.
        </p>
        <p className="md:text-[22px] text-[18px]">
          In communities where child marriage is prevalent, families are under
          tremendous social pressure to uphold the practice. Failure to conform
          can bring ridicule, disapproval, and shame to the family, and loss of
          status. In many societies, child marriage is about patriarchy,
          marriage transfers a father’s rule over his daughter to her husband.
          Harmful notions of child marriage, enshrined in some local customs and
          sometimes justified with religious arguments, contribute to the
          perpetuation of the practice in communities across the world.
        </p>
        <p className="md:text-[22px] text-[18px]">
          Child marriage remains common in rural areas and among the
          least-educated and poorest of the poor. Parents and communities want
          to best for their girls. But they may not realize that by curtailing
          girls’ education and marrying them off at such a young age, they are
          putting the girls at risk and perpetuating the cycle of powerlessness
          and poverty. Early marriage limits a girl’s options for the future and
          her community’s opportunities for development.
        </p>
        <p className="md:text-[22px] text-[18px]">
          Child marriage exposes a girl to multiple sexual and reproductive
          health risks. Young girls are neither physically mature enough nor
          psychologically ready to become wives and mothers. The results can be
          catastrophic for the girls and their families. Often married to older
          husbands, young brides are expected to prove their fertility and they
          are subjected to early, frequent, and forced sexual relations,
          regardless of their own desires or needs. Many girls have little or no
          access to services and information that might protect them from
          pregnancy and sexually transmitted infections, including HIV.
          Physically underdeveloped girls are especially vulnerable to obstetric
          fistula, which is a hole in the birth canal caused by prolonged labour
          without prompt medical intervention.
        </p>
        <div className="px-10 pt-10">
          <img className="w-full" src={girlsAtHill} alt="" />
        </div>
        <p className="text-center text-[#4a4a4a] md:text-[16px] text-[18px] italic">
          Preteen brides Gada and Tahani in their village in the rural areas
          outside Hajjah.
        </p>
        <img className="mx-auto py-5" width={75} src={flower} alt="" />
      </div>
    </div>
  );
};

export default Issue;
