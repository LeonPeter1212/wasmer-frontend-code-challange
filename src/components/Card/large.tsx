import { Typography, Card } from 'antd';
import React from 'react';

interface LargeCardProps {
    title?: React.ReactNode | String;
    extra?: Boolean;
    content?: React.ReactNode;
    extraHTML?: React.ReactNode | null;
}

const LargeCard: React.FC<LargeCardProps> = ({ title = "Title", extra = true, content = null, extraHTML = null }) => {
    return (
        <Card
            title={title}
            className='card'
            extra={extra ? extraHTML : null}
        >
            {content}
        </Card>
    );
};

export default LargeCard;
