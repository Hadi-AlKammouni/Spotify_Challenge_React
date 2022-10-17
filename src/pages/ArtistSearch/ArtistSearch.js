import { useState, useEffect } from "react";

import './styles.css'

const ArtistSearch = () => {

    // Initialize Input State
    const [artistSearch, setArtistSearch] = useState(null);
    const [accessToken, setAccessToken] = useState("");
    const [isArtist, setIsArtist] = useState(false);
    const [artistsData, setArtistsData] = useState(null);

    // Function to separate the query parameter and its value from the response url
    const getReturnedParams = (hash) => {
        const string_after = hash.substring(1)
        const params_in_url = string_after.split("&")
        const paramsSplit = params_in_url.reduce((accumulater, current_value) => {
            // console.log(current_value)
            const [key, value] = current_value.split("=")
            accumulater[key] = value
            return accumulater
        }, {} )
        return paramsSplit
    }

    // Calling searchForAnArtist function upon pressing the “Return” key inside the search box
    const onSearch = (e) => {
        e.preventDefault();
        searchForAnArtist(artistSearch)
    }  
    
    // Getting an artist's data 
    const searchForAnArtist = async (artist) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/search?q=artist%3A${artist}&type=artist`,{
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
            })
            .then (response => response.json())
            .then(data => {
                setIsArtist(true)
                const artists_array = Object.entries(data)
                setArtistsData(artists_array[0][1].items)
            });
        } catch (error) {
          console.error(error);
        }
    }
    
    useEffect(() => {
        if(window.location.hash) {
            const object = getReturnedParams(window.location.hash)
            setAccessToken(object.access_token)
        }
    },[artistsData])

    return (
        <>
            {!isArtist ? 
                <div className="search-container">
                    <div className='search-row'>
                    <form onSubmit={onSearch}>
                        <input 
                            type="text" 
                            placeholder="Search for an artist..." 
                            onChange={(e) => setArtistSearch(e.target.value)}
                        ></input>
                    </form>
                    </div>
                </div>
                :
                null 
            }

            {isArtist ? 
            <>
                <div className="search-container-with-artists">
                    <div className='search-row'>
                        <form onSubmit={onSearch}>
                            <input 
                                type="text" 
                                placeholder="Search for an artist..." 
                                onChange={(e) => setArtistSearch(e.target.value)}
                            ></input>
                        </form>
                    </div>
                </div>

                <div className="cards-body">
                    <div className="cards-container">
                        <div className="cards-row">
                            {artistsData?.map((artist, i) => {
                                return (
                                    <div className="card" key={i}>
                                        <img className="img" src={artist.images[1]?.url} alt="artist-image"/>
                                        <h4>{artist.name}</h4>
                                        <p>{(artist.followers.total).toLocaleString('en-US')} followers</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>    
                :
                null
            }
        </>
    )
}

export default ArtistSearch