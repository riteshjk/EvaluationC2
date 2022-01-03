 let arr=JSON.parse(localStorage.getItem("cart"))
 //console.log(arr)
document.getElementById("new").append(arr.length)

 
 

 function showdata(arr){
     let x=document.getElementById("favourite")

 arr.map(function(ele){
     
    // console.log(ele);
    let Div=document.createElement("div");
    let image=document.createElement("img");
    image.src=ele.strMealThumb

    let price=document.createElement("p");
    price.innerHTML=`price-${Math.floor(Math.random()*400)+100}`;

    let remove=document.createElement("button");
    remove.setAttribute("onclick",`getitem("${ele.idMeal}")`);
     remove.innerText="Remove";

    Div.append(image,price,remove);
    x.append(Div);

 


     


})

 }
 async function getitem(ele){
     //console.log(ele)

     arr.filter(function(e){
         e.idMeal!=ele;

     })
     console.log(arr)
    // let k=ele;

    // let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);

    // let data= await response.json();

    // data.meals.map(function(e){
    //     if(e.idMeal==ele){
    //         let arr1=localStorage.getItem("cart");
    //             if(arr1==null){
    //                 arr1=[];
    //             }
    //             else{
    //                 arr1= JSON.parse(localStorage.getItem("cart"));
                    


    //             }
            
         
    //         arr1.push(e)
    //         localStorage.setItem("cart",JSON.stringify(arr1))

    //     }
    // })
}


function check(){
    window.location.href="./checkout.html";
}
 showdata(arr);