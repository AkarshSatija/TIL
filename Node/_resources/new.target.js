function Foo() {
  if (!new.target) throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}


new Foo(); // logs "Foo instantiated with new"


Foo(); // throws "Foo() must be called with new"
