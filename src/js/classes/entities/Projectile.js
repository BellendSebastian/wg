define(function () {
    'use strict';

    function Projectile(vector, velX, velY, velZ) {
        this.pos = new THREE.Vector3(vector.x, vector.y, vector.z);
        var geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);
        var material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.model = new THREE.Mesh(geometry, material);
        this.model.position = this.pos;
        this.model.castShadow = true;
        this.modelreceiveShadow = true;
        this.velocity = {
            x: velX,
            y: velY,
            z: velZ
        };
    }

    Projectile.prototype.update = function () {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
        if (this.pos.z - this.velocity.z > 0) {
            this.pos.z += this.velocity.z;
        }
        if (this.velocity.x > this.velocity.y) {
            this.model.rotation.x += 0.3;
        } else {
            this.model.rotation.y += 0.3;
        }
        this.model.position = this.pos;
    };

    Projectile.prototype.getModel = function () {
        return this.model;
    };

    return Projectile;
});
