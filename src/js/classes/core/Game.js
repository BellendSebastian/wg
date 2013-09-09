define([
    'CreatureFactory',
    'UpgradeFactory',
    'ItemFactory',
    'Renderer'
], function (
    CreatureFactory,
    UpgradeFactory,
    ItemFactory,
    Renderer
) {
    'use strict';

    function Game() {
        this.title = 'derp';

        this.renderer = new Renderer();
        this.cf = new CreatureFactory();
        this.if = new ItemFactory();
        this.uf = new UpgradeFactory();

        this.player = this.cf.spawnPlayer();

        this.entities = [];
        this.entities.push(this.player);

        this.loop();
    }

    Game.prototype.loop = function () {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop.bind(this));
    };

    Game.prototype.draw = function () {
        this.renderer.draw();
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    };

    Game.prototype.update = function () {
        this.renderer.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    };

    return Game;
});
