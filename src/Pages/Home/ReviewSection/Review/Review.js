import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../../../../Common/commonComponents/Rating'


const Review = (props) => {
  const { name, comment, rating } = props.review;

    return (
        <Card className="mx-3" style={{minHeight: '250px'}}>
            <div className="mx-auto py-2">
            <i className="fas fa-user-tie mx-auto fa-4x"></i>
            </div>
            <Card.Body>
            <div className="fw-semi-bold text-center">{name} <span>({rating}/5)</span></div>
            <Rating rating={rating}></Rating>
            <Card.Text className="text-center py-2 mt-2">
                    {comment.slice(0, 60)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;