import * as THREE from 'three';
import SphereShader from './SphereShader';

class ThreeScene {

    constructor() {
        this.camera
        this.scene
        this.renderer
        this.sphere
    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 5)

        this.sphere = new SphereShader();
        this.scene.add(this.sphere.mesh)

        this.bind()
    }

    update() {
        this.renderer.render(this.scene, this.camera)
        this.sphere.uniforms.u_time.value++;
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix();
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        window.addEventListener('resize', this.resizeCanvas)

    }
}

export { ThreeScene as default }