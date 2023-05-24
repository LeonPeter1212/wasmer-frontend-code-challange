import { NextPage } from 'next';
import { Typography, Image, Avatar, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import { EditorTabsetComponentWithOpts, EditorTabsetComponent } from '../components/CodeEditor';

const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="Code box carousel" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Preview</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="bg-white border border-gray-300 rounded-lg">
                  <EditorTabsetComponent title={null} extra={false} />

                  <div className="p-4 md:p-8">
                    <div className="flex items-center gap-4 flex-nowe">
                      <div className="flex-item flex-1 flex items-center gap-2">
                        <img src="/imgs/code-light.png" className="block"
                          width={`50px`}
                        />
                        <span className='text-gray-900 flex-1 font-semibold'>Embed packages of all languages. <span className="text-gray-500">Feature the might of all languages in your app.</span></span>
                      </div>

                      <div className="flex-item">
                        <Divider type="vertical" />
                      </div>

                      <div className="flex-item flex flex-nowrap items-center gap-2">
                        <img 
                        src="/imgs/terminal.png" 
                        // className="block" 
                        width={`50px`}
                        />
                        <span className="text-gray-900">...or run</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8">
                <div className="bg-white border border-gray-300 rounded-lg">
                  <EditorTabsetComponent title={null} extra={false} />

                  <div className="p-4 md:p-8">
                    <div className="flex items-center gap-4 flex-nowe">
                      <div className="flex-item flex-1 flex items-center gap-2">
                        <img src="/imgs/code-light.png" className="block"
                          width={`50px`}
                        />
                        <span className='text-gray-900 flex-1 font-semibold'>Embed packages of all languages. <span className="text-gray-500">Feature the might of all languages in your app.</span></span>
                      </div>

                      <div className="flex-item">
                        <Divider type="vertical" />
                      </div>

                      <div className="flex-item flex flex-nowrap items-center gap-2">
                        <img 
                        src="/imgs/terminal.png" 
                        // className="block" 
                        width={`50px`}
                        />
                        <span className="text-gray-900">...or run</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4"></div>
              <div className="col-span-12 md:col-span-6">
                <div className="bg-white border border-gray-300 rounded-lg">
                  <EditorTabsetComponent title={null} extra={false} />

                  <div className="p-4 md:p-8">
                    <div className="flex items-center gap-4">
                      <img src="/imgs/code-light.png" className="block"
                        width={`50px`}
                      />

                        <img
                        src="/imgs/terminal.png"
                        // className="block" 
                        width={`50px`}
                      />
                    </div>
                    <div className="flex items-center gap-4 flex-nowrap mt-4">
                        <span className='text-gray-900 flex-1 font-semibold'>Embed packages of all languages. <span className="text-gray-500">Feature the might of all languages in your app.</span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="col-span-12 md:col-span-3"></div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Preview</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="bg-wasmer-dark border border-gray-300 rounded-lg">

                  <EditorTabsetComponentWithOpts title={null} extra={false} />
                </div>
              </div>
            </div>

          </div>
          <div className="col-span-12 md:col-span-5"></div>
        </div>
      </div>

    </>
  );
};

export default Home;
