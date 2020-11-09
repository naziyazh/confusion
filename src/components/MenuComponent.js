import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardImgOverlay, CardBody } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {selectedDish: null};
    }

    selectDish(dish){
        this.setState({selectedDish: dish});
    }
    renderDish(dish){
        if (dish != null){
            return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width = "100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            );
        }else{
            return(<div></div>);
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-5 m-1">
                    <Card onClick = {() => this.selectDish(dish)} tag="li">
                            <CardImg width = "100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;