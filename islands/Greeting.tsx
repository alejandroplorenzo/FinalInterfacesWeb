import { useEffect, useState } from "preact/hooks";

type character = {
  id: string;
  house: string;
  name: string;
  alive: boolean;
  image: string;
}

const Greeting = () => {
    const [favorites, setFavorites] = useState<string>();

    const handleFavorites= (characters: string)=> {
        setFavorites(characters);
        const date = new Date();
        const expires = date.getTime() + (365 * 24 * 60 * 60 * 1000);
        document.cookie = `favorites=${favorites}; path=/; expires=${new Date(expires).toUTCString()} `;
    }

    useEffect(() => {
        const cookies = document.cookie.split(";");
        const favoriteCookie = cookies.find((row) => row.startsWith("favorites="));
        if(favoriteCookie){
            const favoriteValue = favoriteCookie.split("=")[1];
            setFavorites(favoriteValue);
        }
    })

    return(
        <div>
            
        </div>
    )
}
export default Greeting;