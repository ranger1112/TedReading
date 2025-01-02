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
                <div className="text-base my-2 space-y-1">
                    <div className="text-gray-800">
                        This elephant has incredible strength. She can <span>uproot</span> a tree with her trunk alone. Yet she will remain in captivity, held by only a light rope. Despite her ability to easily break away, she doesn't even try. Why?
                    </div>
                    <div className="text-gray-600">
                        这只大象有不可思议的力气，它只用象鼻就能把树连根拔起。但它却仍然被一条细绳给囚禁着。尽管它有可能可以轻易挣脱，它却试也不试。为什么呢？
                    </div>
                </div>
            </div>
        </div>
    )
}