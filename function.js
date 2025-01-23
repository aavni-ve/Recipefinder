function findRecipes() {
    const ingredients = document.getElementById('ingredients').value.toLowerCase().split(',');
    const recipes = [
        {
            name: 'Pasta', ingredients: ['pasta', 'tomato', 'basil'],
            process: [
                'Boil pasta according to the package instructions.',
                'In a pan, heat olive oil and sauté garlic until golden.',
                'Add chopped tomatoes and cook until they soften.',
                'Toss in fresh basil and cooked pasta, mixing well.',
                'Season with salt and pepper to taste, and serve hot.'
            ]
        },
        { name: 'Omelette', ingredients: ['egg', 'milk', 'cheese'] },
        {
            name: 'Salad', ingredients: ['lettuce', 'tomato', 'cucumber', 'salt', 'pepper'],
            process: [
                'Whisk eggs with a splash of milk, salt, and pepper.',
                'Heat a non-stick pan and add butter or oil.',
                'Pour in the egg mixture and let it cook for a few minutes.',
                'Add cheese and desired vegetables (like tomatoes, onions, and peppers).',
                'Fold the omelette in half and cook until cheese is melted.',
                'Serve hot with a sprinkle of herbs on top.'
            ]
        },
        {
            name: 'Smoothie', ingredients: ['banana', 'milk', 'honey', 'sugar'],
            process: [
                'Peel and chop the banana.',
                'Add the banana, milk, honey, yogurt, and berries to a blender.',
                'Blend until smooth and creamy.',
                'Pour into a glass and serve immediately.',
                'Garnish with a few fresh berries or a sprig of mint, if desired.'
            ]
        },
        {
            name: 'Chole', ingredients: ['chickpeas', 'tomato', 'onion', 'spices'],
            process: [
                'Soak the chickpeas overnight and then cook until soft.',
                'In a pan, heat oil and sauté onions, ginger, and garlic until golden brown.',
                'Add chopped tomatoes and cook until they turn mushy.',
                'Add the cooked chickpeas and mix well.',
                'Season with spices like cumin, coriander, turmeric, and garam masala.',
                'Simmer for 10-15 minutes until the flavors meld together.',
                'Serve hot with rice or bhature.'
            ]
        },
        {
            name: 'Biryani', ingredients: ['rice', 'chicken', 'yogurt', 'spices', 'tomato'],
            process: [
                'Marinate the chicken with yogurt and spices for at least 2 hours.',
                'Cook the rice until it is 70% done and set aside.',
                'In a large pot, fry onions until golden brown and set aside.',
                'In the same pot, add tomatoes and cook until soft, then add the marinated chicken.',
                'Cook the chicken until it is tender and fully cooked.',
                'Layer the partially cooked rice over the chicken and sprinkle fried onions and saffron on top.',
                'Cover the pot tightly and cook on low heat (dum) for 20-30 minutes until the rice is fully cooked.',
                'Garnish with fresh coriander and mint leaves before serving.'
            ]
        },
        {
            name: 'Aloo Gobi', ingredients: ['potato', 'cauliflower', 'tomato', 'spices'],
            process: [
                'Heat oil in a pan and sauté onions, ginger, and garlic until golden brown.',
                'Add chopped tomatoes and cook until they soften.',
                'Add potato cubes and cauliflower florets, mixing well.',
                'Season with spices like turmeric, cumin, coriander, and garam masala.',
                'Cover and cook on low heat until the vegetables are tender.',
                'Garnish with fresh cilantro and serve hot with roti or rice.'
            ]
        },
        {
            name: 'Rajma', ingredients: ['kidney beans', 'tomato', 'onion', 'spices'],
            process: [
                'Soak the kidney beans overnight and then cook until soft.',
                'In a pan, heat oil and sauté onions, ginger, and garlic until golden brown.',
                'Add chopped tomatoes and cook until they turn mushy.',
                'Add the cooked kidney beans and mix well.',
                'Season with spices like cumin, coriander, turmeric, and garam masala.',
                'Simmer for 10-15 minutes until the flavors meld together.',
                'Serve hot with rice or roti.'
            ]
        },
        {
            name: 'Samosa', ingredients: ['potato', 'peas', 'flour', 'spices'],
            process: [
                'Boil and mash potatoes. Mix in cooked peas, salt, and spices.',
                'Prepare the dough by mixing flour, salt, and water, then knead it until smooth.',
                'Roll out the dough and cut it into circles. Fill each circle with the potato mixture.',
                'Fold the dough over the filling to form a triangle and seal the edges with water.',
                'Heat oil in a deep pan and fry the samosas until they are golden brown and crispy.',
                'Serve hot with chutney or sauce of your choice.'
            ]
        },
        {
            name: 'Pav Bhaji', ingredients: ['potato', 'peas', 'tomato', 'spices'],
            process: [
                'Boil and mash potatoes and peas.',
                'Heat butter in a pan and sauté onions, capsicum, and tomatoes until soft.',
                'Add mashed potatoes and peas to the pan and mix well.',
                'Season with pav bhaji masala, salt, and red chili powder. Mix thoroughly.',
                'Cook on low heat, mashing and stirring occasionally until the mixture thickens.',
                'Toast the pav (bread) with butter on a hot griddle until golden brown.',
                'Serve the bhaji hot, garnished with chopped onions, coriander, and a squeeze of lemon, alongside the buttered pav.'
            ]
        },
        {
            name: 'Tandoori Chicken', ingredients: ['chicken', 'yogurt', 'spices'],
            process: [
                'Make a marinade by mixing yogurt, lemon juice, and spices like turmeric, cumin, coriander, paprika, and garam masala.',
                'Score the chicken pieces and coat them thoroughly with the marinade. Refrigerate for at least 4 hours or overnight for best results.',
                'Preheat the oven to 200°C (400°F). Place the marinated chicken on a baking tray or skewers.',
                'Bake the chicken for 25-30 minutes or until fully cooked, basting occasionally with oil or melted butter.',
                'For an authentic touch, finish by grilling the chicken on high heat for a few minutes to char the edges.',
                'Serve hot with a squeeze of lemon juice and sliced onions on the side.'
            ]
        },
        {
            name: 'Masala Dosa', ingredients: ['rice', 'potato', 'onion', 'spices', 'urad dal'],
            process: [
                'Soak rice and urad dal separately for 4-6 hours. Grind them to a smooth batter and ferment overnight.',
                'Boil potatoes, mash them, and set aside.',
                'In a pan, heat oil and add mustard seeds, curry leaves, onions, and green chilies. Sauté until onions are translucent.',
                'Add turmeric powder and mashed potatoes, and mix well. Cook for a few minutes and set aside the masala filling.',
                'Heat a non-stick tawa or skillet and pour a ladleful of batter, spreading it in a circular motion to make a thin dosa.',
                'Drizzle ghee around the edges and cook until the dosa is crisp and golden brown.',
                'Place the potato filling in the center of the dosa, fold it, and serve hot with coconut chutney and sambar.'
            ]
        },
        {
            name: 'Idli', ingredients: ['rice', 'urad dal', 'fenugreek'],
            process: [
                'Soak rice, urad dal, and fenugreek seeds separately for 4-6 hours.',
                'Grind the rice and urad dal separately to a smooth batter. Mix them together and add salt.',
                'Let the batter ferment overnight or until it rises and becomes frothy.',
                'Grease the idli molds and pour the fermented batter into them.',
                'Steam the idlis for 10-15 minutes or until they are cooked through.',
                'Serve hot with coconut chutney and sambar.'
            ]

        },
        {
            name: 'Vada', ingredients: ['urad dal', 'onion', 'curry leaves', 'spices'],
            process: [
                'Soak urad dal for 4-6 hours and grind it to a smooth batter.',
                'Add chopped onions, green chilies, curry leaves, and spices to the batter. Mix well.',
                'Heat oil in a deep pan for frying.',
                'Wet your hands, take a small portion of the batter, and shape it into a round patty with a hole in the center.',
                'Carefully slide the vada into the hot oil and fry until golden brown and crispy.',
                'Serve hot with coconut chutney and sambar.'
            ]
        },
        {
            name: 'Sambar', ingredients: ['lentils', 'tamarind', 'vegetables', 'spices'],
            process: [
                'Cook the lentils until soft and mushy.',
                'In a separate pot, heat oil and add mustard seeds, curry leaves, and dried red chilies.',
                'Add chopped vegetables like carrots, potatoes, and drumsticks, and sauté for a few minutes.',
                'Mix in the cooked lentils and tamarind pulp.',
                'Season with sambar powder, salt, and turmeric, and simmer until the vegetables are tender.',
                'Serve hot with rice or idli.'
            ]
        },
        {
            name: 'Rasam', ingredients: ['tomato', 'tamarind', 'spices'],
            process: [
                'Soak tamarind in warm water and extract the juice.',
                'In a pot, heat oil and add mustard seeds, cumin seeds, and curry leaves.',
                'Add crushed garlic and chopped tomatoes, and cook until tomatoes soften.',
                'Pour in the tamarind juice and add water as needed.',
                'Season with rasam powder, salt, and turmeric, and bring to a boil.',
                'Simmer for a few minutes until the flavors meld together.',
                'Serve hot with rice or as a soup.'
            ]

        },
        {
            name: 'Dal Dhokli', ingredients: ['wheat flour', 'lentils', 'spices'],
            process: [
                'Prepare the dough by mixing wheat flour with water, salt, and a pinch of turmeric. Knead it until smooth and set aside.',
                'Cook the lentils until soft and mushy.',
                'In a pot, heat ghee and add mustard seeds, cumin seeds, and curry leaves.',
                'Add the cooked lentils, turmeric, red chili powder, and tamarind pulp. Mix well.',
                'Roll out the dough and cut it into small pieces or strips.',
                'Add the dough pieces to the simmering dal and cook until they are soft and fully cooked.',
                'Serve hot, garnished with fresh coriander and a squeeze of lemon.'
            ]
        },
        {
            name: 'Margherita Pizza', ingredients: ['pizza dough', 'tomato', 'mozzarella'],
            process: [
                'Preheat your oven to the highest setting (usually around 250°C or 480°F).',
                'Roll out the pizza dough on a floured surface to your desired thickness.',
                'Spread a thin layer of tomato sauce over the dough, leaving a border for the crust.',
                'Tear the mozzarella cheese and scatter it evenly over the sauce.',
                'Drizzle a bit of olive oil on top.',
                'Bake the pizza in the oven for 10-12 minutes, or until the crust is golden and the cheese is bubbling and slightly browned.',
                'Remove from the oven and immediately scatter fresh basil leaves on top.',
                'Slice and serve hot.'
            ]
        },
        // North Indian Dishes
        {
            name: 'Butter Chicken', ingredients: ['chicken', 'butter', 'cream', 'spices'],
            process: [
                'Marinate chicken pieces with yogurt, lemon juice, and spices.',
                'Cook the chicken until slightly charred.',
                'In a pan, melt butter and add onions, tomatoes, and more spices.',
                'Add the chicken pieces to the pan and mix well.',
                'Pour in the cream and simmer for a few minutes.',
                'Garnish with fresh cilantro and serve hot with naan or rice.'
            ]

        },
        {
            name: 'Palak Paneer', ingredients: ['paneer', 'spinach', 'cream', 'spices'],
            process: [
                'Blanch the spinach in boiling water for a few minutes, then drain and blend to a smooth puree.',
                'In a pan, heat oil and sauté onions, ginger, and garlic until golden brown.',
                'Add chopped tomatoes and cook until they turn mushy.',
                'Add the spinach puree and cook for a few minutes.',
                'Season with spices like cumin, coriander, turmeric, and garam masala.',
                'Add the paneer cubes and mix well, cooking for a few more minutes.',
                'Stir in the cream and cook until the curry thickens.',
                'Serve hot with roti or rice.'
            ]

        },
        {
            name: 'Chole Bhature', ingredients: ['chickpeas', 'flour', 'spices'],
            process: [
                'Soak the chickpeas overnight and then cook until soft.',
                'In a pan, heat oil and sauté onions, ginger, and garlic until golden brown.',
                'Add chopped tomatoes and cook until they turn mushy.',
                'Add the cooked chickpeas and mix well.',
                'Season with spices like cumin, coriander, turmeric, and garam masala.',
                'Simmer for 10-15 minutes until the flavors meld together.',
                'Garnish with fresh coriander and serve hot.'
            ]

        },
        {
            name: 'Rogan Josh', ingredients: ['mutton', 'yogurt', 'spices'],
            process: [
                'Heat oil in a pot and sauté onions, ginger, and garlic until golden brown.',
                'Add mutton pieces and cook until they are browned on all sides.',
                'Mix in yogurt, chopped tomatoes, and a blend of spices like cumin, coriander, fennel, and Kashmiri red chili powder.',
                'Cover and simmer on low heat for about 1-2 hours until the meat is tender and the flavors are well blended.',
                'Serve hot with naan or rice, garnished with fresh coriander.'
            ]

        },
        {
            name: 'Paneer Tikka', ingredients: ['paneer', 'yogurt', 'spices'],
            process: [
                'Make a marinade by mixing yogurt, lemon juice, and spices like turmeric, cumin, coriander, paprika, and garam masala.',
                'Cut paneer, bell peppers, and onions into cubes and coat them thoroughly with the marinade. Refrigerate for at least 1 hour.',
                'Preheat the grill or oven to 200°C (400°F).',
                'Skewer the marinated paneer, bell peppers, and onions alternately on skewers.',
                'Grill or bake the skewers for 10-15 minutes, turning occasionally, until the paneer is charred at the edges.',
                'Serve hot with mint chutney and lemon wedges.'
            ]
        },
        {
            name: 'Aloo Paratha', ingredients: ['potato', 'flour', 'spices'],
            process: [
                'Boil and mash the potatoes. Mix in chopped onions, green chilies, and spices like cumin, coriander, turmeric, and salt.',
                'Prepare the dough by mixing wheat flour with water and a pinch of salt. Knead it until smooth and set aside.',
                'Divide the dough into small balls. Roll out each ball into a small circle, place the potato filling in the center, and fold the dough over the filling to seal it.',
                'Roll out the filled dough balls gently to form a flat paratha.',
                'Heat a tawa or skillet and cook the paratha with a little ghee until golden brown on both sides.',
                'Serve hot with yogurt, pickle, or chutney.'
            ]
        },
        {
            name: 'Pindi Chana', ingredients: ['chickpeas', 'onion', 'tomato', 'spices'],
            process: [
                'Soak the chickpeas overnight and then cook them with tea bags until soft. Discard the tea bags.',
                'In a pan, heat oil and add cumin seeds, ajwain seeds, and bay leaves.',
                'Add chopped onions, ginger, and garlic, and sauté until golden brown.',
                'Mix in chopped tomatoes and cook until they turn mushy.',
                'Add the cooked chickpeas and mix well.',
                'Season with spices like cumin powder, coriander powder, turmeric, red chili powder, and garam masala.',
                'Cook on low heat for 10-15 minutes until the flavors meld together.',
                'Garnish with fresh coriander and serve hot with bhature or roti.'
            ]
        },
        {
            name: 'Dal Makhani', ingredients: ['lentils', 'cream', 'tomato', 'spices'],
            process: [
                'Soak black lentils and kidney beans overnight. Cook until soft.',
                'In a pan, heat butter and sauté onions, garlic, and ginger until golden brown.',
                'Add chopped tomatoes and cook until they turn mushy.',
                'Add the cooked lentils and beans, mixing well.',
                'Season with spices like cumin, coriander, turmeric, and garam masala.',
                'Stir in cream and let it simmer on low heat for 30-40 minutes, stirring occasionally.',
                'Garnish with a dollop of butter and fresh coriander before serving hot with naan or rice.'
            ]

        },
        // Gujarati Dishes
        {
            name: 'Dhokla', ingredients: ['gram flour', 'yogurt', 'spices'],
            process: [
                'In a bowl, mix gram flour, yogurt, water, lemon juice, and sugar to form a smooth batter.',
                'Add a pinch of turmeric and salt to taste. Mix well and let it sit for 10-15 minutes.',
                'Just before steaming, add eno fruit salt and mix gently until the batter is frothy.',
                'Pour the batter into a greased steaming tray and steam for 15-20 minutes or until a toothpick comes out clean.',
                'In a small pan, heat oil and add mustard seeds, curry leaves, and green chilies. Let them splutter.',
                'Pour this tempering over the steamed dhokla.',
                'Cut into squares and serve hot with green chutney.'
            ]
        },
        {
            name: 'Thepla', ingredients: ['wheat flour', 'methi', 'spices'],
            process: [
                'In a bowl, mix wheat flour, finely chopped methi leaves, yogurt, and spices like turmeric, cumin, coriander, and chili powder.',
                'Add a little oil and knead the mixture into a soft dough. Let it rest for 15-20 minutes.',
                'Divide the dough into small balls and roll each ball into a thin circle.',
                'Heat a tawa or skillet and cook the theplas with a little oil until they are golden brown on both sides.',
                'Serve hot with yogurt, pickle, or chutney.'
            ]
        },
        {
            name: 'Fafda', ingredients: ['gram flour', 'carom seeds', 'spices'],
            process: [
                'In a bowl, mix gram flour, carom seeds, turmeric, and salt.',
                'Add water gradually to form a stiff dough. Knead it well and let it rest for 10-15 minutes.',
                'Divide the dough into small balls and flatten each ball using a rolling pin to form thin strips.',
                'Heat oil in a deep pan and fry the strips until they are crispy and golden brown.',
                'Drain excess oil and serve hot with chutney or fried green chilies.'
            ]
        },
    ];

    const suggestions = recipes.filter(recipe =>
        ingredients.every(ing => recipe.ingredients.includes(ing.trim()))
    );

    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = '';

    if (suggestions.length > 0) {
        suggestions.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;
            li.addEventListener('click', () => showPopup(recipe));
            resultContainer.appendChild(li);
        });
    } else {
        resultContainer.textContent = 'No matching recipes found';
    }
}

function showPopup(recipe) {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const processList = recipe.process.map(step => `<li>${step}</li>`).join('');
    content.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}<br><strong>Process:</strong><ol>${processList}</ol>`;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="popup" class="popup">
            <div id="popup-content" class="popup-content"></div>
            <button class="close-btn" onclick="closePopup()">Close</button>
        </div>
    `);
});