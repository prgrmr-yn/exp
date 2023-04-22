let suburbs = ["aspendale", "abox hill", "dandenong"]
let suburbsHash = {
  "aspenda3le": "1",
  "abox hi5ll": "5",
  "abox hi43ll": "5",
  "abox h2ill": "5",
  "abox h3ill": "5",
  "abox h53ill": "5",
  "abox 23hill": "5",
  "abox 5hill": "5",
  "aboxew hill": "5",
  "aboex hill": "5",
  "abox hiell": "5",
  "abox hillee": "5",
  "abox hiarll": "5",
  "abox hsill": "5",
  "abox dhill": "5",
  "aboxd hill": "5",
  "abodx hill": "5",
  "dandenong": "5"
}

let suburbPlace = document.getElementById('suburb-place')
let destinationPlace = document.getElementById('destination-place')
let inputEl = document.getElementById('search')
let searchResult = document.querySelector('.search-result')

searchResult.style.display = 'none'

inputEl.addEventListener('keyup', e=>{
  resultCheck()
  const suburbsObj = [];
  for (const suburb in suburbsHash) {
    if (inputEl.value){
      if (suburb.startsWith(inputEl.value)){
        suburbsObj.push({[suburb]: suburbsHash[suburb]})
      }
    }
    console.log(suburbsObj);
    created(suburbsObj)
  }
})

function resultCheck() {
  if (!inputEl.value){
    searchResult.style.display = 'none'
  }else {
      searchResult.style.display = 'block'
  }
}

function created(suburbsObj) {
  let resultDiv = ''
  for (const sub of suburbsObj) {
    for (const key in sub) {
      resultDiv += `<div class="each-item">
      <div class="suburb-place" id="suburb-place">${key}</div>
      <div class="destination-place" id="destination-place">${sub[key]}</div>
    </div>`
    }
  }


  const string = `
    <div class="each-item">
      <div class="suburb-place" id="suburb-place">aspendale</div>
      <div class="destination-place" id="destination-place">12</div>
    </div>
    <div class="each-item">
      <div class="suburb-place" id="suburb-place">aspendale</div>
      <div class="destination-place" id="destination-place">12</div>
</div>`

  searchResult.innerHTML = resultDiv;
}
