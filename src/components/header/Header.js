import HeaderItem from "./HeaderItem";

export default function Header({headItems}) {

    return (
        <div className="min-h-14 pl-64 w-full border-b border-gray-300 flex justify-start items-center space-x-4">
            {headItems.map((item) => (
                <HeaderItem
                    key={item.id}
                    itemValue={item.value}
                    path={item.path}
                />
            ))}
        </div>
    )
}
