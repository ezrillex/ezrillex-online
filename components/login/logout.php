<?php
session_start(); // otherwise it destroys nothing xd
session_destroy();
header("Location: /index.php");