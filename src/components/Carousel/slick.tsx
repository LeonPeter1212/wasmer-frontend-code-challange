import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimate, stagger, usePresence, AnimatePresence } from "framer-motion";

const imgs: string[] = [
    "/imgs/logos/logo1.svg",
    "/imgs/logos/logo2.svg",
    "/imgs/logos/logo3.svg",
    "/imgs/logos/logo4.svg",
    "/imgs/logos/logo5.svg",
    "/imgs/logos/logo6.svg",
    "/imgs/logos/logo7.svg",
    "/imgs/logos/logo8.svg",
    "/imgs/logos/logo9.svg",
    "/imgs/logos/logo10.svg",
    "/imgs/logos/logo11.svg",
    "/imgs/logos/logo12.svg",
    "/imgs/logos/logo13.svg",
    "/imgs/logos/logo14.svg",
    "/imgs/logos/logo15.svg",
    "/imgs/logos/logo16.svg",
    "/imgs/logos/logo17.svg",
    "/imgs/logos/logo18.svg",
    "/imgs/logos/logo19.svg",
    "/imgs/logos/logo20.svg",
    "/imgs/logos/logo21.svg",
    "/imgs/logos/logo22.svg",
    "/imgs/logos/logo23.svg",
    "/imgs/logos/logo24.svg",
    "/imgs/logos/logo25.svg",
    "/imgs/logos/logo26.svg",
];

const LogoSlider = ({ rtl = false, initialSlide = 0, speed = 1500 }) => {
    const [scope, animate] = useAnimate()
    const [isPresent] = usePresence()

    const settings = {
        dots: false,
        infinite: true,
        speed,
        slidesToShow: 25, // Number of items to display at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Speed at which the slider moves
        pauseOnHover: true,
        rtl,
        initialSlide,
    };


    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    "img",
                    { opacity: [0, 1] },
                    { duration: .2, delay: stagger() }
                )
            }
            enterAnimation()

        }
    }, [isPresent])

    return (
        <AnimatePresence>
            {isPresent && (
                <div ref={scope}>
                    <Slider {...settings}>
                        {imgs.map((img, index) => (
                            <motion.div key={index} className="animated-logos">
                                <motion.img
                                    src={img}
                                    alt="Logo"
                                    className="mx-auto"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LogoSlider;
