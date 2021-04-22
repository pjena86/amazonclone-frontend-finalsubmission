import BestSellerSection from '../components/BestSellerSection';
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import PromotionalSection from '../components/PromotionalSection';
import Footer from '../components/Footer';
import ProductCategorySection from '../components/ProductCategorySection';
import Search from "../components/Search";

function Home() {


    return (

        <div className="home"  >
            <Header />

            <div >
                <NavigationBar />
            </div>
            <div>
                <PromotionalSection />
            </div>

            <div ><ProductCategorySection /></div>

            {/* <div><Search /></div> */}

            <div>

                <BestSellerSection />
            </div>
            <div>
                <Footer />

            </div>

        </div>


    )
}

export default Home
