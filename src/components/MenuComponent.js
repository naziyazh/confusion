import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

    function RenderMenuItem({dish, onClick}){
        return(
            <Card key={dish.id} onClick = {() => onClick(dish.id)} tag="li">
                <CardImg width = "100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return(
                <div  className="col-12 col-md-5 mt-5 m-1">
                    <RenderMenuItem dish = {dish} onClick = {props.onClick} />
                </div>
            );
        });
        return(
            <div className = "container">
                { menu }
            </div>
        );

    }
        
        
export default Menu;