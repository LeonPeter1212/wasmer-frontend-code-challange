import { NextPage } from 'next';
import { Typography, Button } from 'antd';
import CustomHeader from '../components/CustomHeader';
import DottedBox from '../components/DottedBox';
import * as Icon from "react-feather";
import { PrimaryButton, SecondaryButton, TertiaryButton, IconOnlyButton, GithubButton, LinkButton, TextLinkButton } from '../components/Buttons';

const { Title, Text } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <CustomHeader title="Buttons" subtitle="Documentation" />

      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
              <div className="col-span-12 md:col-span-2">
                <span className="text-purple font-semibold text-lg">Regular</span>
              </div>

              <div className="col-span-12 md:col-span-10">
                <div className="grid grid-cols-9 gap-4 px-4">
                  <div className="col-span-12 md:col-span-3 flex justify-center">Default</div>
                  <div className="col-span-12 md:col-span-3 flex justify-center">Hover</div>
                  <div className="col-span-12 md:col-span-3 flex justify-center">Pressed</div>
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Primary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Secondary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Tertiary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="text-purple font-semibold text-lg">Icon only</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <IconOnlyButton size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="text-purple font-semibold text-lg">Product</span>
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Deploy</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="25" />} size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="25" />} size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="25" />} size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="20" />} size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="20" />} size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Edge" icon={<img src="/imgs/edge.png" width="20" />} size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Publish</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="25" />} size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="25" />} size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="25" />} size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="20" />} size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="20" />} size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/register.png" width="20" />} size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-semibold">Run</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="25" />} size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="25" />} size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="25" />} size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="20" />} size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="20" />} size="middle" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/runtime.png" width="20" />} size="middle" className="pressed" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 mt-4"></div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="text-purple font-semibold text-lg">Github</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <GithubButton size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <GithubButton size="large" className="hover" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <GithubButton size="large" className="pressed" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="text-purple font-semibold text-lg">Link</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <LinkButton text="Learn more" size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <LinkButton text="Learn more" size="large" className="hover" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-3">
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <LinkButton text="Learn more" size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <LinkButton text="Learn more" size="middle" className="hover" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-3">
              </div>

              <div className="col-span-12 mt-4">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="text-purple font-semibold text-lg">Text link</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Desktop</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TextLinkButton text="Learn more" size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TextLinkButton text="Learn more" size="large" className="hover" />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-3">
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Mobile</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TextLinkButton text="Learn more" size="middle" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TextLinkButton text="Learn more" size="middle" className="hover" />
                    </div>
                  </div>
                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-3">
              </div>

            </div>
          </div>

          {/* Variants */}
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-4">
              <div className="col-span-12 md:col-span-2">
                <span className="text-purple font-semibold text-lg">Variants</span>
              </div>

              <div className="col-span-12 md:col-span-10">
                <div className="grid grid-cols-6 gap-4 px-4">
                  <div className="col-span-12 md:col-span-3 flex justify-center">Default</div>
                  <div className="col-span-12 md:col-span-3 flex justify-center">With icon</div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Primary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="large" iconstat={false} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton size="large" iconstat={false} icon={<Icon.Plus size={16} />} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton iconstat={false} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton iconstat={false} icon={<Icon.Plus size={16} />} />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Secondary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="large" iconstat={false} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton size="large" iconstat={false} icon={<Icon.Plus size={16} />} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton iconstat={false} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <SecondaryButton iconstat={false} icon={<Icon.Plus size={16} />} />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Tertiary</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="large" iconstat={true} icon={<Icon.Play size={16} />} />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <TertiaryButton size="middle" iconstat={true} icon={<Icon.Play size={16} />} />
                    </div>
                  </div>

                </DottedBox>
              </div>

              <div className="col-span-12 md:col-span-2">
                <div className="h-full flex gap-4 flex-col justify-center">
                  <span className="font-sm">Publish</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-10">
                <DottedBox>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/bell.png" width="25" />} size="large" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center">
                      <PrimaryButton text="Registry" icon={<img src="/imgs/bell.png" width="20" />} size="middle" />
                    </div>
                  </div>

                </DottedBox>
              </div>
            </div>
          </div>
        </div>

      </div >

    </>
  );
};

export default Home;
