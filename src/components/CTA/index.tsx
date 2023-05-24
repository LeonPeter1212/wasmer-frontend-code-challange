import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface LargeCTAProps {
    title?: string;
    subtitle?: string;
}

export const LargeCTA: React.FC<LargeCTAProps> = ({ title = "Get Started", subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec eros ultricies fermentum. Sed nec nibh nec eros ultricies fermentum. Sed nec nibh nec eros ultricies fermentum. Sed nec" }) => {
    return (
        <div className="pt-4 md:p-8 bg-black text-white rounded-lg">
            <Title level={3} className="text-white">{title}</Title>
            <p>{subtitle}</p>
            <div className="flex justify-end">
                <img src="/imgs/cta.svg" alt="CTA" />
            </div>
        </div>
    );
};

interface MidCTAProps {
    title?: string;
    subtitle?: string | null;
}

export const MidCTA: React.FC<MidCTAProps> = ({ title = "Truly universal. Runs anywhere. Fast as native, 0ms startup times", subtitle = null }) => {
    return (
        <div className="pt-4 md:p-8 bg-black text-white rounded-lg">
            <div className="flex">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <span className="text-white text-2xl mb-2">{title}</span>
                    {subtitle ? <a className='text-white font-normal text-sm'>See more info about Runtime</a> : null}
                </div>
                <div className="flex justify-end">
                    <img src="/imgs/cta.svg" alt="CTA" />
                </div>
            </div>
        </div>
    );
};
