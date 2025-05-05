const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('emai');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(username.value);

    if(username.value===''){
        shoeError(username, 'Username is required');
    }else{
        showSuccess(username);
    }
    // hello streak maintain
})