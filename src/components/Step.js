import React from "react";

const Step = ({step, setStep}) => {
    const stepChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setStep(value);
            // console.log(value);
        }
    };

    return (
        < div >
        <label>
            Krok:
            <input
                type="number"
                value={step}
                onChange={stepChange}
                nim="1"
            />
        </label>
        </div >
    );
};

export default Step;