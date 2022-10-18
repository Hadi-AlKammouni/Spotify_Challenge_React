import React, { useState } from "react";

export const SpotifyContext = React.createContext();

const SpotifyProvider = ({children}) => {
    
    const [spotifyAccessToken, setSpotifyAccessToken] = useState('')
    const [lastSearch, setLastSearch] = useState('')

    return (
        <SpotifyContext.Provider value={{spotifyAccessToken, setSpotifyAccessToken, lastSearch, setLastSearch}}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyProvider;

export const useSpotify = () => {
    const {spotifyAccessToken, setSpotifyAccessToken, lastSearch, setLastSearch} = React.useContext(SpotifyContext)
    return {spotifyAccessToken, setSpotifyAccessToken, lastSearch, setLastSearch}
}