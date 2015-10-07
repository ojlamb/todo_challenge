describe('todoList', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('adds task', function() {
     element(by.model('todoCtrl.taskInput')).sendKeys('Walk the dog');
     element(by.className('btn')).click();
     expect(element(by.binding('item.todo')).getText()).toEqual('Walk the dog');
   });

   it('does not add task if description missing', function() {
     element(by.model('todoCtrl.taskInput')).sendKeys('');
     element(by.className('btn')).click();
     expect(browser.isElementPresent(by.binding('item.todo'))).toBe(false);
   });

   it('deletes task', function(){
     element(by.model('todoCtrl.taskInput')).sendKeys('Walk the dog');
     element(by.className('btn')).click();
     element(by.className('checkDone')).click();
     element(by.className('clearBtn')).click();
     expect(element.all(by.binding('item.todo')).getText()).toNotContain('Walk the dog');
   });

   it('filters completed tasks', function(){
     element(by.model('todoCtrl.taskInput')).sendKeys('Walk the dog');
     element(by.className('btn')).click();
     element(by.className('checkDone')).click();
     element(by.className('filter-active')).click();
     expect(element.all(by.binding('item.todo')).getText()).toNotContain('Walk the dog');
   });

   it('shows tasks still active', function(){
     element(by.model('todoCtrl.taskInput')).sendKeys('Walk the dog');
     element(by.className('btn')).click();
     element(by.className('checkDone')).click();
     element(by.model('todoCtrl.taskInput')).sendKeys('Wash the car');
     element(by.className('btn')).click();
     element(by.className('filter-active')).click();
     expect(element.all(by.binding('item.todo')).getText()).toNotContain('Walk the dog');
     expect(element(by.binding('item.todo')).getText()).toEqual('Wash the car');
   });

   it('shows tasks completed', function(){
     element(by.model('todoCtrl.taskInput')).sendKeys('Walk the dog');
     element(by.className('btn')).click();
     element(by.className('checkDone')).click();
     element(by.model('todoCtrl.taskInput')).sendKeys('Wash the car');
     element(by.className('btn')).click();
     element(by.className('filter-complete')).click();
     expect(element.all(by.binding('item.todo')).getText()).toNotContain('Wash the car');
     expect(element(by.binding('item.todo')).getText()).toEqual('Walk the dog');
   });

});
