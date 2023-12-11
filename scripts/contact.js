// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


let submitButton = document.getElementById('submit-button');
let contactPage = document.getElementById('contact-page');

function ThanksButton() {
    let thankYouMessage = document.createElement('p');
    thankYouMessage.innerHTML = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';

    // Clear existing content and append the new <p> element
    contactPage.innerHTML = '';
    contactPage.appendChild(thankYouMessage);
};

submitButton.addEventListener('click', ThanksButton);