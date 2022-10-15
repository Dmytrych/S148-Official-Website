import { noop } from "../../utils";
import './index.css';

function NavButton({onClick = noop}) {
    return (
        <div onClick={onClick}>
            <span className='nav-button-text'>Waaaasagh</span>
        </div>
    )
}

export default NavButton;