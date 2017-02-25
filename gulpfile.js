var gulp = require('gulp');
var stachio = require('gulp-stachio');
var foreach = require('gulp-foreach');
var addsrc = require("gulp-add-src");

gulp.task('default', function () {
  return gulp.src('*.hbs')
    .pipe(foreach(function(stream, file){
      return stream
           .pipe(stachio({
             siteTitle:"SIM Paraguay | Sociedad Internacional Misionera",
             id: "home",
             homeSlider: ([
                {
                  slideState: "active",
                  slideHeaderOne: "Bienvenido a",
                  slideHeaderTwo: "SIM Parguay",
                  slideTagline: "Sociedad Internacional Misionera en el Paraguay",
                  slideImage: "1.jpg",
                  buttonText: "Comenzar ahora"
                },
                {
                  slideState: "",
                  slideHeaderOne: "Con Una Mision",
                  slideHeaderTwo: "SIM Parguay",
                  slideTagline: "... para que reciban, por la fe en Mí, el perdón de pecados ...",
                  slideImage: "2.jpg",
                  buttonText: "Comenzar ahora"
                },
                {
                  slideState: "",
                  slideHeaderOne: "Juntos Somos",
                  slideHeaderTwo: "SIM Parguay",
                  slideTagline: "... por preservar la unidad del Espíritu en el vínculo de la paz.",
                  slideImage: "3.jpg",
                  buttonText: "Comenzar ahora"
                },
              ]),
             services: ({
               id: "Enfoques",
               header: "Nuestros Enfoques",
               tagline: "XLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
               serviceList: ([
                 {
                 name: "Iglesias Rurales",
                 tagline: "tagline",
                 fontAwsome: "group"
                 },
                 {
                 name: "Personas Viviendo Con VIH",
                 tagline: "tagline",
                 fontAwsome: "support"
                 },
                 {
                 name: "Comunidades Originarias",
                 tagline: "tagline",
                 fontAwsome: "leaf"
                 },
                 {
                 name: "Universidades Rurales",
                 tagline: "tagline",
                 fontAwsome: "briefcase"
                 },
                //  {
                //  name: "Capacitacion de Lideres",
                //  tagline: "tagline",
                //  fontAwsome: "flask"
                //  },
                //  {
                //  name: "Serviendo Los Que Luchan con VIH",
                //  tagline: "tagline",
                //  fontAwsome: "flask"
                //  }
                ])
             }),
             aboutUs: ({
               id:"SIMPY",
               header: "XAbout us",
               tagline: "<p>XLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
               skillList: ([
                 {
                 name: "User Experiance",
                 percentage: "25",
                 },
                 {
                 name: "User Experiance",
                 percentage: "65",
                 },
                 {
                 name: "User Experiance",
                 percentage: "85",
                 },
                 {
                 name: "User Experiance",
                 percentage: "75",
                 },
                ])
             }),
             portfolio: ({
               id: "portfolio",
               name: "xPortfolio",
               tagline: "XLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
               project: ([
                 {
                   imageOne: "1.jpg",
                   imageTwo: "1.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "2.jpg",
                   imageTwo: "2.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "3.jpg",
                   imageTwo: "3.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "4.jpg",
                   imageTwo: "4.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "5.jpg",
                   imageTwo: "5.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "6.jpg",
                   imageTwo: "6.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "7.jpg",
                   imageTwo: "7.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 },
                 {
                   imageOne: "8.jpg",
                   imageTwo: "8.jpg",
                   title: "Time Hours",
                   category: "Design, Photography",
                   header: "Texts about Project",
                   desc: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
                   detailOne: "WrapBootrap",
                   detailTwo: "15 Oct 2014",
                   detailThree: "Graphic, Design, Creative"
                 }
               ]),

             }),
             team: ({
               captain: "Tom",
               member1: "Kelly"
             }),
             features: ({
               captain: "Tom",
               member1: "Kelly"
             }),
             pricing: ({
               captain: "Tom",
               member1: "Kelly"
             }),
             twitter: ({
               captain: "Tom",
               member1: "Kelly"
             }),
             blog: ({
               captain: "Tom",
               member1: "Kelly"
             }),
             contact: ({
               captain: "Tom",
               member1: "Kelly"
             }),
           }))
    }))
          .pipe(addsrc(['css/**','js/**','fonts/**','images/**'], { base: '.'}))
    .pipe(gulp.dest('dist'));
});
