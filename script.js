document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Simulate reading from a JSON file (static data for demo purposes)
    const reservations = [
      { name: 'John Doe', date: '2025-01-21', time: '18:00' }
    ];
  
    const isAvailable = !reservations.some(reservation => reservation.date === date && reservation.time === time);
  
    if (isAvailable) {
      alert(`Reservation confirmed for ${name} on ${date} at ${time}`);
      reservations.push({ name, date, time });
      // In a real application, you would update the JSON file here.
    } else {
      alert('Sorry, the table is not available at that time.');
    }
  });
  