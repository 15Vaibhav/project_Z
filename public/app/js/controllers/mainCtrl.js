app.controller('myctrl', (mainfact, $scope, $localStorage) => {
  
  //$scope.loading = true;
  //City Calll.............................................................
  $scope.callCity = () => {
    $scope.myVar = false;
    cor = $scope.placeName;
    getLocation(cor, function (sCord) {
      var promise = mainfact.getLoc(sCord);
      promise.then(function (data) {
      $scope.loading = false;
      saloonAr = data.data.DATA;
        if (saloonAr.length < 1) {
          saloonAr.push({
           saloonName: "No Saloon found"
      
          });
          $scope.saloonArr = saloonAr;
        } else {
          $scope.saloonArr = saloonAr;
        }
      }, function (err) {
        console.log(err);
      })
      $scope.loading = true;
    });
  }
  //*************************************getSaloonByName****************************************************** */

  $scope.getSaloon = () => {
    if (('' + $scope.getsalon).length >= 3) {
      $scope.myVar = true;
      var saloonName = mainfact.getSaloonName($scope.getsalon);
      saloonName.then(function (data) {
        $scope.saloonAr = data.data.DATA;
      }, function (err) {
        $scope.saloonAr = err;
      })
    } else if (('' + $scope.getsalon).length == 0) {
      $scope.myVar = false;
    }

  }
  //***************************************************Get coordinates*************************************8 */
  var getLocation = function (address, sCord) {
    var cord = [];
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        cord[0] = latitude;
        cord[1] = longitude;
        $scope.cordin = cord;
        $scope.cord = $localStorage;
        $scope.cord.cordinates = $scope.cordin;
        // console.log(cord)
        return sCord(cord);
      }
    });
  }
  //**********************************************SearchClick******************************************** */
  $scope.Search = () => {
    if ((!$scope.placeName) && (!$scope.getsalon)) {


      $scope.u = "http://zaloonz.in:8081/customer/getSaloon/";
      $scope.cordin =   [28.7040592, 77.10249019999992];
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.url = $scope.u;
      $scope.fl = "f";
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"

    } else if ((!$scope.placeName) && ($scope.getsalon)) {
     // console.log("run name");
      $scope.fl = "fin";
      $scope.cord = $localStorage;
      $scope.cord.name = $scope.getsalon;
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"
    } else if (($scope.placeName) && ($scope.getsalon)) {
      console.log("run name");
      $scope.fl = "f";
      $scope.cordin = $scope.getsalon;
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"
    } else {
      cor = $scope.placeName;
      getLocation(cor, function (sCord) {
        console.log(sCord);
        $scope.u = "http://zaloonz.in:8081/customer/getSaloon/";
        $scope.cordin = sCord;
        $scope.cord = $localStorage;
        $scope.cord.cordinates = $scope.cordin;
        $scope.cord.url = $scope.u;
        $scope.fl = "f";
        $scope.cord.flag = $scope.fl
        location.href = "/public/app/views/pages/feature.html"
      });
    }
  }
  //**********************************************grtLuxarySaloon********************************************** */
  $scope.lux = () => {
    if (!$scope.placeName) {

      $scope.u = "http://139.59.9.202:8081/customer/home/allLuxurySaloons";
      $scope.cordin =   [28.7040592, 77.10249019999992];
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.url = $scope.u;
      $scope.fl = "f";
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"

    } else {
      $localStorage.cordinates = null;
      console.log($localStorage.cordinates);
      $scope.u = "http://139.59.9.202:8081/customer/home/allLuxurySaloons";
      cor = $scope.placeName;
      getLocation(cor, function (sCord) {
        console.log(sCord);
        $scope.cordin = sCord;
        $scope.cord = $localStorage;
        $scope.cord.cordinates = $scope.cordin;
        $scope.cord.url = $scope.u;
        $scope.fl = "f";
        $scope.cord.flag = $scope.fl
        location.href = "/public/app/views/pages/feature.html"

      });
    }
  }
  //************************************pktFrndly**************************************************** */
  $scope.pkt = () => {
    if (!$scope.placeName) {

      $scope.u = "http://139.59.9.202:8081/customer/home/allBudgetSaloons";
      $scope.cordin =   [28.7040592, 77.10249019999992];
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.url = $scope.u;
      $scope.fl = "f";
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"

    } else {
      $scope.u = "http://139.59.9.202:8081/customer/home/allBudgetSaloons";
      cor = $scope.placeName;
      getLocation(cor, function (sCord) {
        console.log(sCord);
        $scope.cordin = sCord;
        $scope.cord = $localStorage;
        $scope.cord.cordinates = $scope.cordin;
        $scope.cord.url = $scope.u;
        $scope.fl = "f";
        $scope.cord.flag = $scope.fl
        location.href = "/public/app/views/pages/feature.html"

      });
    }
  }
  //********************************************trending******************************************** */
  $scope.trending = () => {
    if (!$scope.placeName) {

      $scope.u = "http://zaloonz.in:8081/getPlatinumSaloonsList";
      $scope.cordin =   [28.7040592, 77.10249019999992];
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.url = $scope.u;
      $scope.fl = "f";
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"
    } else {

      $scope.u = "http://zaloonz.in:8081/getPlatinumSaloonsList";
      cor = $scope.placeName;
      getLocation(cor, function (sCord) {
        console.log(sCord);
        $scope.cordin = sCord;
        $scope.cord = $localStorage;
        $scope.cord.cordinates = $scope.cordin;
        $scope.cord.url = $scope.u;
        $scope.fl = "f";
        $scope.cord.flag = $scope.fl
        location.href = "/public/app/views/pages/feature.html"
      });
    }
  }
  //**************************************************popularCities**********************************/
  $scope.pop = (cor) => {
    console.log(cor);
    $scope.u = "http://zaloonz.in:8081/customer/getSaloon/";
    getLocation(cor, function (sCord) {
      console.log(sCord);
      $scope.cordin = sCord;
      $scope.cord = $localStorage;
      $scope.cord.cordinates = $scope.cordin;
      $scope.cord.url = $scope.u;
      $scope.fl = "f";
      $scope.cord.flag = $scope.fl
      location.href = "/public/app/views/pages/feature.html"

    });

  }
  $scope.SendMessage= (number)=>{
        console.log(number) 
       mainfact.sendMsg(number);
  }

})