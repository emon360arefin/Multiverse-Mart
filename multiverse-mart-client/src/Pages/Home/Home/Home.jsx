import PopularShop from "../PopularShopSection/PopularShop";
import TrendingHome from "../TrendingSection/TrendingHome";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";


const Home = () => {
    return (
        <div>
                    
            <HeroSection></HeroSection>
            <CategorySection></CategorySection>
            <PopularShop></PopularShop>
            <TrendingHome></TrendingHome>
        </div>
    );
};

export default Home;