import { NextPage } from 'next';
import { Typography, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import LargeCard from '../components/Card/large'
import SmallCard from '../components/Card/small'
import DottedBox from '../components/DottedBox';

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="Cards" subtitle="Documentation" />

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
              <span className="font-sm">greater than 1152px</span>
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
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">WCGI</span>
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<img src='/imgs/wasm.svg' width={28} />}
                      content={
                        <div className="card-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">WCGI</span>
                            <Icon.ArrowUpRight size={18} className="font-semibold bg-transparent" />
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<img src='/imgs/wasm.svg' width={28} />}
                      content={
                        <div className="card-content">
                          <p className="text-gray-500">
                            WebAssembly and CGI, a match made in heaven. It allows running PHP and other CGI technologies in Wasmer
                          </p>
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
              <span className="font-sm">less than 768px</span>
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
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">WCGI</span>
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<img src='/imgs/wasm.svg' width={28} />}
                      content={
                        <div className="card-content">
                          <p className="text-gray-500">
                            SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <LargeCard
                      title={
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold">WCGI</span>
                            <Icon.ArrowUpRight size={18} className="font-semibold bg-transparent" />
                          </div>
                        </div>
                      }
                      extra={true}
                      extraHTML={<img src='/imgs/wasm.svg' width={28} />}
                      content={
                        <div className="card-content">
                          <p className="text-gray-500">
                            WebAssembly and CGI, a match made in heaven. It allows running PHP and other CGI technologies in Wasmer
                          </p>
                        </div>
                      }
                    />
                  </div>
                </div>
              </DottedBox>
            </div>
          </div>

          <div className="col-span-12">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="text-purple font-semibold">SDK’S</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="h-full flex gap-2 flex-col justify-center">
              <span className="font-semibold">Desktop</span>
              <span className="font-sm">greather than 1152px</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div style={{ maxWidth: '1152px' }}>
              <DottedBox>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4">
                    <SmallCard
                      content={
                        <div className='card-content'>
                          <div className="block md:flex items-center gap-4">
                            <div className="flex-1 flex items-center gap-4">
                              <img src='/imgs/python.svg' width={50} />
                              <div className="grid grid-cols-12 gap-0">
                                <div className="col-span-12">
                                  <p className='font-semibold text-lg mb-2'>Python</p>
                                </div>
                                <div className="col-span-12">
                                  <p className='text-sm flex items-center justify-start m-0 gap-2'>
                                    <span className="font-semibold">WCGI</span>
                                    <img src='/imgs/link.png' />
                                  </p>

                                </div>
                              </div>
                            </div>
                            <div className="divider-section">
                              <Divider type="vertical" />
                            </div>

                            <div className="flex items-center flex-nowrap gap-4">
                              <button>
                                <img src='/imgs/github.svg' width={28} className='opacity-50 hover:opacity-100' />
                              </button>
                              <button>
                                <img src='/imgs/book.svg' width={28} className='opacity-50 hover:opacity-100' />
                              </button>
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
              <span className="font-sm">less than 768px</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div style={{ maxWidth: '768px' }}>
              <DottedBox>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4">
                    <SmallCard
                      content={
                        <div className='card-content'>
                          <div className="block md:flex items-center gap-4">
                            <div className="flex-1 flex items-center gap-4">
                              <img src='/imgs/python.svg' width={50} />

                              <div className="flex-1">
                                <div className="grid grid-cols-12 gap-0">
                                  <div className="col-span-12">
                                    <p className='font-semibold text-lg mb-2'>Python</p>
                                  </div>
                                  <div className="col-span-12">
                                    <p className='text-sm flex items-center justify-start m-0 gap-2'>
                                      <span className="font-semibold">WCGI</span>
                                      <img src='/imgs/link.png' />
                                    </p>

                                  </div>
                                </div>
                              </div>

                            </div>
                            <div className="divider-section">
                              <Divider type="vertical" />
                            </div>

                            <div className="flex md:flex-col items-center flex-nowrap gap-4">
                              <button>
                                <img src='/imgs/github.svg' width={28} className='opacity-50 hover:opacity-100' />
                              </button>
                              <button>
                                <img src='/imgs/book.svg' width={28} className='opacity-50 hover:opacity-100' />
                              </button>
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
        </div>
      </div>

    </>
  );
};

export default Home;
