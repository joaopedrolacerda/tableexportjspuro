import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


function App() {
    function salvaPlanilha() {
        console.log('alou')
    }
    return (
        <div>
            <ReactHTMLTableToExcel
                style={{ backgroundColor: "#6123" }}
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="Relatórioomnichannel"
                buttonText="exportar para excel" />
            <table id="table-to-xls">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
            </table>

        </div>
    );
}

export default App;
