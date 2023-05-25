import { NextPage } from 'next';
import { Typography, Image, Avatar, Divider } from 'antd';
import CustomHeader from '../components/CustomHeader';
import * as Icon from "react-feather";
import LargeCard from '../components/Card/large'
import SmallCard from '../components/Card/small'
import { HeroSlider } from '../components/Slider'
import { LargeCTA, MidCTA } from '../components/CTA';
import Slider from '../components/Carousel/slick';
import { Header } from '../components/Menu';
import { PrimaryButton } from '../components/Buttons';
import HomeSlider from "../components/Carousel/home";
import Footer from "../components/Footer";
// import Link from 'next/link';
import Head from 'next/head';

const logos = [
  "/imgs/logos/white/logo1.svg",
  "/imgs/logos/white/logo2.svg",
  "/imgs/logos/white/logo3.svg",
  "/imgs/logos/white/logo4.svg",
  "/imgs/logos/white/logo5.svg",
]

const { Title, Link } = Typography;

const Documentation: NextPage = () => {

  return (
    <>
      <Head>
        <title>Wasmer | Frontend Challange | Documentation.</title>
      </Head>

      <Header />

      <div className="container">
        <div className='styleguide'>
          <Title className="text-2xl font-bold mb-6">Style Guide</Title>
          <Divider />

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Fonts</h2>
            <p>The font family used throughout the styles is Gilroy, with a fallback to sans-serif.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Colors</h2>
            <p>The background color of the HTML body is a linear gradient from a light blueish-gray (<span className="text-blue-400">#EFF1F6</span>) to a lighter shade (<span className="text-blue-200">#F9FAFD</span>).</p>
            <p>The text color is a grayish-blue (<span className="text-gray-600">#6b7280</span>).</p>
            <p>Various elements have specific colors defined, such as <span className="text-purple-600">#605DE9</span> for borders and text, and <span className="text-indigo-900">#0F0518</span> for background and buttons.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Layout and Spacing</h2>
            <p>Padding and margin of the HTML body are set to 0.</p>
            <p>The page has a width of 100vw and a hidden horizontal overflow.</p>
            <p>Margin-bottom of paragraphs is set to 1rem.</p>
            <p>The <code>container</code> class sets horizontal padding and vertical padding for medium-sized screens, with a maximum width of 1360px.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Buttons</h2>
            <p>Buttons have the Gilroy font, a semi-bold weight, and various custom styles such as primary, secondary, and tertiary.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Cards</h2>
            <p>Cards have a white background color with a border color of <span className="text-indigo-900">#0F051833</span> and a box shadow.</p>
            <p>The active card has a 2px solid border of <span className="text-indigo-900">#0F0518</span>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Forms and Inputs</h2>
            <p>The <code>ant-form-item-explain</code> and <code>ant-form-item-extra</code> classes have specific styles.</p>
            <p>The <code>ant-input</code> class has a custom background color and border color.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Typography</h2>
            <p>Headings have a margin-bottom of 1rem, except for <code>h1</code> elements within the <code>.title-body</code> class.</p>
            <p>The <code>ant-typography.mb-0</code> class has a margin-bottom of 0.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Lists</h2>
            <p>Unordered lists have a disc list style, and ordered lists have a decimal list style.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Code Blocks</h2>
            <p>Code blocks have a black background color, white text color, padding, and border radius.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Navigation</h2>
            <p>The secondary navigation links have specific styles for active and hover states.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Effects</h2>
            <p>The <code>blur-effect</code> class creates a blur effect on hover using a linear gradient background.</p>
            <p>The <code>box-blur</code> classes create a blur effect with different background colors and positioning.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Miscellaneous</h2>
            <p>The <code>animated-logos</code> class applies opacity to images on hover.</p>
            <p>The <code>heroslider</code> class sets a minimum height, background image, and z-index for hero sections.</p>
            <p>The <code>bg-wasmer-dark</code> class defines a dark background color with specific styles for <code>ant-select</code> components.</p>
            <p>The <code>installsec</code> class sets a background image for installation sections.</p>
            <p>The <code>cta</code> class defines the line-height for call-to-action sections.</p>
            <p>The <code>footer</code> class sets styles for the footer section, including list item spacing and link colors.</p>
          </section>

        </div>

        <div id='components' className="my-16">
          <Title className="text-2xl font-bold mb-6">Components</Title>
          <Divider />

          <ul>
            <li>
              <Link href="/buttons">Buttons</Link>
            </li>
            <li>
              <Link href="/cards">Cards</Link>
            </li>
            <li>
              <Link href="/codebox">Codebox</Link>
            </li>
            <li>
              <Link href="/cta">CTA</Link>
            </li>
            <li>
              <Link href="/dropdown">Dropdown</Link>
            </li>
            <li>
              <Link href="/header">Header</Link>
            </li>
            <li>
              <Link href="/package">Package</Link>
            </li>
            <li>
              <Link href="/richtext">Richtext</Link>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Documentation;