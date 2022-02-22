var xValues = [1700,1478, 1256, 1034, 812, 590, 368];
var yValues = [30, 60, 90, 120, 150, 180, 210];

letmyChart1 = document.getElementById("brandstof").getContext('2d');
new Chart("brandstof", {
				  type: "line",
				  data: {
				    labels: xValues,
				    datasets: [{
				      fill: false,
				      lineTension: 0,
				      backgroundColor: "#b5c6cf",
				      borderColor: "#b5c6cf",
				      data: yValues
				    }]
				  },
				  options: {
				    legend: {display: false},
				    scales: {
				      yAxes: [{ticks: {min: 0, max:250}}],
				    }

				  }
				});

