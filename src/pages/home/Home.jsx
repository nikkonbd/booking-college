import React from 'react';
import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';
import Programs from '../../components/program/Programs';
import Events from '../../components/events/Events';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Programs />
            <Events></Events>
        </div>
    );
};

export default Home;