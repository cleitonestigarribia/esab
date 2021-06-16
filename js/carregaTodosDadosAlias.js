/* -- DADOS DOS GRÁFICOS POR PERFIS -- */
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Ano", "ESAB Argentina", "ESAB Brasil", "ESAB Colombia", "ESAB Peru", "Eutectic", "Gerencial", "Representantes BR", "SAE COLOMBIA", { role: "style" }],
        ["2020", 6, 25, 34, 3, 21, 1, 50, 9, "#b87333"],
        ["2021", 45, 10, 61, 12, 33, 14, 25, 16, "#b87333"],

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
        title: "Treinamentos por Perfis",
        subtitle: '',
        bar: { groupWidth: "95%" }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("graficoTodosPerfis"));
    chart.draw(view, options);
}