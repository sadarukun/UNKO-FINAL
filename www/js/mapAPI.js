// ons.ready(function(){
//      navi.on('preshow',function(event){
//             var mapOptions = {
//               center: new google.maps.LatLng(35.658892, 139.755286),    //地図上で表示させる緯度経度
//               zoom: 14,                                                 //地図の倍率
//               mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
//             };
//             var map = new google.maps.Map(documnet.getElementById("map_canvas"),
//                                           mapOptions);
//      });
// });

// app.controller('MapController', function($scope, $timeout){
      
//         $scope.map;
//         $scope.markers = [];
//         $scope.markerId = 1;
          
//         //Map initialization  
//         $timeout(function(){
      
//             var latlng = new google.maps.LatLng(35.7042995, 139.7597564);
//             var myOptions = {
//                 zoom: 8,
//                 center: latlng,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             };
//             $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
//             $scope.overlay = new google.maps.OverlayView();
//             $scope.overlay.draw = function() {}; // empty function required
//             $scope.overlay.setMap($scope.map);
//             $scope.element = document.getElementById('map_canvas');
//             $scope.hammertime = Hammer($scope.element).on("hold", function(event) {
//                 $scope.addOnClick(event);
//             });
            
//         },100);
// });