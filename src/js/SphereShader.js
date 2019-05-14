import * as THREE from 'three';
var glsl = require('glslify');

class SphereShader {

    constructor() {
        this.mesh;
        this.uniforms
        this.bind();
        this.createMesh();
    }

    createMesh() {
        this.uniforms = {
            colorB: { type: 'vec3', value: new THREE.Color(0xACB6E5) },
            colorA: { type: 'vec3', value: new THREE.Color(0x74ebd5) },
            u_time: { type: 'f', value: 0. }
        }

        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 100, 100), new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            transparent: true,
            fragmentShader: glsl.file("../shaders/frag.glsl"),
            vertexShader: glsl.file("../shaders/vert.glsl"),
        }));
    }

    bind() {
        this.createMesh = this.createMesh.bind(this)
    }
}

export { SphereShader as default }