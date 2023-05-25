import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Typography, Spin } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import LargeCard from '../components/Card/large'
import SmallCard from '../components/Card/small'
import { HeroSlider } from '../components/Slider'
import { LargeCTA, MidCTA } from '../components/CTA';
import Slider from '../components/Carousel/slick';
import { Header } from '../components/Menu';
import { PrimaryButton } from '../components/Buttons';
import HomeSlider from "../components/Carousel/home";
import Footer from "../components/Footer";
import { motion, useAnimate, stagger, usePresence, AnimatePresence, useInView } from "framer-motion";

const logos = [
  "/imgs/logos/white/logo1.svg",
  "/imgs/logos/white/logo2.svg",
  "/imgs/logos/white/logo3.svg",
  "/imgs/logos/white/logo4.svg",
  "/imgs/logos/white/logo5.svg",
]

const { Title } = Typography;

const Home: NextPage = () => {
  const [scope, animate] = useAnimate()
  const [isPresent] = usePresence()
  // const isInView = useInView(scope)

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          ".box-blur",
          { opacity: [0, 1] },
          { duration: 0.6, delay: stagger() },
         );
      };

      enterAnimation();
    }
  }, [isPresent]);

  if (!isPresent) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <Spin />
      </div>
    )
  
  }

  return (
    <AnimatePresence>
      <div ref={scope}>
        <Header />

        <HeroSlider />

        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 text-center font-semibold text-3xl text-black max-w-3xl mx-auto pt-10">
            <div className='m-0 cta'>
              <span>Create apps that </span>
              <div className="inline-block">
                <PrimaryButton text="Run" icon={<img src="/imgs/register.png" width="25" />} size="middle" />
              </div>

              <span> everywhere. </span>

              <div className="inline-block">
                <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="25" />} size="middle" />
              </div>
              <span> and share with the community and </span>

              <div className="inline-block">
                <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="25" />} size="middle" />
              </div>

              <span> to the edge, globally.</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="z-20 text-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src='/imgs/section.svg' width={`1.4px`} />
              <PrimaryButton text="Runtime" icon={<img src="/imgs/runtime.png" width="25" />} size="middle" />

              <Title className='mt-4 text-48'>Run the world</Title>
              <p className='font-22 max-w-screen-md mx-auto'>Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</p>
            </div>
          </div>

          <div className="box-blur box-blur1 max-w-4xl m-auto text-center">
            <div className="flex items-center justify-center gap-4 mt-8 mb-4">
              {logos.map((logo, index) => (
                <img src={logo} key={index} />
              ))}
            </div>

            <p className="text-white">Supports almost every programming language</p>

            <MidCTA
              title="Truly universal, runs everywhere & fast as native"
              subtitle="See more info about Runtime"
            />
          </div>

          <div className="mt-16 text-center">
            <p className="font-22 max-w-screen-md mx-auto">“This programming tool makes it easier for apps to work anywhere”</p>

            <img src="/imgs/vercel.svg" className='mx-auto opacity-50' />
          </div>
        </div>

        <div className="">
          <div className="container z-20 text-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src='/imgs/section.svg' width={`1.4px`} />
              <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="25" />} size="middle" />

              <Title className='mt-4 text-48'>Better together</Title>
              <p className="font-22 max-w-screen-md mx-auto">Packages are limited by their languages no more. Collaborate across stacks, leverage all and contribute your own.</p>
            </div>
          </div>

          <div className="box-blur box-blur2">
            <div className="mb-8">
              <HomeSlider speed={2000} />
            </div>

            <div className="max-w-4xl m-auto text-center px-4">
              <MidCTA
                title="All languages, fully containerized & collaborative"
                subtitle="See more info about Runtime"
              />

            </div>
          </div>

          <div className="container mt-16 text-center">
            <p className="font-22 max-w-screen-md mx-auto">“This programming tool makes it easier for apps to work anywhere”</p>

            <img src="/imgs/vercel.svg" className='mx-auto opacity-50' />
          </div>
        </div>

        <div className="container">
          <div className="z-20 text-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src='/imgs/section.svg' width={`1.4px`} />
              <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="25" />} size="middle" />

              <Title className='mt-4 text-48'>Above the clouds</Title>
              <p className="font-22 max-w-screen-md mx-auto">Get the scalability of serverless and the reusability of cloud. Deploy to the edge, save your users time and yourself money. </p>
            </div>
          </div>

          <img src='/imgs/cloudimg.svg' className='mx-auto' />

          <div className="box-blur box-blur3 max-w-4xl m-auto text-center">

            <div className="flex items-center justify-center gap-4 mt-8 mb-4">

              <div className="flex items-center gap-4 justify-content">
                <img src="/imgs/tone.svg" />
                <div className="text-white flex-1">Infinite scalability</div>
              </div>
              <div className="flex items-center gap-4 justify-content">
                <img src="/imgs/fire.svg" />
                <div className="text-white flex-1">Instant cold starts</div>
              </div>

            </div>

            <MidCTA
              title="Faster, cheaper & indefinitely scalable"
            />
          </div>

          <div className="mt-16 text-center">
            <p className="font-22 max-w-screen-md mx-auto">“This programming tool makes it easier for apps to work anywhere”</p>

            <img src="/imgs/vercel.svg" className='mx-auto opacity-50' />
          </div>
        </div>

        <div className="container">
          <div className=" py-10 text-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className='mt-4 font-22 font-semibold text-black'>We are trusted by the best</p>
              <p className="font-22 max-w-screen-md mx-auto">“This programming tool makes it easier for apps to work anywhere”</p>

              <img src="/imgs/vercel.svg" className='mx-auto opacity-50' />
            </div>
          </div>

          <div className="max-w-4xl m-auto text-left pt-12 pb-20">
            <div className="blur-effect z-10">
              <LargeCTA
                title="Get started"
                subtitle='Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge'
              />

            </div>
          </div>
        </div>

        <Footer />

      </div>
    </AnimatePresence>
  );
};

export default Home;
