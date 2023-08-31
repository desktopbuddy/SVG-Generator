const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    test('renders Circle', () => {
      const shape = new Circle("green","hii","white");
      expect(shape.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hii</text></svg>`);
    });
  });

  describe('Square', () => {
    test('renders Square', () => {
      const shape = new Square("yellow","sup","red");
      expect(shape.render()).toEqual(`<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="15" y="15" fill="yellow"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="red">sup</text></svg>`);
    });
  });

  describe('Triangle', () => {
    test('renders Triangle', () => {
      const shape = new Triangle("brown","poe","pink");
      expect(shape.render()).toEqual(`<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class"triangle" fill="brown"/><text x="250" y="300" font-size="60" text-anchor="middle" fill="pink">poe</text></svg>`);
    });
  });