const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');


const postcodeAreas = {
  "Sydney": [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
  "Bondi Junction": [2022],
  "Kingsford": [2032],
  // Add more areas and postcodes as needed
};

const refreshIcon = document.querySelector(".fa-sharp");

refreshIcon.addEventListener("click", () => {
  window.location.reload();
});

function getArea(postcode) {
  for (const area in postcodeAreas) {
    if (postcodeAreas[area].includes(postcode)) {
      return area;
    }
  }
  return "Unknown area";
}

inputBox.onkeyup = () => {
  let input = inputBox.value;
  if(input.length === 4) {
    input = parseInt(input)
    let result = getArea(input)
    display(result)
  }
}

function display(result) {
  const content = `<ul><li class="bay">${result}<li></ul>`
  resultBox.innerHTML = content
}
