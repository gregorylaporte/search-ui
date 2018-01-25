webpackJsonpCoveo__temporary([19,70],{14:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),s=function(){function e(){}return e.addClassToSVGInContainer=function(t,o){var n=t.querySelector("svg");n.setAttribute("class",""+e.getClass(n)+o)},e.removeClassFromSVGInContainer=function(t,o){var n=t.querySelector("svg");n.setAttribute("class",e.getClass(n).replace(o,""))},e.addStyleToSVGInContainer=function(e,t){var o=e.querySelector("svg");n.each(t,function(e,t){o.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=s},152:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUBSCRIPTION_TYPE={followQuery:"followQuery",followDocument:"followDocument"}},198:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),l=o(7),i=o(421),r=o(39),a=o(10),c=o(5),u=o(59),p=o(152),d=o(1),h=o(8),f=o(2),y=o(23),v=o(9),m=o(0),g=o(3),b=o(50),$=o(13),S=o(27),A=o(17),C=function(e){function t(o,n,s,c){void 0===c&&(c=y.ModalBox);var u=e.call(this,o,t.ID,s)||this;u.element=o,u.options=n,u.ModalBox=c,u.options=l.ComponentOptions.initComponentOptions(o,t,n),u.options.enableMessage&&(u.message=new i.SearchAlertsMessage(o,{closeDelay:u.options.messageCloseDelay},u.getBindings())),u.queryController.getEndpoint().options.isGuestUser?u.logger.warn("Logged in as guest user, search alerts are therefore not available."):u.bind.onRootElement(r.SettingsEvents.settingsPopulateMenu,function(e){u.options.enableManagePanel&&e.menuData.push({text:h.l("SearchAlerts_Panel"),className:"coveo-subscriptions-panel",onOpen:function(){return u.openPanel()},onClose:function(){return u.close()},svgIcon:$.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-subscriptions-panel-svg"})});var p=!1;return u.bind.onRootElement(a.QueryEvents.querySuccess,function(){p||(p=!0,u.queryController.getEndpoint().listSubscriptions().then(function(){u.bind.onRootElement(r.SettingsEvents.settingsPopulateMenu,function(e){u.options.enableFollowQuery&&e.menuData.push({text:h.l("SearchAlerts_followQuery"),className:"coveo-follow-query",tooltip:h.l("FollowQueryDescription"),onOpen:function(){return u.followQuery()},onClose:function(){},svgIcon:$.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-follow-query-svg"})})}).catch(function(e){if(403!=e.status)throw e}))}),u}return n(t,e),t.prototype.followQuery=function(){var e=this,t=this.queryController.createQueryBuilder({}),o=this.buildFollowQueryRequest(t.build(),this.options);this.usageAnalytics.logCustomEvent(v.analyticsActionCauseList.searchAlertsFollowQuery,{subscription:o.name},this.element),this.queryController.getEndpoint().follow(o).then(function(t){if(t){var o={subscription:t,dom:e.findQueryBoxDom()};f.$$(e.root).trigger(u.SearchAlertsEvents.searchAlertsCreated,o)}else e.triggerSearchAlertsFail()}).catch(function(){e.triggerSearchAlertsFail()})},t.prototype.openPanel=function(){var e=this,t=f.$$("div"),o=f.$$("div",{className:"coveo-subscriptions-panel-title"},h.l("SearchAlerts_Panel"));t.append(o.el);var n=f.$$("div"),s=f.$$("table",{className:"coveo-subscriptions-panel-content",cellspacing:0});n.append(s.el);var l=f.$$("thead");s.append(l.el);var i=f.$$("tr");l.append(i.el);var r=f.$$("th",{className:"coveo-subscriptions-panel-content-type"},h.l("SearchAlerts_Type")),a=f.$$("th",null,h.l("SearchAlerts_Content")),c=f.$$("th",null,h.l("SearchAlerts_Frequency")),u=f.$$("th",{className:"coveo-subscriptions-panel-content-actions"},h.l("SearchAlerts_Actions"));i.append(r.el),i.append(a.el),i.append(c.el),i.append(u.el);var p=f.$$("tbody",{className:"coveo-subscriptions-panel-spacer"},f.$$("tr",null,f.$$("td",{colsspan:3})));s.append(p.el);var d=f.$$("tbody",{className:"coveo-subscriptions-panel-subscriptions"},f.$$("tr",{className:"coveo-subscriptions-panel-no-subscriptions"},f.$$("td",{colspan:3},h.l("SearchAlerts_PanelNoSearchAlerts"))));s.append(d.el);var y="big";return this.queryController.getEndpoint().listSubscriptions().then(function(t){m.each(t,function(t){e.addSearchAlert(t,n)})}).catch(function(){y="small",n.empty(),n.append(e.getFailureMessage().el)}).finally(function(){e.modal=e.ModalBox.open(n.el,{title:t.el.outerHTML,className:"coveo-subscriptions-panel",sizeMod:y})})},t.prototype.getFailureMessage=function(){return f.$$("div",{className:"coveo-subscriptions-panel-fail"},h.l("SearchAlerts_Fail"))},t.prototype.handleSearchAlertsFail=function(){if(null!=this.modal){var e=f.$$(this.modal.wrapper).find(".coveo-modal-body");f.$$(e).empty(),f.$$(e).append(this.getFailureMessage().el)}},t.prototype.close=function(){this.modal&&(this.modal.close(),this.modal=null)},t.prototype.addSearchAlert=function(e,t){var o,n=this,s=[{value:"monthly",label:h.l("Monthly")},{value:"daily",label:h.l("Daily")},{value:"monday",label:h.l("Monday")},{value:"tuesday",label:h.l("Tuesday")},{value:"wednesday",label:h.l("Wednesday")},{value:"thursday",label:h.l("Thursday")},{value:"friday",label:h.l("Friday")},{value:"saturday",label:h.l("Saturday")},{value:"sunday",label:h.l("Sunday")}];if(e.name)if("<empty>"==e.name)o="&lt;empty&gt;";else{var l=f.$$("div").el;l.innerHTML=e.name,o=f.$$(l).text()}else if(e.type==p.SUBSCRIPTION_TYPE.followQuery){var i=e.typeConfig;o=m.escape(i.query.q)||h.l("EmptyQuery")}else{var i=e.typeConfig;o=m.escape(i.title||i.id)}var r=f.$$("tr",{className:"coveo-subscriptions-panel-subscription"}),a=m.pluck(s,"value"),c=function(e){return m.findWhere(s,{value:e}).label},d=f.$$("td",{className:"coveo-subscriptions-panel-content-type"},h.l("SearchAlerts_Type_"+e.type)),y=f.$$("td",{className:"coveo-subscriptions-panel-context",title:o});y.setHtml(o);var g=f.$$("td",null,f.$$("div",{className:"coveo-subscriptions-panel-frequency"},function(){return new b.Dropdown(function(t){n.usageAnalytics.logCustomEvent(v.analyticsActionCauseList.searchAlertsUpdateSubscription,{subscription:o,frequency:t.getValue()},n.element),n.updateAndSyncSearchAlert(e)},a,c).build()}())),$=f.$$("td",{className:"coveo-subscriptions-panel-content-actions"},null,f.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-unfollow"},h.l("SearchAlerts_unFollowing")),f.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-follow"},h.l("SearchAlerts_follow")));r.append(d.el),r.append(y.el),r.append(g.el),r.append($.el);var S=t.find(".coveo-subscriptions-panel-no-subscriptions");r.insertBefore(S),g.find("select").value=e.frequency,f.$$(r.find(".coveo-subscriptions-panel-action-unfollow")).on("click",function(){r.addClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().deleteSubscription(e).then(function(){e.type==p.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(v.analyticsActionCauseList.searchAlertsUnfollowDocument,e):e.type==p.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(v.analyticsActionCauseList.searchAlertsUnfollowQuery,e),delete e.id;var t={subscription:e};f.$$(n.root).trigger(u.SearchAlertsEvents.searchAlertsDeleted,t)}).catch(function(){n.handleSearchAlertsFail()})}),f.$$(r.find(".coveo-subscriptions-panel-action-follow")).on("click",function(){r.removeClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().follow(e).then(function(t){e.type==p.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(v.analyticsActionCauseList.searchAlertsFollowDocument,e):e.type==p.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(v.analyticsActionCauseList.searchAlertsFollowQuery,e),e.id=t.id;var o={subscription:e};f.$$(n.root).trigger(u.SearchAlertsEvents.searchAlertsCreated,o)}).catch(function(){n.handleSearchAlertsFail()})})},t.prototype.updateAndSyncSearchAlert=function(e){var t=this;this.queryController.getEndpoint().updateSubscription(e).then(function(t){return m.extend(e,t)}).catch(function(){t.handleSearchAlertsFail()})},t.prototype.triggerSearchAlertsFail=function(){var e={dom:this.findQueryBoxDom()};f.$$(this.root).trigger(u.SearchAlertsEvents.searchAlertsFail,e)},t.prototype.findQueryBoxDom=function(){var e,t=this.searchInterface.getComponents("Querybox");if(t&&t.length>0)e=m.first(t).element;else{var o=this.searchInterface.getComponents("Omnibox");o&&o.length>0&&(e=m.first(o).element)}return e},t.prototype.buildFollowQueryRequest=function(e,t){var o={query:e};return t.modifiedDateField&&(o.modifiedDateField=t.modifiedDateField),{type:p.SUBSCRIPTION_TYPE.followQuery,typeConfig:o,name:this.message.getFollowQueryMessage(e.q)}},t.prototype.logAnalyticsEvent=function(e,t){this.usageAnalytics.logCustomEvent(e,{subscription:t.name},this.element)},t.create=function(e,o,n){return c.Assert.exists(e),new t(e,o,S.get(n,A.SearchInterface).getBindings())},t.ID="SearchAlerts",t.doExport=function(){g.exportGlobally({SearchAlerts:t,SearchAlertsMessage:i.SearchAlertsMessage})},t.options={enableManagePanel:l.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableFollowQuery:l.ComponentOptions.buildBooleanOption({defaultValue:!0}),modifiedDateField:l.ComponentOptions.buildFieldOption(),enableMessage:l.ComponentOptions.buildBooleanOption({defaultValue:!0}),messageCloseDelay:l.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0,depend:"enableMessage"})},t}(s.Component);t.SearchAlerts=C,d.Initialization.registerAutoCreateComponent(C)},421:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),l=o(7),i=o(59),r=o(10),a=o(152),c=o(47),u=o(8),p=o(2),d=o(0),h=o(13),f=o(14),y=function(e){function t(o,n,s){var l=e.call(this,o,t.ID,s)||this;return l.element=o,l.options=n,l.bindings=s,l.bind.onRootElement(i.SearchAlertsEvents.searchAlertsCreated,function(e){return l.handleSubscriptionCreated(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsFail,function(e){return l.handleSearchAlertsFail(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsDeleted,function(){return l.close()}),l.bind.oneRootElement(r.QueryEvents.newQuery,function(){return l.close()}),l}return n(t,e),t.prototype.getCssClass=function(){return"coveo-subscriptions-messages"},t.prototype.getFollowQueryMessage=function(e,t){var o=this;void 0===t&&(t=!1);var n={text:[]};p.$$(this.root).trigger(i.SearchAlertsEvents.searchAlertsPopulateMessage,n);var s,l=(t?"<ul>":"")+function(){return d.map(n.text,function(e){return e=o.formatMessageArgumentsText(e),(t?"<li>":"(")+e+(t?"</li>":")")}).join(" ")}()+(t?"</ul>":"");return e&&0!=n.text.length&&(s=d.escape(e)+" "+l),e&&0==n.text.length&&(s=""+d.escape(e)),e||0==n.text.length||(s=""+l),e||0!=n.text.length||(s=t?u.l("EmptyQuery"):d.unescape(u.l("EmptyQuery"))),s},t.prototype.showMessage=function(e,t,o){var n=this;this.message=p.$$("div",{className:"coveo-subscriptions-messages"}),this.message.el.innerHTML="\n      <div class='coveo-subscriptions-messages-message'>\n        <div class='coveo-subscriptions-messages-content'><span>"+t+"</span></div>\n        <div class='coveo-subscriptions-messages-info-close'>"+h.SVGIcons.icons.checkboxHookExclusionMore+"</div>\n      </div>",this.message.toggleClass("coveo-subscriptions-messages-error",o);var s=this.message.find(".coveo-subscriptions-messages-info-close");f.SVGDom.addClassToSVGInContainer(s,"coveo-subscript-messages-info-close-svg"),p.$$(s).on("click",function(){return n.close()}),c.PopupUtils.positionPopup(this.message.el,e.el,this.root,{horizontal:c.PopupHorizontalAlignment.INNERLEFT,vertical:c.PopupVerticalAlignment.BOTTOM,verticalOffset:12,horizontalClip:!0},this.root),this.startCloseDelay(),this.message.on("mouseleave",function(){n.startCloseDelay()}),this.message.on("mouseenter",function(){n.stopCloseDelay()})},t.prototype.formatMessageArgumentsText=function(e){return e=d.isString(e)?d.escape(e):e.lineThrough?'<span style="text-decoration:line-through">'+d.escape(e.value)+"</span>":d.escape(e.value)},t.prototype.handleSubscriptionCreated=function(e){if(this.close(),null!=e.dom)if(e.subscription.type==a.SUBSCRIPTION_TYPE.followQuery){var t=e.subscription.typeConfig;this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollowQuery",this.getFollowQueryMessage(t.query.q,!0)),!1)}else this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollow"),!1)},t.prototype.handleSearchAlertsFail=function(e){this.close(),null!=e.dom&&this.showMessage(p.$$(e.dom),u.l("SearchAlerts_Fail"),!0)},t.prototype.startCloseDelay=function(){var e=this;clearTimeout(this.closeTimeout),this.closeTimeout=setTimeout(function(){e.close()},this.options.closeDelay)},t.prototype.stopCloseDelay=function(){clearTimeout(this.closeTimeout)},t.prototype.close=function(){null!=this.message&&(clearTimeout(this.closeTimeout),this.message.remove(),this.message=null)},t.ID="SubscriptionsMessages",t.options={closeDelay:l.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0})},t}(s.Component);t.SearchAlertsMessage=y},50:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),s=o(8),l=o(0),i=o(3),r=function(){function e(e,t,o){void 0===e&&(e=function(e){}),void 0===o&&(o=s.l),this.onChange=e,this.listOfValues=t,this.getDisplayValue=o,this.optionsElement=[],this.buildContent(),this.select(0,!1),this.bindEvents()}return e.doExport=function(){i.exportGlobally({Dropdown:e})},e.prototype.reset=function(){this.select(0,!1)},e.prototype.setId=function(e){n.$$(this.element).setAttribute("id",e)},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.selectElement.value},e.prototype.select=function(e,t){void 0===t&&(t=!0),this.selectOption(this.optionsElement[e],t)},e.prototype.build=function(){return this.element},e.prototype.setValue=function(e){var t=this;l.each(this.optionsElement,function(o){n.$$(o).getAttribute("data-value")==e&&t.selectOption(o)})},e.prototype.selectOption=function(e,t){void 0===t&&(t=!0),this.selectElement.value=e.value,t&&this.onChange(this)},e.prototype.buildContent=function(){var e=this;this.selectElement=n.$$("select",{className:"coveo-dropdown"}).el;var t=this.buildOptions();l.each(t,function(t){n.$$(e.selectElement).append(t)}),this.element=this.selectElement},e.prototype.buildOptions=function(){var e=this,t=[];return l.each(this.listOfValues,function(o){t.push(e.buildOption(o))}),t},e.prototype.buildOption=function(e){var t=n.$$("option");return t.setAttribute("data-value",e),t.setAttribute("value",e),t.text(this.getDisplayValue(e)),this.optionsElement.push(t.el),t.el},e.prototype.bindEvents=function(){var e=this;n.$$(this.selectElement).on("change",function(){return e.onChange(e)})},e}();t.Dropdown=r}});