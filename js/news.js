const loadNews=()=>{

fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data =>displayNews(data.data.news_category))
}
const displayNews = newsitems => {
   const newsContainer=document.getElementById('news-container');
   newsitems.forEach(news =>{
    // console.log(news)
  
const creatDiv=document.createElement('div');
creatDiv.innerHTML=`
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <li class="nav-item">
          <a onclick="loadNewsTitle('${news.category_id}')" class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
     </li>                         
 </ul>`
     newsContainer.appendChild(creatDiv)
  })

}

const loadNewsTitle=(category_id)=>{
  console.log(category_id)
  const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`
  fetch(url)
  .then(res => res.json())
  .then(data =>newsTitle(data.data))
  
}


const newsTitle=newsCards=>{
   
    const cardContainer=document.getElementById('card');
    cardContainer.innerHTML=``;
    newsCards.forEach(cards =>{
      console.log(cards)
    
   const creatNewDiv=document.createElement('div');
   creatNewDiv.innerHTML=`
   <div class="row g-0">
                <div class="col-md-4">
                    <img src="${cards.image_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${cards.title}</h5>
                      <p class="card-text">${cards.details.slice(0,200)}...</p>
                     <div class="d-flex justify-content-around">
                     <div>
                     <p>${cards}</p>
                     <p>${cards.author.name}</p>
                     </div>
                     <div>
                     <p>${cards.total_view}</p>
                     </div>
                     </div>
                    </div>
                  </div>
     </div>`
   

cardContainer.appendChild(creatNewDiv)
})
}


loadNews('')