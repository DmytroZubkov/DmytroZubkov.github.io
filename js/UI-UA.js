const HOUSING_OPTIONS = [
    { id: "X", label: "Будь ласка, оберіть варіант" },
    { id: "C", label: "Консольний" },
    { id: "S", label: "Підвісний" }
];

const MODULE_QTY_OPTIONS = [
    { id: "X", label: "Будь ласка, оберіть варіант" },
    { id: "1", label: "1 - модуль" },
    { id: "2", label: "2 - модулі" },
    { id: "3", label: "3 - модулі" },
    { id: "4", label: "4 - модулі" },
    { id: "5", label: "5 - модулів" }
];

const MODULE_POWER_OPTIONS = [
    { id: "XX", label: "Будь ласка, оберіть варіант" },
    { id: "20", label: "20 Вт" },
    { id: "30", label: "30 Вт" },
    { id: "40", label: "40 Вт" },
    { id: "60", label: "60 Вт" },
    { id: "80", label: "80 Вт" }
];

const LENS_OPTIONS = [
    { id: "XX/XX", type: "Будь ласка, оберіть", label: "Будь ласка, оберіть варіант", beam: "Будь ласка, оберіть варіант", image: "../noimg.jpg" },
    //COB вулична оптика
    { optgr: "COB вулична оптика", id: "S1", type: "COB", label: "S1 (145°x65°)", beam: "145°x65°", image: "S1.jpg" },
    { optgr: "COB вулична оптика", id: "S2", type: "COB", label: "S2 (170°x120°)", beam: "170°x120°", image: "S2.jpg" },
    { optgr: "COB вулична оптика", id: "S3", type: "COB", label: "S3 (160°x80°)", beam: "160°x80°", image: "S3.jpg" },
    { optgr: "COB вулична оптика", id: "S4", type: "COB", label: "S4 (150°x70°)", beam: "150°x70°", image: "S4.jpg" },
    //SMD-28 вулична оптика
    { optgr: "SMD-28 вулична оптика", id: "S6/T1", type: "SMD", label: "S6/T1 - type I (145°x80°)", beam: "145°x80°", image: "S6_T1.jpg" },
    { optgr: "SMD-28 вулична оптика", id: "S6/T2", type: "SMD", label: "S6/T2 - type II (160°x50°)", beam: "160°x50°", image: "S6_T2.jpg" },
    { optgr: "SMD-28 вулична оптика", id: "S6/T3", type: "SMD", label: "S6/T3 - type III (150°x60°)", beam: "150°x60°", image: "S6_T3.jpg" },
    { optgr: "SMD-28 вулична оптика", id: "S6/T4", type: "SMD", label: "S6/T4 - type IV (165°x78°)", beam: "165°x78°", image: "S6_T4.jpg" },
    { optgr: "SMD-28 вулична оптика", id: "S6/T5s", type: "SMD", label: "S6/T5s - type V (140°)", beam: "140°", image: "S6_T5s.jpg" },
    { optgr: "SMD-28 вулична оптика", id: "S6/Sc", type: "SMD", label: "S6/Sc - type II/III (long, 160°x65°)", beam: "160°x65°", image: "S6_Sc.jpg"},
    //COB прожекторна оптика
    { optgr: "COB прожекторна оптика", id: "F1/45", type: "COB", label: "F1/45 (45°x45°)", beam: "45°x45°", image: "F1_45.jpg" },
    { optgr: "COB прожекторна оптика", id: "F1/60", type: "COB", label: "F1/60 (60°x60°)", beam: "60°x60°", image: "F1_60.jpg" },
    { optgr: "COB прожекторна оптика", id: "F1/90", type: "COB", label: "F1/90 (90°x90°)", beam: "90°x90°", image: "F1_90.jpg" },
    { optgr: "COB прожекторна оптика", id: "F1/120", type: "COB", label: "F1/120 (120°x120°)", beam: "120°x120°", image: "F1_120.jpg" },
    //SMD-28 прожекторна оптика
    { optgr: "SMD-28 прожекторна оптика", id: "F6/30", type: "SMD", label: "F6/30 (30°x30°)", beam: "30°x30°", image: "F6_30.jpg" },
    { optgr: "SMD-28 прожекторна оптика", id: "F6/65", type: "SMD", label: "F6/65 (65°x65°)", beam: "65°x65°", image: "F6_65.jpg" },
    { optgr: "SMD-28 прожекторна оптика", id: "F6/90", type: "SMD", label: "F6/90 (90°x90°)", beam: "90°x90°", image: "F6_90.jpg" },
    //SMD-36 прожекторна оптика
    { optgr: "SMD-36 прожекторна оптика", id: "F7/18", type: "SMD", label: "F7/18 (18°x18°)", beam: "18°x18°", image: "F7_18.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/22", type: "SMD", label: "F7/22 (22°x22°)", beam: "22°x22°", image: "F7_22.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/30", type: "SMD", label: "F7/30 (30°x30°)", beam: "30°x30°", image: "F7_30.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/45", type: "SMD", label: "F7/45 (45°x45°)", beam: "45°x45°", image: "F7_45.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/1840", type: "SMD", label: "F7/1840 (18°x40°)", beam: "18°x40°", image: "F7_1840.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/115d", type: "SMD", label: "F7/115d (115°x115°)", beam: "115°x115°", image: "F7_115d.jpg" },
    { optgr: "SMD-36 прожекторна оптика", id: "F7/125", type: "SMD", label: "F7/125 (125°x125°)", beam: "125°x125°", image: "F7_125.jpg" }
];

const CCT_OPTIONS = [
    { id: "XK", label: "Будь ласка, оберіть варіант" },
    { id: "2.7K", label: "2700K" },
    { id: "3K", label: "3000K" },
    { id: "4K", label: "4000K" },
    { id: "5K", label: "5000K" },
    { id: "5.7K", label: "5700K" },
    { id: "6.5K", label: "6500K" }
];

const CRI_OPTIONS = [
    { id: "X", label: "Будь ласка, оберіть варіант" },
    { id: "6", label: "60-69" },
    { id: "7", label: "70-79" },
    { id: "8", label: "80-89" },
    { id: "9", label: "≥90" }
];

const STD_LETTER_OPTIONS = [
    { id: "X", label: "Будь ласка, оберіть варіант" },
    { id: "T", label: "T ≥91 лм/Вт (tiny)" },
    { id: "I", label: "I ≥101 лм/Вт (initial)" },
    { id: "S", label: "S ≥111 лм/Вт (small)" },
    { id: "M", label: "M ≥121 лм/Вт (medium)" },
    { id: "L", label: "L ≥131 лм/Вт (large)" },
    { id: "H", label: "H ≥131 лм/Вт (large)" },
    { id: "E", label: "E ≥141 лм/Вт (high)" },
    { id: "U", label: "U ≥151 лм/Вт (extra)" }
];

const MANUF_OPTIONS = [
    { id: "XX", label: "Будь ласка, оберіть варіант" },
    { id: "Ci", label: "Citizen Electronics Co., Ltd." },
    { id: "Os", label: "Osram AG." },
    { id: "Se", label: "Seoul Semiconductor Co., Ltd." },
    { id: "Cr", label: "Cree Inc." },
    { id: "Sa", label: "Samsung Electronics Co., Ltd." }
];

const SPC_OPTIONS = [
    { id: "", label: "Жодного" },
    { id: "SPC", label: "SPC - In:5kA" }
];

const DIMMING_OPTIONS = [
    { id: "", label: "Жодного" },
    { id: "DL", label: "DL - DALI" },
    { id: "D01", label: "D01 - 0-10V з аварійним режимом дімування" },
    { id: "DEM", label: "DEM - аварійний режим дімування" },
    { id: "DMV", label: "DMV - дімування значенням напруги мережі" }
];

const MOUNT_OPTIONS = [
    { id: "", label: "Будь ласка, оберіть варіант", mounting: "Будь ласка, оберіть варіант", image: "../noimg.jpg" },
    { id: "Console", label: "Консольне (Горизонтально)", mounting: "Консольне", image: "C-hor.jpg" },
    { id: "Pole Top", label: "Торшерне", mounting: "Торшерне", image: "C-vert.jpg" },
    { id: "T1", label: "T1 - підвіс на трос, 3d", mounting: "T1", image: "T1.jpg" },
    { id: "F1", label: "F1 - прожектор вузький, 2d", mounting: "F1", image: "F1.jpg" },
    { id: "F2", label: "F2 - прожектор вузький, 3d", mounting: "F2", image: "F2.jpg" },
    { id: "F3", label: "F3 - прожектор широкий ліра", mounting: "F3", image: "F3.jpg" },
    { id: "Fw", label: "Fw - прожектор широкий роздільний", mounting: "Fw", image: "Fw.jpg" },
    { id: "R", label: "R - підвіс рим гайка", mounting: "R", image: "R.jpg" },
    { id: "Rx2", label: "Rx2 - підвіс рим гайка, 2шт.", mounting: "Rx2", image: "Rx2.jpg" }
];

const ASC_OPTIONS = [
    { id: "", label: "Жодного" },
    { id: "ASC-LRWF", label: "ASC-LRWF" },
    { id: "ASC-LRWF-GPS", label: "ASC-LRWF-GPS" },
    { id: "ASC-LRWF-PC", label: "ASC-LRWF-PC" },
    { id: "ASC-LRWF-IR12", label: "ASC-LRWF-IR12" },
    { id: "ASC-LRWF-IR12-PC", label: "ASC-LRWF-IR12-PC" }
];