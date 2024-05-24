import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProfilePage() {
    const { id } = useParams();
    const [pokemon,setPokemon] = useState({});
    const [hasError,setHasError] = useState(false);

    useEffect(() => {
        const getPokeInfo = async () => {
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`
            try {
                let res = await axios.get(url);
                let name = res.data.name;            
                let gifURL = `https://projectpokemon.org/images/normal-sprite/${name}.gif`            
                setPokemon({
                    name: name,
                    image: gifURL,
                })
            } catch (err) {
                setHasError(true);
            }
        }
        getPokeInfo();

    },[])

    if (hasError) {
        return (
            <div>
                We were unable to find info for {id}
            </div>
        )
    }

    return (
        <div style={{border: 'solid red 2px'}}>
            <h2>Profile: {pokemon.name}</h2>
            <img src={pokemon.image} alt="" />
        </div>
    )
}

export default ProfilePage

