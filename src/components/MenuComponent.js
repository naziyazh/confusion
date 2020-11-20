import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

class Menu extends Component{
    
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div  className="col-12 col-md-5 mt-5 m-1">
                    <Card key={dish.id} onClick = {() => this.props.onClick(dish.id)} tag="li">
                            <CardImg width = "100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
    }
}

export default Menu;