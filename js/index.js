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


/*
const githubUsername = 'your-github-username';

fetch(`https://api.github.com/users/bobrova77/repos`)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Convert the response to JSON
    return response.json();
  })
  .then(repositories => {
    // Log the data received from the API
    console.log(repositories);
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    // Display a message to the user if the fetch fails
    alert('Could not retrieve the repositories. Please try again later.');
  });


const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

repositories.forEach(repo => {
    const project = document.createElement('li');
    project.innerText = repo.name;
    projectList.appendChild(project);
});
*/


// Create a fetch for github repos
const userName = 'bobrova77';
fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Failed to fetch repositories");
    }
  })
  .then((data) => {
    const repositories = JSON.parse(data);
    console.log(repositories);

    // DOM Selection to select the projects section by id
    const projectSection = document.getElementById("projects");

    // Create a ul in the projects section
    let projectList = document.createElement("ul");
    projectSection.appendChild(projectList);

    for (let repository of repositories) {
      // Create a new list item element
      let project = document.createElement("li");
      // Set the inner text of the project variable to the current repositories
      project.innerText = repository.name;
      // Append the project element to the projectList element
      projectList.appendChild(project);
    }
  })
 .catch((error) => {
  if (error instanceof SyntaxError) {
    console.error("Unparsable response from server");
  } else {
    console.error("Error fetching data: ", error.message);
  }
 })
