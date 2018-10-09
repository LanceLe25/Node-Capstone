anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "Sleep", value: 8},
      {x: "Work", value: 8},
      {x: "Commute", value: 1},
      {x: "Spend Time with Family", value: 3},
      {x: "Work From Home", value: 4},
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Friday, October 6th, 2018");

  // add the data
  chart.data(data);



  // display the chart in the container
  chart.container('container');
  chart.draw();
});

