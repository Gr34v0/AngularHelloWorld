<!doctype html>
<html>
    <title>Weather API</title>
    <head>
        <!-- <script src="//code.jquery.com/jquery.min.js"></script> -->
        <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
        <script src="weather.js"></script>
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
                <h2>Weather R Us</h2>
            </div>
            <div class="panel-body">
                <h3>Select your zip:</h3>

                <?php

                    $selected_weather = null;

                    $weather_list = file_get_contents('http://www.se.rit.edu/~swen-344/activities/rest/RESTAPI-Weather.php?action=get_weather_list');
                    $weather_list = json_decode($weather_list, true);

                    #$secret_key = file_get_contents("http://www.se.rit.edu/~swen-344/activities/rest/RESTAPI-Weather.php?action=get_secret_key");
                    #$secret_key = json_decode($secret_key, true);

                    function getWeather($zip) {
                        $selected_weather = file_get_contents("");
                        $selected_weather = json_decode($selected_weather, true );
                    }

                    if (isset( $_GET["zip"])) {
                        getWeather("zip");
                    }
                ?>

                <ul id="ziplist">
                    <?php foreach ($weather_list as $weather): ?>
                    <li>
                        <a href=<?php echo "weatherAPIhome.php?zip=" . $weather["zip"] ?> >
                            <?php echo $weather["name"]; echo " - "; echo $weather["zip"]; ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>

                <div id="forecast-section">
                    <hr/>
                    <h3>Your local forecast</h3>
                    <p>
                        <strong>Name:</strong>
                        <?php
                            if( is_null($selected_weather)){
                                echo "NULL";
                            } else {
                                echo $selected_weather["name"];
                            }
                        ?>
                        <span id="name"></span>
                    </p>
                    <p>
                        <strong>Forecast:</strong>
                        <?php
                        if( is_null($selected_weather)){
                            echo "NULL";
                        } else {
                            echo $selected_weather["forecast"];
                        }
                        ?>
                        <span id="forecast"></span>
                    </p>
                    <img id="image" src="<?php echo $selected_weather["image"] ?>"/>
                </div>
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