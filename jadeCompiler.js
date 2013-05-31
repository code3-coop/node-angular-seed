/* Sagemec : Système de gestion des membres et des contacts
 * Copyright (C) 2013  CODE3 Coopérative de solidarité
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var jade = require('jade');

module.exports = function (ns) {
  return {
    match: /\.jade$/,
    compileSync: function (sourcePath, source) {

      /*
       * Given:
       *   ns === 'App'
       *   sourcePath === '~/my_project/assets/js/section/views/template/my-template.jade'
       * 
       * Produce:
       *   (function(){
       *     var _ref0;this.App = (_ref0 = this.App) != null ? _ref0 : {};
       *     var _ref1;this.App.Section = (_ref1 = this.App.Section) != null ? _ref1 : {};
       *     var _ref2;this.App.Section.Views = (_ref2 = this.App.Section.Views) != null ? _ref2 : {};
       *     var _ref3;this.App.Section.Views.Templates = (_ref3 = this.App.Section.Views.Templates) != null ? _ref3 : {};
       *     this.App.Section.Views.Templates.my_template = function anonymous () { ...compiled jade... };
       *   }).apply(this);
       */

      var code = [], obj = "this", refCount = 0;      

      // wrap code in function
      code.push("(function(){");

      // Initialize classpath steps.
      sourcePath.replace(/^.+\/js/, "/"+ns).replace(/([^.\/]+)\//g, function ($0, $1) {
        var ref = "_ref"+refCount++;
        var step = $1.slice(0,1).toUpperCase() + $1.slice(1);
        step = step.replace(/-/g, '_');
        obj += "."+step;
        code.push("var "+ref+";"+obj+" = ("+ref+" = "+obj+") != null ? "+ref+" : {};");
      });

      // Extract object property name from file path.
      sourcePath.replace(/[_A-Z][-_$A-Z0-9]*(?=\.jade$)/i, function ($0) {
        // replace dashs with underscores.
        var name = $0.replace(/-/g, '_');
        // Actually compile the jade template.
        var templateFn = jade.compile(source, {client:true, compileDebug:false, filename:sourcePath});
        // Assign template to property.
        code.push(obj+"."+name+" = "+templateFn+";");
      });

      // Close and call wrapper function;
      code.push("}).apply(this);");

      return code.join('');
    }
  };
};
