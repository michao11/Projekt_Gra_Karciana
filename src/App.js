import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardComponent from './CardComponent'
import CardAdd from './CardAdd'
import NavBar from './NavBar';

function App() {
  /*
  const [deck, setDeck] = useState([])

  useEffect(() => {fillDeck()}, [])

  const fillDeck = () => {
    let newDeck = []
    const card1 = {
      Name : "Laser Turret",
      Type : "Item",
      Description : "Spawns a turret that shoots piercing bullets dealing 20 (125%) damage",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/laserturret.png"
    }

    const card2 = {
      Name : "Baby Gecko",
      Type : "Special (5)",
      Description : "+20% to instantly attract a material when it's dropped",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/chameleon.png"
    }

    const card3 = {
      Name : "Bandana",
      Type : "Item",
      Description : "Projectiles pierce through 1 additional target",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/bandana.png"
    }

    const card4 = {
      Name : "Giant Belt",
      Type : "Unique",
      Description : "Critical hits deal 10% of an enemy's current health as bonus damage (1% for bosses and elites)",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/giantbelt.png"
    }

    const card5 = {
      Name : "Clover",
      Type : "Item",
      Description : "+ 20 luck",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/clover.png"
    }
    
    const card6 = {
      Name : "Cute Monkey",
      Type : "Limited (10)",
      Description : "+8% chance to heal 1 HP when picking up a material",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/cutemonkey.png"
    }

    const card7 = {
      Name : "Fairy",
      Type : "Unique",
      Description : "+1 HP Regeneration for every different Tier I Item you have",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/fairy.png"
    }

    const card8 = {
      Name : "Weird Food",
      Type : "Item",
      Description : "+ 2 HP recovered from consumables",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/weirdfood.png"
    }

    const card9 = {
      Name : "Tree",
      Type : "Item",
      Description : "More trees spawn",
      ImageURL : "https://tiermaker.com/images/template_images/2022/16013760/brotato-items-16013760/tree.png"
    }

    newDeck.push(card1)
    newDeck.push(card2)
    newDeck.push(card3)
    newDeck.push(card4)
    newDeck.push(card5)
    newDeck.push(card6)
    newDeck.push(card7)
    newDeck.push(card8)
    newDeck.push(card9)
    setDeck(newDeck)
  }
  */
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<CardComponent/>}/>
          <Route path='/add-card' element={<CardAdd/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
