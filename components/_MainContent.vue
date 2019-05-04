<template>
    <div class="col-xs-12 col-sm-9">
        <p id="side-btn" class="visible-xs">
          <button type="button" class="btn btn-primary" data-toggle="offcanvas">Chapters</button>
        </p>

        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>        
        <slot name="four"></slot>        
        <slot name="five"></slot>        
        <slot name="six"></slot>        
        <slot name="seven"></slot>        
        <slot name="eight"></slot>        
        <slot name="nine"></slot>        
    </div>
</template>

<script>
  export default {
    
  }
    
</script>

<style>
#side-btn {
  margin-top: 1rem;
}

</style>