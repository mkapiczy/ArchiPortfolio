angular.module('archiApp')

.filter('projectsFilter', [function() {
    return function(projects, selectedType) {
        if (angular.isUndefined(projects) || angular.isUndefined(selectedType) || angular.equals(selectedType.id, 0)) {
            return projects;
        } else {
            var filteredProjects = [];
            angular.forEach(projects, function(project) {
                if (angular.equals(project.type.id, selectedType.id)) {
                    filteredProjects.push(project);
                }
            });
            return filteredProjects;
        }
    };
}]);
