import ArticleRow from "./ArticleRow";

export default function Article({article}) {

    const articleRows = article.rows
    const title = article.title
    const title_translation = article.title_translation
    const platform = article.platform
    const author = article.author
    const link = article.link
    const date = article.date

    const articleRowsHtml = articleRows.map((item, key) => {
        return ArticleRow({key: key, text: item.text, translation: item.translation, items: item.items})
    })

    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 ...">
                    <h1 className="text-3xl my-1 font-bold text-gray-800"><span className="bg-red-500 text-white px-2 mr-4">{ platform }</span>{ title }</h1>
                    <div className="text-xl my-1 font-bold text-gray-600">{ title_translation }</div>
                    <div className="text-xs text-gray-600 mt-2 pb-1 border-b border-gray-300">
                        <span className="mr-3 hover:text-gray-900 hover:cursor-pointer">{ author }</span>
                        <span className="mr-3 hover:text-gray-900 hover:cursor-pointer">{ date }</span>
                        <span className="hover:text-gray-900 hover:cursor-pointer">
                         <a href={ link } target="_blank" rel="noreferrer">阅读原文</a>
                     </span>
                    </div>
                </div>
                {articleRowsHtml}
            </div>
        </>
    )
}