'use strict';

let assert = require('assert');
let SourceComponent = require('./');

let text = 'Hello world! This is a testing string.';

describe('test', function(){
  it('loop through', function() {
    let source = new SourceComponent(text);

    let char = source.currentChar();
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== char) assert(false);
      char = source.nextChar();
    }
    assert(true);
  });

  it('current index', function() {
    let source = new SourceComponent(text);

    let char = source.currentChar();
    for (let i = 0; i < text.length; i++) {
      if (i !== source.currentIndex()) assert(false);
      char = source.nextChar();
    }
    assert(true);
  });

  it('peek offset one', function() {
    let source = new SourceComponent(text);
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== source.peek(i)) assert(false);
    }
    assert(true);
  });

  it('peek', function() {
    let source = new SourceComponent(text);
    for (let i = 0; i < text.length; i += i + 1) {
      if (text[i] !== source.peek(i)) assert(false);
    }
    assert(true);
  });

  it('char at', function() {
    let source = new SourceComponent(text);
    for (let i = 0; i < text.length; i += i + 1) {
      if (text[i] !== source.charAt(i)) assert(false);
    }
    assert(true);
  });

  it('skip', function() {
    let source = new SourceComponent(text);
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== source.currentChar()) assert(false);
      source.skip(1);
    }
    assert(true);
  });

  it('slice without end', function() {
    let source = new SourceComponent(text);
    if (text.slice(3, text.length) !== source.getSubstring(3)) {
      assert(false);
    }
    assert(true);
  });

  it('slice', function() {
    let source = new SourceComponent(text);
    if (text.slice(3, 5) !== source.getSubstring(3, 5)) {
      assert(false);
    }
    assert(true);
  });

  it('isNext at beginning', function() {
    let source = new SourceComponent(text);
    assert(source.isNext('Hello'));
  });

  it('getNext at beginning', function() {
    let source = new SourceComponent(text);
    assert(source.getNext(5) === 'Hello');
  });

  it('isNext at index', function() {
    let source = new SourceComponent(text);
    source.skip(6);
    assert(source.isNext('world!'));
  });

  it('getNext at index', function() {
    let source = new SourceComponent(text);
    source.skip(6);
    assert(source.getNext(5) === 'world');
  });

  it('isNext at ', function() {
    let source = new SourceComponent(text);
    source.skip(6);
    assert(source.isNext('Hello') === false);
  });

  it('check length', function() {
    let source = new SourceComponent(text);
    assert(source.length() === text.length);
  });

  it('is nunber', function() {
    assert(SourceComponent.isNumber(565) === true);
  });

  it('is nunber fail', function() {
    assert(SourceComponent.isNumber('5') === false);
  });

  it('is digit', function() {
    assert(SourceComponent.isDigit(6) === true);
  });

  it('is digit: number', function() {
    assert(SourceComponent.isDigit(656) === false);
  });

  it('is digit: alphabetic char', function() {
    assert(SourceComponent.isDigit('a') === false);
  });

  it('is digit: numeric char', function() {
    assert(SourceComponent.isDigit('5') === true);
  });

  it('is digit: numeric string', function() {
    assert(SourceComponent.isDigit('556') === false);
  });

  it('is digit: string', function() {
    assert(SourceComponent.isDigit('asdsa') === false);
  });

  it('is letter', function() {
    assert(SourceComponent.isLetter('a') === true);
  });

  it('is letter: string', function() {
    assert(SourceComponent.isLetter('aadsd') === false);
  });

  it('is letter: number', function() {
    assert(SourceComponent.isLetter(6565) === false);
  });

  it('is letter: digit', function() {
    assert(SourceComponent.isLetter(5) === false);
  });

  it('is letter or digit: letter', function() {
    assert(SourceComponent.isLetterOrDigit('f') === true);
  });

  it('is letter or digit: digit', function() {
    assert(SourceComponent.isLetterOrDigit(5) === true);
  });

  it('is letter or digit: number', function() {
    assert(SourceComponent.isLetterOrDigit(565) === false);
  });

  it('is letter or digit: string', function() {
    assert(SourceComponent.isLetterOrDigit('asd') === false);
  });

  it('is special char: string', function() {
    assert(SourceComponent.isSpecialCharacter('asd') === false);
  });

  it('is special char: string', function() {
    assert(SourceComponent.isSpecialCharacter('#65') === false);
  });

  it('is special char: number', function() {
    assert(SourceComponent.isSpecialCharacter(565) === false);
  });

  it('is special char: digit', function() {
    assert(SourceComponent.isSpecialCharacter(5) === false);
  });

  it('is special char: #', function() {
    assert(SourceComponent.isSpecialCharacter('#') === true);
  });

  it('is special char: !', function() {
    assert(SourceComponent.isSpecialCharacter('!') === true);
  });
});