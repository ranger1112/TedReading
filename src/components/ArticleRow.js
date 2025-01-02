import MarkCard from "./MarkCard";

export default function ArticleRow({key, text, translation, items = []}) {

    const cardItems = items.map((item, key) => {
        return MarkCard({key: key, content: item.content, description: item.description, type: item.type})
    })

    return (
        <div key={key} className="col-start-2 col-end-7 ... grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-5 ...">
                <div className="text-gray-800">
                    {text}
                </div>
                <div className="text-gray-600">
                    {translation}
                </div>
            </div>
            <div className="col-start-5 col-span-1 ... pl-4 pt-2">
                {cardItems}
            </div>
        </div>
    )
}