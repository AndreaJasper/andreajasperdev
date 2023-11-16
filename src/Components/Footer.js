import { NavLink } from "react-router-dom";
import Social from "../Components/Social"
import { contactDetails } from "../Details";

export default function Header() {
    const { email } = contactDetails;

    return (
        <footer>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <div>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello there!</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Feel free to email me if you'd like to get in touch.</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Social />
                </div>
            </div>
        </footer>
    )
}
