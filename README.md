函数调用 this 指向的问题

+ 你只需要记住谁调用的， this 就指向谁。

+ 对于 () => {} 的匿名函数来说，this 会提前绑定，它的	this 是从上一个作用域（父作用域）里面拿到的。

function 关键字定义函数

+ function 定义函数时，会存在 prototype 属性，prototype.constructor 属性是函数自身

```javascript
function Person () {}
console.log(Person.prototype.constructor);  // ƒ Person () {}
```

+ new 一个实例时，将会调用 prototype.constructor 的方法，返回 { __proto__: prototype } 挂到新的实例上。 