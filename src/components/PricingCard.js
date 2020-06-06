import React from "react"
import Sweep from "./sweep"

export default props => (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg">
        <div>
            {/*<Sweep/>*/}
        </div>
        <div className="p-10">
            <div>
                <div>
                    <p className="text-gray-700 text-6xl">£55</p>
                </div>
                <div>
                    <p className="text-gray-500 text-base">Per Chimney</p>
                </div>
            </div>
            <div className="py-10 grid grid-cols-2 gap-1">
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Up to 7 stories (27 meters)</p>
                </div>
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Compliance survey</p>
                </div>
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Advice</p>
                </div>
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Door cord fitting (customer supplied)</p>
                </div>
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Brick/baffle fitting (customer supplied)</p>
                </div>
                <div className="flex items-center my-2">
                    <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                    <p className="ml-2 text-xl text-gray-700">Optional reminders</p>
                </div>
            </div>
            <div className="flex items-center my-2">
                <p className="ml-2 text-xl text-gray-700">+ £30 Camera survey</p>
            </div>
            <div className="flex items-center my-2">
                <p className="ml-2 text-xl text-gray-700">+ £30 Nest removal (per hour)</p>
            </div>
            <div className="flex items-center my-2">
                <p className="ml-2 text-xl text-gray-700">+ £30 Formal written report</p>
            </div>
        </div>
        <div className="flex items-center justify-center  my-2">
            <button
                className="border-solid border-2 border-orange-700 hover:bg-orange-700 hover:text-white text-orange-700 font-semibold py-4 my-8 px-8">BOOK
                NOW
            </button>
        </div>
    </div>
)