        // Pre-calculated planet data (with gravity)
        const exoplanetData = {
            "HAT-P-19 B": { temp: 900, atmo: 0, water: 0, soil: 0, gravity: 2.5 },
            "COROT-4 B": { temp: 600, atmo: 0, water: 0, soil: 0, gravity: 1.8 },
            "HAT-P-9 B": { temp: 1100, atmo: 0, water: 0, soil: 0, gravity: 2.2 },
            "KEPLER-74 B": { temp: 500, atmo: 0, water: 0, soil: 0, gravity: 1.5 },
            // Add all the remaining exoplanet data here...
            "Kepler-11 E": { temp: 150, atmo: 7, water: 50, soil: 40, gravity: 0.9 }
        };

        // Function to calculate sustainability score
        function calculateExoplanetScore(input) {
            let score = 100;

            // Adjust score for temperature
            if (input.temp < 0 || input.temp > 50) {
                score -= Math.abs(input.temp - 25) * 2;
            }

            // Adjust score for atmosphere
            if (input.atmo < 15 || input.atmo > 30) {
                score -= Math.abs(input.atmo - 21) * 2;
            }

            // Adjust score for water
            if (input.water < 50 || input.water > 80) {
                score -= Math.abs(input.water - 65) * 1.5;
            }

            // Adjust score for soil fertility
            if (input.soil < 40 || input.soil > 80) {
                score -= Math.abs(input.soil - 60) * 1.2;
            }

            // Adjust score for gravity
            if (input.gravity < 0.8 || input.gravity > 2.5) {
                score -= Math.abs(input.gravity - 1.0) * 10;
            }

            score = Math.max(0, score);
            return score;
        }

        // Function to find closest known planet
        function findClosestPlanet(input) {
            let closestPlanet = null;
            let smallestDifference = Infinity;

            Object.keys(exoplanetData).forEach(planet => {
                const data = exoplanetData[planet];
                const difference = Math.abs(data.temp - input.temp)
                    + Math.abs(data.atmo - input.atmo)
                    + Math.abs(data.water - input.water)
                    + Math.abs(data.soil - input.soil)
                    + Math.abs(data.gravity - input.gravity) * 10; // Gravity is more sensitive

                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestPlanet = planet;
                }
            });

            return closestPlanet;
        }

        // Update slider value displays and recalculate score
        function updateValues(sliderId) {
            const temp = parseInt(document.getElementById('temp').value);
            const atmo = parseInt(document.getElementById('atmo').value);
            const water = parseInt(document.getElementById('water').value);
            const soil = parseInt(document.getElementById('soil').value);
            const gravity = parseFloat(document.getElementById('gravity').value);

            document.getElementById(`${sliderId}-value`).innerText = document.getElementById(sliderId).value;
        }

        function updateValue() {
            var temp = document.getElementById('temp').value;
            var atmo = document.getElementById('atmo').value;
            var water = document.getElementById('water').value;
            var soil = document.getElementById('soil').value;
            var gravity = document.getElementById('gravity').value;

            document.getElementById('temp-value').innerText = document.getElementById('temp').value;

            // User input
            const input = { temp, atmo, water, soil, gravity };

            // Calculate sustainability score
            const score = calculateExoplanetScore(input);
            document.getElementById('score-output').innerText = `Sustainability Score: ${score}%`;

            // Find closest planet
            const closestPlanet = findClosestPlanet(input);
            document.getElementById('closest-planet').innerText = `Closest Known Planet: ${closestPlanet}`;
        }


/*CODEPEN.IO*/

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  const numStars = 3000;
  const speed = 5;
  const maxDepth = 1500;
  const starColors = ["#FFFFFF", "#FFDDC1", "#FFC0CB", "#ADD8E6", "#B0E0E6"];
  let stars = [];

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function getRandomColor() {
    return starColors[Math.floor(Math.random() * starColors.length)];
  }

  class Star {
    constructor(x, y, z, size, color) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.color = color;
    }

    update() {
      this.z -= speed * (2 - this.z / maxDepth);
      if (this.z <= 0) {
        this.reset();
      }
    }

    reset() {
      this.z = maxDepth;
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.sqrt(Math.random()) * (canvas.width / 2);
      this.x = Math.cos(angle) * distance;
      this.y = Math.sin(angle) * distance;
      this.size = (1 - distance / (canvas.width / 2)) * 0.1 + 0.5;
      this.color = getRandomColor();
    }

    draw() {
      const x = ((this.x / this.z) * canvas.width) / 2 + canvas.width / 2;
      const y = ((this.y / this.z) * canvas.height) / 2 + canvas.height / 2;
      const radius = (1 - this.z / maxDepth) * this.size * 3;
      ctx.beginPath();
      ctx.arc(x, y, radius, 3, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initStars() {
    stars = Array.from({ length: numStars }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.sqrt(Math.random()) * (canvas.width / 2);
      return new Star(
        Math.cos(angle) * distance,
        Math.sin(angle) * distance,
        Math.random() * maxDepth,
        (1 - distance / (canvas.width / 2)) * 0.1 + 0.5,
        getRandomColor()
      );
    });
  }

  function updateAndDrawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(updateAndDrawStars);
  }

  window.addEventListener("resize", () => {
    setCanvasSize();
    initStars();
  });

  setCanvasSize();
  initStars();
  requestAnimationFrame(updateAndDrawStars);
});
