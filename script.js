const container = document.getElementById('container');
const loading = document.querySelector('.loading');
let pageNumber = 0;
// var page = `data/cars-${pageNumber}.json`
const page = ['data/cars-1.json','data/cars-2.json','data/cars-3.json','data/cars-4.json','data/cars-5.json']


const showLoading = () => {
	loading.classList.add('show');
	setTimeout(getPost, 1000)
}

async function getPost  ()  {
   await fetch(page[pageNumber])
   .then(res =>  res.json())
   .then(data => addDataToDOM(data) )
   if(pageNumber <=4){ pageNumber ++ } 
   else {
     pageNumber = 1}
}

const addDataToDOM = (data) => {
  console.log(page[pageNumber])
  console.log(pageNumber)
for( car in data){
const postElement = document.createElement('tr');
	postElement.innerHTML = `
      <th scope="row">${data[car]["Name"]}</th>
      <td>${data[car]["Miles_per_Gallon"]}</td>
      <td>${data[car]["Cylinders"]}</td>
      <td>${data[car]["Displacement"]}</td>
       <th scope="row">${data[car]["Horsepower"]}</th>
      <td>${data[car]["Weight_in_lbs"]}</td>
      <td>${data[car]["Acceleration"]}</td>
      <td>${data[car]["Year"]}</td>
      <td>${data[car]["Origin"]}</td>`;
	container.appendChild(postElement);
	}
	
	
	loading.classList.remove('show');
}

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
		showLoading();
	}
});

getPost();
