import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const pages = [
  <div className="flex w-full h-full justify-center items-center">
    <div className="flex flex-col w-14/15 max-w-200 h-1/2">
      <h1 className="text-lg font-semibold">Intro to Game Theory</h1>
      <p className="pb-2 pt-2">In order to be able to play this game, it is important to learn about something called "<strong>Game Theory</strong>". Game Theory is the study of how people in <strong>strategic situations</strong> make decisions.</p>
      <p>One popular thought experiment from Game Theory is called the <strong>Prisoner's Dilemma</strong>.</p>
    </div>
  </div>,

  <div className="flex w-full h-full justify-center items-center">
    <div className="flex flex-col w-14/15 max-w-200 h-14/15 max-h-90">
      <h1 className="text-lg font-bold">Intro to Game Theory</h1>
      <p className="pb-2 pt-2">Imagine this: you are a criminal being interrogated by the police for a crime you and a partner just committed. You are unsure how much evidence they have against you. They tell you this:</p>
      <div className="flex flex-row">
        <div className="flex-7 pb-2">
          <p className="pb-2 pl-2">- You can either <strong>confess to</strong> or <strong>deny</strong> their accusations.<br/>- Your partner in crime has the same two options.</p>
          <p className="pb-2">If you confess and your partner does not, you get 2 years in jail, and he gets 8. If you both confess, you both get 5 years in jail. If he confesses and you do not, he gets 2 years in jail and you get 8. If you both deny it, you both get off scot-free.</p>
          <p className="pb-2">So, the question is...</p>
          <p className="font-semibold">What would you do?</p>
        </div>
        <div className="flex flex-col flex-6 justify-center items-center max-w-200 max-h-60">
          <div className="flex flex-col w-9/10 h-full">
            <div className="flex flex-row w-full h-1/5">
              <div className="w-1/5 h-full"/>
              <p className="text-sm text-center content-end pb-2 w-2/5 h-full">You confess</p>
              <p className="text-sm text-center content-end pb-2 w-2/5 h-full">You deny</p>
            </div>
            <div className="flex w-full h-2/5">
              <p className="text-sm text-right content-center pr-2 w-1/5 h-full">They confess</p>
              <p className="border-1 border-r-0 border-white content-center text-center w-2/5 h-full">5 years<br/>5 years</p>
              <p className="border-1 border-white content-center text-center w-2/5 h-full">8 years<br/>2 years</p>
            </div>
            <div className="flex w-full h-2/5">
              <p className="text-sm text-right content-center pr-2 w-1/5">They deny</p>
              <p className="border-1 border-t-0 border-r-0 border-white content-center text-center w-2/5 h-full">2 years<br/>8 years</p>
              <p className="border-1 border-t-0 border-white content-center text-center w-2/5 h-full">0 years<br/>0 years</p>
            </div>
            <p className="pt-1 text-xs text-right w-full">*This is called a <strong>payoff matrix</strong>!</p>
          </div>
        </div>
      </div>
    </div>
  </div>,

  <div className="flex w-full h-full bg-yellow-100 justify-center items-center">
    
  </div>]

const Title = () => { 
  const [index, setIndex] = useState(0);
  const [minidex, setMinidex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col bg-c-charcoal h-full w-full">
        <div className="flex h-5/6 w-full">{pages[index]}</div>
        <div  className="flex w-full h-1/6 justify-center items-start"
              onClick={(e)=>{
                if(index==pages.length-1) {
                  navigate("/custom");
                  //setIndex(0);
                } else {
                  setIndex(index+1);
              }}}>
          {showButton ?
            <div className="hover:scale-115 cursor-pointer transition flex w-fit h-13 pl-2 pr-2 justify-center items-center min-h-8">
              <MoveRight color="white" size={64}/>
            </div> : <></>}
        </div>
      </div>
    </>
  );
};
export default Title;