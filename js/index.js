const base = "http://localhost:3000/events";

document.addEventListener("DOMContentLoaded", () => {
  fetchEvents();
});
function purchase1() {
  alert("purchase enjoy your event");
}


function fetchEvents() {
  fetch(`${base}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((events) => {
      events.forEach((event) => renderEvents(event));
    })
    .catch((error) => console.log(error));
}
//rendering the events
function renderEvents(event) {
  const eventsContainer = document.querySelector("#events");

  const colDiv = document.createElement("div");
  // colDiv.classList.add("col");

  const parentDiv = document.createElement("div");
  parentDiv.classList.add("card", "p-2");

  const image = document.createElement("img");
  image.classList.add("card-img-top", "mt-2");
  image.style.minWidth = 200;
  image.height = 300;
  image.src = event.poster;

  //append image to div
  parentDiv.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-Body");

  //add event title
  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = event.title;

  //add description
  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = event.description;

  //date
  const date = document.createElement("p");
  date.className = "card-date";
  date.innerText = event.date;

  //venue
  const venue = document.createElement("p");
  venue.className = "card-venue";
  venue.innerText = event.venue;

  //getting number of tickets available
  const tickets = document.createElement("p");
  tickets.className = "card-text";
  tickets.innerText = `Available Tickets: ${
    event.capacity - event.tickets_sold
  }`;

  //purchase button
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerText = "PURCHASE";
  button.addEventListener("click", purchase1);

  cardBody.append(title, description, date, venue, tickets, button);
  //append card body to parent div
  parentDiv.appendChild(cardBody);

  colDiv.append(parentDiv);

  //append each card to event container
  eventsContainer.appendChild(colDiv);


  
}
