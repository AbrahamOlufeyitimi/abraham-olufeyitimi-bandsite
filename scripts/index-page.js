


function createFeedbackForm(feedback) {

    //create parent container and add class
    const feedbackCard = document.createElement('article');
    feedbackCard.classList.add('feedback');

    //create form container and add class
    const formContainer = document.createElement('div');
    formContainer.classList.add('feedback__block-one');

    //create form element and add class
    const formEl = document.createElement('form');
    formEl.classList.add('feedback__form');

    //create label and add class and inner text
    const labelEl = document.createElement('label');
    labelEl.classList.add('feedback__label');
    labelEl.innerText = "NAME";

    //create input element and add placeholder text
    const inputEl = document.createElement('input');
    inputEl.classList.add('form-field');
    inputEl.setAttribute('placeholder', 'Enter your name');
    inputEl.setAttribute('name', 'fullName');

    //create label and add class, inner text
    const labelTwo = document.createElement('label');
    labelTwo.classList.add('feedback__label');
    labelTwo.innerText = "COMMENT";

    //create textarea element and add placeholder text
    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('form-field');
    textareaEl.setAttribute('placeholder', 'Add a new comment');
    textareaEl.setAttribute('name', 'comment');

    //create button element and add class
    const btnEl = document.createElement('button');
    btnEl.classList.add('feedback__btn');
    btnEl.innerText = "COMMENT";
    btnEl.setAttribute('type', 'submit');

    //create image container and add class
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('feedback__block-two');

    //create image element and add image source
    const photoEl = document.createElement('img');
    photoEl.classList.add('feedback__photo')
    photoEl.src = "../assets/Images/Mohan-muruge.jpg";

    
    //place elements inside article
    feedbackCard.appendChild(formContainer);
    feedbackCard.appendChild(imgContainer);

    //place elements inside div container
    formContainer.appendChild(formEl);
    imgContainer.appendChild(photoEl);

    //place elements inside form
    formEl.appendChild(labelEl);
    formEl.appendChild(labelTwo);
    formEl.appendChild(btnEl);

    //place elements inside label
    labelEl.appendChild(inputEl);
    labelTwo.appendChild(textareaEl);

    return feedbackCard;
}

function renderFeedbackCard() {
    //retrieve #form-section element
    const ourFeedback = document.querySelector('#form-section');


    const mainForm = createFeedbackForm();
    ourFeedback.appendChild(mainForm);
}

renderFeedbackCard();














const reviews = [
    {
        fullName: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "11/02/2023"
    },
    {
        fullName: "Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "10/28/2023"
    },
    {
        fullName: "Isaac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "10/20/2023"
    }
];


function createReviewCard(review) {

    //create parent container for the review card and add a class
    const cardEl = document.createElement('article');
    cardEl.classList.add('review__card');

    //create a container for the image in the review card and add class
    const imageEl = document.createElement('div');
    imageEl.classList.add('review__image');

    //create image tag and add class
    const pictureEl = document.createElement('img');
    pictureEl.classList.add('review__picture');

    //create second container for text content and add class
    const textEl = document.createElement('div');
    textEl.classList.add('review__text-container');

    //create element to hold name and add class
    const nameEl = document.createElement('p');
    nameEl.classList.add('review__name');
    nameEl.innerText = review.fullName;

    //create element to hole review and add class
    const feedbackEl = document.createElement('p');
    feedbackEl.classList.add('review__text');
    feedbackEl.innerText = review.comment;

    //create container for the review date
    const dateEl = document.createElement('div');
    dateEl.classList.add('review__date');

    //create span for the review date
    const dateText = document.createElement('span');
    dateText.classList.add('review__date-text');
    dateText.innerText = review.date;




    //place elements in containers
    cardEl.appendChild(imageEl);
    cardEl.appendChild(textEl);

    
    
    textEl.appendChild(dateEl);
    imageEl.appendChild(pictureEl);
    dateEl.appendChild(nameEl);
    textEl.appendChild(feedbackEl);
    dateEl.appendChild(dateText);

    return cardEl;

}


function renderReviews() {
    //retrieve element
    const ourReviewsEl = document.querySelector('#our-reviews');

    //clear current html in ourReviewsEl
    ourReviewsEl.innerHTML = "";
    
    //use reviews array and create a review card for each player
    reviews.forEach((review) => {

        const card = createReviewCard(review);
        ourReviewsEl.appendChild(card);
    })
}



function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.fullName.value;
    const reviewComment = event.target.comment.value;
    const getDate = new Date().toLocaleString();

    const  newData = {
        fullName: name, 
        comment: reviewComment,
        date: getDate
    };


    reviews.unshift(newData);
    renderReviews();
    event.target.reset();
}

const formEl = document.getElementById('form-section');

formEl.addEventListener('submit', handleFormSubmit);

renderReviews();

