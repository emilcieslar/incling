angular.module(INCLING_MODULE)

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        // If state doesn't exist, go default /classrooms
        $urlRouterProvider.otherwise('/classrooms')

        // -------------------------------------> STATES
        $stateProvider

            // Classroom list state
            .state('classrooms', {
                url: '/classrooms',
                templateUrl: './templates/classrooms.html',
                controller: 'ClassroomController',
                controllerAs: 'ClassroomCtrl'
            })

            // Particular classroom state
            .state('classrooms.detail', {
                url: '/:classroomId',
                templateUrl: './templates/classroom-detail.html'
            })


    }])
