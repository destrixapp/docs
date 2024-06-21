// better news og descriptions for articles

if (window.location.href.includes('news/view/')) {
    document.addEventListener("DOMContentLoaded", function() {
        var meta_tags = document.getElementsByTagName('meta');

        for (var i = 0; i < meta_tags.length; i++) {
            if (meta_tags[i].getAttribute('name') === 'description') {
                var content = document.querySelector('.md-content__inner');

                if (content){
                    var first_p = content.querySelector('p');

                    if (first_p){
                        meta_tags[i].setAttribute('content', first_p.textContent);
                    } else {
                        meta_tags[i].setAttribute('content', 'No preview found for this article.');
                    };
                } else {
                    meta_tags[i].setAttribute('content', 'No preview found for this article.');
                };
            };
    }
    });
}

if (window.location.href.includes('?plus-billing')) {
    window.location.href = 'https://en.help.roblox.com/hc/en-us/articles/20292383332500-Subscription-Billing-and-Refunds'
} else if (window.location.href.includes('?plus')) {
    window.location.href = '/plus'
}

if (window.location.href.includes('/specifics/follow')) {
    console.log("plus");

    // Create a new div element
var div = document.createElement('div');
div.setAttribute('data-md-component', 'outdated');

// Create the contents for the div
var aside = document.createElement('aside');
aside.classList.add('md-banner', 'md-banner--warning', 'md-banner--plus');
aside.style.cursor = 'alias';
aside.setAttribute('onclick', "window.location.href = '/plus'");

var innerDiv = document.createElement('div');
innerDiv.classList.add('md-banner__inner', 'md-grid', 'md-typeset');
innerDiv.innerHTML = "<b> This feature is currently available for Plus subscribers. </b>";
innerDiv.style.color = "#FFFFFF";

var span = document.createElement('span');
span.classList.add('twemoji');

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "16");
svg.setAttribute("height", "16");
svg.setAttribute("fill", "currentColor");
svg.setAttribute("class", "bi bi-plus-circle-dotted");
svg.setAttribute("viewBox", "0 0 16 16");

var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z");

svg.appendChild(path);
span.appendChild(svg);
innerDiv.insertBefore(span, innerDiv.firstChild);

var strong = document.createElement('strong');
var link = document.createElement('a');
link.setAttribute('href', '/plus');
link.innerHTML = 'Click here to learn more.';
link.style.color = "#4168af";
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

if (window.location.href.includes('/DAX/v0')) {
    console.log("outdated");

    // Create a new div element
var div = document.createElement('div');
div.setAttribute('data-md-component', 'outdated');

// Create the contents for the div
var aside = document.createElement('aside');
aside.classList.add('md-banner', 'md-banner--warning', 'md-banner--dax-version');

var innerDiv = document.createElement('div');
innerDiv.classList.add('md-banner__inner', 'md-grid', 'md-typeset');
innerDiv.innerHTML = "<b> You're not viewing the latest version of DAX. </b>";
innerDiv.style.color = "#FFFFFF";

var span = document.createElement('span');
span.classList.add('twemoji');

var img = document.createElement('img');
img.setAttribute('src', 'https://raw.githubusercontent.com/squidfunk/mkdocs-material/master/material/templates/.icons/material/eye-off.svg');
img.style.filter = 'brightness(0) invert(1)';

span.appendChild(img);
innerDiv.insertBefore(span, innerDiv.firstChild);

var strong = document.createElement('strong');
var link = document.createElement('a');
link.setAttribute('href', '/DAX');
link.innerHTML = '<i>Click here to go to the latest.</i>';
link.style.color = "#5e8bde";
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


// document.addEventListener("DOMContentLoaded", function() {
//     // fix View Source
//     const elements = document.querySelectorAll("a.md-content__button[title='View source of this page']");
//     console.log(elements);

//     elements.forEach((element) => {
//     let href = element.getAttribute("href");

//     if (window.location.href.includes('news/view/')) {
//         href = href.replace("https://github.com/DestrixApp/docs/raw/main/docs/", "https://raw.githubusercontent.com/DestrixApp/docs/master/docs/");
//     } else {
//         href = href.replace("https://github.com/DestrixApp/raw/master/docs/", "https://raw.githubusercontent.com/DestrixApp/docs/master/docs/");
//     };
//     // href += "?from=destrix-docs"
//     element.setAttribute("href", href);
//     element.setAttribute("target", "_blank")
    

//     // Twitter & Copy URL
//     // temporarily removed twitter because it looks weird and idk

//     const clone = element.cloneNode(true);
//     const svg = clone.querySelector("svg");

//     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg.setAttribute('width', '24');
//     svg.setAttribute('height', '24');
//     svg.setAttribute('viewBox', '0 0 24 24');
//     svg.querySelector("path").setAttribute("d", "M7.539 22.4991C16.596 22.4991 21.5505 14.9946 21.5505 8.49809C21.5505 8.28809 21.5505 8.07509 21.5415 7.86509C22.5061 7.16682 23.3386 6.30231 24 5.31209C23.099 5.70936 22.1441 5.9712 21.1665 6.08909C22.1963 5.47354 22.9676 4.50504 23.337 3.36359C22.3695 3.93677 21.3105 4.33915 20.2065 4.55309C19.4643 3.76262 18.4821 3.23896 17.4121 3.06322C16.3422 2.88748 15.2441 3.06947 14.288 3.58099C13.3319 4.09252 12.5712 4.90503 12.1237 5.89268C11.6761 6.88032 11.5668 7.98799 11.8125 9.04409C9.85461 8.94591 7.93922 8.43729 6.19056 7.5512C4.4419 6.66511 2.89903 5.42135 1.662 3.90059C1.03401 4.98521 0.842361 6.26819 1.12597 7.48899C1.40958 8.70978 2.14718 9.77688 3.189 10.4736C2.40831 10.4471 1.64478 10.2374 0.96 9.86159V9.92909C0.961346 11.0653 1.35496 12.1662 2.07431 13.0457C2.79366 13.9252 3.79462 14.5294 4.908 14.7561C4.48539 14.8725 4.04884 14.9305 3.6105 14.9286C3.30148 14.9295 2.99307 14.9009 2.6895 14.8431C3.00418 15.8212 3.61691 16.6763 4.44187 17.2888C5.26683 17.9013 6.2627 18.2404 7.29 18.2586C5.54483 19.6293 3.3891 20.3727 1.17 20.3691C0.778981 20.3707 0.388235 20.3482 0 20.3016C2.25227 21.7375 4.86795 22.4999 7.539 22.4991Z");

//     clone.setAttribute('title', 'Share to Twitter')

//     // let href2 = clone.getAttribute("href");
//     // href2 = href2.replace("https://github.com/DestrixApp/raw/master/docs/", "https://raw.githubusercontent.com/DestrixApp/docs/master/docs/");
//     clone.setAttribute("href", `https://twitter.com/intent/tweet?text=${window.document.title}&url=${window.location.href}&newtwitter=true`);

//     // Append the modified element after the original element
//     // element.parentNode.insertBefore(clone, element);

//     const clone2 = element.cloneNode(true);
//     const svg2 = clone2.querySelector("svg");

//     svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg2.setAttribute('width', '24');
//     svg2.setAttribute('height', '24');
//     svg2.setAttribute('viewBox', '0 0 24 24');
//     svg2.querySelector("path").setAttribute("d", "M16.5004 3.75047C16.5003 2.87062 16.8096 2.01874 17.3741 1.34389C17.9386 0.669031 18.7225 0.214166 19.5885 0.0588767C20.4546 -0.0964129 21.3476 0.0577611 22.1115 0.494425C22.8753 0.931088 23.4613 1.62243 23.7669 2.44751C24.0725 3.27258 24.0783 4.17884 23.7832 5.00773C23.4881 5.83662 22.9109 6.53535 22.1527 6.98169C21.3945 7.42802 20.5034 7.59352 19.6355 7.44925C18.7675 7.30497 17.978 6.8601 17.4049 6.19247L7.3279 10.8725C7.55956 11.6066 7.55956 12.3943 7.3279 13.1285L17.4049 17.8085C18.0107 17.104 18.8564 16.6494 19.7782 16.5329C20.7 16.4165 21.6322 16.6463 22.3942 17.178C23.1561 17.7097 23.6936 18.5053 23.9024 19.4107C24.1112 20.316 23.9764 21.2667 23.5243 22.0783C23.0721 22.89 22.3347 23.5049 21.455 23.8039C20.5753 24.1029 19.6159 24.0646 18.7628 23.6966C17.9097 23.3285 17.2236 22.6569 16.8375 21.8118C16.4513 20.9667 16.3927 20.0083 16.6729 19.1225L6.5959 14.4425C6.09705 15.0238 5.43212 15.4385 4.69057 15.6306C3.94901 15.8227 3.1664 15.7832 2.448 15.5172C1.72961 15.2512 1.10991 14.7716 0.672259 14.1429C0.234606 13.5142 0 12.7665 0 12.0005C0 11.2344 0.234606 10.4868 0.672259 9.85804C1.10991 9.22932 1.72961 8.74972 2.448 8.48375C3.1664 8.21778 3.94901 8.17821 4.69057 8.37034C5.43212 8.56248 6.09705 8.97712 6.5959 9.55847L16.6729 4.87847C16.5582 4.51347 16.5 4.13307 16.5004 3.75047Z");

//     // clone2.setAttribute('onclick', 'clone2.setAttribute(\'title\', "Copied!"); navigator.clipboard.writeText(window.location.href);')
//     clone2.setAttribute('title', 'Copy URL to clipboard')
//     // let href2 = clone.getAttribute("href");
//     // href2 = href2.replace("https://github.com/DestrixApp/raw/master/docs/", "https://raw.githubusercontent.com/DestrixApp/docs/master/docs/");
//     clone2.removeAttribute('href')
//     clone2.style.cursor = "pointer";

//     clone2.addEventListener('click', function(event) {
//         // Prevent the default behavior (following the link)
//         event.preventDefault();

//         // Get the current URL


//         // Remove the href attribute
//         element.removeAttribute('href');

//         // Copy the URL to the clipboard
//         navigator.clipboard.writeText(window.location.href)
//             .then(() => {
//                 console.log('URL copied to clipboard');
//                 clone2.setAttribute('title', 'Copied!')
//                 alert$.next('Copied!')

//                 setTimeout(() => {
//                     clone2.setAttribute('title', 'Copy URL to clipboard');
//                 }, 2000);
//             })
//             .catch((err) => {
//                 console.error('Failed to copy URL: ', err);
//                 // Handle error if copying fails
//                 clone2.setAttribute('title', 'Failed to copy')
//                 alert$.next(`Failed to copy URL: ${err}`)

//                 setTimeout(() => {
//                     clone2.setAttribute('title', 'Copy URL to clipboard');
//                 }, 2000);
//             });
//     });

//     // Append the modified element after the original element
//     element.parentNode.insertBefore(clone2, element);
//     });

    
//   });
  

//   share to permalink

// document.addEventListener("DOMContentLoaded", function() {
//     // fix View Source
//     const elements = document.querySelectorAll(".md-content__inner h1 .headerlink, .md-content__inner h2 .headerlink, .md-content__inner h3 .headerlink, .md-content__inner h4 .headerlink");
//     console.log(elements);

//     elements.forEach((element) => {
//         const share = element.cloneNode(true);
//         const svg = document.createElement('svg');//share.querySelector("svg");
//         const path = document.createElement('path');
//         console.log('a');
//         // share.classList.add('md-content__button');
//         // share.classList.add('md-icon');
//         // share.style.float = left;
//         // share.textContent = 'a';
//         share.innerHTML = 'a';
//         share.innerHTML = '';
//         // share.style['mask-image'] = url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16"><path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/></svg>');

//         svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//         svg.setAttribute('width', '24');
//         svg.setAttribute('height', '24');
//         svg.setAttribute('viewBox', '0 0 24 24');
//         path.setAttribute("d", "M16.5004 3.75047C16.5003 2.87062 16.8096 2.01874 17.3741 1.34389C17.9386 0.669031 18.7225 0.214166 19.5885 0.0588767C20.4546 -0.0964129 21.3476 0.0577611 22.1115 0.494425C22.8753 0.931088 23.4613 1.62243 23.7669 2.44751C24.0725 3.27258 24.0783 4.17884 23.7832 5.00773C23.4881 5.83662 22.9109 6.53535 22.1527 6.98169C21.3945 7.42802 20.5034 7.59352 19.6355 7.44925C18.7675 7.30497 17.978 6.8601 17.4049 6.19247L7.3279 10.8725C7.55956 11.6066 7.55956 12.3943 7.3279 13.1285L17.4049 17.8085C18.0107 17.104 18.8564 16.6494 19.7782 16.5329C20.7 16.4165 21.6322 16.6463 22.3942 17.178C23.1561 17.7097 23.6936 18.5053 23.9024 19.4107C24.1112 20.316 23.9764 21.2667 23.5243 22.0783C23.0721 22.89 22.3347 23.5049 21.455 23.8039C20.5753 24.1029 19.6159 24.0646 18.7628 23.6966C17.9097 23.3285 17.2236 22.6569 16.8375 21.8118C16.4513 20.9667 16.3927 20.0083 16.6729 19.1225L6.5959 14.4425C6.09705 15.0238 5.43212 15.4385 4.69057 15.6306C3.94901 15.8227 3.1664 15.7832 2.448 15.5172C1.72961 15.2512 1.10991 14.7716 0.672259 14.1429C0.234606 13.5142 0 12.7665 0 12.0005C0 11.2344 0.234606 10.4868 0.672259 9.85804C1.10991 9.22932 1.72961 8.74972 2.448 8.48375C3.1664 8.21778 3.94901 8.17821 4.69057 8.37034C5.43212 8.56248 6.09705 8.97712 6.5959 9.55847L16.6729 4.87847C16.5582 4.51347 16.5 4.13307 16.5004 3.75047Z");
//         svg.appendChild(path);

//     share.appendChild(svg)
//     // share.innerHTML = url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16"><path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/></svg>');

//     // clone2.setAttribute('onclick', 'clone2.setAttribute(\'title\', "Copied!"); navigator.clipboard.writeText(window.location.href);')
//     share.setAttribute('title', 'Copy URL to clipboard')
//     // let href2 = clone.getAttribute("href");
//     // href2 = href2.replace("https://github.com/DestrixApp/raw/master/docs/", "https://raw.githubusercontent.com/DestrixApp/docs/master/docs/");
//     share.removeAttribute('href')
//     share.style.cursor = "pointer";
//     element.parentNode.insertBefore(share, element);
//     });

    
// });
// ^ scrapped due to laziness

// document.addEventListener("DOMContentLoaded", function() {
//     function a() {
//         const htmlContent = `
//         <a href="https://raw.githubusercontent.com/DestrixApp/docs/master/docs/Commands/index.md" title="View source of this page" class="md-content__button md-icon" target="_blank">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1-1-.44-1-1 .44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5M9.27 20H6V4h7v5h5v4.07c.7.08 1.36.25 2 .49V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.5a8.15 8.15 0 0 1-1.23-2Z"></path>
//           </svg>
//         </a>
//       `;
    
//       const element = document.querySelector(".md-content__inner");
//       if (element) {
//         const newElement = document.createElement("div");
//         newElement.innerHTML = htmlContent;
//         const existingH1 = element.querySelector("h1");
    
//         if (existingH1) {
//           element.insertBefore(newElement.firstChild, existingH1);
//         } else {
//           element.appendChild(newElement.firstChild);
//         }
//       }
//     }

//     setInterval(a, 3000)
// });
  
// plus hover effect

// document.addEventListener("DOMContentLoaded", function() {
//     const elements = document.querySelectorAll("li.md-tabs__item a[href*='plus']");
//     console.log(elements);

//     elements.forEach((element) => {
//         element.classList.add('md--tabs--plus-inner')
//     });
// })

// document.addEventListener("DOMContentLoaded", function() {
//     const elements = document.querySelectorAll("li.md-tabs__item a[href='./'], li.md-tabs__item a[href='../']");
//     if (window.location.pathname.includes('/plus')){
//         elements.forEach((element) => {
//             element.classList.add('md--tabs--plus-inner-active')
//         });   
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".dd-popup");

    elements.forEach((element) => {
        element.style.cursor = 'pointer';

        element.addEventListener('click', function(event) {
            alert(element.getAttribute('popup-content'));
        });
    });
})

// if (window.location.pathname.includes('/Commands/specifics/ban')){
//     var meta_tags = document.getElementsByTagName('meta');

//         for (var i = 0; i < meta_tags.length; i++) {
//             if (meta_tags[i].getAttribute('property') === 'og:image') {
//                 meta_tags[i].setAttribute('content', 'https://media.discordapp.net/attachments/786817739867947009/1177123676349534298/destrix-moderation.png?ex=65715cda&is=655ee7da&hm=aa5027ad3afa6690a532e50d568ea734faa73d64258751a375dc43fa1ae2cfd5&=&width=1950&height=1098');
//             };
//         };
// }

document.addEventListener("DOMContentLoaded", function() {
    var nav_links = document.querySelectorAll('.md-nav__link');

    nav_links.forEach(function(nav_link) {
        if (nav_link.querySelector('.md-status--plus')) {
            nav_link.classList.add('nav-plus-hover');
        }
    });

    var mws = document.querySelector('.md-copyright');

    mws.childNodes.forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('Made with')) {
            node.textContent = 'Documentation generated with ';
        }
    });

    var mwl = madeWithPart.querySelector('a[href="https://squidfunk.github.io/mkdocs-material/"]');
    if (mwl) {
        mwl.textContent = 'Material for MkDocs Insiders';
        mwl.href = 'https://squidfunk.github.io/mkdocs-material/';
    }
});

