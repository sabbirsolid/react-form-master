import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Gift from Grandpa: {gift}</p>
            
        </div>
    );
};

export default Special;