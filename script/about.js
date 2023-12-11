function submitReview() {
    var reviewText = document.getElementById('review').value;

    if (reviewText.trim() === '') {
        alert('Please enter text before submitting a review.');
    } else {
        alert('Thanks for the review!');
        
    }
}

