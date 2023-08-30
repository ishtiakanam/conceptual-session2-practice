// const loadCategory = () => {
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch(err => console.log(err)) //to catch the problem we use catch
//     console.log('Loading category')
// }
// loadCategory();

// let count = 0;
const handleCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');

    // 01
    const trimeData = data.data.news_category.slice(0, 3)
    trimeData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleLoadNews('${category.category_id}')" class="tab tab-bordered">${category.category_name} </a>
    `
        tabContainer.appendChild(div)
    })

    // 02
    // data.data.news_category.slice(0, 3).forEach((category) => {
    //     // count = count + 1;
    //     const div = document.createElement('div')
    //     div.innerHTML = `
    //     <a class="tab tab-bordered">${category.category_name} ${count}</a>
    //     `
    //     tabContainer.appendChild(div)
    // })
    console.log(data.data.news_category)
}

const handleLoadNews = async (categoryId) => {
    console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await res.json()
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''
    data.data?.forEach((news) => {
        // console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-3/4 mx-auto  bg-base-100 shadow-xl">
        <figure><img
                src=${news?.image_url}
                alt="Shoes" /></figure>
                   <div class="card-body">
                      <h2 class="card-title">${news.title.slice(0, 40)}</h2>
               <p>${news.details.slice(0, 50)}</p>
               <h3 Total views:>${news.total_view ? news.total_view : "no views"}</h3>
            <div class="flex card-actions justify-start">
                <button class="btn btn-primary">${news.rating?.badge}</button>
            </div>
            <div class='flex gap-3'>
            <div class='w-14 rounded-full'>
            <img src = ${news.author?.img} />
            </div>
            <div>
              <h6>${news.author?.name}</h6>
              <h6>${news.author?.published_date}</h6>
            </div>
            <div>
            <button class="btn btn-primary">${news.rating?.badge}</button>
            </div>
            </div>
        </div>
    </div>
     `
        cardContainer.appendChild(div)
    });

    console.log(data.data)
    // console.log(categoryId)
};

handleCategory();
handleLoadNews('01');