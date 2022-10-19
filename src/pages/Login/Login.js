import './styles.css';
import logo from "../../assets/spotify_logo.png";

const Login = () => {

    const login = async () => {
        try {
            var client_id = "8f059b9b27d0487885f7b5cf1781a62e";
            var redirect_uri = 'http://localhost:3000/artist-search';

            var state = generateRandomString(16);

            localStorage.setItem("stateKey", state);
            var scope = 'user-read-private user-read-email';

            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);
            window.location = url
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }

    const generateRandomString = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters_length = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters_length));
        }
       return result;
    }

    return (
        <div className="container">
            <div className='row'>
                <button className='btn' onClick={login}>Login 
                    <span><img className='logo' src={logo} alt='logo'/></span>
                </button>
            </div>
        </div>
    )
}

export default Login