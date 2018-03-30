//this forces javascript to conform to some rules, like declaring variables with var
//"use strict";

window.onload = init;

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

    //document.querySelector("#checked").innerHTML = "<p>" + stringUrl + "</p>";

    //fetch the data
    urls.forEach(function(url){
        $.get(url).done(function(data){html = xmlLoaded(data);});
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
        console.log(title);
        var description = newsItem.querySelector("description").firstChild.nodeValue;
        var link = newsItem.querySelector("link").firstChild.nodeValue;
        var pubDate = newsItem.querySelector("pubDate").firstChild.nodeValue;
        var parsedDate = Date.parse(pubDate);

        //present the item as HTML
        var line = '<div data-newsdate='+ parsedDate +' class="item">';
        line += "<h2>"+ origin + "</h2>";
        line += "<h2>" + title + "</h2>";
        line += '<p><i id="pubDate">'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a> - <a href="#" onclick="addFav()">Add to Favorites</a></p>';
        //title and description are always the same (for some reason) so I'm only including one
        //line += "<p>"+description+"</p>";
        line += "</div>";

        html += line;
    }

    //console.log(html);

    //date sorting ... Date.parse( pubDate HERE );

    document.querySelector("#content").innerHTML += html;

    $("#content").fadeIn(1000);

}


function favs(){



}


function addFav(){

}


function login(){

    if(typeof(Storage) !== "undefined") {

        var username = document.getElementById('lg_username').value;
        var password = document.getElementById('lg_password').value;

        if (localStorage.username ===  username + " " + password) {
            document.getElementById("lgdin-username").innerHTML = username;
            loginSuccess();
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
                localStorage.username = username + " " + password;
                alreadyMember();
            }
        }
        //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function loginSuccess(){
    $("#register").css('display', 'none');
    $("#login").css('display', 'none');
    $("#logged-in").css('display', 'block');

}

function logout(){
    notMember();
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

}