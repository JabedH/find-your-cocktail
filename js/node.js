const randomApi =() =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .then(res => res.json())
    .then(data => getRandomApi(data.drinks.slice(0, 8)))
}
randomApi()
const getRandomApi = (getObjects)=>{
    const getRandomId = document.getElementById('addRandom')
    getObjects.forEach(getobj=>{
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('col-md-3')
        div.classList.add('border-0')
    div.innerHTML = 
    ` <img src="${getobj.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title text-center ">${getobj.strDrink}</h5>
        </div>
    `
    getRandomId.appendChild(div)
    })
    
}
const nonAlcoholic =() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => getNonAlcoholic(data.drinks.slice(0,8)))
}
nonAlcoholic()
const getNonAlcoholic = (NonAlcoholicObj) =>{
    const getNonId = document.getElementById('nonAlcoholic')
    NonAlcoholicObj.forEach(nonObj =>{
        const div1 = document.createElement('div')
        div1.classList.add('card')
        div1.classList.add('col-md-3')
        div1.classList.add('border-0')
        div1.innerHTML = 
    ` <img src="${nonObj.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title text-center ">${nonObj.strDrink}</h5>
        </div>
    `
    getNonId.appendChild(div1)
    })
}

// input value

const searchCocktail =() =>{
    const searchField = document.getElementById('inputValue')
    const searchValue = searchField.value
    console.log(searchValue)
    const error = document.getElementById('warningId')
    if(!isNaN(searchValue)|| searchValue == "" ){
        error.innerText = 'please search by name'
    }
    else {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(res => res.json())
        .then(data => displayCocktail(data.drinks))
    }
    const displayCocktail = allCocktail =>{
    const newCocktail = document.getElementById('newCocktail')
    allCocktail.forEach(cocktail => {
        console.log(cocktail)
        const div2 = document.createElement('div')
        div2.classList.add('card')
        div2.classList.add('col-md-3')
        div2.classList.add('border-0')
        div2.innerHTML = 
    ` <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title text-center ">${cocktail.strDrink}</h5>
        </div>
    `
    newCocktail.appendChild(div2)
    if(onclick="searchCocktail()"){
        document.getElementById('findCocktail').style.display = 'none'
    }
    })
    }
    

}