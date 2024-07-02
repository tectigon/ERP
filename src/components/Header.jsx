import React from 'react';
import './header.css';

import profileImg from ".././assets/profile.jpg"


function Header() {
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <>
            <header id='header' className='header fixed-top d-flex align-items-center ' >
                {/* logo */}
                <a href="" className='logo d-flex align-items-center'>
                    <span className=''> ERP</span>
                </a>

                <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSidebar}>

                </i>



                {/* searchbar */}

                <div className="serch-bar">
                    <form action="#" className='search-form d-flex align-items-center ' method='POST'  >
                        <input type="text " name='query' placeholder='Search' title='Serch Here' />
                        <button type='submit' title='Search'>
                            <i className='bi bi-search'></i>
                        </button>
                    </form>
                </div>


                {/* profile */}
                <div className='profile-img'>
                    <li className='nav-item dropdown pe-3'>
                        <a href="#" className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle="dropdown">
                            <img src={profileImg} alt="profile" className='rounded-circle' />
                            <span className='d-none d-md-block profileName ps-2'>John</span>
                        </a>


                    </li>
                </div>
            </header>

        </>
    );
}


export default Header
