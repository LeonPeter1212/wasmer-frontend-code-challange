import { NextPage } from 'next';
import { Typography, Image, Avatar, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import { Flyout, FlyoutMobile, Header } from '../components/Menu'
import { PrimaryButton } from '../components/Buttons';
import { SearchInput } from '../components/Inputs';

const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="Header" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-black font-semibold">Desktop (Not logged in)</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <Header />
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-black font-semibold">Desktop (Logged in)</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <Header loggedIn={true} />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
