<template v-slot:three>
    <div class="article-wrap">
      <h2 class="article-heading">Article Title</h2>
      <div class="article-content">
        <article class="article-text">
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


        <aside class="article-image">
          <figure>
            <img src="https://www.fillmurray.com/640/360" alt="Bill Murray looking dapper">
            <figcaption class="caption">An image of Bill Murray</figcaption>
          </figure>
        </aside>
      </div>

    </div>
</template>

<script>
    
</script>

<style>
.article-image img {
    min-width: 15vw;    
    max-width: 25vw;
}
.article-text {
    padding: 1em 1.5em ;
}
.article-heading {
    grid-area: heading;
    text-align:left
}
.article-content {
    display: flex;
}
.img-bottom {
    flex-direction: column;
}
.article-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
}
.caption {
    font-style: italic;
}

</style>