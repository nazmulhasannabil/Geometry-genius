function multiplication(b,h){
    return b*h;
}
document.getElementById('calc-btn-4-tri').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_tri').value);
    const b= parseFloat(document.getElementById('width_tri').value);
    const area= .5 * multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Triangle '+ area +'cmq';  
})

document.getElementById('calcbtn4rectangle').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_rec').value);
    const b= parseFloat(document.getElementById('width_rec').value);
    const area= multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Rectangle '+ area +'cmq';  
})
document.getElementById('calcbtn4para').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_para').value);
    const b= parseFloat(document.getElementById('width_para').value);
    const area= multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Parallelogram '+ area +'cmq'; 
})
document.getElementById('calcbtn4rhombus').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_rho').value);
    const b= parseFloat(document.getElementById('width_rho').value);
    const area= .5*multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Rhombus '+ area +'cmq'; 
})
document.getElementById('calcbtn4pentagon').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_pen').value);
    const b= parseFloat(document.getElementById('width_pen').value);
    const area= .5* multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Pentagon '+ area +'cmq'; 
})
document.getElementById('calcbtn4ellipse').addEventListener('click',function(){
    const h= parseFloat(document.getElementById('height_ell').value);
    const b= parseFloat(document.getElementById('width_ell').value);
    const PI=3.1415;
    const area= PI * multiplication(b,h);
    document.getElementById('show_area').innerHTML = 'Area of a Ellipse '+ area +'cmq'; 
})