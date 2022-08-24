import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ReviewForm ({ closeModal, loggedInClimberId, onAddReview }) {
    const [ show, setShow ] = useState(true);
    const [ image, setImage ] = useState(null);
    const [ content, setContent ] = useState('')

    // const handleReviewSubmit = (e) => {
    //     e.preventDefault()
    //     const newReview = {
    //         "climber_id": loggedInClimberId,
    //         "gym_id": 1,
    //         content,
    //         image,
    //     }
    //     onAddReview(newReview)
    //     handleClose()
    // }
    
    const handleClose = () => {
        setShow(false)
        closeModal()
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("climber_id" , loggedInClimberId);
        formData.append("gym_id" , 1);
        formData.append("content" , content);
        formData.append("image" , image);
        fetch("/reviews", {
            method: 'POST',
            body: formData
        }).then((r) => onAddReview(r))
        handleClose()
    }
    return (
        <>
            <Modal show={ show } onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Review:</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ handleReviewSubmit }>
                        <Form.Group className="mb-3" controlId="formBasicContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" content="content" value={ content } onChange={ (e) => setContent(e.target.value) } placeholder="Enter Review" />
                        </Form.Group>
                        <Form.Control name="image" type="file" accept="image/*" onChange={ (e) => setImage(e.target.files[ 0 ]) } />
                        <Modal.Footer>
                            <ButtonGroup className="me-2" aria-label="Submit Button">
                                <Button variant="outline-primary" type="submit">
                                    Submit
                                </Button>
                            </ButtonGroup>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReviewForm;