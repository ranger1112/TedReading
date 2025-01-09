import ArticleRow from "./ArticleRow";

export default function Article({article}) {

   const {title, zh_title, platform_name, author, publish_time, origin_url, paragraph = []} = article


    const paragraphHtml = paragraph.map((item) => {
        const {id, text, translation, mark} = item
        return ArticleRow({key: id, text: text, translation: translation, items: mark})
    })

    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 ...">
                    <h1 className="text-3xl my-1 font-bold text-gray-800"><span className="bg-red-500 text-white px-2 mr-4">{ platform_name }</span>{ title }</h1>
                    <div className="text-xl my-1 font-bold text-gray-600">{ zh_title }</div>
                    <div className="text-xs text-gray-600 mt-2 pb-1 border-b border-gray-300">
                        <span className="mr-3 hover:text-gray-900 hover:cursor-pointer">{ author }</span>
                        <span className="mr-3 hover:text-gray-900 hover:cursor-pointer">{ publish_time }</span>
                        <span className="hover:text-gray-900 hover:cursor-pointer">
                         <a href={ origin_url } target="_blank" rel="noreferrer">阅读原文</a>
                     </span>
                    </div>
                </div>
                {paragraphHtml}
            </div>
        </>
    )
}