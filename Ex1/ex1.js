
//A
console.log("A");
console.log("");

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

console.log("Boys: "+boys);
console.log("Girls: "+girls);

//B 
console.log("");
console.log("A");
console.log("");

var all = boys.concat(girls);

console.log(all.length);



for(i = 0; i < all.length; i++)
    {
        console.log("number in Array = "+i + " name: "+ all[i]);
    }

//C
console.log("");
console.log("C");
console.log("");

all.join();

console.log("Joined Arrays: "+all);
console.log("seperatede with -   "+all.join("-"));

//D 
console.log("");
console.log("D");
console.log("");

all.push("Lone","Gitte");

console.log(all);

console.log("");
console.log("E");
console.log("");

all.unshift("Hans","Kurt");
console.log(all);

console.log("");
console.log("F  ");
console.log("");

all.shift()
console.log("Removed Hans: "+all);

console.log("");
console.log("G ");
console.log("");

all.pop()
console.log("Removed Gitte: "+all);

console.log("");
console.log("H  ");
console.log("");

all.splice(3,2);
console.log("Removing Ole and Janne - Starting from 3 in the arrray and deleting the next two");
console.log(all);

console.log("");
console.log("I  ");
console.log("");



console.log("Original List order: "+all);
console.log("");
all.reverse();
console.log("Reversing list order: "+all);

console.log("");
console.log("J  ");
console.log("");

console.log("Before sort: "+all);
all.sort();
console.log("Default sort: "+all);

console.log("");
console.log("K  ");
console.log("");

all.sort(function(a,b)
{
    return a.toLocaleLowerCase().localeCompare(b.toLowerCase);
})

console.log("Lower first: "+all);

console.log("");
console.log("L  ");
console.log("");

ArrayToUppercase = function(a)
{
    return a.toUpperCase();
};

//all = all.map(ArrayToUppercase);

console.log("All names to uppercase: "+all.map(ArrayToUppercase));

console.log("");
console.log("M  ");
console.log("");

FindNamesByTheFirstLetter = function(a,b)
{
    var upper = b.toUpperCase();
    var lower = b.toLowerCase();
    var filteredenames = a.filter(function(name)
{
    if(name.charAt(0) === lower || name.charAt(0) === upper)
    {
        return name;
    }
})
    return filteredenames;
};

console.log("function can take both upper and lower case letter.")
console.log("Finding names with L: "+FindNamesByTheFirstLetter(all,"L"));
console.log("Finding names with l: "+FindNamesByTheFirstLetter(all,"l"));

console.log("");
console.log("This exercise was completede by Michael Skjaldgaard  ");
console.log("");