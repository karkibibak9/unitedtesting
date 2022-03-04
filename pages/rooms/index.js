import React, { Fragment } from 'react'
import PageHeader from '../../components/pageHeader';
import Room from '../../components/room';

const RoomsPage = () => {
    return (
        <Fragment>
            <PageHeader title={'Our Accommodations'} bgclass={'page_header_bg_rooms'} >
                
            </PageHeader>
            <section>
            <Room/>
            </section>
        </Fragment>
    )
}

export default RoomsPage;
