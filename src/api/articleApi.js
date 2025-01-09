import {useEffect, useState} from "react";
import {get} from "./api";

function GetRecommendArticle() {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            console.log(111)
            const response = await get('/article/recommend')
            console.log(response.data)
            setData(response.data)
        }

        fetchData()
    }, [])


    return data
}

export { GetRecommendArticle }