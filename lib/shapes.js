class Shape {
    constructor(color,text,textcolor){
        this.color = color;
        this.text = text;
        this.textcolor = textcolor;
    }
    }

    class Circle extends Shape {
        render(){
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
        }
}