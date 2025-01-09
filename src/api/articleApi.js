import {useEffect, useState} from "react";
import {get} from "./api";

function GetRecommendArticle() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get('/article/recommend')
                console.log(response)
                setData(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div>Loading</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <pre>{ JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export { GetRecommendArticle }