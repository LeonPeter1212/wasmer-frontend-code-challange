import React from 'next';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

interface CustomHeaderProps {
  title?: String;
  subtitle?: String;
  icon?: Boolean;
  level?: Number;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title = 'Title', subtitle = null, icon = true, level = 0 }) => {
  return (
    <div className='mx-auto'>
      <Divider className="m-0" />

      <div className="container">
        <div className="components-header flex gap-4 items-center">
          {icon ? <div className="w-16 h-16 bg-gray flex items-center justify-center rounded-full">
            <img src="/imgs/diamond.svg" className="blue" alt="Diamond" />
          </div> : null}

          <div className="title-body">
            <Title level={level} className={subtitle === null ? "mb-0" : "mb-2"}>{title}</Title>
            {subtitle === null ? <Text className="text-purple text-lg font-medium">{subtitle}</Text> : null}
          </div>
        </div>

      </div>

      <Divider className="m-0" />
    </div>
  );
};

export default CustomHeader;
