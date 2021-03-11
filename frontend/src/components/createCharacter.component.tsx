import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router";
import { Character } from "../character/character";
import axios from 'axios';

export default function CreateCharacterComponent() {
    const history = useHistory();
    // let char = new Character();
    // let remain = 100;
    let [char, setchar] = useState(new Character());
    let [remain, setremain] = useState(100);
    const URI = 'http://localhost:9018/api/character/';

    function handleInput(e: SyntheticEvent) {
        let x: string =(e.target as HTMLInputElement).value;
        let c: any = { ...char }
        c.charName = x;
        setchar(c);
    }

    function handleStrengthClickUp(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 0 || c.charStrength == 100) {

        } else {
            c.charStrength += 1;
            setchar(c);
            setremain(remain - 1);
        }
    }
    function handleStrengthClickDown(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 100 || c.charStrength == 0) {
        } else {
            c.charStrength -= 1;
            setchar(c);
            setremain(remain + 1);
        }
    }

    function handleLifeClickUp(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 0 || c.charHp == 100) {
        } else {
            c.charHp += 1;
            setchar(c);
            setremain(remain - 1);
        }
    }
    function handleLifeClickDown(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 100 || c.charHp == 0) {
        } else {
            c.charHp -= 1;
            setchar(c);
            setremain(remain + 1);
        }

    }

    function handleDexClickUp(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 0 || c.charDex == 100) {
        } else {
            c.charDex += 1;
            setchar(c);
            setremain(remain - 1);
        }
    }
    function handleDexClickDown(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 100 || c.charDex == 0) {
        } else {
            c.charDex -= 1;
            setchar(c);
            setremain(remain + 1);
        }

    }
    function handleSpeedClickUp(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 0 || c.charSpeed == 100) {
        } else {
            c.charSpeed += 1;
            setchar(c);
            setremain(remain - 1);
        }
    }
    function handleSpeedClickDown(e: SyntheticEvent) {
        let x: number = parseInt((e.target as HTMLInputElement).value);
        let c: any = { ...char }
        if (remain == 100 || c.charSpeed == 0) {
        } else {
            c.charSpeed -= 1;
            setchar(c);
            setremain(remain + 1);
        }
    }

    function HandleSubmit(e: SyntheticEvent) {
        axios.post(URI, char).then((value) => {
            if (value) {
                console.log("Sucessful creation");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div id="HomeDiv">
            <label className="label">Undistributed Points:{remain} </label><br></br>

            <div id="CreateCharacterForm">
                <label className="label">Name: </label><br></br>
                <input type="text" id="name" name="name" onChange={handleInput} />
                <br></br>
                <label className="label">Strength: </label>
                <button onClick={handleStrengthClickUp}>^</button>
                <label>{char.charStrength}</label>
                <button onClick={handleStrengthClickDown}>v</button>
                <br></br>
                <label className="label">Life: </label>
                <button onClick={handleLifeClickUp}>^</button>
                <label>{char.charHp}</label>
                <button onClick={handleLifeClickDown}>v</button>
                <br></br>
                <label className="label">Dex: </label>
                <button onClick={handleDexClickUp}>^</button>
                <label>{char.charDex}</label>
                <button onClick={handleDexClickDown}>v</button>
                <br></br>
                {/* <label className="label">Speed: </label>
                <button onClick={handleSpeedClickUp}>^</button>
                <label>{char.charSpeed}</label>
                <button onClick={handleSpeedClickDown}>v</button>
                <br></br> */}
                <label className="label">Character URL: </label><br></br>
                <input type="text" id="image" name="image" />
                <br></br>
            </div>
            <button id="characterSubmitButton" onClick={HandleSubmit}>Submit Form</button>
        </div>
    )
}