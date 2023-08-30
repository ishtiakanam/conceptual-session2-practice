const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container')
    const trimeData = data.data.news_category.slice(0, 3)
    trimeData.forEach((category) => {
        const div = document.createElement('div')
        div.innerHTML = `
    <a class="tab">${category.category_name}</a>
    `
        tabContainer.appendChild(div);
    });
    // console.log(data.data.news_category);
    // console.log('second category')
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))
    // <a class="tab tab-bordered tab-active">Tab 2</a>
    // <a class="tab tab-bordered">Tab 3</a>
}
loadCategory();