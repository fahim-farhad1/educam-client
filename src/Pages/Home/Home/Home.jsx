import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../Popular-Classes/PopularClasses';
import Container from '../../../Components/Shared/Container';
import PopularInstructors from '../Popular-Instructors/PopularInstructors';
import Footer from '../../../Components/Shared/Footer';

const Home = () => {
    return (
        <div>
            <Container><Banner></Banner></Container>
            <PopularClasses></PopularClasses>
            <Container><PopularInstructors /></Container>
            <h1 className='text-center text-7xl font-bold text-green-600'>To Do:------- add extra section</h1>
        </div>
    );
};

export default Home;