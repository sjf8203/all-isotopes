import isotopes from './allIsotopes.json';

export default function(element) {
  const elementInfo = isotopes.find(item => item.element === element);

  if (!elementInfo) return {};

  return elementInfo;
}