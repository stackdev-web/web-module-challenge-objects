/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.*/

/////////////////////////////Sandbox Testing ///////////////////////////////////////




///////////////Menu Items (MVP)///////////////////
const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1a: Make a function that builds objects🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Add to the function createMenuItems below so it will create objects following the same format found above for latte and breakfastBurrito (name, price, category).  
The function should:
  1. Receive values for the object that will be created as parameters
  2. Create and return an object using the received values 
  
  Example createMenuItem('tacos', 8, 'Lunch') should return {name: 'tacos', price: 8, category: 'Lunch'}
*/

function createMenuItem(name, price, category){
  const menuItems = {
    name: name,
    price: price,
    category: category
  }
  return menuItems;
}

console.log('Task 1a:', createMenuItem('tacos', 8, 'Lunch'));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1b: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Invoke your function!
Test your createMenuItems function by doing the following:
  1. Pass values to createMenuItems in order to create the objects (menu items)
  2. Create at least 3 menu items (objects) of your choosing making sure they have name, price, and category keys
  3. Log each returned object to the console  
  
  For example: createMenuItem("pizza",5,"lunch") would return this as the object: {name:"Pizza",price:5,category:"lunch"}
*/
console.log('Task 1b.1:', createMenuItem('ham', 3.50, 'Breakfast'));
console.log('Task 1b.2:', createMenuItem('casserole', 12, 'Dinner'));
console.log('Task 1b.3:', createMenuItem('potato skins', 8, 'Appetizers'));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to the 
burger object below that automatically calculates price depending on the a string received as a parameter. 

Using the burger object below do the following:
  1. Add a method called discount to the burger object 
  2. The discount method should accept a string as a parameter (example: "teacher", "student", or "public")
  3. Depending on the string, it will return the correct discounted price
  4. Check your work by invoking the function and passing in 'teacher', 'student', or 'public' as your arguments to ensure they are returning the correct price.

  For example: burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2
*/


  const burger = {
  name: "Burger", 
  price: 18, 
  category: "Lunch", 
  discount: function (type) {
    if (type === 'teacher' || type === 'student') {
      return (this.price * .75);
    } else if (type === 'public') {
      return (this.price * .90); 
    } 
  }

}

console.log('Task 2:', burger.discount("student"));






///////////////Reviews (MVP)///////////////////
const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name: "Reyna", rating: 3.5, feedback: ""},
]

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Using the reviews array above:
  1. log only Julius' feedback to the console - no function needed 
*/

if (reviews.name === 'Julius') {
  console.log(reviews.feedback);
}

// let newReview = {
//   name: 'Roxanne',
//   rating: 6,
//   feedback: 'nothing to report'
// }
// // adding object to array at beginning
// reviews.unshift(newReview);
// console.log('Adding to object array Reviews', reviews);

// // adding object to array at end
// reviews.push(newReview);
// console.log('Adding to end of array', reviews);

// // adding object to array in middle
// reviews.splice(2, 0, newReview)
// console.log('New splice', reviews);

// // find object with name: Julius - return feedback content
// let review = reviews.find(review => review.name === 'Julius');
// console.log('Find by object name value', review)

// // get all objects where rating === 3
// let reviewFilter = reviews.filter(reviewFilter => reviewFilter.rating === 3);
// console.log('Filter by Rating = 3', reviewFilter)

// // categorize objects by group rating, poor avg and high

// let ratingsGroup = reviews.map(review => {
//   if (review.rating < 3) {
//     return 'poor';
//   }
//   if (review.rating >= 3 && review.rating < 4) {
//     return 'average';
//   }
//   if (review.rating >=4) {
//     return 'high';
//   }

// });

// console.log('spit out text based on rating value:', ratingsGroup);

// // create rating groups that create a new key/value pair in the object
// let ratingsGroups = reviews.map(review => {
//   let properties = {
//     "rating": review.rating,
//     "group text": 'average'
//   };
  
//   if (properties.rating < 3) {
//     properties['group text'] = 'low';
//   }
//   if (properties.rating >= 3 && review.rating < 4) {
//     properties['group text'] = 'average';
//   }
//   if (properties.rating >=4) {
//     properties['group text'] = 'high';
// }
// return properties;
// });
// console.log('create ratings group for each object based on rating:', ratingsGroups);
 
// // add new property to include the new ratings group category

// reviews.forEach(review => {
//   review['rating group'] = "average";
//   if (review.rating < 3) {
//     review['rating group'] = "low";
//   }
//   if (review.rating >= 4) {
//     review['rating group'] = "high";
//   }

// });

// console.log('add ratings group key/value pair to each object:', reviews);

// // sort reviews based on rating value
// let sortedReviews = reviews.sort((c1, c2) => (c1.rating < c2.rating) ? 1 : (c1.rating > c2.rating) ? -1 : 0);
// console.log('Sort by rating:', sortedReviews);

// // are some of the ratings 'low'
// console.log(reviews.some(review => review['rating group'] === "low"));
// console.log(reviews.every(review => review['rating group'] === 'low'));




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Reyna's feedback is missing! Use what you know to do the following: (no function needed) 
  1. Add this feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
  2. log the reviews array to the console to check your work
*/

reviews[7].feedback = "this place is chill with really cool people, great for getting work done on weekdays";
console.log('Task 4:', reviews.feedback);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that creates an object with name, rating, feedback, add the new review to the end of an array and returns the resulting array
 the addReview function below to do the following:
  1. Receive an array
  2. Receive the following object keys name, rating, feedback
  3. The function should push the following object to the array: {name: 'Daniela', rating: 5, review: 'Beautiful atmosphere and wonderful vegan options!' }
  4. should return the resulting array
*/

function addReview(array){
  const newFeedback = {
    name: 'Reginold',
    rating: 2,
    feedback: 'hated it'
  };

  array.push(newFeedback);
  return reviews;

}
console.log('Task 5:', addReview(reviews));




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function to return a review based on the index of the review in the array.

Use the getReviewByIndex function below to do the following:
  1. Receive an array
  2. Receive a number which is the desired index in the array
  3. The function should return the following string: "{name} gave the restaurant a {rating} star review, and their feedback was: {feedback}"
  For example: getReviewByIndex(reviews,0) would return: "Daniela gave the restaurant a 5 star review, and their feedback was: Beautiful atmosphere and wonderful vegan options!"
*/


function getReviewByIndex(/*Your code here*/) {
  /*Your code here*/
}


  

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Write a function to get information about the most recent (last) review called `getLastReview`

Use the getLastReview function below to do the following:
  1. Receive an array of objects as a parameter
  2. Return the last index as a string in the format: "{name} gave the restaurant a {rating} star review, and their feedback was: {feedback}"
  3. Invoke the function with the reviews array as the argument
  
  For example: getLastReview(reviews) would return: "Reyna gave the restaurant a 3.5 star review, and their feedback was: this place is chill with really cool people, great for getting work done on weekdays".
*/


function getLastReview(/*Your code here*/) {
  /*Your code here*/
} 



///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** 💪💪💪💪💪💪💪💪💪💪 STRETCH 1: 💪💪💪💪💪💪💪💪💪💪 
Use the getReviewsByRating function below to do the following:
  1. Receive the array that holds all the reviews
  2. Receive a rating
  3. Return an array with all the reviews in that range

  For example: getReviewByRating(reviews, 4) would return these reviews in the 4 range (4-4.9):
  [
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}
  ]
*/

 function getReviewByRating(/* code here */) {
    /* code here */
  }

  
/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪💪   
Use the getLongReviews function below to do the following:
  1. Receive the array that holds all the reviews
  2. Return an array with all the reviews that have more than 15 words in their feedback

  For example: getLongReviews(reviews) would return:
  [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }
  ]
*/

function getLongReviews(/* code here */) {
    /* code here */
  }
  

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 3: 💪💪💪💪💪💪💪💪💪💪 
This stretch goal does not use the reviews data!  You create your own object in this stretch goal.

Use the carMaker function below to do the following:
  1. Receive a value representing the odometer (how many miles it's been driven) and use that when creating the object
  2. Create a drive method inside the object that increases the odometer value
  3. Return the object
  4. The returned object with the odometer value should have the following characteristics:
     a. The drive method which, when called, takes a distance value as its parameter
     b. The drive method should also cause the odometer value in the object to be increased by the distance
     c. Then the drive method should return the updated value of the odometer

  For example: Let's say we created the object in the variable car1 with an odometer value of 10.
  Then we called car1.drive(100)
  It would return 110 because it was created with 10 as the odometer and we added 100 to it with the drive method 
*/


function carMaker(/* code here */) {
    /* code here */
    
}


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
module.exports = {
  foo,
  createMenuItem,
  burger,
  addReview,
  getReviewByIndex,
  getLastReview,
}
