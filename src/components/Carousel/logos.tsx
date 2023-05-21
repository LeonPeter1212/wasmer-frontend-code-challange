import React from 'react';

const Carousel: React.FC = () => {
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

    return (
        <>
            <div className="flex flex-nowrap gap-4 overflow-x-scroll">
                {imgs.map((img, index) => (
                    <img
                        width={100}
                        src={img}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};

export default Carousel;
