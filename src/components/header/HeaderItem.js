import {Link, useLocation} from "react-router-dom";

export default function HeaderItem({itemValue, path}) {

    const location = useLocation()
    const isSelected = location.pathname === path

    return (
        <Link to={path} className={`p-6 min-h-14 w-30 text-gray-900 content-center hover:cursor-pointer transition ease-in-out duration-500 ${
            isSelected ? 'bg-orange-500 text-white' : ' hover:bg-gray-100'
        }`}>{ itemValue }</Link>
    )
}