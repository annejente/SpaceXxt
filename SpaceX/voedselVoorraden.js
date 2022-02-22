var xValues = ["Vis", "Vlees", "Groenten", "Fruit", "Snacks"];
var yValues = [80, 93, 76, 77, 0];
var barColors = ["#b5c6cf", "#849fae","#597888","#384c56"];


letmyChart1 = document.getElementById("voedsel").getContext('2d');
new Chart("voedsel", {
				  type: "bar",
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



