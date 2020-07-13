console.log("Welcome TO News API DEMO");

// Initialize the news api parameters
let source = 'the-times-of-india';
//Replace ur API Key
let apiKey = 'f3a591da3bb2428eb71*************'

// Initialize URLS
let categoryURL = "http://newsapi.org/v2/sources?language=en&apiKey=f3a591da3bb2428eb71***********";
let headingURL = "http://newsapi.org/v2/top-headlines?country=in&apiKey=f3a591da3bb2428eb71e4************";
let cardNews = document.getElementById("cardNews");


let partner = document.getElementById("partner");
partner.addEventListener("click", function (e) {
    showCategory(categoryURL);
});

let news = document.getElementById("news");
news.addEventListener("click", function (e) {
    showHeading(headingURL);
});


showHeading(headingURL);


function showHeading(url) {

    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";

            articles.forEach(function (element) {

                let str = `<div class="card mx-4 my-4" style="width: 18rem;">
                        <img src="${element.urlToImage}" class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
                        </div>
                    </div>`;
                newsHtml += str;
            });
            cardNews.innerHTML = newsHtml;
        }
    };

    http.send();
}

function showCategory(url) {
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            let json = JSON.parse(this.responseText);
            let sources = json.sources;
            let newsHtml = "";

            sources.forEach(function (element, index) {

                let str1 = `${element.category}`;
                str1 = str1.toUpperCase();
                let str = `<div class="col-sm-6">
                            <div class="card text-center my-2 mx-2">
                                <div class="card-header">
                                    ${str1}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
                                </div>
                                <div class="card-footer text-muted">
                                 News Blogs
                                </div>
                            </div>
                            </div>
                            <hr>`;
                newsHtml += str;
            });
            cardNews.innerHTML = newsHtml;
        }
    };

    http.send();

}




