import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SigortamFooter.css';
import { Col, Container, Row } from 'reactstrap';

function SigortamFooter() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <footer>
      <Container className='upper-footer'>
        <div className='footer-banner d-flex justify-content-between'>
          <div className='footer-brand text-start'>
            <div className='footer-logo d-flex'>
              <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg' alt='Sigortam.net' height={38} className='footer-goat-icon'></img>
              <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg' alt='Sigortam.net' height={38} className='footer-title-logo'></img>  
            </div>
            <span className='copyright'>&copy; 2000-{year} Sigortam.net</span>
          </div>
          <div className='awards'>
            <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.png' alt='Sigortam.net' height={58}></img>
            <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-horizontal.png' alt='Sigortam.net' height={64}></img>
          </div>
        </div>

        <Container className='footer-main'>
          <Row className='footer-main-row'>
            <Col lg="9" xl="10" className='footer-links d-flex'>
              <Col md="6" lg="3" className='footer-nav'>
                <div className='footer-nav-title d-flex justify-content-start'>
                  <strong>Ürünlerimiz</strong>
                </div>
                <ul className='footer-nav-list'>
                  <li><a href='#' className='footer-nav-link'>Kasko Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Trafik Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>İMM Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Tamamlayıcı Sağlık Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Özel Sağlık Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Konut Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>DASK Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Evim Güvende Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Ferdi Kaza Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Telefon Kaskosu</a></li>
                  <li><a href='#' className='footer-nav-link'>Evcil Hayvan Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>Seyahat Sağlık Sigortası</a></li>
                </ul>
              </Col>
              <Col md="6" lg="3" className='footer-nav'>
                <div className='footer-nav-title d-flex justify-content-start'>
                  <strong>Merak Edilenler</strong>
                </div>
                <ul className='footer-nav-list'>
                  <li><a href='#' className='footer-nav-link'>Günlük, Haftalık ve Aylık Kasko</a></li>
                  <li><a href='#' className='footer-nav-link'>Doğum Sigortası Fiyatları</a></li>
                  <li><a href='#' className='footer-nav-link'>Hamileyken Doğum Sigortası</a></li>
                  <li><a href='#' className='footer-nav-link'>IMM Sigortası Nedir</a></li>
                  <li><a href='#' className='footer-nav-link'>Internetten Trafik Sigortası Yaptırmak</a></li>
                  <li><a href='#' className='footer-nav-link'>Sağlık Sigortası Karşılaştırma</a></li>
                  <li><a href='#' className='footer-nav-link'>SBM Teklif Al</a></li>
                  <li><a href='#' className='footer-nav-link'>Trafik Sigortası Şirketleri</a></li>
                  <li><a href='#' className='footer-nav-link'>TSS Doğum Paketi</a></li>
                </ul>
              </Col>
              <Col md="6" lg="3" className='footer-nav'>
                <div className='footer-nav-title d-flex justify-content-start'>
                  <strong>Hızı Erişim</strong>
                </div>
                <ul className='footer-nav-list'>
                  <li><a href='#' className='footer-nav-link'>Araç Yakıt Hesaplama</a></li>
                  <li><a href='#' className='footer-nav-link'>Kasko Değer Listesi</a></li>
                  <li><a href='#' className='footer-nav-link'>MTV Hesaplama</a></li>
                  <li><a href='#' className='footer-nav-link'>ÖTV Hesaplama</a></li>
                  <li><a href='#' className='footer-nav-link'>Trafik Sigortası Basamakları Hesaplama</a></li>
                  <li><a href='#' className='footer-nav-link'>Tramer Kaydı Sorgulama</a></li>
                  <li><a href='#' className='footer-nav-link'>Zorunlu Trafik Sigortası Fiyatları</a></li>
                </ul>
              </Col>
              <Col md="6" lg="3" className='footer-nav'>
                <div className='footer-nav-title d-flex justify-content-start'>
                  <strong>Hakkımızda</strong>
                </div>
                <ul className='footer-nav-list'>
                  <li><a href='#' className='footer-nav-link'>Biz Kimiz?</a></li>
                  <li><a href='#' className='footer-nav-link'>İletişim</a></li>
                  <li><a href='#' className='footer-nav-link'>Ödüllerimiz</a></li>
                  <li><a href='#' className='footer-nav-link'>İşlem Rehberi</a></li>
                  <li><a href='#' className='footer-nav-link'>Kariyer</a></li>
                  <li><a href='#' className='footer-nav-link'>Kullanıcı Sözleşmesi</a></li>
                  <li><a href='#' className='footer-nav-link'>Kişisel Verilerin Korunması</a></li>
                  <li><a href='#' className='footer-nav-link'>Gizlilik ve Çerez Politikası</a></li>
                  <li><a href='#' className='footer-nav-link'>Çerez Tercihleri</a></li>
                  <li><a href='#' className='footer-nav-link'>Sigortam.net Basketbol Takımı</a></li>
                </ul>
              </Col>
            </Col>
            <Col lg="3" xl="2" className='footer-socials'>
              <div className='footer-action-call'>
                <a className='d-flex flex-column'>
                    <span className='footer-phone-title text-start'>Yardımcı olmaya hazırız</span>
                    <span className='footer-phone-number d-flex'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="phone-icon">
                          <path 
                            d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          </path>
                        </svg>
                        444 24 00
                    </span>
                </a>
              </div>
              <div className='follow-us'>
                <strong>Bizi Takip Edin</strong>
              </div>
              <div className='footer-social-icons d-inline-flex'>
                <ul className='footer-icon-list d-inline-flex'>
                  <li className='social-icon'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/facebook.svg'/>
                  </li>
                  <li className='social-icon'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/x-logo.svg'/>
                  </li>
                  <li className='social-icon'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/instagram.svg'/>
                  </li>
                  <li className='social-icon'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/linkedin.svg'/>
                  </li>
                  <li className='social-icon'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/icons/svg/youtube-filled.svg'/>
                  </li>
                </ul>
              </div>
              <div className='certificates'>
                <a className='certificate'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/guven-damgasi.svg' width={118} height={43} alt='Güven Damgası' className='trust-img'/>
                </a>
                <a className='certificate'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/etbis.jfif' width={38} height={45} alt='Etbis' className='qr-code'/>
                </a>
                <div className='ssl me-0'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/ssl.svg' width={31} height={39} alt='SSL' className='ssl-img'/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
          <ul className='bottom-footer-links d-flex'>
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