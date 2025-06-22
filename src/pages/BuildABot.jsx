import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const varNames = ["test", "testy", "", "", "", "", "", ""]

const buttons = {

}

function displayAlert(message) {

}

function addPiece(type) {
  if(type == "custom_var") {
    if(varIndex == 11) {
      displayAlert("Max number of variables reached!");
      return;
    }
    if(varName == "") {
      displayAlert("Variable name can't be empty!");
      return;
    }
    if(varNames.includes(varName)) {
      displayAlert("Variable name already in use!");
      return;
    }
  }
}

const BuildABot = () => {
  const [varName, setVarName] = useState("");
  const [varIndex, setVarIndex] = useState(0);
  const [debugText, setDebugText] = useState("");

  return (
    <div className="flex w-full h-full bg-c-charcoal">
      <div className="flex flex-col w-3/10 h-full bg-zinc-700">
        <div className="flex w-full h-1/10 justify-center items-center">
          <h1 className="text-3xl font-bold text-c-sky-blue">Build-A-Bot 🔧</h1>
        </div>
        <div className="flex flex-col w-full h-9/10 p-4 pt-0">
          <h1 className="pb-1">Variables</h1>
          <div className="flex flex-row w-full h-6 mb-2 items-center">
            <input className="p-1 w-30 h-5 bg-white border-1 border-black text-black text-sm"/>
            <div className="hover:bg-sky-600 hover:scale-102 cursor-pointer transition h-5 w-23 rounded-lg bg-c-sky-blue text-white text-sm text-center ml-2">Add Variable</div>
          </div>
          {varNames.map((varName) => {
            if(varName == "") {
              return <></>
            }
            return (
              <>
                <div className="flex flex-row w-fit h-fit items-center">
                  <div className="w-fit h-fit pl-2 pr-2 bg-c-green rounded-lg text-sm text-center content-center">{varName}</div>
                  <Trash2 className="w-fit h-fit rounded-lg text-sm text-center content-center ml-1 cursor-pointer" strokeWidth="1" size="16" color="white"></Trash2>
                </div>
                <div className="h-1"/>
              </>
            )
          })}
          <div className="h-1"/>
          <div className="w-fit h-fit pl-2 pr-2 bg-c-green rounded-lg text-sm text-center content-center">turn #</div>
          <div className="h-1"/>
          <div className="w-fit h-fit pl-2 pr-2 bg-c-green rounded-lg text-sm text-center content-center">round #</div>
          <div className="h-1"/>
          <h1 className="pt-5 pb-2">Conditionals</h1>
        </div>
      </div>
      <div className="flex w-7/10 h-full bg-zinc-800">
        
      </div>
    </div>
  );
};
export default BuildABot;