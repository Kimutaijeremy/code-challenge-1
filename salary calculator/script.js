// Function to calculate Net Salary
function calculateNetSalary() {
  // Ask the user for basic salary
  let basicSalary = prompt("Input basic salary");
  // Ask the user for benefits
  let benefits = prompt("Input benefits");

  // Convert both inputs into numbers
  basicSalary = Number(basicSalary);
  benefits = Number(benefits);

  // Gross salary = basic + benefits
  const grossSalary = basicSalary + benefits;

  // STATUTORY DEDUCTIONS

  // NSSF contribution is 6% of gross salary, capped at 72,000
  const pensionablePay = Math.min(grossSalary, 72000);
  const nssf = pensionablePay * 0.06;

  // SHIF (Health Insurance Fund) is 2.75% of gross salary
  const shif = grossSalary * 0.0275;

  // Housing levy is 1.5% of gross salary
  const housingLevy = grossSalary * 0.015;

  // Taxable income = gross salary minus statutory deductions
  const taxableIncome = grossSalary - (nssf + shif + housingLevy);

  // Calculate PAYE (income tax) based on tax bands
  let paye = calculatePAYE(taxableIncome);

  // Subtract personal relief (fixed Ksh 2,400 per month)
  const personalRelief = 2400;
  paye = Math.max(paye - personalRelief, 0); // Ensures PAYE doesn’t go negative

  // Net salary = Gross salary - all deductions (NSSF, SHIF, Housing Levy, PAYE)
  const netSalary = grossSalary - (nssf + shif + housingLevy + paye);

  // Return all results (formatted to 2 decimal places)
  return {
    grossSalary: grossSalary.toFixed(2),
    NSSF: nssf.toFixed(2),
    SHIF: shif.toFixed(2),
    housingLevy: housingLevy.toFixed(2),
    PAYE: paye.toFixed(2),
    netSalary: netSalary.toFixed(2),
  };
}

// Function to calculate PAYE based on Kenyan tax brackets
function calculatePAYE(income) {
  let tax = 0;

  // First tax band: 10% on the first 24,000
  if (income <= 24000) {
    tax = income * 0.1;

  // Second band: 25% on income between 24,001 and 32,333
  } else if (income <= 32333) {
    tax = 24000 * 0.1 + (income - 24000) * 0.25;

  // Third band: 30% on income between 32,334 and 500,000
  } else if (income <= 500000) {
    tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (income - 32333) * 0.3;

  // Fourth band: 32.5% on income between 500,001 and 800,000
  } else if (income <= 800000) {
    tax =
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (500000 - 32333) * 0.3 +
      (income - 500000) * 0.325;

  // Fifth band: 35% on income above 800,000
  } else {
    tax =
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (500000 - 32333) * 0.3 +
      (800000 - 500000) * 0.325 +
      (income - 800000) * 0.35;
  }

  return tax;
}

// Run the salary calculator and display results in an alert
const result = calculateNetSalary();
alert(`
Gross Salary: Ksh ${result.grossSalary}
NSSF: Ksh ${result.NSSF}
SHIF: Ksh ${result.SHIF}
Housing Levy: Ksh ${result.housingLevy}
PAYE: Ksh ${result.PAYE}
Net Salary: Ksh ${result.netSalary}
`);
