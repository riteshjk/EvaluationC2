//let x=document.getElementById

async function getdata(){
    let x=document.getElementById("main");
   
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);

    let data= await response.json();


    
  

     data.meals.map(function(ele){
        // console.log(ele);
        let Div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.strMealThumb

        let price=document.createElement("p");
        price.innerHTML=`price-${Math.floor(Math.random()*400)+100}`;

        let cart=document.createElement("button");
        cart.setAttribute("onclick",`getitem("${ele.idMeal}")`);
        cart.innerText="add to cart";

        Div.append(image,price,cart);
        x.append(Div);




         


    })
    
  
}
async function getitem(ele){

    let k=ele;

    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);

    let data= await response.json();

    data.meals.map(function(e){
        if(e.idMeal==ele){
            let arr1=localStorage.getItem("cart");
                if(arr1==null){
                    arr1=[];
                }
                else{
                    arr1= JSON.parse(localStorage.getItem("cart"));


                }
            
            // if(localStorage.getItem("cart")){
            //     JSON.parse(localStorage.getItem("cart"))
            // }
            // else{
            //     [];
            // }
            arr1.push(e)
            localStorage.setItem("cart",JSON.stringify(arr1))

        }
    })
}





getdata()

function go(){
    window.location.href="./cart.html"
}




