define([
    'THREE'
], function (
    THREE
) {
    'use strict';

    function Renderer() {
        this.container = document.getElementById('container');
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.container.offsetWidth / this.container.offsetHeight, 1, 4000);
        this.cube = null;
        this.animating = false;

        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 0, 3);

        var light = new THREE.DirectionalLight(0xffffff, 1.5);
        light.position.set(0, 0, 1);
        this.scene.add(light);

        var mapUrl = 'http://i.imgur.com/ghP9nKp.jpg';
        var map = THREE.ImageUtils.loadTexture(mapUrl);

        var material = new THREE.MeshPhongMaterial({ map: map });
        var geometry = new THREE.CubeGeometry(1, 1, 1);
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.rotation.x = Math.PI / 5;
        this.cube.rotation.y = Math.PI / 5;

        this.scene.add(this.cube);

        this.addHandler();
    }

    Renderer.prototype.addHandler = function () {
        var dom = this.renderer.domElement;
        dom.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    };

    Renderer.prototype.onMouseUp = function (event) {
        event.preventDefault();
        this.animating = !this.animating;
    };

    Renderer.prototype.update = function () {
        if (this.animating) {
            this.cube.rotation.y -= 0.01;
        }
    };

    Renderer.prototype.draw = function () {
        this.renderer.render(this.scene, this.camera);
    };

    return Renderer;
});
