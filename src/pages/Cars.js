import Garage from "../Garage";
import { CarWash } from "../CarWash";
import HeaderContainer from "../HeaderContainer";
import { MyForm } from "../MyForm";

const cars = [
    { id: 1, model: "ford" },
    { id: 2, model: "toyota" },
    { id: 3, model: "honda" },
];

export default function myFirstElement() {
    return (
        <div>
            <MyForm />
            <hr />
            <HeaderContainer />
            <Garage cars={cars} />
            <CarWash color="green" />
        </div>
    );
}
