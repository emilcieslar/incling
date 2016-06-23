angular.module(INCLING_MODULE)

    .factory('ClassroomService', ['$resource', 'INCLING_CONFIG', function($resource, INCLING_CONFIG) {

        return $resource(INCLING_CONFIG.inclingAPIURL + 'incling/classrooms/:id');

    }]);
