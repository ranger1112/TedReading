import Article from "./Article";
import Articles from "../data/articles";


export default function Content({ selectedKey }) {

    const contentMap = {
        recommend: <Article article={Articles.recommend}></Article>,
        history: <div>历史文章</div>,
        communication: <div>交流体会</div>,
        comment: <div>评论精选</div>,
        about: <div>关于我们</div>
    }

    return (
        <>
            { contentMap[selectedKey] }
        </>
    )
}