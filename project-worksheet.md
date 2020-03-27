# Project Overview

## Project Links

- https://github.com/jkellzz/ReactProject
- https://festive-brown-96e11b.netlify.com

## Project Description

My fiance and I love to cook and we are always searching for the next best thing to make our tastebuds happy. For this reason I have decided to build a recipe application. I would like the application to resemble that of some of my favorites, https://www.food.com/recipe, https://tasty.co/topic/easy-dinner, https://www.bonappetit.com/recipes . I think that these sites are simple and really don't have to much to distract you from what is acutally important, FOOD! This is an application that, If I can build it well enough, my fiance and I will use on the regular. For us to use something that I built would be really cool!

## API

So there were a couple of API's I was looking at for this project:
- https://spoonacular.com/food-api
- https://developer.edamam.com/edamam-recipe-api
- https://api2.bigoven.com/

There are pros and cons for each of these API's after some research I believe that Edamam is going to suit my needs best. It gives me the ability to make 5000 api calls/month, diet health and allergy filtering, basic nutritional information, up to 100 results per call, ALL FOR FREE. All they ask for is attribution which I will happily agree to. Also a gentleman by the name of Brandon, who I had the pleasure of hiring and working with, created a Mobile application useing this API and he raved about it. I hope to one day recreate his application, it is awesome. 

https://developer.edamam.com/edamam-docs-recipe-api


```
{q: "chicken", from: 0, to: 10, more: true, count: 168106, …}
q: "chicken"
from: 0
to: 10
more: true
count: 168106
hits: Array(10)
0:
recipe: {uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6", label: "Chicken Vesuvio", image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg", source: "Serious Eats", url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html", …}
bookmarked: false
bought: false
__proto__: Object
1:
recipe:
uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b"
label: "Chicken Paprikash"
image: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
source: "No Recipes"
url: "http://norecipes.com/recipe/chicken-paprikash/"
shareAs: "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken"
yield: 4
dietLabels: ["Low-Carb"]
healthLabels: (3) ["Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]
cautions: (2) ["Sulfites", "FODMAP"]
ingredientLines: (11) ["640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "1 tablespoon butter – cultured unsalted (or olive oil)", "240 grams onion sliced thin (1 large onion)", "70 grams Anaheim pepper chopped (1 large pepper)", "25 grams paprika (about 1/4 cup)", "1 cup chicken stock", "1/2 teaspoon salt", "1/2 cup sour cream", "1 tablespoon flour – all-purpose"]
ingredients: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
calories: 3033.2012500008163
totalWeight: 1824.6125000003276
totalTime: 0
totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
__proto__: Object
bookmarked: false
bought: false
__proto__: Object
2: {recipe: {…}, bookmarked: false, bought: false}
3: {recipe: {…}, bookmarked: false, bought: false}
4: {recipe: {…}, bookmarked: false, bought: false}
5: {recipe: {…}, bookmarked: false, bought: false}
6: {recipe: {…}, bookmarked: false, bought: false}
7: {recipe: {…}, bookmarked: false, bought: false}
8: {recipe: {…}, bookmarked: false, bought: false}
9: {recipe: {…}, bookmarked: false, bought: false}
length: 10
__proto__: Array(0)
__proto__: Object
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- Wireframe: https://res.cloudinary.com/dtzbye6dy/image/upload/v1585234003/IMG_1082_pgte9a.heic
- Architecture: https://docs.google.com/drawings/d/1ju7c1QyP7JWpYMBEM9EG5ltXbJpeN8iufQjs5BLDPLU/edit?usp=sharing


### MVP/PostMVP - 5min
MVP:
-Basic Nav 
-Header/Searchbar
-Featured section
-Use API
-Search Bar Functionality
-Clickable Featured Items

Post MVP:
-Hamburger Menu with items
-Faves Section with ability to save items
-Breakfast section with featured items
-Lunch section with featured items
-Dinner section with featured items

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | First div with title and search bar | 
| Recipe | This will hold basic information about the recipe (calories, ingredients, image, and title)| 
| Featured | Will show the top hits for that day/week | 
| Breakfast | Will show all time favorite breakfasts | 
| Lunch | Will show all time favorite Lunches | 
| Dinner | Will show all time favorite Dinners | 
| NavBar | Basic nav bar with menu and faves | 
| Footer | Basic Footer | 


**This is subject to change as the project is underway. This is simply a template I would like to follow to start.** 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | hrs| hrs | hrs |
| Header | H | 6hrs| hrs | hrs |
| Recipe | H | 4hrs| hrs | hrs |
| Featured | H | 6hrs| hrs | hrs |
| Breakfast | M | 4hrs| hrs | hrs |
| Lunch | M | 4hrs| hrs | hrs |
| Dinner | M | 4hrs| hrs | hrs |
| Footer | M | 2hrs| hrs | hrs |
| NavBar | L | 4hrs| hrs | hrs |
| Styling | H | 6hrs| hrs | hrs |
| Total | H | hrs| 40hrs | hrs |

## Additional Libraries
React Bootstrap
React router dom

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```