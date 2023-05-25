import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mx-auto w-full container p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="#" className="flex items-center">
                            <img src="/imgs/logo.svg" className="h-8 mr-3" alt="Wasmer Logo" />
                        </Link>

                        <p className="text-gray-500 my-4">Making software universally accessible</p>

                        <div className="flex items-center gap-4">
                            <Link href="#">
                                <img src="/imgs/twitter.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </Link>
                            <Link href="#">
                                <img src="/imgs/slack.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </Link>
                            <Link href="#">
                                <img src="/imgs/githublight.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </Link>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Explore</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <Link href="#" className="hover:underline">Packages</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <Link href="#" className="hover:underline ">Run</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Publish</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Deploy</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Developers</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <Link href="/documentation" className="hover:underline">Documentation</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Runtime</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Registry</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Deploy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center gap-4">
                    <Link href="#" className="hover:underline text-gray-500">Imprint</Link>
                    <Link href="#" className="hover:underline text-gray-500">Privacy</Link>
                    <Link href="#" className="hover:underline text-gray-500">Terms</Link>
                </div>
            </div>
        </footer>
  )
}

export default Footer