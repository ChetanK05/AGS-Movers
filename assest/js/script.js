$(function(){
    $('.selectpicker').selectpicker();
});
function megamenu(){
    let megamenu = document.getElementById('megamenu');
    if(megamenu.style.display == 'none'){
        megamenu.style.display ='block';
    }
    else{
        megamenu.style.display = 'none';
    }
}