import './Home.css'
import bannerImg1 from '../../Assets/Homebanner/banner.png'
import bannerImg2 from '../../Assets/Homebanner/banner2.png'
import bannerImg3 from '../../Assets/Homebanner/banner3.png'
import Banner from '../../Components/Banner/Banner';
import { AppContext } from '../../Context';
import { useContext } from 'react';
import CardContainer from '../../Components/Card/CardContainer'
import posterImg1 from '../../Assets/home_img_1.png'
import posterImg2 from '../../Assets/home_img_2.png'
import { Link } from 'react-router-dom';
import jumpman from '../../Assets/jumpman.png'
import jordan from '../../Assets/jordan.png'

const Home = () => {

  const { popularProducts, umcomingProducts } = useContext(AppContext);

  return (
    <>
      <div className='home-container'>
        <div className="banner">
          <Banner bannerimg1={bannerImg1} bannerimg2={bannerImg2} bannerimg3={bannerImg3} />
        </div>
        <section className="popular">
          <h2 className='home-heading'>&#9868; Popular</h2>
          <CardContainer products={popularProducts} width="100%" />
        </section>
        <section className="upcoming">
          <h2 className='home-heading'>&#9868; Upcoming</h2>
          <CardContainer products={umcomingProducts} width="100%" />
        </section>
        <section className="poster">
          <figure>
            <Link to="/search"> <img src={posterImg1} alt="posterImg1" /></Link>
          </figure>
          <figure>
            <Link to="/search"> <img src={posterImg2} alt="posterImg2" /></Link>
          </figure>
        </section>
        <section className="jumpman poster-2">
          <Link to="/search"> <img src={jumpman} alt="jumpman shoe" width={"100%"} /> </Link>
        </section>
        <section className="jordan poster-2">
          <Link to="/search"> <img src={jordan} alt="jordan shoe" width={"100%"} /> </Link>
        </section>
      </div>
    </>
  )
}

export default Home