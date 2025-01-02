export default function MarkCard({key, content, description, type = 'word'}) {
    if (type === 'word') {
        return (
            <div key={key} className="space-x-2">
                <span className="font-normal text-white bg-yellow-900 rounded px-1">{content}</span>
                <span className="font-normal text-gray-600">{description}</span>
            </div>
        )
    } else {
        return (
            <div key={key} className="space-x-2">
                <span className="font-normal text-white bg-blue-500 rounded px-1">{content}</span>
                <span className="font-normal text-gray-600">{description}</span>
            </div>
        )
    }
}