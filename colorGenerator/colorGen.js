// =========== All DOM OBJECTS.=========
// ------- Heading ---------
let heading= document.querySelector(".heading");
// ------- Buttons ---------
let btnGen = document.querySelector(".btn-gen");
const btnMode = document.querySelector(".btn-mode");
const btnFormat = document.querySelector(".btn-format");
const btnCopy = document.querySelector(".btn-copy");
// --------- Color Divs ---------
let colorDivs = document.querySelectorAll(".color-div");

// ======== STATE VARIABLES(IMPORTANT) ===========

let isSameMode = true;      // true = Same color, false = Different
let colorFormat = "RGB";   // RGB or HEX

// --------- Generate random RGB object ----------
function generateRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

// ------------ Convert RGB to HEX ------------
function rgbToHex({ r, g, b }) {
    return (
        "#" + [r, g, b]
            .map(val => val.toString(16).padStart(2, "0"))
            .join("")
    ).toUpperCase();
}

// ------ Format color based on current mode -------
function formatColor(rgbObj) {
    if (colorFormat === "RGB") {
        return `rgb(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
    } else {
        return rgbToHex(rgbObj);
    }
}

// =========== MAIN COLOR APPLY ============
function applyColors() {
    if (isSameMode) {
    // ------ SAME COLOR MODE ---------
        const rgb = generateRGB();
        const color = formatColor(rgb);
        heading.innerText = color;
        heading.style.color = color;
        colorDivs.forEach(div => {
            div.style.backgroundColor = color;
            div.style.borderColor = color;
        });
    } else {
    // ------- DIFFERENT COLOR MODE --------
        let lastColor = "";
        colorDivs.forEach(div => {
            const rgb = generateRGB();
            const color = formatColor(rgb);
            div.style.backgroundColor = color;
            div.style.borderColor = color;
            lastColor = color;
        });
        heading.innerText = "Multiple Colors";
        heading.style.color = lastColor;
    }
}

// ========= EVENT LISTENERS ================
// ---------- Generate Button -------------
btnGen.addEventListener("click", applyColors);

// ----------- Mode Toggle ----------------
btnMode.addEventListener("click", () => {
    isSameMode = !isSameMode;
    btnMode.innerText = isSameMode ? "Mode: Same" : "Mode: Different";
});

// ----------- Format Toggle -------------
btnFormat.addEventListener("click", () => {
    colorFormat = colorFormat === "RGB" ? "HEX" : "RGB";
    btnFormat.innerText = `Format: ${colorFormat}`;
});

// ------------ Copy Button --------------
btnCopy.addEventListener("click", () => {
    const text = heading.innerText;
    if (!text || text === "Multiple Colors") {
        alert("Nothing to copy!");
        return;
    }
    navigator.clipboard.writeText(text);
    btnCopy.innerText = "Copied!";
    setTimeout(() => {
        btnCopy.innerText = "Copy Color";
    }, 1500)
});