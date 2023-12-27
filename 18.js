function createSimplePopup() {
    const userChoice = localStorage.getItem('userConsent');

    if (userChoice === 'accepted') {
        return;
    }

    const popupDiv = document.createElement('div');
    popupDiv.id = 'simplePopup';
    popupDiv.style.position = 'fixed';
    popupDiv.style.top = '0';
    popupDiv.style.left = '0';
    popupDiv.style.width = '100%';
    popupDiv.style.height = '100%';
    popupDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popupDiv.style.zIndex = '9999';
    popupDiv.style.display = 'flex';
    popupDiv.style.justifyContent = 'center';
    popupDiv.style.alignItems = 'center';

    const message = document.createElement('p');
    message.textContent = 'By proceeding, you confirm that you are 18 years old or above. Do you consent to view adult content?';

    const acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept';
    acceptButton.style.padding = '10px 20px';
    acceptButton.style.backgroundColor = '#007bff';
    acceptButton.style.color = 'white';
    acceptButton.style.border = 'none';
    acceptButton.style.cursor = 'pointer';
    acceptButton.style.marginRight = '10px';
    acceptButton.addEventListener('click', () => {
        popupDiv.style.display = 'none';
        localStorage.setItem('userConsent', 'accepted');
    });

    const declineButton = document.createElement('button');
    declineButton.textContent = 'Decline';
    declineButton.style.padding = '10px 20px';
    declineButton.style.backgroundColor = '#ff0000';
    declineButton.style.color = 'white';
    declineButton.style.border = 'none';
    declineButton.style.cursor = 'pointer';
    declineButton.addEventListener('click', () => {
        window.location.href = 'https://example.com'; // Replace with your desired URL
    });

    popupDiv.appendChild(message);
    popupDiv.appendChild(acceptButton);
    popupDiv.appendChild(declineButton);

    document.body.appendChild(popupDiv);

    popupDiv.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', createSimplePopup);
