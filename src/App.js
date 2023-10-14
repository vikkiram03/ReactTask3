import ColorPicker from "./ColorPicker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
    const colors = [
        "#FF0000", // Red
        "#FFA500", // Orange
        "#FFFF00", // Yellow
        "#008000", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#EE82EE", // Violet
        "#FFFFFF", // White
        "#000000", // Black
        "#808080", // Gray
        "#A52A2A", // Brown
        "#FFC0CB", // Pink
        "#800080", // Purple
        "#00FFFF", // Cyan
        "#FF00FF", // Magenta
        "#00FF00", // Lime
        "#008080", // Teal
        "#FF00FF", // Fuchsia
        "#800000", // Maroon
        "#000080", // Navy
        "#808000", // Olive
        "#C0C0C0", // Silver
      ];

    return (
        <div className="App">
            <ColorPicker colors={colors} />
        </div>
    );
}

export default App;
