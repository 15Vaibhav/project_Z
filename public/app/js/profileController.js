app.controller('myctrl',(mainfact,$scope,$localStorage)=>{
  $scope.callCity=()=>{
  $scope.myVar = false;
var promise = mainfact.CallCities($scope.placeName);
    promise.then(function(data){
    $scope.loclArr = data;
          },function(err){
             $scope.locArr =err;
                    });
cor =$scope.placeName;
getLocation(cor,function(sCord){
console.log(sCord);
var saloonlist =mainfact.getLoc(sCord);
saloonlist.then(function(data){
  console.log(data.data.DATA);
  saloonAr = data.data.DATA;
   $scope.count =data.data.COUNT;
  $scope.coutning = $localStorage;
  $scope.coutning.count = $scope.count;
    $scope.saloon =saloonAr ;
    $scope.store1 = $localStorage;
    $scope.store1.id = $scope.saloon;
  	    if(saloonAr<1){
        saloonAr.push({saloonName:"Not Found.........."});
         $scope.saloonArr = saloonAr;
                }
                else{
$scope.saloonArr= saloonAr;
              }
                                            
                                                
  },function(err){
   console.log(err);
 })
});