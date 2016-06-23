angular.module(INCLING_MODULE)

    .controller('ClassroomController', ['ClassroomService', '$state', function(ClassroomService, $state) {

        var self = this;

        // Particular classroom - gets assigned whenever user visits classroom detail view
        self.classroom = getClassroom;

        // Fetch list of classrooms from API when controller gets instantiated
        self.classrooms = ClassroomService.query();


        /**
         * Helper method to watch classroom id change (when user visits classroom detail view)
         * @return {int|undefined} the classroomId or undefined if non provided
         */
        function getClassroom() {
            return $state.params.classroomId;
        }

    }]);
