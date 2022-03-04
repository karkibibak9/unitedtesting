import React, { Fragment } from 'react'
import AboutUs from '../components/aboutus';
import Facilty from '../components/faculty';
import PageHeader from '../components/pageHeader';

const About = () => {
    return (
        <Fragment>
            <PageHeader title={'About Us'} />
            <section>
                <AboutUs/>
            <Facilty/> 
            </section>
        </Fragment>
    )
}

export default About;
