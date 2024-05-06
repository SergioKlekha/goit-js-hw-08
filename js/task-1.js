const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');

    console.log(`Категорія: ${categoryName}`);
    console.log(
        `Кількість елементів у категорії ${categoryName}: ${categoryElements.length}`,
    );
});

document.querySelector('.list-home').style.listStyleType = 'none';
