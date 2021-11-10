import message from "./message.js";

const registeredUser = (userName) => {
    // Como parámetro también va (, userPassword)
    const messageContainer = document.getElementById('message-container');

    if(localStorage.getItem("user") === userName) {
        /* Loguear al usuario */
        console.log('Logged')
    } else {
        const logInFailed = message(`The user ${userName} is not logged in. Please try again.`);

        messageContainer.appendChild(logInFailed);

            setTimeout(() => {
                logInFailed.remove();
            }, 4000);
    }
}

export default registeredUser;