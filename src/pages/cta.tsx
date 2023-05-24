import { NextPage } from 'next';
import { Typography, Image, Avatar, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import SmallCard from '../components/Card/small'
import { PrimaryButton } from '../components/Buttons';
import { SearchInput } from '../components/Inputs';

const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="CTA" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Large CTA</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="pt-4 md:p-8 bg-black text-white rounded-lg overflow-hidden">
              <Title level={3} className="text-white">Get Started</Title>
              <p>Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge</p>
              <div className="flex justify-end">
                <img src="/imgs/cta.svg" alt="CTA" />
              </div>
            </div>

          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Mid CTA</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="pt-4 md:p-8 bg-black text-white rounded-lg">
              <div className="flex">
                <div className="flex-1 flex items-center">
                  <span className="text-white text-2xl">Truly universal. Runs anywhere. Fast as native, 0ms startup times</span>
                </div>

                <div className="flex justify-end">
                  <img src="/imgs/cta.svg" alt="CTA" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
