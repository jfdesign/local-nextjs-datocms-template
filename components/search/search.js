import  { useState, useEffect } from 'react';
import DatoCmsSearch from './baseSearch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Search() {

  let data = {
    results: [],
    total: 0
  }
  
  let [responseData, setResponseData] = useState(data)
  let [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    siteSearch(-1)
  }, []);

  function siteSearch(query){

    if(query == ""){
      query = -1
    }

    const client = new DatoCmsSearch(publicRuntimeConfig.API_Search, publicRuntimeConfig.Trigger_ID);
    
    client.search(query)
      .then(function(response) {
        setResponseData(response)
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  
  function handleSearch(){
    
    siteSearch(searchQuery)

  }
  
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      siteSearch(searchQuery)
    }
  }

  let displayResults = ""


  return(
    <>
      
      <div className="searchBox">
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyPress={handleKeyDown} /> <button onClick={handleSearch}>Search</button>
      </div>
      
      <div className="searchResults">
        
        {
          responseData.results.length > 0 ? 
            <ul>
              {
                responseData.results.map(function(item, i){
                  return (
                    <li key={i} style={{marginBottom: "10px"}}>
                      {item.title}<br />
                      {item.body}<br />
                      {item.url}
                    </li>
                  )
                })
              }
            </ul>
          : ""
        }
        
        Results: {responseData.total}
      </div>

    </>
  )
  

  



}