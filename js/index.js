

/**Contact Form :P**/
$(document).ready(function(){
    $('#submit-btn').click(function(event){
        
        console.log("i've been clicked UwU")


        var email = $("#email").val()
        var subject = $("#subject").val()
        var message = $("#message").val()
        var statusElm = $('#status')
        statusElm.empty()

        if(email.length > 5 && email.includes("@") && email.includes(".")){
            console.log('email is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is invalid</div>')
        }

        if(subject.length >= 2){
            console.log('subject is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is invalid</div>')
        }

        if(message.length >= 10){
            console.log('email is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is invalid</div>')
        }
    })
})