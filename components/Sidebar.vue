<template>
    <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div class="list-group">
          <p class="title">CHAPTERS</p>
          <p CLASS="linkTitle">PROGRAMS</p>
          <!---=====================Chapter One Accordion Group==============================--->
          <div class="panel-group" id="accordionMenu" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne" class="list-group-item collapsed">Chapter1</a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  <div class="panel-group" id="accordion1">
                    <!------==============First Sub Accordion============----------->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingsubOne">
                        <h4 class="panel-title">
                          <a data-toggle="collapse" class="list-group-item collapsed" data-parent="#accordion1"
                            aria-expanded="true" href="#collapseTwoOne">General Information</a>
                        </h4>
                      </div>
                      <div id="collapseTwoOne" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingsubOne">
                        <div class="panel-body">
                          <ul>
                            <li><a href="chapter1.html">Chapter Overview</a></li>
                            <li><a href="#">Another Road to Safety (ARS)</a></li>
                            <li><a href="#">Assignment of referrals</a></li>
                            <li><a href="#">Authorities and references for the ER program</a></li>
                            <li><a href="#">Child Abuse and Neglect Reporting Act </a></li>
                            <li><a href="#">Confidentiality and ER</a></li>
                            <li><a href="#">Definitions of abuse and neglect</a></li>
                            <li><a href="#">ER worker rules &amp; equipment</a></li>
                            <li><a href="#">Medical neglect</a></li>
                            <li><a href="#">Purpose &amp; function of the ER program</a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol</a></li>
                            <li><a href="#">Sensitive referrals and cases </a></li>
                            <li><a href="#">Standby / Call Back (ER After Hours) procedure</a></li>
                            <li><a href="#">Transporting children</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Second Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingsubTwo">
                        <h4 class="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion1" aria-expanded="true"
                            href="#collapseTwoTwo" class="collapsed list-group-item">Intake and Screening</a>
                        </h4>
                      </div>
                      <div id="collapseTwoTwo" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingsubTwo">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Abuse in Out-of-Home Care - response </a></li>
                            <li><a href="DiversionToLegalGuardianship.cfm">Diversion to Legal Guardianship</a> </li>
                            <li><a href="#">Emergency response protocol</a></li>
                            <li><a href="#">Evaluating out</a></li>
                            <li><a href="#">Family Court Protocol (3118b) Inquiries - Screening</a></li>
                            <li><a href="#">Hotline &amp; screening</a></li>
                            <li><a href="#">Placing a hold</a></li>
                            <li><a href="#">Probate Court (1516) Referrals - screening </a></li>
                            <li><a href="#">Response Priority - immediate or 10 day</a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Third Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingsubThree">
                        <h4 class="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion1" aria-expanded="true"
                            href="#collapseTwoThree" class="collapsed list-group-item">ER Field Procedures</a>
                        </h4>
                      </div>
                      <div id="collapseTwoThree" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingsubThree">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Abuse in Out-of-Home Care - response </a></li>
                            <li><a href="#">Authority to enter a home</a></li>
                            <li><a href="#">CACI notification and grievance review hearings </a></li>
                            <li><a href="#">Case plans in ER</a></li>
                            <li><a href="#">Conducting an ER investigation</a></li>
                            <li><a href="#">Contact requirements in ER</a></li>
                            <li><a href="#">Closing referrals in ER</a></li>
                            <li><a href="#">DOJ and law enforcement&nbsp; - Cross reports</a></li>
                            <li><a href="#">Probate Court (1513(c)) Referrals - investigations </a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol</a></li>
                            <li><a href="#">Search Warrants - home entry with warrant </a></li>
                            <li><a href="#">Seizure Warrants - removal of child with warrant </a></li>
                            <li><a href="#">SDM procedures in the ER program </a></li>
                            <li><a href="#">Taking a child into temporary custody</a></li>
                            <li><a href="#">TDM procedures and checklist </a></li>
                            <li><a href="#">Transporting children</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Fourth Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingsubFour">
                        <h4 class="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion1" aria-expanded="true"
                            href="#collapseTwoFour" class="collapsed list-group-item">Case Management Policies</a>
                        </h4>
                      </div>
                      <div id="collapseTwoFour" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingsubFour">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Case transfers to other programs </a></li>
                            <li><a href="#">ER interface with other agencies &amp; programs</a></li>
                            <li><a href="#">ER time limits</a></li>
                            <li><a href="#">Interviewing children at school</a></li>
                            <li><a href="#">Referrals in ER on active referrals or open cases</a></li>
                            <li><a href="#">When to consult a supervisor</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!---=====================Chapter TWO Accordion Group==============================--->
          <div class="panel-group" id="accordionMenu2" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="heading2">
                <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordionMenu2"
                    href="#collapse2" aria-expanded="true" aria-controls="collapse2"
                    class="list-group-item collapsed">Chapter2</a> </h4>
              </div>
              <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                <div class="panel-body">
                  <div class="panel-group" id="accordion2">

                    <!------==============First Sub Accordion============----------->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSub1">
                        <h4 class="panel-title"> <a data-toggle="collapse" class="list-group-item collapsed"
                            data-parent="#accordion2" aria-expanded="true" href="#collapseSub1">General Information</a>
                        </h4>
                      </div>
                      <div id="collapseSub1" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="heading2subOne">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Another Road to Safety (ARS)</a></li>
                            <li><a href="#">Assignment of referrals</a></li>
                            <li><a href="#">Authorities and references for the ER program</a></li>
                            <li><a href="#">Child Abuse and Neglect Reporting Act </a></li>
                            <li><a href="#">Confidentiality and ER</a></li>
                            <li><a href="#">Definitions of abuse and neglect</a></li>
                            <li><a href="#">ER worker rules &amp; equipment</a></li>
                            <li><a href="#">Medical neglect</a></li>
                            <li><a href="#">Purpose &amp; function of the ER program</a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol</a></li>
                            <li><a href="#">Sensitive referrals and cases </a></li>
                            <li><a href="#">Standby / Call Back (ER After Hours) procedure</a></li>
                            <li><a href="#">Transporting children</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Second Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSub2">
                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion2"
                            aria-expanded="true" href="#collapseSub2" class="collapsed list-group-item">Intake and
                            Screening</a> </h4>
                      </div>
                      <div id="collapseSub2" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingSub2">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Abuse in Out-of-Home Care - response </a></li>
                            <li><a href="DiversionToLegalGuardianship.cfm">Diversion to Legal Guardianship</a> </li>
                            <li><a href="#">Emergency response protocol</a></li>
                            <li><a href="#">Evaluating out</a></li>
                            <li><a href="#">Family Court Protocol (3118b) Inquiries - Screening</a></li>
                            <li><a href="#">Hotline &amp; screening</a></li>
                            <li><a href="#">Placing a hold</a></li>
                            <li><a href="#">Probate Court (1516) Referrals - screening </a></li>
                            <li><a href="#">Response Priority - immediate or 10 day</a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Third Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSub3">
                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion2"
                            aria-expanded="true" href="#collapseSub3" class="collapsed list-group-item">ER Field
                            Procedures</a> </h4>
                      </div>
                      <div id="collapseSub3" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingSub3">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Abuse in Out-of-Home Care - response </a></li>
                            <li><a href="#">Authority to enter a home</a></li>
                            <li><a href="#">CACI notification and grievance review hearings </a></li>
                            <li><a href="#">Case plans in ER</a></li>
                            <li><a href="#">Conducting an ER investigation</a></li>
                            <li><a href="#">Contact requirements in ER</a></li>
                            <li><a href="#">Closing referrals in ER</a></li>
                            <li><a href="#">DOJ and law enforcement&nbsp; - Cross reports</a></li>
                            <li><a href="#">Probate Court (1513(c)) Referrals - investigations </a></li>
                            <li><a href="#">Safely Surrendered Baby Protocol</a></li>
                            <li><a href="#">Search Warrants - home entry with warrant </a></li>
                            <li><a href="#">Seizure Warrants - removal of child with warrant </a></li>
                            <li><a href="#">SDM procedures in the ER program </a></li>
                            <li><a href="#">Taking a child into temporary custody</a></li>
                            <li><a href="#">TDM procedures and checklist </a></li>
                            <li><a href="#">Transporting children</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!---====================Fourth Sub Accordion==================-->
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSub4">
                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion2"
                            aria-expanded="true" href="#collapseSub4" class="collapsed list-group-item">Case Management
                            Policies</a> </h4>
                      </div>
                      <div id="collapseSub4" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingSub4">
                        <div class="panel-body">
                          <ul>
                            <li><a href="#">Case transfers to other programs </a></li>
                            <li><a href="#">ER interface with other agencies &amp; programs</a></li>
                            <li><a href="#">ER time limits</a></li>
                            <li><a href="#">Interviewing children at school</a></li>
                            <li><a href="#">Referrals in ER on active referrals or open cases</a></li>
                            <li><a href="#">When to consult a supervisor</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!----==================Second group==========================-->
        <div class="list-group">
          <p class="title"></p>
          <p CLASS="linkTitle">CROSS PROGRAMS</p>
          <!---==============Panel Link One======================================================--->
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#" class="list-group-item">CH. LABEL NAME</a>
              </h4>
            </div>
          </div>
          <!---==============Panel Link Two======================================================--->
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#" class="list-group-item">CH. LABEL NAME</a>
              </h4>
            </div>
          </div>
          <!---==============Panel Link Three======================================================--->
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#" class="list-group-item">CH. LABEL NAME</a>
              </h4>
            </div>
          </div>
          <!---==============Panel Link Four======================================================--->
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#" class="list-group-item">CH. LABEL NAME</a>
              </h4>
            </div>
          </div>
          <!---==============Panel Link Five======================================================--->
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#" class="list-group-item">CH. LABEL NAME</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
</template>

<style>

</style>