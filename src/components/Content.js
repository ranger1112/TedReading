import Article from "./Article";
import Article01 from "../data/article01";

const article = <Article article={Article01}></Article>

export default function Content() {
    return (
        <>
            { article }
        </>
    )
}