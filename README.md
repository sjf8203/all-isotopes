# all-isotopes
JSON containing information about isotopes with JavaScript

## Usage
import the package：
``` javascript
import * as allIso from 'all-isotopes';
```
(1) get all isotopes:
``` javascript
console.log(allIso.isotopes);
output:
[
  {
    "atomic_number": 1,
    "element": "H",
    "isotopes": [
      {
        "mass_number": 1,
        "nuclide": "H-1",
        "mass": 1.00782503223,
        "abundance": 0.999885
      },
      {
        "mass_number": 2,
        "nuclide": "H-2",
        "mass": 2.01410177812,
        "abundance": 0.000115
      },
  ...
]
```
(2) get info by element's symbol: 
``` javascript
const DsInfo = allIso.elements.Ds;
or
const DsInfo = allIso.getInfoByElement('Ds');
console.log(DsInfo);
output:
{
  "atomic_number": 110,
  "element": "Ds",
  "isotopes": [
    {
      "mass_number": 267,
      "nuclide": "Ds-267",
      "mass": 267.14377,
      "abundance": 0
    },   
    ...
}
```

(3) or get info by atomic number: 
``` javascript
const infoByNumber2 = allIso.numbers[2];
or
const infoByNumber2 = allIso.getInfoByAtomicNumber(2);
console.log(infoByNumber2);
```

(4) get categorized isotopes by element symbol:
``` javascript
const isoOfLi = allIso.categorizeByElement('Li');
console.log(isoOfLi);
output:
{
  "stable":[
    {
    "atomic_number": 3,
    "element": "Li",
    "mass_number": 6,
    "nuclide": "Li-6",
    "mass": 6.0151228874,
    "abundance": 0.0759
    },
  ...
  ],
  "unstable":[
    {
    "atomic_number": 3,
    "element": "Li",
    "mass_number": 3,
    "nuclide": "Li-3",
    "mass": 3.0308,
    "abundance": 0
    },
  ... 
  ]  
... 
}
```

(5) or get categorized isotopes by atomic number
``` javascript
const isoOfNumber5 = allIso.categorizeByAtomicNumber(5);
console.log(isoOfNumber5);
```

## Data
The data for this package comes from [NIST](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses) and was retrieved on Sep 23th, 2023. The "Linearized ASCII Output" for all elements and all isotopes can be found in `NIST_DATA.dat`. The script `generate_all.mjs` can be used to regenerate the `allIsotopes.json` file which contains the isotopic distribution data. The development dependencies must be installed before running `generate_all.mjs`.

## License
This software is released under the MIT license