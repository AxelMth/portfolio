<script lang="ts" setup>
defineProps<{ title: string; close: () => void }>();
</script>

<template>
    <div class="container">
        <div class="header">
            {{ title }}
            <img src="/close-button.png" @click="close">
        </div>
        <div class="body">
          <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    div.container {
        display: block;
        border-radius: 5px;
        margin: 1rem;

        background: #c0c0c0;
        border: 4px #000 outset;

        font-weight: bold;
        touch-action: none;

        position: absolute;
        height: 600px;
        width: 560px;
        top: 10vh;
        left: 10vw;
    }
    div.header {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: bold;

        height: 30px;
        line-height: 25px;
        color: #fff;
        background: #9d0ffd;
        background: -moz-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
        background: -webkit-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
        background: linear-gradient(to right, #9d0ffd 0%, #e60efe 100%);
        width: 100%;
    }
    div.body {
        background: #fff;
        padding: 10px;
        height: calc(100% - 30px);
        overflow-y: scroll;
    }
    img {
        cursor: pointer;
    }
</style>

<!-- <div class="resize-drag"><a href="#" id="start">
    <div class="top">
      <p id="toped">My Works</p>
      <img id="close" src="img/X.png">
    </div>
    </a><div class="undrag"><a href="#" id="start">
      </a><a class="linkTop" href="#">File</a>
      <a class="linkTop" href="#">Edit</a>
      <a class="linkTop" href="#">View</a>
      <a class="linkTop" href="#">Help</a>

      <div class="prez">
        <a href="#" class="icon btn-direction" data-direction-project="p1" data-top="Canvas">
          <img class="hover" src="img/canvasHover.png" alt="canvas">
          <img src="img/canvas.png" alt="canvas">
          <p>Canvas</p>
        </a>
        <a href="#" class="icon btn-direction" data-direction-project="p2" data-top="Morphing">
          <img class="hover" src="img/morphingHover.png" alt="morphing">
          <img src="img/morphing.png" alt="morphing">
          <p>Morphing</p>
        </a>
        <a href="#" class="icon btn-direction" data-direction-project="p3" data-top="Personal Portfolio">
          <img class="hover" src="img/portfolioHover.png" alt="portfolio">
          <img src="img/portfolio.png" alt="personal portfolio">
          <p>Portfolio</p>
        </a>
        <a href="#" class="icon btn-direction" data-direction-project="p4" data-top="Circle Gallery">
          <img class="hover" src="img/portfolioHover.png" alt="Circle Gallery">
          <img src="img/portfolio.png" alt="">
          <p>Circle Gallery</p>
        </a>
      </div>

      <div class="prez prez-2" id="p1">
        <a href="#" class="btn btn-back">Back</a>
        <br>
        <br>
        <h3>What is canvas ?</h3>
        <p>
          "The Canvas API provides a means for drawing graphics via
          JavaScript and the HTML &lt;canvas&gt; element. Among other
          things, it can be used for animation, game graphics, data
          visualization, photo manipulation, and real-time video processing.
          <br>
          The Canvas API largely focuses on 2D graphics. The WebGL API,
          which also uses the &lt;canvas&gt; element, draws
          hardware-accelerated 2D and 3D graphics."

          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">Canvas MDN</a>
        </p>
        <br><br>
        <img src="img/canvas/canvas1.gif">
        <p><b>First test :</b> collision creation with the edges</p>
        <br>
        <a href="canvas/Test-2/index.html" target="_blank" class="btn">Try</a><br><br><br>

        <img src="img/canvas/canvas2.gif">
        <p><b>Second test :</b> make the balls react with the cursor</p>
        <br>
        <a href="canvas/Test-3/index.html" target="_blank" class="btn">Try</a><br><br><br>

        <img src="img/canvas/canvas3.gif">
        <p><b>Third test :</b> create a new cursor with his path</p>
        <br>
        <a href="canvas/Test-4/index.html" target="_blank" class="btn">Try</a><br><br><br>

        <img src="img/canvas/canvas4.PNG">
        <p><b>Fourth test :</b> Random Circles with No Overlap</p>
        <br>
        <a href="canvas/Test-5/index.html" target="_blank" class="btn">Try</a><br><br><br>

        <img src="img/canvas/canvas5.gif">
        <p><b>Fifth test :</b> collision between the balls</p>
        <br>
        <a href="canvas/Test-6/index.html" target="_blank" class="btn">Try</a><br><br>
        <br><br>
      </div>

      <div class="prez prez-2" id="p2">
        <a href="#" class="btn btn-back">Back</a>
        <br>
        <br>
        <h3>What is morphing ?</h3>
        <p>
          "Morphing is a special effect in motion pictures and animations
          that changes (or morphs) one image or shape into another through a
          seamless transition."
          <a href="https://en.wikipedia.org/wiki/Morphing" target="_blank">Wikipédia Morphing</a>
        </p>
        <br><br>

        <img src="img/Morphing/MorphingSVG.gif">
        <p>
          <b>First test :</b> Create Morphing with anime js by juliangarnier
          Creates transition between two svg shapes
        </p>
        <br>
        <a href="morphing/MorphingSVG.html" target="_blank" class="btn">Try</a><br><br>

        <img src="img/Morphing/MorphinCanvas.gif">
        <p>
          <b>Thousandth test :</b> After a lot, a lot, a lot of testing I
          finally succeeded created random Morphing shape in canvas
        </p>
        <br>
        <a href="morphing/MorphingCanvas.html" target="_blank" class="btn">Try</a><br><br>
        <br><br>
      </div>

      <div class="prez prez-2" id="p3">
        <a href="#" class="btn btn-back">Back</a>
        <br>
        <br>
        <h3>My Personal portfolio</h3>
        <p>
          This is my own portfolio.<br>
          I created it to present all my work as this Terminal Portfolio.
          <a href="http://valentinsld.fr/" target="_blank">http://valentinsld.fr/</a>
        </p>
        <br><br>

        <img src="img/portfolio.gif">
        <br><br>
      </div>

      <div class="prez prez-2" id="p4">
        <a href="#" class="btn btn-back">Back</a>
        <br>
        <br>
        <h3>Circle Colored Gallery</h3>
        <p>
          Gallery of works of art classified by chromatic order.
        </p>
        <br>
        <img src="img/Colormuseum.gif"><br>
        <br>
        <a href="http://valentinsld.fr/CircleColoredGallery/" target="_blank" class="btn">Try</a><br><br>
        <br>
      </div>

      <div class="bottom">
        <p class="b1">
          4 items, select a project
        </p>
        <p class="b2"></p>
      </div>
    </div>
  </div> -->