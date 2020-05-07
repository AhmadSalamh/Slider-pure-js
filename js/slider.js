let sliderImages=Array.from(document.querySelectorAll('.slider-container img'));
    slidesCount=sliderImages.length,//عدد الصور 
    currentSlide=1//الصوره او رقم الصورة يلي رح نبدأ فيها
    sliderNumberElement=document.getElementById('slider-number'),//رقم الصورة الظاهرة
    prevButton=document.getElementById('prev'),
    nextButton=document.getElementById('next'),
    Indicators=document.getElementById('indicators');

//creat the main ul element
let paginationUL=document.createElement('ul');
    paginationUL.setAttribute('id','pagination-ul');

for(var i=1; i<=slidesCount; i++){ //انشاء li 
    paginationLi=document.createElement('li');

    paginationLi.setAttribute('data-index',i);

    paginationLi.appendChild(document.createTextNode(i));//listوضع نص داخل ال

    paginationUL.appendChild(paginationLi);
}
Indicators.appendChild(paginationUL)//add ul to html 

var paginationCreatedUl=document.getElementById('pagination-ul')//وضعنا ال القائمة الجديدة التي انشاناها في متغير

var paginationBullets=Array.from(document.querySelectorAll('#pagination-ul li'));//انشاء مصوفة li

function theChecker (){
    sliderNumberElement.textContent=`Slide #${currentSlide} Of ${slidesCount}`;

    removeAllActive()//حدف جميع الكلاسات من الصور والقائمة

    sliderImages[currentSlide-1].classList.add('active')//وضع كلاس على اول عنصر في المصقوفة
    
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');//وضع كلاس عبى اول عنصر في القائمة

    if(currentSlide == 1){//اختبار اذا كان اول صوره
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    }

    if(currentSlide == slidesCount){//اختبار اذا كان اخر صوره
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }
}
theChecker()

function removeAllActive(){//تابع من اجل حذف كلاس الاكتف من الصور والبوليتس واضافة الكلاس حسب الصوره الظاهرة
    
    sliderImages.forEach(function(img){

        img.classList.remove('active')
    })

    paginationBullets.forEach(function(bulttets){

        bulttets.classList.remove('active')
    })

}

nextButton.onclick=nextSlide;
function nextSlide(){
   
    if(nextButton.classList.contains('disabled')){
        return false

    }else{
        currentSlide++;

        theChecker()
    }
}

prevButton.onclick=prevSlide;
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false

    }else{
       currentSlide--;

       theChecker()
    }
}

for(var i=0;i<paginationBullets.length;i++){

    paginationBullets[i].onclick=function(){

        currentSlide=parseInt(this.getAttribute('data-index'));

        theChecker()
    }
}