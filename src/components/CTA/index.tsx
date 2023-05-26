import React from 'react';
import { Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

interface LargeCTAProps {
    title?: React.ReactNode | string;
    subtitle?: React.ReactNode | string;
}

export const LargeCTA: React.FC<LargeCTAProps> = ({ title = "Get Started", subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec eros ultricies fermentum. Sed nec nibh nec eros ultricies fermentum. Sed nec nibh nec eros ultricies fermentum. Sed nec" }) => {
    return (
        <div className="px-8 py-16 bg-black text-white rounded-xl">
            <Title level={3} className="text-white text-left">{title}</Title>
            <p>{subtitle}</p>
            <div className="flex justify-end">
                <img src="/imgs/cta.svg" alt="CTA" />
            </div>
        </div>
    );
};

interface MidCTAProps {
    title?: React.ReactNode | string;
    subtitle?: React.ReactNode | string | null;
}

export const MidCTA: React.FC<MidCTAProps> = ({ title = "Truly universal. Runs anywhere. Fast as native, 0ms startup times", subtitle = null }) => {
    return (
        <div className="p-4 md:p-8 bg-black text-white rounded-xl">
            <div className="flex">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <span className="text-white font-28 font-medium mb-2 text-left">{title}</span>
                    {subtitle ? <Link href="#" className='text-custom-white font-normal text-base'>See more info about Runtime</Link> : null}
                </div>
                <div className="flex justify-end">
                    <img src="/imgs/cta.svg" alt="CTA" />
                </div>
            </div>
        </div>
    );
};
