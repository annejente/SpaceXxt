
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [ "#b91d47", "#00aba9", "#2b5797","#e8c3b9","#1e7145"];

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



// <!-- <script>
// 				var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// 				var yValues = [55, 49, 44, 24, 15];
// 				var barColors = [
// 				  "#b91d47",
// 				  "#00aba9",
// 				  "#2b5797",
// 				  "#e8c3b9",
// 				  "#1e7145"
// 				];

// 				new Chart("brandstof", {
// 				  type: "doughnut",
// 				  data: {
// 				    labels: xValues,
// 				    datasets: [{
// 				      backgroundColor: barColors,
// 				      data: yValues
// 				    }]
// 				  },
				 
// 				});
// 				</script> -->