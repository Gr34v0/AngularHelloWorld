<!--
http://www.se.rit.edu/~swen-344/activities/rest/RESTAPI-Weather.php

functions:
get_weather(zip)
get_weather_list()
get_secret_key()

-->

<html>

$weather_list = file_get_contents('http://www.se.rit.edu/~dkrutz/swen-344/REST/RESTAPI-weather.php?action=get_weather_list');

</html>