class Shape {
    constructor(type, color) {
        this.type = type; 
        this.color = color; 
    }

    render() {
        return `<${this.type} fill="${this.color}" />`;
    }
}

module.exports = Shape; 