import { NextPage } from 'next';
import { Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import DottedBox from '../components/DottedBox';
import LargeCard from '../components/Card/large'
import SmallCard from '../components/Card/small'
import Carousel from '../components/Carousel/logos'
import * as Icon from "react-feather";

const Home: NextPage = () => {
  return (
    <>
      <CustomHeader title="Package" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Large Card</span>
          </div>
          <div className="col-span-12 md:col-span-5">Default</div>
          <div className="col-span-12 md:col-span-5">Hover</div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="font-semibold">Desktop</span>
              <span className="font-sm">1152px</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div style={{ maxWidth: '1152px' }}>
              <DottedBox>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <img src="/imgs/mozila.svg" alt="icon" />

                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">mozilla</span>
                            <span className="text-gray-500">/</span>
                            <span className="font-semibold">spidermonkey</span>
                          </div>
                        </div>
                      }
                      extra={false}
                      content={
                        <div className="largecard-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>

                          <div className="flex items-center gap-4 text-gray-500 mt-4 lg:mt-6">
                            <Icon.BookOpen size="16" />

                            <Divider type="vertical" className="border-black" />

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Heart size="16" />
                              <span>524</span>
                            </div>

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Download size="16" />
                              <span>524</span>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <img src="/imgs/mozila.svg" alt="icon" />

                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">mozilla</span>
                            <span className="text-gray-500">/</span>
                            <span className="font-semibold">spidermonkey</span>
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<Icon.ArrowUpRight size={18} className="font-semibold bg-transparent" />}
                      content={
                        <div className="largecard-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>

                          <div className="flex items-center gap-4 text-gray-500 mt-4 lg:mt-6">
                            <Icon.BookOpen size="16" />

                            <Divider type="vertical" className="border-black" />

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Heart size="16" />
                              <span>524</span>
                            </div>

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Download size="16" />
                              <span>524</span>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </DottedBox>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="font-semibold">Mobile</span>
              <span className="font-sm">768px</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div style={{ maxWidth: '768px' }}>
              <DottedBox>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <img src="/imgs/mozila.svg" alt="icon" />

                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">mozilla</span>
                            <span className="text-gray-500">/</span>
                            <span className="font-semibold">spidermonkey</span>
                          </div>
                        </div>
                      }
                      extra={false}
                      content={
                        <div className="largecard-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>

                          <div className="flex items-center gap-4 text-gray-500 mt-4 lg:mt-6">
                            <Icon.BookOpen size="16" />

                            <Divider type="vertical" className="border-black" />

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Heart size="16" />
                              <span>524</span>
                            </div>

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Download size="16" />
                              <span>524</span>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <img src="/imgs/mozila.svg" alt="icon" />

                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">mozilla</span>
                            <span className="text-gray-500">/</span>
                            <span className="font-semibold">spidermonkey</span>
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<Icon.ArrowUpRight size={18} className="font-semibold bg-transparent" />}
                      content={
                        <div className="largecard-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>

                          <div className="flex items-center gap-4 text-gray-500 mt-4 lg:mt-6">
                            <Icon.BookOpen size="16" />

                            <Divider type="vertical" className="border-black" />

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Heart size="16" />
                              <span>524</span>
                            </div>

                            <div className="likes flex flex-row gap-2 justify-center items-center">
                              <Icon.Download size="16" />
                              <span>524</span>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </DottedBox>
            </div>
          </div>


          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Small card</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-9 gap-4 px-4">
              <div className="col-span-12 md:col-span-3">Default</div>
              <div className="col-span-12 md:col-span-3">Hover</div>
              <div className="col-span-12 md:col-span-3">Active</div>

            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
          </div>

          <div className="col-span-12 md:col-span-10">
            <DottedBox>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-4">
                  <SmallCard
                    content={
                      <div className="largecard-content">
                        <div className="flex gap-4 items-center">
                          <img src="/imgs/python-logo.png" alt="python logo" width="50px" />
                          <span className="font-semibold text-lg">Python</span>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <SmallCard
                    content={
                      <div className="largecard-content">
                        <div className="flex gap-4 items-center">
                          <img src="/imgs/python-logo.png" alt="python logo" width="50px" />
                          <span className="font-semibold text-lg">Python</span>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <SmallCard
                    className="active-card"
                    content={
                      <div className="largecard-content">
                        <div className="flex gap-4 items-center">
                          <img src="/imgs/python-logo.png" alt="python logo" width="50px" />
                          <span className="font-semibold text-lg">Python</span>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </DottedBox>
          </div>

        </div>
      </div >

      <CustomHeader title="Child components" icon={false} level={2} />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="text-purple font-semibold">Package logo</span>
              <span className="font-sm">Package</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <DottedBox>
              <Carousel />
            </DottedBox>
          </div>

          <div className="col-span-12">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="text-purple font-semibold">Package profile</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="font-sm">With stroke</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-1 flex justify-center items-center">
            <DottedBox>
              <div className="withstroke">
                <img src="/imgs/mozila.svg" alt="With stroke" />
              </div>
            </DottedBox>
          </div>
          <div className="col-span-12 md:col-span-9 flex justify-center items-center"></div>

          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="font-sm">Without stroke</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-1 flex justify-center items-center">
            <DottedBox>
              <img src="/imgs/mozila.svg" alt="With stroke" />
            </DottedBox>
          </div>
          <div className="col-span-12 md:col-span-9 flex justify-center items-center"></div>
        </div>
      </div>

    </>
  );
};

export default Home;
