let result = document.getElementById('result');
let input = document.getElementById('inputAdd');
let btn1 = document.getElementById('button-addon1');
let btn2 = document.getElementById('button-addon2');
let btn3 = document.getElementById('button-addon3');

function GetName(name)
{
    let Names = document.createElement("p");
    Names.classname ="list-groups";
    Names.textContent = name;
    result.appendChild(Names);
    Names.addEventListener('click', function(){
    Names.remove();
    })
    console.log()
}
btn2.addEventListener('click', () =>{
 GetName(input.value);
});





btn1.addEventListener('click', () =>{
    let r = new Date();
    //
    //was trying to randomize 
    let usersInput =['']
    return usersInput;

   });







btn3.addEventListener('click', () =>{
   
   });

