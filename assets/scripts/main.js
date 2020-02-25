const productCategories = [
    {
        name: 'Sauces',
        products: [
            {
                name: 'Dressing and sauces',
                image: '/subcategories/dressings.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: null,
                        fat: '5g',
                        fibre: null
                    }
                ]
            }
        ]
    },
    {
        name: 'Bread',
        products: [
            {
                name: 'Ryebread and crisp bread',
                image: '/subcategories/ryebread.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: 'max 5g',
                        fat: 'max 7g',
                        fibre: 'min 5g'
                    }
                ]
            },
            {
                name: 'Wholegrain bread and buns',
                image: '/subcategories/whole-grain.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: 'max 5g',
                        fat: 'max 7g',
                        fibre: 'min 5g'
                    }
                ]
            }
        ]
    },
    {
        name: 'Dairy products',
        products: [
            {
                name: 'Milk',
                image: '/subcategories/milk.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: null,
                        fat: '0,7%',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Cheese',
                image: '/subcategories/cheese.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: null,
                        fat: 'max 17% (30+)',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Soured dairy products',
                image: '/subcategories/soured-milk.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: 'max 4% added sugar OR max 8g/100g',
                        fat: 'max 1,5%',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Chocolate milk and milk drinks',
                image: '/subcategories/chocolate-drink.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: 'max 4% added sugar OR max  8g/100ml',
                        fat: 'max 0,7%',
                        fibre: null
                    }
                ]
            }
        ]
    },
    {
        name: 'Drinks',
        products: [
            {
                name: 'Juices',
                image: '/subcategories/juices.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: 'max 10g per 100ml',
                        fat: null,
                        fibre: null
                    }
                ]
            },
            {
                name: 'Soda and soft drinks',
                image: '/subcategories/soda-and-soft-drink.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: 'max 1g per 100ml',
                        fat: null,
                        fibre: null
                    }
                ]
            },
            {
                name: 'Chocolate milk and milk drinks',
                image: '/subcategories/chocolate-drink',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: 'max 4% added sugar OR max  8g/100ml',
                        fat: 'max 0,7%',
                        fibre: null
                    }
                ]
            }
        ]
    },
    {
        name: 'Meat',
        products: [
            {
                name: 'Meat, poultry and plantbased products',
                image: '/subcategories/meat.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: null,
                        fat: 'max 10%',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Fish and sea food',
                image: '/subcategories/fish.jpg',
                limits: [
                    {
                        description: 'Suggested values: fresh, frozen, preserved or fish toppings',
                        sugar: null,
                        fat: null,
                        fibre: null
                    }
                ]
            },
            {
                name: 'Toppings',
                image: '/subcategories/toppings.jpg',
                limits: [
                    {
                        description: 'Suggested values',
                        sugar: null,
                        fat: 'max 10%',
                        fibre: null
                    }
                ]
            }
        ]
    },
    {
        name: 'Breakfast products',
        products: [
            {
                name: 'Muesli and porage',
                image: '/subcategories/muesli.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: 'max 13g',
                        fat: 'max 8g',
                        fibre: 'min 6g'
                    }
                ]
            }
        ]
    },
    {
        name: 'Fruits and vegetables',
        products: [
            {
                name: 'Potatoes and potato products',
                image: '/subcategories/potatoes.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: null,
                        fat: 'max 3g',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Veggies and fruits',
                limits: [
                    {
                        description: 'Suggested values: fresh, frozen or preserved without added sugar',
                        sugar: null,
                        fat: null,
                        fibre: null
                    }
                ]
            }
        ]
    },
    {
        name: 'Ready to go',
        products: [
            {
                name: 'Food to go',
                image: '/subcategories/food-to-go.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: null,
                        fat: 'max 5g recommended with vegetables or whole grain',
                        fibre: null
                    }
                ]
            },
            {
                name: 'Ready made dinner',
                image: '/subcategories/ready-made-dinner.jpg',
                limits: [
                    {
                        description: 'Suggested values per 100g',
                        sugar: null,
                        fat: 'max 5g recommended with vegetables or whole grain',
                        fibre: null
                    }
                ]
            }
        ]
    },
]

const imgPath = './assets';
const body = document.getElementsByTagName('body')[0];
const navigation = document.getElementById('nav');
const disclaimerPage = document.getElementById('disclaimer');
const responsivePage = document.getElementById('responsive');
const individualRecipePage = document.getElementById('individualRecipe');
const productCategoriesPage = document.getElementById('productCategories');


function displayElements(elementsToShow, elementsToHide) {
    for (let e of elementsToShow) {
        e.classList.remove('hidden');
    }

    for (let e of elementsToHide) {
        e.classList.add('hidden');
    }
}

function openProductCategoryPage() {
    displayElements([productCategoriesPage, navigation], [disclaimerPage, responsivePage, individualRecipePage])
}

function displayProductCategories(searchValue) {
    console.log(searchValue);
}

document.getElementById('guestButton').addEventListener('click', function() {
    openProductCategoryPage();
    body.classList.remove('red-background', 'padding-top');
});

document.getElementById('searchField').addEventListener('input', function(e) {
    displayProductCategories(e.target.value);
})