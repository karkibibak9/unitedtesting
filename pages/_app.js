import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';
import { Fragment } from 'react';
import Footer from '../components/footer';
import "../node_modules/react-bootstrap"
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
      Strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-350HGSVJXR" 
      />
<Script id="google-anlytics" Strategy="afterInteractive" >
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-350HGSVJXR');
  `}
</Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MessengerCustomerChat
        pageId= "101432741791780"
        appId= "4818713644884190"
        themeColor= '#ffafbd'
        // htmlRef="<REF_STRING>"
      />
    </Fragment>
  )
}

export default MyApp
