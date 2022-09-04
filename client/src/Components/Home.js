import React, { useEffect, useRef, useState } from "react";

import empty_star from "../imgs/empty_star.png";
import gold_star from "../imgs/gold_star.png";

export default function Home(props) {
  const [SearchModal, setSearchModal] = useState(false);
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState();
  const [favorites, setFavorites] = useState();
  const [update, setUpdate] = useState();
  const [comment, setComment] = useState()

  useEffect(() => {
    const getFavorites = async () => {
      await fetch(`http://localhost:5000/favorites/${props.id}`)
        .then((res) => res.json())
        .then((data) => setFavorites(data));
    };
    setUpdate(false);

    getFavorites();
  }, [searchResults, update]);

  const submitSearch = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data.message.data));
  };

  const sendToFav = async (src) => {
    await fetch("http://localhost:5000/addToFav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: src,
        id: props.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setUpdate(true);
      }
    });
  };

  // set rating to server
  const sendRating = async (id, count) => {
    await fetch(`http://localhost:5000/favGifRating/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: count }),
    }).then((res) => {
      if (res.status === 200) {
        setUpdate(true);
      }
    });
  };

  // Loop function to add gold or blank stars for rating each gif
  function rating(rate, id) {
    const stars = [];

    // loop to add gold rated stars
    for (let i = 1; i <= rate; i++) {
      stars.push(
        <img
          onClick={() => {
            sendRating(id, i);
          }}
          src={gold_star}
          id={i}
          className="ml-2 h-10 hover:h-14"
        />
      );
    }

    // loop to add remaining unrated blank stars
    for (let i = 1; i <= 5 - rate; i++) {
      stars.push(
        <img
          onClick={() => {
            let r = i + rate;
            sendRating(id, r);
          }}
          src={empty_star}
          className="ml-2 h-10 hover:h-14"
        />
      );
    }
    return stars;
  }

  // Update comment on database
  const sendComment = async(e) => {
    e.preventDefault()
    
    await fetch(`http://localhost:5000/favGifRating/${comment.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment.comment})
    }).then((res) => {
      if(res.status === 200){
        setUpdate(true)
      }
    })
  }

  // Delete Gif from database

  const deleteGif = async(id) => {
    
    await fetch(`http://localhost:5000/deleteGif/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if(res.status === 200){
        setUpdate(true)
      }
    })
  }

  return (
    <>

    {/* ======SEARCH MODAL======= */}
  
      <button className="mx-auto bg-red-300 p-2 rounded-xl mt-5 text-2xl font-bold" onClick={() => setSearchModal(true)}>Search Gifs</button>
      {SearchModal ? (
        <>
          <div className="justify-center i-center flex overflow-auto mt-5 fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button className="" onClick={() => setSearchModal(false)}>
                    <span className="text-slate-500 text-4xl">×</span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={submitSearch}>
                  <label>Search</label>
                  <input
                    onChange={(e) => setSearch({ search: e.target.value })}
                    className="border border-black"
                  />
                  <button type="submit">Go</button>
                </form>
                <button onClick={() => setSearchResults()}>Clear Search</button>
                <div className="flex flex-wrap">
                  {searchResults
                    ? searchResults.map((result) => (
                        <div className="flex flex-col">
                          <img
                            src={result.images.fixed_height.url}
                            alt="test"
                          />
                          <button
                            onClick={() =>
                              sendToFav(result.images.fixed_height.url)
                            }
                          >
                            Add to favorites
                          </button>
                        </div>
                      ))
                    : ""}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setSearchModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}


        {/* =====FAVORITES=========== */}
      <div className="flex">
        <h1 className="mx-auto text-4xl  mt-5">Favorites</h1>
      </div>
      <div className="md:grid md:grid-cols-4 mt-10">

        {
          
            favorites ? (
              
                   favorites.length > 0
          ? favorites.map((fav) => (
              <div className="mx-auto">
             
                <form onSubmit={sendComment} className="flex flex-col">
                  <img className=" max-h-72" src={fav.url} />

                  <div className="flex flex-row">
                    <h1 className="my-auto text-2xl">Rating:</h1>
                    {/* Function called above to get rating from database */}
                    {rating(fav.rating, fav.id)}
                  </div> 
                  <div className="flex flex-row mt-5 ">
                  <h1 className="my-auto text-2xl">Comment:</h1>
                  <h1 className=" font-serif text-xl ml-2 underline">{fav.comment}</h1>
                  </div>
 <button className="bg-red-400 p-2 w-fit rounded " onClick={() => deleteGif(fav.id)}>Delete Gif</button>
                  <label className="mx-auto mt-2">Change Comment:</label>
                  <input className="border border-black mx-auto h-20" onChange={(e) => setComment({comment: e.target.value, id: fav.id})} type="textarea" />
                  <button className="bg-red-400 p-2 rounded w-fit mx-auto mt-2 mb-5 " type="submit">Send Comment</button>
                  
                </form>
              </div>
            ))
          : 
          <div className="flex w-screen">
          <h1 className="mx-auto text-2xl font-bold">Please click "Search Gifs" to start adding to favorites</h1>
          </div>

            ) : ""}
          
          
          
      </div>
    </>
  );
}
