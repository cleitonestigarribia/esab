    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    var data;

    if (pais == "Argentina") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Argentina"],
            ["2020", 16],
            ["2021", 9],
        ]);

    } else if (pais == "Bolivia") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Bolivia"],
            ["2020", 9],
            ["2021", 16],
        ]);

    } else if (pais == "Brasil") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Brasil"],
            ["2020", 15],
            ["2021", 10],
        ]);

    } else if (pais == "Chile") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Chile"],
            ["2020", 7],
            ["2021", 36],
        ]);

    } else if (pais == "Colombia") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Colombia"],
            ["2020", 19],
            ["2021", 56],
        ]);

    } else if (pais == "Paraguai") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Paraguai"],
            ["2020", 39],
            ["2021", 76],
        ]);

    } else if (pais == "Peru") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Peru"],
            ["2020", 19],
            ["2021", 6],
        ]);

    } else if (pais == "Uruguai") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "Uruguai"],
            ["2020", 29],
            ["2021", 96],
        ]);

    }
    else {
        document.location.reload(true);
    }



    function drawChart() {

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

        var options = {
            title: "Treinamentos por País",
            subtitle: '',
            width: 600,
            height: 400,
            bar: { groupWidth: "95%" }
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("graficoTodosPerfis"));
        chart.draw(view, options);
    }

