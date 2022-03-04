import style from './aboutus.module.scss'
const AboutUs = () => {
  
    return ( 
        <div>
         <article className={style.article} id="randonnes-downwind">
  <img className={style.herrro} src="./img/aboutGfs.gif" alt="" />
  <div className={style.txt}>
    <h2>Welcome To Hotel United Inn.</h2>
    <p>The Hotel United Inn. is located near Lalbandi.
It has become one of the most beautiful hotels in the area, with one of the most privileged panoramic views of Lalbandi.
A 2019 renovation brought all rooms and services up to modern-day scratch and Guestrooms come
equipped with free Wi-Fi and all the usual amenities required for a comfortable stay.</p>
  </div>
</article>
        </div>
          );
}
 
export default AboutUs;