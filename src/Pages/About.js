export default function About() {
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
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Amazing headline here</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                    iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        {/* refactor to map through tech stack on details page */}
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Rails
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Values</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                        <div className="lg:pl-16 lg:pt-4">
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                    iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}