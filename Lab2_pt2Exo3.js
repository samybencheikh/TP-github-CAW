document.addEventListener('DOMContentLoaded', function() {
    const walls = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');
    const start = document.getElementById('start');
    const status = document.getElementById('status');


    end.addEventListener('mouseover', function() {
        if (!start.classList.contains('active')) {
            status.textContent = 'You win';
            alert('You win!');
            
        }
    });

    start.addEventListener('mouseover', function() {
        start.classList.add('active');
        status.textContent = 'Move your mouse over the "E" to win!';
    });

    start.addEventListener('mouseout', function() {
        start.classList.remove('active');
        
    });
});
