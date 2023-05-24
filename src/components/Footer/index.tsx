import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mx-auto w-full container p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src="/imgs/logo.svg" className="h-8 mr-3" alt="Wasmer Logo" />
                        </a>

                        <p className="text-gray-500 my-4">Making software universally accessible</p>

                        <div className="flex items-center gap-4">
                            <a href="#">
                                <img src="/imgs/twitter.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src="/imgs/slack.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src="/imgs/githublight.svg" className="h-5 opacity-50 hover:opacity-100" alt="Twitter" />
                            </a>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Explore</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <a href="#" className="hover:underline">Packages</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <a href="#" className="hover:underline ">Run</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Publish</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Deploy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Developers</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium list-none">
                                <li>
                                    <a href="#" className="hover:underline">Documentation</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Runtime</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Registry</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Deploy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center gap-4">
                    <a href="#" className="hover:underline text-gray-500">Imprint</a>
                    <a href="#" className="hover:underline text-gray-500">Privacy</a>
                    <a href="#" className="hover:underline text-gray-500">Terms</a>
                </div>
            </div>
        </footer>
  )
}

export default Footer