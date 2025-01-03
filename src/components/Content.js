import Article from "./Article";
import Articles from "../data/articles";

const article = <Article article={Articles.recommend}></Article>

export default function Content() {
    return (
        <>
            { article }
        </>
    )
}