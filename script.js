

function registerform(){

    let first_name = document.querySelector('.name').value
     let firstname_size = first_name.length

     let last_name = document.querySelector('.lastname').value
     let lastname_size = first_name.length


     let phone = document.querySelector('.phone').value
     let phone_size = phone.length

     let mail = document.querySelector('.email').value
     let mail_size = mail.length

     let password = document.querySelector('.password').value
     let password_size = password.length


     if(firstname_size < 2){

        document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Name is required minium 2 characters'
     }else if (lastname_size < 2){
            document.querySelector('.first-condition').innerText = ""
    
            document.querySelector('.second-condition').innerText = 'Please write your last name'
    
     }else if (phone_size !== 10){
        document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Phone number should be 10 digit'

     }else if (mail_size < 4){
        document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Please write your correct mail'

     }else if (password_size < 0){
        document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Please write your valid password'

     }else{
        document.querySelector('.second-condition').innerText = ""

        document.querySelector('.first-condition').innerText = 'Your registation submit successfully'

     }


}