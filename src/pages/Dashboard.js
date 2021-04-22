import BestSellerSection from '../components/BestSellerSection';
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import PromotionalSection from '../components/PromotionalSection';
import Footer from '../components/Footer';
import ProductCategorySection from '../components/ProductCategorySection';
import Search from "../components/Search";
import { useState } from 'react';
export const Dashboard = () => {

    //const [username, setUsername] = useState("")

    return (
      
        <div className="dashboard"  >
             
        <Header />

        <div >
            <NavigationBar />
        </div>
        <h2 style={{backgroundColor: "#9dc1ce"}}>Welcome Priya </h2>
        <div>
            <PromotionalSection />
         <h2 >Welcome Priya </h2>

        </div>

                <div>
            <Footer />

        </div>

    </div>
    )
}
