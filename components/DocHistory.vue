<template >
    <section>
        <h2 class="title">Document History</h2>

        <ul class="doc-list">

          <li>
            <div class="doc-row-wrapper">
                <div class="doc-name"><span>Document Name</span></div>
                <span>changed on:</span>
                <div class="update-time"><strong><time>04/12/2019</time></strong></div>
                <div class="update-note"><strong><span>Some things were changed on this doc.</span></strong></div>
            </div>
          </li>
          <li>
            <div class="doc-row-wrapper">
                <div class="doc-name"><span>Document Name</span></div>
                <span>changed on:</span>
                <div class="update-time"><strong><time>04/12/2019</time></strong></div>
                <div class="update-note"><strong><span>Some things were changed on this doc.</span></strong></div>
            </div>
          </li>
          <li>
            <div class="doc-row-wrapper">
                <div class="doc-name"><span>Document Name</span></div>
                <span>changed on:</span>
                <div class="update-time"><strong><time>04/12/2019</time></strong></div>
                <div class="update-note"><strong><span>Some things were changed on this doc.</span></strong></div>
            </div>
          </li>
          <li>
            <div class="doc-row-wrapper">
                <div class="doc-name"><span>Document Name</span></div>
                <span>changed on:</span>
                <div class="update-time"><strong><time>04/12/2019</time></strong></div>
                <div class="update-note"><strong><span>Some things were changed on this doc.</span></strong></div>
            </div>
          </li>

        </ul>
    </section>
</template>

<script>

</script>

<style>
.doc-row-wrapper {
    display: flex;
    justify-content: space-between;
    font-style: italic;
}
.doc-list {
    list-style-type: none;
}
.update-time {
    color: orangered;
}
.update-note {
    color: limegreen;
}
.doc-list li {
    margin: 1em 0em;
}
.doc-list li:nth-child(even){
    background-color:aqua;
}

</style>