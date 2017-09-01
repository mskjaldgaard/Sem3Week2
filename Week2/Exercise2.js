//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
return n1 - n2
} 

var mul = function(n1,n2)
{
    return n1*n2;
}

var div = function(n1,n2)
{
    return n1/n2;
}

//Callback example
var cb = function(n1,n2, callback){
    try
    {
        if(typeof callback != "function")
            {
                return("Error: Third parameter need to be a function");
            }

        else if(typeof n1 != "number")
            {
                return("Error: First parameter need to be a number");
            }

        else if(typeof n2 != "number")
           {
                return("Error: Second parameter need to be a number");
           }  

           
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    }catch(e)
    {
          console.log(e);
    }
};
  

console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print

console.log("");

console.log("Mul: "+cb(5,5,mul));
console.log("Div: "+cb(100,5,div));

console.log("");
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function NamesLongerThanTwo (a)
{
    
};

console.log("");

console.log("Print all names with foreach.");
names.forEach(function(name)
{
    console.log(name);
});

console.log("");
console.log("Print only names longer than two.");

var filteredenames = names.filter(function(name)
{
    if(name.length <= 3)
        {
            return name;
        }
});

filteredenames.forEach(function(name)
{
    console.log(name);
});

ArrayToUppercase = function(a)
{
    return a.toUpperCase();
};

var UppercaseNames = names.map(ArrayToUppercase);

console.log("All names with uppercase: "+UppercaseNames);

var extraNames= ["Lars", "Peter", "Jan", "Ian"];
console.log("");
console.log("New names: "+extraNames);

console.log("");


var htmlString = "<ul><Li>"+extraNames.join("</li><li>") + "</li><ul>";

console.log(htmlString);

console.log("");

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

function GetCardsNewerThan(year)
{
    var filterredelist = cars.filter(function (car)
    {
        if(car.year > year)
            {
                return car.model;
            }
    });
    
    filterredelist = filterredelist.map(function(a)
    {
        return a.model;
    });

    return filterredelist;
};


function GetAllCarsByBrand(name)
{
    var filterredelist = cars.filter(function (car)
    {
        if(car.make === name)
            {
                return car.model;
            }
    })
    filterredelist = filterredelist.map(function(a)
    {
        return a.model;
    });

    return filterredelist;
}

function GetAllCarsBelow(price)
{
    var filterredelist = cars.filter(function (car)
    {
        if(car.price < price)
            {
                return car.model;
            }
    });
    filterredelist = filterredelist.map(function(a)
    {
        return a.model + " year: "+a.year+ " " ;
    });

    return filterredelist;
}

function CarCallBack(SearchParam, callback)
{
    return callback(SearchParam);
}

console.log("Cars newer than 1999: "+CarCallBack(1999,GetCardsNewerThan));
console.log("Cars from volo: "+CarCallBack("Volvo",GetAllCarsByBrand));
console.log("Cars below 5000 in price: "+CarCallBack(5000,GetAllCarsBelow)); 

console.log("");

function SqlInsertCarsString(array)
{
    
    var sqlValues = array.map(function(a)
    {
        var resultString = "INSERT INTO cars ";
        var coloumsNames = "(id,year, make, model, price) "

        var values = "VALUES ("+a.id+","+a.year+","+a.make+","+a.model+","+a.price+")";
        
        console.log(values);
        
        return resultString +coloumsNames+ values;
    }); 
    
    return sqlValues;
};

console.log("Printing sqlstatements:")
SqlInsertCarsString(cars).forEach(function(sqlStatement)
{
    console.log(sqlStatement);
});

console.log("");

var msgPrinter = function(msg,delay){
    setTimeout(function(){
      console.log(msg);
    },delay);
  };

  //This is the order it will be printede
  console.log("aaaaaaaaaa");
  console.log("dddddddddd");
  console.log("ffffffffff");
  //msgPrinter ("eeeeeeeeee",0);//1000
  //msgPrinter ("bbbbbbbbbb",0);//2000

  console.log("");

  function Person(name){
    this.name = name;
    var self = this;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+self.name);  //Explain this - the value name have not been set. this.name is globale.
    }.bind(this),0);//2000 -
  }
  
  //Person("Kurt Wonnegut");  //This calls the function
  //console.log("I'm global: "+ name);  //Explain this - This value have been set globale - 
//"this" set a specfic value reguardless of how it was called.

var greeter = function(){
    console.log(this.message);
  };
  var comp1 = { message: "Hello World" };
  var comp2 = { message: "Hi" };
  
  var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
  var g2 = greeter.bind(comp2 );//And here another “this”
  //setTimeout(g1,0);//500
  //setTimeout(g2,0);//1000

  console.log("");
  
  var properties = {name:"SirJavaScript", birthday: "9/9", hobby: "Webcrawling", email:"meowmewo@meow.dk"};

 

  for(prop in properties){
    console.log(prop,properties[prop]);
  }

  console.log("");
  delete(properties.birthday);

  for(prop in properties){
    console.log(prop,properties[prop]);
  }

  function myPerson(firstname, lastname, age)
  {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
  }

  function printMyPerson(person)
  {
      console.log("");
      console.log(person.firstname+ " "+ person.lastname+" "+person.age);
      
  }

  var per1 = new myPerson("Cat","Meow",7);
  var per2 = new myPerson("Dog","Wuff",13);

  printMyPerson(per1);
  printMyPerson(per2);


