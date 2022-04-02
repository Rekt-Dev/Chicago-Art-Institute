import './App.css';
import './styles.css'
import './App.js'
import Entry from './components/Entry'
import emojipedia from './emojipedia';

export const jsonData = fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20').then(
  function(u){ return u.json();}
).then(
  function(json){
    console.log(json); 
    console.log(`this is json.data ${json.data.title}` )
  }
)
const twentyArtwork = [...jsonData.data] // here Im gonna need to figure a way to take the json and sort it and manipulate it according to the search requests, and according to your default requests, i.e. initial design requirements. p.s. this might be an object and not an array.


function PlaceData(artworkParam){
  return(<Entry 
      key={artworkParam.id}
      emoji={artworkParam.subject}
      name={artworkParam.name}
      description={artworkParam.arist}
  />
  )
}

function App() {

function searchClicked(){

  console.log("search was clicked")
}
function luckyClicked(){

  console.log("lucky was clicked")

  //randomize an artwork.

}

function PlaceData(emojiTerm){
  return(<Entry 
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
  />
  )
}




function App() {
  return (
    <div > 
          <h1>
            <span>emojipedia</span>
          </h1>
         <dl className='dictionary'> {emojipedia.map(PlaceData)}</dl>


           </div>
  ); 
}


  return (

    <div className=''> 
          <h1>
            <span>The Art Institute of Chicago 
</span>
          </h1>
<span>
<div className='bro'>

<button className="btn btn-info"onClick={searchClicked}>search</button>

<button className="btn btn-info"onClick={luckyClicked}>I'm feeling lucky</button>

</div>
</span>
{/* \\ here i am contemplating using a locally downloaded file (its a huge file)that includes all the published data by the  institute, then we can search inside of it, searches will be quicker, what r ur thoughts on this sire ? , is there an indexer to make the local searches quicker ?  */}

         <dl className='dictionary'> {jsonData.map(PlaceData)}</dl>


           </div>
  ); 
}

export default App;
