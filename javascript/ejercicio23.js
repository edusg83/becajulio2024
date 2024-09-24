const request = new Request('https://eoi.wiremockapi.cloud/clientes');

fetch(request)
  .then(response => response.json()).then(data => {
    data.UserListData.forEach(user => {
        console.log(user);
  })
  })
  .catch(err => console.log('Error:', err));