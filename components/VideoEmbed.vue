<template v-slot:three>
    <div class="vid-wrap">
      <h2 class="vid-heading title">Video Embed Component</h2>
      <h3 class="vid-subheading subTitle">Video subheading</h3>

        <!-- IMAGE POSITIONING CLASSES ADDED HERE
            default: image starts on right,
            .img-left,
            .img-bottom,
            .img-top            
         -->
      <div class="vid-content">

        <aside class="vid-image">
          <figure>
              <!-- EMBED CODE HERE -->
            <iframe src="https://player.vimeo.com/video/52267950" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </figure>
        </aside>

        <article class="vid-text ">
          Chase pillage sheet Sink me fathom scuttle parrel yo-ho-ho league keelhaul. Wherry ho chandler provost six
          pounders pink code of conduct Davy Jones' Locker swab line. Execution dock Letter of Marque bilge rat hang the
          jib Plate Fleet pinnace take a caulk mizzen Sink me broadside.

          Ballast mizzenmast ahoy run a shot across the bow fathom Letter of Marque hornswaggle snow no prey, no pay
          gangplank. Broadside hang the jib Shiver me timbers clipper transom loaded to the gunwalls barkadeer pinnace
          Letter of Marque reef. Pressgang Chain Shot jib red ensign cackle fruit Davy Jones' Locker jack crow's nest
          gunwalls splice the main brace.

          Jack Ketch Arr list case shot mizzenmast sloop yardarm sutler draught rigging. Scallywag pirate crow's nest
          Admiral of the Black pressgang scourge of the seven seas carouser squiffy black spot cable. Six pounders
          transom Jack Tar topsail tack brig pirate man-of-war Sail ho crow's nest.
        </article>


        

      </div>

    </div>
</template>
 
<script>
    
</script>

<style>
.vid-image iframe {
    min-width: 100%;    
    max-width: 25vw;
}
.vid-text {
    padding: .5em .5em;
    line-height: 1.6em
}
.vid-heading {
    text-align:left
}
.vid-subheading {
    text-align:left;
    padding-left: 1.5em;
}
.vid-content {
    display: flex;
    flex-direction: column;
}
.vid-content figure {
    margin-top: .75em;
}
.img-left {
    flex-direction: row-reverse;
}
.img-bottom {
    flex-direction: column;
}
.img-bottom figure {
    margin-left: 1.5em;
}
.img-top {
    flex-direction: column-reverse;
}
.img-top figure {
    margin-left: 1em;
}
.vid-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.caption {
    font-style: italic;
}
@media only screen and (max-width: 500px) {
    .vid-content {
        display: flex;
        flex-direction: column;
        margin-bottom: .25em;
    }
    .vid-image {
        text-align: center;
    }
    
}

</style>