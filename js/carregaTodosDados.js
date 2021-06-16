/* -- DADOS DOS GRÁFICOS POR PAÍSES -- */
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Ano", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Paraguai", "Peru", "Uruguai", { role: "style" }],
        ["2020", 16, 15, 14, 13, 12, 11, 10, 9, "#b87333"],
        ["2021", 9, 10, 11, 12, 13, 14, 15, 16, "#b87333"],

    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
    },
        2, {
            calc: "stringify",
            sourceColumn: 2,
            type: "string",
            role: "annotation"
        },
        3, {
            calc: "stringify",
            sourceColumn: 3,
            type: "string",
            role: "annotation"
        },
        4, {
            calc: "stringify",
            sourceColumn: 4,
            type: "string",
            role: "annotation"
        }, 5, {
            calc: "stringify",
            sourceColumn: 5,
            type: "string",
            role: "annotation"
        }, 6, {
            calc: "stringify",
            sourceColumn: 6,
            type: "string",
            role: "annotation"
        }, 7, {
            calc: "stringify",
            sourceColumn: 7,
            type: "string",
            role: "annotation"
        }, 8, {
            calc: "stringify",
            sourceColumn: 8,
            type: "string",
            role: "annotation"
        }, 9]);

    var options = {
        title: "Treinamentos por País",
        subtitle: '',
        bar: { groupWidth: "95%" }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("graficoTodosPaises"));
    chart.draw(view, options);
}