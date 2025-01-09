import Article from "../components/article/Article";
import {recommendArticle} from "../data/articles";
import {GetRecommendArticle} from "../api/articleApi";

export default function Recommend() {

    const data = GetRecommendArticle()
    console.log(data)

    return <div>111</div>
    // return <Article article={data}></Article>;
}