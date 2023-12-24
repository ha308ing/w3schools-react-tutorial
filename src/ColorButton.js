export default function ColorButton({ color, colorSetter }) {
    return (
        <div>
            <button
                className="button"
                style={{ display: "block", backgroundColor: color, margin: "1rem 2rem", padding: "0.5rem 1rem" }}
                onClick={() => colorSetter(color)}
            >
                {color}
            </button>
        </div>
    );
}
