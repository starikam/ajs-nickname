import Validator from '../Validator';

test.each([
  ['starikam', true],
  ['StariKam', true],
  ['st0rik0m', true],
  ['stari-kam', true],
  ['stari_kam', true],
  ['старикам', false],
  ['star()ikam', false],
  ['0starikam', false],
  ['starikam11', false],
  ['-starikam', false],
  ['starikaml-', false],
  ['_starikam', false],
  ['starikam_', false],
  ['starik04-05am', true],
  ['sta2000rikam', false],
  ['st666arikam', true],
  ['sta01rikam', true],
  ['st90rikam', true],
])('Testing validateUsername function with %s attribute', (username, expected) => {
  const validator = new Validator(username);

  const result = validator.validateUsername();

  expect(result).toBe(expected);
});
