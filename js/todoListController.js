todoList.controller('todoListController', [function() {
  var self = this;
  self.listFilter = { done: false };
  self.filter = "Active";
  self.tasks = [];
  self.addTask = function() {
    self.tasks.push({'todo':self.taskInput, 'done':false});
    self.taskInput="";
  };
  self.clearCompleted = function() {
    self.tasks = self.tasks.filter(function(item){
      return !item.done;
    })
  }
}]);
