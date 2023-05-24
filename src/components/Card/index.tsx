import React from 'react'
import LargeCard from '../Card/large'
import { Divider } from "antd";
import * as Icon from 'react-feather';

export const CustomCard = () => {
    return (
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
                <div className="card-content">
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
    )
}
