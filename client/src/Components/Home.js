import React, {useEffect, useRef, useState} from 'react'

export default function Home(props) {

        
        const [search, setSearch ] = useState()
        const [searchResults, setSearchResults] = useState(); 
        const [favorites, setFavorites] = useState()

        useEffect(() => {
            const getFavorites = async() => {
                await fetch(`http://localhost:5000/favorites/${props.id}`)
                .then((res) => res.json())
                .then((data) => setFavorites(data))
            }

            getFavorites()
        }, [searchResults])
        
    const submitSearch = async (e) => {
        e.preventDefault(); 
        await fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(search)
        })
        .then(res => res.json())
        .then(data => setSearchResults(data.message.data))
    }

    const sendToFav = async(src) => {
        
        await fetch('http://localhost:5000/addToFav', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: src,
                id: props.id
            })
        })
    }

    return (
        <>
        <form onSubmit={submitSearch}>
        <label>Search</label>
        <input onChange={(e) => setSearch({search: e.target.value})} className="border border-black"/>
        <button type='submit'>Go</button>
        </form>
        <div className='flex flex-wrap'>
        {searchResults ? (
            searchResults.map((result) => (
            
                <div className='flex flex-col'>
                <img  src={result.images.fixed_height.url} alt='test' />
                <button onClick={()=>sendToFav(result.images.fixed_height.url)}>Add to favorites</button>
                </div>
            ))
        ): ""}</div>

        <div className='flex flex-wrap mt-10'>
        <h1 className='mx-auto'>Favorites</h1>
       
                {favorites ? (
                    favorites.map((fav) => (
                        <div className='mx-auto'>
                        <img src={fav.url} />
                        </div>
                    ))
                ):''}</div>
        
        </>
    )
}