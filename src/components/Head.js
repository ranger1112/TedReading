import HeadItem from "./HeadItem";


const headItems = [
    {
        itemValue: "今日推荐",
        isSelected: true
    },
    {
        itemValue: "过往文章",
        isSelected: false
    },
    {
        itemValue: "交流体会",
        isSelected: false
    },
    {
        itemValue: "评论精选",
        isSelected: false
    },
    {
        itemValue: "关于我们",
        isSelected: false
    }
];

export default function Head() {

    const headItemsHtml = headItems.map((item) => {
        return HeadItem({itemValue: item.itemValue, isSelected: item.isSelected})
    })

    return (
        <div className="min-h-14 pl-64 w-full border-b border-gray-300 flex justify-start items-center space-x-4">
            {headItemsHtml}
        </div>
    )
}
