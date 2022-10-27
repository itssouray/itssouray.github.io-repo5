let data = [
    {
      "day": "mon",
      "amount": 43.45
    },
    {
      "day": "tue",
      "amount": 59.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 86.07
    },
    {
      "day": "fri",
      "amount": 30.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 75.48
    }
  ]

  // console.log(data[1]['day']);
  // console.log(data[1]['amount']);


  let sum=0
  for(let v=0;v<7;v++){
    let x = v+1;
    let s = "b";
    s +=x;
    console.log(s)
    let box = document.getElementById(s)
    sum += data[v]['amount'];
    box.style.height = `${data[v]['amount']}px`
  }

  let heading = document.getElementById("total")
  console.log(sum)
  heading.innerText="$ "+sum.toFixed(2)


 

  