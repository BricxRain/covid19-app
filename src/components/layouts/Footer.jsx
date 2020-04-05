import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter fixed="bottom" color="blue" className="font-small pt-1 pb-1 mt-4 fixed-bottom ">
            <div className="footer-copyright text-center py-2">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright <a href="#footer"> Covid-19 App | Bricx Carasco </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;