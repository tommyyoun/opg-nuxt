<template >
    <section>
        <h2 class="title">Document History</h2>

        <ul class="doc-list">

          <li>
            <div class="doc-row-wrapper">
                <div class="doc-name"><strong>Document Name</strong></div>
                <div><span>changed on:</span></div>
                <div class="update-time"><strong><time>04-12-2019</time></strong></div>
                <div class="update-note"><strong><span>Some things were changed on this doc.Some things were changed on this doc.Some things were changed on this doc.Some things were changed on this doc.Some things were changed on this doc.Some things were changed on this doc.Some things were changed on this doc.</span></strong></div>
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
    justify-content: flex-start;
    font-style: italic;
    flex-wrap: wrap;
}
.doc-list {
    list-style-type: none;
}
.doc-name {
    margin-right: 1.5rem;
}
.doc-name + div {
    margin-right: 1.5rem;
}
.update-time {
    color: orangered;
    margin-right: 1.5rem;
    
}
.update-note {
    color: forestgreen;
    max-width: 50%;
}
.doc-list li {
    margin: 1em 0em;
}
.doc-list li:nth-child(even){
    background-color:aqua;
}

@media only screen and (max-width: 576px) {
    .doc-row-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-style: italic;
        margin-right: 2rem;
    }
    .doc-name {
        border-top: 1px dashed black;
        padding-top: .5rem;
    }
    .update-note {
        max-width: 100%;
        padding-bottom: .5rem;
        border-bottom: 1px dashed black;
    }
}

</style>