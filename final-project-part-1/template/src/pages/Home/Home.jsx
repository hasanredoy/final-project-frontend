
import Banner2 from "../../components/Banner2/Banner2";
import CallUs from "../../components/CallUs/CallUs";
import ChefRecommend from "../../components/ChefRecommend/ChefRecommend";
import FeaturedHome from "../../components/FeaturedHome/FeaturedHome";
import OurMenu from "../../components/OurMenue/OurMenu";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Testemonilas from "../../components/testimonials/Testemonilas";
import CustomHelmet from "../../CustomCompo/CustomHelmet";

const Home = () => {
  
  return (
    <div>
       <CustomHelmet title={"Home"}></CustomHelmet>
      <section>
        <Banner></Banner>
      </section>
      
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Banner2></Banner2>
      </section>
      
      <section>
        <OurMenu></OurMenu>
      </section>
      <section>
        <CallUs></CallUs>
      </section>
      <section>
        <ChefRecommend></ChefRecommend>
      </section>
      <section>
        <FeaturedHome></FeaturedHome>
      </section>
      <section>
        <Testemonilas></Testemonilas>
      </section>
      
    </div>
  );
};

export default Home;