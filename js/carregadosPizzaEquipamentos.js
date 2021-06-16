google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Equipamento', 'Per Capacitação'],
            ['Equip. Argentina 2020',     30],
            ['Equip. Argentina 2021',     22],
            ['Equip. Brasil 2020',  2],
            ['Equip. Brasil 2021', 42],
            ['Equip. Colombia 2020 ',    17],
            ['Equip. Colombia 2021 ',    37]
        ]);

        var options = {
          title: 'Alunos Treinados por equipamentos - (150 registros)',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorEquipamentos'));
        chart.draw(data, options);
      }