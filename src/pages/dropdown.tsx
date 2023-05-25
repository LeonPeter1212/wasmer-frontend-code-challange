import { NextPage } from 'next';
import { Typography } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import Link from 'next/link';

const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="Dropdown menu" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Preview</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-500 items-center" id="menu-button" aria-expanded="false" aria-haspopup="false">
                  Options
                  <Icon.ChevronDown size={14} />
                </button>
              </div>
            </div>


          </div>
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Preview</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-500 items-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Options
                  <Icon.ChevronUp size={14} />
                </button>
              </div>

              {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
  --> */}
              <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</Link>
                  <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</Link>
                  <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</Link>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
                  </form>
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
