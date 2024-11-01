import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css"
const AssetContext = createContext('')
const MoneyContext = createContext(1000)


const Grandpa = () => {
    const [money, setMoney] = useState(100)
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <p>Money Total: {money} </p>
            <div style={{display:'flex'}}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value= "diamond">
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>  
        </div>
    );
};
export{AssetContext,MoneyContext}
export default Grandpa;