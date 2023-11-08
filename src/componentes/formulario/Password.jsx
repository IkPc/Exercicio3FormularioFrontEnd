import { useState } from "react";
import './Password.css';

const strenghLabels = ["weak", "medium", "strong"];

export default props => {
    const [strength, setStrength] = useState("");

    const getStrength = (password) => {
        let strengthIndicator = -1,
        upper = false,
        lower = false,
        numbers = false;

        for (let index = 0; index < password.length; index++){
            const char = password.charCodeAt(index);

            if(!upper && char >= 65 && char <= 90) {
                upper = true; strengthIndicator++;
            }
            if(!numbers && char >= 48 && char <= 57){
                numbers = true; strengthIndicator++;
            }
            if(!lower && char >= 97 && char <= 122){
                lower = true; strengthIndicator++;
            }

        }
        setStrength(strenghLabels[strengthIndicator]);
    };

    const handleChange = (event) => getStrength(event.target.value);

    return (
        <>
            <input
                name="password"
                spellCheck="false"
                className="control"
                type="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <div className={`bars ${strength}`}>
                <div></div>
            </div>
            <div className="strength">
                {
                    strength && <>{strength} password</>
                }
            </div>
        </>
    )
    
}

