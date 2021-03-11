import { useState } from "react";
import { useHistory } from "react-router";
import { Character } from "../character/character";


export default function CreateCharacterComponent(){
    const history = useHistory();
    let [char, setChar] = useState({});

    // function handleInput(e) {
    //     let c = { char };
    //     c[
    //         (e.target).name
    //     ] = (e.target).value;
    //     setChar(c);
    // }

    return (
        <div id = "HomeDiv">
            <form>
                {/* <label for="name">Name: </label><br></br> */}
                <input type="text" id="name" name="name"/>
            </form>
        </div>
    )
}