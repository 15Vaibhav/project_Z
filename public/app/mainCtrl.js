app.controller('myctrl', (mainfact, $scope, $localStorage) => {
  //City Calll.............................................................
  $scope.callCity = () => {
   // console.log($scope.placeName);
    $scope.myVar = false;
     cor = $scope.placeName;
    getLocation(cor, function (sCord) {
    //  console.log(sCord);
      var saloonlist = mainfact.getLoc(sCord);
      saloonlist.then(function (data) {
      //  console.log(data.data.DATA);
        saloonAr = data.data.DATA;
        $scope.count = data.data.COUNT;
        $scope.coutning = $localStorage;
        $scope.coutning.count = $scope.count;
        $scope.saloon = saloonAr;
        $scope.store1 = $localStorage;
        $scope.store1.id = $scope.saloon;
        if (saloonAr < 1) {
          saloonAr.push({ saloonName: "Not Found.........." });
          $scope.saloonArr = saloonAr;
        }
        else {
          $scope.saloonArr = saloonAr;
        }


      }, function (err) {
     //   console.log(err);
      })
    });
  }
  $scope.getSaloon = () => {
    if (('' + $scope.getsalon).length >= 3) {
      $scope.myVar = true;
      var saloonName = mainfact.getSaloonName($scope.getsalon);
      saloonName.then(function (data) {
        $scope.saloonAr = data.data.DATA;
        // console.log(data.data.DATA);
      }, function (err) {
        $scope.saloonAr = err;
      })

    } else if (('' + $scope.getsalon).length == 0) {
      $scope.myVar = false;
    }

  }

  var getLocation = function (address, sCord) {
   var cord = [];
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
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
  $scope.Search = () => {
    var page = [], i = 0;
    idno = $localStorage;
    $scope.featureArr = idno.id;
   // console.log($scope.featureArr);
    CO = idno.count;
    if (CO > 100) {
      i = CO / 100;
      i = parseInt(i);
      i++;
      while (i > 0) {
        page[i - 1] = i;
        i--;
      }
      Calling(page);
    } else {
      Calling([CO]);
    }
  },
    $scope.getSaloonByID = (id) => {
      $scope.id1 = id;
      $scope.store = $localStorage;
      $scope.store.idn = $scope.id1;
      location.href = "profile-page.html";

    },
    Calling = (page) => {
      //console.log(page);
      $scope.pa = page;
    },
    $scope.Page = (x) => {
      var pa = [];
      //console.log(x);
      x--;
      pageno = $localStorage;
      pa[0] = pageno.cordinates[0];
      pa[1] = pageno.cordinates[1];
      pa[2] = x;
      var promise = mainfact.pagiNation(pa);
      promise.then(function (data) {
        $scope.featureArr = data.data.DATA;
        //console.log($scope.featureArr);
      }, function (err) {
        //console.log(err);
      }
      )
    },
    $scope.spon = () => {
     
      plat = $localStorage;
      var promise = mainfact.getPlatinum(plat.cordinates);
      promise.then(function (data) {
        $scope.SponsArr = data.data.DATA;
        $scope.tren = $localStorage;
        $scope.tren.trending = $scope.SponsArr;
       
      }, function (err) {
       
      }
      )
    },
    $scope.pop=(cor)=>{
    getLocation(cor, function (sCord) {
         // console.log(sCord);
        var saloonlist = mainfact.getLoc(sCord);
        saloonlist.then(function (data) {
        $scope.p = data.data.DATA;
        console.log(data.data.DATA)
      $scope.popular= $localStorage;
          $scope.popular.po = $scope.p;
        location.href= "/public/app/views/pages/feature.html";
         
        }, function (err) {
       //   console.log(err);
        })
        
      })
      
    },
    $scope.popular=()=>{
     // $scope.featureArr =null;
          fear =$localStorage;
          $scope.featureArr = fear.po;
          console.log(fear.po)
    },
    $scope.lux=()=>{
     var cor=[];
     lux = $localStorage;
     cor[0]=lux.cordinates[0];
     cor[1]=lux.cordinates[1];
     console.log(cor);
    var promise = mainfact.luxurious(cor);
    promise.then(function (data) {
      console.log(data);
      $scope.l= data;
    $scope.lu= $localStorage;
          $scope.lu.luxur = $scope.l;
     location.href= "/public/app/views/pages/feature.html";
         }, function (err) {
    })
    },
    $scope.lu =()=>{
      $scope.featureArr =null;
      console.log( $scope.featureArr );
    luxri = $localStorage;
    console.log(luxri.luxurious);
    $scope.featureArr =luxri.luxur;
    
    },
    $scope.trending=()=>{
      $scope.featureArr =null;
      pla = $localStorage;
      console.log(pla.cordinates);
      var promise = mainfact.getPlatinum(pla.cordinates);
      promise.then(function (data) {
       console.log(data);
       $scope.featureArr = data.data.DATA;
       location.href ="/public/app/views/pages/feature.html"
       
      }, function (err) {
        //console.log(err);
      }
      )
      console.log($scope.featureArr);

    }



})
