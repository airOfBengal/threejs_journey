import * as THREE from 'three'
import gsap from 'gsap'

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
const aspectRatio = sizes.width / sizes.height

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
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

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

// const clock = new THREE.Clock()
const tick = () => {
    // const elapsedTime = clock.getElapsedTime()

    // // Update objects
    // camera.position.x = Math.cos(elapsedTime)
    // camera.position.y = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
