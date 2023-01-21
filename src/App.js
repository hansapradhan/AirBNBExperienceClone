import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import ExperienceData from './data';
import Footer from './Components/Footer/Footer';
/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
  const Cardlist = ExperienceData.map((item) => {
    //  <Card img ={data.coverImg} rating = {data.stat.rating} reviewCount= {data.stat.reviewCount} country={data.location} title={data.title} price={data.price}/>
    return (<Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />)
  })
function App() {

  return (
    <div>
    <Navbar />
    <Hero /> 
    <section className="cards-list">
        {Cardlist}
    </section>

    <Footer/>
    
    </div>
  );
}

export default App;
