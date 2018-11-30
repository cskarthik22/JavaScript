const team = {
    members: ['John', 'Alex'],
    teamName: 'Developers',
    teamSummary: function() {
        var self = this;
        return self.members.map(function(member){
          return `${member} is a ${self.teamName}`;
        });
    }
}

console.log(team.teamSummary());

const team_new = {
    members: ['John', 'Alex'],
    teamName: 'Developers',
    teamSummary: function() {
        //var self = this;
        return this.members.map((member) => {
          return `${member} is a ${this.teamName}`;
        });
    }
}


console.log(team_new.teamSummary());