document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
