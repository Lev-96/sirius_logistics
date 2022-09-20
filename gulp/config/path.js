import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = "./dist"
const srcFolder = "./src"

export const path = {
   build: {
      files: `${buildFolder}/files/`,
      html: `${buildFolder}/`,
      scss: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
      images: `${buildFolder}/img/`,
   },
   src: {
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg.gif,png,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      svgIcons: `${srcFolder}/svgIcons/**/*.svg`,


   },
   watch: {
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      js: `${srcFolder}/js/**/*.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg.gif,png,webp,svg,ico}`,


   },
   clean: buildFolder,
   buildFolder,
   srcFolder,
   rootFolder,
   ftp: ``,
}
