const bar = document.getElementById('loaderR');
    const persentage = (document.documentElement.scrollTop+window.innerHeight)/document.documentElement.scrollHeight*100;
    console.log(window.innerHeight);
    bar.style.width = persentage+"vw";


window.onscroll = function () {
    const bar = document.getElementById('loaderR');
    const persentage = (document.documentElement.scrollTop+window.innerHeight)/document.documentElement.scrollHeight*100;
    console.log(window.innerHeight);
    bar.style.width = persentage+"vw";
};



document.getElementById('darkner').addEventListener('click', function (params) {
    const r = document.querySelector(':root');
    r.style.setProperty('--defaultColor',    '#f51c1c');
    r.style.setProperty('--headerColor',     '#5a7911');
    r.style.setProperty('--textColor',       '#fff');
    r.style.setProperty('--titlePcolor',     '#c2c2c2');
    r.style.setProperty('--backgroundColor', 'rgb(25, 25, 25)');
});

document.getElementById('lightner').addEventListener('click', function (params) {
    const r = document.querySelector(':root');
    r.style.setProperty('--defaultColor',    '#8FC60D');
    r.style.setProperty('--headerColor',     '#fff');
    r.style.setProperty('--textColor',       '#505050');
    r.style.setProperty('--titlePcolor',     '#000');
    r.style.setProperty('--backgroundColor', '#fff');
})
