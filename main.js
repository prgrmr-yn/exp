import { suburbsDandy } from "./module.js";
console.log(suburbsDandy);
let inp = document.getElementById('search');
const sub = document.getElementById('submit');
const big = document.getElementById('big')
const detail = document.getElementById('detail')

sub.addEventListener('click', (e)=>{
  e.preventDefault()
  const sValue = suburbsDandy[inp.value.toLowerCase()];
  big.innerHTML = `Bay ${sValue}`
  detail.innerText = 'detail';
  inp.value = ''
})



// //extras for making options for html file
// const suburbs = [
//   'dandenong', 'kul', 'vayswater', 'kilsyth'
// ]

// let string = '';
// // for (const suburb of suburbs) {
// //   const detail= `<option value="${suburb}">${suburb}</option>`
// //   string += detail + '\n'
// // }
// ////string constails the option data

// //
// for (const suburb of suburbs) {
//   const input = prompt(suburb)
//   let num = parseInt(input)
//   console.log(typeof(num));
//   console.log(num);

//   if(!num) {
//     if() {

//     }
//     string += `"${suburb}": ${input},\n`
//   }else{
//     string += `"${suburb}": ${num},\n`
//   }
// }
// console.log(`{
//   ${string}
// }`);
