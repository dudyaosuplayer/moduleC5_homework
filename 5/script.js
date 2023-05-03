function useRequest(page, limit) {
  return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then(response => response.json())
    .catch(() => {
              console.log('error');
              contentNode.innerHTML = '<p>Что-то пошло не так</p>';
          })
}


function displayContent(json) {
  let cards = '';

  json.forEach(item => {
      const cardBlock = `
      <div class="card">
        <img class="card_image" src="${item.download_url}" width="150" height="150" alt="image">
        <p>${item.author}</p>
      </div>`;
      cards = cards + cardBlock;
    
  });

  resNode.innerHTML = cards;

}

const btn = document.querySelector('.j-btn-request');
const resNode = document.querySelector('.j-result');

if(localStorage.lastReq){
  console.log(typeof(localStorage.lastReq))
  displayContent(JSON.parse(localStorage.getItem('lastReq')))
}

btn.addEventListener('click', async function() {
  let page = Number(document.querySelector('.input-value1').value);
  let limit = Number(document.querySelector('.input-value2').value);
  
  
  if((isNaN(page) || page < 1 || page > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
    resNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
  }
  else if(isNaN(limit) || limit < 1 || limit > 10) {
    resNode.textContent = 'Лимит вне диапазона от 1 до 10'
  }
  else if(isNaN(page) || page < 1 || page > 10) {
    resNode.textContent = 'Номер страницы вне диапазона от 1 до 10'
  }
  else {
    const json = await useRequest(page, limit);
    console.log(typeof(json))
    displayContent(json);
    localStorage.setItem('lastReq', JSON.stringify(json))
  }
  
});