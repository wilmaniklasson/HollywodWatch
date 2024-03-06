
import './App.css'
import './card.css'
import CreateCard from './card'

function App() {
  

  return (
    <>
    <header> 
      <h1>Hollywod watch</h1>
    </header>
    <main>
      <section>
        <div>
          <input className='Search' type="text" placeholder="Search for a movie"/>
        </div>
      </section>
      <section>
      <CreateCard titel={"The Godfather"} year={'(1972)'} imageURL="/public/TheGodfather.jpeg"/>
      <CreateCard titel={"Titanic"} year={'(1997)'} imageURL="/public/Titanic.jpg"/>
      <CreateCard titel={"The Dark Knight"} year={'(2008)'} imageURL="/public/TheDarkKnight.webp"/>
      <CreateCard titel={"Inception"} year={'(2010)'} imageURL="/public/Inception.jpg"/>
      <CreateCard titel={"The Shawshank Redemption"} year={' (1994)'} imageURL="/public/TheShawshankRedemption.jpg"/>
      <CreateCard titel={"Forrest Gump"} year={'(1994)'}imageURL="/public/ForrestGump.jpeg"/>
      </section>
      
      
    </main>

     
    </>
  )
}

export default App
