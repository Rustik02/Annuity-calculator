function calculateAmortizationSchedule(loanAmount, annualInterestRate, loanTermMonths) {
    const monthlyInterestRate = annualInterestRate / 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

    let balance = loanAmount;
    const amortizationSchedule = [];

    for (let month = 1; month <= loanTermMonths; month++) {
        const interestPayment = balance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        amortizationSchedule.push({
            month: month,
            monthlyPayment: monthlyPayment.toFixed(2),
            principalPayment: principalPayment.toFixed(2),
            interestPayment: interestPayment.toFixed(2),
            outstandingBalance: balance.toFixed(2)
        });
    }

    return amortizationSchedule;
}
