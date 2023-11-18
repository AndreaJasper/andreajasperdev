import React from "react";
import { Link } from 'react-router-dom';
import { projectDetails } from "../../ProjectDetails";

export default function ProjectCard() {
    return (
        <>
            {React.Children.toArray(
                projectDetails.map(({ title, description, link }) => (
                    <div className="border border-gray-600 lg:max-w-xl">
                        <div className="p-8">
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 pb-8">{description}</p>
                            <Link to="/project">Read More <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}