import { suburbsDandy} from "./module.js";
let inp = document.getElementById('search');
const sub = document.getElementById('submit');
const big = document.getElementById('big')
const detail = document.getElementById('detail')
const bunnings = document.getElementById('bunnings')

function renderHtml() {
  const uValue = inp.value.toUpperCase()
  const lValue = suburbsDandy[inp.value.toLowerCase()];

  if (!lValue) {
    console.log('cant fiind');
    document.querySelector('#search-dandy').innerHTML = 'not found'
    return inp.value = '';
  }
  big.innerHTML = `<span class ='heading'>BAY</span>${uValue}  ··› ${lValue["bay"]}`
  if (lValue['bunnings']) {
    bunnings.innerHTML = `<span class ='heading'>BUNNINGS</span>True`
  }else {
    bunnings.innerHTML = `<span class ='heading'>BUNNINGS</span>False`
  }
  if(suburbsDandy[inp.value]["timeslot"]){
    let x = '';
    suburbsDandy[inp.value]["timeslots"].forEach(el => {
      x += `${el.toUpperCase()} <br>`
    });
    detail.innerHTML = `<span class ='heading'>TIMESLOTS</span><br>${x}`
  } else {
    detail.innerHTML = `<span class ='heading'>TIMESLOTS</span>`
  }
  inp.value = ''
}
console.log('success');

inp.addEventListener('keyup', e =>{
  if (e.key === 'Enter') {
    e.preventDefault();
    renderHtml();
  }
})

sub.addEventListener('click', (e)=>{
  e.preventDefault()
  renderHtml()
})
  