// EMI Calculator utility
export function calculateEMI(principal: number, annualRate: number, tenureYears: number): {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  amortization: { month: number; emi: number; principal: number; interest: number; balance: number }[];
} {
  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;
  
  if (monthlyRate === 0) {
    const emi = principal / tenureMonths;
    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
      amortization: [],
    };
  }

  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  // Generate amortization for first 12 months
  const amortization = [];
  let balance = principal;
  for (let month = 1; month <= Math.min(12, tenureMonths); month++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;
    amortization.push({
      month,
      emi: Math.round(emi),
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    amortization,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}

export function formatEMI(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export const HOME_LOAN_RATES = [
  { bank: 'SBI Home Loan', rate: 8.50, type: 'Floating' },
  { bank: 'HDFC Bank', rate: 8.70, type: 'Floating' },
  { bank: 'ICICI Bank', rate: 8.75, type: 'Floating' },
  { bank: 'Axis Bank', rate: 8.65, type: 'Floating' },
  { bank: 'Kotak Bank', rate: 8.70, type: 'Floating' },
];
