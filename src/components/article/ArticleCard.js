import {Avatar, Card, CardBody, Typography} from "@material-tailwind/react";
import React from "react";
// import articleCover from "../../resource/img/article_cover.jpg";
import articleCover from "../../resource/img/cover_default.jpg";
export default function ArticleCard() {
    return (
        <Card className="mt-2 w-full">
            <CardBody className="p-4">
                <div className="grid grid-cols-8 gap-4 min-h-full">
                    <div className="col-start-1 col-span-2 ... hover:cursor-pointer">
                        <img src={articleCover} alt="article cover" className="w-full h-32 object-cover rounded-xl"/>
                    </div>
                    <div className="col-start-3 col-span-6 ...">
                        <Typography variant="lead" className="mt-1 mb-2 text-yellow-900 hover:cursor-pointer">
                            <span className="px-2 bg-red-500 text-white mr-1">TED</span>那些限制你的执念是你的不幸之源
                        </Typography>
                        <Typography variant="small" className="italic line-clamp-2 hover:cursor-pointer">
                            I found myself defaulting to others' opinions when I should have been trusting my own, staying quiet when it would have benefited me to speak up, and blending in when I would have been happier if I had to courage to stand out.
                        </Typography>
                        <Typography variant="small" className="mt-2 italic">
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" className="hover:cursor-pointer" alt="avatar" size="xs" />
                            <span className='ml-2 py-2 text-yellow-700 hover:cursor-pointer'>Lauren Weinstin</span>
                            <span className='mx-2 py-2 hover:cursor-pointer'>2 days ago</span>
                            <span className="mx-1 px-1 bg-gray-200 rounded text-xs">TED</span>
                            <span className="mx-1 px-1 bg-gray-200 rounded text-xs">Speech</span>
                            <span className="mx-1 px-1 bg-gray-200 rounded text-xs">Life</span>
                            <span className="mx-1 px-1 bg-gray-200 rounded text-xs">TEDxPaloAlto</span>
                        </Typography>
                    </div>
                </div>

            </CardBody>
        </Card>
    )
}