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

    <body id="body-text">

        <div class="panel panel-default">
            <div class="panel-heading">
                <h1>POST Example</h1>
                <h2>
                    <a href="get.html">GET Example Homepage</a>
                </h2>
                <h2>
                    <a href="post.html">POST Example Homepage</a>
                </h2>
            </div>
            <div class="panel-body">
                <p>First Name: <?php echo $_POST['fname']; ?></p>
                <p>Last Name: <?php echo $_POST['lname']; ?></p>
                <p>Age: <?php echo $_POST['age']; ?></p>
                <p>Gender: <?php echo $_POST['gender']; ?></p>
                <p>State: <?php echo $_POST['state']; ?></p>
                <hr>
                <p>Notice how no information is appearing in the URL header?</p>
            </div>
        </div>

    </body>

    <hr>

    <div id="footer-placeholder">
        <script>
            $.get("../base/footer.html", function(data){
                $("#footer-placeholder").replaceWith(data);
            });
        </script>
    </div>
</html>
