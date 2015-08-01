/// <reference path="../typings/bundle.d.ts"/>
import Foo from './foo';
var foo = new Foo();
var bar = require('./bar');
bar();

foo.sayHello();
