function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;

    if (!birthdate) {
        document.getElementById('result').innerText = "Please select a date.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

  
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText =
        `Your age is ${years} years, ${months} months, and ${days} days.`;
}