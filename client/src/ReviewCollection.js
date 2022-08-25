import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import Button from 'react-bootstrap/Button';
import ReviewForm from "./ReviewForm";

function ReviewCollection ({ setIsLoggedIn, page, loggedInClimberId }) {
  const [ reviews, setReviews ] = useState([])
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
    fetch("/reviews")
      .then((r) => r.json())
      .then((reviews) => page === 'climber' ? setReviews(reviews.filter(review => review.climber.id === parseInt(loggedInClimberId))) : setReviews(reviews));
  }, []);

  function fetchAllReviews() {
    fetch("/reviews")
    .then((r) => r.json())
    .then((data) => setReviews(data))
    setReviews(reviews)
    window.location.reload(true)
  };

  function removeForever(e, id) {
    e.stopPropagation();
    fetch(`/reviews/${id}`,{
        method: 'DELETE'
    })
    setReviews((currentReviews) =>
      currentReviews.filter((review) => review.id !== id)
    );
  }

  function handleUpdateReview(updatedReview, id) {
    fetch(`/reviews/${id}`, {
        method: 'PATCH',
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(updatedReview),
    })
  }

  function handleAddReview(newReview) {
    fetch("/reviews", {
      method: 'POST',
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newReview)
    })
    setReviews([...reviews, newReview])
  }

  const reviewInfo = reviews.map((review) => (
    <ReviewCard
      key={ review.id }
      review={ review }
      removeForever = { removeForever }
      handleUpdateReview = { handleUpdateReview }
      fetchAllReviews = { fetchAllReviews }
      page = { page }
    />
  ))

  const handleClick = () => {
    setShow(true)
  }

  const modalClose = () => {
    setShow(false)
    page === 'climber' ? setReviews([...reviews.filter(review => review.climber.id === parseInt(loggedInClimberId))]) : setReviews([...reviews])
    window.location.reload(true)
  }

  return (
    <div  id="reviews">
      <Button id="newReview" variant="dark" onClick={handleClick} hidden={page !== 'climber'}>
          Add Review & Image
      </Button>
      {show && <ReviewForm closeModal={modalClose} loggedInClimberId={loggedInClimberId} onAddReview={handleAddReview}/>}
      <div className="ui grid reviewContainer">
        <div id="review_card">
          { reviewInfo }
        </div>
      </div>
    </div>
  );
}

export default ReviewCollection;