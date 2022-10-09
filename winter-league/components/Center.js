import { shuffle } from "lodash";
import { useEffect, useState } from "react";

const colours = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500"
]

function Center(){
    const [colour, setColour] = useState(null);

    useEffect(() =>{
        setColour(shuffle(colours).pop());
    }, []) 

    return(
        <div className="flex-grow">
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-slate-400 ${colour} h-60 text-white padding-8`}>
                <h1>hello</h1>
            </section>
        </div>
    )
}

export default Center