import React, { useState } from "react";
import "./App.css";

const ColorPicker = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [isListVisible, setIsListVisible] = useState(false);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setIsListVisible(false);
    };

    const handleButtonClick = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <div align="center">
            <p className="display-1">React Task 3</p>
            <p className="display-6">By 21BCE5919 Vikram Ramkumar</p> <br/>
            <div className="selected-color" style={{backgroundColor: selectedColor}}>
                <button className="btn btn-primary" onClick={handleButtonClick}>Pick a color</button>
                {isListVisible && (
                    <ul className="color-list">
                    {colors.map((color) => (
                        <li
                        key={color}
                        className="color-item"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                        />
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ColorPicker;