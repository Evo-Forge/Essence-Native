"use strict";

const colors = {

	"e-text-amber-50": "#fff8e1",

	"e-text-amber-100": "#ffecb3",

	"e-text-amber-200":"#ffe082",

	"e-text-amber-300":   "#ffd54f",

	"e-text-amber-400":   "#ffca28",

	"e-text-amber-500":   "#ffc107",

	"e-text-amber-600":   "#ffb300",

	"e-text-amber-700":   "#ffa000",

	"e-text-amber-800":   "#ff8f00",

	"e-text-amber-900":   "#ff6f00",

	"e-text-amber-A100":   "#ffe57f",

	"e-text-amber-A200":   "#ffd740",

	"e-text-amber-A400":   "#ffc400",

	"e-text-amber-A700":   "#ffab00",

	"e-text-blue-50":   "#e3f2fd",

	"e-text-blue-100":   "#bbdefb",

	"e-text-blue-200":   "#90caf9",

	"e-text-blue-300":   "#64b5f6",

	"e-text-blue-400":   "#42a5f5",

	"e-text-blue-500":   "#2196f3",

	"e-text-blue-600":   "#1e88e5",

	"e-text-blue-700":   "#1976d2",

	"e-text-blue-800":   "#1565c0",

	"e-text-blue-900":   "#0d47a1",

	"e-text-blue-A100":   "#82b1ff",

	"e-text-blue-A200":   "#448aff",

	"e-text-blue-A400":   "#2979ff",

	"e-text-blue-A700":   "#2962ff",

	"e-text-cyan-50":   "#e0f7fa",

	"e-text-cyan-100":   "#b2ebf2",

	"e-text-cyan-200":   "#80deea",

	"e-text-cyan-300":   "#4dd0e1",

	"e-text-cyan-400":   "#26c6da",

	"e-text-cyan-500":   "#00bcd4",

	"e-text-cyan-600":   "#00acc1",

	"e-text-cyan-700":   "#0097a7",

	"e-text-cyan-800":   "#00838f",

	"e-text-cyan-900":   "#006064",

	"e-text-cyan-A100":   "#84ffff",

	"e-text-cyan-A200":   "#18ffff",

	"e-text-cyan-A400":   "#00e5ff",

	"e-text-cyan-A700":   "#00b8d4",

	"e-text-deep-orange-50":   "#fbe9e7",

	"e-text-deep-orange-100":   "#ffccbc",

	"e-text-deep-orange-200":   "#ffab91",

	"e-text-deep-orange-300":   "#ff8a65",

	"e-text-deep-orange-400":   "#ff7043",

	"e-text-deep-orange-500":   "#ff5722",

	"e-text-deep-orange-600":   "#f4511e",

	"e-text-deep-orange-700":   "#e64a19",

	"e-text-deep-orange-800":   "#d84315",

	"e-text-deep-orange-900":   "#bf360c",

	"e-text-deep-orange-A100":   "#ff9e80",

	"e-text-deep-orange-A200":   "#ff6e40",

	"e-text-deep-orange-A400":   "#ff3d00",

	"e-text-deep-orange-A700":   "#dd2c00",

	"e-text-deep-purple-50":   "#ede7f6",

	"e-text-deep-purple-100":   "#d1c4e9",

	"e-text-deep-purple-200":   "#b39ddb",

	"e-text-deep-purple-300":   "#9575cd",

	"e-text-deep-purple-400":   "#7e57c2",

	"e-text-deep-purple-500":   "#673ab7",

	"e-text-deep-purple-600":   "#5e35b1",

	"e-text-deep-purple-700":   "#512da8",

	"e-text-deep-purple-800":   "#4527a0",

	"e-text-deep-purple-900":   "#311b92",

	"e-text-deep-purple-A100":   "#b388ff",

	"e-text-deep-purple-A200":   "#7c4dff",

	"e-text-deep-purple-A400":   "#651fff",

	"e-text-deep-purple-A700":   "#6200ea",

	"e-text-green-50":   "#e8f5e9",

	"e-text-green-100":   "#c8e6c9",

	"e-text-green-200":   "#a5d6a7",

	"e-text-green-300":   "#81c784",

	"e-text-green-400":   "#66bb6a",

	"e-text-green-500":   "#4caf50",

	"e-text-green-600":   "#43a047",

	"e-text-green-700":   "#388e3c",

	"e-text-green-800":   "#2e7d32",

	"e-text-green-900":   "#1b5e20",

	"e-text-green-A100":   "#b9f6ca",

	"e-text-green-A200":   "#69f0ae",

	"e-text-green-A400":   "#00e676",

	"e-text-green-A700":   "#00c853",

	"e-text-indigo-50":   "#e8eaf6",

	"e-text-indigo-100":   "#c5cae9",

	"e-text-indigo-200":   "#9fa8da",

	"e-text-indigo-300":   "#7986cb",

	"e-text-indigo-400":   "#5c6bc0",

	"e-text-indigo-500":   "#3f51b5",

	"e-text-indigo-600":   "#3949ab",

	"e-text-indigo-700":   "#303f9f",

	"e-text-indigo-800":   "#283593",

	"e-text-indigo-900":   "#1a237e",

	"e-text-indigo-A100":   "#8c9eff",

	"e-text-indigo-A200":   "#536dfe",

	"e-text-indigo-A400":   "#3d5afe",

	"e-text-indigo-A700":   "#304ffe",

	"e-text-light-blue-50":   "#e1f5fe",

	"e-text-light-blue-100":   "#b3e5fc",

	"e-text-light-blue-200":   "#81d4fa",

	"e-text-light-blue-300":   "#4fc3f7",

	"e-text-light-blue-400":   "#29b6f6",

	"e-text-light-blue-500":   "#03a9f4",

	"e-text-light-blue-600":   "#039be5",

	"e-text-light-blue-700":   "#0288d1",

	"e-text-light-blue-800":   "#0277bd",

	"e-text-light-blue-900":   "#01579b",

	"e-text-light-blue-A100":   "#80d8ff",

	"e-text-light-blue-A200":   "#40c4ff",

	"e-text-light-blue-A400":   "#00b0ff",

	"e-text-light-blue-A700":   "#0091ea",

	"e-text-light-green-50":   "#f1f8e9",

	"e-text-light-green-100":   "#dcedc8",

	"e-text-light-green-200":   "#c5e1a5",

	"e-text-light-green-300":   "#aed581",

	"e-text-light-green-400":   "#9ccc65",

	"e-text-light-green-500":   "#8bc34a",

	"e-text-light-green-600":   "#7cb342",

	"e-text-light-green-700":   "#689f38",

	"e-text-light-green-800":   "#558b2f",

	"e-text-light-green-900":   "#33691e",

	"e-text-light-green-A100":   "#ccff90",

	"e-text-light-green-A200":   "#b2ff59",

	"e-text-light-green-A400":   "#76ff03",

	"e-text-light-green-A700":   "#64dd17",

	"e-text-lime-50":   "#f9fbe7",

	"e-text-lime-100":   "#f0f4c3",

	"e-text-lime-200":   "#e6ee9c",

	"e-text-lime-300":   "#dce775",

	"e-text-lime-400":   "#d4e157",

	"e-text-lime-500":   "#cddc39",

	"e-text-lime-600":   "#c0ca33",

	"e-text-lime-700":   "#afb42b",

	"e-text-lime-800":   "#9e9d24",

	"e-text-lime-900":   "#827717",

	"e-text-lime-A100":   "#f4ff81",

	"e-text-lime-A200":   "#eeff41",

	"e-text-lime-A400":   "#c6ff00",

	"e-text-lime-A700":   "#aeea00",

	"e-text-orange-50":   "#fff3e0",

	"e-text-orange-100":   "#ffe0b2",

	"e-text-orange-200":   "#ffcc80",

	"e-text-orange-300":   "#ffb74d",

	"e-text-orange-400":   "#ffa726",

	"e-text-orange-500":   "#ff9800",

	"e-text-orange-600":   "#fb8c00",

	"e-text-orange-700":   "#f57c00",

	"e-text-orange-800":   "#ef6c00",

	"e-text-orange-900":   "#e65100",

	"e-text-orange-A100":   "#ffd180",

	"e-text-orange-A200":   "#ffab40",

	"e-text-orange-A400":   "#ff9100",

	"e-text-orange-A700":   "#ff6d00",

	"e-text-pink-50":   "#fce4ec",

	"e-text-pink-100":   "#f8bbd0",

	"e-text-pink-200":   "#f48fb1",

	"e-text-pink-300":   "#f06292",

	"e-text-pink-400":   "#ec407a",

	"e-text-pink-500":   "#e91e63",

	"e-text-pink-600":   "#d81b60",

	"e-text-pink-700":   "#c2185b",

	"e-text-pink-800":   "#ad1457",

	"e-text-pink-900":   "#880e4f",

	"e-text-pink-A100":   "#ff80ab",

	"e-text-pink-A200":   "#ff4081",

	"e-text-pink-A400":   "#f50057",

	"e-text-pink-A700":   "#c51162",

	"e-text-purple-50":   "#f3e5f5",

	"e-text-purple-100":   "#e1bee7",

	"e-text-purple-200":   "#ce93d8",

	"e-text-purple-300":   "#ba68c8",

	"e-text-purple-400":   "#ab47bc",

	"e-text-purple-500":   "#9c27b0",

	"e-text-purple-600":   "#8e24aa",

	"e-text-purple-700":   "#7b1fa2",

	"e-text-purple-800":   "#6a1b9a",

	"e-text-purple-900":   "#4a148c",

	"e-text-purple-A100":   "#ea80fc",

	"e-text-purple-A200":   "#e040fb",

	"e-text-purple-A400":   "#d500f9",

	"e-text-purple-A700":   "#aa00ff",

	"e-text-red-50":   "#ffebee",

	"e-text-red-100":   "#ffcdd2",

	"e-text-red-200":   "#ef9a9a",

	"e-text-red-300":   "#e57373",

	"e-text-red-400":   "#ef5350",

	"e-text-red-500":   "#f44336",

	"e-text-red-600":   "#e53935",

	"e-text-red-700":   "#d32f2f",

	"e-text-red-800":   "#c62828",

	"e-text-red-900":   "#b71c1c",

	"e-text-red-A100":   "#ff8a80",

	"e-text-red-A200":   "#ff5252",

	"e-text-red-A400":   "#ff1744",

	"e-text-red-A700":   "#d50000",

	"e-text-teal-50":   "#e0f2f1",

	"e-text-teal-100":   "#b2dfdb",

	"e-text-teal-200":   "#80cbc4",

	"e-text-teal-300":   "#4db6ac",

	"e-text-teal-400":   "#26a69a",

	"e-text-teal-500":   "#009688",

	"e-text-teal-600":   "#00897b",

	"e-text-teal-700":   "#00796b",

	"e-text-teal-800":   "#00695c",

	"e-text-teal-900":   "#004d40",

	"e-text-teal-A100":   "#a7ffeb",

	"e-text-teal-A200":   "#64ffda",

	"e-text-teal-A400":   "#1de9b6",

	"e-text-teal-A700":   "#00bfa5",

	"e-text-yellow-50":   "#fffde7",

	"e-text-yellow-100":   "#fff9c4",

	"e-text-yellow-200":   "#fff59d",

	"e-text-yellow-300":   "#fff176",

	"e-text-yellow-400":   "#ffee58",

	"e-text-yellow-500":   "#ffeb3b",

	"e-text-yellow-600":   "#fdd835",

	"e-text-yellow-700":   "#fbc02d",

	"e-text-yellow-800":   "#f9a825",

	"e-text-yellow-900":   "#f57f17",

	"e-text-yellow-A100":   "#ffff8d",

	"e-text-yellow-A200":   "#ffff00",

	"e-text-yellow-A400":   "#ffea00",

	"e-text-yellow-A700":   "#ffd600",

	"e-background-amber-50":  "#fff8e1",

	"e-background-amber-100":  "#ffecb3",

	"e-background-amber-200":  "#ffe082",

	"e-background-amber-300":  "#ffd54f",

	"e-background-amber-400":  "#ffca28",

	"e-background-amber-500":  "#ffc107",

	"e-background-amber-600":  "#ffb300",

	"e-background-amber-700":  "#ffa000",

	"e-background-amber-800":  "#ff8f00",

	"e-background-amber-900":  "#ff6f00",

	"e-background-amber-A100":  "#ffe57f",

	"e-background-amber-A200":  "#ffd740",

	"e-background-amber-A400":  "#ffc400",

	"e-background-amber-A700":  "#ffab00",

	"e-background-blue-50":  "#e3f2fd",

	"e-background-blue-100":  "#bbdefb",

	"e-background-blue-200":  "#90caf9",

	"e-background-blue-300":  "#64b5f6",

	"e-background-blue-400":  "#42a5f5",

	"e-background-blue-500":  "#2196f3",

	"e-background-blue-600":  "#1e88e5",

	"e-background-blue-700":  "#1976d2",

	"e-background-blue-800":  "#1565c0",

	"e-background-blue-900":  "#0d47a1",

	"e-background-blue-A100":  "#82b1ff",

	"e-background-blue-A200":  "#448aff",

	"e-background-blue-A400":  "#2979ff",

	"e-background-blue-A700":  "#2962ff",

	"e-background-cyan-50":  "#e0f7fa",

	"e-background-cyan-100":  "#b2ebf2",

	"e-background-cyan-200":  "#80deea",

	"e-background-cyan-300":  "#4dd0e1",

	"e-background-cyan-400":  "#26c6da",

	"e-background-cyan-500":  "#00bcd4",

	"e-background-cyan-600":  "#00acc1",

	"e-background-cyan-700":  "#0097a7",

	"e-background-cyan-800":  "#00838f",

	"e-background-cyan-900":  "#006064",

	"e-background-cyan-A100":  "#84ffff",

	"e-background-cyan-A200":  "#18ffff",

	"e-background-cyan-A400":  "#00e5ff",

	"e-background-cyan-A700":  "#00b8d4",

	"e-background-deep-orange-50":  "#fbe9e7",

	"e-background-deep-orange-100":  "#ffccbc",

	"e-background-deep-orange-200":  "#ffab91",

	"e-background-deep-orange-300":  "#ff8a65",

	"e-background-deep-orange-400":  "#ff7043",

	"e-background-deep-orange-500":  "#ff5722",

	"e-background-deep-orange-600":  "#f4511e",

	"e-background-deep-orange-700":  "#e64a19",

	"e-background-deep-orange-800":  "#d84315",

	"e-background-deep-orange-900":  "#bf360c",

	"e-background-deep-orange-A100":  "#ff9e80",

	"e-background-deep-orange-A200":  "#ff6e40",

	"e-background-deep-orange-A400":  "#ff3d00",

	"e-background-deep-orange-A700":  "#dd2c00",

	"e-background-deep-purple-50":  "#ede7f6",

	"e-background-deep-purple-100":  "#d1c4e9",

	"e-background-deep-purple-200":  "#b39ddb",

	"e-background-deep-purple-300":  "#9575cd",

	"e-background-deep-purple-400":  "#7e57c2",

	"e-background-deep-purple-500":  "#673ab7",

	"e-background-deep-purple-600":  "#5e35b1",

	"e-background-deep-purple-700":  "#512da8",

	"e-background-deep-purple-800":  "#4527a0",

	"e-background-deep-purple-900":  "#311b92",

	"e-background-deep-purple-A100":  "#b388ff",

	"e-background-deep-purple-A200":  "#7c4dff",

	"e-background-deep-purple-A400":  "#651fff",

	"e-background-deep-purple-A700":  "#6200ea",

	"e-background-green-50":  "#e8f5e9",

	"e-background-green-100":  "#c8e6c9",

	"e-background-green-200":  "#a5d6a7",

	"e-background-green-300":  "#81c784",

	"e-background-green-400":  "#66bb6a",

	"e-background-green-500":  "#4caf50",

	"e-background-green-600":  "#43a047",

	"e-background-green-700":  "#388e3c",

	"e-background-green-800":  "#2e7d32",

	"e-background-green-900":  "#1b5e20",

	"e-background-green-A100":  "#b9f6ca",

	"e-background-green-A200":  "#69f0ae",

	"e-background-green-A400":  "#00e676",

	"e-background-green-A700":  "#00c853",

	"e-background-indigo-50":  "#e8eaf6",

	"e-background-indigo-100":  "#c5cae9",

	"e-background-indigo-200":  "#9fa8da",

	"e-background-indigo-300":  "#7986cb",

	"e-background-indigo-400":  "#5c6bc0",

	"e-background-indigo-500":  "#3f51b5",

	"e-background-indigo-600":  "#3949ab",

	"e-background-indigo-700":  "#303f9f",

	"e-background-indigo-800":  "#283593",

	"e-background-indigo-900":  "#1a237e",

	"e-background-indigo-A100":  "#8c9eff",

	"e-background-indigo-A200":  "#536dfe",

	"e-background-indigo-A400":  "#3d5afe",

	"e-background-indigo-A700":  "#304ffe",

	"e-background-light-blue-50":  "#e1f5fe",

	"e-background-light-blue-100":  "#b3e5fc",

	"e-background-light-blue-200":  "#81d4fa",

	"e-background-light-blue-300":  "#4fc3f7",

	"e-background-light-blue-400":  "#29b6f6",

	"e-background-light-blue-500":  "#03a9f4",

	"e-background-light-blue-600":  "#039be5",

	"e-background-light-blue-700":  "#0288d1",

	"e-background-light-blue-800":  "#0277bd",

	"e-background-light-blue-900":  "#01579b",

	"e-background-light-blue-A100":  "#80d8ff",

	"e-background-light-blue-A200":  "#40c4ff",

	"e-background-light-blue-A400":  "#00b0ff",

	"e-background-light-blue-A700":  "#0091ea",

	"e-background-light-green-50":  "#f1f8e9",

	"e-background-light-green-100":  "#dcedc8",

	"e-background-light-green-200":  "#c5e1a5",

	"e-background-light-green-300":  "#aed581",

	"e-background-light-green-400":  "#9ccc65",

	"e-background-light-green-500":  "#8bc34a",

	"e-background-light-green-600":  "#7cb342",

	"e-background-light-green-700":  "#689f38",

	"e-background-light-green-800":  "#558b2f",

	"e-background-light-green-900":  "#33691e",

	"e-background-light-green-A100":  "#ccff90",

	"e-background-light-green-A200":  "#b2ff59",

	"e-background-light-green-A400":  "#76ff03",

	"e-background-light-green-A700":  "#64dd17",

	"e-background-lime-50":  "#f9fbe7",

	"e-background-lime-100":  "#f0f4c3",

	"e-background-lime-200":  "#e6ee9c",

	"e-background-lime-300":  "#dce775",

	"e-background-lime-400":  "#d4e157",

	"e-background-lime-500":  "#cddc39",

	"e-background-lime-600":  "#c0ca33",

	"e-background-lime-700":  "#afb42b",

	"e-background-lime-800":  "#9e9d24",

	"e-background-lime-900":  "#827717",

	"e-background-lime-A100":  "#f4ff81",

	"e-background-lime-A200":  "#eeff41",

	"e-background-lime-A400":  "#c6ff00",

	"e-background-lime-A700":  "#aeea00",

	"e-background-orange-50":  "#fff3e0",

	"e-background-orange-100":  "#ffe0b2",

	"e-background-orange-200":  "#ffcc80",

	"e-background-orange-300":  "#ffb74d",

	"e-background-orange-400":  "#ffa726",

	"e-background-orange-500":  "#ff9800",

	"e-background-orange-600":  "#fb8c00",

	"e-background-orange-700":  "#f57c00",

	"e-background-orange-800":  "#ef6c00",

	"e-background-orange-900":  "#e65100",

	"e-background-orange-A100":  "#ffd180",

	"e-background-orange-A200":  "#ffab40",

	"e-background-orange-A400":  "#ff9100",

	"e-background-orange-A700":  "#ff6d00",

	"e-background-pink-50":  "#fce4ec",

	"e-background-pink-100":  "#f8bbd0",

	"e-background-pink-200":  "#f48fb1",

	"e-background-pink-300":  "#f06292",

	"e-background-pink-400":  "#ec407a",

	"e-background-pink-500":  "#e91e63",

	"e-background-pink-600":  "#d81b60",

	"e-background-pink-700":  "#c2185b",

	"e-background-pink-800":  "#ad1457",

	"e-background-pink-900":  "#880e4f",

	"e-background-pink-A100":  "#ff80ab",

	"e-background-pink-A200":  "#ff4081",

	"e-background-pink-A400":  "#f50057",

	"e-background-pink-A700":  "#c51162",

	"e-background-purple-50":  "#f3e5f5",

	"e-background-purple-100":  "#e1bee7",

	"e-background-purple-200":  "#ce93d8",

	"e-background-purple-300":  "#ba68c8",

	"e-background-purple-400":  "#ab47bc",

	"e-background-purple-500":  "#9c27b0",

	"e-background-purple-600":  "#8e24aa",

	"e-background-purple-700":  "#7b1fa2",

	"e-background-purple-800":  "#6a1b9a",

	"e-background-purple-900":  "#4a148c",

	"e-background-purple-A100":  "#ea80fc",

	"e-background-purple-A200":  "#e040fb",

	"e-background-purple-A400":  "#d500f9",

	"e-background-purple-A700":  "#aa00ff",

	"e-background-red-50":  "#ffebee",

	"e-background-red-100":  "#ffcdd2",

	"e-background-red-200":  "#ef9a9a",

	"e-background-red-300":  "#e57373",

	"e-background-red-400":  "#ef5350",

	"e-background-red-500":  "#f44336",

	"e-background-red-600":  "#e53935",

	"e-background-red-700":  "#d32f2f",

	"e-background-red-800":  "#c62828",

	"e-background-red-900":  "#b71c1c",

	"e-background-red-A100":  "#ff8a80",

	"e-background-red-A200":  "#ff5252",

	"e-background-red-A400":  "#ff1744",

	"e-background-red-A700":  "#d50000",

	"e-background-teal-50":  "#e0f2f1",

	"e-background-teal-100":  "#b2dfdb",

	"e-background-teal-200":  "#80cbc4",

	"e-background-teal-300":  "#4db6ac",

	"e-background-teal-400":  "#26a69a",

	"e-background-teal-500":  "#009688",

	"e-background-teal-600":  "#00897b",

	"e-background-teal-700":  "#00796b",

	"e-background-teal-800":  "#00695c",

	"e-background-teal-900":  "#004d40",

	"e-background-teal-A100":  "#a7ffeb",

	"e-background-teal-A200":  "#64ffda",

	"e-background-teal-A400":  "#1de9b6",

	"e-background-teal-A700":  "#00bfa5",

	"e-background-yellow-50":  "#fffde7",

	"e-background-yellow-100":  "#fff9c4",

	"e-background-yellow-200":  "#fff59d",

	"e-background-yellow-300":  "#fff176",

	"e-background-yellow-400":  "#ffee58",

	"e-background-yellow-500":  "#ffeb3b",

	"e-background-yellow-600":  "#fdd835",

	"e-background-yellow-700":  "#fbc02d",

	"e-background-yellow-800":  "#f9a825",

	"e-background-yellow-900":  "#f57f17",

	"e-background-yellow-A100":  "#ffff8d",

	"e-background-yellow-A200":  "#ffff00",

	"e-background-yellow-A400":  "#ffea00",

	"e-background-yellow-A700":  "#ffd600",

	"e-text-brown-50":   "#efebe9",

	"e-text-brown-100":   "#d7ccc8",

	"e-text-brown-200":   "#bcaaa4",

	"e-text-brown-300":   "#a1887f",

	"e-text-brown-400":   "#8d6e63",

	"e-text-brown-500":   "#795548",

	"e-text-brown-600":   "#6d4c41",

	"e-text-brown-700":   "#5d4037",

	"e-text-brown-800":   "#4e342e",

	"e-text-brown-900":   "#3e2723",

	"e-text-grey-50":   "#fafafa",

	"e-text-grey-100":   "#f5f5f5",

	"e-text-grey-200":   "#eeeeee",

	"e-text-grey-300":   "#e0e0e0",

	"e-text-grey-400":   "#bdbdbd",

	"e-text-grey-500":   "#9e9e9e",

	"e-text-grey-600":   "#757575",

	"e-text-grey-700":   "#616161",

	"e-text-grey-800":   "#424242",

	"e-text-grey-900":   "#212121",

	"e-text-blue-grey-50":   "#eceff1",

	"e-text-blue-grey-100":   "#cfd8dc",

	"e-text-blue-grey-200":   "#b0bec5",

	"e-text-blue-grey-300":   "#90a4ae",

	"e-text-blue-grey-400":   "#78909c",

	"e-text-blue-grey-500":   "#607d8b",

	"e-text-blue-grey-600":   "#546e7a",

	"e-text-blue-grey-700":   "#455a64",

	"e-text-blue-grey-800":   "#37474f",

	"e-text-blue-grey-900":   "#263238",

	"e-background-brown-50":  "#efebe9",

	"e-background-brown-100":  "#d7ccc8",

	"e-background-brown-200":  "#bcaaa4",

	"e-background-brown-300":  "#a1887f",

	"e-background-brown-400":  "#8d6e63",

	"e-background-brown-500":  "#795548",

	"e-background-brown-600":  "#6d4c41",

	"e-background-brown-700":  "#5d4037",

	"e-background-brown-800":  "#4e342e",

	"e-background-brown-900":  "#3e2723",

	"e-background-grey-50":  "#fafafa",

	"e-background-grey-100":  "#f5f5f5",

	"e-background-grey-200":  "#eeeeee",

	"e-background-grey-300":  "#e0e0e0",

	"e-background-grey-400":  "#bdbdbd",

	"e-background-grey-500":  "#9e9e9e",

	"e-background-grey-600":  "#757575",

	"e-background-grey-700":  "#616161",

	"e-background-grey-800":  "#424242",

	"e-background-grey-900":  "#212121",

	"e-background-blue-grey-50":  "#eceff1",

	"e-background-blue-grey-100":  "#cfd8dc",

	"e-background-blue-grey-200":  "#b0bec5",

	"e-background-blue-grey-300":  "#90a4ae",

	"e-background-blue-grey-400":  "#78909c",

	"e-background-blue-grey-500":  "#607d8b",

	"e-background-blue-grey-600":  "#546e7a",

	"e-background-blue-grey-700":  "#455a64",

	"e-background-blue-grey-800":  "#37474f",

	"e-background-blue-grey-900":  "#263238",

	"e-text-black":   "#000000",

	"e-background-black":  "#000000",

	"e-text-white":   "#ffffff",

	"e-background-white":  "#ffffff",

};

module.exports = colors;
