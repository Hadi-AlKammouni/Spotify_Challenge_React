import { useLocation } from "react-router-dom";

import { useSpotify } from "../../context/spotify";

const Albums = () => {

    const location = useLocation();
    const artist_id = location.state.id
    const artist_name = location.state.name
    const {spotifyAccessToken} = useSpotify()

    return (
        <div>Here are the albums!</div>
    )
}

export default Albums