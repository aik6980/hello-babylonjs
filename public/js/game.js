var engine;
window.onload = function () {
    var canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    engine.enableOfflineSupport = false;
    // simple scene
    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);
    engine.runRenderLoop(function () {
        scene.render();
    });
    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    //var camera = new BABYLON.TouchCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // attach the camera to the canvas
    camera.attachControl(canvas, false);
    // create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
    //var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    // move the sphere upward 1/2 of its height
    //sphere.position.y = 1;
    // load a model
    BABYLON.SceneLoader.ImportMesh('Cube.001', 'assets/', 'SPIDBOT1.babylon', scene, function (newMeshes, particleSystems, skeletons) {
        var player = newMeshes[0];
        player.position = new BABYLON.Vector3(0, 0, 0);
        console.log(newMeshes[0]);
    });
    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
};
//# sourceMappingURL=game.js.map