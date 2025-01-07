import Article from "./Article";
import {Recommend} from "../data/articles";
import History from "./History";

export default function Content({ selectedKey }) {

    const contentMap = {
        recommend: <Article article={Recommend}></Article>,
        history: <History></History>,
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