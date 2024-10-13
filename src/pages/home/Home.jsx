import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import Map from "./map/Map";
import CustomIdea from "./customIdea/CustomIdea";
import NewsLetterSign from "./newsLetter/NewsLetterSign";
import FeaturedRooms from "./featuredRooms/FeaturedRooms";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
            {/* <Craft></Craft> */}
            <FeaturedRooms></FeaturedRooms>
         
            <Map></Map>
            <NewsLetterSign></NewsLetterSign>
            <CustomIdea></CustomIdea>
        </div>
    );
};

export default Home;