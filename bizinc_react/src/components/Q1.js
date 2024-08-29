const input = [1, 2, 3, 4];

const ArrManipulation = (arr) => {
  return arr.map((e) => (e % 2 === 0 ? e * 2 : e));
};

console.log(ArrManipulation(input));

export default ArrManipulation;

// 2. Conceptual Question:
// ● What are the differences between `==` and `===` in JavaScript?
//     In JavaScript, both == and === are used to compare values, but they differ in how they handle the comparison:
//     The first is loose equality, which means that JavaScript will try to convert the variables to a common type before comparing.
//     The second is strict equality, which means that JavaScript will compare both the value and the type, and will return false if either the value or type is different.
//     For instance, "1" === 1 would return false, but "1" == 1 would return true.
