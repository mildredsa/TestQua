document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnSave = document.getElementById('btn-save');


    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'geofence.html';
    });


    // Add a click event listener to the "Save" button
    btnSave.addEventListener('click', function () {
        window.location.href = 'geofence-2.html';
    });

    // Get the canvas and its context
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    // Array to store the points
    const points = [];

    // Event listener for mouse down (add a new point)
    canvas.addEventListener('mousedown', function (e) {
      const x = e.clientX - canvas.getBoundingClientRect().left;
      const y = e.clientY - canvas.getBoundingClientRect().top;
      points.push({ x, y });
      draw();
    });

    // Function to draw on the canvas
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set up the drawing style
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000000';

      // Draw lines between consecutive points
      for (let i = 0; i < points.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i + 1].x, points[i + 1].y);
        ctx.stroke();
      }
    }

});
