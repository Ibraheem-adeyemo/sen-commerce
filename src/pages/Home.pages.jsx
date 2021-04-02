import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/product-components/Categories';
import Products from '../components/product-components/Products';
import NewsLetter from '../components/product-components/NewsLetter';

const HomePages = () => {
    return (
        <div>
           <Slider />
           <Categories />
           <Products />
           <NewsLetter />
        </div>
    )
}

export default HomePages
