

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
            statusElm.append('<div id="secret-thing">! Email is invalid</div>')
        }

        if(subject.length >= 2){
            console.log('subject is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div id="secret-thing">! Subject must be at least 2 characters long</div>')
        }

        if(message.length >= 10){
            console.log('email is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div id="secret-thing">! Message must be at least 10 characters long</div>')
        }
    })
})

//about section

const aboutBtn=document.querySelector("#about-btn");
const moreText=document.querySelector("#more-about");
const lessBtn=document.querySelector("#less-btn");

aboutBtn.addEventListener("click", ShowMore);

function ShowMore(){
    moreText.classList.toggle("hide");
    lessBtn.classList.toggle("hide");
    aboutBtn.classList.toggle("hide");
}

lessBtn.addEventListener("click", HideInfo);
function HideInfo(){
    moreText.classList.toggle("hide");
    lessBtn.classList.toggle("hide");
    aboutBtn.classList.toggle("hide");
}