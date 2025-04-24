// Define MajorCredits interface with brand property
interface MajorCredits {
    credits: number;
    readonly _brand: 'MajorCredits'; // Brand property for nominal typing
}

// Define MinorCredits interface with brand property
interface MinorCredits {
    credits: number;
    readonly _brand: 'MinorCredits'; // Brand property for nominal typing
}

/**
 * Function to sum Major Credits
 * @param subject1 First subject with major credits
 * @param subject2 Second subject with major credits
 * @returns MajorCredits object with the sum
 */
function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MajorCredits',
    };
}

/**
 * Function to sum Minor Credits
 * @param subject1 First subject with minor credits
 * @param subject2 Second subject with minor credits
 * @returns MinorCredits object with the sum
 */
function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits',
    };
}

// Example usage
const mathMajor: MajorCredits = {
    credits: 3,
    _brand: 'MajorCredits',
};

const physicsMajor: MajorCredits = {
    credits: 4,
    _brand: 'MajorCredits',
};

const historyMinor: MinorCredits = {
    credits: 2,
    _brand: 'MinorCredits',
};

const literatureMinor: MinorCredits = {
    credits: 1,
    _brand: 'MinorCredits',
};

console.log(sumMajorCredits(mathMajor, physicsMajor));
console.log(sumMinorCredits(historyMinor, literatureMinor));

// This would cause a type error because the types are not compatible
// const invalidSum = sumMajorCredits(mathMajor, historyMinor);