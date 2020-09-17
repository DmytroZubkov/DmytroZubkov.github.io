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

document.addEventListener('DOMContentLoaded', init, false);

function init() {

    HOUSING_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selHousing.add(opt);
    });

    MODULE_QTY_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selModuleQty.add(opt);
    });

    MODULE_POWER_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selModPower.add(opt);
        // make the option as selected
        if (index == 0) {
            opt.setAttribute('selected', true);
        };
    });

    LENS_OPTIONS.forEach((el, index) => {
        let gr = document.createElement("optgroup");
            if (LENS_OPTIONS[index === 0 ? 0 : index - 1].optgr !== LENS_OPTIONS[(index)].optgr || index === 0) {
                gr.label = el.optgr;
                selLensType.add(gr);
            };
        
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selLensType.add(opt);
        // make the option as selected
        if (index == 6) {
            opt.setAttribute('selected', true);
        };
    });

    CCT_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selCctType.add(opt);
        // make the option as selected
        if (index == 1) {
            opt.setAttribute('selected', true);
        };
    });

    CRI_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selCriType.add(opt);
        // make the option as selected
        if (index == 1) {
            opt.setAttribute('selected', true);
        };
    });

    STD_LETTER_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selStdLetterType.add(opt);
        // make the option as selected
        if (index == 4) {
            opt.setAttribute('selected', true);
        };
    });

    MANUF_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selManufType.add(opt);
        // make the option as selected
        if (index == 3) {
            opt.setAttribute('selected', true);
        };
    });

    SPC_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selSpcType.add(opt);
    });

    DIMMING_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selDimType.add(opt);
    });

    MOUNT_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selMountType.add(opt);
    });

    ASC_OPTIONS.forEach((el, index) => {
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selAscType.add(opt);
    });

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
    // let lumVoltage = document.getElementById("lum-voltage");
    // let lumFreq = document.getElementById("lum-freq");
    // let lumPF = document.getElementById("lum-pf");
    let lumFlux = document.getElementById("lum-flux");
    let lumLmw = document.getElementById("lum-lmw");
    let lumDimmingRow = document.getElementById("lum-dimming-row");
    let lumDimmingVal = document.getElementById("lum-dimming");
    let lumCCT = document.getElementById("lum-cct");
    let lumCRI = document.getElementById("lum-cri");
    // let lumIP = document.getElementById("lum-ip");
    // let lumElSafety = document.getElementById("lum-elsafety");
    let lumSpcRow = document.getElementById("lum-spc-row");
    let lumSpcVal = document.getElementById("lum-spc");
    // let lumTamb = document.getElementById("lum-t-amb");
    let lumDimensions = document.getElementById("lum-dimensions");
    let lumWeight = document.getElementById("lum-weight");
    // let lumMaterial = document.getElementById("lum-material");
    // let lumMF = document.getElementById("lum-mf");
    // let lumFailure = document.getElementById("lum-failure");
    // let lumLifetime = document.getElementById("lum-lifetime");
    // let lumWarr = document.getElementById("lum-warranty");
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


    //Get main data from database

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
        lumPower.innerHTML = `${CURRENT_SKU.power}` + " W";
        lumFlux.innerHTML = `${new Intl.NumberFormat().format(CURRENT_SKU.flux)}` + " lm";
        lumLmw.innerHTML = `${CURRENT_SKU.efficacy}` + " lm/W";
        lumCCT.innerHTML = `${CURRENT_SKU.cct}` + " K";
        lumCRI.innerHTML = `${CURRENT_SKU.cri}`;
        lumDimensions.innerHTML = `${CURRENT_SKU.dim}` + " mm";
        lumWeight.innerHTML = `${CURRENT_SKU.weight}` + " kg";
    };





    // Hide/show dimming row, change dimming type
    if (selDimTypeVal === "") {
        lumDimmingRow.classList.add("hiddenEl");
    } else {
        lumDimmingRow.classList.remove("hiddenEl");
        lumDimmingVal.innerHTML = DIMMING_OPTIONS.find( ({ id }) => id === selDimTypeVal ).label;
        lumDimmingVal.style.width = "50%";
    };




    // Hide/show SPC row, change SPC type
    if (selSpcTypeVal === "") {
        lumSpcRow.classList.add("hiddenEl");
    } else {
        lumSpcRow.classList.remove("hiddenEl");
        lumSpcVal.innerHTML = SPC_OPTIONS.find( ({ id }) => id === selSpcTypeVal ).label;
        lumSpcVal.style.width = "50%";
    };




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





    // function searchSku() {
    //     document.getElementById("search-button").innerHTML = "Hello World";
    //     selHousingVal = "C";
    //     selModuleQtyVal = "1";
    //     selModPowerVal = "40";
    //     selLensTypeVal = "S6/T3";
    //     selCctTypeVal = "3K";
    //     selCriTypeVal = "7";
    //     selStdLetterTypeVal = "L";
    //     selManufTypeVal = "Cr";
    //     console.log(selHousingVal + selModuleQtyVal + "x" + selModPowerVal + "-" + selLensTypeVal + "-" + selCctTypeVal + selCriTypeVal + selStdLetterTypeVal + "-" + selManufTypeVal);
    // };
    // searchSku();


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



let input = document.getElementById("search-sku");

// // Execute a function when the user releases a key on the keyboard

// input.addEventListener("keyup", event => {
//     if (event.key === 13) {
//         document.getElementById("search-button").click();
//     }
// });

function searchSku() {
    let searchOK = true;
    let a = "scurvy";
    let b = "dog";
    let req = input.value;
    console.log(req);

    if (req === "") {
        console.log(true);
    } else {
        console.log(false);
    };
};