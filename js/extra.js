if (window.location.href.includes('/DAX/v1')) {
    console.log("outdated");

    // Create a new div element
var div = document.createElement('div');
div.setAttribute('data-md-component', 'outdated');

// Create the contents for the div
var aside = document.createElement('aside');
aside.classList.add('md-banner', 'md-banner--warning', 'md-banner--dax-version');

var innerDiv = document.createElement('div');
innerDiv.classList.add('md-banner__inner', 'md-grid', 'md-typeset');
innerDiv.textContent = "You're not viewing the latest version of DAX. ";

var strong = document.createElement('strong');
var link = document.createElement('a');
link.setAttribute('href', '/DAX');
link.textContent = 'Click here to go to the latest.';
strong.appendChild(link);
innerDiv.appendChild(strong);

aside.appendChild(innerDiv);

// Create and append the script element
// var script = document.createElement('script');
// script.textContent = 'var el=document.querySelector("[data-md-component=outdated]"),outdated=__get("__outdated",sessionStorage);!0===outdated&&el&&(el.hidden=!1)';

// // Append the elements to the DOM
// aside.appendChild(script);
div.appendChild(aside);

// Insert the created elements at the top of the document body
document.body.insertBefore(div, document.body.firstChild);

}

if (window.location.pathname == '/DAX' || window.location.pathname == '/DAX/' || window.location.pathname == '/DAX/about' || window.location.pathname == '/DAX/about/') {
    window.location.href = '/DAX/v1/about'
}