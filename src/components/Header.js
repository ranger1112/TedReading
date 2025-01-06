import HeaderItem from "./HeaderItem";
import {useState} from "react";

export default function Header() {

    const [headItems, setHeadItems] = useState([
        {
            key: "recommend",
            itemValue: "今日推荐",
            isSelected: true
        },
        {
            key: "history",
            itemValue: "过往文章",
            isSelected: false
        },
        {
            key: "communication",
            itemValue: "交流体会",
            isSelected: false
        },
        {
            key: "comment",
            itemValue: "评论精选",
            isSelected: false
        },
        {
            key: "about",
            itemValue: "关于我们",
            isSelected: false
        }
    ]);

    const handleItemClick = (clickedKey) => {
        setHeadItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                isSelected: item.key === clickedKey,
            }))
        );
    };

    const headItemsHtml = headItems.map((item) => {
        return HeaderItem({key: item.key, itemValue: item.itemValue, onClick: () => handleItemClick(item.key), isSelected: item.isSelected})
    })

    return (
        <div className="min-h-14 pl-64 w-full border-b border-gray-300 flex justify-start items-center space-x-4">
            {headItemsHtml}
        </div>
    )
}
