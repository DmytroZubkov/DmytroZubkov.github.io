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
let optionsLeft = document.getElementById("options-left");

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
    addSelOptions(MODULE_POWER_OPTIONS, selModPower, 0);
    addSelOptions(LENS_OPTIONS, selLensType, 0);
    addSelOptions(CCT_OPTIONS, selCctType, 0);
    addSelOptions(CRI_OPTIONS, selCriType, 0);
    addSelOptions(STD_LETTER_OPTIONS, selStdLetterType, 0);
    addSelOptions(MANUF_OPTIONS, selManufType, 0);
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
    let lumSailing = document.getElementById("lum-sailing");
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

    //Get main data from database
    //Read SKU from dropdown lists
    const CURRENT_SKU = JOOBY_INFO.get(SKU1 + SKU3);

    let SPECS = [cmoboSKU, lumPower, lumFlux, lumLmw, lumCCT, lumCRI, lumDimensions, lumWeight, lumSailing];

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
        lumSailing.innerHTML = `${CURRENT_SKU.sailing} m<sup style="font-size:0.5em;">2</sup>`;
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

    if (selHousing.value === "X" || selModuleQty.value === "X" || selLensType.value === "X" ) {
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
    if (selLensType.value === 'XX/XX'){
        lumLdcImg.src = "img/noimg.jpg"
    } else {
    lumLdcDeg.innerHTML = LENS_OPTIONS.find(({
        id
    }) => id === selLensType.value).beam;
    lumLdcImg.src = "img/ldc/" + LENS_OPTIONS.find(({
        id
    }) => id === selLensType.value).image;
    };


    // Change Mounting type image and name
    lumMountName.innerHTML = MOUNT_OPTIONS.find(({
        id
    }) => id === selMountType.value).id;
    lumMountImg.src = "img/mount/" + MOUNT_OPTIONS.find(({
        id
    }) => id === selMountType.value).image;

};

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

let result = [];
const arr = Object.values(Object.fromEntries(JOOBY_INFO));


function filter(selOption, attr) {
    function filter() {
        if (result.length === 0) {
            result = arr.filter(val => val[attr] === selOption.value);
        } else {
            result = result.filter(val => val[attr] === selOption.value);
        };
        return result;
    };
    filter();
    // console.log(result.length);
    optionsLeft.innerHTML = `Options left: ${result.length}`


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
    inactivate(selModPower, 'modpower');
    inactivate(selLensType, 'lens');
    inactivate(selCctType, 'cctAbb');
    inactivate(selCriType, 'criAbb');
    inactivate(selStdLetterType, 'letter');
    inactivate(selManufType, 'manuf');
    inactivate(selMountType, 'mounting');

};

selHousing.addEventListener('change', (event) => {filter(selHousing, 'housing')});
selModuleQty.addEventListener('change', (event) => {filter(selModuleQty, 'modules')});
selModPower.addEventListener('change', (event) => {filter(selModPower, 'modpower')});
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