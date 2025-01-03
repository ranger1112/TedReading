import ArticleRow from "./ArticleRow";

const articleRows = [
    {
        "text": "This elephant has incredible strength. She can uproot a tree with her trunk alone. Yet she will remain in captivity, held by only a light rope. Despite her ability to easily break away, she doesn't even try. Why?",
        "translation": "这只大象有很不可思议的力气，它只用象鼻就能把树连根拔起。但它却仍然被一条细绳给囚禁着。尽管它有能力可以轻易挣脱，它却试也不试。为什么?",
        "items": [
            {
                "content": "uproot",
                "description": "连根拔起",
                "type": "word"
            },
            {
                "content": "trunk",
                "description": "树干；象鼻",
                "type": "word"
            },
            {
                "content": "captivity",
                "description": "囚禁；困住",
                "type": "word"
            },
            {
                "content": "break away",
                "description": "挣脱",
                "type": "phrase"
            }
        ]
    }
]

const articleRowsHtml = articleRows.map((item, key) => {
    return ArticleRow({key: key, text: item.text, translation: item.translation, items: item.items})
})

export default function Content() {
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 ...">
                    <h1 className="text-3xl my-1 font-bold text-gray-800">Don't believe everything you think</h1>
                    <div className="text-xl my-1 font-bold text-gray-600">那些限制你的执念是你的不幸之源</div>
                    <div className="text-sm text-gray-600 mt-2 pb-1 border-b border-gray-300">
                        <span className="mr-5 hover:text-gray-900 hover:cursor-pointer">Lauren Weinstin</span>
                        <span className="hover:text-blue-400 hover:cursor-pointer">
                         <a href="https://www.ted.com/talks/lauren_weinstein_don_t_believe_everything_you_think">阅读原文</a>
                     </span>
                    </div>
                </div>
                {articleRowsHtml}
            </div>
        </>
    )
}