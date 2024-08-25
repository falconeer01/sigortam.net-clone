import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import SigortamNavbar from '../Navbar/SigortamNavbar';

function Home() {
  return (
    <Container fluid className='m-0 p-0'>
        <SigortamNavbar/>
        <div>Home</div>
    </Container>
  )
}

export default Home