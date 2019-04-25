<template>
         
          <!---=====================Chapter One Accordion Group==============================--->
          <div class="panel-group acc-panel-group" id="accordionMenu" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
                  <a role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseID"
                    aria-expanded="false" aria-controls="collapseID" class="collapsed">
                    <div class="acc-heading" role="tab" id="headingID">
                      <span class="title">ACCORDION COMPONENT</span>
                      <i class="fas fa-arrows-alt-h"></i>
                    </div>
                  </a>
              
              <div id="collapseID" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingID">
                <div class="panel-body">
                  <div class="panel-group" id="accordionID">
                   
                   <article>
                      Chase code of conduct tack no prey, no pay clipper ye salmagundi square-rigged man-of-war rope's end. Haul wind knave gibbet crimp capstan aye hornswaggle sheet swing the lead sloop. Buccaneer league main sheet cutlass ho square-rigged brig Nelsons folly hulk rum.
  
                      Avast fathom pillage swing the lead prow rutters Spanish Main come about lee Jack Ketch. Hail-shot barque heave down clap of thunder scallywag lookout Nelsons folly case shot bounty no prey, no pay. Wherry lad Blimey aye coffer gaff weigh anchor long boat hogshead log.
  
                      Wherry draft capstan hail-shot mizzen pirate bucko driver squiffy Pieces of Eight. Prow galleon Brethren of the Coast draught swab hearties yo-ho-ho keel American Main reef. Parley pillage matey ye booty spirits log Davy Jones' Locker crimp execution dock.
                   </article>
                   
                    

                  </div>
                </div>
                
              </div>
            </div>
          </div>
</template>

<style>
.panel-default a {
  text-decoration: none;
}
.acc-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E2EBF4;
  padding: .5rem 1rem;
}
.acc-heading span {
  color: #333333;
  font-size: 28px;
}
@keyframes open-accordion {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
@keyframes close-accordion {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
a[aria-expanded~="true"] svg {
  font-size: 24px;
  animation-name: open-accordion;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  transform: rotate(90deg);
}
a[aria-expanded~="false"] svg {
  font-size: 24px;
  animation-name: close-accordion;
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  transform: rotate(0deg);
}
.acc-panel-group {
  margin-top: 2rem;
}

</style>