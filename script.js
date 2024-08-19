document.addEventListener('DOMContentLoaded', function() {
    // Simulate a loading time (e.g., 3 seconds)
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';

        // Show the main content
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3000 milliseconds = 3 seconds
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

