import "../App.css"
import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <img className="logo" src={logo} width="50px" alt="" />
                <p className="text-2xl font-bold text-slate-50">Fernweh</p>
            </div>
        </>
    )
}