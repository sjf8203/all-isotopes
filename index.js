import isotopes from './allIsotopes.json';

function getInfoByElement(element) {
  const elementInfo = isotopes.find(item => item.element === element);

  if (!elementInfo) return {};

  return elementInfo;
}

function getInfoByAtomicNumber(atomicNumber) {
  const elementInfo = isotopes.find(item => item.atomic_number === atomicNumber);

  if (!elementInfo) return {};

  return elementInfo;
}

export {
  isotopes,
  getInfoByElement,
  getInfoByAtomicNumber
}