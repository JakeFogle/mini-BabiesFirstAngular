* Now that we've included the file, let's create our first controller. The syntax at first is going to look very familiar. Remember, we don't want to create an entirely new module but instead we want to get our module we made earlier (friendsList) then stick our mainCtrl as a property on that module.


* Now that we've saved our module into the 'app' variable. Let's create a new controller and stick it as a property on our friendsList app. The way you do that is below.
```javascript
app.controller('mainCtrl', function($scope){

});
```
A few things to notice here. We added a controller property to our app, we named it 'mainCtrl' because that was the name we chose in ng-controller in our index.html file, and the second argument is a callback function that has a $scope property built into it. Note that every time you create a new controller, you get this $scope object. Whatever we stick on $scope will be available in our view (in this case, index.html is our view). For example, in my controller if I said:

 $scope.name = "Tyler", 

 then in my HTML page I can say <p> My name is: {{name}} </p> 

 and that will show as My name is: Tyler. 
 
 Take a step back and think about the importance of this. When I first started to program a huge question I had was 'How do websites know what to display when there are so many different variations of pages. Facebook for example, everyone has their own profile. That's a lot of pages. But in reality it's just one page with facebook changing the data based on who the user is. This process is called 'templating'. Your profile page is just one template (that everyone shares), and that template is loaded with different data depending on who the user is.
*Now, in your controller, I want you to add an array to your $scope object and I want you to fill that array with a list of your friends. I don't want to give you the code for this one but if you get stuck ask the teacher.
*Now that we have an array full of friends as a property on $scope, we can then use ng-repeat in our view to show each one of our friends.

##Step 5: Show your Friends in the View
* Inside of the body tag create an H1 tag with 'My Friends'.
* Below that I want you to use ng-repeat to loop over each of your friends showing each one to the page.
```html
<div ng-repeat="friend in friends">
  <p> {{friend}} </p>
</div>
```
This syntax is a little weird at first. It should feel very similar to a for in loop in JavaScript. What we're doing is saying loop over $scope.friends (which was defined in the controller) and for every item in $scope.friends, save that item to a variable called friend, then show that friend to the view. So if you had: 
```javascript
app.controller('mainCtrl', function($scope){
$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
```
then in your view you will see 
Jordyn
Ryan
Chelsey

##Step 6: Get Fancy
* That's all the main things I wanted to cover. You should now feel decently comfortable with creating a basic angular application, initializing your app with angular.module('appName', []), creating a controller with ng-controller, adding properties to that controllers $scope, then showing those properties in the view.
* If you have more time, I want you to create a function in your controller called 'addFriend' that takes in a name of another friend and pushes it to your friends array. In your index.html you'll need an input box that will be the name of your friend, and a button that will run $scope.addFriend every time it is clicked. 
* Good luck and congrats on building your first (of many) angular apps!
