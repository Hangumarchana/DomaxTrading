let database=[];
let product1Image =document.getElementById('HP1Image');
let product1Name =document.getElementById('HP1Name');
let product1Style =document.getElementById('HP1Style');
let productId4=document.getElementById('productId4');
let product2Image=document.getElementById('HP2Image');
let product2Name=document.getElementById('HP2Name');
let product2Style=document.getElementById('HP2Style');
let productId5=document.getElementById('productId5');
let product3Image=document.getElementById('HP3Image');
let product3Name=document.getElementById('HP3Name');
let product3Style=document.getElementById('HP3Style');
let productId6=document.getElementById('productId6');
let product4Image=document.getElementById('HP4Image');
let product4Name=document.getElementById('HP4Name');
let product4Style=document.getElementById('HP4Style');
let productId7=document.getElementById('productId7');
let product5Image=document.getElementById('HP5Image');
let product5Name=document.getElementById('HP5Name');
let product5Style=document.getElementById('HP5Style');
let productId8=document.getElementById('productId8');
let product6Image=document.getElementById('HP6Image');
let product6Name=document.getElementById('HP6Name');
let product6Style=document.getElementById('HP6Style');
let productId9=document.getElementById('productId9');


async function loadData(){
    try{
        const response = await fetch('Data.json');
        if(!response.ok){
            throw new Error('Network response was not ok');

        }
        database = await  response.json();

    }
    catch (error){
        console.log(error);
    }
}

async function main(){
    await loadData();
    console.log(database);
    product1Image.src = database[39].IMG;
    product1Name.innerText = database[39].Name;
    product1Style.innerText = database[39].Style;
    productId4.innerText = database[39].Id;
    product2Image.src = database[40].IMG;
    product2Name.innerText = database[40].Name;
    product2Style.innerText = database[40].Style;
    productId5.innerText = database[40].Id;
    product3Image.src = database[37].IMG;
    product3Name.innerText = database[37].Name;
    product3Style.innerText = database[37].Style;
    productId6.innerText = database[37].Id;
    product4Image.src = database[33].IMG;
    product4Name.innerText = database[33].Name;
    product4Style.innerText = database[33].Style;
    productId7.innerText = database[33].Id;
    product5Image.src = database[31].IMG;
    product5Name.innerText = database[31].Name;
    product5Style.innerText = database[31].Style;
    productId8.innerText = database[31].Id;
    product6Image.src = database[35].IMG;
    product6Name.innerText = database[35].Name;
    product6Style.innerText = database[35].Style;
    productId9.innerText = database[35].Id;



}
main();

