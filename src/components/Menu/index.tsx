import * as Icon from "react-feather";
import Link from "next/link";
import { PrimaryButton } from '../Buttons';
import { SearchInput } from '../Inputs';
import { Divider } from "antd";
import { useState } from "react";
import { useRouter } from 'next/router';
interface MenuItem {
    label: string;
    submenu?: JSX.Element | null;
    icon?: JSX.Element | null;
    url?: string | null;
    info?: string | JSX.Element | null;
    href?: string;
}

interface FlyoutProps {
    submenu: MenuItem[] | null;
}

interface FlyoutWithColsProps {
    submenu: {
        col1?: MenuItem[];
        col2?: MenuItem[];
    };
}

interface MenuBottomSectionProps {
    bothsections?: boolean;
    className?: string;
}

interface FlyoutMobileProps {
    hidden: boolean;
    menuItems: MenuItem[];
}

interface HeaderProps {
    loggedIn?: boolean;
}

const productsChildren = [
    {
        label: "Runtime",
        info: "Run any code anywhere",
        icon: <img src="/imgs/runtime.svg" alt="Runtime" />,
        url: "javascript:void(0);"
    },
    {
        label: "Registry",
        info: "Create, publish, collaborate",
        icon: <img src="/imgs/registry.svg" alt="Registry" />,
        url: "javascript:void(0);"
    },
    {
        label: "Stack",
        info: "Deploy above the clouds",
        icon: <img src="/imgs/stack.svg" alt="Stack" />,
        url: "javascript:void(0);"
    },
]

const devsChildren = {
    col1: [
        {
            label: "Get started",
            info: null,
            icon: null,
            url: null
        },
        {
            label: "Runtime",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
        {
            label: "Registry",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
        {
            label: "Edge",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
    ],
    col2: [
        {
            label: "Get started",
            info: null,
            icon: null,
            url: null
        },
        {
            label: "Run a package",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
        {
            label: "Publish a package",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
        {
            label: "Deploy your website",
            info: null,
            icon: null,
            url: "javascript:void(0);"
        },
    ]
}

export const Flyout: React.FC<FlyoutProps> = ({ submenu }) => {
    return (
        <div className="flyout-primary absolute right-0 top-full z-10 mt-0 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
                {submenu?.map((item, index) => {
                    return (
                        <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                            {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                {item.icon}
                            </div> : null}
                            <div className="flex-auto">
                                {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                    <Link href={item.url} className="block font-semibold text-gray-900">
                                        {item.label}
                                        <span className="absolute inset-0"></span>
                                    </Link>
                                }
                                {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const FlyoutSecondary: React.FC<FlyoutProps> = ({ submenu }) => {
    return (
        <div className="p-0">
            {submenu?.map((item, index) => {
                return (
                    <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-0 py-1 text-sm leading-6 hover:bg-gray-50">
                        {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            {item.icon}
                        </div> : null}
                        <div className="flex-auto">
                            {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                <Link href={item.url} className="block font-semibold text-gray-900">
                                    {item.label}
                                    <span className="absolute inset-0"></span>
                                </Link>
                            }
                            {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const MenuBottomSection: React.FC<MenuBottomSectionProps> = ({ bothsections = true, className = "" }) => (
    <>
        <div className={`col-span-12 ${className}`}>
            <Divider className="mb-4 mt-0" />
            <Link href={`#`} className="flex items-center">
                <img src="/imgs/cli.svg" width="20px" className="mr-2" />
                <span className="mr-1 text-black">CLI</span>
            </Link>
            <Divider className="mt-4 mb-0" />
        </div>

        {bothsections ? <div className={`col-span-12 ${className}`}>
            <p className="text-gray-500 mb-1">Tools</p>
            <Link href={`#`} className="text-sm font-semibold">Visual Studio Code Extension</Link>
        </div> : null}
    </>
)

export const FlyoutWithCols: React.FC<FlyoutWithColsProps> = ({ submenu }) => {
    return (
        <div className="flyout-primary absolute right-0 top-full z-10 mt-0 w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                    <Link href={`/documentation`} className="col-span-12 flex items-center px-4">
                        <img src="/imgs/book.svg" width="20px" className="mr-2" />
                        <span className="mr-1">Documentation</span>
                        <img src="/imgs/arrowupright.svg" width="6px" className="mr-2" />
                    </Link>
                    <div className="col-span-12 lg:col-span-4">
                        {submenu?.col1?.map((item, index) => {
                            return (
                                <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                                    {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {item.icon}
                                    </div> : null}
                                    <div className="flex-auto">
                                        {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                            <Link href={item.url} className="block font-semibold text-gray-900">
                                                {item.label}
                                                <span className="absolute inset-0"></span>
                                            </Link>
                                        }
                                        {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        {submenu?.col2?.map((item, index) => {
                            return (
                                <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50">
                                    {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {item.icon}
                                    </div> : null}
                                    <div className="flex-auto">
                                        {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                            <Link href={item.url} className="block font-semibold text-gray-900">
                                                {item.label}
                                                <span className="absolute inset-0"></span>
                                            </Link>
                                        }
                                        {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <MenuBottomSection className="px-4" />
                </div>

            </div>

            <div className="bg-wasmer-dark rounded-lg p-4 m-1">
                <p className="text-gray-500 mb-1">SDK’S</p>

                <div className="flex items-center justify-between font-medium">
                    <Link href="#">Python</Link>
                    <Link href="#">Rust</Link>
                    <Link href="#">Go</Link>
                    <Link href="#">C</Link>
                    <Link href="#">Rust</Link>
                    <Link href="#">Docker</Link>
                </div>
            </div>
        </div>
    )
}

export const FlyoutWithColsSecondary: React.FC<FlyoutWithColsProps> = ({ submenu }) => {
    return (
        <>
            <div className="p-0">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-4">
                        {submenu?.col1?.map((item, index) => {
                            return (
                                <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-0 py-1 text-sm leading-6 hover:bg-gray-50">
                                    {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {item.icon}
                                    </div> : null}
                                    <div className="flex-auto">
                                        {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                            <Link href={item.url} className="block font-semibold text-gray-900">
                                                {item.label}
                                                <span className="absolute inset-0"></span>
                                            </Link>
                                        }
                                        {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        {submenu?.col2?.map((item, index) => {
                            return (
                                <div key={index} className="group relative flex items-center gap-x-6 rounded-lg px-0 py-1 text-sm leading-6 hover:bg-gray-50">
                                    {item.icon ? <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {item.icon}
                                    </div> : null}
                                    <div className="flex-auto">
                                        {item.url == null ? <span className="font-semibold text-gray-500">{item.label}</span> :
                                            <Link href={item.url} className="block font-semibold text-gray-900">
                                                {item.label}
                                                <span className="absolute inset-0"></span>
                                            </Link>
                                        }
                                        {item.info ? <p className="mt-1 text-gray-600">{item.info}</p> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export const FlyoutMobile: React.FC<FlyoutMobileProps> = ({ hidden }) => {
    const router = useRouter();

    const menuItems: MenuItem[] = [
        {
            label: "Products",
            href: "javascript:void(0)",
            submenu: <FlyoutSecondary submenu={productsChildren} />
        },
        {
            label: "Developers",
            href: "javascript:void(0)",
            submenu: <FlyoutWithColsSecondary submenu={devsChildren} />
        },
        {
            label: "Packages",
            href: "javascript:void(0)",
            submenu: null
        },
        {
            label: "Blog",
            href: "javascript:void(0)",
            submenu: null
        },
    ]

    const [selectedMenuItem, setselectedMenuItem] = useState<MenuItem | null>(null)

    const handleMenuItemClick = (item:MenuItem) => {
        setselectedMenuItem(item);

    }

    return (
        <div hidden={hidden} className="flyout-secondary absolute right-0 top-full z-10 mt-0 w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
                <div className="grid grid-cols-12 gap-4 text-left">
                    {selectedMenuItem === null ? (
                        <>
                            <div className="col-span-12 lg:hidden">
                                <SearchInput
                                    nopadding={true}
                                    placeholder="Search packages, users or apps"
                                />
                            </div>

                            {menuItems?.map((item, index) => (
                                <div className="col-span-12" key={index}>
                                    <Link href="#" className="text-sm font-semibold leading-6 relative" onClick={() => {
                                        item.submenu ? handleMenuItemClick(item) : item.href && router.push(item.href)
                                    }}>
                                        {item.label}
                                    </Link>
                                </div>
                            ))}

                            <MenuBottomSection />
                        </>
                    ) : (<div className="col-span-12">
                        <Link href={`javascript:void(0)`} onClick={() => setselectedMenuItem(null)} className="text-sm font-semibold leading-6 flex items-center">
                            <img src="/imgs/chevronleft.svg" width="6px" className="mr-2" />
                            {selectedMenuItem.label}
                        </Link>

                        <Divider className="my-3" />

                        {selectedMenuItem.submenu}
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export const Header: React.FC<HeaderProps> = ({ loggedIn = false }) => {
    const [mobileMenuClicked, setmobileMenuClicked] = useState(true)

    const toggleMenu = () => {
        setmobileMenuClicked(!mobileMenuClicked)
    }

    const menuItems = [
        {
            label: "Products",
            href: "javascript:void(0)",
            submenu: <Flyout submenu={productsChildren} />
        },
        {
            label: "Developers",
            href: "javascript:void(0)",
            submenu: <FlyoutWithCols submenu={devsChildren} />
        },
        {
            label: "Packages",
            href: "javascript:void(0)",
            submenu: null
        },
        {
            label: "Blog",
            href: "javascript:void(0)",
            submenu: null
        },
    ]

    return (
        <header className="header bg-transparent">
            <nav className="container flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="/imgs/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="flex items-center justify-end gap-4 lg:hidden">
                    <PrimaryButton text="Sign up" size={`middle`} iconstat={false} />
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative">
                        <div onClick={toggleMenu}>
                            {mobileMenuClicked ? <Icon.Menu size={20} /> : <Icon.X size={20} />}
                        </div>

                        <FlyoutMobile hidden={mobileMenuClicked} menuItems={menuItems} />
                    </button>

                </div>

                <div className="hidden lg:flex lg:flex-1 gap-2 justify-center px-2">
                    <SearchInput placeholder="Search packages, users or apps" />
                </div>

                <div className="hidden lg:flex lg:flex-1 gap-8 justify-end px-8 menu-items">
                    {menuItems?.map((item, index) => (
                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-500 relative" key={`${index}_${item.label}`}>
                            {item.label}
                            {item.submenu ? item.submenu : null}
                        </Link>
                    ))}
                </div>
                {loggedIn ?
                    <div className="hidden lg:flex lg:justify-end items-center gap-8">
                        <Link href={`#`}>
                        <img src="/imgs/notifications.svg" width="20px" alt="Notifications" />
                        </Link>

                        <Link href={`#`}>
                        <img src="/imgs/avatar2.svg" alt="Avatar" className="rounded-full" width="20px" />
                        </Link>
                    </div> :
                    <div className="hidden lg:flex lg:justify-end items-center gap-8">
                        <PrimaryButton text="Sign up" size={`middle`} iconstat={false} />
                    </div>
                }
            </nav>

            {/* Mobile menu */}
            {/* <FlyoutMobile /> */}
        </header>

    )
}
