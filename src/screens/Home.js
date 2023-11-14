import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Divider from '../components/Divider';
import Categories from '../components/Categories';
import TrendingDishes from '../components/TrendingDishes';
import Locations from '../components/Locations';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <div><Header /></div>
            <div><Banner /></div>
            <div><About /></div>
            <div><Divider /></div>
            <div><Categories /></div>
            <div><TrendingDishes /></div>
            <div><Locations /></div>
            <div><Footer /></div>
        </div>
    )
}
