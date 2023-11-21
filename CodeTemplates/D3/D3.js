// JavaScript source code
< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Progressive Line Chart</title>
                    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>
                </head>
                <body>
                    <div id="chart-container" style="height: 400px; margin-top: 800px;">
                        <canvas id="myChart"></canvas>
                    </div>

                    <script>
  // Get the canvas element
                        var ctx = document.getElementById('myChart').getContext('2d');

                        // Define the data
                        var data = {
                            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        datasets: [{
                            label: 'Sample Data',
                        data: [10, 20, 15, 25, 30, 22, 18, 12, 28, 35],
                        borderColor: 'rgba(75, 192, 192, 1)', // Line color
                        borderWidth: 2, // Line width
                        fill: false // Do not fill the area under the line
    }]
  };

                        // Define the chart configuration
                        var config = {
                            type: 'line', // Type of chart
                        data: data,
                        options: {
                            responsive: true, // Make the chart responsive
                        scales: {
                            x: {
                            type: 'linear',
                        position: 'bottom'
        },
                        y: {
                            type: 'linear',
                        position: 'left'
        }
      },
                        plugins: {
                            annotation: {
                            annotations: {
                            line1: {
                            type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: 0, // Initial value, starts from the left
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'Animation Line'
              }
            }
          }
        }
      },
                        animation: {
                            onProgress: function(animation) {
          var chartInstance = animation.chart;
                        var ctx = chartInstance.ctx;
                        var progress = animation.currentStep / animation.numSteps;

                        // Update the annotation value based on animation progress
                        chartInstance.options.plugins.annotation.annotations.line1.value = progress * 10; // 10 is the total number of data points

                        // Clear the canvas before redrawing the chart
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                        // Redraw the chart with updated annotation value
                        chartInstance.update();
        }
      }
    }
  };

                        // Create a new Intersection Observer
                        var observer = new IntersectionObserver(function(entries) {
                            entries.forEach(function (entry) {
                                if (entry.isIntersecting) {
                                    // Start chart animation when it comes into view
                                    var myChart = new Chart(ctx, config);
                                    observer.disconnect(); // Disconnect the observer once the chart is created
                                }
                            });
  }, {threshold: 0.5 }); // Trigger when 50% of the target is visible

                        // Target the chart container
                        var chartContainer = document.getElementById('chart-container');
                        // Start observing the chart container
                        observer.observe(chartContainer);
                    </script>

                </body>
            </html>
