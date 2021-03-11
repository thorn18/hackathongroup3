
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function HomeComponent() {
    // const dispatch = useDispatch();
    // const location = useLocation();
    const history = useHistory();
    return (
        <div>
            <button onClick={() => { history.push('./CreateNewCharacter') }}> Create A new Character
                </button>
            <button onClick={() => { history.push('./BattlePage') }}> Battle!
                </button>
        </div>
    )
}