import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component{

    renderDish(selectedDish){
        if (selectedDish != null){
            return(
            <div className = "container">
                <Card>
                    <CardImg width = "100%" src={selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }else{
            return(<div/>);
        }
    }

   
    renderComments(comments){ 
        if (comments != null){
            const commentList = comments.map(comment => {
                return(
                    <li key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}{new Intl.DateTimeFormat('en-UK', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { commentList }
                    </ul>
                </div>
            );
        }else{
            return(<div/>);
        }
    }
    render(){
        if (this.props.selectedDish != null){
            return(
                <div className = "row mt-5">
                    <div className = "col-12 col-md-5 m-1">
                        { this.renderDish(this.props.selectedDish) }
                    </div>

                    <div className = "col-12 col-md-5 m-1">
                        { this.renderComments(this.props.selectedDish.comments) }
                    </div>
                </div>

            );
        }else{
            return(<div/>);
        }
    };
}

export default DishDetail;

