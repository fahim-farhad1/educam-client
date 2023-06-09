import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../Popular-Classes/PopularClasses';
import Container from '../../../Components/Shared/Container';

const Home = () => {
    return (
        <div>
            <Container><Banner></Banner></Container>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;