const url = 'https://picsum.photos/v2/list?limit=';

const btn = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result')

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onload = function() {
     if(xhr.status != 200) {
       console.log(`Статус ответа: ${xhr.status}(${xhr.statusText})`)
     } else {
       const result = JSON.parse(xhr.response);
       console.log(result);
       if(callback) {
         callback(result);
       }
     }
  };
  xhr.onerror = function() {
     console.log('Ошибка! Статус ответа: ', xhr.status, xhr.statusText);
  };
      
  xhr.send();
}

function displayResult(data) {
  let cards = '';
  data.forEach(item => {
    let card = `
    <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    
    cards += card;
    
  });
  
  resultNode.innerHTML = cards;
}


   
// console.log(btn, resultNode);

btn.addEventListener('click', () => {
  let inpVal = Number(document.querySelector('.input-value').value);
  // console.log(inpVal);
  if(inpVal < 1 || inpVal > 10) {
    resultNode.textContent = 'число вне диапазона от 1 до 10';
  } else {
    useRequest(url + inpVal, displayResult);
  }  
});