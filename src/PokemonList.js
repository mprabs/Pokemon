import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';
import Pagination from './Pagination';
import Spinner from "./helper/spinner"


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [ currentPageUrl, setCurrentPageUrl ] = useState(["https://pokeapi.co/api/v2/pokemon"])
  const [ nextPageUrl, setNextPageUrl ] = useState([])
  const [ prevPageUrl, setPrevPageUrl ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(response => {
        localStorage.clear()
        setLoading(false)
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
        setPokemon(response.data.results.map(p => p.name))
    }).catch(err => {

    })

    return() => cancel();
  }, [currentPageUrl])
  

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if(loading) return(
      <Spinner />
  )

  function handleClick(value) {
      this.props.onHandleClick(value)
  }

  return (
    <div className="text-center">
      <Pagination 
        goToNextPage = { nextPageUrl ? goToNextPage : null }
        goToPrevPage= { prevPageUrl ? goToPrevPage : null} 
      />
      <Pokemon pokemon={pokemon} onHandleClick={handleClick} currentPageUrl={currentPageUrl} />
    </div>
  );
}

export default App;
