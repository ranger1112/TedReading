export default function MarkCard({key, grammar, description, type = 1}) {
    if (type === 1) {
        return (
            <div key={key} className="space-x-2">
                <span className="font-normal text-white bg-yellow-900 rounded px-1">{grammar}</span>
                <span className="font-normal text-gray-600">{description}</span>
            </div>
        )
    } else {
        return (
            <div key={key} className="space-x-2">
                <span className="font-normal text-white bg-blue-500 rounded px-1">{grammar}</span>
                <span className="font-normal text-gray-600">{description}</span>
            </div>
        )
    }
}