import './styles.css'
import logo from "../../assets/spotify_logo.png"

const Login = () => {
    return (
        <div className="container">
            <div className='row'>
                <button className='btn'>Login 
                    <span><img className='logo' src={logo} alt='logo'/></span>
                </button>
            </div>
        </div>
    )
}

export default Login