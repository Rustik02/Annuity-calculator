document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100;
    const loanTermMonths = parseInt(document.getElementById('loanTermMonths').value);

    const schedule = calculateAmortizationSchedule(loanAmount, annualInterestRate, loanTermMonths);
    displayAmortizationSchedule(schedule);
});

function displayAmortizationSchedule(schedule) {
    const scheduleBody = document.getElementById('schedule-body');
    scheduleBody.innerHTML = '';

    schedule.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.month}</td>
            <td>$${entry.monthlyPayment}</td>
            <td>$${entry.principalPayment}</td>
            <td>$${entry.interestPayment}</td>
            <td>$${entry.outstandingBalance}</td>
        `;
        scheduleBody.appendChild(row);
    });
}
