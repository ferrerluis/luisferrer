/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        url: 'https://api.github.com/users/ferrerluis/repos',
        itemName: 'project'
    });

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };

    Project.all($http, $scope.page, function (projects) {
        $scope.page.projects = projects.exclude(function (value) {
            return value.title === "Blog";
        });
    });

});
