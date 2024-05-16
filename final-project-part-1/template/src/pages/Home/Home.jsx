import Banner2 from "../../components/Banner2/Banner2";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Banner2></Banner2>
      </section>
      
    </div>
  );
};

export default Home;