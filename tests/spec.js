describe('To Do App', function() {

    //define all variables here
    var TodoInput = element(by.xpath('/html/body/app-root/app-todo/section/header/input'));
    //Before executing any tests, get the URL of the page to be tested using Protractor
    beforeEach(() => {
        browser.get('http://localhost:4200/all');
    });

    //checking whether page title is correct
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Todos');
    });

    //checking the values of text inside the footer links
    it('should check the footer link texts', function checkFooterTexts() {
        element(by.id('All-nav')).getText().then(function(text) {
            expect(text).toEqual('All');
        });
        element(by.id('Pending-nav')).getText().then(function(text) {
            expect(text).toEqual('Pending');
        });
        element(by.id('Completed-nav')).getText().then(function(text) {
            expect(text).toEqual('Completed');
        });
    });

    //checking whether the value is being read when input
    it('should read the value from an input', function() {
        TodoInput.sendKeys('Wash Utensils');
        expect(TodoInput.getAttribute('value')).toEqual('Wash Utensils');
    });

    //checking to see if list count is proper on start of app
    it('should have correct number of start elements in list', function() {
        let list = element.all(by.css('.todo-list li'));
        expect(list.count()).toBe(4);
    });

    it('should map index to item', function() {
        let items = element.all(by.css('.todo-list li')).map(function(elm, index) {
            return {
              index: index,
              text: elm.getText()
            };
          });
          expect(items).toEqual([
            {index: 0, text: 'Grocery shopping'},
            {index: 1, text: 'Laundry'},
            {index: 2, text: 'Clean house'},
            {index: 3, text: 'Pay bills'}
          ]);
    
    });
    
});