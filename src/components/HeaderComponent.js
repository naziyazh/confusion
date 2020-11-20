import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className = "container">
                        <div className = "row row-header">
                            <div className = "col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines and create a unique fusion experience.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
            //using div leads to an additional node in DOM
            //while using react fragment helps to add elements directly 
        );
    }
}

export default Header;