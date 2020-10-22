let selHousing = document.getElementById('housing');
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

let formArr = [selHousing,
    selModuleQty,
    selModPower,
    selLensType,
    selCctType,
    selCriType,
    selStdLetterType,
    selManufType,
    // selSpcType,
    // selDimType,
    selMountType,
    selAscType
];

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
    let selHousingVal = selHousing.options[selHousing.selectedIndex].value;
    let selModuleQtyVal = selModuleQty.options[selModuleQty.selectedIndex].value;
    let selModPowerVal = selModPower.options[selModPower.selectedIndex].value;
    let selLensTypeVal = selLensType.options[selLensType.selectedIndex].value;
    let selCctTypeVal = selCctType.options[selCctType.selectedIndex].value;
    let selCriTypeVal = selCriType.options[selCriType.selectedIndex].value;
    let selStdLetterTypeVal = selStdLetterType.options[selStdLetterType.selectedIndex].value;
    let selManufTypeVal = selManufType.options[selManufType.selectedIndex].value;
    let selSpcTypeVal = selSpcType.options[selSpcType.selectedIndex].value;
    let selDimTypeVal = selDimType.options[selDimType.selectedIndex].value;
    let selMountTypeVal = selMountType.options[selMountType.selectedIndex].value;
    let selAscTypeVal = selAscType.options[selAscType.selectedIndex].value;



    const SKU1 = selHousingVal +
        selModuleQtyVal + "x" +
        selModPowerVal + "-" +
        selLensTypeVal + "-" +
        selCctTypeVal +
        selCriTypeVal +
        selStdLetterTypeVal +
        "-" + selManufTypeVal;
    const SKU2 =
        ((selSpcTypeVal === "") ? "" : "-") +
        selSpcTypeVal +
        ((selDimTypeVal === "") ? "" : "-") +
        selDimTypeVal;
    const SKU3 = ((selMountTypeVal === "Console" || selMountTypeVal === "Pole Top") ? "" : "-" + selMountTypeVal);
    const SKU4 = ((selAscTypeVal === "") ? "" : " + ") + selAscTypeVal;




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
    document.getElementById("cg01").innerHTML = selHousingVal;
    document.getElementById("cg02").innerHTML = selModuleQtyVal + "x";
    document.getElementById("cg03").innerHTML = selModPowerVal;
    document.getElementById("cg04").innerHTML = selLensTypeVal;
    document.getElementById("cg05").innerHTML = selCctTypeVal;
    document.getElementById("cg06").innerHTML = selCriTypeVal;
    document.getElementById("cg07").innerHTML = selStdLetterTypeVal;
    document.getElementById("cg08").innerHTML = selManufTypeVal;
    document.getElementById("cg09").innerHTML = selSpcTypeVal;
    document.getElementById("cg10").innerHTML = selDimTypeVal;
    document.getElementById("cg11").innerHTML = ( selMountTypeVal === "Console" || selMountTypeVal === "Pole Top" ) ? "" : selMountTypeVal;





    //Substitution to Control Device ASC description page
    if (selAscTypeVal === "") {
        document.getElementById("configGuideASC").style.display = "none";
    } else {
        document.getElementById("cgASC").innerHTML = selAscTypeVal;
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


    // Trying to make normal filters
    const filteredJoobyMap = new Map();

    // function addMapElements(value, key)
    // {
    //     filteredJoobyMap.set(key, value);
    //     if (value.housing !== selHousing.value) {
    //         filteredJoobyMap.delete(key, value);
    //     };
    // };

    function addMapElements(value, key) {

        // - empty Map
        // - add only those pairs of 'key: value', which contain active option

        filteredJoobyMap.set(key, value);
        function exclude(name, selOpt) {
            if (name !== selOpt) {
                filteredJoobyMap.delete(key, value);
            };
        };
        exclude(value.housing, selHousing.value);
        // exclude(value.modules, selModuleQty.value);
        // exclude(value.power, selModPower.value);
        // exclude(value.lens, selLensType.value);
        // exclude(value.cctAbb, selCctType.value);
        // exclude(value.criAbb, selCriType.value);


    };

    JOOBY_INFO.forEach(addMapElements);

    function highlightMapElements(value, key) {
        for (i = 0; i < selLensType.length; i++) {
            console.log(value.lens, selLensType.options[i].value);
            if (value.lens !== selLensType.options[i].value) {
                selLensType.options[i].classList.add("inactive");
            };
        };
    };
    filteredJoobyMap.forEach(highlightMapElements);

    // for (let [key, value] of filteredJoobyMap) {
    //     for (i = 0; i < selLensType.length; i++) {
    //         if (value.lens !== selLensType.options[i].value) {
    //             // selLensType.options[i].classList.add("inactive");
    //         };
    //     };
    // };

    console.log(selHousing.value);
    console.log(selModuleQty.value);
    console.log(selLensType.value);
    console.log(filteredJoobyMap);
    // console.log(JOOBY_INFO);













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

    //Read SKU from search field
    //  C1x40-S6/T3-3K7L-Cr
    //  S1x40-S6/T2-3K7L-Cr-T1

    // let input = document.getElementById("search-sku");
    // let button = document.getElementById("search-button");
    // button.onclick = function() {
    //     const CURRENT_SKU = JOOBY_INFO.get(input.value)
    //     // console.log(input.value + " = " + SKU1 + SKU3 + " - ", input.value === SKU1);
    //     // console.log(CURRENT_SKU);
    //     if (CURRENT_SKU === undefined) {
    //         SPECS.forEach(el => {
    //             el.innerHTML = "No data found for this SKU";
    //             el.classList.add("alertTdStyle");
    //         });
    //         cmoboSKU.innerHTML = input.value + " - No data found for this SKU";
    //     } else {
    //         SPECS.forEach(el => {
    //             el.classList.remove("alertTdStyle");
    //         });
    //         cmoboSKU.innerHTML = input.value;
    //         lumPower.innerHTML = `${CURRENT_SKU.power}` + " W";
    //         lumFlux.innerHTML = `${new Intl.NumberFormat().format(CURRENT_SKU.flux)}` + " lm";
    //         lumLmw.innerHTML = `${CURRENT_SKU.efficacy}` + " lm/W";
    //         lumCCT.innerHTML = `${CURRENT_SKU.cct}` + " K";
    //         lumCRI.innerHTML = `${CURRENT_SKU.cri}`;
    //         lumDimensions.innerHTML = `${CURRENT_SKU.dim}` + " mm";
    //         lumWeight.innerHTML = `${CURRENT_SKU.weight}` + " kg";
    //     };
    // };



    // Hide/show rows in Specifications table

    function hideSpecRows(optionsArr, tableRow, selType, selValue) {
        if (selType === "") {
            tableRow.classList.add("hiddenEl");
        } else {
            tableRow.classList.remove("hiddenEl");
            selValue.innerHTML = optionsArr.find( ({ id }) => id === selType ).label;
            selValue.style.width = "50%";
        };
    };

    //Hide/show dimming type
    hideSpecRows(DIMMING_OPTIONS, lumDimmingRow, selDimTypeVal, lumDimmingVal);
    //Hide/show SPC
    hideSpecRows(SPC_OPTIONS, lumSpcRow, selSpcTypeVal, lumSpcVal);


    // Change luminaire image
    let lumImg = document.getElementById("product-img");
    let lumImgComboCode = selHousingVal + selModuleQtyVal + selLensTypeVal + selMountTypeVal;

    if (lumImgComboCode === "") {
        lumImg.src = "img/noimg.jpg";
    } else {
        if (selAscTypeVal === "") {
            asc = 'std/';
        } else {
            asc = 'smart/';
        };
        if (selLensTypeVal === 'S1' ||
            selLensTypeVal === 'S2' ||
            selLensTypeVal === 'S3' ||
            selLensTypeVal === 'S4' ||
            selLensTypeVal === 'F1/45' ||
            selLensTypeVal === 'F1/60' ||
            selLensTypeVal === 'F1/90' ||
            selLensTypeVal === 'F1/120') {
            led = 'cob/';
        } else {
            led = 'smd/';
        }
        lumImg.src = 'img/lum/' + asc + led + selHousingVal + selModuleQtyVal + '.jpg';
    };


    // Change LDC image and beam value
    lumLdcDeg.innerHTML = LENS_OPTIONS.find( ({ id }) => id === selLensTypeVal ).beam;
    lumLdcImg.src = "img/ldc/" + LENS_OPTIONS.find( ({ id }) => id === selLensTypeVal ).image;

    
    // Change Mounting type image and name
    lumMountName.innerHTML = MOUNT_OPTIONS.find( ({ id }) => id === selMountTypeVal ).id;
    lumMountImg.src = "img/mount/" + MOUNT_OPTIONS.find( ({ id }) => id === selMountTypeVal ).image;
};


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
