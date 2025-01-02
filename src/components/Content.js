export default function Content() {
    return (
        <div className="flex flex-row justify-center">
            <div className="min-h-max px-8 py-5 w-full basis-3/5">
                <h1 className="text-3xl font-bold text-gray-800">Don't believe everything you think</h1>
                <div className="text-xl font-bold text-gray-600">那些限制你的执念是你的不幸之源</div>
                <div className="text-sm text-gray-600 mt-2 pb-1 border-b border-gray-300">
                    <span className="mr-5 hover:text-gray-900 hover:cursor-pointer">Lauren Weinstin</span>
                    <span className="hover:text-blue-400 hover:cursor-pointer">
                        <a href="https://www.ted.com/talks/lauren_weinstein_don_t_believe_everything_you_think">阅读原文</a>
                    </span>
                </div>
            </div>
        </div>
    )
}