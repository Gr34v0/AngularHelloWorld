//this forces javascript to conform to some rules, like declaring variables with var
//"use strict";

window.onload = init;

var loggedin = false;

function init(){

    var html = "";
    var urls = new Array();
    var stringUrl = "Checked: ";

    $('input[type=checkbox]').each(function () {
        if(this.checked) {
            urls.push(this.value);
            stringUrl += this.name + " ";
        }
    });

    console.log(urls);

    $("#content").fadeOut(250);

    document.querySelector("#content").innerHTML = "";

    if(!loggedin){
        $("#favsButton").css('display', 'none');
    }
    $("#rssButton").css('display', 'none');

    //document.querySelector("#checked").innerHTML = "<p>" + stringUrl + "</p>";

    //fetch the data
    urls.forEach(function(url){
        $.get(url).done(function(data){html += xmlLoaded(data);});
    });
}


function xmlLoaded(obj){
    console.log("obj = " +obj);

    var items = obj.querySelectorAll("item");
    var origin = obj.querySelector("title").firstChild.nodeValue;
    //show the logo
    var image = obj.querySelector("image");
    var logoSrc = image.querySelector("url").firstChild.nodeValue;
    var logoLink = image.querySelector("link").firstChild.nodeValue;
    $("#logo").attr("src",logoSrc);

    //parse the data
    var html = "";
    for (var i=0;i<items.length;i++){
        //get the data out of the item
        var newsItem = items[i];
        var title = newsItem.querySelector("title").firstChild.nodeValue;
        //title = title.replace( "'" , "&apos;");
        console.log(title);
        var description = newsItem.querySelector("description").firstChild.nodeValue;
        var link = newsItem.querySelector("link").firstChild.nodeValue;
        var pubDate = newsItem.querySelector("pubDate").firstChild.nodeValue;
        var parsedDate = Date.parse(pubDate);

        //present the item as HTML
        var line = '<div data-newsdate='+ parsedDate +' class="item">';
        line += "<h2>"+ origin + "</h2>";
        line += "<h2>" + title + "</h2>";
        line += '<p><i id="pubDate">'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a>';

        if(loggedin) {
            line += ' - <a href="#" onclick="addFav(\''+link+'\' , \''+title.replace(/["']/g, "")+'\' , \''+pubDate+'\' , \''+parsedDate+'\' , \''+origin+'\')">Add to Favorites</a>';
        }

        line += "</p></div>";

        html += line;
    }

    //console.log(html);

    //date sorting ... Date.parse( pubDate HERE );

    document.querySelector("#content").innerHTML += html;

    $("#content").fadeIn(1000);

}


function favs(){

    var html = "";

    if(loggedin){
        $("#content").fadeOut(250);

        document.querySelector("#content").innerHTML = "Your favorite news stories go here.";
        $("#favsButton").css('display', 'none');
        $("#rssButton").css('display', 'block');

        $("#content").fadeIn(1000);


        var favsList = JSON.parse(localStorage.getItem(sessionStorage.getItem("user")+"List"));

        for(var i = 0; i < favsList.length; i++){
            var newsItem = favsList[i];
            var link = newsItem.link;
            var title = newsItem.title;
            var origin = newsItem.origin;
            var pubDate = newsItem.pubDate;
            var parsedDate = newsItem.parsedDate;

            var line = '<div data-newsdate='+ parsedDate +' class="item">';
            line += "<h2>"+ origin + "</h2>";
            line += "<h2>" + title + "</h2>";
            line += '<p><i id="pubDate">'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a>';
            line += "</p></div>";

            html += line;
        }

        document.querySelector("#content").innerHTML = html;

    }

}

function rssReset(){

    init();
    $("#favsButton").css('display', 'block');

}

function addFav(link, title, pubDate, parsedDate, origin){

    //console.log( link + title + pubDate );

    //var jsonObj = [];

    //item = {};

    var username = sessionStorage.getItem("user");

    //var favsList = [];

    var favsList = localStorage.getItem(username+"List");

    favsList = JSON.parse(favsList);

    console.log(favsList);

    var item = { "link" : link, "title" : title, "pubDate" : pubDate, "parsedDate" : parsedDate, "origin" : origin };

    console.log(item);

    favsList.push(item);

    console.log(favsList);

    localStorage.setItem(username+"List", JSON.stringify(favsList));

    console.log(localStorage.getItem(username).toString());


}


function login(){

    if(typeof(Storage) !== "undefined") {

        var username = document.getElementById('lg_username').value;
        var password = document.getElementById('lg_password').value;

        if (localStorage.getItem(username) === password ){
            document.getElementById("lgdin-username").innerHTML = username;
            loginSuccess(username);
        } else {
            alert("Username is not registered");
        }
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}


function register(){

    if(typeof(Storage) !== "undefined") {

        var username = document.getElementById('reg_username').value;
        var password = document.getElementById('reg_password').value;

        if(password === "" || password == null){
            alert("Password is required");
        } else {
            console.log(username + " HERE");

            if (localStorage.username === username + " " + password) {
                alert("Username " + username + " already taken. Sign in or choose a new name.");
            } else {
                localStorage.setItem(username, password);
                localStorage.setItem(username + "List", "[]");
                alreadyMember();
            }
        }
        //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function loginSuccess(username){
    $("#register").css('display', 'none');
    $("#login").css('display', 'none');
    $("#logged-in").css('display', 'block');
    $("#favsButton").css('display', 'block');
    loggedin = true;
    sessionStorage.setItem("user", username);
    init();
}

function logout(){
    notMember();
    loggedin = false;
    sessionStorage.removeItem("user");
    init();
}

function alreadyMember(){

    $("#register").css('display', 'none');
    $("#login").css('display', 'block');
    $("#logged-in").css('display', 'none');

}

function notMember(){

    $("#login").css('display', 'none');
    $("#register").css('display', 'block');
    $("#logged-in").css('display', 'none');
    $("#favsButton").css('display', 'none');

}