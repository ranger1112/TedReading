export default function ArticleRow({key, text, translation}) {
    return (
        <div key={key} className="text-base my-2 space-y-1">
            <div className="text-gray-800">
                {text}
            </div>
            <div className="text-gray-600">
                {translation}
            </div>
        </div>
    )
}