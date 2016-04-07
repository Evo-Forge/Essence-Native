"use strict";

var styles = {

	"e-text-amber-50": {
	  color: "#fff8e1",
	},
	"e-text-amber-100": {
	  color: "#ffecb3",
	},
	"e-text-amber-200": {
	  color: "#ffe082",
	},
	"e-text-amber-300": {
	  color: "#ffd54f",
	},
	"e-text-amber-400": {
	  color: "#ffca28",
	},
	"e-text-amber-500": {
	  color: "#ffc107",
	},
	"e-text-amber-600": {
	  color: "#ffb300",
	},
	"e-text-amber-700": {
	  color: "#ffa000",
	},
	"e-text-amber-800": {
	  color: "#ff8f00",
	},
	"e-text-amber-900": {
	  color: "#ff6f00",
	},
	"e-text-amber-A100": {
	  color: "#ffe57f",
	},
	"e-text-amber-A200": {
	  color: "#ffd740",
	},
	"e-text-amber-A400": {
	  color: "#ffc400",
	},
	"e-text-amber-A700": {
	  color: "#ffab00",
	},
	"e-text-blue-50": {
	  color: "#e3f2fd",
	},
	"e-text-blue-100": {
	  color: "#bbdefb",
	},
	"e-text-blue-200": {
	  color: "#90caf9",
	},
	"e-text-blue-300": {
	  color: "#64b5f6",
	},
	"e-text-blue-400": {
	  color: "#42a5f5",
	},
	"e-text-blue-500": {
	  color: "#2196f3",
	},
	"e-text-blue-600": {
	  color: "#1e88e5",
	},
	"e-text-blue-700": {
	  color: "#1976d2",
	},
	"e-text-blue-800": {
	  color: "#1565c0",
	},
	"e-text-blue-900": {
	  color: "#0d47a1",
	},
	"e-text-blue-A100": {
	  color: "#82b1ff",
	},
	"e-text-blue-A200": {
	  color: "#448aff",
	},
	"e-text-blue-A400": {
	  color: "#2979ff",
	},
	"e-text-blue-A700": {
	  color: "#2962ff",
	},
	"e-text-cyan-50": {
	  color: "#e0f7fa",
	},
	"e-text-cyan-100": {
	  color: "#b2ebf2",
	},
	"e-text-cyan-200": {
	  color: "#80deea",
	},
	"e-text-cyan-300": {
	  color: "#4dd0e1",
	},
	"e-text-cyan-400": {
	  color: "#26c6da",
	},
	"e-text-cyan-500": {
	  color: "#00bcd4",
	},
	"e-text-cyan-600": {
	  color: "#00acc1",
	},
	"e-text-cyan-700": {
	  color: "#0097a7",
	},
	"e-text-cyan-800": {
	  color: "#00838f",
	},
	"e-text-cyan-900": {
	  color: "#006064",
	},
	"e-text-cyan-A100": {
	  color: "#84ffff",
	},
	"e-text-cyan-A200": {
	  color: "#18ffff",
	},
	"e-text-cyan-A400": {
	  color: "#00e5ff",
	},
	"e-text-cyan-A700": {
	  color: "#00b8d4",
	},
	"e-text-deep-orange-50": {
	  color: "#fbe9e7",
	},
	"e-text-deep-orange-100": {
	  color: "#ffccbc",
	},
	"e-text-deep-orange-200": {
	  color: "#ffab91",
	},
	"e-text-deep-orange-300": {
	  color: "#ff8a65",
	},
	"e-text-deep-orange-400": {
	  color: "#ff7043",
	},
	"e-text-deep-orange-500": {
	  color: "#ff5722",
	},
	"e-text-deep-orange-600": {
	  color: "#f4511e",
	},
	"e-text-deep-orange-700": {
	  color: "#e64a19",
	},
	"e-text-deep-orange-800": {
	  color: "#d84315",
	},
	"e-text-deep-orange-900": {
	  color: "#bf360c",
	},
	"e-text-deep-orange-A100": {
	  color: "#ff9e80",
	},
	"e-text-deep-orange-A200": {
	  color: "#ff6e40",
	},
	"e-text-deep-orange-A400": {
	  color: "#ff3d00",
	},
	"e-text-deep-orange-A700": {
	  color: "#dd2c00",
	},
	"e-text-deep-purple-50": {
	  color: "#ede7f6",
	},
	"e-text-deep-purple-100": {
	  color: "#d1c4e9",
	},
	"e-text-deep-purple-200": {
	  color: "#b39ddb",
	},
	"e-text-deep-purple-300": {
	  color: "#9575cd",
	},
	"e-text-deep-purple-400": {
	  color: "#7e57c2",
	},
	"e-text-deep-purple-500": {
	  color: "#673ab7",
	},
	"e-text-deep-purple-600": {
	  color: "#5e35b1",
	},
	"e-text-deep-purple-700": {
	  color: "#512da8",
	},
	"e-text-deep-purple-800": {
	  color: "#4527a0",
	},
	"e-text-deep-purple-900": {
	  color: "#311b92",
	},
	"e-text-deep-purple-A100": {
	  color: "#b388ff",
	},
	"e-text-deep-purple-A200": {
	  color: "#7c4dff",
	},
	"e-text-deep-purple-A400": {
	  color: "#651fff",
	},
	"e-text-deep-purple-A700": {
	  color: "#6200ea",
	},
	"e-text-green-50": {
	  color: "#e8f5e9",
	},
	"e-text-green-100": {
	  color: "#c8e6c9",
	},
	"e-text-green-200": {
	  color: "#a5d6a7",
	},
	"e-text-green-300": {
	  color: "#81c784",
	},
	"e-text-green-400": {
	  color: "#66bb6a",
	},
	"e-text-green-500": {
	  color: "#4caf50",
	},
	"e-text-green-600": {
	  color: "#43a047",
	},
	"e-text-green-700": {
	  color: "#388e3c",
	},
	"e-text-green-800": {
	  color: "#2e7d32",
	},
	"e-text-green-900": {
	  color: "#1b5e20",
	},
	"e-text-green-A100": {
	  color: "#b9f6ca",
	},
	"e-text-green-A200": {
	  color: "#69f0ae",
	},
	"e-text-green-A400": {
	  color: "#00e676",
	},
	"e-text-green-A700": {
	  color: "#00c853",
	},
	"e-text-indigo-50": {
	  color: "#e8eaf6",
	},
	"e-text-indigo-100": {
	  color: "#c5cae9",
	},
	"e-text-indigo-200": {
	  color: "#9fa8da",
	},
	"e-text-indigo-300": {
	  color: "#7986cb",
	},
	"e-text-indigo-400": {
	  color: "#5c6bc0",
	},
	"e-text-indigo-500": {
	  color: "#3f51b5",
	},
	"e-text-indigo-600": {
	  color: "#3949ab",
	},
	"e-text-indigo-700": {
	  color: "#303f9f",
	},
	"e-text-indigo-800": {
	  color: "#283593",
	},
	"e-text-indigo-900": {
	  color: "#1a237e",
	},
	"e-text-indigo-A100": {
	  color: "#8c9eff",
	},
	"e-text-indigo-A200": {
	  color: "#536dfe",
	},
	"e-text-indigo-A400": {
	  color: "#3d5afe",
	},
	"e-text-indigo-A700": {
	  color: "#304ffe",
	},
	"e-text-light-blue-50": {
	  color: "#e1f5fe",
	},
	"e-text-light-blue-100": {
	  color: "#b3e5fc",
	},
	"e-text-light-blue-200": {
	  color: "#81d4fa",
	},
	"e-text-light-blue-300": {
	  color: "#4fc3f7",
	},
	"e-text-light-blue-400": {
	  color: "#29b6f6",
	},
	"e-text-light-blue-500": {
	  color: "#03a9f4",
	},
	"e-text-light-blue-600": {
	  color: "#039be5",
	},
	"e-text-light-blue-700": {
	  color: "#0288d1",
	},
	"e-text-light-blue-800": {
	  color: "#0277bd",
	},
	"e-text-light-blue-900": {
	  color: "#01579b",
	},
	"e-text-light-blue-A100": {
	  color: "#80d8ff",
	},
	"e-text-light-blue-A200": {
	  color: "#40c4ff",
	},
	"e-text-light-blue-A400": {
	  color: "#00b0ff",
	},
	"e-text-light-blue-A700": {
	  color: "#0091ea",
	},
	"e-text-light-green-50": {
	  color: "#f1f8e9",
	},
	"e-text-light-green-100": {
	  color: "#dcedc8",
	},
	"e-text-light-green-200": {
	  color: "#c5e1a5",
	},
	"e-text-light-green-300": {
	  color: "#aed581",
	},
	"e-text-light-green-400": {
	  color: "#9ccc65",
	},
	"e-text-light-green-500": {
	  color: "#8bc34a",
	},
	"e-text-light-green-600": {
	  color: "#7cb342",
	},
	"e-text-light-green-700": {
	  color: "#689f38",
	},
	"e-text-light-green-800": {
	  color: "#558b2f",
	},
	"e-text-light-green-900": {
	  color: "#33691e",
	},
	"e-text-light-green-A100": {
	  color: "#ccff90",
	},
	"e-text-light-green-A200": {
	  color: "#b2ff59",
	},
	"e-text-light-green-A400": {
	  color: "#76ff03",
	},
	"e-text-light-green-A700": {
	  color: "#64dd17",
	},
	"e-text-lime-50": {
	  color: "#f9fbe7",
	},
	"e-text-lime-100": {
	  color: "#f0f4c3",
	},
	"e-text-lime-200": {
	  color: "#e6ee9c",
	},
	"e-text-lime-300": {
	  color: "#dce775",
	},
	"e-text-lime-400": {
	  color: "#d4e157",
	},
	"e-text-lime-500": {
	  color: "#cddc39",
	},
	"e-text-lime-600": {
	  color: "#c0ca33",
	},
	"e-text-lime-700": {
	  color: "#afb42b",
	},
	"e-text-lime-800": {
	  color: "#9e9d24",
	},
	"e-text-lime-900": {
	  color: "#827717",
	},
	"e-text-lime-A100": {
	  color: "#f4ff81",
	},
	"e-text-lime-A200": {
	  color: "#eeff41",
	},
	"e-text-lime-A400": {
	  color: "#c6ff00",
	},
	"e-text-lime-A700": {
	  color: "#aeea00",
	},
	"e-text-orange-50": {
	  color: "#fff3e0",
	},
	"e-text-orange-100": {
	  color: "#ffe0b2",
	},
	"e-text-orange-200": {
	  color: "#ffcc80",
	},
	"e-text-orange-300": {
	  color: "#ffb74d",
	},
	"e-text-orange-400": {
	  color: "#ffa726",
	},
	"e-text-orange-500": {
	  color: "#ff9800",
	},
	"e-text-orange-600": {
	  color: "#fb8c00",
	},
	"e-text-orange-700": {
	  color: "#f57c00",
	},
	"e-text-orange-800": {
	  color: "#ef6c00",
	},
	"e-text-orange-900": {
	  color: "#e65100",
	},
	"e-text-orange-A100": {
	  color: "#ffd180",
	},
	"e-text-orange-A200": {
	  color: "#ffab40",
	},
	"e-text-orange-A400": {
	  color: "#ff9100",
	},
	"e-text-orange-A700": {
	  color: "#ff6d00",
	},
	"e-text-pink-50": {
	  color: "#fce4ec",
	},
	"e-text-pink-100": {
	  color: "#f8bbd0",
	},
	"e-text-pink-200": {
	  color: "#f48fb1",
	},
	"e-text-pink-300": {
	  color: "#f06292",
	},
	"e-text-pink-400": {
	  color: "#ec407a",
	},
	"e-text-pink-500": {
	  color: "#e91e63",
	},
	"e-text-pink-600": {
	  color: "#d81b60",
	},
	"e-text-pink-700": {
	  color: "#c2185b",
	},
	"e-text-pink-800": {
	  color: "#ad1457",
	},
	"e-text-pink-900": {
	  color: "#880e4f",
	},
	"e-text-pink-A100": {
	  color: "#ff80ab",
	},
	"e-text-pink-A200": {
	  color: "#ff4081",
	},
	"e-text-pink-A400": {
	  color: "#f50057",
	},
	"e-text-pink-A700": {
	  color: "#c51162",
	},
	"e-text-purple-50": {
	  color: "#f3e5f5",
	},
	"e-text-purple-100": {
	  color: "#e1bee7",
	},
	"e-text-purple-200": {
	  color: "#ce93d8",
	},
	"e-text-purple-300": {
	  color: "#ba68c8",
	},
	"e-text-purple-400": {
	  color: "#ab47bc",
	},
	"e-text-purple-500": {
	  color: "#9c27b0",
	},
	"e-text-purple-600": {
	  color: "#8e24aa",
	},
	"e-text-purple-700": {
	  color: "#7b1fa2",
	},
	"e-text-purple-800": {
	  color: "#6a1b9a",
	},
	"e-text-purple-900": {
	  color: "#4a148c",
	},
	"e-text-purple-A100": {
	  color: "#ea80fc",
	},
	"e-text-purple-A200": {
	  color: "#e040fb",
	},
	"e-text-purple-A400": {
	  color: "#d500f9",
	},
	"e-text-purple-A700": {
	  color: "#aa00ff",
	},
	"e-text-red-50": {
	  color: "#ffebee",
	},
	"e-text-red-100": {
	  color: "#ffcdd2",
	},
	"e-text-red-200": {
	  color: "#ef9a9a",
	},
	"e-text-red-300": {
	  color: "#e57373",
	},
	"e-text-red-400": {
	  color: "#ef5350",
	},
	"e-text-red-500": {
	  color: "#f44336",
	},
	"e-text-red-600": {
	  color: "#e53935",
	},
	"e-text-red-700": {
	  color: "#d32f2f",
	},
	"e-text-red-800": {
	  color: "#c62828",
	},
	"e-text-red-900": {
	  color: "#b71c1c",
	},
	"e-text-red-A100": {
	  color: "#ff8a80",
	},
	"e-text-red-A200": {
	  color: "#ff5252",
	},
	"e-text-red-A400": {
	  color: "#ff1744",
	},
	"e-text-red-A700": {
	  color: "#d50000",
	},
	"e-text-teal-50": {
	  color: "#e0f2f1",
	},
	"e-text-teal-100": {
	  color: "#b2dfdb",
	},
	"e-text-teal-200": {
	  color: "#80cbc4",
	},
	"e-text-teal-300": {
	  color: "#4db6ac",
	},
	"e-text-teal-400": {
	  color: "#26a69a",
	},
	"e-text-teal-500": {
	  color: "#009688",
	},
	"e-text-teal-600": {
	  color: "#00897b",
	},
	"e-text-teal-700": {
	  color: "#00796b",
	},
	"e-text-teal-800": {
	  color: "#00695c",
	},
	"e-text-teal-900": {
	  color: "#004d40",
	},
	"e-text-teal-A100": {
	  color: "#a7ffeb",
	},
	"e-text-teal-A200": {
	  color: "#64ffda",
	},
	"e-text-teal-A400": {
	  color: "#1de9b6",
	},
	"e-text-teal-A700": {
	  color: "#00bfa5",
	},
	"e-text-yellow-50": {
	  color: "#fffde7",
	},
	"e-text-yellow-100": {
	  color: "#fff9c4",
	},
	"e-text-yellow-200": {
	  color: "#fff59d",
	},
	"e-text-yellow-300": {
	  color: "#fff176",
	},
	"e-text-yellow-400": {
	  color: "#ffee58",
	},
	"e-text-yellow-500": {
	  color: "#ffeb3b",
	},
	"e-text-yellow-600": {
	  color: "#fdd835",
	},
	"e-text-yellow-700": {
	  color: "#fbc02d",
	},
	"e-text-yellow-800": {
	  color: "#f9a825",
	},
	"e-text-yellow-900": {
	  color: "#f57f17",
	},
	"e-text-yellow-A100": {
	  color: "#ffff8d",
	},
	"e-text-yellow-A200": {
	  color: "#ffff00",
	},
	"e-text-yellow-A400": {
	  color: "#ffea00",
	},
	"e-text-yellow-A700": {
	  color: "#ffd600",
	},
	"e-background-amber-50": {
	  backgroundColor: "#fff8e1",
	},
	"e-background-amber-100": {
	  backgroundColor: "#ffecb3",
	},
	"e-background-amber-200": {
	  backgroundColor: "#ffe082",
	},
	"e-background-amber-300": {
	  backgroundColor: "#ffd54f",
	},
	"e-background-amber-400": {
	  backgroundColor: "#ffca28",
	},
	"e-background-amber-500": {
	  backgroundColor: "#ffc107",
	},
	"e-background-amber-600": {
	  backgroundColor: "#ffb300",
	},
	"e-background-amber-700": {
	  backgroundColor: "#ffa000",
	},
	"e-background-amber-800": {
	  backgroundColor: "#ff8f00",
	},
	"e-background-amber-900": {
	  backgroundColor: "#ff6f00",
	},
	"e-background-amber-A100": {
	  backgroundColor: "#ffe57f",
	},
	"e-background-amber-A200": {
	  backgroundColor: "#ffd740",
	},
	"e-background-amber-A400": {
	  backgroundColor: "#ffc400",
	},
	"e-background-amber-A700": {
	  backgroundColor: "#ffab00",
	},
	"e-background-blue-50": {
	  backgroundColor: "#e3f2fd",
	},
	"e-background-blue-100": {
	  backgroundColor: "#bbdefb",
	},
	"e-background-blue-200": {
	  backgroundColor: "#90caf9",
	},
	"e-background-blue-300": {
	  backgroundColor: "#64b5f6",
	},
	"e-background-blue-400": {
	  backgroundColor: "#42a5f5",
	},
	"e-background-blue-500": {
	  backgroundColor: "#2196f3",
	},
	"e-background-blue-600": {
	  backgroundColor: "#1e88e5",
	},
	"e-background-blue-700": {
	  backgroundColor: "#1976d2",
	},
	"e-background-blue-800": {
	  backgroundColor: "#1565c0",
	},
	"e-background-blue-900": {
	  backgroundColor: "#0d47a1",
	},
	"e-background-blue-A100": {
	  backgroundColor: "#82b1ff",
	},
	"e-background-blue-A200": {
	  backgroundColor: "#448aff",
	},
	"e-background-blue-A400": {
	  backgroundColor: "#2979ff",
	},
	"e-background-blue-A700": {
	  backgroundColor: "#2962ff",
	},
	"e-background-cyan-50": {
	  backgroundColor: "#e0f7fa",
	},
	"e-background-cyan-100": {
	  backgroundColor: "#b2ebf2",
	},
	"e-background-cyan-200": {
	  backgroundColor: "#80deea",
	},
	"e-background-cyan-300": {
	  backgroundColor: "#4dd0e1",
	},
	"e-background-cyan-400": {
	  backgroundColor: "#26c6da",
	},
	"e-background-cyan-500": {
	  backgroundColor: "#00bcd4",
	},
	"e-background-cyan-600": {
	  backgroundColor: "#00acc1",
	},
	"e-background-cyan-700": {
	  backgroundColor: "#0097a7",
	},
	"e-background-cyan-800": {
	  backgroundColor: "#00838f",
	},
	"e-background-cyan-900": {
	  backgroundColor: "#006064",
	},
	"e-background-cyan-A100": {
	  backgroundColor: "#84ffff",
	},
	"e-background-cyan-A200": {
	  backgroundColor: "#18ffff",
	},
	"e-background-cyan-A400": {
	  backgroundColor: "#00e5ff",
	},
	"e-background-cyan-A700": {
	  backgroundColor: "#00b8d4",
	},
	"e-background-deep-orange-50": {
	  backgroundColor: "#fbe9e7",
	},
	"e-background-deep-orange-100": {
	  backgroundColor: "#ffccbc",
	},
	"e-background-deep-orange-200": {
	  backgroundColor: "#ffab91",
	},
	"e-background-deep-orange-300": {
	  backgroundColor: "#ff8a65",
	},
	"e-background-deep-orange-400": {
	  backgroundColor: "#ff7043",
	},
	"e-background-deep-orange-500": {
	  backgroundColor: "#ff5722",
	},
	"e-background-deep-orange-600": {
	  backgroundColor: "#f4511e",
	},
	"e-background-deep-orange-700": {
	  backgroundColor: "#e64a19",
	},
	"e-background-deep-orange-800": {
	  backgroundColor: "#d84315",
	},
	"e-background-deep-orange-900": {
	  backgroundColor: "#bf360c",
	},
	"e-background-deep-orange-A100": {
	  backgroundColor: "#ff9e80",
	},
	"e-background-deep-orange-A200": {
	  backgroundColor: "#ff6e40",
	},
	"e-background-deep-orange-A400": {
	  backgroundColor: "#ff3d00",
	},
	"e-background-deep-orange-A700": {
	  backgroundColor: "#dd2c00",
	},
	"e-background-deep-purple-50": {
	  backgroundColor: "#ede7f6",
	},
	"e-background-deep-purple-100": {
	  backgroundColor: "#d1c4e9",
	},
	"e-background-deep-purple-200": {
	  backgroundColor: "#b39ddb",
	},
	"e-background-deep-purple-300": {
	  backgroundColor: "#9575cd",
	},
	"e-background-deep-purple-400": {
	  backgroundColor: "#7e57c2",
	},
	"e-background-deep-purple-500": {
	  backgroundColor: "#673ab7",
	},
	"e-background-deep-purple-600": {
	  backgroundColor: "#5e35b1",
	},
	"e-background-deep-purple-700": {
	  backgroundColor: "#512da8",
	},
	"e-background-deep-purple-800": {
	  backgroundColor: "#4527a0",
	},
	"e-background-deep-purple-900": {
	  backgroundColor: "#311b92",
	},
	"e-background-deep-purple-A100": {
	  backgroundColor: "#b388ff",
	},
	"e-background-deep-purple-A200": {
	  backgroundColor: "#7c4dff",
	},
	"e-background-deep-purple-A400": {
	  backgroundColor: "#651fff",
	},
	"e-background-deep-purple-A700": {
	  backgroundColor: "#6200ea",
	},
	"e-background-green-50": {
	  backgroundColor: "#e8f5e9",
	},
	"e-background-green-100": {
	  backgroundColor: "#c8e6c9",
	},
	"e-background-green-200": {
	  backgroundColor: "#a5d6a7",
	},
	"e-background-green-300": {
	  backgroundColor: "#81c784",
	},
	"e-background-green-400": {
	  backgroundColor: "#66bb6a",
	},
	"e-background-green-500": {
	  backgroundColor: "#4caf50",
	},
	"e-background-green-600": {
	  backgroundColor: "#43a047",
	},
	"e-background-green-700": {
	  backgroundColor: "#388e3c",
	},
	"e-background-green-800": {
	  backgroundColor: "#2e7d32",
	},
	"e-background-green-900": {
	  backgroundColor: "#1b5e20",
	},
	"e-background-green-A100": {
	  backgroundColor: "#b9f6ca",
	},
	"e-background-green-A200": {
	  backgroundColor: "#69f0ae",
	},
	"e-background-green-A400": {
	  backgroundColor: "#00e676",
	},
	"e-background-green-A700": {
	  backgroundColor: "#00c853",
	},
	"e-background-indigo-50": {
	  backgroundColor: "#e8eaf6",
	},
	"e-background-indigo-100": {
	  backgroundColor: "#c5cae9",
	},
	"e-background-indigo-200": {
	  backgroundColor: "#9fa8da",
	},
	"e-background-indigo-300": {
	  backgroundColor: "#7986cb",
	},
	"e-background-indigo-400": {
	  backgroundColor: "#5c6bc0",
	},
	"e-background-indigo-500": {
	  backgroundColor: "#3f51b5",
	},
	"e-background-indigo-600": {
	  backgroundColor: "#3949ab",
	},
	"e-background-indigo-700": {
	  backgroundColor: "#303f9f",
	},
	"e-background-indigo-800": {
	  backgroundColor: "#283593",
	},
	"e-background-indigo-900": {
	  backgroundColor: "#1a237e",
	},
	"e-background-indigo-A100": {
	  backgroundColor: "#8c9eff",
	},
	"e-background-indigo-A200": {
	  backgroundColor: "#536dfe",
	},
	"e-background-indigo-A400": {
	  backgroundColor: "#3d5afe",
	},
	"e-background-indigo-A700": {
	  backgroundColor: "#304ffe",
	},
	"e-background-light-blue-50": {
	  backgroundColor: "#e1f5fe",
	},
	"e-background-light-blue-100": {
	  backgroundColor: "#b3e5fc",
	},
	"e-background-light-blue-200": {
	  backgroundColor: "#81d4fa",
	},
	"e-background-light-blue-300": {
	  backgroundColor: "#4fc3f7",
	},
	"e-background-light-blue-400": {
	  backgroundColor: "#29b6f6",
	},
	"e-background-light-blue-500": {
	  backgroundColor: "#03a9f4",
	},
	"e-background-light-blue-600": {
	  backgroundColor: "#039be5",
	},
	"e-background-light-blue-700": {
	  backgroundColor: "#0288d1",
	},
	"e-background-light-blue-800": {
	  backgroundColor: "#0277bd",
	},
	"e-background-light-blue-900": {
	  backgroundColor: "#01579b",
	},
	"e-background-light-blue-A100": {
	  backgroundColor: "#80d8ff",
	},
	"e-background-light-blue-A200": {
	  backgroundColor: "#40c4ff",
	},
	"e-background-light-blue-A400": {
	  backgroundColor: "#00b0ff",
	},
	"e-background-light-blue-A700": {
	  backgroundColor: "#0091ea",
	},
	"e-background-light-green-50": {
	  backgroundColor: "#f1f8e9",
	},
	"e-background-light-green-100": {
	  backgroundColor: "#dcedc8",
	},
	"e-background-light-green-200": {
	  backgroundColor: "#c5e1a5",
	},
	"e-background-light-green-300": {
	  backgroundColor: "#aed581",
	},
	"e-background-light-green-400": {
	  backgroundColor: "#9ccc65",
	},
	"e-background-light-green-500": {
	  backgroundColor: "#8bc34a",
	},
	"e-background-light-green-600": {
	  backgroundColor: "#7cb342",
	},
	"e-background-light-green-700": {
	  backgroundColor: "#689f38",
	},
	"e-background-light-green-800": {
	  backgroundColor: "#558b2f",
	},
	"e-background-light-green-900": {
	  backgroundColor: "#33691e",
	},
	"e-background-light-green-A100": {
	  backgroundColor: "#ccff90",
	},
	"e-background-light-green-A200": {
	  backgroundColor: "#b2ff59",
	},
	"e-background-light-green-A400": {
	  backgroundColor: "#76ff03",
	},
	"e-background-light-green-A700": {
	  backgroundColor: "#64dd17",
	},
	"e-background-lime-50": {
	  backgroundColor: "#f9fbe7",
	},
	"e-background-lime-100": {
	  backgroundColor: "#f0f4c3",
	},
	"e-background-lime-200": {
	  backgroundColor: "#e6ee9c",
	},
	"e-background-lime-300": {
	  backgroundColor: "#dce775",
	},
	"e-background-lime-400": {
	  backgroundColor: "#d4e157",
	},
	"e-background-lime-500": {
	  backgroundColor: "#cddc39",
	},
	"e-background-lime-600": {
	  backgroundColor: "#c0ca33",
	},
	"e-background-lime-700": {
	  backgroundColor: "#afb42b",
	},
	"e-background-lime-800": {
	  backgroundColor: "#9e9d24",
	},
	"e-background-lime-900": {
	  backgroundColor: "#827717",
	},
	"e-background-lime-A100": {
	  backgroundColor: "#f4ff81",
	},
	"e-background-lime-A200": {
	  backgroundColor: "#eeff41",
	},
	"e-background-lime-A400": {
	  backgroundColor: "#c6ff00",
	},
	"e-background-lime-A700": {
	  backgroundColor: "#aeea00",
	},
	"e-background-orange-50": {
	  backgroundColor: "#fff3e0",
	},
	"e-background-orange-100": {
	  backgroundColor: "#ffe0b2",
	},
	"e-background-orange-200": {
	  backgroundColor: "#ffcc80",
	},
	"e-background-orange-300": {
	  backgroundColor: "#ffb74d",
	},
	"e-background-orange-400": {
	  backgroundColor: "#ffa726",
	},
	"e-background-orange-500": {
	  backgroundColor: "#ff9800",
	},
	"e-background-orange-600": {
	  backgroundColor: "#fb8c00",
	},
	"e-background-orange-700": {
	  backgroundColor: "#f57c00",
	},
	"e-background-orange-800": {
	  backgroundColor: "#ef6c00",
	},
	"e-background-orange-900": {
	  backgroundColor: "#e65100",
	},
	"e-background-orange-A100": {
	  backgroundColor: "#ffd180",
	},
	"e-background-orange-A200": {
	  backgroundColor: "#ffab40",
	},
	"e-background-orange-A400": {
	  backgroundColor: "#ff9100",
	},
	"e-background-orange-A700": {
	  backgroundColor: "#ff6d00",
	},
	"e-background-pink-50": {
	  backgroundColor: "#fce4ec",
	},
	"e-background-pink-100": {
	  backgroundColor: "#f8bbd0",
	},
	"e-background-pink-200": {
	  backgroundColor: "#f48fb1",
	},
	"e-background-pink-300": {
	  backgroundColor: "#f06292",
	},
	"e-background-pink-400": {
	  backgroundColor: "#ec407a",
	},
	"e-background-pink-500": {
	  backgroundColor: "#e91e63",
	},
	"e-background-pink-600": {
	  backgroundColor: "#d81b60",
	},
	"e-background-pink-700": {
	  backgroundColor: "#c2185b",
	},
	"e-background-pink-800": {
	  backgroundColor: "#ad1457",
	},
	"e-background-pink-900": {
	  backgroundColor: "#880e4f",
	},
	"e-background-pink-A100": {
	  backgroundColor: "#ff80ab",
	},
	"e-background-pink-A200": {
	  backgroundColor: "#ff4081",
	},
	"e-background-pink-A400": {
	  backgroundColor: "#f50057",
	},
	"e-background-pink-A700": {
	  backgroundColor: "#c51162",
	},
	"e-background-purple-50": {
	  backgroundColor: "#f3e5f5",
	},
	"e-background-purple-100": {
	  backgroundColor: "#e1bee7",
	},
	"e-background-purple-200": {
	  backgroundColor: "#ce93d8",
	},
	"e-background-purple-300": {
	  backgroundColor: "#ba68c8",
	},
	"e-background-purple-400": {
	  backgroundColor: "#ab47bc",
	},
	"e-background-purple-500": {
	  backgroundColor: "#9c27b0",
	},
	"e-background-purple-600": {
	  backgroundColor: "#8e24aa",
	},
	"e-background-purple-700": {
	  backgroundColor: "#7b1fa2",
	},
	"e-background-purple-800": {
	  backgroundColor: "#6a1b9a",
	},
	"e-background-purple-900": {
	  backgroundColor: "#4a148c",
	},
	"e-background-purple-A100": {
	  backgroundColor: "#ea80fc",
	},
	"e-background-purple-A200": {
	  backgroundColor: "#e040fb",
	},
	"e-background-purple-A400": {
	  backgroundColor: "#d500f9",
	},
	"e-background-purple-A700": {
	  backgroundColor: "#aa00ff",
	},
	"e-background-red-50": {
	  backgroundColor: "#ffebee",
	},
	"e-background-red-100": {
	  backgroundColor: "#ffcdd2",
	},
	"e-background-red-200": {
	  backgroundColor: "#ef9a9a",
	},
	"e-background-red-300": {
	  backgroundColor: "#e57373",
	},
	"e-background-red-400": {
	  backgroundColor: "#ef5350",
	},
	"e-background-red-500": {
	  backgroundColor: "#f44336",
	},
	"e-background-red-600": {
	  backgroundColor: "#e53935",
	},
	"e-background-red-700": {
	  backgroundColor: "#d32f2f",
	},
	"e-background-red-800": {
	  backgroundColor: "#c62828",
	},
	"e-background-red-900": {
	  backgroundColor: "#b71c1c",
	},
	"e-background-red-A100": {
	  backgroundColor: "#ff8a80",
	},
	"e-background-red-A200": {
	  backgroundColor: "#ff5252",
	},
	"e-background-red-A400": {
	  backgroundColor: "#ff1744",
	},
	"e-background-red-A700": {
	  backgroundColor: "#d50000",
	},
	"e-background-teal-50": {
	  backgroundColor: "#e0f2f1",
	},
	"e-background-teal-100": {
	  backgroundColor: "#b2dfdb",
	},
	"e-background-teal-200": {
	  backgroundColor: "#80cbc4",
	},
	"e-background-teal-300": {
	  backgroundColor: "#4db6ac",
	},
	"e-background-teal-400": {
	  backgroundColor: "#26a69a",
	},
	"e-background-teal-500": {
	  backgroundColor: "#009688",
	},
	"e-background-teal-600": {
	  backgroundColor: "#00897b",
	},
	"e-background-teal-700": {
	  backgroundColor: "#00796b",
	},
	"e-background-teal-800": {
	  backgroundColor: "#00695c",
	},
	"e-background-teal-900": {
	  backgroundColor: "#004d40",
	},
	"e-background-teal-A100": {
	  backgroundColor: "#a7ffeb",
	},
	"e-background-teal-A200": {
	  backgroundColor: "#64ffda",
	},
	"e-background-teal-A400": {
	  backgroundColor: "#1de9b6",
	},
	"e-background-teal-A700": {
	  backgroundColor: "#00bfa5",
	},
	"e-background-yellow-50": {
	  backgroundColor: "#fffde7",
	},
	"e-background-yellow-100": {
	  backgroundColor: "#fff9c4",
	},
	"e-background-yellow-200": {
	  backgroundColor: "#fff59d",
	},
	"e-background-yellow-300": {
	  backgroundColor: "#fff176",
	},
	"e-background-yellow-400": {
	  backgroundColor: "#ffee58",
	},
	"e-background-yellow-500": {
	  backgroundColor: "#ffeb3b",
	},
	"e-background-yellow-600": {
	  backgroundColor: "#fdd835",
	},
	"e-background-yellow-700": {
	  backgroundColor: "#fbc02d",
	},
	"e-background-yellow-800": {
	  backgroundColor: "#f9a825",
	},
	"e-background-yellow-900": {
	  backgroundColor: "#f57f17",
	},
	"e-background-yellow-A100": {
	  backgroundColor: "#ffff8d",
	},
	"e-background-yellow-A200": {
	  backgroundColor: "#ffff00",
	},
	"e-background-yellow-A400": {
	  backgroundColor: "#ffea00",
	},
	"e-background-yellow-A700": {
	  backgroundColor: "#ffd600",
	},
	"e-text-brown-50": {
	  color: "#efebe9",
	},
	"e-text-brown-100": {
	  color: "#d7ccc8",
	},
	"e-text-brown-200": {
	  color: "#bcaaa4",
	},
	"e-text-brown-300": {
	  color: "#a1887f",
	},
	"e-text-brown-400": {
	  color: "#8d6e63",
	},
	"e-text-brown-500": {
	  color: "#795548",
	},
	"e-text-brown-600": {
	  color: "#6d4c41",
	},
	"e-text-brown-700": {
	  color: "#5d4037",
	},
	"e-text-brown-800": {
	  color: "#4e342e",
	},
	"e-text-brown-900": {
	  color: "#3e2723",
	},
	"e-text-grey-50": {
	  color: "#fafafa",
	},
	"e-text-grey-100": {
	  color: "#f5f5f5",
	},
	"e-text-grey-200": {
	  color: "#eeeeee",
	},
	"e-text-grey-300": {
	  color: "#e0e0e0",
	},
	"e-text-grey-400": {
	  color: "#bdbdbd",
	},
	"e-text-grey-500": {
	  color: "#9e9e9e",
	},
	"e-text-grey-600": {
	  color: "#757575",
	},
	"e-text-grey-700": {
	  color: "#616161",
	},
	"e-text-grey-800": {
	  color: "#424242",
	},
	"e-text-grey-900": {
	  color: "#212121",
	},
	"e-text-blue-grey-50": {
	  color: "#eceff1",
	},
	"e-text-blue-grey-100": {
	  color: "#cfd8dc",
	},
	"e-text-blue-grey-200": {
	  color: "#b0bec5",
	},
	"e-text-blue-grey-300": {
	  color: "#90a4ae",
	},
	"e-text-blue-grey-400": {
	  color: "#78909c",
	},
	"e-text-blue-grey-500": {
	  color: "#607d8b",
	},
	"e-text-blue-grey-600": {
	  color: "#546e7a",
	},
	"e-text-blue-grey-700": {
	  color: "#455a64",
	},
	"e-text-blue-grey-800": {
	  color: "#37474f",
	},
	"e-text-blue-grey-900": {
	  color: "#263238",
	},
	"e-background-brown-50": {
	  backgroundColor: "#efebe9",
	},
	"e-background-brown-100": {
	  backgroundColor: "#d7ccc8",
	},
	"e-background-brown-200": {
	  backgroundColor: "#bcaaa4",
	},
	"e-background-brown-300": {
	  backgroundColor: "#a1887f",
	},
	"e-background-brown-400": {
	  backgroundColor: "#8d6e63",
	},
	"e-background-brown-500": {
	  backgroundColor: "#795548",
	},
	"e-background-brown-600": {
	  backgroundColor: "#6d4c41",
	},
	"e-background-brown-700": {
	  backgroundColor: "#5d4037",
	},
	"e-background-brown-800": {
	  backgroundColor: "#4e342e",
	},
	"e-background-brown-900": {
	  backgroundColor: "#3e2723",
	},
	"e-background-grey-50": {
	  backgroundColor: "#fafafa",
	},
	"e-background-grey-100": {
	  backgroundColor: "#f5f5f5",
	},
	"e-background-grey-200": {
	  backgroundColor: "#eeeeee",
	},
	"e-background-grey-300": {
	  backgroundColor: "#e0e0e0",
	},
	"e-background-grey-400": {
	  backgroundColor: "#bdbdbd",
	},
	"e-background-grey-500": {
	  backgroundColor: "#9e9e9e",
	},
	"e-background-grey-600": {
	  backgroundColor: "#757575",
	},
	"e-background-grey-700": {
	  backgroundColor: "#616161",
	},
	"e-background-grey-800": {
	  backgroundColor: "#424242",
	},
	"e-background-grey-900": {
	  backgroundColor: "#212121",
	},
	"e-background-blue-grey-50": {
	  backgroundColor: "#eceff1",
	},
	"e-background-blue-grey-100": {
	  backgroundColor: "#cfd8dc",
	},
	"e-background-blue-grey-200": {
	  backgroundColor: "#b0bec5",
	},
	"e-background-blue-grey-300": {
	  backgroundColor: "#90a4ae",
	},
	"e-background-blue-grey-400": {
	  backgroundColor: "#78909c",
	},
	"e-background-blue-grey-500": {
	  backgroundColor: "#607d8b",
	},
	"e-background-blue-grey-600": {
	  backgroundColor: "#546e7a",
	},
	"e-background-blue-grey-700": {
	  backgroundColor: "#455a64",
	},
	"e-background-blue-grey-800": {
	  backgroundColor: "#37474f",
	},
	"e-background-blue-grey-900": {
	  backgroundColor: "#263238",
	},
	"e-text-black": {
	  color: "#000000",
	},
	"e-background-black": {
	  backgroundColor: "#000000",
	},
	"e-text-white": {
	  color: "#ffffff",
	},
	"e-background-white": {
	  backgroundColor: "#ffffff",
	},
};

module.exports = styles;
