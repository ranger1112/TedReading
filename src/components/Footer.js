export default function Footer() {
    return (
        <div className="flex flex-row justify-center border-t border-gray-300 mt-4">
            <div className="min-h-max px-8 py-5 w-full basis-3/5 space-x-4">
                <span className="text-gray-600 text-sm font-semibold hover:text-gray-900">
                    &copy; 2025 Ted Reading
                </span>
                <span className="text-gray-600 text-sm font-semibold hover:text-gray-900">
                    About Us
                </span>
                <span className="text-gray-600 text-sm font-semibold hover:text-gray-900">
                    License
                </span>
                <span className="text-gray-600 text-sm font-semibold hover:text-gray-900">
                    Contribute
                </span>
                <span className="text-gray-600 text-sm font-semibold hover:text-gray-900">
                    Contact Us
                </span>
            </div>
        </div>
    );
}