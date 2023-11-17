import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </>
    );
}