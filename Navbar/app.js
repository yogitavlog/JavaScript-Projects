const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('mouseover', function(){
    this.style.border = '2px solid black';
    this.style.borderRadius = '3px';
    this.style.padding = ' 1px 2px'
});
navToggle.addEventListener('mouseout', function(){
    this.style.border = 'none';
});

navToggle.addEventListener('click', function(){
    //console.log(links.classList);
    //console.log(links.classList);
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    }*/
    links.classList.toggle('show-links');

});