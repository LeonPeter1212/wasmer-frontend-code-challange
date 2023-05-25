import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimate, stagger, usePresence, AnimatePresence } from "framer-motion";
import { CustomCard } from "../Card";

const LogoSlider = ({ rtl = false, initialSlide = 0, speed = 1500 }) => {
    const [scope, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of items to display at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Speed at which the slider moves
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1152, // Adjust the breakpoint value based on your needs
                settings: {
                    slidesToShow: 2, // Number of items to show on screens with width <= 1024px
                }
            },
            {
                breakpoint: 600, // Adjust the breakpoint value based on your needs
                settings: {
                    slidesToShow: 1, // Number of items to show on screens with width <= 768px
                }
            }
        ]
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
