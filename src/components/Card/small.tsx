import { Card } from 'antd';
import React, { ReactNode } from 'react';

interface SmallCardProps {
    content?: ReactNode;
    className?: String | null;
}

const SmallCard: React.FC<SmallCardProps> = ({ content = null, className = null }) => {
    return (
        <Card
            title={null}
            className={`card small-card ${className ? className : ''}`}
        >
            {content}
        </Card>
    );
};

export default SmallCard;