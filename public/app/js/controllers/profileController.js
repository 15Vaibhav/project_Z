app.controller('profileCtrl',(mainfact,$scope,$localStorage)=>{
datastore=$localStorage;
console.log(datastore.idn);
$scope.getSaloon1=()=>{
var saloonID = mainfact.saloonByID(datastore.idn);
   saloonID.then(function(data){
    saloonDataArr = data;
    console.log(saloonDataArr);
    $scope.saloonName=saloonDataArr.saloonName;
    var add = saloonDataArr.address;
            add.forEach(function(element) {
              $scope.hno =  element.hno;
              $scope.locality = element.locality;
              $scope.city    = element.city;
            })
      $scope.saloonType = saloonDataArr.saloonType;      
      $scope.mobileNumber =saloonDataArr.mobileNumber;
      var alterNum =saloonDataArr.alternateNumber;
    //  if(alterNum.length>0){
        $scope.alternateNumber = alterNum;
      //          }else{
      // $scope.alternateNumber = ["Not available"];
       // }
        $scope.specialFor=saloonDataArr.specialFor;
        $scope.brands = saloonDataArr.brands;

     },function(err){
    saloonDataArr =err;
                 });
                }


}); 