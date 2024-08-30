import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SigortamFooter.css';
import { Container } from 'reactstrap';

function SigortamFooter() {
  const [year, setYear] = useState(0);
  const [activeNav, setActiveNav] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = (id) => {
    setActiveNav((prev) => (prev === id ? null : id));
  }

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());

    function handleResize(){
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer>
      <Container className='upper-footer'>
        <div className='footer-banner d-flex flex-row justify-content-between'>
          <div className='footer-brand'>
            <div className='footer-logo text-start'>
              <div className='footer-logo-imgs d-flex'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg' alt='Sigortam.net' height={38} className='footer-goat-icon'/>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg' alt='Sigortam.net' height={38} className='footer-title-logo'/>
              </div>
              <span className='copyright'>&copy; 2000-{year} Sigortam.net</span>
            </div>
          </div>
          <div className='awards'>
            <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.png' alt='Sigortam.net' height={58}></img>
            <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-horizontal.png' alt='Sigortam.net' height={64}></img>
          </div>
        </div>

        <div className='footer-main row'>
          <nav className='footer-main-container col-12 col-lg-9 col-xl-10'>
            <div className='footer-nav col-12 col-md-6 col-lg-3'>
              <strong className='footer-nav-title' onClick={() => handleClick(1)}>Ürünlerimiz
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </strong>
              <ul className={
                  windowWidth < 992 && activeNav === 1
                    ? 'footer-nav-list'
                    : windowWidth >= 992
                    ? 'footer-nav-list'
                    : 'footer-nav-list-hidden'
                }>
                <li className='footer-nav-link'>Kasko Sigortası</li>
                <li className='footer-nav-link'>Trafik Sigortası</li>
                <li className='footer-nav-link'>İMM Sigortası</li>
                <li className='footer-nav-link'>Tamamlayıcı Sağlık Sigortası</li>
                <li className='footer-nav-link'>Özel Sağlık Sigortası</li>
                <li className='footer-nav-link'>Konut Sigortası</li>
                <li className='footer-nav-link'>DASK Sigortası</li>
                <li className='footer-nav-link'>Evim Güvende Sigortası</li>
                <li className='footer-nav-link'>Ferdi Kaza Sigortası</li>
                <li className='footer-nav-link'>Telefon Kaskosu</li>
                <li className='footer-nav-link'>Evcil Hayvan Sigortası</li>
                <li className='footer-nav-link'>Seyahat Sağlık Sigortası</li>
              </ul>
            </div>
            <div className='footer-nav col-12 col-md-6 col-lg-3'>
              <strong className='footer-nav-title' onClick={() => handleClick(2)}>Merak Edilenler
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </strong>
              <ul className={
                  windowWidth < 992 && activeNav === 2
                    ? 'footer-nav-list'
                    : windowWidth >= 992
                    ? 'footer-nav-list'
                    : 'footer-nav-list-hidden'
                }>
                <li className='footer-nav-link'>Günlük, Haftalık ve Aylık Kasko</li>
                <li className='footer-nav-link'>Doğum Sigortası Fiyatları</li>
                <li className='footer-nav-link'>Hamileyken Doğum Sigortası</li>
                <li className='footer-nav-link'>IMM Sigortası Nedir</li>
                <li className='footer-nav-link'>Internetten Trafik Sigortası Yaptırmak</li>
                <li className='footer-nav-link'>Sağlık Sigortası Karşılaştırma</li>
                <li className='footer-nav-link'>SBM Teklif Al</li>
                <li className='footer-nav-link'>Trafik Sigortası Şirketleri</li>
                <li className='footer-nav-link'>TSS Doğum Paketi</li>
              </ul>
            </div>
            <div className='footer-nav col-12 col-md-6 col-lg-3'>
              <strong className='footer-nav-title' onClick={() => handleClick(3)}>Hızlı Erişim
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </strong>
              <ul className={
                  windowWidth < 992 && activeNav === 3
                    ? 'footer-nav-list'
                    : windowWidth >= 992
                    ? 'footer-nav-list'
                    : 'footer-nav-list-hidden'
                }>
                <li className='footer-nav-link'>Araç Yakıt Hesaplama</li>
                <li className='footer-nav-link'>Kasko Değer Listesi</li>
                <li className='footer-nav-link'>MTV Hesaplama</li>
                <li className='footer-nav-link'>ÖTV Hesaplama</li>
                <li className='footer-nav-link'>Trafik Sigortası Basamakları Hesaplama</li>
                <li className='footer-nav-link'>Tramer Kaydı Sorgulama</li>
                <li className='footer-nav-link'>Zorunlu Trafik Sigortası Fiyatları</li>
              </ul>
            </div>
            <div className='footer-nav col-12 col-md-6 col-lg-3'>
              <strong className='footer-nav-title' onClick={() => handleClick(4)}>Hakkımızda
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </strong>
              <ul className={
                  windowWidth < 992 && activeNav === 4
                    ? 'footer-nav-list'
                    : windowWidth >= 992
                    ? 'footer-nav-list'
                    : 'footer-nav-list-hidden'
                }>
                <li className='footer-nav-link'>Biz Kimiz?</li>
                <li className='footer-nav-link'>İletişim</li>
                <li className='footer-nav-link'>Ödüllerimiz</li>
                <li className='footer-nav-link'>İşlem Rehberi</li>
                <li className='footer-nav-link'>Kariyer</li>
                <li className='footer-nav-link'>Kullanıcı Sözleşmesi</li>
                <li className='footer-nav-link'>Kişisel Verilerin Korunması</li>
                <li className='footer-nav-link'>Gizlilik ve Çerez Politikası</li>
                <li className='footer-nav-link'>Çerez Tercihleri</li>
                <li className='footer-nav-link'>Sigortam.net Basketbol Takımı</li>
              </ul>
            </div>
          </nav>

          <div className='footer-socials col-12 col-lg-3 col-xl-2'>
            <button className='help-btn'>
              <span className='help-btn-title'>Yardımcı olmaya hazırız</span>
              <span className='help-btn-number'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  </path>
                </svg> 444 24 00
              </span>
            </button>
            <strong className='footer-follow-us'>Bizi Takip Edin</strong>
            <ul className='footer-icon-list'>
              <li className='social-icon'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/facebook.svg' alt='social-icon'/>
              </li>
              <li className='social-icon'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/x-logo.svg' alt='social-icon'/>
              </li>
              <li className='social-icon'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/instagram.svg' alt='social-icon'/>
              </li>
              <li className='social-icon'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/linkedin.svg' alt='social-icon'/>
              </li>
              <li className='social-icon'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/youtube-filled.svg' alt='social-icon'/>
              </li>
            </ul>
            <div className='certificates'>
              <div className='certificate cert-1'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/guven-damgasi.svg' width={118} height={43} alt='Güven Damgası' className='trust-img'/>
              </div>
              <div className='certificate'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/etbis.jfif' width={38} height={45} alt='Etbis' className='qr-code'/>
              </div>
              <div className='ssl me-0 d-flex align-items-center'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/ssl.svg' width={31} height={39} alt='SSL' className='ssl-img'/>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='bottom-footer'>
        <Container className='bottom-inner-footer'>
          <div className='bottom-footer-banner'>
            <span>Sigortam.net bir</span>
            <a href='#' className='iLab-logo'>
              <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/ilab@2022.svg' width={69} height={25} alt='iLab-logo'/>
            </a>
            <span>grup şirketidir.</span>
          </div>
          <ul className='bottom-footer-links justify-content-lg-end'>
            <a href='#' className='bottom-footer-link'>Kariyer.net</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>Arabam.net</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>Cimri</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>Emlakjet</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>Endeksa</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>HangiKredi</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>Neredekal.com</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>ChemOrbis</a>
            <div className='link-divider'>&nbsp;-&nbsp;</div>
            <a href='#' className='bottom-footer-link'>SteelOrbis</a>
          </ul>
        </Container>
      </div>
    </footer>
  )
}

export default SigortamFooter