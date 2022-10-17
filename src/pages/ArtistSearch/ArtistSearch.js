import { useEffect } from "react"

const ArtistSearch = () => {
    
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
    
    useEffect(() => {
        if(window.location.hash) {
            const object = getReturnedParams(window.location.hash)
            console.log({ object })
        }
    },[])

    return (
        <div>Artist Search here!</div>
    )
}

export default ArtistSearch