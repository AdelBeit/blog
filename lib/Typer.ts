'use-client'
export default class Typer {
  inputText: string;
  outputText: string = "";
  element: HTMLSpanElement;
  cursorElement: HTMLSpanElement;
  typerCursor: number = 0;
  cursorCharacter: string = ".";
  typeDelay: number = 50;
  sentenceDelay: number = 400;
  cursorBlinkDelay: number = 800;
  timeout: number;
  typerInterval: number;
  cursorBlinkInterval: number;
  doneTyping: Promise<boolean>;
  doneTypingResolve: (value?: boolean | PromiseLike<boolean>) => void;

  constructor(element: HTMLSpanElement, text: string) {
    this.element = element;
    this.inputText = text;
    this.doneTyping = new Promise<boolean>((res) => {
      this.doneTypingResolve = res;
    });
  }

  start() {
    this.typerInterval = window.setInterval(() => {
      this.type();
    }, this.typeDelay);
    this.cursorBlinkInterval = window.setInterval(() => {
      this.blinkingCursor();
    }, this.cursorBlinkDelay);
    return this.doneTyping;
  }

  type() {
    if (this.typerCursor >= this.inputText.length) {
      this.stopTyping();
      const spanElement = document.createElement('span');
      this.cursorElement = spanElement;
      spanElement.textContent = this.cursorCharacter;
      this.element.appendChild(spanElement);
      this.doneTypingResolve(true);
      return;
    }

    const currentChar = this.inputText[this.typerCursor];
    if (currentChar === ".") {
      clearInterval(this.typerInterval);
      this.timeout = window.setTimeout(() => {
        this.typerInterval = window.setInterval(() => {
          this.type();
        }, this.typeDelay);
        clearTimeout(this.timeout);
      }, this.sentenceDelay);
    }

    this.outputText += currentChar;
    this.element.innerHTML = this.outputText;
    this.typerCursor++;
  }

  blinkingCursor() {
    this.cursorElement.classList.toggle('opacity-0');
  }

  stop() {
    this.stopTyping();
    this.stopBlinking();
  }

  stopBlinking() {
    clearInterval(this.cursorBlinkInterval);
  }

  stopTyping() {
    clearInterval(this.typerInterval);
  }
}
