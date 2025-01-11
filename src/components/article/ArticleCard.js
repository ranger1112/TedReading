import {Card, CardBody, Typography} from "@material-tailwind/react";
import React from "react";
import articleCover from "../../resource/img/article_cover.jpg";
export default function ArticleCard() {
    return (
        <Card className="mt-2 w-full">
            <CardBody className="p-4">
                <div className="grid grid-cols-8 gap-4 min-h-full">
                    <div className="col-start-1 col-span-2 ... hover:cursor-pointer">
                        <img src={articleCover} alt="article cover" className="w-full h-28 object-cover rounded-xl"/>
                    </div>
                    <div className="col-start-3 col-span-6 ...">
                        <Typography variant="lead" className="mb-2 text-yellow-900 hover:cursor-pointer">
                            <span className="px-2 bg-red-500 text-white mr-1">TED</span>那些限制你的执念是你的不幸之源
                        </Typography>
                        <Typography variant="small" className="italic line-clamp-2 hover:cursor-pointer">
                            I found myself defaulting to others' opinions when I should have been trusting my own, staying quiet when it would have benefited me to speak up, and blending in when I would have been happier if I had to courage to stand out.
                        </Typography>
                    </div>
                </div>

            </CardBody>
        </Card>
    )
}