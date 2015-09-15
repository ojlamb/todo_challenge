describe('todoListController', function() {
  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoListController');
  }));

  it('initialises with empty task input', function() {
    expect(ctrl.taskInput).toBeUndefined();
  });

  it('initialises with no current tasks', function() {
    expect(ctrl.tasks.length).toBe(0);
  });

  it('displays the task', function() {
    ctrl.taskInput = 'hello';
    ctrl.addTask();
    expect(ctrl.tasks[0]).toEqual({ 'todo' : 'hello', 'done' : false });
  });

  it('can clear completed tasks', function() {
    ctrl.tasks = [{ 'todo' : "Take out the garbage", 'done' :true },{ 'todo' :
    "Take out the garbage", 'done' :false }]
    ctrl.clearCompleted();
    expect(ctrl.tasks).toEqual([{ 'todo' : "Take out the garbage", 'done' :false }])
  });
});
