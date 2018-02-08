<html>
    <title>POST</title>
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

    <h1>POST Example</h1>
    <h2>
        <a href="get.html">GET Example Homepage</a>
    </h2>
    <h2>
        <a href="post.html">POST Example Homepage</a>
    </h2>
    <hr>

    <body>
        <p>First Name: <?php echo $_POST['fname']; ?></p>
        <p>Last Name: <?php echo $_POST['lname']; ?></p>
        <p>Age: <?php echo $_POST['age']; ?></p>
        <p>Gender: <?php echo $_POST['gender']; ?></p>
        <p>State: <?php echo $_POST['state']; ?></p>
        <hr>
        <p>Notice how no information is appearing in the URL header?</p>
    </body>
</html>
