
import './App.css'
import './pages/searchpage'
import Searchpage from './pages/searchpage'
import Vanitybg from './components/vanitybg'
import { useState } from 'react';
import SearchBar from './components/searchbar';

function App() {

   const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="  overflow-hidden">
     <div>
        <h1 className="text-6xl Font pb-6" 
            style={{
            fontFamily: "Honk",
            fontVariationSettings: `"MORF" 25, "SHLN" 60`,
             }}
        >WatchBatman</h1>
       
      </div>
     
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for items..."
      />
       <div className='w-screen-1/2 h-1 overflow-y-auto scrollbar-hide'>
        <Searchpage searchTerm={searchTerm} />
      </div>
    
    <Vanitybg></Vanitybg> 
     
    </div>
  )
}

export default App
