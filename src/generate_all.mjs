import { readFile, writeFile } from 'fs';

const filename = 'NIST_DATA.dat';

let all_isotopes = [];

readFile(filename, 'utf8', function(err, data){
  if (err) throw err;

  let lines = data.split(/\r?\n/);

  let currentIsotope = {}

  lines.forEach(function(line){
    if (line === '') { 
      all_isotopes.push(currentIsotope);
      currentIsotope = {};
      return;
    }
    let key = line.split('=')[0].trim();
    let val = line.split('=')[1].trim();
    currentIsotope[key] = val;
  });

  let allIsotopes = {};

  all_isotopes.forEach(function(isotope){
    let atomic_number = isotope['Atomic Number'];
    let symbol = isotope['Atomic Symbol'];
    if (symbol === 'D' || symbol === 'T') {
      symbol='H'
    } else if (symbol === 'Uup') {
      symbol='Mc'
    }else if (symbol === 'Uus') {
      symbol='Ts'
    }
    let mass_number = isotope['Mass Number'];
    let mass = isotope['Relative Atomic Mass'].replace(/\(\d{0,}\)/, '');
    let abundance = isotope['Isotopic Composition'].replace(/\(\d{0,}\)/, '');
    let atm_weight = isotope['Standard Atomic Weight']

    if (abundance === '') {
      abundance = 0;
    };

    if (!(symbol in allIsotopes)){
      allIsotopes[symbol] = [];
    }
    
    allIsotopes[symbol].push([parseInt(atomic_number),atm_weight,parseInt(mass_number),parseFloat(mass), parseFloat(abundance)]);
  });

  let iso_output=[];
  for (let key in allIsotopes) {
    let iso_list = allIsotopes[key];
    let iso_data = [];
    let elem_data = {};  
    iso_list.forEach(function(item){
      if (Object.keys(elem_data).length === 0) {
        elem_data={
          'atomic_number':item[0],
        }
      }      
      iso_data.push({
        'mass_number' : item[2],
        'nuclide' : key +'-'+ item[2],
        'mass': item[3],
        'abundance': item[4],
      })
    });
    
    iso_output.push(
      {
        'atomic_number': elem_data.atomic_number,
        'element': key,        
        'isotopes': iso_data
      }
    );
  }
  // 将整理后的同位素数据写入 JSON 文件
  writeFile('./allIsotopes.json', JSON.stringify(iso_output, null, 2), function(err){
    if (err) throw err;
  });
});