export default function Footer() {
    return (
        <div className="flex flex-row justify-center border-t border-gray-300 mt-4">
            <div className="min-h-max px-8 py-5 w-full basis-3/5 space-x-4 text-gray-600 text-sm font-semibold flex justify-center">
                <div className="hover:cursor-pointer hover:text-gray-900">
                    &copy; 2025 Ted Reading
                </div>
                <div className="hover:cursor-pointer hover:text-gray-900">
                    About Us
                </div>
                <div className="hover:cursor-pointer hover:text-gray-900">
                    License
                </div>
                <div className="hover:cursor-pointer hover:text-gray-900">
                    Contribute
                </div>
                <div className="hover:cursor-pointer hover:text-gray-900">
                    Contact Us
                </div>
            </div>
        </div>
    );
}