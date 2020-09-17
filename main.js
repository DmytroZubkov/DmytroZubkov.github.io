const HOUSING_OPTIONS = [
    { id: "C", label: "Console" },
    { id: "S", label: "Suspended" }
];

const MODULE_QTY_OPTIONS = [
    { id: "1", label: "1 - module" },
    { id: "2", label: "2 - module" },
    { id: "3", label: "3 - module" },
    { id: "4", label: "4 - module" },
    { id: "5", label: "5 - module" }
];

const MODULE_POWER_OPTIONS = [{ id: "20", label: "20 W" },
    { id: "30", label: "30 W" },
    { id: "40", label: "40 W" },
    { id: "60", label: "60 W" },
    { id: "80", label: "80 W" }
];

const LENS_OPTIONS = [
    //COB Street Optics
    { optgr: "COB Street Optics", id: "S1", label: "S1 (145°x65°)", ldc: "" },
    { optgr: "COB Street Optics", id: "S2", label: "S2 (170°x120°)", ldc: "" },
    { optgr: "COB Street Optics", id: "S3", label: "S3 (160°x80°)", ldc: "" },
    { optgr: "COB Street Optics", id: "S4", label: "S4 (150°x70°)", ldc: "" },
    //SMD-28 Street Optics
    { optgr: "SMD-28 Street Optics", id: "S6/T1", label: "S6/T1 - type I (145°x80°)", ldc: "" },
    { optgr: "SMD-28 Street Optics", id: "S6/T2", label: "S6/T2 - type II (160°x50°)", ldc: "" },
    { optgr: "SMD-28 Street Optics", id: "S6/T3", label: "S6/T3 - type III (150°x60°)", ldc: "" },
    { optgr: "SMD-28 Street Optics", id: "S6/T5s", label: "S6/T5s - type V (140°)", ldc: "" },
    { optgr: "SMD-28 Street Optics", id: "S6/Sc", label: "S6/Sc - type II/III (long, 160°x65°)", ldc: "" },
    //COB Floodlight Optics
    { optgr: "COB Floodlight Optics", id: "F1/45", label: "F1/45 (45°x45°)", ldc: "" },
    { optgr: "COB Floodlight Optics", id: "F1/60", label: "F1/60 (60°x60°)", ldc: "" },
    { optgr: "COB Floodlight Optics", id: "F1/90", label: "F1/90 (90°x90°)", ldc: "" },
    { optgr: "COB Floodlight Optics", id: "F1/120", label: "F1/120 (120°x120°)", ldc: "" },
    //SMD-28 Floodlight Optics
    { optgr: "SMD-28 Floodlight Optics", id: "F6/30", label: "F6/30 (30°x30°)", ldc: "" },
    { optgr: "SMD-28 Floodlight Optics", id: "F6/65", label: "F6/65 (65°x65°)", ldc: "" },
    { optgr: "SMD-28 Floodlight Optics", id: "F6/90", label: "F6/90 (90°x90°)", ldc: "" },
    //SMD-36 Floodlight Optics
    { optgr: "SMD-36 Floodlight Optics", id: "F7/18", label: "F7/18 (18°x18°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/22", label: "F7/22 (22°x22°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/30", label: "F7/30 (30°x30°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/45", label: "F7/45 (45°x45°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/1840", label: "F7/1840 (18°x40°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/115d", label: "F7/115d (115°x115°)", ldc: "" },
    { optgr: "SMD-36 Floodlight Optics", id: "F7/125", label: "F7/125 (125°x125°)", ldc: "" }
];



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
    });

    LENS_OPTIONS.forEach((el, index) => {
        // console.log(
        //     index,
        //     index-1,
        //     LENS_OPTIONS[index === 0 ? 0 : index-1].optgr !== LENS_OPTIONS[(index)].optgr,
        //     );

        let gr = document.createElement("optgroup");
            if (LENS_OPTIONS[index === 0 ? 0 : index - 1].optgr !== LENS_OPTIONS[(index)].optgr || index === 0) {
                gr.label = el.optgr;
                selLensType.add(gr);
            };
        
        let opt = document.createElement("option");
        opt.value = el.id;
        opt.text = el.label;
        selLensType.add(opt);
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
    let selSpcTypeTxt = selSpcType.options[selSpcType.selectedIndex].text;
    let selDimTypeVal = selDimType.options[selDimType.selectedIndex].value;
    let selDimTypeTxt = selDimType.options[selDimType.selectedIndex].text;
    let selMountTypeVal = selMountType.options[selMountType.selectedIndex].value;
    let selMountTypeTxt = selMountType.options[selMountType.selectedIndex].text;
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
    const SKU3 = ((selMountTypeVal === "") ? "" : "-") + selMountTypeVal;
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

    const CURRENT_SKU = JOOBY_INFO.get(SKU1 + SKU3);
    let SPECS = [cmoboSKU, lumPower, lumFlux, lumLmw, lumCCT, lumCRI, lumDimensions, lumWeight];





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
    document.getElementById("cg11").innerHTML = selMountTypeVal;





    //Substitution to Control Device ASC description page
    if (selAscTypeVal === "") {
        document.getElementById("configGuideASC").style.display = "none";
    } else {
        document.getElementById("cgASC").innerHTML = selAscTypeVal;
        document.getElementById("configGuideASC").style.display = "block";
    };





    //Get main data from database
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
        lumFlux.innerHTML = `${CURRENT_SKU.flux}` + " lm";
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
        lumDimmingVal.innerHTML = selDimTypeTxt;
        lumDimmingVal.style.width = "50%";
    };




    // Hide/show SPC row, change SPC type
    if (selSpcTypeVal === "") {
        lumSpcRow.classList.add("hiddenEl");
    } else {
        lumSpcRow.classList.remove("hiddenEl");
        lumSpcVal.innerHTML = selSpcTypeTxt;
        lumSpcVal.style.width = "50%";
    };




    // Change luminaire image
    let lumImg = document.getElementById("product-img");
    let lumImgComboCode = selHousingVal + selModuleQtyVal + selLensTypeVal + selMountTypeVal;

    if (lumImgComboCode === "") {
        x = "img/noimg.jpg";
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
    const CURRENT_LDC = JOOBY_LDCS.get(selLensTypeVal);
    if (CURRENT_LDC === undefined) {
        "No data";
    } else {
        lumLdcDeg.innerHTML = `${CURRENT_LDC.beam}`;
        lumLdcImg.src = "img/ldc/" + `${CURRENT_LDC.image}`;
    };






    // Change Mounting type image and name
    let changeMount = (selMountTypeTxt === "None / Console (Horizontal)") ? "Console" : "Pole Top";
    let changeMount2 = (selMountTypeVal === "") ? changeMount : selMountTypeVal;

    const CURRENT_MOUNTING = JOOBY_MOUNTING.get(changeMount2);
    if (CURRENT_MOUNTING === undefined) {
        "No data";
    } else {
        // add text description (like T1 or F2) and apply image link
        lumMountName.innerHTML = `${CURRENT_MOUNTING.mounting}`;
        lumMountImg.src = "img/mount/" + `${CURRENT_MOUNTING.image}`;
    };





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

// // window.setTimeout(searchSku(), 0);