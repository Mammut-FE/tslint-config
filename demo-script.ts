export class A {
  name: string = 'abc';
  constructor() {
    this.name = 'a';
    const foo = {
      a: 'string',
    };
    const bar = {
      ...foo,
    };

    bar && this.doSomething();
  }

  doSomething() { }
}

export class B {

}
