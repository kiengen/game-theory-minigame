import { Link } from "react-router-dom";
import { useState } from "react";

export default function BasicsPage() {
    const [prog, setProg] = useState(0);
    const buttonText = ["What's that?", "Okay...", "And then what?", "Intriguing!", "Hmm..."];

    return (
        <div className="flex bg-c-charcoal justify-center items-center h-screen w-screen">
            <div className="max-w-4/5 max-h-4/5 flex-col gap-2">
                <p className="flex text-xl font-bold pb-3">What is Game Theory?</p>
                <p className="whitespace-pre flex-2 text-md pb-7"><strong>Game Theory</strong> is a branch of mathematics that focuses on how people behave in strategic situations.
                                            One popular thought experiment in the subject is the <strong>Prisoner's Dilemma</strong>.</p>
                <p id="0" className="h-6 opacity-0 whitespace-pre flex text-md transition-[height] duration-700 ease-in-out transition-opacity duration-700 ease-in-out">
                    {"  >>   Okay, let's say that there are two criminals."}
                </p>
                <p id="1" className="h-6 opacity-0 whitespace-pre flex text-md transition-[height] duration-700 ease-in-out transition-opacity duration-700 ease-in-out">
                    {"  >>   They are caught by the police and brought to separate rooms to be interrogated."}
                </p>
                <p id="2" className="h-6 opacity-0 whitespace-pre flex text-md transition-[height] duration-700 ease-in-out transition-opacity duration-700 ease-in-out">
                    {"  >>   They give them both an offer: confess, and your sentence is lessened."}
                </p>
                <p id="3" className="pt-7 opacity-0 whitespace-pre flex text-md transition-[height] duration-700 ease-in-out transition-opacity duration-700 ease-in-out">
                    Would you do it? What if they told you your partner was given the same offer, and that if your partner confessed and you didn't, your sentence would be <strong>increased?</strong>
                </p>
                <div className="mt-10 overflow-hidden group relative ml-auto mr-auto max-w-40 min-h-9 flex-3/4 cursor-pointer border border-c-silver rounded-md m-5">
                    <div className={`left-0 right-full h-1/1 absolute bg-c-sky-blue group-hover:right-0 transition-[right] duration-700 ease-in-out`}></div>
                    <button className="text-c-silver size-full text-center absolute z-2 p-1" onClick={() => {setProg(prog+1); console.log(prog); document.getElementById(prog).className = document.getElementById(prog).className.replace("opacity-0", "opacity-1/1")}}>{buttonText[prog]}</button>
                </div>
            </div>
        </div>
    );
};
