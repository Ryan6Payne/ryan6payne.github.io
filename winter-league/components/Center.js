import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import Player from "./Player";

const colours = [
    "from-indigo-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
]

function Center(){
    const [colour, setColour] = useState(null);

    const [ryan, setRyan] = useState(["Ryan Payne", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);
    const [scott, setScott] = useState(["Scott Jacquest", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);

    const [nick, setNick] = useState(["Nick Howell", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);
    const [jeremy, setJeremy] = useState(["Jeremy Nevett", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);

    const [adrian, setAdrian] = useState(["Adrian Hobson", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);
    const [mike, setMike] = useState(["Mike Dougan", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);

    const [andy, setAndy] = useState(["Andrew Feakin", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);
    const [craig, setCraig] = useState(["Craig Biggs", [42 , 41, 40, 40, 36, 33, 32, 36, 36, 37]]);

    useEffect(() =>{
        setColour(shuffle(colours).pop());
    }, []) 

    return(
        <div className="flex-grow">
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-slate-400 ${colour} h-40 text-black text-xl padding-8 items-center justify-center`}>
                <h1 className="">Winter League</h1>
                
            </section>
            <div>
                <Player player={ryan}/>
                <Player player={scott}/>
                <Player player={nick}/>
                <Player player={jeremy}/>
                <Player player={adrian}/>
                <Player player={mike}/>
                <Player player={andy}/>
                <Player player={craig}/>
            </div>
        </div>
    )
}

export default Center