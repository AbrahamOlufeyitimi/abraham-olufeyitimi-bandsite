const shows = [
    {showDate: 'Mon Sept 09 2024', showVenue: 'Ronald Lane', showLocation: 'San Francisco, CA'},
    {showDate: 'Tue Sept 17 2024', showVenue: 'Pier 3 East', showLocation: 'San Francisco, CA'},
    {showDate: 'Sat Oct 12 2024', showVenue: 'View Lounge', showLocation: 'San Francisco, CA'},
    {showDate: 'Sat Nov 16 2024', showVenue: 'Hyatt Agency', showLocation: 'San Francisco, CA'},
    {showDate: 'Fri Nov 29 2024', showVenue: 'Moscow Center', showLocation: 'San Francisco, CA'},
    {showDate: 'Wed Dec 18 2024', showVenue: 'Press Club', showLocation: 'San Francisco, CA'}
]

/* <p>DATE</p>
<p>Mon Sept 09 2024</p>

<p>VENUE</p>
<p>Ronald Lane</p>

<p>LOCATION</p>
<p>San Francisco, CA</p>

<button>BUY TICKETS</button> */


function createShow (show) {

    //create parent container article and add class= 'show'
    const showBlock = document.createElement('article');
    showBlock.classList.add('show');

    //create label for the date and add class name and also add text 
    const eventDateLabel = document.createElement('p');
    eventDateLabel.classList.add('label');
    eventDateLabel.innerText = 'DATE';

    //create HTML tag and add class, text to it
    const eventDate = document.createElement('p');
    eventDate.classList.add('scheduled-date');
    eventDate.innerText = show.showDate;

    
    //create label for the venue and add class name and also add text 
    const eventVenueLabel = document.createElement('p');
    eventVenueLabel.classList.add('label');
    eventVenueLabel.innerText = 'VENUE';

    //create HTML tag and add class, text to it
    const eventVenue = document.createElement('p');
    eventVenue.classList.add('scheduled-venue');
    eventVenue.innerText = show.showVenue;


    //create label for the location and add class name and also add text 
    const eventLocationLabel = document.createElement('p');
    eventLocationLabel.classList.add('label');
    eventLocationLabel.innerText = 'LOCATION';

    //create HTML tag and add class, text to it
    const eventLocation = document.createElement('p');
    eventLocation.classList.add('scheduled-location');
    eventLocation.innerText = show.showLocation;

    //create button and add class name
    const showButton = document.createElement('button');
    showButton.classList.add('show-button');
    showButton.innerText = 'BUY TICKETS';

    //create button and add class name
    const showDivider = document.createElement('hr');
    showDivider.classList.add('solid');
    // showDivider.innerText = 'BUY TICKETS';

    //place inside article tag
    showBlock.appendChild(eventDateLabel);
    showBlock.appendChild(eventDate);

    showBlock.appendChild(eventVenueLabel);
    showBlock.appendChild(eventVenue);

    showBlock.appendChild(eventLocationLabel);
    showBlock.appendChild(eventLocation);

    showBlock.appendChild(showButton);
    showBlock.appendChild(showDivider);

    return showBlock
}


function renderInfo () {

    //retrieve #band-shows element
    const showInfo = document.querySelector('#band-shows');

    //clear current html in band-shows
    showInfo.innerHTML = "";

    //use shows array to create each show block for each show
    shows.forEach((show) => {
        const block = createShow(show);
        showInfo.appendChild(block);
    })
}

renderInfo();