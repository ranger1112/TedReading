import Article from "../components/article/Article";
import {GetRecommendArticle} from "../api/articleApi";

export default function Recommend() {

    const data = GetRecommendArticle()

    // return <div>111</div>
    return <Article article={data}></Article>;
}