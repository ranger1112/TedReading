import React from "react";
import ArticleCard from "../components/article/ArticleCard";
export default function History() {


    return (
        <div className="grid grid-cols-6 gap-4 min-h-screen">
            <div className="col-start-2 col-span-3 ...">
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
            </div>
            <div className="col-end-6 col-span-1 ... bg-blue-50">
                <h1 className="text-3xl my-1 font-bold text-gray-800">更多</h1>
            </div>
        </div>
    )
}