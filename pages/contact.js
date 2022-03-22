import PageHeader from "../components/pageHeader";
import Facilty from "../components/faculty";
// import ContactForm from "../components/contactForm";
import StaticForm from "../components/staticForm";
import {Fragment} from 'react';


const Contact = () => {
    return ( 
        <Fragment>
             <PageHeader title={'Contact Us!'} bgclass={'page_header_bg_rooms'} >
                
            </PageHeader>
        <section>
        <StaticForm/>
        {/* <ContactForm /> */}
        <Facilty />
        </section>
        </Fragment>
     );
}
 
export default Contact;