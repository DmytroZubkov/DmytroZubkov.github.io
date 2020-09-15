document.addEventListener('DOMContentLoaded', singleSelectChangeText, true);

function singleSelectChangeText() {
    let selHousing = document.getElementById('housing');
    let selHousingVal = selHousing.options[selHousing.selectedIndex].value;

    let selModuleQty = document.getElementById('module-qty');
    let selModuleQtyVal = selModuleQty.options[selModuleQty.selectedIndex].value;

    let selModPower = document.getElementById('module-power');
    let selModPowerVal = selModPower.options[selModPower.selectedIndex].value;

    let selLensType = document.getElementById('lens-type');
    let selLensTypeVal = selLensType.options[selLensType.selectedIndex].value;

    let selCctType = document.getElementById('cct');
    let selCctTypeVal = selCctType.options[selCctType.selectedIndex].value;

    let selCriType = document.getElementById('cri');
    let selCriTypeVal = selCriType.options[selCriType.selectedIndex].value;

    let selStdLetterType = document.getElementById('stupidLetter');
    let selStdLetterTypeVal = selStdLetterType.options[selStdLetterType.selectedIndex].value;

    let selManufType = document.getElementById('manuf');
    let selManufTypeVal = selManufType.options[selManufType.selectedIndex].value;

    let selSpcType = document.getElementById('spc');
    let selSpcTypeVal = selSpcType.options[selSpcType.selectedIndex].value;
    let selSpcTypeTxt = selSpcType.options[selSpcType.selectedIndex].text;

    let selDimType = document.getElementById('dimming');
    let selDimTypeVal = selDimType.options[selDimType.selectedIndex].value;
    let selDimTypeTxt = selDimType.options[selDimType.selectedIndex].text;

    let selMountType = document.getElementById('mounting');
    let selMountTypeVal = selMountType.options[selMountType.selectedIndex].value;
    let selMountTypeTxt = selMountType.options[selMountType.selectedIndex].text;

    let selAscType = document.getElementById('asc');
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



// let input = document.getElementById("search-sku");

// // Execute a function when the user releases a key on the keyboard

// input.addEventListener("keyup", event => {
//     if (event.key === 13) {
//         document.getElementById("search-button").click();
//     }
// });

// function searchSku() {
//     let searchOK = true;
//     let a = "scurvy";
//     let b = "dog";
//     let req = input.value;
//     console.log(req);

//     if ( req === "" ) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// };

// // window.setTimeout(searchSku(), 0);
