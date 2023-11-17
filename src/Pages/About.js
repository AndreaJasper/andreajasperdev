import React from "react";
import { techStackDetails, personalDetails } from "../Details";

export default function About() {
    const { about, values, other } = personalDetails;

    return (
        <>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                        <div className="lg:pl-16 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Story</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-24 sm:pt-32">
                <div className="py-24 sm:py-32 bg-zinc-200">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:text-center">
                        <h2 className="mt-2 mb-16 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">Technologies</h2>
                        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                            {React.Children.toArray(
                                techStackDetails.map(({ name, icon }) => (
                                    <div className="lg:max-w-lg">
                                        {icon}
                                        <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {name}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Values</h2>
                                <ul className="divide-y divide-gray-100">
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-sm leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-sm leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-md leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-sm leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-sm leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                    <li className="py-5">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-md font-semibold leading-6 text-gray-900">Leadership</p>
                                            <p className="mt-1 truncate text-sm leading-5 text-gray-500">I lead by example, always striving to be at the forefront of my industry and inspiring others to achieve greatness.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                        <div className="lg:pl-16 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Amazing headline here</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {other}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}