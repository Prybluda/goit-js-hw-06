const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const title = category.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const countItem = category.querySelectorAll('li');
    console.log(`Elements:${countItem.length}`);
});

//Господе, чому так складно!?