var scrollbar = document.getElementById("scroller");

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementById("themer").setAttribute("data-theme", themeName)


}


function setScroller(scrollerName) {
    localStorage.setItem('scroller', scrollerName);
    scrollbar.setAttribute("href", scrollerName)
}




function toggleTheme() {
    if (localStorage.getItem('theme') === 'luxury') {
        setTheme('luxury');

    } else {
        setTheme('luxury');

    }
}


function toggleScroller() {
    if (localStorage.getItem('scroller') === ' ./css/scroll2.css') {
        setScroller(" ./css/scroll.css")
    } else {
        setTheme('luxury');
        setScroller(" ./css/scroll2.css")
    }
}


(function() {
    if (localStorage.getItem('theme') === 'light') {
        setTheme('luxury');
        setScroller(" ./css/scroll2.css")

    } else {
        setTheme('luxury');
        setScroller(" ./css/scroll.css")
    }
})();

