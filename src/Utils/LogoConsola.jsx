import PS1 from '../img/ps1.png';
import PS2 from '../img/ps2.png';
import PS3 from '../img/ps3.png';
import PS4 from '../img/ps4.png';
import SWITCH from '../img/switch.png';
import WII from '../img/wii.png';

export function LogoConsola({ consola }) {



    switch (consola) {
        case "PS1":
            return (
                <img className="logo-consola-lista" src={PS1} alt='logo' />
            )
        case "PS2":
            return (
                <img className="logo-consola-lista" src={PS2} alt='logo' style={{ width: 50 }} />
            )
        case "PS3":
            return (
                <img className="logo-consola-lista" src={PS3} alt='logo' style={{ width: 50 }} />
            )
            case "PS4":
            return (
                <img className="logo-consola-lista" src={PS4} alt='logo' style={{ width: 60 }} />
            )
        case "SWITCH":
            return (
                <img className="logo-consola-lista" src={SWITCH} alt='logo' />
            )
            case "WII":
            return (
                <img className="logo-consola-lista" src={WII} alt='logo' style={{ width: 40 }} />
            )
        default:
            return (
                "no hay nada"
            )
    }


}
