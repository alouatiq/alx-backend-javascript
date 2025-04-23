// Interfaces with brand
interface MajorCredits {
  brand: 'MajorCredits';
  credits: number;
}

interface MinorCredits {
  brand: 'MinorCredits';
  credits: number;
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: 'MajorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: 'MinorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

// Example usage
const major1: MajorCredits = { brand: 'MajorCredits', credits: 3 };
const major2: MajorCredits = { brand: 'MajorCredits', credits: 4 };
console.log(sumMajorCredits(major1, major2)); // { brand: 'MajorCredits', credits: 7 }

const minor1: MinorCredits = { brand: 'MinorCredits', credits: 1 };
const minor2: MinorCredits = { brand: 'MinorCredits', credits: 2 };
console.log(sumMinorCredits(minor1, minor2)); // { brand: 'MinorCredits', credits: 3 }
