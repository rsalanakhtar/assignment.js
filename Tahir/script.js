// First
var itemsArray = [
    {
        name:'juice',
        price : '50',
        quantity : '3'
    },    {
        name:'cookie',
        price : '30',
        quantity : '5'
    },
    {
        name:'shirt',
        price : '880',
        quantity : '2'
    },
]
function calculatePrice(arr){
    var name = itemsArray[arr].name;
    var price = itemsArray[arr].price;
    var quantity = itemsArray[arr].quantity;

    console.log('Name' + " : " + name);
    console.log('Price' + " : " + price);
    console.log('Quantity' + " : " + quantity);
    console.log('Total' + " : " + quantity * price);
}
calculatePrice(0);

// Second
var obj = {
    name : "",
    address : "",
    email : "",
    password : "",
}
var txt  = document.getElementById('output');
var btn = document.getElementById('searchBtn');
btn.addEventListener('click' , function(){
    var searchWord = document.getElementById('search').value.toLowerCase();
    if(obj[searchWord] != undefined){
        txt.innerHTML = searchWord + " is availabale in object";
    }else{
        txt.innerHTML = searchWord + " is not availabale";
    }
})
// Third
function Construct(name , gender , email , rollNo){
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.rollNo = rollNo;
}
var firstObj = new Construct('Tahir' , 'male' , 'kgjf@gmail.com' , 4545)
var secondObj = new Construct('Owais' , 'male' , 'sfaadfs@gmail.com' , 5015)
var thirdObj = new Construct('Shahrukh' , 'male' , 'qndm@gmail.com' , 8912)

console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);

// Fourth
var populationArray = []; 
function saveInArray(){

var inputName = document.getElementById('name').value;
var inputAddress = document.getElementById('address').value;
var inputEducation = document.getElementById('education').value;
var inputPopulation = document.getElementById('population').value;
var gender = document.querySelectorAll('.gender')
if(gender[0].checked){
    gender = 'Male'
}else if(gender[1].checked){
    gender = 'Female'
}

function UserInfo(name , gender , address , education , population){
    this.Name = name;
    this.Gender = gender;
    this.Address = address;
    this.Education = education;
    this.Population = population;
}
var user = new UserInfo(inputName , gender , inputAddress , inputEducation , inputPopulation)

    populationArray.push(user);
    console.log(populationArray);
}


document.getElementById('btn').addEventListener('click' , function(){
    saveInArray();
})