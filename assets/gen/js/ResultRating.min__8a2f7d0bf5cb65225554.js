webpackJsonpCoveo__temporary([36],{14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var r=e.querySelector("svg");r.setAttribute("class",""+t.getClass(r)+n)},t.removeClassFromSVGInContainer=function(e,n){var r=e.querySelector("svg");r.setAttribute("class",t.getClass(r).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");r.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=o},192:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n(7),a=n(2),s=n(1),u=n(4),c=n(3),l=n(13),p=n(14);n(416);var g;!function(t){t[t.Undefined=0]="Undefined",t[t.Lowest=1]="Lowest",t[t.Low=2]="Low",t[t.Average=3]="Average",t[t.Good=4]="Good",t[t.Best=5]="Best"}(g=e.RatingValues||(e.RatingValues={}));var f=function(t){function e(n,r,o,a){var s=t.call(this,n,e.ID,o)||this;return s.element=n,s.options=r,s.bindings=o,s.result=a,s.options=i.ComponentOptions.initComponentOptions(n,e,r),u.Utils.isNullOrUndefined(a.rating)||s.renderComponent(n,a.rating),s}return r(e,t),e.prototype.renderComponent=function(t,e){for(var n=1;n<=5;n++)this.renderStar(t,n<=e,n)},e.prototype.renderStar=function(t,e,n){var r,o=this,i=a.$$(t).find('a[rating-value="'+n+'"]');null==i?(r=a.$$("a",{className:"coveo-result-rating-star"},l.SVGIcons.icons.star),p.SVGDom.addClassToSVGInContainer(r.el,"coveo-result-rating-star-svg"),t.appendChild(r.el),this.bindings.searchInterface.options.enableCollaborativeRating&&(r.on("click",function(t){var e=t.currentTarget;o.rateDocument(parseInt(e.getAttribute("rating-value")))}),r.on("mouseover",function(e){var n=e.currentTarget;o.renderComponent(t,parseInt(n.getAttribute("rating-value")))}),r.on("mouseout",function(){o.renderComponent(t,o.result.rating)})),r.el.setAttribute("rating-value",n.toString())):r=a.$$(i),r.toggleClass("coveo-result-rating-star-active",e)},e.prototype.rateDocument=function(t){var e=this,n={rating:g[t],uniqueId:this.result.uniqueId};this.queryController.getEndpoint().rateDocument(n).then(function(){e.result.rating=t,e.renderComponent(e.element,t)}).catch(function(){e.logger.error("An error occurred while rating the item")})},e.ID="ResultRating",e.doExport=function(){c.exportGlobally({ResultRating:e})},e}(o.Component);e.ResultRating=f,s.Initialization.registerAutoCreateComponent(f)},416:function(t,e){}});