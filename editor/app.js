
//  app.js

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
    }
