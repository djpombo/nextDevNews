import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const courses = [
        {
            id: 1,
            name: 'NextJS com typescript'
        },
        {
            id: 2,
            name: 'ReactJS Basico'
        },
        {
            id: 3,
            name: 'Angular 12'
        },
        {
            id: 4,
            name: 'Javascript Ecma 2015'
        }
    ]

    return res.json(courses);
}