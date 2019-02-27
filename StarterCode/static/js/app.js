// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

var filteredData

function table(inputdata){
    var selection = d3.select("tbody").selectAll().data(inputdata)
    selection.enter().append("tr").html(d=>{
    return `<td>${d.datetime}</td>
    <td>${d.city}</td>
    <td>${d.state}</td>
    <td>${d.country}</td>
    <td>${d.shape}</td>
    <td>${d.durationMinutes}</td>
    <td>${d.comments}</td>`;
    });
}
table(tableData);

submit.on("click", function() {
    d3.event.preventDefault();
    //filter data based on input field
    var filteredData = tableData.filter(d => d.datetime === inputField.property("value")); 
    console.log(filteredData)
    //load table with filtered data
    update(filteredData)
    //return table
});

function update(inputdata){
    //Classed did the magic!!
    var selection = d3.select("tbody").selectAll("tr").data(inputdata);
    selection.enter().append("tr").classed("tr", true).merge(selection).html(d=>{
    return `<td>${d.datetime}</td>
    <td>${d.city}</td>
    <td>${d.state}</td>
    <td>${d.country}</td>
    <td>${d.shape}</td>
    <td>${d.durationMinutes}</td>
    <td>${d.comments}</td>`;
    })
    selection.exit().remove();
}

//---------------------------------------------
//HTML way to build the table. Informative only, not fully functional

// var filtdata = tableData.filter(function(d){
//     return d.datetime === ("#datetime")
// })
//var filteredData = table.filter(d => d.datetime === ('#datetime').val());
//console.log(filteredData)

// function filterByDate(table) {
//     var filteredData = table.filter(function (d) {
//         return d.datetime === ('#datetime').val();
//     });
//     return filteredData;
//     }
    
    // d3.select("#filter-btn").on('click', dateFilter)
    // First update table of original data

//function drawTable(tbody){
    //var tr, td;
    //tbody =  document.getElementById(tbody); 
    // for (var i=0; i<tableData.length; i++){
    //     tr = tbody.insertRow(tbody.rows.length);
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].datetime;
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].city;
    //     td.setAttribute("align", "center");
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].state;
    //     td.setAttribute("align", "center");
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].country;
    //     td.setAttribute("align", "center");
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].shape;
    //     td.setAttribute("align", "center");
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].durationMinutes;
    //     td.setAttribute("align", "center");
    //     td = tr.insertCell(tr.cells.length);
    //     td.innerHTML = tableData[i].comments;
    // }
//}
//drawTable("getTable"); 