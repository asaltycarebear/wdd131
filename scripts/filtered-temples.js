
/*window. would be needed to make the button work without a full page load BUT the defer in the head section of the HTML makes this nor required.*/
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu"); /*# target id's*/
    const navMenu = document.querySelector("#nav-menu");

    menuButton.addEventListener("click", () => { /*=> is used in place of function ()*/
        navMenu.classList.toggle("open");

        /*Toggle*/ 
        if (navMenu.classList.contains("open")) {
            menuButton.textContent = "✖";
        } 
        else {
            menuButton.textContent = "☰";
        }
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Provo City Center",
    location: "Provo, Utah, USA",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  },
    {
    templeName: "Albuquerque",
    location: "Albuquerque, New Mexico, USA",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
  },
    {
    templeName: "Manhattan New York",
    location: "Manhattan, New York, USA",
    dedicated: "2014, June, 13",
    area: 20630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-248728-wallpaper.jpg"
  },
];

const templesContainer = document.getElementById("temples-container");

// Function for displaying desired filter. Creates 
function displayTemples(filteredTemples) {
  templesContainer.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `Image of ${temple.templeName}`;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templesContainer.appendChild(card);
  });
}

function showAllTemples() {
  displayTemples(temples);
}

function showOldTemples() {
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0].trim());
    return year < 1900;
  });
  displayTemples(filtered);
}

function showNewTemples() {
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0].trim());
    return year > 2000;
  });
  displayTemples(filtered);
}

function showLargeTemples() {
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
}

function showSmallTemples() {
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
}

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent reloading nonsense

    const filter = event.target.textContent.toLowerCase();

    switch (filter) {
      case "home":
        showAllTemples();
        break;
      case "old":
        showOldTemples();
        break;
      case "new":
        showNewTemples();
        break;
      case "large":
        showLargeTemples();
        break;
      case "small":
        showSmallTemples();
        break;
    }
  });
});

showAllTemples(); // needed for initial loading
