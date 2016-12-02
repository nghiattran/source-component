'use strict';

module.exports = class {
  constructor(html) {
    this.html = html;
    this.index = 0;
  }

  currentChar() {
    return this.html[this.index];
  }

  currentIndex() {
    return this.index;
  }

  charAt(index) {
    return this.html[index];
  }

  nextChar() {
    this.index++;
    if (this.index >= this.html.length) return undefined
    return this.currentChar();
  }

  getSubstring(start, end = this.html.length) {
    return this.html.slice(start, end);
  }

  peek(offset = 1) {
    return this.html[this.index + offset];
  }

  skip(offset) {
    this.index += offset;
  }

  getNext(offset) {
    return this.getSubstring(this.index, this.index + offset);
  }

  isNext(substring) {
    for (let i = 0; i < substring.length; i++) {
      if (this.peek(i) !== substring[i]) return false;
    }
    return true;
  }

  length() {
    return this.html.length;
  }
}