import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'


export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk  */}
                <Link to="/">
                <i className="fa fa-laptop navbar-brand" aria-hidden="true"></i>
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"></li>
                    <Link className="nav-link" to="/">
                    product
                    </Link>
                </ul>
                <Link className="ml-auto" to="/cart">
                    <ButtonContainer>
                        <span className="mr-2"></span>
                        <i className="fas fa-cart-plus"></i>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavbarWrapper>
        )
    }
}

const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
    `