import PopularShop from "../PopularShopSection/PopularShop";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";




const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CategorySection></CategorySection>
            <PopularShop></PopularShop>

        </div>
    );
};

export default Home;