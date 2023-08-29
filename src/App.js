import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Data from './data';

function App() {
  const cards = Data.map(item => {
    return (
      <Cards 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
        <div className='cards-list'>
          {cards}
        </div>
      <Footer />
    </div>
    
  )
}

export default App;
