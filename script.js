

function registerform(){

    let first_name = document.querySelector('.name').value
     let firstname_size = first_name.length

     let last_name = document.querySelector('.lastname').value
     let lastname_size = last_name.length


     let phone = document.querySelector('.phone').value
     let phone_size = phone.length

     let emailId = document.querySelector('.email').value
     let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
     console.log(emailId)


   


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

      }else if(!emailId.match(emailFormat)){
         document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Please write your correct email'

     }else if (password_size <3){
        document.querySelector('.first-condition').innerText = ""

        document.querySelector('.second-condition').innerText = 'Please write your valid password'

     }else{
        document.querySelector('.second-condition').innerText = ""

        document.querySelector('.first-condition').innerText = 'Your registation submit successfully'

     }


}