<html>
    <title>GET</title>
    <head>
        <script src="//code.jquery.com/jquery.min.js"></script>
    </head>

    <div id="nav-placeholder">
        <script>
            $.get("../base/navigation.html", function(data){
                $("#nav-placeholder").replaceWith(data);
            });
        </script>
    </div>

    <h1>GET Example</h1>
    <h2>
        <a href="get.html">GET Example Homepage</a>
    </h2>
    <h2>
        <a href="post.html">POST Example Homepage</a>
    </h2>
    <hr>
    <body id="body-text">
        <p>First Name: <?php echo $_GET['fname']; ?></p>
        <p>Last Name: <?php echo $_GET['lname']; ?></p>
        <p>Age: <?php echo $_GET['age']; ?></p>
        <p>Gender: <?php echo $_GET['gender']; ?></p>
        <p>State: <?php echo $_GET['state']; ?></p>
        <hr>
        <p>Notice how information is appearing in the URL header?</p>
    </body>
</html>
