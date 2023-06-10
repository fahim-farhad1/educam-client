import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../Popular-Classes/PopularClasses';
import Container from '../../../Components/Shared/Container';
import PopularInstructors from '../Popular-Instructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Container><Banner></Banner></Container>
            <PopularClasses></PopularClasses>
            <Container><PopularInstructors /></Container>
        </div>
    );
};

export default Home;