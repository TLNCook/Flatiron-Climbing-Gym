import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ReveiwCard ({ review, removeForever, handleUpdateReview, fetchAllReviews, page }) {
    const { content, climber, climber_id, id, image} = review
    const [ show, setShow ] = useState(false)
    const [ enteredContent, setContent ] = useState(content)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setContent(content)
        setShow(true)
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedReview = {
            "content": enteredContent,
            "climber_id": climber_id
        }
        handleUpdateReview(updatedReview, id)
        fetchAllReviews();
        handleClose();
    }
    return (
        <>
            <div id="review_card">
                <div className="ui card" key={id} onClick={handleShow}>
                    <label>Climber:  {climber.name} </label>
                    <span className="review_content">
                        {content}
                    </span>
                    <img src={image} alt="image" id="reviewImage"/>
                </div>
            </div>
            <Modal show={show && page === 'climber'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" value={enteredContent} onChange={contentChangeHandler} placeholder={content} />
                        </Form.Group>
                        <ButtonGroup className="me-2" aria-label="Submit Button">
                            <Button variant="outline-primary" type="submit" >
                                Update
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup className="me-2" aria-label="Delete Button">
                            <Button variant="outline-danger" onClick={(e) => removeForever(e, id)}>
                                Remove
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        
        </>
    );
};

export default ReveiwCard;