"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(color, side) {
        this.color = color;
        this.side = side;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
exports.Square = Square;
