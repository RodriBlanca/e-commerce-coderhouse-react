const message = (message) => {
    const messageElement = document.createElement('p');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    return messageElement;
}

export default message;