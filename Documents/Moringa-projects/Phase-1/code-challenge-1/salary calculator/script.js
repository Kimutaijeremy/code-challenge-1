function calculateNetSalary() {
  let basicSalary = prompt('Input basic salary');
  let benefits = prompt('Input benefits');

  basicSalary = Number(basicSalary);
  benefits = Number(benefits);

  const grossSalary = basicSalary + benefits;

  const pensionablePay = Math.min(grossSalary, 72000);
  const nssf = pensionablePay * 0.06;

  const shif = grossSalary * 0.0275;

  const housingLevy = grossSalary * 0.015;

  const taxableIncome = grossSalary - (nssf + shif + housingLevy);

  let paye = calculatePAYE(taxableIncome);

  const personalRelief = 2400;
  paye = Math.max(paye - personalRelief, 0);

  const netSalary = grossSalary - (nssf + shif + housingLevy + paye);

  return {
    grossSalary: grossSalary.toFixed(2),
    NSSF: nssf.toFixed(2),
    SHIF: shif.toFixed(2),
    housingLevy: housingLevy.toFixed(2),
    PAYE: paye.toFixed(2),
    netSalary: netSalary.toFixed(2)
  };
}

function calculatePAYE(income) {
  let tax = 0;

  if (income <= 24000) {
    tax = income * 0.10;
  } else if (income <= 32333) {
    tax = (24000 * 0.10) + ((income - 24000) * 0.25);
  } else if (income <= 500000) {
    tax = (24000 * 0.10) +
          ((32333 - 24000) * 0.25) +
          ((income - 32333) * 0.30);
  } else if (income <= 800000) {
    tax = (24000 * 0.10) +
          ((32333 - 24000) * 0.25) +
          ((500000 - 32333) * 0.30) +
          ((income - 500000) * 0.325);
  } else {
    tax = (24000 * 0.10) +
          ((32333 - 24000) * 0.25) +
          ((500000 - 32333) * 0.30) +
          ((800000 - 500000) * 0.325) +
          ((income - 800000) * 0.35);
  }

  return tax;
}

const result = calculateNetSalary();
alert(`
Gross Salary: Ksh ${result.grossSalary}
NSSF: Ksh ${result.NSSF}
SHIF: Ksh ${result.SHIF}
Housing Levy: Ksh ${result.housingLevy}
PAYE: Ksh ${result.PAYE}
Net Salary: Ksh ${result.netSalary}
`);













