import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SigortamNavbar.css';

function SigortamNavbar() {
  return (
    <div className='nav'>
        <div className='navbar-brand'>
            <a href='#'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg' width={26} height={27} className='goat-icon'></img>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg' width={167} height={27} className='title-logo'></img>
            </a>
        </div>

        <div className='nav-link-list h-100 d-flex justify-content-center align-items-center'>
            <ul className='nav-links d-flex p-0'>
                <li>
                    <a href='#' className='nav-link'>
                        Ürünlerimiz <span className='dropdown-logo'>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        Kampanyalar
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        Poliçe İşlemleri <span className='dropdown-logo'>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        Bilgi Merkezi <span className='dropdown-logo'>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <div className='nav-actions d-flex align-items-center'>
            <div className='action-call'>
                <a href='#' className='d-flex flex-column'>
                    <span className='phone-title'>Yardımcı olmaya hazırız</span>
                    <span className='phone-number d-flex justify-content-end'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="phone-icon">
                            <path d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        444 24 00
                    </span>
                </a>
            </div>

            <div className='login d-flex align-items-center'>
                <button className='login-btn'>
                    Giriş Yap / Üye Ol
                </button>
            </div>
        </div>
    </div>
  )
}

export default SigortamNavbar;