<html>
    <title>GET</title>
    <head>
        <link rel="stylesheet" href="site-wide.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="//code.jquery.com/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>

    <div id="nav-placeholder">
        <script>
            $.get("navigation.html", function(data){
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
    <body>
        <p>First Name: <?php echo $_GET['fname']; ?></p>
        <p>Last Name: <?php echo $_GET['lname']; ?></p>
        <p>Age: <?php echo $_GET['age']; ?></p>
        <p>Gender: <?php echo $_GET['gender']; ?></p>
        <p>State: <?php echo $_GET['state']; ?></p>
        <hr>
        <p>Notice how information is appearing in the URL header?</p>
    </body>
</html>
