define([

], function (

) {
    'use strict';

    function Renderer() {
        this.container = document.getElementById('container');
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.container.offsetWidth / this.container.offsetHeight, 1, 4000);
        this.animating = false;

        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.renderer.shadowCameraNear = 3;
        this.renderer.shadowCameraFar = this.camera.far;
        this.renderer.shadowCameraFov = 50;

        this.renderer.shadowMapBias = 0.0039;
        this.renderer.shadowMapDarkness = 0.5;
        this.renderer.shadowMapWidth = 1024;
        this.renderer.shadowMapHeight = 1024;
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 0, 20);

        var light = new THREE.SpotLight(0xffffff, 0.8);
        light.angle = Math.PI/2;
        light.castShadow = true;
        light.position.set(0, 0, 100);
        this.scene.add(light);

        this.addHandler();
    }

    Renderer.prototype.addHandler = function () {
        var dom = this.renderer.domElement;
    };

    Renderer.prototype.onMouseUp = function (event) {
        event.preventDefault();
    };

    Renderer.prototype.update = function () {

    };

    Renderer.prototype.draw = function () {
        this.renderer.render(this.scene, this.camera);
    };

    return Renderer;
});
