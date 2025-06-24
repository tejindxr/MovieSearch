import React, { useEffect, useState } from 'react'

const Searchpage = ({ searchTerm }) => {

  const [movie , setmovie] = useState([]);
  const [loading , setloading] = useState(false);

 // const API_KEY = "53b373cf"
  const API_KEY = "8541a53b"

  useEffect (()=>{

    if(searchTerm.trim() === "")return;
    
    const fetchmovie = async ()=> {
      setloading(true);
      try{
          const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
          const data = await response.json();

          setmovie(data.Search || []);

      }
      catch(err){
        console.error("Error fetching movies", err);
        setmovie([]);
      }
       finally {
        setloading(false);
      }
    };
     
    fetchmovie();

  } , [searchTerm]);


  return (
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 px-4">
      {loading && <p className="text-white text-xl col-span-full">Loading...</p>}


      {!loading && movie.length === 0 && searchTerm && (
        <p className="text-white col-span-full text-center">No movies found.</p>
      )}

      
      {movie.map((movie)=> (
           <div 
          //    key={movie.imdbID}
          className="bg-black opacity-85 rounded-lg shadow p-2 text-center">

            <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={movie.Title}
            className="w-full h-64 object-cover rounded"
          />

          <h3 className="mt-2 text-amber-100 text-lg font-semibold">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
              

          </div>
      ))}
       
    </div>
  );
};

export default Searchpage;




