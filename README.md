# isotopes
JSON containing information about isotopes with JavaScript

## Usage
JSON:
```
[
  {
    "atomic_number": 1,
    "element": "H",
    "isotopes": [
      {
        "nuclide": "H-1",
        "mass": 1.00782503223,
        "abundance": 0.999885
      },
      {
        "nuclide": "H-2",
        "mass": 2.01410177812,
        "abundance": 0.000115
      },
  ...
```

JavaScript:
``` javascript
import { isotopes,getInfoByElement,getInfoByAtomicNumber } from 'all-isotopes';
console.log(isotopes);

const DsInfo = getInfoByElement('Ds');
console.log(DsInfo);

const HeInfo = getInfoByAtomicNumber(2);
console.log(HeInfo);

```

## Data
The data for this package comes from [NIST](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses) and was retrieved on Sep 23th, 2023. The "Linearized ASCII Output" for all elements and all isotopes can be found in `NIST_DATA.dat`. The script `generate_all.mjs` can be used to regenerate the `allIsotopes.json` file which contains the isotopic distribution data. The development dependencies must be installed before running `generate_all.mjs`.

## License
This software is released under the MIT license