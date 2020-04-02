import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-1 pb-1 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright <a href="#footer"> Covid-19 Updates | PH by Bricx Carasco </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;