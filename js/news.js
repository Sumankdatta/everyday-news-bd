const loadNews=async()=>{
  const url ='https://openapi.programming-hero.com/api/news/categories'
  const res=await fetch(url);
  const data=await res.json();
  displayNews(data.data.news_category)
}


const displayNews = newsitems => {
  
   const newsContainer=document.getElementById('news-container');
   
   newsitems.forEach(news =>{
  
const creatDiv=document.createElement('div');


creatDiv.innerHTML=`
<ul class="navbar-nav">
              <li class="nav-item">
                <a onclick="loadNewsTitle('${news.category_id}')"  class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
              </li>
            
            </ul>`
           
     newsContainer.appendChild(creatDiv);

     
  })


}





  const loadNewsTitle=async(category_id)=>{
    toggleSpinner(true);
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res=await fetch(url);
    const data=await res.json();
    newsTitle(data.data)


 
}


const newsTitle=newsCards=>{
   
    const cardContainer=document.getElementById('cards');
    

    
    cardContainer.innerHTML=``;

    newsCards = newsCards.slice(0,40);
    const noItems=document.getElementById('no-items');
    if(newsCards.length === 0){
      noItems.classList.remove('d-none')
    }
    else{
      noItems.classList.add('d-none')
    }

    newsCards.forEach(cards =>{
   
     
   const creatNewDiv=document.createElement('div');
   creatNewDiv.innerHTML=`
  <div class="row g-0 mb-5" style="border-top:1px solid gray;border-bottom:1px solid gray;">
          <div class="col-md-4 px-4">
            <img src="${cards.image_url}" class="img-fluid rounded-start me-5" style="width:1000px;height:100%;" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${cards.title}</h5>
              <p class="card-text">${cards.details.slice(0,200)}....</p>
              <div class="d-flex justify-content-between mt-4">
                    <div class="d-flex">
                      
                            <img src="${cards.author.img}" class="rounded-circle" style="height:50px;width:50px;" alt="...">
                        <div class="ms-3">
                            <h6>${cards.author.name ? cards.author.name:'No name'}</h6>
                            <p>${cards.author.published_date}</p>
                        </div>
                    </div>
                            
                     <div>
                        <p>View: ${cards.total_view}</p>
                     </div>  
 
                    <div>
                    <button onclick="displayNewsLoad('${cards._id}')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View Details
                  </button>
                    </div>
              </div>
            </div>
          </div>
          </div>
        `
  
   
        cardContainer.appendChild(creatNewDiv)


})
const searchField=document.getElementById('input');
const field=newsCards .length;
// console.log(field)
searchField.value=field +'  ' +'Items found'

toggleSpinner(false)

}


const displayNewsLoad=(_id)=>{
  console.log('click',_id)
  const url=`https://openapi.programming-hero.com/api/news/${_id}`
 console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayNewsDetail(data.data[0]))

}
  
  
 



const displayNewsDetail=cards=>{
  
  const newCardsContainer=document.getElementById('detail-card');
  
  
  newCardsContainer.innerHTML=``;
  const creatDivContainer=document.createElement('div');
  
  creatDivContainer.innerHTML=`
  
  <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">${cards.title}</h4>
          
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${cards.image_url ? cards.image_url: 'no'}" class="card-img-top" alt="...">
        <p class="card-text">${cards.details}</p>
        <div class="d-flex d-flex justify-content-around mt-4">
            <div class="d-flex">
              
            <img src="${cards.author.img}" class="rounded-circle" style="height:50px;width:50px;" alt="...">
            <div class="ms-3">
                <h6>${cards.author.name ? cards.author.name:'No name'}</h6>
                <p>${cards.author.published_date}</p>
            </div>
        </div>
                
         <div>
            <h6>Views: ${cards.total_view ? cards.total_view:'No views'}</h6>
         </div>   
    
  </div>
  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
  
  
  `

        newCardsContainer.appendChild(creatDivContainer) 
       
}
const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}







loadNews('03')
loadNewsTitle('01')


