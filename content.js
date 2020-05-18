//  var patt =/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/gi;       // For validation Email

// change acomment to extract phone
//var patt =/01+(1|2|5|0)+\d{8}/gi;                               //For validation phone
var patt =/[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}/gi;         
const matches = document.documentElement.innerHTML.match(patt) || []
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length,
  emailsArr:matches

})