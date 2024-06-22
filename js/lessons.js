$("#lesson1").click(function(){
    localStorage.setItem('lesson', '1')
    location.href = "trainer.html"
})

$("#lesson2").click(function(){
    localStorage.setItem('lesson', '2')
    location.href = "trainer.html"
})

$("#lesson3").click(function(){
    localStorage.setItem('lesson', '3')
    location.href = "trainer.html"
})

$("#lesson4").click(function(){
    localStorage.setItem('lesson', '4')
    location.href = "trainer.html"
})

$("#lesson5").click(function(){
    localStorage.setItem('lesson', '5')
    location.href = "trainer.html"
})

$("#lesson6").click(function(){
    localStorage.setItem('lesson', '6')
    location.href = "trainer.html"
})

$("#lesson7").click(function(){
    localStorage.setItem('lesson', '7')
    location.href = "trainer.html"
})

$("#lesson8").click(function(){
    localStorage.setItem('lesson', '8')
    location.href = "trainer.html"
})

$("#lesson9").click(function(){
    localStorage.setItem('lesson', '9')
    location.href = "trainer.html"
})

$("#lesson10").click(function(){
    localStorage.setItem('lesson', '10')
    location.href = "trainer.html"
})

$("#lesson11").click(function(){
    localStorage.setItem('lesson', '11')
    location.href = "trainer.html"
})

$("#lesson12").click(function(){
    localStorage.setItem('lesson', '12')
    location.href = "trainer.html"
})

$("#lesson13").click(function(){
    localStorage.setItem('lesson', '13')
    location.href = "trainer.html"
})

$("#lesson14").click(function(){
    localStorage.setItem('lesson', '14')
    location.href = "trainer.html"
})

$("#lesson15").click(function(){
    localStorage.setItem('lesson', '15')
    location.href = "trainer.html"
})

$("#lesson16").click(function(){
    localStorage.setItem('lesson', '16')
    location.href = "trainer.html"
})

$("#lesson17").click(function(){
    localStorage.setItem('lesson', '17')
    location.href = "trainer.html"
})

$("#lesson18").click(function(){
    localStorage.setItem('lesson', '18')
    location.href = "trainer.html"
})

$("#lesson19").click(function(){
    localStorage.setItem('lesson', '19')
    location.href = "trainer.html"
})

$("#lesson20").click(function(){
    localStorage.setItem('lesson', '20')
    location.href = "trainer.html"
})



$(".close").click(function(){
    location.href = "index.html"
})



let money = +localStorage.getItem("money") || 0
$("#money_count").text(Math.round(money))