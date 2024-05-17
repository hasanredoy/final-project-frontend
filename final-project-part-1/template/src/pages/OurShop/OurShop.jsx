import Cover from "../../components/cover/Cover";
import banner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllMenu from "../../CustomCompo/AllMenu";
import Card from "../../CustomCompo/Card";

const OurShop = () => {
  const drinks = AllMenu('drinks')
  const dessert = AllMenu('dessert')
  const soup = AllMenu('soup')
  const pizza = AllMenu('pizza')
  const salad = AllMenu('salad')

  return (
    <div>
      <div>
        <Cover
          img={banner}
          title={"our shop"}
          desc={"Would You Like To Take a Dish?"}
          h={"h-[600px]"}
        ></Cover>
      </div>

      {/* tabs  */}

      <div>
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Pizza</Tab>
            <Tab>Drinks</Tab>
          </TabList>

{/* salad */}
          <TabPanel>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              salad?.map((salad,index) =><Card index={index} key={salad._id} item={salad}></Card>)
            }
           </div>
          </TabPanel>
          {/* soup */}
          <TabPanel>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              soup?.map((salad,index) =><Card index={index} key={salad._id} item={salad}></Card>)
            }
           </div>
          </TabPanel>
          {/* dessert */}
          <TabPanel>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              dessert?.map((salad,index) =><Card index={index} key={salad._id} item={salad}></Card>)
            }
           </div>
          </TabPanel>
          {/* pizza  */}
          <TabPanel>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              pizza?.map((salad,index) =><Card index={index} key={salad._id} item={salad}></Card>)
            }
           </div>
          </TabPanel>
          {/* drinks  */}
          <TabPanel>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              drinks?.map((salad,index) =><Card index={index} key={salad._id} item={salad}></Card>)
            }
           </div>
          </TabPanel>
         
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
