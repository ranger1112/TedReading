import HeaderItem from "./HeaderItem";

export default function Header({selectedKey, onItemClick}) {

    const headItems = [
        {
            key: "recommend",
            value: "今日推荐",
            isSelected: true
        },
        {
            key: "history",
            value: "过往文章",
            isSelected: false
        },
        {
            key: "communication",
            value: "交流体会",
            isSelected: false
        },
        {
            key: "comment",
            value: "评论精选",
            isSelected: false
        },
        {
            key: "about",
            value: "关于我们",
            isSelected: false
        }
    ];

    return (
        <div className="min-h-14 pl-64 w-full border-b border-gray-300 flex justify-start items-center space-x-4">
            {headItems.map((item) => {
                return <HeaderItem key={item.key} itemValue={item.value} onClick={() => onItemClick(item.key)} isSelected={item.key === selectedKey}></HeaderItem>
            })}
        </div>
    )
}
