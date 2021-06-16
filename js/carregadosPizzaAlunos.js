google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Aluno', 'Per Capacitação'],
          ['Aluno Argentina 2020', 11],
          ['Aluno Argentina 2021', 2],
          ['Aluno Brasil 2020',  2],
          ['Aluno Brasil 2021', 2],
          ['Aluno Colombia 2020 ',    7],
          ['Aluno Colombia 2021 ',    27]
        ]);

        var options = {
          title: 'Alunos Treinados por treinamentos - (TOTAL 51 alunos)',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pizzaPorAlunos'));
        chart.draw(data, options);
      }