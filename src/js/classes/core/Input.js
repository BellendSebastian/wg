define(function () {
    'use strict';

    function Input() {
        this.keys = [];
        document.addEventListener('keydown', this.keyDown.bind(this), false);
        document.addEventListener('keyup', this.keyUp.bind(this), false);
    }

    Input.prototype.keyDown = function (event) {
        event.preventDefault();
        this.keys[event.keyCode] = true;
    };

    Input.prototype.keyUp = function (event) {
        event.preventDefault();
        this.keys[event.keyCode] = false;
    };

    Input.prototype.isPressed = function (keyCode) {
        return this.keys[keyCode];
    };

    return Input;
});
