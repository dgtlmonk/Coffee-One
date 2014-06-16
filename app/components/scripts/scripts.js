var eat, food, foods, _i, _len;

(function() {
  return console.log("hello there?");
})();

eat = function(something) {
  return console.log(something);
};

foods = ['broccoli', 'spinach', 'tomato', 'chocolate', 'beans', 'eggs'];

for (_i = 0, _len = foods.length; _i < _len; _i++) {
  food = foods[_i];
  if (food !== 'chocolate') {
    eat(food);
  }
}


/* 
ths is a comment shown
 */
