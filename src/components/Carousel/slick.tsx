import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimate, stagger, usePresence, AnimatePresence } from "framer-motion";
import { Typography } from 'antd';

const { Text } = Typography;

interface Logo {
    label: string | null;
    value: string;
}

interface LogoSliderProps {
    rtl?: boolean;
    initialSlide?: number;
    speed?: number;
    labeled?: boolean;
    slidesToShow?: number;
}

const imgs: Logo[] = [
    {
        label: "SpiderMonkey",
        value: "/imgs/logos/logo1.svg"
    },
    {
        label: "Ruby",
        value: "/imgs/logos/logo2.svg"
    },
    {
        label: "sqlite",
        value: "/imgs/logos/logo3.svg"
    },
    {
        label: "wordpress",
        value: "/imgs/logos/logo4.svg"
    },
    {
        label: "python",
        value: "/imgs/logos/logo5.svg"
    },
    {
        label: "bash",
        value: "/imgs/logos/logo6.svg"
    },
    // {
    //     label: null,
    //     value: "/imgs/logos/logo7.svg"
    // },
    // {
    //     label: null,
    //     value: "/imgs/logos/logo8.svg"
    // },
    // {
    //     label: null,
    //     value: "/imgs/logos/logo9.svg"
    // },
    // {
    //     label: null,
    //     value: "/imgs/logos/logo10.svg"
    // },
    {
        label: "namespace",
        value: "/imgs/logos/logo11.svg"
    },
    {
        label: "Tantivy",
        value: "/imgs/logos/logo12.svg"
    },
    {
        label: "Javascript",
        value: "/imgs/logos/logo13.svg"
    },
    {
        label: "PHP",
        value: "/imgs/logos/logo14.svg"
    },
    {
        label: "Lua",
        value: "/imgs/logos/logo15.svg"
    },
    {
        label: "Go",
        value: "/imgs/logos/logo16.svg"
    },
    {
        label: "Docker",
        value: "/imgs/logos/logo17.svg"
    },
    {
        label: "Safari",
        value: "/imgs/logos/logo18.svg"
    },
    {
        label: "Chrome",
        value: "/imgs/logos/logo19.svg"
    },
    {
        label: "Rust",
        value: "/imgs/logos/logo20.svg"
    },
    {
        label: "Arc",
        value: "/imgs/logos/logo21.svg"
    },
    {
        label: "Opera",
        value: "/imgs/logos/logo22.svg"
    },
    {
        label: "C++",
        value: "/imgs/logos/logo23.svg"
    },
    {
        label: "Android",
        value: "/imgs/logos/logo24.svg"
    },
    {
        label: "C",
        value: "/imgs/logos/logo25.svg"
    },
    {
        label: "WASI",
        value: "/imgs/logos/logo26.svg"
    },
];

const LogoSlider: React.FC<LogoSliderProps> = ({ rtl = false, initialSlide = 0, speed = 1500, labeled = false, slidesToShow = 5 }) => {
    const [scope, animate] = useAnimate();
    const [isPresent] = usePresence();

    const settings = {
        dots: false,
        infinite: true,
        speed,
        slidesToShow, // Number of items to display at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Speed at which the slider moves
        pauseOnHover: false,
        rtl,
        initialSlide,
    };

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    "img",
                    { opacity: [0, 1] },
                    { duration: 0.2, delay: stagger() }
                );
            };
            enterAnimation();
        }
    }, [isPresent]);

    return (
        <AnimatePresence>
            {isPresent && (
                <div ref={scope}>
                    <Slider {...settings}>
                        {imgs.map((img, index) => (
                            <motion.div key={index} className="animated-logos h-full w-full my-2">
                                <div className={`shadow rounded-lg flex items-center ${labeled ? `justify-start` : `justify-center`} flex-nowrap gap-0 mx-0 h-full overflow-hidden`}>
                                    <motion.img
                                        src={img.value}
                                        alt="Logo"
                                        width={`50px`}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    {!labeled ? null : (
                                        <motion.div className='flex-1'>
                                            <Text
                                                className="text-center text-black text-sm m-0 break-keep pr-2"
                                            >
                                                {img.label}
                                            </Text>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LogoSlider;
