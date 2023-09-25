import React, { useContext } from 'react'
import logo from '../../Assets/logo.png'
import './Navbar.css'
import { AppContext } from '../../Context'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';


const Navbar = () => {

    const { setKeyWords, checkSearch } = useContext(AppContext);
    const history = useNavigate();


    let openMenu = () => {
        document.getElementById("sidemenuid").classList.add("sidemenuphone");
    }
    let closeMenu = () => {
        document.getElementById("sidemenuid").classList.remove("sidemenuphone");;
    }

    let handleChange = (e) => {
        setKeyWords(e.target.value);
    }

    let handleEnter =(e)=>{
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission behavior
            const searchQuery = e.target.value;
            history(`/search?query=${searchQuery}`);
            console.log("before checkSearch");
            checkSearch();
            console.log("After checkSearch");
          }
          
    }

    return (
        <>
            <header className="header">
                <div className="header-wrap pt-2">
                    <div className="nav-container">
                        <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                            <div className="navbar-brand ">
                                <Link to="/">
                                    <img className="white-logo" src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="search-div d-md-flex d-none">
                                <div className='search-link'>
                                    <input onKeyDown={handleEnter} onChange={handleChange} type="text" name="" id="searchInput" placeholder="What are you looking for?" />
                                </div>
                                <Link to='/search'>
                                <button onClick={checkSearch} >
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                                </Link>
                            </div>
                            <button className="menu-btn d-lg-none d-block" onClick={openMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item  ">
                                        <a className="nav-link active" href="/">Home </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/about-us">About Us </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/our-team">Our Team </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/trailers">Trailers </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/contact">Contact </a>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="sidemenu p-0" id="sidemenuid">
                <div className="sidemenu-top-div">
                    <div>
                        <img className="sidemenu-logo" src={logo} alt="" />
                    </div>
                    <button className='close-btn' id="closemenu" onClick={closeMenu}>
                        <svg className="sidemenu-cross" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                    </button>
                </div>
                <div className="sidemenu-list-div">
                    <ul className="sidemenu-list">
                        <li className="sidemenu-li">
                            <a className="sidemenu-item active-link" href="/">Home</a>
                        </li>
                        <li className="sidemenu-li">
                            <a className="sidemenu-item" href="/about-us">About Us</a>
                        </li>
                        <li className="sidemenu-li">
                            <a className="sidemenu-item" href="/our-team">Our Team</a>
                        </li>
                        <li className="sidemenu-li">
                            <a className="sidemenu-item" href="/trailers">Trailers</a>
                        </li>
                        <li className="sidemenu-li">
                            <a className="sidemenu-item" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>


    )
}

export default Navbar