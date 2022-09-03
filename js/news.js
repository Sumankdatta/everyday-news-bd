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
          <a onclick="loadNewsTitle()" class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
     </li>                         
 </ul>`
     newsContainer.appendChild(creatDiv)
  })

}

const loadNewsTitle=()=>{
  const url='https://openapi.programming-hero.com/api/news/category/01'
  fetch(url)
  .then(res => res.json())
  .then(data =>newsTitle(data.data))
  
}




    


const newsTitle=newsCards=>{
   
    const cardContainer=document.getElementById('card');
    cardContainer.innerHTML='';
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
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
     </div>`
   

cardContainer.appendChild(creatNewDiv)
})
}


loadNews('')