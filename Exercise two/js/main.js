var os = 'Windows';
var type = 'Laptop';
var value = 1500;

if(os === 'Mac'){
    console.log('Incredible Mac')
} else {
    console.log('Super Windows')
}

if(type === 'Desktop'){
    console.log("It\'s a Desktop")
} else if(type === 'All in one'){
    console.log("It\'s a All in one")
} else if(type === 'Laptop'){
    console.log("It\'s a Laptop")
} else {
    console.log("It\'s a computer")
}


switch(value){
    case 100:
        console.log('The price is $'+ value +', awesome discount !!')
    break;
    case 200:
        console.log('The price is $'+ value +', super deal.')
    break;
    default:
        console.log('The price is $'+ value)
}