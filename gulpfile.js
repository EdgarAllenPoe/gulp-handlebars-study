var gulp = require('gulp');
var stachio = require('gulp-stachio');
var foreach = require('gulp-foreach');

gulp.task('default', function () {
  return gulp.src('*.hbs')
    .pipe(foreach(function(stream, file){
      return stream
           .pipe(stachio({
             homeSlider: ([
                {
                  slideState: "active",
                  slideHeaderOne: "XWelcome to",
                  slideHeaderTwo: "SIM Parguay",
                  slideTagline: "Bootstrap - Responsive Design - Retina Ready - Parallax",
                  slideImage: "1.jpg"
                },
                {
                  slideState: "",
                  slideHeaderOne: "YWelcome to",
                  slideHeaderTwo: "SIM Parguay",
                  slideTagline: "Bootstrap - Responsive Design - Retina Ready - Parallax",
                  slideImage: "2.jpg"
                }
              ]),
             services: ({
               header: "XOur Services",
               tagline: "XLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
               serviceList: ([
                 {
                 name: "Service Name1",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 },
                 {
                 name: "Service Name2",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 },
                 {
                 name: "Service Name3",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 },
                 {
                 name: "Service Name4",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 },
                 {
                 name: "Service Name5",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 },
                 {
                 name: "Service Name6",
                 tagline: "tagline",
                 fontAwsome: "flask"
                 }
                ])
             }),
             aboutUs: ({
               header: "About us",
               tagline: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
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
               captain: "Tom",
               member1: "Kelly"
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
    .pipe(gulp.dest('dist'));
});
