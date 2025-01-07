import Article from "../components/article/Article";
import {recommendArticle} from "../data/articles";

export default function Recommend() {
    return <Article article={recommendArticle}></Article>;
}