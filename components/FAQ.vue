<template>
    <div class="FAQ-wrap">

         <h2 class="title">Frequently Asked Questions (FAQ)</h2>

         <h3 class="question-set-label">Question Set Label - To label related sets of questions</h3>

         <!-- ul element accepts 4 classes for different Font Sizes 

                .question-list-sm,                   
                .question-list-reg 
                .question-list-lrg 
                .question-list-xlrg         
         -->

        <ul class="question-list-sm">

            <li class="list-item">

                <div class="question-icon">
                    <i class="far fa-question-circle"></i>
                </div>

                <div class="question-wrap">

                    <div class="row question">

                        <div class="row-label">
                            Q.
                        </div>
                        <div id="question-content">
                            <strong>What time is it?</strong> 
                        </div> 

                    </div>    
    
                    
                    <div class="row answer">

                        <div class="row-label">
                            A.
                        </div> 
                         <div id="answer-content">
                            <strong>It's time to get a watch!!!</strong>
                        </div>

                    </div>

                </div>
                 

                  
            </li>
        
        
        
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
/* FAQ FONT SIZE CLASSES */
.question-list-sm {
    font-size: 1rem;
}
.question-list-reg {
    font-size: 1.35rem;
}
.question-list-lrg {
    font-size: 1.5rem;
}
.question-list-xlrg {
    font-size: 2rem;
}
/* END OF FAQ FONT-SIZE CLASSES */
.list-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.question-icon {
    position: relative;
    right: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1rem;
    color: rgb(64, 67, 70);
}
.question-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.question-wrap .row {
    display: flex;
    flex-direction: row;    
    padding: .5rem 0rem;
    width: 100%;
}
.question {
    color: #E60718;
    background-color: #F9F6F1;
    border-left: 5px solid;
}
.answer {
    color: #9B9B9B;
    background-color: azure;
    border-left: 5px solid;
}
.row-label {
    padding: 0rem 1.25rem;
}
.question-set-label {
    margin: .75rem 1.75rem;
    font-style: italic;
}






</style>