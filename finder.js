// Guided product finder: category -> up to 2 questions -> matching models. Prices from CATALOG where known.
const R = s => 'img/' + s + '.png';
export const FINDER = [
  { id:'ice', label:'Ice machine', q:[
      { key:'need', label:'Daily ice need', opts:['80 lb','150 lb','260 lb','360 lb','500+ lb'] },
      { key:'install', label:'Install type', opts:['Undercounter','Modular + bin'] } ],
    items:[
      { sku:'NI80F', name:'Undercounter Ice Machine, 80 lb', spec:'80 lb/day · full cube · fits under counter', price:'$2,299', img:R('NI80F'), need:'80 lb', install:'Undercounter' },
      { sku:'NI120F', name:'Undercounter Ice Machine, 120 lb', spec:'120 lb/day · full cube · fits under counter', price:'$2,599', img:R('NI120F'), need:'150 lb', install:'Undercounter' },
      { sku:'NI150F', name:'Undercounter Ice Machine, 150 lb', spec:'150 lb/day · full cube · fits under counter', price:'$2,899', img:R('NI150F'), need:'150 lb', install:'Undercounter' },
      { sku:'NI260F', name:'Undercounter Ice Machine, 260 lb', spec:'260 lb/day · full cube · fits under counter', price:'$3,499', img:R('NI260F'), need:'260 lb', install:'Undercounter' },
      { sku:'NI360FB310', name:'Modular Ice Machine with Bin, 360 lb', spec:'360 lb/day · 310 lb bin · 22 in wide', price:'$4,499', img:R('NI360F'), need:'360 lb', install:'Modular + bin' },
      { sku:'NI500FB470', name:'Modular Ice Machine with Bin, 500 lb', spec:'500 lb/day · 470 lb bin · 30 in wide', price:'$5,499', img:R('NI500F'), need:'500+ lb', install:'Modular + bin' } ] },
  { id:'fridge', label:'Reach-in fridge', q:[
      { key:'doors', label:'Doors', opts:['1 door','2 doors'] },
      { key:'door', label:'Door type', opts:['Solid','Glass'] } ],
    items:[
      { sku:'NR23', name:'Reach-In Refrigerator, 1 Solid Door', spec:'27.2 in wide · stainless · 23 cu ft', price:'$2,399', img:R('NR23'), doors:'1 door', door:'Solid' },
      { sku:'NR49', name:'Reach-In Refrigerator, 2 Solid Doors', spec:'54 in wide · stainless · 49 cu ft', price:'$3,299', img:R('NR49'), doors:'2 doors', door:'Solid' },
      { sku:'NR49G', name:'Reach-In Refrigerator, 2 Glass Doors', spec:'54 in wide · glass doors · 49 cu ft', price:'$3,699', img:R('NR49G'), doors:'2 doors', door:'Glass' } ] },
  { id:'freezer', label:'Reach-in freezer', q:[ { key:'doors', label:'Doors', opts:['1 door','2 doors'] } ],
    items:[
      { sku:'NF23', name:'Reach-In Freezer, 1 Solid Door', spec:'27.2 in wide · stainless · 23 cu ft', price:'$2,599', img:R('NF23'), doors:'1 door' },
      { sku:'NF49', name:'Reach-In Freezer, 2 Solid Doors', spec:'54 in wide · stainless · 49 cu ft', price:'$3,799', img:R('NF49'), doors:'2 doors' } ] },
  { id:'fryer', label:'Fryer', q:[
      { key:'cap', label:'Oil capacity', opts:['35–40 lb','45–50 lb','65–70 lb'] },
      { key:'fuel', label:'Fuel', opts:['Natural gas','Propane'] } ],
    items:[
      { sku:'NFF3N', name:'Gas Floor Fryer, 3 Tube, NG', spec:'35–40 lb oil · 3 tubes · 90,000 BTU', price:'$1,299', cook:true, cap:'35–40 lb', fuel:'Natural gas' },
      { sku:'NFF3L', name:'Gas Floor Fryer, 3 Tube, LP', spec:'35–40 lb oil · 3 tubes · propane', price:'$1,299', cook:true, cap:'35–40 lb', fuel:'Propane' },
      { sku:'NFF4N', name:'Gas Floor Fryer, 4 Tube, NG', spec:'45–50 lb oil · 4 tubes · 120,000 BTU', price:'$1,399', cook:true, cap:'45–50 lb', fuel:'Natural gas' },
      { sku:'NFF4L', name:'Gas Floor Fryer, 4 Tube, LP', spec:'45–50 lb oil · 4 tubes · propane', price:'$1,399', cook:true, cap:'45–50 lb', fuel:'Propane' },
      { sku:'NFF5N', name:'Gas Floor Fryer, 5 Tube, NG', spec:'65–70 lb oil · 5 tubes · 150,000 BTU', price:'$1,799', cook:true, cap:'65–70 lb', fuel:'Natural gas' },
      { sku:'NFF5L', name:'Gas Floor Fryer, 5 Tube, LP', spec:'65–70 lb oil · 5 tubes · propane', price:'$1,799', cook:true, cap:'65–70 lb', fuel:'Propane' } ] },
  { id:'griddle', label:'Griddle', q:[
      { key:'w', label:'Width', opts:['24 in','36 in','48 in'] },
      { key:'ctl', label:'Controls', opts:['Manual','Thermostatic'] } ],
    items:[
      { sku:'NMG24', name:'Gas Griddle, 24 in, Manual', spec:'24 in · 2 burners · manual controls', price:'$899', cook:true, w:'24 in', ctl:'Manual' },
      { sku:'NMG36', name:'Gas Griddle, 36 in, Manual', spec:'36 in · 3 burners · manual controls', price:'$1,199', cook:true, w:'36 in', ctl:'Manual' },
      { sku:'NMG48', name:'Gas Griddle, 48 in, Manual', spec:'48 in · 4 burners · manual controls', price:'$1,499', cook:true, w:'48 in', ctl:'Manual' },
      { sku:'NTG24', name:'Gas Griddle, 24 in, Thermostatic', spec:'24 in · 2 burners · thermostatic', price:'$1,099', cook:true, w:'24 in', ctl:'Thermostatic' },
      { sku:'NTG36', name:'Gas Griddle, 36 in, Thermostatic', spec:'36 in · 3 burners · thermostatic', price:'$1,399', cook:true, w:'36 in', ctl:'Thermostatic' },
      { sku:'NTG48', name:'Gas Griddle, 48 in, Thermostatic', spec:'48 in · 4 burners · thermostatic', price:'$1,699', cook:true, w:'48 in', ctl:'Thermostatic' } ] },
  { id:'range', label:'Range', q:[ { key:'b', label:'Burners', opts:['4 burners','6 burners'] } ],
    items:[
      { sku:'NR24', name:'Gas Range with Oven, 4 Burners', spec:'24 in · 4 open burners · natural gas', price:'$1,899', cook:true, b:'4 burners' },
      { sku:'NR36', name:'Gas Range with Oven, 6 Burners', spec:'36 in · 6 open burners · natural gas', price:'$2,499', cook:true, b:'6 burners' } ] },
  { id:'merch', label:'Merchandiser', q:[
      { key:'doors', label:'Doors', opts:['1 door','2 doors'] },
      { key:'type', label:'Type', opts:['Refrigerator','Freezer'] } ],
    items:[
      { sku:'NMR23B', name:'Glass Door Refrigerator Merchandiser, 1 Door', spec:'1 swing door · LED · black', price:'$2,499', img:R('NMR23B'), doors:'1 door', type:'Refrigerator' },
      { sku:'NMR48B', name:'Glass Door Refrigerator Merchandiser, 2 Doors', spec:'2 swing doors · LED · black', price:'$3,699', img:R('NMR48B'), doors:'2 doors', type:'Refrigerator' },
      { sku:'NMR48SB', name:'Glass Door Refrigerator Merchandiser, 2 Sliding Doors', spec:'2 sliding doors · LED · black', price:'$3,799', img:R('NMR48B'), doors:'2 doors', type:'Refrigerator' },
      { sku:'NMF23B', name:'Glass Door Freezer Merchandiser, 1 Door', spec:'1 swing door · LED · black', price:'$3,199', img:R('NMF48B'), doors:'1 door', type:'Freezer' },
      { sku:'NMF48B', name:'Glass Door Freezer Merchandiser, 2 Doors', spec:'2 swing doors · LED · black', price:'$4,499', img:R('NMF48B'), doors:'2 doors', type:'Freezer' } ] },
  { id:'bev', label:'Beverage dispenser', q:[
      { key:'bowls', label:'Bowls', opts:['2 bowls','3 bowls'] },
      { key:'finish', label:'Finish', opts:['Standard','Stainless'] } ],
    items:[
      { sku:'NBD2', name:'Refrigerated Beverage Dispenser, Two Bowl', spec:'2 × 12 L bowls · black', price:'$1,799', img:R('NBD2'), bowls:'2 bowls', finish:'Standard' },
      { sku:'NBD2SS', name:'Refrigerated Beverage Dispenser, Two Bowl, Stainless', spec:'2 × 12 L bowls · stainless', price:'$1,949', img:R('NBD2'), bowls:'2 bowls', finish:'Stainless' },
      { sku:'NBD3', name:'Refrigerated Beverage Dispenser, Three Bowl', spec:'3 × 12 L bowls · black', price:'$2,299', img:R('NBD3'), bowls:'3 bowls', finish:'Standard' },
      { sku:'NBD3SS', name:'Refrigerated Beverage Dispenser, Three Bowl, Stainless', spec:'3 × 12 L bowls · stainless', price:'$2,449', img:R('NBD3'), bowls:'3 bowls', finish:'Stainless' } ] },
  { id:'hold', label:'Holding cabinet', q:[], note:'Only two models. The difference is insulation: the insulated cabinet holds temperature longer when unplugged or moved.',
    items:[
      { sku:'NHP36C', name:'Proofing & Holding Cabinet, 36 Pan', spec:'Non-insulated · 36 full-size pans · casters', price:'$2,399', img:R('NHP36C') },
      { sku:'NHPI36C', name:'Proofing & Holding Cabinet, 36 Pan, Insulated', spec:'Insulated · 36 full-size pans · casters', price:'$2,599', img:R('NHP36C') } ] }
];

// Returns matches for a category id + answers {key: value}. Partial answers filter partially; zero exact -> closest (drop last answered question).
export function match(catId, answers) {
  const cat = FINDER.find(c => c.id === catId) || FINDER[0];
  const keys = cat.q.map(q => q.key).filter(k => answers[k]);
  const filt = ks => cat.items.filter(it => ks.every(k => it[k] === answers[k]));
  let res = filt(keys), exact = true;
  if (!res.length && keys.length) { res = filt(keys.slice(0, -1)); exact = false; }
  if (!res.length) { res = cat.items; exact = false; }
  return { cat, res, exact, total: cat.items.length };
}
