  app.controller('featCtrl',(mainfact,$scope,$localStorage)=>{
  //********************************************************featureCall*************************************** */
  $scope.s = false;
  $scope.mess =false; 
  $scope.feature=()=>{
    cor = $localStorage;
    if(cor.flag =="fin"){
      console.log(cor.name);
    var saloonName= mainfact.getS(cor.name);
    saloonName.then(function (data) {
      if(data.status==200){
        $scope.loading = false;
        console.log(data)
        $scope.s = true;
        $scope.featureArr = data.data.DATA;
        console.log($scope.featureArr)
      }else{
        $scope.message ="Oops Something went wrong.....!!!!"
      }
        }, function (err) {
        $scope.featureArr = err;
      })
    }else{
    var promise = mainfact.getSaloon(cor.cordinates,cor.url);
    promise.then(function (data) {
     console.log(data.status);
     // $scope.mess = false;
      if(data.status==200){
        $scope.loading = false;
       if((data.data.DATA)==0){
        $scope.message ="No saloons Found";
           }
          
        else{
          
          $scope.featureArr =data.data.DATA;
        var page = [], i = 0;
        CO = data.data.COUNT;
        if (CO >= 100) {
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
      }
      }else{
        $scope.message ="Oops Something went wrong.....!!!!"
      }
    
})
    }
    $scope.loading = true;
   },
   Calling = (page) => {
    $scope.pa = page;
  },
  //***********************************************pagination*********************************************** */
  $scope.Page = (x) => {
      var pa = [];
      x--;
      pageno = $localStorage;
      pa[0] = pageno.cordinates[0];
      pa[1] = pageno.cordinates[1];
      pa[2] = x;
      var promise = mainfact.pagiNation(pa);
      promise.then(function (data) {
      $scope.featureArr = data.data.DATA;
      }, function (err) {
      }
      )
    },

    //***********************************************sponsered************************************************ */
    $scope.spon = () => {
        plat = $localStorage;
        url ="http://zaloonz.in:8081/getPlatinumSaloonsList";
        var promise = mainfact.getPlatinum(plat.cordinates,url);
        promise.then(function (data) {
        $scope.SponsArr = data.data.DATA;
        $scope.tren = $localStorage;
        $scope.tren.trending = $scope.SponsArr;
         }, function (err) {
         console.log(err);
        }
        )
      },
   //****************************************************getSaloonById******************************************8 */
      $scope.getSaloonByID = (id) => {
        $scope.id1 = id;
        $scope.store = $localStorage;
        $scope.store.idn = $scope.id1;
        console.log(id)
        location.href = "profile-page.html";
  
      },
     
//*******************************************************Filters******************************************** */
         $scope.filterApply=(myCheckbox)=>{
          cor = $localStorage;
          c =cor.cordinates;
        //  console.log(c);
               var fil={};
               fil.latitude = c[0];
               fil.longitude=c[1];
   
         if(myCheckbox.openNow){
           
            fil['openNow'] = "true";
          
          }else if(myCheckbox.openNow==false){
              delete fil.openNow;
           }
          if(myCheckbox.rating){
            fil["averageRating"] ="3.5";
          
          }else if(myCheckbox.rating==false){
             delete fil.averageRating;
        }
          if(myCheckbox.female){
           fil["saloonType"]="Female"
            }else if(myCheckbox.female==false){
              delete fil.saloonType;
          }
          if(myCheckbox.male){
              fil["saloonType"]="Male"
          }else if(myCheckbox.male==false){
            delete fil.saloonType;
          }if(myCheckbox.male&&myCheckbox.female){
            fil["saloonType"]="Both"
          }else if(myCheckbox.male==false){
            delete fil.saloonType;
          
          }
          if(myCheckbox.homeService){
             fil["homeService"]="3"
          }else if(myCheckbox.homeService==false){
            delete fil.homeService;
          }
          if(myCheckbox.popularity){
            //   filter.push({"sortBy":"popularity"});
               fil["sortBy"] ="popularity"
          }else if(myCheckbox.popularity==false){
             delete fil.sortBy;
          }
          if(myCheckbox.avgRating){
         
            fil["sortBy"] ="averageRating"
          }else if(myCheckbox.avgRating ==false){
            delete fil.sortBy;
          }
          if(myCheckbox.location){
            fil["sortBy"] ="location"
          }else if(myCheckbox.avgRating ==false){
            delete fil.sortBy;
          } 
        var promise=  mainfact.filter(fil);
       promise.then(function (data) {
        if((data.data.DATA)==0){
          $scope.message ="No saloons Found";
          $scope.mess =false;
            }else{
        $scope.featureArr =data.data.DATA;
        $scope.message =null;
        $scope.mess =true;
        var page = [], i = 0;
        CO = data.data.COUNT;
        if (CO >= 100) {
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
      }
    })
                   }
     
})