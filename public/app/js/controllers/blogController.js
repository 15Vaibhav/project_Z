app.controller('blogCtrl',($scope,mainfact)=>{
    $scope.postBLog=(User)=>{
        $scope.myVar = true;
        console.log("dfdfdfdf");
       var msg = mainfact.POST_BLOGS(User);
       msg.then(function(data){
         console.log(data);
         $scope.blogId = data
       })
     },
     $scope.getAllBlogs=()=>{
       var blogs =[];
       var b ={};
       console.log("getBlogs....");
        var msg =   mainfact.GET_ALL_BLOGS();
        msg.then(function(data){
          console.log(data.data.DATA);
          data = data.data.DATA;
          data.forEach(element => {
            console.log(element)
            b.name = element.name;
            b.email = element.email;
            b.blogId = element.blogId;
            b.postTitle = element.postTitle;
            b.date = element.date;
            b.detailedPost = element.detailedPost
            b.postUrl = element.postUrl[0];
            blogs.push(b);
            b ={};
          });
          $scope.blogArray = blogs;
        
        }) 

     }
    
   
});