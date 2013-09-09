define(function () {
    'use strict';

    function Player() {
        var geometry = new THREE.TorusKnotGeometry(1, 0.5, 150, 18);
        var material = new THREE.MeshPhongMaterial();
        this.model = new THREE.Mesh(geometry, material);
        this.pos = new THREE.Vector3(1, 1, 2);
        this.model.position = this.pos;
        this.model.castShadow = true;
        this.model.receiveShadow = true;
        this.fired = false;
        this.firingCooldown = 0;
    }

    Player.prototype.update = function () {
        if (this.firingCooldown > 0) {
            this.firingCooldown -= 1;
        } else {
            this.fired = false;
        }
        this.model.position = this.pos;
    };

    Player.prototype.draw = function () {

    };

    Player.prototype.getModel = function () {
        return this.model;
    };

    Player.prototype.getPosition = function () {
        return this.pos;
    };

    Player.prototype.move = function (x, y) {
        this.pos.x += x;
        this.pos.y += y;
    };

    Player.prototype.hasFired = function () {
        return this.fired;
    };

    Player.prototype.firing = function () {
        this.firingCooldown = 50;
        this.fired = true;
    };

    return Player;
});
