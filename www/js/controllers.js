angular.module('hive.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('KPICtrl', function($scope, $timeout) {

  // $scope.percent = 65;
  //     $scope.anotherPercent = -45;
  //     $scope.anotherOptions = {
  //       animate:{
  //         duration:0,
  //         enabled:false
  //       },
  //       barColor:'#2C3E50',
  //       scaleColor:false,
  //       lineWidth:20,
  //       lineCap:'circle'
  //     };

  // $scope.percent = 65;
  // $scope.presentationOptions = {
  //   chartForKPI: {}
  // }

  $scope.KPI = {
    utilization: {
      percent: 95,
      target: 92,
      relevantDate: new Date(),
      availableDate: new Date()
    },
    lateTimeSheets: {
      number: 0,
      target: 2,
      relevantDate: new Date()
    },
    revenueManaged: {
      amount: 550000,
      target: 0,
      relevantDate: new Date()
    },
    teamSales: {
      target: 0,
      amount: 2000000,
      relevantDate: new Date()
    },
    leadSales: {
      target: 0,
      amount: 500000,
      relevantDate: new Date()
    },
    assignmentAppraisals: {
      target: 2,
      amount: 3,
      relevantDate: new Date()
    }

  }


  // Structure for PI Chart
  $scope.options = {
    animate: {
          duration: 1000,
          enabled: true
    },
    barColor:'#57899c',
    // barColor:'#2C3E50',
    // trackColor: '#000',
    percent: 65,
    scaleColor:false,
    lineWidth:8,
    lineCap:'circle'
  };

  $scope.showPercentage = function(){
    var canvasWidth = 0;
    var canvasHeight = 0;
    var c = document.getElementById("utilization-chart");
    c = c.children[0];
    var ctx = c.getContext("2d");
    ctx.rotate(Math.PI/2);
    ctx.font = "22px Arial";
    ctx.fillStyle="#57899c";
    ctx.textAlign="center";
    ctx.textBaseline="middle"; 
    ctx.fillText($scope.KPI.utilization.percent + "%", canvasWidth/2, canvasHeight/2);
  }

  window.showP = $scope.showPercentage;

  // $timeout(function() {
  //     $scope.showPercentage();
  //   }, 2000);


})

.controller('ExpectationsCtrl', function($scope) {

  $scope.expectations = { level: "Consultant", items: [] }

})

.controller('GlossaryCtrl', function($scope, HiveServices) {

  $scope.glossary = HiveServices.getGlossary();
  console.log($scope.glossary);

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
