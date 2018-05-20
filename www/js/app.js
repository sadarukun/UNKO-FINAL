var module = angular.module('my-app', ['onsen'])
module.controller('AppController', function ($scope) {
	this.load = function (page) {
		splitter.content.load(page)
			.then(function () {
				splitter.left.close()
                    if(page == 'home.html'){
                         initialize()
                    }
			})
	}
});

 var contentString = '梅田さんの家らしい';


  function initialize() {
     var mapOptions = {
          center: new google.maps.LatLng(34.703615, 135.509339),    //地図上で表示させる緯度経度
          zoom: 14,                                                 //地図の倍率
          mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"),
          mapOptions);
          var myLatlng = new google.maps.LatLng(34.703615, 135.509339);
          var marker = new google.maps.Marker({
          position: myLatlng,
          title:"梅田の家"
     });
     marker.setMap(map);
     marker.addListener( "click", function ( ) {
           var infowindow = new google.maps.InfoWindow({
               content:contentString
           });
          infowindow.open(map, marker);
} ) ;
}



ons.ready(function () {
})
