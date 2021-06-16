google.charts.load('current', { 'packages': ['bar'] });

// *** FILTRO POR PAIS *** //
function graficoPorPais(pais) {

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
            ["2020", 10],
            ["2021", 15],
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
        var chart = new google.visualization.ColumnChart(document.getElementById("graficoTodosPaises"));
        chart.draw(view, options);
    }

}


// *** FILTRO POR PERFIL PAIS *** //
function graficoPorPerfilPais(pais) {

    google.charts.setOnLoadCallback(drawChart);

    var data;

    if (pais == "Argentina") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "ESAB Argentina"],
            ["2020", 16],
            ["2021", 9],
        ]);

    } else if (pais == "Brasil") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "ESAB Brasil"],
            ["2020", 15],
            ["2021", 10],
        ]);

    } else if (pais == "Colombia") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "ESAB Colombia", "SAE COLOMBIA"],
            ["2020", 19, 37],
            ["2021", 56, 12],
        ]);

    } else if (pais == "Peru") {

        data = google.visualization.arrayToDataTable([
            ["Ano", "ESAB Peru"],
            ["2020", 3],
            ["2021", 12],
        ]);

    } else {
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

}

function graficoPizzaAlunoPais(pais) {
    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var data;
        
        if (pais == "Argentina") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Aluno', 'Per Capacitação'],
                ['Aluno Argentina 2020', 11],
                ['Aluno Argentina 2021', 2]
            ]);
    
        } else if (pais == "Brasil") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Aluno', 'Per Capacitação'],
                ['Aluno Brasil 2020',  2],
                ['Aluno Brasil 2021', 2]
            ]);
    
        } else if (pais == "Colombia") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Aluno', 'Per Capacitação'],
                ['Aluno Colombia 2020 ',7],
                ['Aluno Colombia 2021 ',27]
            ]);
    
        } else {
            document.location.reload(true);
        }

        var options = {
            title: 'Alunos Treinados por treinamentos - ' + pais,
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorAlunos'));
        chart.draw(data, options);
    }
}

function graficoPizzaEquipamentosPais(pais) {
    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var data;
        
        if (pais == "Argentina") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Equipamento', 'Per Capacitação'],
                ['Equip. Argentina 2020', 11],
                ['Equip. Argentina 2021', 21]
            ]);
    
        } else if (pais == "Brasil") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Equipamento', 'Per Capacitação'],
                ['Equip. Brasil 2020',  52],
                ['Equip. Brasil 2021', 12]
            ]);
    
        } else if (pais == "Colombia") {
            console.log(pais);
            data = google.visualization.arrayToDataTable([
                ['Equipamento', 'Per Capacitação'],
                ['Equip. Colombia 2020 ',37],
                ['Equip. Colombia 2021 ',17]
            ]);
    
        } else {
            document.location.reload(true);
        }

        var options = {
            title: 'Alunos Treinados por equipamentos - ' + pais,
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorEquipamentos'));
        chart.draw(data, options);
    }
}