export default function HeadItem({itemValue, isSelected = false}) {

    // 选中项的样式变化
    let className = 'p-6 min-h-14 w-30 text-gray-900 content-center hover:bg-orange-500 hover:text-white'
    if (isSelected) {
        className = className + ' bg-orange-500 text-white'
    }

    return (
        <div className={className}>{ itemValue }</div>
    )
}