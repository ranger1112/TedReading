import MarkCard from "./MarkCard";
import Mark from "./Mark";

// 处理文本的函数
const processText = (text, items) => {
    // 将 items 按内容长度从长到短排序，确保优先匹配更长的短语
    const sortedItems = [...items].sort((a, b) => b.content.length - a.content.length);

    // 构建正则表达式，匹配所有 items 中的内容
    const regex = new RegExp(`(${sortedItems.map(item => item.content).join('|')})`, 'g');

    // 将文本拆分为匹配和非匹配的部分
    const parts = text.split(regex);

    // 处理拆分后的部分
    return parts.map((part) => {
        const matchedItem = sortedItems.find(item => item.content === part);

        if (matchedItem) {

            const {id, content, grammar, desc, type} = matchedItem
            return (
                <Mark
                    key={id}
                    content={content}
                    grammar={grammar}
                    description={desc}
                    type={type}
                />
            );
        } else {
            return part; // 非匹配部分直接返回
        }
    });
};


export default function ArticleRow({key, text, translation, items = []}) {

    const cardItems = items.map((item) => {

        const {id, attr_name, grammar, desc, type} = item

        return MarkCard({key: id, attr: attr_name, grammar: grammar, description: desc, type: type})
    })

    const processedText = processText(text, items)

    return (
        <div key={key} className="col-start-2 col-end-7 ... grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-5 ...">
                <div className="italic text-gray-800 mb-1">
                    {processedText}
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