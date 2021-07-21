const sharp = require("sharp");

sharp("azul.jpg").resize(80).grayscale().toFile("resized.png");
