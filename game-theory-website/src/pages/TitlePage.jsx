import { Link } from "react-router-dom";

export default function TitlePage() {
    return (
        <div className="flex bg-c-charcoal justify-center items-center h-screen w-screen">
            <div className="flex justify-center flex-col h-3/4 w-3/4 gap-10 max-h-50 max-w-200">
                <text className="text-6xl content-center text-center flex-3 text-c-silver">Darwin Game</text>
                <div className="flex-0 flex-col-reverse flex-wrap place-center">
                    <div className="overflow-hidden group relative ml-auto mr-auto max-w-50 min-h-13 flex-3/4 cursor-pointer border border-c-silver rounded-md hover:scale-125 duration-400 ease-in-out">
                        <div className={`left-0 right-full h-1/1 absolute bg-c-sky-blue group-hover:right-0 transition-[{right}] duration-700`}></div>
                        <Link className="text-c-silver size-full text-center absolute z-2 p-3" to="/basics">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
