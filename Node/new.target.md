# new.target

The *new.target* property lets you detect whether a function or constructor was called using the `new` operator.


```
function Foo() {
  if (!new.target) throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}


new Foo(); // logs "Foo instantiated with new"


Foo(); // throws "Foo() must be called with new"
```



REF:
------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
