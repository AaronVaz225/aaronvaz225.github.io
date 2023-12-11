// Function to open the modal with a review
function openReview(guitarName) {
    //review content for each guitar
    const reviews = {
        "Lindas Custom Guitar": "This guitar is amazing!",
        "Aarons Custom Guitar": "My son loves this guitar!",
        "Erics Custom Guitar": "I bought this guitar for my wife and she loves it!",
        "Mikes Custom Guitar": "Ehh, it's okay.",
        "Dougs Custom Guitar": "I've never played guitar before, but this guitar is great for beginners!",
        "Carols Custom Guitar": "Love this guitar!",
        "Peters Custom Guitar": "Too expensive!",
        "Amandas Custom Guitar": "I sold my car to buy this guitar and it was worth it!"
        // Add reviews for other guitars here
    };

    // Get the review for the clicked guitar
    const review = reviews[guitarName];

    // Set the modal content
    const modalTitle = document.getElementById("modal-title");
    const modalReview = document.getElementById("modal-review");
    
    // Remove background image for the modal's h2
    const modalH2 = document.querySelector(".modal h2");
    modalH2.style.backgroundImage = "none";

    modalTitle.textContent = `${guitarName} Review`;
    modalReview.textContent = review;

    // Display the modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}