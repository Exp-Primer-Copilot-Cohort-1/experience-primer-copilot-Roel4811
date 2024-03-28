function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberControlelr',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '-'
        }
    }
}