import { useState ,useEffect } from "react";

import './styles.css'

const ArtistSearch = () => {

    // Initialize Input State
    const [artist, setArtist] = useState(null);
    const [accessToken, setAccessToken] = useState("");
    
    // Function to separate the query parameter and its value from the response url
    const getReturnedParams = (hash) => {
        const string_after = hash.substring(1)
        const params_in_url = string_after.split("&")
        const paramsSplit = params_in_url.reduce((accumulater, current_value) => {
            console.log(current_value)
            const [key, value] = current_value.split("=")
            accumulater[key] = value
            return accumulater
        }, {} )
        return paramsSplit
    }

    // Calling searchForAnArtist function upon pressing the “Return” key inside the search box
    const onSearch = (e) => {
        e.preventDefault();
        searchForAnArtist(artist)
    }  
    
    // Getting an artist's data 
    const searchForAnArtist = async (artist) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/search?q=artist%3A${artist}&type=artist`,{
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
            }).then (response => response.json())
              .then(data=> console.log(data));
        } catch (error) {
          console.error(error);
        }
      }
    
    useEffect(() => {
        if(window.location.hash) {
            const object = getReturnedParams(window.location.hash)
            setAccessToken(object.access_token)
        }
    },[])

    return (
        <div className="container">
            <div className='row'>
            <form onSubmit={onSearch}>
                <input 
                    type="text" 
                    placeholder="Search for an artist..." 
                    onChange={(e) => setArtist(e.target.value)}
                ></input>
            </form>
            </div>
        </div>
    )
}

export default ArtistSearch