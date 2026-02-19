/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{// On attend que le DOM soit chargé pour éviter les erreurs d'élément non trouvé\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const btn = document.getElementById('calculate-btn');\r\n    const input1 = document.getElementById('input1');\r\n    const input2 = document.getElementById('input2');\r\n    const resultDisplay = document.getElementById('result');\r\n\r\n    // Vérification de l'existence des éléments (évite les TypeErrors)\r\n    if (btn && input1 && input2 && resultDisplay) {\r\n        btn.addEventListener('click', () => {\r\n            // Conversion explicite en nombre avec Number() ou parseFloat()\r\n            const val1 = Number(input1.value);\r\n            const val2 = Number(input2.value);\r\n\r\n            // Gestion des cas où l'entrée n'est pas un nombre (NaN)\r\n            if (isNaN(val1) || isNaN(val2)) {\r\n                resultDisplay.textContent = \"Erreur : Veuillez entrer des chiffres valides.\";\r\n                return;\r\n            }\r\n\r\n            const total = val1 + val2;\r\n            resultDisplay.textContent = `Résultat : ${total}`;\r\n        });\r\n    } else {\r\n        console.error(\"Un ou plusieurs éléments HTML sont manquants dans le DOM.\");\r\n    }\r\n});\n\n//# sourceURL=webpack://mon-projet/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;