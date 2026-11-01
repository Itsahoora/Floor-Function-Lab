const evaluate = window.FloorFunctionMath.evaluateExpression;

const cases = [
  ['negative rational floors down', '-7/2', -3.5],
  ['negative decimal', '-2.001', -2.001],
  ['exact integer remains exact', '-2', -2],
  ['parentheses', '(-2)^2', 4],
  ['exponent binds before unary minus', '-2^2', -4],
  ['negative exponent', '2^-2', 0.25],
  ['operator precedence', '2+3*4', 14],
  ['pi constant', 'pi', Math.PI],
  ['square root', 'sqrt(2)', Math.sqrt(2)],
  ['Persian digits', '−۷/۲', -3.5],
  ['Arabic digits and decimal separator', '٢٫٥', 2.5]
];

const results = document.querySelector('#results');
let failures = 0;
for (const [name, expression, expected] of cases) {
  const actual = evaluate(expression);
  const passed = actual && typeof actual === 'object' && Math.abs(actual.v - expected) < 1e-12;
  const item = document.createElement('li');
  item.className = passed ? 'pass' : 'fail';
  item.textContent = `${passed ? 'PASS' : 'FAIL'}: ${name}${passed ? '' : ` (expected ${expected}, got ${String(actual)})`}`;
  results.append(item);
  if (!passed) failures++;
}

for (const [name, expression] of [
  ['empty expression', ''],
  ['division by zero', '1/0'],
  ['negative square root', 'sqrt(-1)'],
  ['unsupported identifier', 'window.alert(1)'],
  ['trailing operator', '3+']
]) {
  const actual = evaluate(expression);
  const passed = !actual || typeof actual !== 'object' || !Number.isFinite(actual.v);
  const item = document.createElement('li');
  item.className = passed ? 'pass' : 'fail';
  item.textContent = `${passed ? 'PASS' : 'FAIL'}: ${name}`;
  results.append(item);
  if (!passed) failures++;
}

document.querySelector('#summary').textContent = `${cases.length + 5 - failures} / ${cases.length + 5} passed`;
document.querySelector('#summary').className = failures ? 'fail' : 'pass';
document.title = failures ? 'FAIL — Floor Function Lab math tests' : 'PASS — Floor Function Lab math tests';
