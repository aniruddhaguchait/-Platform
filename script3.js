
        document.getElementById('startNavigation').addEventListener('click', function () {
            window.location.href = 'gptmpa1.html';
        });

        document.getElementById('setAlarm').addEventListener('click', function () {
            document.getElementById('alarmModal').style.display = 'flex';
        });

        document.getElementById('confirmAlarm').addEventListener('click', function () {
            document.getElementById('alarmModal').style.display = 'none';
            // Set the alarm logic here
            alert('Alarm set for your destination!');
        });

        // Toggle light/dark mode
        const modeToggle = document.getElementById('modeToggle');
        modeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            modeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        async function updateArrivalTime() {
            try {
                const location = await getCurrentLocation();
                const userCoords = {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                };

                // Replace with your next station coordinates
                const nextStationCoords = {
                    lat: 21.145800,
                    lng: 79.088158
                };

                const duration = await calculateRoute(userCoords, nextStationCoords);
                const arrivalTime = new Date(Date.now() + duration * 1000).toLocaleTimeString();

                document.getElementById('arrivalTime').innerText = arrivalTime;
                document.getElementById('nextStation').innerText = 'Central Station'; // Update with the actual next station name

                setTimeout(updateArrivalTime, 60000); // Update every minute
            } catch (error) {
                console.error('Error updating arrival time:', error);
            }
        }

        updateArrivalTime();

        const toggleBtn = document.querySelector('.toggle-btn');
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const dropDownMenu = document.querySelector('.dropdown-menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }