import { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSpotify } from "../../context/spotify";
import "./styles.css";

const Albums = () => {

    const location = useLocation();
    const artist_id = location.state.id
    const artist_name = location.state.name
    const {spotifyAccessToken} = useSpotify()
    const [albumsData, setAlbumsData] = useState(null);

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
                setAlbumsData(data)
            });
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getArtistAlbums(artist_id,spotifyAccessToken)
    },[])

    return (
        <>
        <h1 className="title">{artist_name}'s Albums</h1>
            <div className="albums-body">
                <div className="albums-container">
                    <div className="albums-row">
                        {albumsData?.items.map((album, i) => {
                            return (
                                <div className="album" key={i}>
                                    <img className="img" src={album.images[1]?.url} alt="artist-image"/>
                                    <h2>{album.name}</h2>
                                    {/* Displaying the artists of the album */}
                                    {album.artists.map((artist, i) => {
                                        return (<h4 key={i}>{artist.name}</h4>)
                                    })}
                                    <p>{album.release_date}</p>
                                    <p>{album.total_tracks} tracks</p>
                                    <a className="preview" href={album.external_urls.spotify}>Preview on Spotify</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Albums