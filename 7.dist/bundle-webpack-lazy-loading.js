webpackJsonp([7],{106:function(n,t,l){"use strict";l.d(t,"a",function(){return r});var u=l(152),e=l(149),r=function(){function n(){this.header=[],this.visibleRows=[],this.model=new u.a(10,4),this.header=e.a.createHeader(this.model.rows[0].columns.length),this.visibleRows=this.getVisibleRows()}return n.prototype.getHeader=function(){return e.a.createHeader(this.model.rows[0].columns.length)},n.prototype.navigate=function(n){this.model.navigate(n.keyCode),this.visibleRows=this.getVisibleRows()},n.prototype.ngAfterViewChecked=function(){document.getElementById(this.model.current.rowIndex+"-"+this.model.current.columnIndex).focus()},n.prototype.getVisibleRows=function(){var n=this;return this.model.rows.filter(function(t){return t.rowIndex>=n.model.start&&t.rowIndex<n.model.end})},n.prototype.getActive=function(n){if(n===this.model.current)return"active-cell"},n.ctorParameters=function(){return[]},n}()},127:function(n,t,l){"use strict";function u(n){return s.E(0,[(n()(),s.F(0,null,null,1,"td",[["class","columnHeader"]],null,null,null,null,null)),(n()(),s.K(null,["",""]))],null,function(n,t){n(t,1,0,t.context.$implicit)})}function e(n){return s.E(0,[(n()(),s.F(0,null,null,3,"td",[],null,null,null,null,null)),(n()(),s.K(null,["\n                "])),(n()(),s.F(0,null,null,0,"input",[],[[8,"id",0],[8,"value",0]],[[null,"input"],[null,"click"],[null,"keyup"]],function(n,t,l){var u=!0,e=n.component;if("input"===t){u=!1!==(n.context.$implicit.cellValue=l.target.value)&&u}if("click"===t){u=!1!==e.model.selectColumn(n.context.$implicit)&&u}if("keyup"===t){u=!1!==e.navigate(l)&&u}return u},null,null)),(n()(),s.K(null,["\n            "]))],null,function(n,t){n(t,2,0,s._28(2,"",t.context.$implicit.rowIndex,"-",t.context.$implicit.columnIndex,""),t.context.$implicit.cellValue)})}function r(n){return s.E(0,[(n()(),s.F(0,null,null,7,"tr",[],null,null,null,null,null)),(n()(),s.K(null,["\n            "])),(n()(),s.F(0,null,null,1,"td",[["class","row-number-column"]],null,null,null,null,null)),(n()(),s.K(null,["",""])),(n()(),s.K(null,["\n            "])),(n()(),s.L(16777216,null,null,1,null,e)),s.G(802816,null,0,c.j,[s.M,s.N,s.w],{ngForOf:[0,"ngForOf"]},null),(n()(),s.K(null,["\n        "]))],function(n,t){n(t,6,0,t.context.$implicit.columns)},function(n,t){n(t,3,0,t.context.$implicit.rowIndex)})}function o(n){return s.E(0,[(n()(),s.F(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),s.K(null,["Virtualized Spreadsheet"])),(n()(),s.K(null,["\n    "])),(n()(),s.F(0,null,null,13,"table",[["id","spreadsheet"]],null,null,null,null,null)),(n()(),s.K(null,["\n        "])),(n()(),s.F(0,null,null,11,"tbody",[],null,null,null,null,null)),(n()(),s.F(0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),s.K(null,["\n            "])),(n()(),s.F(0,null,null,0,"td",[["class","row-number-column"]],null,null,null,null,null)),(n()(),s.K(null,["\n            "])),(n()(),s.L(16777216,null,null,1,null,u)),s.G(802816,null,0,c.j,[s.M,s.N,s.w],{ngForOf:[0,"ngForOf"]},null),(n()(),s.K(null,["\n        "])),(n()(),s.K(null,["\n        "])),(n()(),s.L(16777216,null,null,1,null,r)),s.G(802816,null,0,c.j,[s.M,s.N,s.w],{ngForOf:[0,"ngForOf"]},null),(n()(),s.K(null,["\n    "])),(n()(),s.K(null,["\n    "])),(n()(),s.F(0,null,null,2,"h4",[],null,null,null,null,null)),(n()(),s.F(0,null,null,1,"a",[["href","http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0"]],null,null,null,null,null)),(n()(),s.K(null,["Read more here"])),(n()(),s.K(null,["\n    "]))],function(n,t){var l=t.component;n(t,11,0,l.header),n(t,15,0,l.visibleRows)},null)}function i(n){return s.E(0,[(n()(),s.F(0,null,null,1,"spreadsheet",[],null,null,null,o,d)),s.G(8437760,null,0,a.a,[],null,null)],null,null)}l.d(t,"a",function(){return f});var s=l(2),c=l(4),a=l(106),h=[],d=s.D({encapsulation:2,styles:h,data:{}}),f=s.O("spreadsheet",a.a,i,{rows:"rows",columns:"columns"},{},[])},139:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},148:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(n,t){this.columnIndex=n,this.rowIndex=t,this.cellValue=""}return n}()},149:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.createHeader=function(n){for(var t="abcdefghijklmnopqrstuvwxyz",l=[],u="",e=0,r=0;r<n;r++)e===t.length&&(u+=t.substr(0,1),e=0),l.push(u+t.substr(e,1)),e++;return l},n}()},150:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.getNavigationDirection=function(n){var t=new e;return 38===n&&(t.up=!0),40===n&&(t.down=!0),39===n&&(t.right=!0),9===n&&(t.tab=!0),37===n&&(t.left=!0),t},n}(),e=function(){function n(){}return n}()},151:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var u=l(148),e=function(){function n(n,t){this.rowIndex=n,this.columnCount=t,this.columns=[];for(var l=0;l<this.columnCount;l++)this.columns.push(new u.a(l,this.rowIndex))}return n}()},152:function(n,t,l){"use strict";l.d(t,"a",function(){return r});var u=l(150),e=l(151),r=function(){function n(n,t){this.rowCount=n,this.columnCount=t,this.rows=[],this.start=0,this.end=n;for(var l=0;l<this.rowCount;l++)this.rows.push(new e.a(l,this.columnCount));this.current=this.rows[0].columns[0]}return n.prototype.selectColumn=function(n){this.current=n},n.prototype.navigate=function(n){var t=u.a.getNavigationDirection(n);if(t.down&&(this.ensureRow(),this.current=this.rows[this.current.rowIndex+1].columns[this.current.columnIndex],this.adjustRowRangeDownward()),t.up){if(0===this.current.rowIndex)return;this.current=this.rows[this.current.rowIndex-1].columns[this.current.columnIndex],this.adjustRowRangeUpward()}if(t.left){if(0===this.current.columnIndex)return;this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex-1]}if(t.right){if(this.current.columnIndex===this.columnCount-1)return;this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex+1]}t.tab&&(this.current.columnIndex===this.columnCount-1?(this.ensureRow(),this.current=this.rows[this.current.rowIndex+1].columns[0],this.adjustRowRangeDownward()):this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex+1])},n.prototype.adjustRowRangeUpward=function(){this.current.rowIndex<this.start&&this.shiftRowsBy(-1)},n.prototype.adjustRowRangeDownward=function(){this.current.rowIndex===this.end&&this.shiftRowsBy(1)},n.prototype.shiftRowsBy=function(n){this.start=this.start+n,this.end=this.end+n},n.prototype.ensureRow=function(){this.current.rowIndex+1>=this.rows.length&&this.rows.push(new e.a(this.current.rowIndex+1,this.columnCount))},n}()},73:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l.d(t,"SpreadsheetModuleNgFactory",function(){return h});var u=l(2),e=l(139),r=l(4),o=l(16),i=l(127),s=l(106),c=this&&this.__extends||function(n,t){function l(){this.constructor=n}for(var u in t)t.hasOwnProperty(u)&&(n[u]=t[u]);n.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)},a=function(n){function t(t){return n.call(this,t,[i.a],[])||this}return c(t,n),Object.defineProperty(t.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new r.a(this.parent.get(u.c))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._RouterModule_1=new o.p(this.parent.get(o.q,null),this.parent.get(o.j,null)),this._SpreadsheetModule_2=new e.a,this._ROUTES_4=[[{path:"",component:s.a}]],this._SpreadsheetModule_2},t.prototype.getInternal=function(n,t){return n===r.b?this._CommonModule_0:n===o.p?this._RouterModule_1:n===e.a?this._SpreadsheetModule_2:n===r.h?this._NgLocalization_3:n===o.s?this._ROUTES_4:t},t.prototype.destroyInternal=function(){},t}(u.B),h=new u.C(a,e.a)}});
//# sourceMappingURL=bundle-webpack-lazy-loading.js.map