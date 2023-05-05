// GET REQUEST
axios.defaults.headers.common['X-Auth-Tok']='sometoken'


function getTodos() {
  
  axios.get('https://jsonplaceholder.typicode.com/todos/1' ,{
    params:{_limit:5} 
  })
    .then(res =>{showOutput(res)})
}

// POST REQUEST
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    
      hello: 'prashast'
    
  }).then(res =>{showOutput(res)})
    .catch(err=> console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
    
      hello: 'prashast'
    
  }).then(res =>{showOutput(res)})
    .catch(err=> console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(res =>{showOutput(res)})
  .catch(err=> console.log(err));
  
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
  axios.get('https://jsonplaceholder.typicode.com/todos/1'),
  axios.get('https://jsonplaceholder.typicode.com/todos')
  ]).then(res => {showOutput(res[1])
                  console.log(res[0])
  })
  .catch(err=> console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'content-t':'json',
      Authoriztion : 'token'
    }
  }
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    
      hello: 'prashast'
    
  }, config).then(res =>{showOutput(res)})
    .catch(err=> console.log(err));

}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const option ={
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'hello world'
    },
    transformResponse: axios.defaults.transformResponse.concat(data =>{
      data.title = data.title.toUpperCase();
      return data;
    })
  }
  axios(option).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todosss/1' ,{
    params:{_limit:5} 
  })
    .then(res =>{showOutput(res)})
    .catch(err =>{
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    })
}

// CANCEL TOKEN
function cancelToken() {
 const source = axios.CancelToken.source();

 axios.get('https://jsonplaceholder.typicode.com/todos', {
  cancelToken: source.token
 })
 .then(res => showOutput(res))
 .catch(thrown => {
  if(axios.isCancel(thrown)){
    console.log('Request cancelled', thrown.message);
  }
 });
 if(true){
  source.cancel('Request cancelled')
 }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use( config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)
  return config;
}, err =>{
  return Promise.reject(err);
}

)

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
