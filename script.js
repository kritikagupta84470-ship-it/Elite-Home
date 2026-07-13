/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

// ---------------------counter


  // Counter animation
  const counters = document.querySelectorAll('.count');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const timer = setInterval(() => {
          cur += step;
          if(cur >= target){ cur = target; clearInterval(timer); }
          el.textContent = cur.toLocaleString();
        }, 25);
        counterIO.unobserve(el);
      }
    });
  }, {threshold:0.4});
  counters.forEach(c => counterIO.observe(c));