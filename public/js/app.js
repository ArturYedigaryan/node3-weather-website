
  const weatherForm = document.querySelector('form');
  const search = document.querySelector('input');
  const messageOne = document.querySelector('#message-1');
  const messageTwo = document.querySelector('#message-2');
  const icon = document.querySelector('img');
  messageOne.textContent = '';
  messageTwo.textContent = '';
  icon.src = '';
  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    messageOne.textContent = 'Loading..'
    messageTwo.textContent = '';
    icon.src = ''
    if(location.trim()) {
      fetch(`/weather?address=${location}`).then( response => {
        response.json().then( data => {
          if(data.error){
            messageOne.textContent = data.error;
          } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            icon.src = data.icon;
            weatherForm.reset();
          }
         });
      });
    }
  });