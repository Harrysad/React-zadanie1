import './ButtonsPanel.css';
import React from 'react';

const ButtonsPanel = ({updateCounter, stepValue}) => {
    return (
        <div className="buttonsPanel">
            <button onClick={() => updateCounter('add')}>Add {stepValue}</button>
            <button onClick={() => updateCounter('reset')}>Reset</button>
            <button onClick={() => updateCounter('zero')}>Set 0</button>
        </div>
    );
};

export default ButtonsPanel;