import Categories from "../components/Home/Categories";
import FlashSale from "../components/Home/FlashSale";
import Header from "../components/Home/Header";
import WhatWeOffer from "../components/Home/WhatWeOffer";
const Home = () => {
    return (
        <div className="bg-[#EDEDED] pb-[70px]">
            <Header />
            <WhatWeOffer />
            <FlashSale />
            <Categories />
        </div>
    );
};

export default Home;