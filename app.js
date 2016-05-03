var app = angular.module('ranking_board', ['chart.js']);

app.controller('main_controller', ['$scope', function ($scope) {


    var FirebaseRef = new Firebase("https://bittiger-ranking.firebaseio.com/");

    FirebaseRef.child('user_events').on("value", function (snapshot) {

        $scope.members = snapshot.val()['events'];
        $scope.list_created_time = snapshot.val()['created_time'];
        $scope.$apply();
        console.log($scope.list_created_time);

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });


    $scope.order_patterns = ['Total', 'PushEvent', 'PullRequestEvent', 'CreateEvent', 'ForkEvent'];
    $scope.order = 'Total';
    console.log($scope.order);


    $scope.dropboxitemselected = function (item) {
        $scope.order = item;
        console.log("New Order: " + $scope.order);
    }

    $scope.members1 = [{
        "login": "hackjustu",
        "avatar_url": "https://avatars.githubusercontent.com/u/7756581?v=3",
        "html_url": "https://github.com/hackjustu",
        "Total": 84,
        "PushEvent": 57,
        "PullRequestEvent": 16,
        "CreateEvent": 4,
        "ForkEvent": 7
    }, {
        "login": "cc13ny",
        "avatar_url": "https://avatars.githubusercontent.com/u/1727284?v=3",
        "html_url": "https://github.com/cc13ny",
        "Total": 65,
        "PushEvent": 45,
        "PullRequestEvent": 0,
        "CreateEvent": 12,
        "ForkEvent": 8
    }, {
        "login": "wliday",
        "avatar_url": "https://avatars.githubusercontent.com/u/1478140?v=3",
        "html_url": "https://github.com/wliday",
        "Total": 45,
        "PushEvent": 42,
        "PullRequestEvent": 0,
        "CreateEvent": 2,
        "ForkEvent": 1
    }, {
        "login": "CcWang",
        "avatar_url": "https://avatars.githubusercontent.com/u/15204203?v=3",
        "html_url": "https://github.com/CcWang",
        "Total": 38,
        "PushEvent": 27,
        "PullRequestEvent": 1,
        "CreateEvent": 7,
        "ForkEvent": 3
    }, {
        "login": "aaronice",
        "avatar_url": "https://avatars.githubusercontent.com/u/3983543?v=3",
        "html_url": "https://github.com/aaronice",
        "Total": 29,
        "PushEvent": 23,
        "PullRequestEvent": 2,
        "CreateEvent": 2,
        "ForkEvent": 2
    }, {
        "login": "xinyzhang9",
        "avatar_url": "https://avatars.githubusercontent.com/u/9029364?v=3",
        "html_url": "https://github.com/xinyzhang9",
        "Total": 23,
        "PushEvent": 23,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "jackalsin",
        "avatar_url": "https://avatars.githubusercontent.com/u/14567001?v=3",
        "html_url": "https://github.com/jackalsin",
        "Total": 23,
        "PushEvent": 21,
        "PullRequestEvent": 0,
        "CreateEvent": 2,
        "ForkEvent": 0
    }, {
        "login": "zhangyue1208",
        "avatar_url": "https://avatars.githubusercontent.com/u/2001781?v=3",
        "html_url": "https://github.com/zhangyue1208",
        "Total": 22,
        "PushEvent": 12,
        "PullRequestEvent": 8,
        "CreateEvent": 2,
        "ForkEvent": 0
    }, {
        "login": "jingli430",
        "avatar_url": "https://avatars.githubusercontent.com/u/4213288?v=3",
        "html_url": "https://github.com/jingli430",
        "Total": 21,
        "PushEvent": 18,
        "PullRequestEvent": 0,
        "CreateEvent": 3,
        "ForkEvent": 0
    }, {
        "login": "youhusky",
        "avatar_url": "https://avatars.githubusercontent.com/u/10191895?v=3",
        "html_url": "https://github.com/youhusky",
        "Total": 15,
        "PushEvent": 12,
        "PullRequestEvent": 0,
        "CreateEvent": 2,
        "ForkEvent": 1
    }, {
        "login": "haolin29",
        "avatar_url": "https://avatars.githubusercontent.com/u/7300278?v=3",
        "html_url": "https://github.com/haolin29",
        "Total": 15,
        "PushEvent": 15,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "ZwEin27",
        "avatar_url": "https://avatars.githubusercontent.com/u/478356?v=3",
        "html_url": "https://github.com/ZwEin27",
        "Total": 13,
        "PushEvent": 13,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "ttylcc",
        "avatar_url": "https://avatars.githubusercontent.com/u/8636583?v=3",
        "html_url": "https://github.com/ttylcc",
        "Total": 13,
        "PushEvent": 10,
        "PullRequestEvent": 0,
        "CreateEvent": 3,
        "ForkEvent": 0
    }, {
        "login": "luoxinran28",
        "avatar_url": "https://avatars.githubusercontent.com/u/7000182?v=3",
        "html_url": "https://github.com/luoxinran28",
        "Total": 11,
        "PushEvent": 8,
        "PullRequestEvent": 0,
        "CreateEvent": 3,
        "ForkEvent": 0
    }, {
        "login": "jmnjmnjmn",
        "avatar_url": "https://avatars.githubusercontent.com/u/10612971?v=3",
        "html_url": "https://github.com/jmnjmnjmn",
        "Total": 11,
        "PushEvent": 8,
        "PullRequestEvent": 0,
        "CreateEvent": 2,
        "ForkEvent": 1
    }, {
        "login": "HYSuperman",
        "avatar_url": "https://avatars.githubusercontent.com/u/6930027?v=3",
        "html_url": "https://github.com/HYSuperman",
        "Total": 9,
        "PushEvent": 6,
        "PullRequestEvent": 0,
        "CreateEvent": 2,
        "ForkEvent": 1
    }, {
        "login": "chw120",
        "avatar_url": "https://avatars.githubusercontent.com/u/10618898?v=3",
        "html_url": "https://github.com/chw120",
        "Total": 8,
        "PushEvent": 7,
        "PullRequestEvent": 0,
        "CreateEvent": 1,
        "ForkEvent": 0
    }, {
        "login": "birdyhuang",
        "avatar_url": "https://avatars.githubusercontent.com/u/10481484?v=3",
        "html_url": "https://github.com/birdyhuang",
        "Total": 5,
        "PushEvent": 4,
        "PullRequestEvent": 1,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "ZhuangER",
        "avatar_url": "https://avatars.githubusercontent.com/u/5662692?v=3",
        "html_url": "https://github.com/ZhuangER",
        "Total": 5,
        "PushEvent": 5,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "brianway",
        "avatar_url": "https://avatars.githubusercontent.com/u/5981249?v=3",
        "html_url": "https://github.com/brianway",
        "Total": 5,
        "PushEvent": 5,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "yhx189",
        "avatar_url": "https://avatars.githubusercontent.com/u/9010699?v=3",
        "html_url": "https://github.com/yhx189",
        "Total": 5,
        "PushEvent": 5,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "roy3221",
        "avatar_url": "https://avatars.githubusercontent.com/u/11037046?v=3",
        "html_url": "https://github.com/roy3221",
        "Total": 5,
        "PushEvent": 5,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "danayel",
        "avatar_url": "https://avatars.githubusercontent.com/u/502786?v=3",
        "html_url": "https://github.com/danayel",
        "Total": 4,
        "PushEvent": 1,
        "PullRequestEvent": 0,
        "CreateEvent": 1,
        "ForkEvent": 2
    }, {
        "login": "darrenxyli",
        "avatar_url": "https://avatars.githubusercontent.com/u/3806865?v=3",
        "html_url": "https://github.com/darrenxyli",
        "Total": 4,
        "PushEvent": 1,
        "PullRequestEvent": 2,
        "CreateEvent": 1,
        "ForkEvent": 0
    }, {
        "login": "lunrongchen",
        "avatar_url": "https://avatars.githubusercontent.com/u/8575415?v=3",
        "html_url": "https://github.com/lunrongchen",
        "Total": 4,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 4,
        "ForkEvent": 0
    }, {
        "login": "zhuohuwu0603",
        "avatar_url": "https://avatars.githubusercontent.com/u/5059601?v=3",
        "html_url": "https://github.com/zhuohuwu0603",
        "Total": 3,
        "PushEvent": 2,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 1
    }, {
        "login": "musofan",
        "avatar_url": "https://avatars.githubusercontent.com/u/3627571?v=3",
        "html_url": "https://github.com/musofan",
        "Total": 2,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 2
    }, {
        "login": "huangrui199126",
        "avatar_url": "https://avatars.githubusercontent.com/u/7934965?v=3",
        "html_url": "https://github.com/huangrui199126",
        "Total": 2,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 1,
        "ForkEvent": 1
    }, {
        "login": "lefttree",
        "avatar_url": "https://avatars.githubusercontent.com/u/4308680?v=3",
        "html_url": "https://github.com/lefttree",
        "Total": 1,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 1
    }, {
        "login": "LearnerChao",
        "avatar_url": "https://avatars.githubusercontent.com/u/12686455?v=3",
        "html_url": "https://github.com/LearnerChao",
        "Total": 1,
        "PushEvent": 1,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "slashgu",
        "avatar_url": "https://avatars.githubusercontent.com/u/10576952?v=3",
        "html_url": "https://github.com/slashgu",
        "Total": 1,
        "PushEvent": 1,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "DowsonChen",
        "avatar_url": "https://avatars.githubusercontent.com/u/16673306?v=3",
        "html_url": "https://github.com/DowsonChen",
        "Total": 1,
        "PushEvent": 1,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "imjerryyang",
        "avatar_url": "https://avatars.githubusercontent.com/u/4763490?v=3",
        "html_url": "https://github.com/imjerryyang",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "lukeyxu",
        "avatar_url": "https://avatars.githubusercontent.com/u/12939158?v=3",
        "html_url": "https://github.com/lukeyxu",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "rance",
        "avatar_url": "https://avatars.githubusercontent.com/u/800414?v=3",
        "html_url": "https://github.com/rance",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "antonylhz",
        "avatar_url": "https://avatars.githubusercontent.com/u/10188847?v=3",
        "html_url": "https://github.com/antonylhz",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "ruihanzou",
        "avatar_url": "https://avatars.githubusercontent.com/u/2655537?v=3",
        "html_url": "https://github.com/ruihanzou",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "kingstonwen",
        "avatar_url": "https://avatars.githubusercontent.com/u/10426618?v=3",
        "html_url": "https://github.com/kingstonwen",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "stevenmyan",
        "avatar_url": "https://avatars.githubusercontent.com/u/17054174?v=3",
        "html_url": "https://github.com/stevenmyan",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "stonemary",
        "avatar_url": "https://avatars.githubusercontent.com/u/17076716?v=3",
        "html_url": "https://github.com/stonemary",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "TonnyKen",
        "avatar_url": "https://avatars.githubusercontent.com/u/14304181?v=3",
        "html_url": "https://github.com/TonnyKen",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "kingnina",
        "avatar_url": "https://avatars.githubusercontent.com/u/9791058?v=3",
        "html_url": "https://github.com/kingnina",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "weiweiyixiao",
        "avatar_url": "https://avatars.githubusercontent.com/u/18205572?v=3",
        "html_url": "https://github.com/weiweiyixiao",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "lixinyue-luna",
        "avatar_url": "https://avatars.githubusercontent.com/u/5919731?v=3",
        "html_url": "https://github.com/lixinyue-luna",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "fyfyzzk",
        "avatar_url": "https://avatars.githubusercontent.com/u/1400347?v=3",
        "html_url": "https://github.com/fyfyzzk",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "xw65",
        "avatar_url": "https://avatars.githubusercontent.com/u/7842014?v=3",
        "html_url": "https://github.com/xw65",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "drmenghan",
        "avatar_url": "https://avatars.githubusercontent.com/u/10904078?v=3",
        "html_url": "https://github.com/drmenghan",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "destinyzcw",
        "avatar_url": "https://avatars.githubusercontent.com/u/13963249?v=3",
        "html_url": "https://github.com/destinyzcw",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "yuqinlear",
        "avatar_url": "https://avatars.githubusercontent.com/u/2876055?v=3",
        "html_url": "https://github.com/yuqinlear",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "Zestinc",
        "avatar_url": "https://avatars.githubusercontent.com/u/14096310?v=3",
        "html_url": "https://github.com/Zestinc",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "computingtek",
        "avatar_url": "https://avatars.githubusercontent.com/u/17346686?v=3",
        "html_url": "https://github.com/computingtek",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "chenfanggm",
        "avatar_url": "https://avatars.githubusercontent.com/u/1444480?v=3",
        "html_url": "https://github.com/chenfanggm",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "BitTigerDashBoardAgent",
        "avatar_url": "https://avatars.githubusercontent.com/u/18759677?v=3",
        "html_url": "https://github.com/BitTigerDashBoardAgent",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "AoLi12306",
        "avatar_url": "https://avatars.githubusercontent.com/u/8648409?v=3",
        "html_url": "https://github.com/AoLi12306",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }, {
        "login": "zzclynn",
        "avatar_url": "https://avatars.githubusercontent.com/u/5746653?v=3",
        "html_url": "https://github.com/zzclynn",
        "Total": 0,
        "PushEvent": 0,
        "PullRequestEvent": 0,
        "CreateEvent": 0,
        "ForkEvent": 0
    }]

}]);