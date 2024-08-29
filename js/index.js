const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = <span>Anna</span><span>&#169</span><span>$(year)</span>
footer.appendChild(copyright);

const skillslist = ['python', 'HTML', 'CSS', 'JavaScript', 'GitHub', 'Figma', 'API'];
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

for (let skill of skillsList) {
    let skillItem = document.createElement('li');
    skillItem.innerHTML = skill;
    skillsUL.appendChild(skillItem);
}

// Create Message Form Submit
const messageForm = document.querySelector('form[name = "leave_message"]');
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.userEmail.value;
    const messages = e.target.userMessage.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", messages);

// Display Messages in List
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `<a href = "mailto:${email}">${name} </a><span>wrote: ${messages}</span>`;

// Create Remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
removeButton.addEventListener('click', (e) => {
    const entry = removeButton.parentNode;
    entry.removeChild();
    
// Hide Message section till message is created and submit button pressed
    if (messageList.childElementCount === 0) {
        messageSection.style.display = "none";
        // console.log(messageList.childElementCount)
    }
});

// Create Edit button
const editButton = document.createElement('button');
editButton.innerText = 'edit';
editButton.type = 'button';
editButton.addEventListener('click', (e) => {
    const updateMessage = prompt('Please edit your message');
    let editedMessage = newMessage.querySelector('span');
    editedMessage.textContent = `wrote: ${updatedMessage}`;
});
newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
messageSection.style.display = "block";
messageForm.reset();
})