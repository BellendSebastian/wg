define(function () {
    'use strict';

    function Upgrade(name) {
        this.name = name;
        this.modifier = 0;
        this.multipler = 0;
    }

    Upgrade.prototype.setModifier = function (amt) {
        this.modifier = amt;
        return this;
    };

    Upgrade.prototype.getModifier = function () {
        return this.modifier;
    };

    Upgrade.prototype.setMultiplier = function (amt) {
        this.multipler = amt;
        return this;
    };

    return Upgrade;
});
