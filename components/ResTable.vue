<template>

    <div class="table-responsive table-wrap">
      <!-- 
        - DO NOT REMOVE .table class though
        - Can add ".table-bordered" for alternative styling
        - Can add ".table-condensed" to give table an alternative space saving look
        - Can add ".hide-me" to hide unused elements like the table footer
       -->
      <table id="tableID" class="table table-bordered table-hover">
        <caption>A sematically correct table caption for labeling data</caption>

        <thead>
          <tr>
            <th>Responsive</th>
            <th>Table</th>
            <th>Component</th>
            <th>MarkUp</th>
            <th>Extra</th>
          </tr>
        </thead>

        <tbody class="">
          <tr>
            <td>Table</td>
            <td>Data</td>
            <td>Row</td>
            <td>Entry</td>
            <td>Extra</td>
          </tr>

          <tr>
            <td>Table</td>
            <td>Data</td>
            <td>Row</td>
            <td>Entry</td>
            <td>Extra</td>
          </tr>
        </tbody>

        <tfoot class="hide-me">
          <tr>
           <td>This</td>
            <td>is</td>
            <td>the</td>
            <td>Footer</td>
            <td>row</td>
          </tr>
        </tfoot>

      </table>
    </div>
</template>

<style>
@-moz-document url-prefix() {
  fieldset { display: table-cell; }
}
.table-wrap {
  margin-top: 2rem;
}
.hide-me {
  visibility: hidden;
}

</style>