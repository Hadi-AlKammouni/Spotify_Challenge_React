import React, { useState } from "react";

export const SpotifyContext = React.createContext();

const SpotifyProvider = ({children}) => {
    
    const [spotifyAccessToken, setSpotifyAccessToken] = useState('')

    return (
        <SpotifyContext.Provider value={{spotifyAccessToken, setSpotifyAccessToken}}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyProvider;

export const useSpotify = () => {
    const {spotifyAccessToken, setSpotifyAccessToken} = React.useContext(SpotifyContext)
    return {spotifyAccessToken, setSpotifyAccessToken}
}