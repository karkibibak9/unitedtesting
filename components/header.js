import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {
    const [show, setShow] = useState(false);
    const navRef = useRef();
 
    const select = (el, all = false) => {
        el = el.trim()
        if (process.browser) {
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    let navbarlinks = select('.primary-nav a', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY;
            if (scrollCheck > 450) {
                navRef.current.classList.add('scrolled')
            } else {
                navRef.current.classList.remove('scrolled')
                // document.querySelector(".navbar").className = "navbar navbar-expand-lg fixed-top";
            }
        })
        window.addEventListener('load', navbarlinksActive, { passive: true })
        onscroll(document, navbarlinksActive)
    }, [])

    const toggleNav = () => {
        navRef.current.classList.toggle('active')
        setShow(!show)

    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top" ref={navRef}>
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <i className="fas fa-seedling"></i>
                        <span className="ml-3 font-weight-bold">Hotel United Inn.</span>
                    </a>
                    {/* <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className={show ? 'menuIcon toggle ' : 'menuIcon'} onClick={toggleNav}>
                        <span className="icon icon-bars" ></span>
                        <span className="icon icon-bars overlay"></span>
                    </div>



                    <div className={show ? "collapse show navbar-collapse justify-content-around" : "collapse navbar-collapse justify-content-around"} id="navbar4">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <NavItem onClick={()=>setShow(false)} link='/' title='Home' />
                            <NavItem onClick={()=>setShow(false)} link='/rooms' title='Rooms' />
                            <NavItem onClick={()=>setShow(false)} link='/about' title='About' />
                            <NavItem onClick={()=>setShow(false)} link='/gallery' title='Gallery' />
                            <NavItem onClick={()=>setShow(false)} link='/contact' title='Contact' />
                        </ul>
                        <div className="navbar-social ml-auto my-3 my-lg-0">
                            <a className="px-2" href="https://www.facebook.com/Hotel-United-Inn-101432741791780">
                                <i className="text-primary fab fa-facebook"></i>
                            </a>
                            <a className="px-2" href="https://www.instagram.com/hotelunitedinn/">
                                <i className="text-danger fab fa-instagram"></i>
                            </a>
                        </div>
                        
                    </div>

                </div>
            </nav>




        </header>
    )
}

function NavItem(props) {
    const router = useRouter();

    return (
        <li className="nav-item px-2" onClick={props.onClick}>
            <Link href={props.link} passHref >
                <a className={router.pathname === props.link ? "active nav-link" : "nav-link "} >
                    {props.title}
                </a>
            </Link>
        </li>
    )
}

export default Header;
