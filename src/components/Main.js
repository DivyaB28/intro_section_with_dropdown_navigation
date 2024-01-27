import React from "react";
import imageDesktop from "../assets/images/image-hero-desktop.png";
import imageMobile from "../assets/images/image-hero-mobile.png";
import clientDatabiz from "../assets/images/client-databiz.svg";
import clientAudiophile from "../assets/images/client-audiophile.svg";
import clientMaker from "../assets/images/client-maker.svg";
import clientMeet from "../assets/images/client-meet.svg";
import styles from "../styles/styles";

const Main = () => {
  return (
    <main
      id="main"
      className={`${styles.containersm} mt-[2rem] flex flex-col gap-4 md:flex-row-reverse`}
    >
      <div className="flex-1">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={imageDesktop}
            type="image/png"
          />
          <img
            src={imageMobile}
            alt="image hero mobile"
            aria-hidden="true"
            width={450}
            height={320}
            className="ml-auto block max-md:mx-auto"
          />
        </picture>
      </div>
      <div className="my-[0.4375rem] flex flex-1 flex-col justify-center gap-4 text-center text-normal md:mx-[2.18rem] md:my-[1.56rem] md:text-left lg:my-[6.57rem]">
        <h1 className="text-[1.9rem] font-[700] leading-none tracking-[-0.013em] text-almost-black md:max-w-[10.8ch] md:text-[5rem]">
          Make remote work
        </h1>
        <p className="mt-[2rem] max-w-[43ch] leading-[1.6] tracking-[0.01em] text-medium-grey md:text-normal max-md:mx-auto max-sm:mt-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </p>

        <a
          href="/"
          className="my-[2em] block w-max rounded-2xl border-2 border-almost-black bg-almost-black p-3 px-[1.9rem] py-[1rem] font-[700] text-white hover:bg-transparent hover:text-almost-black max-md:mx-auto max-sm:mt-3"
        >
          Learn more
        </a>
        <div className="md:mt-[3.67rem]">
          <h2 className="sr-only">Customers</h2>
          <ul className="flex items-center gap-[2.567rem] max-md:justify-center max-sm:gap-[1.412rem]">
            <li>
              <a href="/" className="block">
                <img
                  src={clientDatabiz}
                  alt="client databiz"
                  width={113}
                  height={19}
                />
              </a>
            </li>
            <li>
              <a href="/" className="block">
                <img
                  src={clientAudiophile}
                  alt="client audiophile"
                  width={70}
                  height={36}
                />
              </a>
            </li>
            <li>
              <a href="/" className="block">
                <img
                  src={clientMeet}
                  alt="client meet"
                  width={91}
                  height={26}
                />
              </a>
            </li>
            <li>
              <a href="/" className="block">
                <img
                  src={clientMaker}
                  alt="client maker"
                  width={82}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
