import isotopes from './allIsotopes.json';

let elements = isotopes.reduce(function(obj, element) {
	obj[element.element] = element;
	return obj;
}, {});

let numbers = isotopes.reduce(function(obj, element) {
  obj[element.atomic_number] = element;
  return obj;
}, {});

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

function getCategorizedIsotopes(element) {
  if (!element) return [];
  const categorizedIsotopes = {
    "stable": [],
    "unstable": []
  };
  element.isotopes.forEach(isotope => {
    const categorizedIsotope = {
      "atomic_number": element.atomic_number,
      "element": element.element,
      "mass_number": isotope.mass_number,
      "nuclide": isotope.nuclide,
      "mass": isotope.mass,
      "abundance": isotope.abundance
    };

    if (isotope.abundance > 0) {
      categorizedIsotopes["stable"].push(categorizedIsotope);
    } else {
      categorizedIsotopes["unstable"].push(categorizedIsotope);
    }
  });

  return categorizedIsotopes;
}

function categorizeByElement(element) {
  const elementInfo = getInfoByElement(element);
  return getCategorizedIsotopes(elementInfo);
}

function categorizeByAtomicNumber(atomicNumber) {
  const elementInfo = getInfoByAtomicNumber(atomicNumber);
  return getCategorizedIsotopes(elementInfo);
}

export {
  isotopes,
  elements,
  numbers,
  getInfoByElement,
  getInfoByAtomicNumber,
  categorizeByElement,
  categorizeByAtomicNumber,
}