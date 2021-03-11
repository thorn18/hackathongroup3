import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function RouterComponent() {
    const dispatch = useDispatch();
    const location = useLocation();
    return (
        <div>
            <p>Battle Page</p>
        </div>
    )
}