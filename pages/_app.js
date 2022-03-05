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
      <Head>
        <meta name="geo.region" content="NP-JA" />
        <meta name="geo.placename" content="lalbandi" />
        <meta name="geo.position" content="27.055457504559374;85.62697981349362" />
        <meta name="ICBM" content="27.055457504559374, 85.62697981349362" />
        <meta name="keywords" content="Hotel United Inn, Hotel United, Hotel In Lalbandi, hotel in sarlahi, Hotel in janakpur, united Inn., " />
        <meta name="author" content="Deepak Balampaki" />
        <meta property="og:title" content="Hotel United Inn" />
        <meta name="description" property="og:description" content="Hotel United Inn provides Coffee Shop Bar and Restaurant Rooms Meeting Halls, The Hotel United Inn. is located in Lalbandi" />

        <title>Hotel United Inn</title>
      </Head>
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
