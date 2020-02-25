console.log('hi');

const productCategories = [
    {
        name: 'Sauces',
        products: [
            {
                name: 'Dressing and sauces',
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