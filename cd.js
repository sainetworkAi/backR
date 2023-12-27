// Function to start or resume the countdown for 24 hours
function startOrResumeCountdown() {
    // Check if there's a stored countdown start time
    const storedStartTime = localStorage.getItem("countdownStartTime");
  
    // Calculate the countdown start time or resume if available
    let countDownDate;
    if (storedStartTime) {
      const currentTime = new Date().getTime();
      const storedTime = parseInt(storedStartTime, 10);
      const elapsed = currentTime - storedTime;
      
      // Calculate remaining time or restart if more than 24 hours have passed
      if (elapsed < 24 * 60 * 60 * 1000) {
        countDownDate = storedTime + 24 * 60 * 60 * 1000 - elapsed;
      } else {
        countDownDate = currentTime + 24 * 60 * 60 * 1000;
        localStorage.setItem("countdownStartTime", currentTime);
      }
    } else {
      countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownStartTime", countDownDate);
    }
  
    // Update the countdown every second
    const countdown = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the time remaining between now and the countdown date
      const distance = countDownDate - now;
  
      // Calculate hours, minutes, and seconds
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown in the element with the id "countdown"
      document.getElementById("countdown").innerHTML = `
          <div style="text-align: left;">Offer Ends in <span style="color: red; font-weight: bold;">${hours}h ${minutes}m ${seconds}s</span></div>
      `;
  
      // If the countdown is over, restart the countdown for another 24 hours
      if (distance < 0) {
        clearInterval(countdown);
        startOrResumeCountdown(); // Restart the countdown
      }
    }, 1000); // Update every second
  }
  
  // Start or resume the countdown when the window loads
  window.onload = function () {
    startOrResumeCountdown();
  };
  