Installation
============
npm install
bower install

Symlinking front end dependencies
===========
in assets/js/
vendor -> ../../components/

in public/font/
FontAwesome.otf -> ../../components/font-awesome/build/assets/font-awesome/font/FontAwesome.otf
fontawesome-webfont.eot -> ../../components/font-awesome/build/assets/font-awesome/font/fontawesome-webfont.eot
fontawesome-webfont.svg -> ../../components/font-awesome/build/assets/font-awesome/font/fontawesome-webfont.svg
fontawesome-webfont.ttf -> ../../components/font-awesome/build/assets/font-awesome/font/fontawesome-webfont.ttf
fontawesome-webfont.woff -> ../../components/font-awesome/build/assets/font-awesome/font/fontawesome-webfont.woff

in public/img/
glyphicons-halflings-white.png -> ../../components/bootstrap/docs/assets/img/glyphicons-halflings-white.png
glyphicons-halflings.png -> ../../components/bootstrap/docs/assets/img/glyphicons-halflings.png

in public/stylesheets/
bootstrap.css -> ../../components/bootstrap/docs/assets/css/bootstrap.css
font-awesome.min.css -> ../../components/font-awesome/build/assets/font-awesome/css/font-awesome.min.css
style.css
style.styl

Run tests
===========

Unit Tests
--------
karma start

End to End Tests
--------
karma start karma-e2e.conf.js
