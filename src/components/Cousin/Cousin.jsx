import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";



const Cousin = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Cousin</h3>
            <p>Gifted Money: {money} </p>
            <button onClick={() => setMoney(money + 100)}>Return Money</button>
        </div>
    );
};

export default Cousin;