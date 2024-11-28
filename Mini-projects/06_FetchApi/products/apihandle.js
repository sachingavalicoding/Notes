// get all products 

const sidebar = document.querySelector(".product__sidebar");
const displayCard = document.querySelector(".product__display");
const getAllProducts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products');
        if(response){
            let data = await response.json(); // parse json data 
            data =  data.products;
            console.log(data)
            showCards(data);
            showDisplayCard(data[0]);
            return data;
        }
    }catch(e){
        console.log(" ERROR IN FETCH DATA " , e);
    }
}

getAllProducts();


const showCards = (data) => {
    data.map((product) => {
        let div = document.createElement("div");
        let showBtn = document.createElement("button");
        showBtn.innerText = " Show Product "
        div.innerHTML = `
        <img src = " ${product.images[0]} " alt = "image not found"  > 
        <p> ${product.title}  </p>        
        
        `

        showBtn.classList.add("btn-product");
        div.appendChild(showBtn);
        sidebar.appendChild(div);
        

        showBtn.addEventListener("click" , ()=> {
            sidebar.classList.toggle("sidebarVisible");
            showDisplayCard(product);
        })
    });
}

const showDisplayCard = (data) => {
    // set first item as dummy data 
    // clear it 
    displayCard.innerHTML = " ";
    let div = document.createElement("div");
    div.innerHTML = `
    <div class = "display__image"> 
    <img src = " ${data.images[0]} " alt = "image not found"  > 
    </div>
    <div  class = "display__content">
        <h2> ${data.title} </h2>
        <span> $${data.price}  </span>
        <p> ${data.description} </p>
        <p> ${data.warrantyInformation} with <span> ${data.returnPolicy} </span> </p>
        <p> Rating :  ${data.rating} </p>

        <button class = "btn btn-main"> Shop Now  </button>
    </div>
    `
    displayCard.appendChild(div);
}


const menubar = document.getElementById("menubar");
const homeBack = document.getElementById("homeback");
menubar.addEventListener("click" , () => {
    sidebar.classList.toggle("sidebarVisible");
})
homeBack.addEventListener("click" , () => {
    window.location.href = "../index.html";
})

document.querySelectorAll(".btn-product").forEach((button) => {
    button.addEventListener("click" , () => {
        console.log(button)
        sidebar.classList.toggle("sidebarVisible");
    })
})