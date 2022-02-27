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
    searchField.value = ''
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
        if(onclick="searchCocktail()"){
            document.getElementById('spinner').style.display = 'block'
        }
    const newCocktail = document.getElementById('newCocktail')
    newCocktail.innerHTML = ''
    allCocktail?.forEach(cocktail => {
        console.log(cocktail)
        const div2 = document.createElement('div')
        div2.classList.add('text-center','mb-5','border-0','col-md-3','card')
        div2.innerHTML = 
    ` <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title text-center mb-3">${cocktail.strDrink}</h5>
         <a href="#" onclick="loadCocktail(${cocktail.idDrink})" class=" text-center btn btn-primary ">More Details</a>
        </div>
    `
    newCocktail.appendChild(div2)
    if(onclick="searchCocktail()"){
        document.getElementById('findCocktail').style.display = 'none'
        document.getElementById('popularId').style.display = 'none'
        document.getElementById('latestId').style.display = 'none'
        document.getElementById('spinner').style.display = 'none'
    }
    })
    }
}
const loadCocktail = cocktailId =>{
    console.log(cocktailId)
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(res => res.json())
    .then(data => newLoadCocktail(data.drinks[0]))
}
const newLoadCocktail = cocktailDetails =>{
    const addCocktailId = document.getElementById('cocktailNewId')
    addCocktailId.innerHTML =''
    const div3 = document.createElement('div')
    div3.classList.add('text-center','mb-5','border-0','col-md-4','card')
    div3.innerHTML = 
    `<div class="card mb-3">
    <img src="${cocktailDetails.strDrinkThumb}" style="height: 12rem;" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cocktailDetails.strDrink}</h5>
      <p class="card-text">${cocktailDetails.strInstructions.slice(0, 200)}</p>
    </div>
  </div>`
    addCocktailId.appendChild(div3)
}