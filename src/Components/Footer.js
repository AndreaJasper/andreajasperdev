import { NavLink } from "react-router-dom";
import Social from "../Components/Social"
import { contactDetails } from "../Details";

export default function Header() {

    return (
        <footer>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <div>
                        <h2>Hello there!</h2>
                        <p>Feel free to email me if you'd like to get in touch.</p>
                        <p>{contactDetails.email}</p>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Social />
                </div>
            </div>
        </footer>
    )
}
