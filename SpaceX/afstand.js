
var xValues = ["Nog te gaan", "Reeds gehad"];
var yValues = [76, 24];
var barColors = ["#b5c6cf", "#849fae"];

letmyChart1 = document.getElementById("afstand").getContext('2d');
new Chart("afstand", {
				  type: "doughnut",
				  data: {
				    labels: xValues,
				    datasets: [{
				      backgroundColor: barColors,
				      data: yValues
				    }]
				  },
				  options: {
				    legend: {display: false},
 				  }
				 
				});


