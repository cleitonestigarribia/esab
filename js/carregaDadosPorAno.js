google.charts.load('current', { 'packages': ['bar'] });

// *** FILTRO POR ANO *** //
function graficoPorAno(ano) {
   
    google.charts.setOnLoadCallback(drawChart);

    console.log("Pais Ano entrou...")

    var filtro = [];

    if (ano == "2020") {
        filtro = ["2020", 16, 15, 14, 13, 12, 11, 10, 9, "#b87333"];
    } else if (ano == "2021") {
        filtro = ["2021", 9, 10, 11, 12, 13, 14, 15, 16, "#b87333"];
    } else {
        document.location.reload(true);
    }

    console.log(filtro);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Ano", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Paraguai", "Peru", "Uruguai", { role: "style" }],
            filtro

        ]);

        var options = {
            chart: {
                title: 'Treinamentos por ano - ' + filtro[0],
                subtitle: ''
            }
        };

        var chart = new google.charts.Bar(document.getElementById('graficoTodosPaises'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

function graficoPerfilPorAno(ano) {

    google.charts.setOnLoadCallback(drawChart1);

    var filtro_p = [];

    if (ano == "2020") {
        filtro_p = ["2020", 9, 10, 11, 12, 13, 14, 15, 16, "#b87333"];
    } else if (ano == "2021") {
        filtro_p = ["2021", 16, 15, 14, 13, 12, 11, 10, 9, "#b87333"];
    } else {
        document.location.reload(true);
    }

    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
            ["Ano", "ESAB Argentina", "ESAB Brasil", "ESAB Colombia", "ESAB Peru", "Eutectic", "Gerencial", "Representantes BR", "SAE COLOMBIA", { role: "style" }],
            filtro_p

        ]);

        var options = {
            chart: {
                title: 'Treinamentos Perfis por ano - ' + filtro_p[0],
                subtitle: ''
            }
        };

        var chart = new google.charts.Bar(document.getElementById('graficoTodosPerfis'));

       chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}


function graficoPizzaAlunoAno(ano) {
    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var data;
        var titulo;
        
        if (ano == "2020") {
            
            data = google.visualization.arrayToDataTable([
                ['Aluno', 'Per Capacitação'],
                ['Aluno Argentina 2020', 11],
                ['Aluno Brasil 2020',  2],
                ['Aluno Colombia 2020 ',7]
                
            ]);
            titulo = 'Alunos Treinados por treinamentos - ' + ano + '(TOTAL 20 alunos)';
    
        } else if (ano == "2021") {
            
            data = google.visualization.arrayToDataTable([
                ['Aluno', 'Per Capacitação'],
                ['Aluno Argentina 2020', 11],
                ['Aluno Brasil 2020',  5],
                ['Aluno Colombia 2020 ', 15]
            ]);
            titulo = 'Alunos Treinados por treinamentos - ' + ano + '(TOTAL 31 alunos)';
        } else {
            document.location.reload(true);
        }

        var options = {
            title: titulo,
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorAlunos'));
        chart.draw(data, options);
    }
}

function graficoPizzaEquipamentosAno(ano) {
    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var data;
        var titulo;

        if (ano == "2020") {
            data = google.visualization.arrayToDataTable([
                ['Equipamento', 'Per Capacitação'],
                ['Equip. Argentina 2020', 15],
                ['Equip. Brasil 2020', 10],
                ['Equip. Colombia 2020', 5]
            ]);
            titulo = 'Alunos Treinados por equipamentos - ' + ano + '(TOTAL 30 registros)';
    
        } else if (ano == "2021") {
            data = google.visualization.arrayToDataTable([
                ['Equipamento', 'Per Capacitação'],
                ['Equip. Argentina 2021',  80],
                ['Equip. Brasil 2021', 15],
                ['Equip. Colombia 2021', 25]
            ]);
            titulo = 'Alunos Treinados por equipamentos - ' + ano + '(TOTAL 120 registros)';

        } else {
            document.location.reload(true);
        }

        var options = {
            title: titulo,
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorEquipamentos'));
        chart.draw(data, options);
    }
}
