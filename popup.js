document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.bears).forEach(function (url) 
  {
    //const div = document.createElement('div')
    const div = document.getElementById("data");
    div.innerHTML = `${bg.bears[url]}`;
    //div.innerHTML += `${url}: ${bg.bears[url]}`
    //document.body.appendChild(div)
  })
}, false)