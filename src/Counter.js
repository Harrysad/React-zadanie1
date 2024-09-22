import { useEffect, useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Display from "./components/Display";
import "./Counter.css";
import "./components/Step";
import Step from "./components/Step";

const Counter = (props, setProps) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);
  const [step, setStep] = useState(1);

  const increaseCount = () => {
    setCounter(prevCounter => prevCounter + step);
  }

  const updateCounter = (action) => {
    if (action === "add") {
      increaseCount();
    } else if (action === "reset") {
      setCounter(props.initValue);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    console.log('wywołanie use effecta');
  }, [counter])

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} stepValue={step} />
      <Step stepValue={step} setStep={setStep} />
      {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControl" onClick={() => setShowClock(true)}>
          pokaż zegar
        </p>
      )}
    </div>
  );
};

export default Counter;
