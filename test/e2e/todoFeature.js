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
   })
});
