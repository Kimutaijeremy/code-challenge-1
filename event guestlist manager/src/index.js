//Selecting the elements from DOM
const form = document.querySelector("#form"),
      input = document.querySelector("#input"),
      list = document.querySelector("#list");

//Initialising an array to follow up the guests
let guests = [];

//Submitting form for adding a new guest
form.addEventListener("submit", e => {
  e.preventDefault();
  //Stop or do nothing if the guests=10 or input is empty
  if (input.value.trim() === '' ||
      guests.length >= 10) return;
  //Pushes a new guest into the array with a unique id, guest's name and a boolean(true/false) showing attendance,is true by default
  guests.push({ id: Date.now(), name: input.value.trim(), attending: true, timestamp: new Date() });
  // Stores the current date and time when the guest was added

  //Clearing the input field
  input.value = '';
  //Re-renderers the guest list to be up to date
  render();
});

//Main re-rendering function to refresh the list on the page
function render(){
  //Clearing the existing list first
  list.innerHTML = '';
  
  //Looping through each guest in the array
  guests.forEach(guest => {
    //Creating a new <li>, a "toggle" button, and a "remove" button
    const li = document.createElement("li"),
          toggle = document.createElement("button"),
          remove = document.createElement("button");

    //Setting the list item's text to the guest's name and adding a timestamp
    li.textContent = `${guest.name} (Added: ${guest.timestamp.toLocaleString()}) `;

    // Button to show or change attendance
    // Text depends on whether the person is attending or not
    toggle.textContent = guest.attending ? "Attending" : "Not Attending";
    // On clicking, we invert the "attending" state and re-render
    toggle.onclick = () => { guest.attending = !guest.attending; render(); };
  
    // Button to remove this guest from the array
    // Filtering all guests except the one we want to delete
    remove.textContent = "Remove";
    remove.onclick = () => { guests = guests.filter(g => g.id !== guest.id); render(); };
  
    // Prepending the two buttons first, then the guest's name
    li.prepend(toggle, remove);
    // Finally add the list funtions
    list.prepend(li);
  });
}