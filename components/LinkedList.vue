<template>
    <div class="list-wrapper">
           <h2 class="title">Link List Component</h2>
           <!-- Swap 'regular' class with 'numbered' to switch list-style-type -->
              <ol class="links-indicator regular">
                <li><a href="">Another Road to Safety (ARS)</a></li>
                <li><a href="">Assignment of referrals</a></li>
                <li><a href="">Authorities and references for the ER program</a></li>
                <li><a href="">Child Abuse and Neglect Reporting Act </a></li>
                <li><a href="">Confidentiality and ER</a></li>
                <li><a href="">Definitions of abuse and neglect</a></li>
                <li><a href="">ER worker rules &amp; equipment</a></li>
                <li><a href="">Medical neglect</a></li>
                <li><a href="">Purpose &amp; function of the ER program</a></li>
                <li><a href="">Safely Surrendered Baby Protocol</a></li>
                <li><a href="">Sensitive referrals and cases </a></li>
                <li><a href="">Standby / Call Back (ER After Hours) procedure</a></li>
                <li><a href="">Transporting children</a></li>
              </ol>
    </div>         
</template>

<script>
    
</script>

<style>
  .links-indicator {
    border-left: 3px solid #3C78B4;
  }
  .list-wrapper {
    position: relative;
  }
  .regular {
    list-style-type: initial;
  }
  .numbered {
    list-style-type: decimal;
  }
  .alpha {
    list-style-type: upper-alpha;
  }
</style>