const isValidCNPJ = (cnpj) => {
  const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const c = String(cnpj).replace(/[^\d]/g, "");

  // Verifica se o CNPJ tem 14 dígitos e não é uma sequência de zeros
  if (c.length !== 14 || /0{14}/.test(c)) return false;

  // Calcula o primeiro dígito verificador
  let n = 0;
  for (let i = 0; i < 12; i++) {
    n += c[i] * b[i + 1];
  }
  let firstDigit = n % 11 < 2 ? 0 : 11 - (n % 11);
  if (c[12] != firstDigit) return false;

  // Calcula o segundo dígito verificador
  n = 0;
  for (let i = 0; i <= 12; i++) {
    n += c[i] * b[i];
  }
  let secondDigit = n % 11 < 2 ? 0 : 11 - (n % 11);
  if (c[13] != secondDigit) return false;

  return true;
};

export default isValidCNPJ;
