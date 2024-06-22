window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_hjm1vbq', 'template_oy8ow8q', this)
            .then(function() {
                    Swal.fire({
                        title: "Успішно!",
                        text: "Твоє повідомлення доставлено автору 💙"
                    });   
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


let money = +localStorage.getItem("money") || 0
$("#money_count").text(Math.round(money))


$(".close").click(function(){
    location.href = "index.html"
})