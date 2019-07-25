import React from 'react';
import { MDBFooter, MDBContainer,MDBCol, MDBRow } from "mdbreact";

const FooterContent = (props) => (

    <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="6">
                    <a href="https://www.elanco.com" alt="lin">
                        <img src={props.imageUrl} alt="Ignite Dev"></img>
                    </a>
                    <h5 className="title">{props.footerHeading}</h5>
                    <p>
                        {props.footerDescription}
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                {props.copyrightText}
            </MDBContainer>
        </div>
</MDBFooter>
)
export default FooterContent;