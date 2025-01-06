export default function HeaderItem({key, itemValue, onClick , isSelected}) {

    return (
        <div key={key} className={`p-6 min-h-14 w-30 text-gray-900 content-center hover:cursor-pointer transition ease-in-out duration-500 hover:bg-orange-500 hover:text-white ${
            isSelected ? 'bg-orange-500 text-white' : ''
        }`} onClick={ onClick }>{ itemValue }</div>
    )
}