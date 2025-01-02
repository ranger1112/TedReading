import Mark from "./Mark";
import ArticleRow from "./ArticleRow";

const articleRows = [
    {
        "text": (
            <>
                This elephant has incredible strength. She can <Mark content="uproot" description="v.连根拔起"></Mark> a tree with her <Mark content="trunk" description="n.树干；象鼻"></Mark> alone. Yet she will remain in <Mark content="captivity" description="n.囚禁；困住"></Mark>, held by only a light rope. Despite her ability to easily <Mark content="break away" description="挣脱" type="phrase"></Mark>, she doesn't even try. Why?
            </>
        ),
        "translation": (
            <>
                他的大象有极致的力量。她可以把树根拔起来。但是她永远都在囚禁中。尽管她可以轻松地挣脱，但她却没有尝试。为什么?
            </>
        )
    }
]

const articleRowsHtml = articleRows.map((item, key) => {
    return ArticleRow({key: key, text: item.text, translation: item.translation})
})

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

                {articleRowsHtml}

                <div className="text-base my-2 space-y-1">
                    <div className="text-gray-800">
                        This elephant has incredible strength. She can <Mark content="uproot" description="v.连根拔起"></Mark> a tree with her <Mark content="trunk" description="n.树干；象鼻"></Mark> alone. Yet she will remain in <Mark content="captivity" description="n.囚禁；困住"></Mark>, held by only a light rope. Despite her ability to easily <Mark content="break away" description="挣脱" type="phrase"></Mark>, she doesn't even try. Why?
                    </div>
                    <div className="text-gray-600">
                        这只大象有不可思议的力气，它只用象鼻就能把树连根拔起。但它却仍然被一条细绳给囚禁着。尽管它有可能可以轻易挣脱，它却试也不试。为什么呢？
                    </div>
                </div>
            </div>
        </div>
    )
}