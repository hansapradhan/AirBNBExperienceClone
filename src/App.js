import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import ExperienceData from './data';
import AllExperienceData from './DataAllExperiences';
import Footer from './Components/Footer/Footer';
import Filter from './Components/Filter/Filter';

// {...item}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
  const Cardlist = ExperienceData.map((item) => {
    return (<Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />)
  })

  const AllExperiencesCardlist = AllExperienceData.map((item) => {
    return (<Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />)
  })
function App() {

  return (
    <div>
    <Navbar />
    <Filter />
    <Hero /> 
    <h2>Happening today</h2>
    <section className="cards-list">
        
        {Cardlist}
    </section>
    <h2>All Experiences</h2>
    <section className="cards-list">
        
        {AllExperiencesCardlist}
    </section>
    <Footer/>
    
    </div>
  );
}

export default App;
