
app.factory('mainfact',($http,$q)=>{
//console.log("my fact running........");
var obj ={
  //******************************************************************************* *
                            getLoc(cordinate){
                            var latitude,longitude;
                            latitude = cordinate[0];
                            longitude =cordinate[1];
                            var pr = $q.defer();
                            $http({
                            method: 'POST',
                            url: "http://zaloonz.in:8081/customer/getSaloon/",
                            data: $.param({
                            latitude:latitude,
                            longitude:longitude,
                            pageNo:0,
                            }),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }).then(function(data) {
                                         if (data) {
                                         pr.resolve(data);
                            } else {
                                         pr.reject(data)
                                   }
                                   },function(err){
                                         pr.reject(err);
                             });
               
                             return pr.promise;

  
                             },
 //**********************************************Saloon************************************************************ */
 getSaloon(cordinate,url){
   console.log(url);
  var latitude,longitude;
  latitude = cordinate[0];
  longitude =cordinate[1];
var pr = $q.defer();
    $http({
    method: 'POST',
    url: url,
    data: $.param({
        latitude:latitude,
        longitude:longitude,
        pageNo:0,
       }),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).then(function(data) {
    if (data) {
   
      pr.resolve(data);
    } else {
      pr.reject(data)
    }
  },function(err){
pr.reject(err);
});

return pr.promise;
},





//**************************************************************888saloonByName ********************************/
 getSaloonName(getsalon){
// console.log(getsalon);
 var pr = $q.defer();
 $http({
method: 'POST',
url: "http://zaloonz.in:8081/customer/suggestionList",
data: $.param({
saloonName:getsalon,
}),
headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).then(function(data) {
if (data) {
    pr.resolve(data);
   //console.log(data.data.DATA);
} else {
  pr.reject(data)
}
});        
return pr.promise;
},
//***********************************saloonById**********************************************************************
saloonByID(id){
  console.log(id);
  var pr = $q.defer();
        var url ='http://zaloonz.in:8081/findSaloon/'+id;
                    $http.get(url).then(function(data){
                    pr.resolve(data.data.DATA);
                    }
                      ,function(err){
                        pr.reject(err);
                     });
                return pr.promise;
},
//*********************************Pagination************************************************************************** */
pagiNation(page){
  var latitude,longitude;
                      latitude = page[0];
                      longitude =page[1];
                      pgNo =page[2];
                var pr = $q.defer();
                        $http({
                        method: 'POST',
                        url: "http://zaloonz.in:8081/customer/getSaloon/",
                        data: $.param({
                            latitude:latitude,
                            longitude:longitude,
                            pageNo:pgNo,
                           }),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).then(function(data) {
                        if (data) {
                         // console.log(data);
                          pr.resolve(data);
                        } else {
                          pr.reject(data)
                        }
                      },function(err){
                    pr.reject(err);
                 });
               
            return pr.promise;
                            },
  //*****************************************************getPlatinum*************************************************** */
                getPlatinum(plat,url){
              var latitude,longitude;
                  latitude = plat[0];
                  longitude =plat[1];
                  //pgNo =page[2];
            var pr = $q.defer();
                    $http({
                    method: 'POST',
                    url: url,
                    data: $.param({
                        latitude:latitude,
                        longitude:longitude,
                      }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(data) {
                    if (data) {
                   // console.log(data);
                      pr.resolve(data);
                    } else {
                      pr.reject(data)
                    }
                  },function(err){
                pr.reject(err);
             });
           
        return pr.promise;
       },

       POST_BLOGS(User){
         console.log(User);
       var pr = $q.defer();
                    $http({
                    method: 'POST',
                    url: 'http://zaloonz.in:8081/postBlogs',
                    data: $.param({
                      postTitle:User.postTitle,
                      name:User.name,
                      detailedPost:User.detailedPost,
                      email:User.email
                       }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(data) {
                    if (data) {
                    pr.resolve(data.data.DATA);
                    } else {
                      pr.reject(data)
                    }
                  },function(err){
                pr.reject(err);
             });
           
        return pr.promise;

       },
       
GET_ALL_BLOGS(){
  var pr = $q.defer();
  var url ='http://zaloonz.in:8081/getAllBlogs';
              $http.get(url).then(function(data){
              pr.resolve(data);
             
              }
                ,function(err){
                  pr.reject(err);
               });
          return pr.promise;
},











//***************************************filter ***********************************************8/

       filter(filter){
       //console.log(cordinate);
        // latitude  = cordinate[0];
        // longitude = cordinate[1];
       console.log(filter);
        // console.log(latitude);
        // console.log(longitude);
      var pr = $q.defer();
                        $http({
                        method: 'POST',
                        url: "http://zaloonz.in:8081/customer/test/",
                        data: $.param(filter),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).then(function(data) {
                        if (data) {
                          console.log(data);
                          pr.resolve(data);
                        } else {
                          pr.reject(data)
                        }
                      },function(err){
                    pr.reject(err);
                 });
               
           return pr.promise;
          
        },
        getS(name){
        //  console.log(name);
          var pr = $q.defer();
          $http({
          method: 'POST',
          url: "http://zaloonz.in:8081/customer/getSaloonByName/",
          data: $.param({
            saloonName:name,
              
             }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function(data) {
          if (data) {
           console.log(data);
            pr.resolve(data);
          } else {
            pr.reject(data)
          }
        },function(err){
      pr.reject(err);
   });
 
return pr.promise;
  },

//**********************************************************************sendMsg**************************************** */
     sendMsg(number){
      var pr = $q.defer();
      console.log(number);
      // var message= 
      var url ='http://139.59.9.202:8081/sendMessage/'+number+"/hello asasasa";
                  $http.get(url).then(function(data){
                    console.log(data)
                  pr.resolve(data.data.DATA);
                  }
                    ,function(err){
                      console.log(err);
                      pr.reject(err);
                   });
              return pr.promise;

     }

}



return obj;
});