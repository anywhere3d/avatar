
//  app.js

    var debugMode;
    var mouse = new THREE.Vector2();

    var rendererHalfWidth = renderer.domElement.width * 0.5;
    var rendererHalfHeight = renderer.domElement.height * 0.5;

    localPlayer.holder.visible = false;
    localPlayer.controller.center.set(0,1,0);
    localPlayer.controller.direction = Math.PI;

    animate();

    function animate(){

        windowAnimationFrameRequestID = requestAnimationFrame( animate );

        render();

        update();

    }

//  Event Listeners.

    $(window).on( "resize", onWindowResize );

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( container.clientWidth, container.clientHeight );
        rendererHalfWidth = renderer.domElement.width * 0.5;
        rendererHalfHeight = renderer.domElement.height * 0.5;
    }

    $(window).on( "mousemove", onMouseMove );

    function onMouseMove( event ) {
        mouse.x = ( event.clientX - rendererHalfWidth );
        mouse.y = ( event.clientY - rendererHalfHeight );
    }

