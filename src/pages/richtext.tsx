import { NextPage } from 'next';
import { Typography, Image, Avatar, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import { EditorComponent, TerminalComponent } from '../components/CodeEditor';
import SmallCard from '../components/Card/small'

const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <>
      <CustomHeader title="Rich text" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Preview</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <Title level={2}>Discovering the Power of Wasmer: Revolutionizing Software Development</Title>
          </div>
        </div>
      </div>

      <CustomHeader title="Child components" icon={false} level={2} />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Image</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <SmallCard
              content={<Image
                src="/imgs/image1.jpg"
              />
              }
            />
          </div>
          <div className="col-span-12 md:col-span-5">
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Unordered list</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <ul>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5">
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Ordered list</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <ol>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
              <li>The power of Wasmer relies on delivering one universal API to run</li>
            </ol>
          </div>
          <div className="col-span-12 md:col-span-5">
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Quote</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <SmallCard
              content={
                <>
                  <blockquote className="p-4 my-4">
                    <p className="text-lg leading-relaxed">The power of Wasmer relies on delivering one universal API to run WebAssembly programs anywhere. On that quest, we worked hard to extend Wasmer by adding support for more backends.</p>
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar src="/imgs/avatar.svg" size={64} className="mr-4" />
                    <div className="credentials">
                      <p className="font-semibold">Syrus Akbary</p>
                      <span className='text-gray-500'>CEO</span>
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div className="col-span-12 md:col-span-5">
          </div>


          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Headline</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <Title level={2}>Discovering the Power of Wasmer: Revolutionizing Software Development</Title>
            <Title level={3}>Discovering the Power of Wasmer: Revolutionizing Software Development</Title>
            <Title level={4}>Discovering the Power of Wasmer: Revolutionizing Software Development</Title>
            <Title level={5}>Discovering the Power of Wasmer: Revolutionizing Software Development</Title>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Paragraphs</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus eius corrupti, non ullam repellendus laborum voluptates! Porro explicabo nobis quis vitae earum velit distinctio dolore maiores, dolorum perspiciatis ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus eius corrupti, non ullam repellendus laborum voluptates! Porro explicabo nobis quis vitae earum velit distinctio dolore maiores, dolorum perspiciatis ut.</p>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Inline link</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <a href="#">Inline link</a>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Inline code</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <code>npm install my-package</code>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="text-purple font-semibold">Code box</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <EditorComponent title="wasmer.toml" />
            <Divider />
            <TerminalComponent />
          </div>
          <div className="col-span-12 md:col-span-5">
          </div>

        </div>
      </div>

    </>
  );
};

export default Home;
