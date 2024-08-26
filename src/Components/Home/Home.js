import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Col, Container, Row } from 'reactstrap';
import SigortamNavbar from '../Navbar/SigortamNavbar';

function Home() {
  return (
    <Container fluid className='m-0 p-0'>
        <SigortamNavbar/>
        <section className='products-section'>
          <Container className='products'>
            <div className='products-title'>
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
                <a href='#' className='all-products'>Tüm Ürünleri Gör</a>
              </Row>
            </div>
            
          </Container>
        </section>
    </Container>
  )
}

export default Home