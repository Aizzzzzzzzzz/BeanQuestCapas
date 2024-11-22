// const form = document.getElementById('form')
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const msg_error = document.getElementById('errormsg')


const accountEmail = ['GeraldTolentino@yahoo.com','Razzeltorres@yahoo.com', 'Markquiambao@yahoo.com', 'Trishaapilan@yahoo.com', 'Clarksalentes@yahoo.com', 'Jaysigua@yahoo.com', 'Jhulangoluan@yahoo.com', 'Crizeldizon@yahoo.com', 'Karlgregorio@yahoo.com'];
const accountPassword = ['BQSirGe','BQpres', 'BQmark', 'BQtrisha','BQclark', 'BQjay', 'BQjhul', 'BQcrizel', 'BQkarl'];
let buttonLogin = document.getElementById('btnLogin');


function formsubmit(){

    for(let i = 0; i <= accountEmail.length; i++){
        let accEmail = accountEmail[i]
        let accPass = accountPassword[i]
        if(accEmail == email_input.value && accPass == password_input.value){
            window.location.href = 'index.html' 
            break;  
        }else{
            msg_error.innerText = 'Credentials Incorrect Please try-again!!!!';  
        }
    }




}

