const productCategories = [
    {
        name: 'Sauces',
        image: '/categories/sauces.svg',
        products: [
            {
                name: 'Dressing and sauces',
                image: '/subcategories/dressings.jpg',
                limits:  {
                    description: 'Suggested values per 100g',
                    sugar: null,
                    fat: '5g',
                    fibre: null
                }
            }
        ]
    },
    {
        name: 'Bread',
        image: '/categories/bread.svg',
        products: [
            {
                name: 'Ryebread and crisp bread',
                image: '/subcategories/ryebread.jpg',
                limits: {
                    description: 'Suggested values per 100g',
                    sugar: 'max 5g',
                    fat: 'max 7g',
                    fibre: 'min 5g'
                }
            },
            {
                name: 'Wholegrain bread and buns',
                image: '/subcategories/whole-grain.jpg',
                limits: {
                    description: 'Suggested values per 100g',
                    sugar: 'max 5g',
                    fat: 'max 7g',
                    fibre: 'min 5g'
                }
            }
        ]
    },
    {
        name: 'Dairy products',
        image: '/categories/dairy.svg',
        products: [
            {
                name: 'Milk',
                image: '/subcategories/milk.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: null,
                    fat: '0,7%',
                    fibre: null
                }
                
            },
            {
                name: 'Cheese',
                image: '/subcategories/cheese.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: null,
                    fat: 'max 17% (30+)',
                    fibre: null
                }
            },
            {
                name: 'Soured dairy products',
                image: '/subcategories/soured-milk.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: 'max 4% added sugar OR max 8g/100g',
                    fat: 'max 1,5%',
                    fibre: null
                }
            },
            {
                name: 'Chocolate milk and milk drinks',
                image: '/subcategories/chocolate-drink.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: 'max 4% added sugar OR max  8g/100ml',
                    fat: 'max 0,7%',
                    fibre: null
                }
            }
        ]
    },
    {
        name: 'Drinks',
        image: '/categories/soda.svg',
        products: [
            {
                name: 'Juices',
                image: '/subcategories/juices.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: 'max 10g per 100ml',
                    fat: null,
                    fibre: null
                }
            },
            {
                name: 'Soda and soft drinks',
                image: '/subcategories/soda-and-soft-drink.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: 'max 1g per 100ml',
                    fat: null,
                    fibre: null
                }
            },
            {
                name: 'Chocolate milk and milk drinks',
                image: '/subcategories/chocolate-drink.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: 'max 4% added sugar OR max  8g/100ml',
                    fat: 'max 0,7%',
                    fibre: null
                }
            }
        ]
    },
    {
        name: 'Meat',
        image: '/categories/meat.svg',
        products: [
            {
                name: 'Meat, poultry and plantbased products',
                image: '/subcategories/meat.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: null,
                    fat: 'max 10%',
                    fibre: null
                }
            },
            {
                name: 'Fish and sea food',
                image: '/subcategories/fish.jpg',
                limits: {
                    description: 'Suggested values: fresh, frozen, preserved or fish toppings',
                    sugar: null,
                    fat: null,
                    fibre: null
                }
            },
            {
                name: 'Toppings',
                image: '/subcategories/toppings.jpg',
                limits: {
                    description: 'Suggested values',
                    sugar: null,
                    fat: 'max 10%',
                    fibre: null
                }
            }
        ]
    },
    {
        name: 'Breakfast products',
        image: '/categories/breakfast.svg',
        products: [
            {
                name: 'Muesli and porage',
                image: '/subcategories/muesli.jpg',
                limits:  {
                    description: 'Suggested values per 100g',
                    sugar: 'max 13g',
                    fat: 'max 8g',
                    fibre: 'min 6g'
                }
            }
        ]
    },
    {
        name: 'Fruits and vegetables',
        image: '/categories/fruits_and_vegetables.svg',
        products: [
            {
                name: 'Potatoes and potato products',
                image: '/subcategories/potatoes.jpg',
                limits: {
                    description: 'Suggested values per 100g',
                    sugar: null,
                    fat: 'max 3g',
                    fibre: null
                }
            },
            {
                name: 'Veggies and fruits',
                image: '/subcategories/veggs-and-fruits.jpg',
                limits: {
                    description: 'Suggested values: fresh, frozen or preserved without added sugar',
                    sugar: null,
                    fat: null,
                    fibre: null
                }
            }
        ]
    },
    {
        name: 'Ready to go',
        image: '/categories/ready_to_go.svg',
        products: [
            {
                name: 'Food to go',
                image: '/subcategories/food-to-go.jpg',
                limits: {
                    description: 'Suggested values per 100g',
                    sugar: null,
                    fat: 'max 5g recommended with vegetables or whole grain',
                    fibre: null
                }
            },
            {
                name: 'Ready made dinner',
                image: '/subcategories/ready-made-dinner.jpg',
                limits: {
                    description: 'Suggested values per 100g',
                    sugar: null,
                    fat: 'max 5g recommended with vegetables or whole grain',
                    fibre: null
                }
            }
        ]
    },
]

const imgPath = 'assets/images';
const body = document.getElementsByTagName('body')[0];
const navigation = document.getElementById('nav');
const disclaimerPage = document.getElementById('disclaimer');
const responsivePage = document.getElementById('responsive');
const individualRecipePage = document.getElementById('individualRecipe');
const productCategoriesPage = document.getElementById('productCategories');
const productsSubCategoriesPage = document.getElementById('productsSubCategories');


function displayElements(elementsToShow, elementsToHide) {
    for (let e of elementsToShow) {
        e.classList.remove('hidden');
    }

    for (let e of elementsToHide) {
        e.classList.add('hidden');
    }
}

function changeBackgroundToGray() {
    body.classList.remove('red-background');
    body.classList.add('gray-background');
}

function removeBackgroundColor() {
    body.classList.remove('red-background');
    body.classList.remove('gray-background');
}

function openProductCategoryPage() {
    displayElements([productCategoriesPage, navigation], [disclaimerPage, responsivePage, individualRecipePage])
    renderProductCategories(productCategories);
    changeBackgroundToGray();
}

function openSubCategoryPage(productCategory) {
    displayElements([productsSubCategoriesPage, navigation], [disclaimerPage, responsivePage, individualRecipePage, productCategoriesPage]);
    renderProductSubCategories(productCategory);
    removeBackgroundColor();
}

function renderProductCategories(productCategories) {
    let productList = document.getElementById('productCategoriesList');
    productList.innerHTML = '';

    for(let p of productCategories) {
        let listItem = document.createElement('li');
        let itemImage = document.createElement('div');
        let itemText = document.createElement('p');

        itemImage.style.backgroundImage = `url('${imgPath}${p.image}')`;
        itemImage.classList.add('product-group-image')

        itemText.innerHTML = p.name;

        listItem.classList.add('product-group');
        listItem.appendChild(itemImage);
        listItem.appendChild(itemText);

        listItem.addEventListener('click', function() {
            openSubCategoryPage(p);
        });

        productList.appendChild(listItem);
    }
}

function renderProductSubCategories(productCategory) {
    console.log(productCategory);
    let list = document.getElementById('productsSubCategoriesList');
    let productCategoryName = document.getElementById('subCategoryName');
    productCategoryName.innerHTML = productCategory.name

    for (let p of productCategory.products) {
        let listItem = document.createElement('li');

        let subCategoryNameElem = document.createElement('h6');
        subCategoryNameElem.innerHTML = p.name;
        subCategoryNameElem.classList.add('subcategory-name');
    
        let subcategoryImageElem = document.createElement('img');
        subcategoryImageElem.setAttribute('src', imgPath + p.image);
        subcategoryImageElem.setAttribute('alt', p.name + ' banner');
    
        let subCategoryDescElem = document.createElement('p');
        subCategoryDescElem.innerHTML = p.limits.description;
        subCategoryDescElem.classList.add('description')
    
        let subCategoryLimitsElem = document.createElement('ul');
        subCategoryLimitsElem.classList.add('limits')

        let limits = Object.keys(p.limits);

        for (let l of limits) {
            if  (p.limits[l] && l !== 'description') {
                let limitListItem = document.createElement('li');
                let typeSpan = document.createElement('span');
                let valueSpan = document.createElement('span');
                
                typeSpan.classList.add('limit-type');
                typeSpan.innerHTML = l;

                valueSpan.classList.add('limit-value');
                valueSpan.innerHTML = p.limits[l];

                limitListItem.appendChild(typeSpan);
                limitListItem.appendChild(valueSpan);

                subCategoryLimitsElem.appendChild(limitListItem);
            }
        }

        listItem.appendChild(subCategoryNameElem);
        listItem.appendChild(subcategoryImageElem);
        listItem.appendChild(subCategoryDescElem);
        listItem.appendChild(subCategoryLimitsElem);

        list.appendChild(listItem);
    }
}

function isSearchValueInSubCategory(searchValue, products) {
    let found = false;

    for (let p of products) {
        if (p.name.toLowerCase().indexOf(searchValue) !== -1 ) {
            found = true;
            break;
        } 
    }

    return found
}

function getProductCategories(searchValue) {
    if (!searchValue || searchValue === '') {
        renderProductCategories(productCategories);
    } else {
        let productsToRender = [];
        searchValue = searchValue.toLowerCase();

        for (let p of productCategories) {
            if (p.name.toLowerCase().indexOf(searchValue) !== -1 || isSearchValueInSubCategory(searchValue, p.products)) {
                productsToRender.push(p);
            } 
        }

        renderProductCategories(productsToRender);
    }
}

document.getElementById('guestButton').addEventListener('click', function() {
    openProductCategoryPage();
    body.classList.remove('red-background', 'padding-top');
});

document.getElementById('searchField').addEventListener('input', function(e) {
    getProductCategories(e.target.value);
});

window.addEventListener('load', function() {
    if(window.innerWidth > 425) {
        body.classList.add('not-mobile');
    }
})
