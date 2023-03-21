// Add a suburb
Array.push(a,b)
Array.sort((a, b) => a.localeCompare(b));

// update the option in html
option = '';

suburbs.forEach(x=> {
  option += `<option value="${x}">${x}</option>
  `
})


// creating json from array

function arrayToJson() {
  const suburbs = ['a', 'b', 'c'];
  let data = '';

  suburbs.forEach(x => {
    let bay = prompt(x);
    let timeslot = prompt('Is this TimeSlot?')
    let ts;
    if (timeslot) {
      ts = prompt('Name them')
    }else {
      ts= null;
    }
    data += `"${x}":{
      "suburb name": "${x}",
      "bay": "${bay}",
      "timeslot": ${Boolean(timeslot)},
      "timeslots": [${ts}],
      "details": {
        "notes": []
      }
    },
    `
  })

  console.log(data)
  document.querySelector('body').textContent = data;
}
