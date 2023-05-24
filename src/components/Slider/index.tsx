import { NextPage } from 'next';
import { Typography } from 'antd';
import { EditorTabsetComponentWithOpts } from '../CodeEditor';
import Slider from '../Carousel/slick';
import { Header } from '../Menu';
import { GithubButton } from '../Buttons';

const { Title } = Typography;

export const HeroSlider: NextPage = () => {

    return (
        <div className="heroslider">

            <div className="herocontent max-w-xl mx-auto flex flex-col items-stretch justify-center gap-4 relative px-4 py-12">
                <Title className='font-semibold text-4xl md:text-3xl text-center'>Run, Publish & Deploy <br />any code – anywhere</Title>

                <div className="blur-effect">
                    <EditorTabsetComponentWithOpts title={null} extra={false} />
                </div>

                <div className='text-center flex justify-center items-center gap-2 flex-col'>
                    <p className='mt-4'>Serve sandboxed WebAssembly apps anywhere through a single runtime and do in days what others do in months.</p>

                    <p className='font-semibold text-lg text-black'>Reach for the stars, we do too.</p>
                    
                    <GithubButton size="large" />
                </div>
            </div>

            <div className="icons-section">
                <Slider rtl={true} speed={3000} />
                <Slider speed={4800} rtl={false} initialSlide={9} />
                <Slider rtl={true} speed={2500} initialSlide={18} />
            </div>

        </div>
    );
};