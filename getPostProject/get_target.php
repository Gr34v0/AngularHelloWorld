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

    <body id="body-text">

        <div class="panel panel-default">
            <div class="panel-heading">
                <h1>GET Example</h1>
                <h2>
                    <a href="get.html">GET Example Homepage</a>
                </h2>
                <h2>
                    <a href="post.html">POST Example Homepage</a>
                </h2>
            </div>
            <div class="panel-body">
                <p>First Name: <?php echo $_GET['fname']; ?></p>
                <p>Last Name: <?php echo $_GET['lname']; ?></p>
                <p>Age: <?php echo $_GET['age']; ?></p>
                <p>Gender: <?php echo $_GET['gender']; ?></p>
                <p>State: <?php echo $_GET['state']; ?></p>
                <hr>
                <p>Notice how information is appearing in the URL header?</p>
            </div>
        </div>

    </body>

    <div id="footer-placeholder">
        <script>
            $.get("../base/footer.html", function(data){
                $("#footer-placeholder").replaceWith(data);
            });
        </script>
    </div>
</html>
