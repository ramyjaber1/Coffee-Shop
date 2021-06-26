import {v4 as uuidv4} from "uuid"

export const pricing = [
    {
        id:uuidv4(),
        title:"Basic",
        price:"$ 99",
        button:"Get Basic",
        services:[
            "Something",
            "Something else",
            "Something more",
            "Even something ",
            "Another one"
        ]

    },
    {
        id:uuidv4(),
        title:"Master",
        price:"$ 199",
        button:"Get Master",
        services:[
            "Something",
            "Something else",
            "Something more",
            "Even something ",
            "Another one",
            "Master maintenance",
            "5% Discount"
        ]

    },
    {
        id:uuidv4(),
        title:"Professional",
        price:"$ 299",
        button:"Get Professional",
        services:[
            "Something",
            "Something else",
            "Something more",
            "Even something ",
            "Another one",
            "Professional maintenance",
            "25% Discount"
        ]

    },
]