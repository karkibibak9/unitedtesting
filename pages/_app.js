import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';
import { Fragment } from 'react';
import Footer from '../components/footer';
import "../node_modules/react-bootstrap"
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MessengerCustomerChat
        pageId= "101432741791780"
        // pageId={process.env.FB_PAGE_ID}
        appId= "4818713644884190"
        themeColor= '#ffafbd'
        // htmlRef="<REF_STRING>"
      />
    </Fragment>
  )
}

export default MyApp
