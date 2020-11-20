import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

function RenderDish({selectedDish}){
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

   
    function RenderComments({comments}){ 
        if (comments != null){
            const commentList = comments.map(comment => {
                return(
                    <li key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}</p>
                        <p>{new Intl.DateTimeFormat('en-UK', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

    const DishDetail = (props) => {
        if (props.selectedDish != null){
            return(
                    <div className = "row mt-5">
                        <div className = "col-12 col-md-5 m-1">
                            <RenderDish selectedDish = {props.selectedDish}/>
                        </div>
    
                        <div className = "col-12 col-md-5 m-1">
                            <RenderComments comments = {props.selectedDish.comments}/>
                        </div>
                    </div>
    
                );
            }else{
                return(<div/>);
            }


    }
    

export default DishDetail;

