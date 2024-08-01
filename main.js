var url = ['https://search.naver.com/search.naver?query=', 'https://google.com/search?q=', 'https://terms.naver.com/search.naver?query=', 'https://encykorea.aks.ac.kr/Article/Search/']

function search(n) {
  var q = document.querySelector("#search").value
  window.open(url[n] + q)
}

function search2(n) {
  var q = document.querySelector("#search").value
  window.open(url[n] + q)
}

function getAIans() {
  var el = document.querySelector("#res")
  el.className = 'card c-body'
  el.innerHTML = '<br> 답변 생성 중 <br> ​'
  
  var text = 'https://bardict-api.vercel.app/ai/' + document.getElementById("search").value
  
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', text, true);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function() {
    const re = xhr.response;
    document.getElementById("res").innerHTML = '<br>' + re.res + '<br>　' 
  }
}
