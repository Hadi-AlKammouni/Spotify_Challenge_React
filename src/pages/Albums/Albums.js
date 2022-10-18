import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSpotify } from "../../context/spotify";

const Albums = () => {

    const location = useLocation();
    const artist_id = location.state.id
    const artist_name = location.state.name
    const {spotifyAccessToken} = useSpotify()

    // Getting an artist's albums 
    const getArtistAlbums = async (artist_id, spotifyAccessToken) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums`,{
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${spotifyAccessToken}`
            }
            })
            .then (response => response.json())
            .then(data => {
                console.log(data)
            });
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getArtistAlbums(artist_id,spotifyAccessToken)
        console.log(artist_id)
        console.log(spotifyAccessToken)
    },[])

    return (
        <div>Here are the albums!</div>
    )
}

export default Albums