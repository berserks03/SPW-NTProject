// Hamburger
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(element => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });   
    
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(element => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });    
  }  
})

// Hero
const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})


// Table
const tableRows = document.querySelectorAll('tr');

for (let i = 1; i < tableRows.length; i++) {
  if (tableRows[i].querySelector('td').innerText !== "-") {
    tableRows[i].classList.add('highlight');
 }  
}

const filterTable = (column, dropdownName, option) => {
  let dropdown, table, rows, cells, item, filter;
  dropdown = document.getElementById(dropdownName);
  table = document.getElementById("Table");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    item = cells[column] || null;
    if (filter === option || !item || (filter === item.textContent)) {
      row.style.display = ""; 
    }
    else {
      row.style.display = "none";
    }
  }
}

const ffilterTable = (event) => {
  let filter = event.target.value.toUpperCase();
  let rows = document.querySelector("#Table").rows;
    
  for (let i = 1; i < rows.length; i++) {
    let firstCol = rows[i].cells[2].textContent.toUpperCase();
    let secondCol = rows[i].cells[3].textContent.toUpperCase();
    let thirddCol = rows[i].cells[4].textContent.toUpperCase();
    let fourthCol = rows[i].cells[5].textContent.toUpperCase();
    if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1|| thirddCol.indexOf(filter) > -1|| fourthCol.indexOf(filter) > -1) {
        rows[i].style.display = "";
    } else {
        rows[i].style.display = "none";
    }      
  }
}

document
  .querySelectorAll('#areaDropdown,#roomNumberDropdown,#windowsOrientationDropdown,#completionDropdown')
  .forEach(element => {
element.addEventListener('change', ffilterTable, false);
})

// To top button
const topButton = document.getElementById("toTopBtn");
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {    
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

const topFunction = () => {
  window.scrollTo({top:0, behavior:"smooth"})
}

// Links
const links = document.querySelectorAll("a");

links.forEach(link => link.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}
