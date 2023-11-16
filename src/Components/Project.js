import React from "react";
import { Link } from 'react-router-dom';
import { projectDetails } from "../ProjectDetails";

export default function Project() {
    const {description, techstack, previewLink, githubLink, challenges, lessons} = projectDetails;
    
    return (
        <>
            <div className="py-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Description</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {description}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Techstack</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {techstack}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preview Link</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {previewLink}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {githubLink}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Challenges</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {challenges}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lessons Learned</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {lessons}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}