[![Build Status](https://travis-ci.org/ojlamb/todo_challenge.svg?branch=master)](https://travis-ci.org/ojlamb/todo_challenge)  [![Code Climate](https://codeclimate.com/github/ojlamb/todo_challenge/badges/gpa.svg)](https://codeclimate.com/github/ojlamb/todo_challenge)

# Todo Challenge - AngularJS
The purpose of this challenge was to learn the basics of test driven/behavior driven development using Angular JS.

##Getting started

```bash
git clone http://github.com/ojlamb/todo-challenge
cd todo_challenge
npm install
bower install
open index.html
```
##Running tests
```
webdriver-manager start
```
Open new terminal tab
```
http-server
```
Open new terminal tab
```
protractor test/e2e/conf.js
karma start test/karma.conf.js
```

##User stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

##Technology used

* AngularJS
* Karma - Unit testing
* Protractor - End to End feature testing

##V2 Work to be done

* Build a counter for number of tasks
* Add filter feature to query all, active and completed tasks
* Develop functionality to edit tasks
* Add styling
