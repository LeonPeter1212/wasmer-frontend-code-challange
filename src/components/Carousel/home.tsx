import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimate, stagger, usePresence, AnimatePresence } from "framer-motion";
import { CustomCard } from "../Card";

const LogoSlider = ({ rtl = false, initialSlide = 0, speed = 1500 }) => {
    const [scope, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();

    const settings = {
        dots: false,
        infinite: true,
        speed,
        slidesToShow: 3, // Number of items to display at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500, // Speed at which the slider moves
        pauseOnHover: true,
        rtl,
        initialSlide,
    };

    useEffect(() => {
        const enterAnimation = async () => {
            await animate("img", { opacity: [0, 1] }, { duration: 0.2, delay: stagger() });
        };

        if (isPresent) {
            enterAnimation();
        } else {
            safeToRemove();
        }
    }, [isPresent, animate, safeToRemove]);

    return (
        <AnimatePresence>
            {isPresent && (
                <div ref={scope}>
                    <Slider {...settings}>
                        <div className="px-4">
                            <CustomCard />
                        </div>
                        <div className="px-4">
                            <CustomCard />
                        </div>
                        <div className="px-4">
                            <CustomCard />
                        </div>
                        <div className="px-4">
                            <CustomCard />
                        </div>
                        <div className="px-4">
                            <CustomCard />
                        </div>
                    </Slider>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LogoSlider;
