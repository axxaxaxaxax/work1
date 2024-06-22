
$(".close").click(function(){
    location.href = "index.html"
})



let score = 0
let errors = 0

let money = +localStorage.getItem("money") || 0
$("#money_count").text(Math.round(money))

$("body").keydown(function(event){

    if(start ==  false){
        if(event.key == ' '){
            start = true
            $(".hero").show()
            $(".text").show()
            
            $(".start").hide()
        }
    }
    else{
        let text = $("#text").val().split('')
        
        if(event.key != "Shift" && event.key != "CapsLock" && event.key != "Alt" && event.key != "Ctrl"){
            if(event.key == text[0]){
                text.shift()
                setTimeout(function(){                           
                    if(text.length<1){
                       
                       localStorage.setItem("money", money + (score * 1.3))
                        $("#money_count").text(Math.round(money))
                        
                        Swal.fire({
                            title: 'Урок завершено!',
                            text: 'Перейти до сторінки уроків?',
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Так',
                            cancelButtonText: 'Ні'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                location.href = 'lessons.html';
                            } else {
                                location.reload();
                            }
                        });
                    }
                },200)
            
                $("#text").val(text.join(''))
                score++
                $(".score").text('Балів: ' + score)
            }
            else{
                errors++
                $(".mistake").text('Помилок: ' + errors)
            }
            
            if(text.length < 1){
                
                
            }
        }
        else{
        
        }
    }

    
})






let timer
let speed = 0
let time = 1

timer = setInterval(function(){
    time++
    speed = Math.round(score/time*60)
    $('.speed').text('Швидкість: ' + speed + "зн/хв")
},1000)


$(".closeBtn_store").click(function(){
    window.close()
})
$(".closeBtn_lessons").click(function(){
    window.close()
})
$(".closeBtn_contact").click(function(){
    window.close()
})


    



let start = false







let avatar = localStorage.getItem("selectPers")
let avatars = JSON.parse(localStorage.getItem("pers"))

if(avatars)
avatars.map(item=>{
    if(item.id == avatar){
        $('.hero').css('background', `url(${item.img})`)
        $('.hero').css('background-size', `100% 100%`)
    }
})



let back = localStorage.getItem("selectBack")
let backs = JSON.parse(localStorage.getItem("background"))

if(backs)
backs.map(item=>{
    if(item.id == back){
        $('.wrapper').css('background', `url(${item.img})`)
        $('.wrapper').css('background-size', `100% 100%`)
        $(".inputArea").css("background", "none")
        $(".catsImage").css({
            "top": "55px",
            "left": "850px"
        })
    }
console.log(backs)
    if (back == "fon1") {
        $(".stat").css("background", "#5f225b");
        $(".stat>p").css("color", "#fff");
        $(".backBtn").css("background", "#3e0d40");
        $(".close").css("background", "#3e0d40");
        $(".money").css("background", "#3e0d40");
    } 
    if (back == "fon2") {
        $(".stat").css("background", "#eb6f9d");
        $(".stat>p").css("color", "#fff");
        $(".backBtn").css("background", "#bc597d");
        $(".close").css("background", "#bc597d");
        $(".money").css("background", "#bc597d");
    } 
    if (back == "fon3") {
        $(".stat").css("background", "#163c3f");
        $(".stat>p").css("color", "#fff");
        $(".backBtn").css("background", "#15282f");
        $(".close").css("background", "#446e74");
        $(".money").css("background", "#446e74");
    } 
    if (back == "fon4") {
        $(".stat>p").css("color", "#436F97");
        $(".backBtn").css("background", "#011e4a");
    } 
    if (back == "fon5") {
        $(".stat").css("background", "#53806c");
        $(".stat>p").css("color", "#fff");
        $(".backBtn").css("background", "#2c4c47");
        $(".close").css("background", "#2c4c47");
        $(".money").css("background", "#2c4c47");
    } 
    if (back == "fon6") {
        $(".stat").css("background", "#172a66");
        $(".stat>p").css("color", "#fff");
        $(".backBtn").css("background", "#101d52");
        $(".close").css("background", "#4967c6");
        $(".money").css("background", "#4967c6");
    }
    
})






//уроки
let lesson1 = ["дж дж дж дж дж дж дж дж дж дж дж дж дж дж дж дж дж"]
let lesson2 = ["ал ал ал ал ал ал ал ал ал ал ал ал ал ал ал ал ал"]
let lesson3 = ["ол ол ол ол ол ол ол ол ол ол ол ол ол ол ол ол ол"]
let lesson4 = ["во во во во во во во во во во во во во во во во во"]
let lesson5 = ["ів ів ів ів ів ів ів ів ів ів ів ів ів ів ів ів ів"]
let lesson6 = ["вол ода вол ода вол ода вол ода вол ода вол ода вол"]
let lesson7 = ["два жал два жал два жал два жал два жал два жал два"]
let lesson8 = ["вал лов вал лов вал лов вал лов вал лов вал лов вал"]
let lesson9 = ["дав вів дав вів дав вів дав вів дав вів дав вів дав"]
let lesson10 = ["дол лад дол лад дол лад дол лад дол лад дол лад дол"]
let lesson11 = ["алло фіва єжє алло папа джо алло"]
let lesson12 = ["вал жар кварц код кол лад пуд пол пар пил рок"]
let lesson13 = ["скарб коду шкіра край лупа парк плід вокал дужка кварц"]
let lesson14 = ["уводка ужовка хитрощі урожай прапорець кружало подружка"] 
let lesson15 = ["порода варвара овал ложа олово провал фарфор оправа"]
let lesson16 = ["порука підвал плужок плойка провал продув пружок"]
let lesson17 = ["Авола Авола Авола Авола Авола Авола Авола Авола"] 
let lesson18 = ["проводжав проводжав проводжав проводжав проводжав"] 
let lesson19 = ["Код це система умовних знаків для подання інформації."]
let lesson20 = ["Інформація, яку ми отримуємо з навколишнього світу, надходить до нас у вигляді умовних знаків або сигналів різної фізичної природи."] 
//




switch(+localStorage.getItem('lesson') || 1){
    case 1:
        $("#text").val(lesson1)
        break;
    case 2:
        $("#text").val(lesson2)
        break;
    case 3:
        $("#text").val(lesson3)
        break;
    case 4:
        $("#text").val(lesson4)
        break;
    case 5:
        $("#text").val(lesson5)
        break;
    case 6:
        $("#text").val(lesson6)
        break;
    case 7:
        $("#text").val(lesson7)
        break;
    case 8:
        $("#text").val(lesson8)
        break;
    case 9:
        $("#text").val(lesson9)
        break;
    case 10:
        $("#text").val(lesson10)
        break;
    case 11:
        $("#text").val(lesson11)
        break;
    case 12:
        $("#text").val(lesson12)
        break;
    case 13:
        $("#text").val(lesson13)
        break;
    case 14:
        $("#text").val(lesson14)
        break;
    case 15:
        $("#text").val(lesson15)
        break;
    case 16:
        $("#text").val(lesson16)
        break;
    case 17:
        $("#text").val(lesson17)
        break;
    case 18:
        $("#text").val(lesson18)
        break;
    case 19:
        $("#text").val(lesson19)
        break;
    case 20:
        $("#text").val(lesson20)
        break;
}


$(".backBtn").click(function(){
    location.href = "lessons.html"
})