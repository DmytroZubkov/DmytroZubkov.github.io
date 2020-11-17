let selHousing = document.getElementById("housing");
let selModuleQty = document.getElementById('module-qty');
let selModPower = document.getElementById('module-power');
let selLensType = document.getElementById('lens-type');
let selCctType = document.getElementById('cct');
let selCriType = document.getElementById('cri');
let selStdLetterType = document.getElementById('stupidLetter');
let selManufType = document.getElementById('manuf');
let selSpcType = document.getElementById('spc');
let selDimType = document.getElementById('dimming');
let selMountType = document.getElementById('mounting');
let selAscType = document.getElementById('asc');

// let formArr = [
//     selHousing,
//     selModuleQty,
//     selModPower,
//     selLensType,
//     selCctType,
//     selCriType,
//     selStdLetterType,
//     selManufType,
//     // selSpcType,
//     // selDimType,
//     selMountType,
//     selAscType
// ];

document.addEventListener('DOMContentLoaded', init, false);

function init() {

    // Create all dropdowns, set selected options
    function addSelOptions(optionsArr, selType, selectedItem) {
        optionsArr.forEach((el, index) => {
            if (optionsArr[index].optgr !== undefined) {
                let gr = document.createElement("optgroup");
                if (optionsArr[index === 0 ? 0 : index - 1].optgr !== optionsArr[(index)].optgr || index === 0) {
                    gr.label = el.optgr;
                    selType.add(gr);
                };
            };
            let opt = document.createElement("option");
            opt.value = el.id;
            opt.text = el.label;
            selType.add(opt);
            if (index === selectedItem) {
                opt.setAttribute('selected', true);
            };
        });
    };

    addSelOptions(HOUSING_OPTIONS, selHousing, 0);
    addSelOptions(MODULE_QTY_OPTIONS, selModuleQty, 0);
    addSelOptions(MODULE_POWER_OPTIONS, selModPower, 2);
    addSelOptions(LENS_OPTIONS, selLensType, 6);
    addSelOptions(CCT_OPTIONS, selCctType, 1);
    addSelOptions(CRI_OPTIONS, selCriType, 1);
    addSelOptions(STD_LETTER_OPTIONS, selStdLetterType, 4);
    addSelOptions(MANUF_OPTIONS, selManufType, 3);
    addSelOptions(SPC_OPTIONS, selSpcType, 0);
    addSelOptions(DIMMING_OPTIONS, selDimType, 0);
    addSelOptions(MOUNT_OPTIONS, selMountType, 0);
    addSelOptions(ASC_OPTIONS, selAscType, 0);

};

document.addEventListener('DOMContentLoaded', singleSelectChangeText, true);

function singleSelectChangeText() {
    const SKU1 = selHousing.value +
        selModuleQty.value + "x" +
        selModPower.value + "-" +
        selLensType.value + "-" +
        selCctType.value +
        selCriType.value +
        selStdLetterType.value +
        "-" + selManufType.value;
    const SKU2 =
        ((selSpcType.value === "") ? "" : "-") +
        selSpcType.value +
        ((selDimType.value === "") ? "" : "-") +
        selDimType.value;
    const SKU3 = ((selMountType.value === "Console" || selMountType.value === "Pole Top") ? "" : "-" + selMountType.value);
    const SKU4 = ((selAscType.value === "") ? "" : " + ") + selAscType.value;




    let cmoboSKU = document.getElementById("combo-sku");
    let lumPower = document.getElementById("lum-power");
    let lumFlux = document.getElementById("lum-flux");
    let lumLmw = document.getElementById("lum-lmw");
    let lumDimmingRow = document.getElementById("lum-dimming-row");
    let lumDimmingVal = document.getElementById("lum-dimming");
    let lumCCT = document.getElementById("lum-cct");
    let lumCRI = document.getElementById("lum-cri");
    let lumSpcRow = document.getElementById("lum-spc-row");
    let lumSpcVal = document.getElementById("lum-spc");
    let lumDimensions = document.getElementById("lum-dimensions");
    let lumWeight = document.getElementById("lum-weight");
    let lumLdcDeg = document.getElementById("light-beam-degrees");
    let lumLdcImg = document.getElementById("product-ldc-img");
    let lumMountName = document.getElementById("mounting-option");
    let lumMountImg = document.getElementById("mounting-img");


    //Substitution to Configuration Guide SKU example 
    document.getElementById("cgSKU").innerHTML = SKU1 + SKU2 + SKU3;
    document.getElementById("cg01").innerHTML = selHousing.value;
    document.getElementById("cg02").innerHTML = selModuleQty.value + "x";
    document.getElementById("cg03").innerHTML = selModPower.value;
    document.getElementById("cg04").innerHTML = selLensType.value;
    document.getElementById("cg05").innerHTML = selCctType.value;
    document.getElementById("cg06").innerHTML = selCriType.value;
    document.getElementById("cg07").innerHTML = selStdLetterType.value;
    document.getElementById("cg08").innerHTML = selManufType.value;
    document.getElementById("cg09").innerHTML = selSpcType.value;
    document.getElementById("cg10").innerHTML = selDimType.value;
    document.getElementById("cg11").innerHTML = (selMountType.value === "Console" || selMountType.value === "Pole Top") ? "" : selMountType.value;

    //Substitution to Control Device ASC description page
    if (selAscType.value === "") {
        document.getElementById("configGuideASC").style.display = "none";
    } else {
        document.getElementById("cgASC").innerHTML = selAscType.value;
        document.getElementById("configGuideASC").style.display = "block";
    };


    // make filter for impossible body-lens combinations
    // let exclLenses, exclMount;
    // if ( selHousingVal === "C" ) {
    //     exclLenses = [ "F1/45", "F1/60", "F1/90", "F1/120", "F6/30", "F6/65", "F6/90", "F7/18", "F7/22", "F7/30", "F7/45", "F7/1840", "F7/115d", "F7/125" ];
    //     exclMount = [ "T1", "F1", "F2", "F3", "Fw", "R", "Rx2" ];
    // } else {
    //     exclLenses = [ "S3", "S4", "S6/T3", "S6/Sc" ];
    //     exclMount = [ "Console", "Pole Top" ];
    // };

    // for (i = 0; i < selLensType.length; i++) {
    //     exclLenses.includes(selLensType.options[i].value) ?
    //     selLensType.options[i].classList.add("inactive") :
    //     selLensType.options[i].classList.remove("inactive");
    // };

    // for (i = 0; i < selMountType.length; i++) {
    //     exclMount.includes(selMountType.options[i].value) ?
    //     selMountType.options[i].classList.add("inactive") :
    //     selMountType.options[i].classList.remove("inactive");
    // };




    // //////// Create a clone Map to be filtered
    // const filteredJoobyMap = new Map();
    // function addMapElements(value, key) {
    //     filteredJoobyMap.set(key, value);
    // };
    // JOOBY_INFO.forEach(addMapElements);

    // //////// Create a function to delete impossible options
    // function delOptions(value, key) {
    //     function subst(valueMap, dropdownValue) {
    //         if (valueMap === dropdownValue) {
    //             filteredJoobyMap.delete(key, value);
    //         };
    //     };
    //     // if housing selector was chanbged, apply this code:
    //     subst(value.housing, selHousing.value);
    //     // if modules selector was changed, apply this code
    //     subst(value.modules, selModuleQty.value);
    //     subst(value.power, selModPower.value);
    // };
    // filteredJoobyMap.forEach(delOptions);
    // console.log(filteredJoobyMap);
    // console.log(selHousing.value, selModuleQty.value, selModPower.value, selLensType.value);





    // //////// Create a clone Map to be filtered
    // const filteredJoobyMap = new Map();
    // //////// Create a function to delete impossible options
    // function addOptions(value, key) {
    //     function subst(valueMap, dropdownValue) {
    //         if (valueMap === dropdownValue) {
    //             filteredJoobyMap.set(key, value);
    //         };
    //     };
    //     subst(value.housing, selHousing.value);
    //     subst(value.modules, selModuleQty.value);
    //     subst(value.power, selModPower.value);
    //     subst(value.lens, selLensType.value);
    //     subst(value.cct, selCctType.value);
    //     subst(value.cri, selModPower.value);
    //     subst(value.letter, selStdLetterType.value);
    //     subst(value.manuf, selManufType.value);
    //     subst(value.mounting, selMountType.value);
    // };
    // JOOBY_INFO.forEach(addOptions);
    // console.log(filteredJoobyMap);
    // console.log(selHousing.value, selModuleQty.value, selModPower.value, selLensType.value);




    // let char = [];
    // function foo(value) {
    //     char.push(
    //         value.housing,
    //         value.modules,
    //         value.power,
    //         value.lens,
    //         value.cct,
    //         value.cri,
    //         value.letter,
    //         value.manuf,
    //         value.mounting);
    // }
    // filteredJoobyMap.forEach(foo);
    // const set = new Set(char);
    // console.log(Array.from(set));



    //Get main data from database

    //Read SKU from dropdown lists
    const CURRENT_SKU = JOOBY_INFO.get(SKU1 + SKU3);

    let SPECS = [cmoboSKU, lumPower, lumFlux, lumLmw, lumCCT, lumCRI, lumDimensions, lumWeight];

    if (CURRENT_SKU === undefined) {
        SPECS.forEach(el => {
            el.innerHTML = "No data found for this SKU";
            el.classList.add("alertTdStyle");
        });
        cmoboSKU.innerHTML = SKU1 + SKU2 + SKU3 + SKU4 + " - No data found for this SKU";
    } else {
        SPECS.forEach(el => {
            el.classList.remove("alertTdStyle");
        });
        cmoboSKU.innerHTML = SKU1 + SKU2 + SKU3 + SKU4;
        lumPower.innerHTML = `${CURRENT_SKU.power} W`;
        lumFlux.innerHTML = `${new Intl.NumberFormat().format(CURRENT_SKU.flux)} lm`;
        lumLmw.innerHTML = `${CURRENT_SKU.efficacy} lm/W`;
        lumCCT.innerHTML = `${CURRENT_SKU.cct} K`;
        lumCRI.innerHTML = `${CURRENT_SKU.cri}`;
        lumDimensions.innerHTML = `${CURRENT_SKU.dim} mm`;
        lumWeight.innerHTML = `${CURRENT_SKU.weight} kg`;
    };



    // Hide/show rows in Specifications table

    function hideSpecRows(optionsArr, tableRow, selType, selValue) {
        if (selType === "") {
            tableRow.classList.add("hiddenEl");
        } else {
            tableRow.classList.remove("hiddenEl");
            selValue.innerHTML = optionsArr.find(({
                id
            }) => id === selType).label;
            selValue.style.width = "50%";
        };
    };

    //Hide/show dimming type
    hideSpecRows(DIMMING_OPTIONS, lumDimmingRow, selDimType.value, lumDimmingVal);
    //Hide/show SPC
    hideSpecRows(SPC_OPTIONS, lumSpcRow, selSpcType.value, lumSpcVal);


    // Change luminaire image
    let lumImg = document.getElementById("product-img");
    let lumImgComboCode = selHousing.value + selModuleQty.value + selLensType.value + selMountType.value;

    if (lumImgComboCode === "") {
        lumImg.src = "img/noimg.jpg";
    } else {
        if (selAscType.value === "") {
            asc = 'std/';
        } else {
            asc = 'smart/';
        };
        if (selLensType.value === 'S1' ||
            selLensType.value === 'S2' ||
            selLensType.value === 'S3' ||
            selLensType.value === 'S4' ||
            selLensType.value === 'F1/45' ||
            selLensType.value === 'F1/60' ||
            selLensType.value === 'F1/90' ||
            selLensType.value === 'F1/120') {
            led = 'cob/';
        } else {
            led = 'smd/';
        };
        lumImg.src = 'img/lum/' + asc + led + selHousing.value + selModuleQty.value + '.jpg';
    };


    // Change LDC image and beam value
    lumLdcDeg.innerHTML = LENS_OPTIONS.find(({
        id
    }) => id === selLensType.value).beam;
    lumLdcImg.src = "img/ldc/" + LENS_OPTIONS.find(({
        id
    }) => id === selLensType.value).image;


    // Change Mounting type image and name
    lumMountName.innerHTML = MOUNT_OPTIONS.find(({
        id
    }) => id === selMountType.value).id;
    lumMountImg.src = "img/mount/" + MOUNT_OPTIONS.find(({
        id
    }) => id === selMountType.value).image;

};



//////// Create a clone Map to be filtered
// const filteredJoobyMap = new Map();
// function sendCopyToNewMap(value, key) {
//     filteredJoobyMap.set(key, value);
// };
// JOOBY_INFO.forEach(sendCopyToNewMap);


//////// Create a function to delete impossible options


// selHousing.addEventListener('change', (event) => {

//     function filter(value, key) {
//         function subst(valueMap, dropdownValue) {
//             if (valueMap === dropdownValue) {
//                 filteredJoobyMap.set(key, value);
//             } else if (valueMap !== dropdownValue) {
//                 filteredJoobyMap.delete(key, value);
//             };
//         };
//         subst(value.housing, selHousing.value);
//     };
//     JOOBY_INFO.forEach(filter);
//     console.log(filteredJoobyMap);

//     const arr = Object.values(Object.fromEntries(filteredJoobyMap));
//     console.log(arr);
//     console.log(arr.filter(val => val.modules === selModuleQty.value && val.lens === selLensType.value));

    

//     function inactivate(param) {
//         for (i = 0; i < param.length; i++) {
//             param.options[i].classList.add("inactive");
//         };
//     };
//     inactivate(selLensType);
// });

//////////////////////////////////////////////////////////////////////////////////////////

function inactConsoleMounting(){
    if (selHousing.value === "C") {
        selMountType.options[0].classList.remove("inactive");
        selMountType.options[1].classList.remove("inactive");
    } else {
        selMountType.options[0].classList.add("inactive");
        selMountType.options[1].classList.add("inactive");
    };
};


const arr = Object.values(Object.fromEntries(JOOBY_INFO));

function filter(selOption, attr){
    
    let filteredObj = arr.filter(val => val[attr] === selOption.value);
    //write somehow filtered data to "result" array

    function inactivate(param, prop) {
        for (i = 0; i < param.length; i++) {
            let drpDnVal = param.options[i].value;
            let searchForDrpDnVal = result.find(el => el[prop] === drpDnVal);
            param.options[i].classList.remove("inactive");
            if (searchForDrpDnVal !== undefined) {
            param.options[i].classList.remove("inactive");
            } else {
                param.options[i].classList.add("inactive");
            };
        };
        return inactConsoleMounting();
    };

    inactivate(selHousing, 'housing');
    inactivate(selModuleQty, 'modules');
    inactivate(selModPower, 'power');
    inactivate(selLensType, 'lens');
    inactivate(selCctType, 'cctAbb');
    inactivate(selCriType, 'criAbb');
    inactivate(selStdLetterType, 'letter');
    inactivate(selManufType, 'manuf');
    inactivate(selMountType, 'mounting');

};

selHousing.addEventListener('change', (event) => {filter(selHousing, 'housing')});
selModuleQty.addEventListener('change', (event) => {filter(selModuleQty, 'modules')});
selModPower.addEventListener('change', (event) => {filter(selModPower, 'power')});
selLensType.addEventListener('change', (event) => {filter(selLensType, 'lens')});
selCctType.addEventListener('change', (event) => {filter(selCctType, 'cctAbb')});
selCriType.addEventListener('change', (event) => {filter(selCriType, 'criAbb')});
selStdLetterType.addEventListener('change', (event) => {filter(selStdLetterType, 'letter')});
selManufType.addEventListener('change', (event) => {filter(selManufType, 'manuf')});
selMountType.addEventListener('change', (event) => {filter(selMountType, 'mounting')});



//////////////////////////////////////////////////////////////////////////////////////////

// Add/remove the Configuration Guide table
function addConfigGuide() {
    // Get the checkbox
    let cgCheckBox = document.getElementById("cgCheck");
    // Get the table page (div block)
    let guidePage = document.getElementById("configGuide");

    // If the checkbox is checked, display the output text
    if (cgCheckBox.checked == true) {
        guidePage.style.display = "block";
    } else {
        guidePage.style.display = "none";
    };
};







































// function Filter({item, onChange}) {
//     return (
//       <div className="form-group-row">
//         <label className="col-form-label" labelfor={'select_'+item.attr}>{item.attr}</label>
//         <select className="form-control" onChange={onChange} id={'select_'+item.attr} name={item.attr}>
//           <option value=''></option>
//             {item.values.map(x => {
//               return (<option key={x} value={x}>{x}</option>);
//             })}
//         </select>
//       </div>
//     );
// };

// function Filters({filters, setFilters, filterService}) {
//   return filters.map(filter => {
//     return <Filter key={filter.attr} item={filter} onChange={x => {
//       let value = x.currentTarget.value;
//       filterService.ApplyFilter(filter.attr, value);
//       setFilters(filterService.AvailableFilters());
//     }} />
//   });
// };

// function FilterPanel({filterService}) {
//     const [filters, setFilters] = useState(filterService.AvailableFilters());
//     return <Filters filters={filters} setFilters={setFilters} filterService={filterService}/>;
// };

// function Item({item}) {
//     return (
//       <p>
//         <span>{item.id}</span>
//         <span>{item.lens} | {item.cctAbb}</span>
//       </p>
//     );
// }
  
// function App({filterService}) {
  
//     const [result, setResult] = useState(filterService.Result());
  
//     filterService.OnFilterChanged = () => {
//       setResult(filterService.Result());
//     };
  
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-2">
//             <FilterPanel filterService={filterService}/>
//           </div>
//           <div className="col-lg-10">
//             <p>Total records: {result.length}</p>
//             <div className="overflow-auto" style={{"height" : "40em"}}>
//               {result.map(x => {
//                 return <Item key={x.id} item={x} />
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };


// const reportWebVitals = onPerfEntry => {
//     if (onPerfEntry && onPerfEntry instanceof Function) {
//       import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//         getCLS(onPerfEntry);
//         getFID(onPerfEntry);
//         getFCP(onPerfEntry);
//         getLCP(onPerfEntry);
//         getTTFB(onPerfEntry);
//       });
//     }
// };


// class ProductsFilter {

//     products = [];
//     filtered = [];
//     filter = {};

//     OnFilterChanged = function(){};

//     Load = (items) => {
//         this.products = items;
//         this.filtered = items;
//         this.filter = {};
//     };

//     AvailableFilters = () => {
//         let result = [];
//         const excludeList = ['id', 'dim', 'cctAbb', 'criAbb', 'flux', 'weight', 'sailing', 'efficacy'];
        
//         if (this.filtered.length > 0) {
//             for(var name in this.filtered[0]) {
//                 if (!excludeList.includes(name)) {
//                     let values = this.filtered.reduce((acc, current) => {
//                         if (acc.includes(current[name]) == false) {
//                             acc.push(current[name]);
//                         }
//                         return acc;
//                     }, []);
        
//                     result.push({
//                         attr: name,
//                         values: values
//                     });
//                 }
//             }
//         }
//         return result;
//     };

//     ResetFilter = (attr) => {
//         if (this.filter.hasOwnProperty(attr)) {
//             if (attr) {
//                 delete this.filter[attr];
//                 this.filtered = this.DoFiltering(this.products, this.filter);
//             }
//             else
//             {
//                 this.filtered = this.products;
//             }
//             this.OnFilterChanged();
//         };
//     };

//     DoFiltering(input, filter) {
//         return input.filter(item => {
//             for(var attr in filter) {
//                 if (item[attr] !== filter[attr]) {
//                     return false;
//                 }
//             }
//             return true;
//         });
//     };

//     ApplyFilter = (attr, value) => {
//         if (attr) {
//             if (value === "") {
//                 this.ResetFilter(attr);
//             }
//             else {
//                 if (this.filter.hasOwnProperty(attr)) {
//                     if (value !== this.filter[attr]) {
//                         // changing filter value
//                         this.filter[attr] = value;
//                         this.filtered = this.DoFiltering(this.products, this.filter);
//                         this.OnFilterChanged();
//                     }
//                 }
//                 else {
//                     // adding filter
//                     this.filter[attr] = value;
//                     this.filtered = this.DoFiltering(this.filtered, this.filter);
//                     this.OnFilterChanged();
//                 }
//             }
//         }
//     }

//     Result = () => {
//         return this.filtered;
//     }

// };

// // import DataProvider from './db'

// // const dataProvider = new DataProvider();
// const filterService = new ProductsFilter();
// const data = Object.values(Object.fromEntries(JOOBY_INFO));
// filterService.Load(data);

// console.log(filterService);

// ReactDOM.render(
//   <React.StrictMode>
//     <App filterService={filterService} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );