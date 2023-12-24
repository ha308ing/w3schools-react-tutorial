import { Car } from "./Car";

export default function Garage(props) {
    return (
        <>
            <div>Who lives in my garage?</div>
            {props.cars.map(c => (
                <Car key={c.id} model={c.model} />
            ))}
        </>
    );
}
