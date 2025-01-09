import Article from "../components/article/Article";
import {recommendArticle} from "../data/articles";
// import {GetRecommendArticle} from "../api/articleApi";

export default function Recommend() {

    // const data = GetRecommendArticle()
    // console.log(data)

    return <Article article={recommendArticle}></Article>;
}