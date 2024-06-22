$(".close").click(function(){
    location.href = "index.html"
})

//characters
let pers = [
    {
        id: "pers1",
        title: "Котик",
        price: 30,
        img: "img/pers1.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers2",
        title: "Хом'ячок",
        price: 40,
        img: "img/pers2.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers3",
        title: "Песик",
        price: 35,
        img: "img/pers3.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers4",
        title: "Медведик",
        price: 60,
        img: "img/pers4.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers5",
        title: "Рибка",
        price: 20,
        img: "img/pers5.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers6",
        title: "Динозаврик",
        price: 95,
        img: "img/pers6.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers7",
        title: "Лисеня",
        price: 75,
        img: "img/pers7.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers8",
        title: "Пташеня",
        price: 25,
        img: "img/pers8.png",
        isStore: true,
        isEquip: false,
    },
    {
        id: "pers9",
        title: "Панда",
        price: 100,
        img: "img/pers9.png",
        isStore: true,
        isEquip: false,
    }
]

pers = JSON.parse(localStorage.getItem('pers')) || pers

pers.map(item=>{
    if(item.isStore){
        $(".characterStoreBox").append(
            ` <div class="character_merch" id="${item.id}">
            <img src="${item.img}" class="character_img" alt="">
            <p class="character_title">${item.title}</p>
            <div class="moneyBox">
                <img src="img/money.png" alt="">
                <p class="character_price">${item.price}</p>
            </div>
            <button class="character_buy">Придбати</button>
        </div>`
        )
    }
    else if(!item.isEquip){
        $(".characterBox").append(
            ` <div class="character_item" id="${item.id}">
            <img src="${item.img}" class="character_img" alt="">
            <p class="character_title">${item.title}</p>
            <button class="character_select">Вибрати</button>
            </div>`
        )
    }
    else{
        $(".characterBox").append(
            ` <div class="character_item active_character" id="${item.id}">
            <img src="${item.img}" class="character_img" alt="">
            <p class="character_title active_title">${item.title}</p>
            <button class="character_select character_select_active">Обрано</button>
            </div>`
        )
    }
})


let money = +localStorage.getItem("money") || 0
$("#money_count").text(Math.round(money))


pers.map(item=>{
    $(`#${item.id} .character_buy`).click(function(){

        if(money>item.price){
            money = money - item.price
            localStorage.setItem("money", money)
            
            item.isStore = false
            localStorage.setItem('pers', JSON.stringify(pers))
            location.reload()
        }
        else{
            Swal.fire({
                title: "Не вистачає грошей!",
                icon: "error"
              });
        }
    })
})


pers.map(item=>{
    $(`#${item.id} .character_select`).click(function(){

            pers.map(i=>{
                i.isEquip = false
            })

            item.isEquip = true
            localStorage.setItem('pers', JSON.stringify(pers))
            localStorage.setItem("selectPers", item.id)
            location.reload()
    })
})






//backgrounds
let background = [
    {
        id: "fon1",
        title: "Гори",
        price: 55,
        img: "https://images.wallpapersden.com/image/download/panoramic-minimal-mountains_a2doZWmUmZqaraWkpJRobWllrWdma2U.jpg",
        isStore: true,
        isEquip: false,
    },
    {
        id: "fon2",
        title: "Тюльпани",
        price: 45,
        img: "https://static.vecteezy.com/system/resources/previews/022/321/260/large_2x/mother-s-day-valentine-s-day-background-concept-with-pink-tulip-flowers-generative-ai-free-photo.jpg",
        isStore: true,
        isEquip: false,
    },
    {
        id: "fon3",
        title: "Ліс",
        price: 40,
        img: "https://wallpapers-clan.com/wp-content/uploads/2023/10/deep-forest-aesthetic-desktop-wallpaper-preview.jpg",
        isStore: true,
        isEquip: false,
    },
    {
        id: "fon4",
        title: "Місто",
        price: 60,
        img: "https://4kwallpapers.com/images/wallpapers/bangkok-cityscape-city-lights-night-metropolitan-blue-3840x2160-1300.jpg",
        isStore: true,
        isEquip: false,
    },
    {
        id: "fon5",
        title: "Листя",
        price: 25,
        img: "https://wallpapercrafter.com/sizes/2560x1440/9823-leaves-green-dark-plant-4k.jpg",
        isStore: true,
        isEquip: false,
    },
    {
        id: "fon6",
        title: "Небо",
        price: 40,
        img: "https://www.pixground.com/wp-content/uploads/2023/10/Anime-Sunset-Sky-AI-Generated-4K-Wallpaper-jpg.webp",
        isStore: true,
        isEquip: false,
    }
]

background = JSON.parse(localStorage.getItem('background')) || background

background.map(item=>{
    if(item.isStore){
        $(".bgStoreBox").append(
            ` <div class="bg_merch" id="${item.id}">
            <img src="${item.img}" class="bg_img" alt="">
            <p class="bg_title">${item.title}</p>
            <div class="moneyBox">
                <img src="img/money.png" alt="">
                <p class="bg_price">${item.price}</p>
            </div>
            <button class="bg_buy">Придбати</button>
        </div>` 
        )
        
    }
    else if(!item.isEquip){
        $(".bgBox").append(
            ` <div class="bg_item" id="${item.id}">
            <img src="${item.img}" class="bg_img" alt="">
            <p class="bg_title">${item.title}</p>
            <button class="bg_select">Вибрати</button>
            </div>`
        )
    }
    else{
        $(".bgBox").append(
            ` <div class="bg_item active_bg" id="${item.id}">
            <img src="${item.img}" class="bg_img" alt="">
            <p class="bg_title active_title">${item.title}</p>
            <button class="bg_select bg_select_active">Обрано</button>
            </div>`
        )
    }
})



background.map(item=>{
    $(`#${item.id} .bg_buy`).click(function(){

        if(money>item.price){
            money = money - item.price
            localStorage.setItem("money", money)
            
            item.isStore = false
            localStorage.setItem('background', JSON.stringify(background))
            location.reload()
        }
        else{
            Swal.fire({
                title: "Не вистачає грошей!",
                icon: "error"
              });
        }
    })
})


background.map(item=>{
    $(`#${item.id} .bg_select`).click(function(){

            background.map(i=>{
                i.isEquip = false
            })

            item.isEquip = true
            localStorage.setItem('background', JSON.stringify(background))
            localStorage.setItem("selectBack", item.id)
            location.reload()
    })
})