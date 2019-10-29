import React from 'react';



function App() {
  function salvaPlanilha() {
    console.log('alou')
    var htmlPlanilha = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>PlanilhaTeste</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + document.getElementById("tabela").innerHTML + '</table></body></html>';
    var htmlBase64 = btoa(htmlPlanilha);
    var link = "data:application/vnd.ms-excel;base64," + htmlBase64;
    window.open(link);
  }
  return (
    <div className="App">
      <body>
      </body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis blandit ante. Ut nec urna luctus, sodales purus sagittis, convallis orci. Cras non tincidunt augue.</p>
      <p>Duis tempor est non tortor placerat, sed malesuada tellus rhoncus. Suspendisse quis ligula ut magna finibus luctus. Integer sollicitudin lectus non erat imperdiet, id suscipit eros ultricies. Morbi vel congue neque. Curabitur varius nibh nec purus cursus ullamcorper.</p>
      <table id="tabela">
        <thead>
          <tr>
            <th></th>
            <th>Janeiro</th>
            <th>Fevereiro</th>
            <th>Março</th>
            <th>Abril</th>
            <th>Maio</th>
            <th>Junho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valor</td>
            <td>123.45</td>
            <td>567.89</td>
            <td>901.23</td>
            <td>456.78</td>
            <td>234.56</td>
            <td>789.01</td>
          </tr>
          <tr>
            <td>Valor</td>
            <td>901.45</td>
            <td>456.62</td>
            <td>234.94</td>
            <td>478.91</td>
            <td>870.11</td>
            <td>123.67</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => salvaPlanilha()} >Salva Planilha</button>

    </div >
  );
}

export default App;
