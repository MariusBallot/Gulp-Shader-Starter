      uniform vec3 colorA; 
      uniform vec3 colorB; 
      uniform float u_time;
      varying vec3 vUv;

      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), sin(u_time/10.)*vUv.x*vUv.y);
      }