import * as THREE from 'three'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object
const myGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const mesh = new THREE.Mesh(myGeometry, material)
// mesh.position.set(0.7, -0.6, 1)
// mesh.scale.set(2, 0.25, 0.5)
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
)
renderer.setSize(sizes.width, sizes.height)

let time = Date.now()
const tick = () => {
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    // Update objects
    mesh.rotation.y += 0.001 * deltaTime
    mesh.rotation.x += 0.001 * deltaTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
