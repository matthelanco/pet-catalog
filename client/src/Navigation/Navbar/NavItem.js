import React from 'react';
import { MDBNavItem, MDBNavLink } from "mdbreact";
import './NavItem.css';

const NavItem = (props) => (
    <div className='NavItem box content'>
        <MDBNavItem>
            <MDBNavLink to={props.link}>{props.content}</MDBNavLink>
        </MDBNavItem>
    </div>
)
export default NavItem;