<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="user" href="index.html">
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    .formr{
    display: inline;
    }
    h3{
    color: white;
      padding: 15px;}
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
  </style>
</head>
<body>
    
     
    
    

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    /* <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">                      
      </button> */
      
    </div>
    <div class="collapse navbar-collapse text-center" id="myNavbar">
      <h3>Σύστημα διαχείρισης αγγελιών (καλώς ήλθες <username>)</h3>
       
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
      <form action="process-form.php" method="post">
        <p>
            <label for="inputName">Τιμή:<sup>*</sup></label>
            <input type="text" name="timi" id="inputTimi">
        </p>
        <p>
            <label for="inputPerioxi" id="inputPerioxi">Περιοχή:<sup>*</sup></label>
            <select id="inputPerioxi" name="perioxi">
    <option value="athina">Αθήνα</option>
    <option value="Thessaloniki">Θεσσαλονίκη</option>
    <option value="Patra">Πάτρα</option>
    <option value="Hrakleio">Ηράκλειο</option>
        </p>
        <p>
        
            <label for="inputdiathesimotita" id="inputdiathesimotita">Διαθεσιμότητα:<sup>*</sup> </label>
            <select id="inputdiathesimotita" name="diathesimotita">
    <option value="enoikiasi">ενοικίαση</option>
    <option value="polisi">πώληση</option>
  </select>
        </p>
        <p>
            <label for="inputSubject">Τετραγωνικά:<sup>*</sup></label>
            <input type="text" name="tetragonika" id="inputTetragonika">
            <p id="demo"></p>
            </p>
        <button type="button" onclick="myFunction()">Submit</button>
    </div>
    <div class="col-sm-8 text-left"> 
      <ol class="formr">
        <li><em>Τιμή:</em> <?php echo $_POST["timi"]?></li>
        <li><em>Περιοχή:</em> <?php echo $_POST["perioxi"]?></li>
        <li><em>Διαθεσιμότητα:</em> <?php echo $_POST["diathesimotita"]?></li>
        <li><em>Τετραγωνικά:</em> <?php echo $_POST["tetragonika"]?></li>
    <button type="button">Delete</button>
    </ol>
    </div>
   
  </div>
</div>

<footer class="container-fluid text-center">
  <p>All rights reserved</p>
</footer>
<button type="button">Delete</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementsByName("tetragonika").value;
  y = document.getElementsByName("timi").value;
 

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 20 || x > 1000) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
if (isNaN(y) || y < 50 || y > 5000000) {
  text = "Input not valid";
} else {
  text = "Input OK";
}
document.getElementById("demo").innerHTML = text;
}
</script>
</body>
</html>
