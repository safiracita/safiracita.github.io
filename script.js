data = [{
    'img1': 'assest/rony-saf.jpg',
    'img2': 'assest/rony-saf.jpg',
    'title': 'web E-commerce',
    'subtitle': 'Zenit',
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis architecto numquam consectetur fugiat eaque.'
}, {

    'img1': 'assest/rony-saf.jpg',
    'img2': 'assest/rony-saf.jpg',
    'title': 'web E-commerce',
    'subtitle': 'The Gallery',
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis architecto numquam consectetur fugiat eaque.'

}]
var container = document.querySelector('.container-project');

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
</div>`
});