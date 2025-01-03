import MarkCard from "./MarkCard";
import Mark from "./Mark";

// 处理文本的函数
const processText = (text, items) => {
    // 将 items 按内容长度从长到短排序，确保优先匹配更长的短语
    const sortedItems = [...items].sort((a, b) => b.content.length - a.content.length);

    // 用于存储处理后的结果
    const result = [];
    let remainingText = text;

    while (remainingText.length > 0) {
        let matched = false;

        // 尝试匹配 items 中的内容
        for (const item of sortedItems) {
            const { content } = item;

            // 检查剩余文本是否以当前 item 的内容开头
            if (remainingText.startsWith(content)) {
                // 如果匹配到，用 Mark 组件包裹内容
                result.push(
                    <Mark
                        key={remainingText}
                        content={item.content}
                        description={item.description}
                        type={item.type}
                    />
                );
                remainingText = remainingText.slice(content.length); // 移除已匹配的部分
                matched = true;
                break;
            }
        }

        if (!matched) {
            // 如果没有匹配到任何内容，将当前字符添加到结果中
            result.push(remainingText[0]);
            remainingText = remainingText.slice(1); // 移除已处理的字符
        }
    }

    return result;
};

export default function ArticleRow({key, text, translation, items = []}) {

    const cardItems = items.map((item, key) => {
        return MarkCard({key: key, content: item.content, description: item.description, type: item.type})
    })

    const processedText = processText(text, items)

    return (
        <div key={key} className="col-start-2 col-end-7 ... grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-5 ...">
                <div className="text-gray-800">
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