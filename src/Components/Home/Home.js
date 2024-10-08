import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {
  Col, Container, Row, AccordionBody, AccordionHeader, AccordionItem,
  UncontrolledAccordion
} from 'reactstrap';
import SigortamNavbar from '../Navbar/SigortamNavbar';
import Footer from '../Footer/SigortamFooter';

function Home(props) {
  const sectionRef = useRef(null);
  
  const [isInView, setIsInView] = useState(false);
  const [firstImageScale, setFirstImageScale] = useState(0.1);
  const [secondImageScale, setSecondImageScale] = useState(0);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (isInView){
        let newFirstImageScale = 0 + scrollTop / 1500;
        newFirstImageScale = Math.min(newFirstImageScale, 1);

        if (newFirstImageScale === 1){
          let newSecondImageScale = (scrollTop - 1500) / 1500;
          newSecondImageScale = Math.min(Math.max(newSecondImageScale, 0), 1);

          setFirstImageScale(1- newSecondImageScale);
          setSecondImageScale(newSecondImageScale);
        }
        else{
          setFirstImageScale(newFirstImageScale);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }

      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, firstImageScale, secondImageScale]);

  const [isSeeOthersClicked, setIsSeeOthersClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSeeOthersClick = () => {
    setIsSeeOthersClicked(prevState => !prevState);
  }

  const handleCustomerNavLiClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <Container fluid className='m-0 p-0'>
        <SigortamNavbar/>

        {/* Products section start */}
        <section className='products-section'>
          <Container>
            <div className='products-cover'>
              <Col className='px-0'>
                <h1 className='products-heading'>Sigortada Güvenin Adresi</h1>
                <div className='products-message'>
                  Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
                </div>
                <Row className='product-row'>
                  <div className='product-card col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg' width={110} height={90} alt='Kasko Sigortası Branş Sayfası'/>
                      <span>Kasko</span>
                    </a>
                  </div>

                  <div className='product-card col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4'>
                    <a href='#' className='product-card-item'>
                      <div className='discount'>%10 İndirim</div>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/electric-vehicle-orange.svg' width={110} height={90} alt='Elektrikli Araç Kaskosu'/>
                      <span>Elektrikli Araç Kaskosu</span>
                    </a>
                  </div>

                  <div className='product-card col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg' width={110} height={90} alt='Tamamlayıcı Sağlık'/>
                      <span>Tamamlayıcı Sağlık</span>
                    </a>
                  </div>

                  <div className='product-card-sm col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg' width={110} height={90} alt='Trafik Sigortası'/>
                      <span>Trafik Sigortası</span>
                    </a>
                  </div>

                  <div className='product-card-sm col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg' width={110} height={90} alt='İMM'/>
                      <span>İMM</span>
                    </a>
                  </div>

                  <div className='product-card-sm d-none d-md-block d-lg-block col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg' width={110} height={90} alt='Özel Sağlık'/>
                      <span>Özel Sağlık</span>
                    </a>
                  </div>
                  
                  <div className='product-card-sm col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg' width={110} height={90} alt='Seyahat Sağlık'/>
                      <span>Seyahat Sağlık</span>
                    </a>
                  </div>

                  <div className='product-card-sm col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg' width={110} height={90} alt='DASK'/>
                      <span>DASK</span>
                    </a>
                  </div>

                  <div className='product-card-sm d-block d-md-none col-6'>
                    <a href='#' className='product-card-item'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/home.svg' width={110} height={90} alt='Evim Güvende'/>
                      <span>Evim Güvende</span>
                    </a>
                  </div>
                </Row>
              </Col>
            </div>
            {/* <div className='products-title'>
              <Row className='products-row'>
                <h1 className='products-heading'>Sigortada Güvenin Adresi</h1>
                <p className='products-message'>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</p>
              </Row>

              <div className='products-cover'>
                <Row className='first-product-row md-3'>
                  <Col className='product-card'>
                    <div className='product-img'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg' width={110} height={90} alt='Kasko Sigortası Branş Sayfası'/>
                    </div>
                    <p className='product-name'>Kasko</p>
                  </Col>
                  <Col className='product-card'>
                    <span className='discount'>%10 İndirim</span>
                    <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/electric-vehicle-orange.svg' width={110} height={90} alt='Elektrikli Araç Kaskosu Branş Sayfası'/>
                    </div>
                    <p className='product-name'>Elektrikli Araç Kaskosu</p>
                  </Col>
                  <Col className='product-card'>
                    <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg' width={110} height={90} alt='Tamamlayıcı Sağlık Sigortası Branş Sayfası'/>                    </div>
                    <p className='product-name'>Tamamlayıcı Sağlık</p>
                  </Col>
                </Row>

                <Row className='second-product-row md-5'>
                  <Col className='product-card-sm'>
                      <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg' width={122} height={91} alt='Trafik Sigortası Branş Sayfası'/>
                      </div>
                      <p className='product-name'>Trafik Sigortası</p>
                  </Col>
                  <Col className='product-card-sm'>
                      <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg' width={122} height={91} alt='İMM Branş Sayfası'/>
                      </div>
                      <p className='product-name'>İMM</p>
                  </Col>
                  <Col className='product-card-sm'>
                      <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg' width={122} height={91} alt='Özel Sağlık Sigortası Branş Sayfası'/>
                      </div>
                      <p className='product-name'>Özel Sağlık</p>
                  </Col>
                  <Col className='product-card-sm'>
                      <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg' width={122} height={91} alt='Seyahat Sağlık Sigortası Branş Sayfası'/>
                      </div>
                      <p className='product-name'>Seyahat Sağlık</p>
                  </Col>
                  <Col className='product-card-sm'>
                      <div className='product-img'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg' width={122} height={91} alt='DASK Sigortası Branş Sayfası'/>
                      </div>
                      <p className='product-name'>DASK</p>
                  </Col>
                </Row>
              </div>

              <Row className='btn-all-products'>
                <span className='all-products'>Tüm Ürünleri Gör</span>
              </Row>
            </div> */}
            
          </Container>
        </section>
        {/* Products section end */}

        {/* Why-us section start */}
        <section className='why-us-section'>
          <Container className='why-us'>
            <div className='why-us-items'>
              <h2 className='why-us-title'>Poliçemi neden Sigortam.net'ten almalıyım?</h2>
                <div className='why-us-item-list'>
                  <div className='why-us-item'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg' alt='Doğru Ürün' width={90} height={90} className='why-us-item-img'/>
                    <span className='why-us-item-name'>Doğru Ürün</span>
                    <p className='why-us-item-desc'>
                      Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun.
                    </p>
                  </div>

                  <div className='why-us-item'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg' alt='İyi Fiyat' width={90} height={90} className='why-us-item-img'/>
                    <span className='why-us-item-name'>İyi Fiyat</span>
                    <p className='why-us-item-desc'>
                      Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.
                    </p>
                  </div>

                  <div className='why-us-item'>
                    <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg' alt='7/24 Hizmet' width={90} height={90} className='why-us-item-img'/>
                    <span className='why-us-item-name'>7/24 Hizmet</span>
                    <p className='why-us-item-desc'>
                      24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.
                    </p>
                  </div>
                </div>
            </div>
          </Container>
        </section>
        {/* Why-us section end */}

        {/* Landing cover section start */}
        <section ref={sectionRef} className='landing-cover-section'>
          <div className='landing-cover position-relative d-flex align-items-center'>
            <Container>
              <Row className='landing-cover-row'>
                <div className='left-landing-cover col-12 col-lg-5 d-flex'>
                  <div className='landing-cover-item'>
                    <div className='landing-cover-item-mobile d-block d-lg-none w-100 text-center'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1-mobile.png' alt='en iyi sigorta teklifi mobil' width={345} height={388}/>
                    </div>

                    <span className='mobile-desc d-block d-lg-none'>
                      Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin. 
                    </span>

                    <div className='landing-cover-item-title'>
                      Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!
                    </div>
                    <div className='landing-cover-item-detail'>
                      Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık.
                    </div>
                    <div className='landing-cover-item-btn'>
                      Hemen Teklif Al
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-1">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className='landing-cover-item'>
                      <div className='landing-cover-item-mobile d-block d-lg-none w-100 text-center'>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1-mobile.png' alt='en iyi sigorta teklifi mobil' width={345} height={388}/>
                      </div>

                      <span className='mobile-desc d-block d-lg-none'>
                        Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin. 
                      </span>
                    <div className='landing-cover-item-title'>
                      Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.
                    </div>
                    <div className='landing-cover-item-detail'>
                      20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın.
                    </div>
                    <div className='landing-cover-item-btn'>
                      Hemen Teklif Al
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='right-landing-cover col-12 col-lg-7 d-none d-lg-block text-right'>
                  <div className='right-landing-cover-container'>
                    <div className='right-landing-cover-first-img'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1.svg' alt='en iyi sigorta teklifi' style={{ transform: `scale3d(${firstImageScale}, ${firstImageScale}, 1)` }}/>
                    </div>
                    <div className='right-landing-cover-second-img'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature2.svg' alt='en iyi sigorta teklifi' style={{ transform: `scale3d(${secondImageScale}, ${secondImageScale}, 1)` }}/>
                    </div>
                    <div className='mock-up'>
                      <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/phone-mockup.jpg' alt='en iyi sigorta teklifi'  width={260} height={528}/>
                      <span className='d-none d-lg-block'>
                        Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin.
                      </span>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </section>
        {/* Landing cover section end */}

        {/* Customer-special section start */}
        <section className='customer-special-section'>
          <Container className='customer-special'>
            <div className='inner-customer-special position-relative'>
              <h2>Sigortam.net'te sana özel neler var?</h2>
              <div className='customer-special-main'>
                <ul className='customer-special-nav' role='tablist'>
                  <li 
                    onClick={() => handleCustomerNavLiClick(0)}
                    className={activeIndex === 0 ? 'selected' : ''}>
                    İndirimler & Kampanyalar
                  </li>
                  <li 
                    onClick={() => handleCustomerNavLiClick(1)}
                    className={activeIndex === 1 ? 'selected' : ''}>
                    Reklam Filmleri
                  </li>
                  <li 
                    onClick={() => handleCustomerNavLiClick(2)}
                    className={activeIndex === 2 ? 'selected' : ''}>
                    Öne Çıkanlar
                  </li>
                </ul>

                <div className='customer-special-panel position-relative'>
                  <div id="carouselExampleIndicators" className="carousel slide"data-bs-ride="carousel" data-bs-interval="false">
                    <div className='carousel-row'>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fa-solid fa-chevron-left carousel-btn" style={{ fontSize: '20px' }}></i>
                      </a>
                      <div className='carousel-inner-cover'>
                        <div className="carousel-inner">
                          <div className='carousel-item-cover'>
                            <div className="carousel-item active">
                              <div className='iframe-cover'>
                                <iframe title='video-1' className="d-block w-100" src="https://www.youtube.com/embed/-ZpvfneEadA?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&mute=1" alt="First slide"/>
                              </div>
                              
                            </div>
                            <div className="carousel-item">
                              <div className='iframe-cover'>
                                <iframe title='video-2' className="d-block w-100" src="https://www.youtube.com/embed/-ZpvfneEadA?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&mute=1" alt="Second slide"/>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className='iframe-cover'>
                                <iframe title='video-3' className="d-block w-100" src="https://www.youtube.com/embed/nP_Ofyakn80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&mute=1" alt="Third slide"/>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className='iframe-cover'>
                                <iframe title='video-4' className="d-block w-100" src="https://www.youtube.com/embed/_WZSSLfNb7Y?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&mute=1" alt="Fourth slide"/>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className='iframe-cover'>
                                <iframe title='video-5' className="d-block w-100" src="https://www.youtube.com/embed/NNfLzKUfEeY?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0&mute=1" alt="Fifth slide"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <i className="fa-solid fa-chevron-right carousel-btn" style={{ fontSize: '20px' }}></i>
                      </a>
                    </div>
                    <div className='carousel-indicator-cover'>
                      <div className='carousel-indicator-cover-inner'>
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Customer-special section end */}

        {/* Comments section start */}
        <section className='comments-section'>
          <Container className='comments'>
            <div className='comments-row'>
              <h2>10 Milyon Mutlu Müşteri, 50+ Milyon Poliçe Teklifi</h2>
              <div className='comments-list'>
                <div className='comment-card col-11 col-md-4'>
                  <span className='comment'>İnternetten alınan bir poliçeden <b>çok daha fazlası.</b> Kaza anında çekicinin gelmesinden tutun sağlık durumunuza kadar <b>her şeyle ilgileniyorlar.</b>
                  </span>
                  <span className='commenter'>Kasım Ş.</span>
                </div>
                <div className='comment-card col-11 col-md-4'>
                  <span className='comment'>Sigortam.net sayesinde evden çıkmadan <b>tek bir telefonla</b> trafik sigortası ve kaskoyu yaptırdım.<b> Hızlı, sorunsuz ve güvenilir.</b>
                  </span>
                  <span className='commenter'>Murat İ.</span>
                </div>
                <div className='comment-card col-11 col-md-4'>
                  <span className='comment'>Piyasadan alabileceğim kasko poliçesini aynı kapsamda <b>taksitle, daha ucuza ve profesyonel hizmetle </b>Sigortam.net üzerinden satın aldım.
                  </span>
                  <span className='commenter'>Şaban K.</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Comments section end */}

        {/* Awards section start */}
        <section className='awards-section'>
          <Container className='awards-container'>
            <div className='awards-row-cover'>
              <div className='awards-row row'>
                <div className='awards-detail text-left align-self-center col-12 col-lg-6' style={{ cursor: 'pointer', textAlign: 'left' }}>
                  <h2>Ödüllerimizden bahsetmiş miydik?</h2>
                  <p>
                    Dünyanın en prestijli ödüllerinden biri olan Stevie Awards’ta 
                    <br className="d-xl-block"/>
                    Sigorta Sektörünün En İyi Websitesi Ödülü’nü kazandık.
                    <br className="d-xl-block"/>
                    Sizinle yürüdüğümüz bu yolda nice ödülleri kucaklamak dileğiyle...
                  </p>
                  <span>
                    Detaylı Bilgi
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-1">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </div>

                <div className='awards-img col-sm-12 col-md-6 col-lg-6'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.png' alt='Sigortam.net Stevie Winner' height={238} className='award-img'/>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-vertical.png' alt='If Design Award 2024' height={238} className='award-img'/>
                </div>
              </div>
              


            </div>
          </Container>
        </section>
        {/* Awards section end */}

        {/* Offer section start */}
        <section className='offers-section'>
          <Container className='offers'>
            <h2>20'den fazla sigorta şirketinden teklif al</h2>
            <div className='companies'>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/acibadem-sigorta.png' alt='Acıbadem Sigorta' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ak-sigorta.png' alt='AKSigorta' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/allianz.png' alt='Allianz' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/anadolu-sigorta.png' alt='Anadolu Sigorta' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/anadolu-hayat-emeklilik.png' alt='Anadolu Hayat Emeklilik' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/aveon-global-sigorta.png' alt='Aveon Global Sigorta' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-sigorta.png' alt='Axa Sigorta' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-hayat-emeklilik.png' alt='Axa Hayat Emeklilik' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/demir-saglik.png' alt='Demir Sağlık' width={106} height={50}/>
              </div>
              <div className='company'>
                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/doga-sigorta.png' alt='Doğa Sigorta' width={106} height={50}/>
              </div>

              <div className={`hidden-companies ${isSeeOthersClicked ? 'd-flex flex-wrap justify-content-center ' : 'd-none'}`}>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/eureko.png' alt='Eureko' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/fiba-emeklilik.png' alt='Fiba Emeklilik' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/gig-sigorta.png' alt='Giga Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/hdi-sigorta.png' alt='HDI Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/mapfre-sigorta.png' alt='Mapfre Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/neova-sigorta.png' alt='Neova Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/orient-sigorta.png' alt='Orient Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/quick-sigorta.png' alt='Quick Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ray-sigorta.png' alt='Ray Sigorta' width={106} height={50}/>
                </div>
                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/sompo-sigorta.png' alt='Sompo Sigorta' width={106} height={50}/>
                </div>

                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/turkiye-sigorta.png' alt='Türkiye Sigorta' width={106} height={50}/>
                </div>

                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/turk-nippon-sigorta.png' alt='Türkiye Nippon Sigorta' width={106} height={50}/>
                </div>

                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/unico.png' alt='Unico' width={106} height={50}/>
                </div>

                <div className='company'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/zurich-sigorta.png' alt='Zurich Sigorta' width={106} height={50}/>
                </div>
              </div>
            </div>
            <div className='other-companies' onClick={handleSeeOthersClick}>
              <span className='position-relative'>
                {
                  isSeeOthersClicked
                  ? 'Daha Az Sigorta Şirketini Gör'
                  : '+14 Sigorta Şirketini Gör'
                }
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={ isSeeOthersClicked ? { transform: 'rotate(180deg)' } : {}}>
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Container>
        </section>
        {/* Offer section end */}

        {/* Question section start */}
        <section className='faq-section'>
          <Container className='faq'>
            <h2 className='faq-title'>Sigortam.net Hakkında En Merak Edilen 5 Soru</h2>
            <div className='faq-accordion'>
              <UncontrolledAccordion defaultOpen="1">
                <AccordionItem>
                  <AccordionHeader targetId="1">Neden Sigortam.net'i tercih etmeliyim, farkınız nedir?</AccordionHeader>
                  <AccordionBody accordionId="1">
                    Sigortam.net Türkiye’nin ilk ve lider online sigorta brokeridir. Broker olarak farkımız, öncelikli olarak müşterilerimizi temsil etmemiz ve onların menfaatleri doğrultusunda hareket etmemizdir. Bu misyonla her zaman müşterilerimizin tarafındayız ve 20+ sigorta şirketi teklifini tek bir sayfada görmelerini, hem teminatları hem de fiyatları objektif olarak karşılaştırmalarını sağlıyoruz. Böylece müşterilerimiz ihtiyaçlarına en uygun sigortayı kolayca belirliyor ve online olarak satın alabiliyor. Ayrıca satış sonrası herhangi bir ihtiyacınızda 24 yıllık tecrübeli ekibimiz 7/24 desteğe hazır.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">Poliçe satışında müşterilerden ek ücret alıyor musunuz?</AccordionHeader>
                  <AccordionBody accordionId="2">
                    Hayır, hiçbir ek ücret almıyoruz. Müşterilerimizden yalnızca sigorta şirketinin belirlediği poliçe fiyatını tahsil ediyoruz. Bu fiyat üzerinden Sigortam.net indirimleri veya iş birliği kampanyalarımız ile müşterilerimize en iyi fırsatları sunuyoruz.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">Poliçe fiytlarında indirim yapıyor musunuz?</AccordionHeader>
                  <AccordionBody accordionId="3">
                    Evet, sigorta şirketinin belirlediği poliçe fiyatı üzerinden, müşteriye özel Sigortam.net indirimleri uygulanabilir. Satın alma aşamasında kartınızdan sigorta şirketinin belirlediği tutar tahsil edilir, indirim tutarı Sigortam.net tarafından ödeme yapılan kredi kartına 1 hafta içerisinde iade edilir.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">En iyi sigorta teklifini nasıl seçeceğim?</AccordionHeader>
                  <AccordionBody accordionId="4">
                    Anlaşmalı olduğumuz 20+ sigorta şirketinin müşterilerimize özel hazırladığı teklifleri fiyat ve teminatlar açısından puanlayıp öneriler hazırlıyoruz. Bu sayede müşterilerimiz teklifler arasından; en ucuz fiyata sahip ürün, fiyat/performans skoru en iyi olan ürün ve en kapsamlı teminat içeriğine sahip ürünü kolayca görebilir. Uzun süren incelemelere gerek kalmadan ihtiyacına en uygun poliçeyi hızlıca bulur ve güvencesini başlatır.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">Sigortam.net'te kişisel bilgilerim güvende mi?</AccordionHeader>
                  <AccordionBody accordionId="5">
                    Evet, müşterilerimize özel sigorta teklifi için paylaşılan kişisel bilgiler ve ödeme bilgileri, tüm dünyada kabul edilip kullanılan SSL protokolümüz ile korunur. Sigortam.net TOBB tarafından verilen Güven Damgası’na sahip sigorta sektöründeki ilk şirkettir. Ödeme bilgileri sadece ödeme gerçekleştirilirken kullanılıp işlem sonrası kesinlikle kayıtlı tutulmaz. Bu güvenlik protokolleri sayesinde müşterilerimizin bilgileri Sigortam.net’e geldiği andan ödemenin tamamlanmasına kadar güvendedir.
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </div>
          </Container>
        </section>
        {/* Question section end */}

        {/* Trust section start */}
        <section className='trust-section'>
          <Container className='trust'>
            <div className='trust-banner'>
              <h3>Sigortada Güvenin Adresi</h3>
              <p>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</p>
            </div>

            <div className='trust-cards'>
              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Trafik Sigortası</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Kasko</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>İMM</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Tamamlayıcı Sağlık</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/health-v2.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Özel Sağlık</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Seyahat Sağlık</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>DASK</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/home.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Evim Güvende</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/housing.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Konut Sigortası</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/personal-accident-blue.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Ferdi Kaza</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/pet-v2.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Evcil Hayvan</span>
                </div>
              </div>

              <div className='trust-card'>
                <div className='trust-card-icon'>
                  <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/phone.svg' alt='Trafik Sigortası' className='trust-card-img' width={121} height={90}/>
                </div>
                <div className='trust-card-title'>
                  <span>Cep Telefonu</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Trust section end */}

        <Footer/>
    </Container>
  )
}

export default Home