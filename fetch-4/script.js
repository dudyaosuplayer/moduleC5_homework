const url = 'https://picsum.photos/';
const btn = document.querySelector('.j-btn-request');
const resNode = document.querySelector('.j-result');


btn.addEventListener('click', function() {
  let inpVal1 = Number(document.querySelector('.input-value1').value);
  let inpVal2 = Number(document.querySelector('.input-value2').value);
  
  console.log(inpVal1, inpVal2);
  
  if (isNaN(inpVal1) || isNaN(inpVal2) || inpVal1 < 100 || inpVal1 > 300 || inpVal2 < 100 || inpVal2 > 300) {
    resNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  } else {
    // const options = {
    //   method: 'POST'
    // }
    fetch(url + inpVal1 + '/' + inpVal2)
     .then(response => response.blob())
     .then(blob => {
      console.log(blob);
      const imgUrl = URL.createObjectURL(blob);
      resNode.innerHTML = `<img src="${imgUrl}">`
    })
  }
});