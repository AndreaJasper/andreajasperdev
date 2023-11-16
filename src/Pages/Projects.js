import React from "react";
import { Link } from 'react-router-dom';
import { projectDetails } from "../ProjectDetails";

export default function Projects() {
    return (
        <>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {React.Children.toArray(
                            projectDetails.map(({ title, description, link }) => (
                                <div className="border border-gray-600 rounded-xl lg:max-w-xl">
                                    <div className="p-8">
                                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                                        <p className="mt-6 text-lg leading-8 text-gray-600 pb-8">{description}</p>
                                        <Link to="/project">Read More <span aria-hidden="true">→</span></Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}