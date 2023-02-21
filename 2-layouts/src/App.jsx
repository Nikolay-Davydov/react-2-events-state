import { useState } from 'react'
import './App.css'
import CardsView from './components/CradsView'
import IconSwitch from './components/IconSwitch'
import ListView from './components/ListView'

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function App() {
  let [icon, setIcon] = useState('ViewModule');
  let select = () =>{
    if (icon == 'ViewModule') {      
      return 'ViewList'
    } else {      
      return 'ViewModule'
    }
  }
  
  if (icon == 'ViewModule'){
    return (
      <div className="App">
        <IconSwitch icon={icon} onSwitch={() => setIcon(select) }/>
        <div className="Listview">< CardsView ShopCard={products}/></div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <IconSwitch icon={icon} onSwitch={() => setIcon(select)}/>
        <div className="Listview"><ListView items={products}/></div>
      </div>
    );
  }  
}

export default App
