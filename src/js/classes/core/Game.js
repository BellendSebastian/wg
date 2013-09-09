define([
    'CreatureFactory',
    'UpgradeFactory',
    'ItemFactory',
    'Renderer',
    'Input',
    'Projectile',
    'TestWorld'
], function (
    CreatureFactory,
    UpgradeFactory,
    ItemFactory,
    Renderer,
    Input,
    Projectile,
    TestWorld
) {
    'use strict';

    function Game() {
        this.title = 'derp';

        this.renderer = new Renderer();
        this.input = new Input();
        this.cf = new CreatureFactory();
        this.itf = new ItemFactory();
        this.uf = new UpgradeFactory();
        this.world = new TestWorld();

        this.player = this.cf.spawnPlayer();

        this.entities = [];
        this.entities.push(this.player);
        this.renderer.scene.add(this.player.getModel());

        this.renderer.scene.add(this.world.getModel());
        this.loop();
    }

    Game.prototype.loop = function () {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop.bind(this));
    };

    Game.prototype.draw = function () {
        this.renderer.draw();
    };

    Game.prototype.update = function () {
        this.renderer.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });

        var projectile = null;
        if (this.input.isPressed('65')) {
            this.player.move(-0.1, 0);
        }
        if (this.input.isPressed('68')) {
            this.player.move(0.1, 0);
        }
        if (this.input.isPressed('83')) {
            this.player.move(0, -0.1);
        }
        if (this.input.isPressed('87')) {
            this.player.move(0, 0.1);
        }
        if (this.input.isPressed('37')) {
            this.player.model.rotation.y -= 0.1;
        }
        if (this.input.isPressed('39')) {
            this.player.model.rotation.y += 0.1;
        }
        if (this.input.isPressed('38')) {
            this.player.model.rotation.x -= 0.1;
        }
        if (this.input.isPressed('40')) {
            this.player.model.rotation.x += 0.1;
        }
        if (this.input.isPressed('37') && !this.player.hasFired()) {
            projectile = new Projectile(this.player.getPosition(), -0.3, 0, -0.03);
            this.entities.push(projectile);
            this.renderer.scene.add(projectile.getModel());
            this.player.firing();
        }
        if (this.input.isPressed('39') && !this.player.hasFired()) {
            projectile = new Projectile(this.player.getPosition(), 0.3, 0, -0.03);
            this.entities.push(projectile);
            this.renderer.scene.add(projectile.getModel());
            this.player.firing();
        }
        if (this.input.isPressed('38') && !this.player.hasFired()) {
            projectile = new Projectile(this.player.getPosition(), 0, 0.3, -0.03);
            this.entities.push(projectile);
            this.renderer.scene.add(projectile.getModel());
            this.player.firing();
        }
        if (this.input.isPressed('40') && !this.player.hasFired()) {
            projectile = new Projectile(this.player.getPosition(), 0, -0.3, -0.03);
            this.entities.push(projectile);
            this.renderer.scene.add(projectile.getModel());
            this.player.firing();
        }
    };

    return Game;
});
