import {useEffect, useState} from "react";
import {get} from "./api";

function GetRecommendArticle() {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await get('/article/recommend')
            setData(response.data)
        }

        fetchData()
    }, [])


    return data
}

export { GetRecommendArticle }