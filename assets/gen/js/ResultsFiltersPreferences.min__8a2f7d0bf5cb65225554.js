webpackJsonpCoveo__temporary([13,54,55],{128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=n(0),r=n(8);n(348);var a=n(4),s=n(3),c=function(){function e(e,t,n){void 0===e&&(e=function(e){}),this.onChange=e,this.options=t,this.label=n,this.buildContent()}return e.doExport=function(){s.exportGlobally({MultiSelect:e})},e.prototype.build=function(){return this.element},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return o.chain(this.element.options).toArray().filter(function(e){return e.selected}).map(function(e){return e.value}).value()},e.prototype.getUnselectedValues=function(){return o.chain(this.element.options).toArray().filter(function(e){return!e.selected}).map(function(e){return e.value}).value()},e.prototype.setValue=function(e){var t=this.getValue(),n=o.partition(o.toArray(this.element.options),function(e){return o.contains(t,e.value)}),r=o.partition(o.toArray(this.element.options),function(t){return o.contains(e,t.value)});o.each(r[0],function(e){return e.selected=!0}),o.each(r[1],function(e){return e.selected=!1});var s=!1;a.Utils.arrayEqual(n[0],r[0],!1)||(s=!0),a.Utils.arrayEqual(n[1],r[1],!1)||(s=!0),s&&i.$$(this.element).trigger("change")},e.prototype.reset=function(){var e=this.getValue();this.element.selectedIndex=-1,a.Utils.isEmptyArray(e)||i.$$(this.element).trigger("change")},e.prototype.buildContent=function(){var e=this;this.element=i.$$("select",{className:"mdc-multi-select mdl-list",multiple:"",size:this.options.length.toString()}).el;var t=i.$$("optgroup",{className:"mdc-list-group",label:this.label}),n=o.map(this.options,function(e){return i.$$("option",{value:e,className:"mdc-list-item"},r.l(e))});o.each(n,function(e){return t.append(e.el)}),this.element.appendChild(t.el),i.$$(this.element).on("change",function(){return e.onChange(e)})},e}();t.MultiSelect=c},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=function(){function e(){}return e.addClassToSVGInContainer=function(t,n){var i=t.querySelector("svg");i.setAttribute("class",""+e.getClass(i)+n)},e.removeClassFromSVGInContainer=function(t,n){var i=t.querySelector("svg");i.setAttribute("class",e.getClass(i).replace(n,""))},e.addStyleToSVGInContainer=function(e,t){var n=e.querySelector("svg");i.each(t,function(e,t){n.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=o},193:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=n(7),a=n(35),s=n(15),c=n(67),l=n(16),u=n(10),d=n(12),p=n(38),f=n(9),h=n(1),v=n(8),m=n(4),b=n(2),y=n(0),C=n(3);n(417);var $=n(53),F=n(46),x=n(128),g=n(93),I=n(13),A=n(14),E=function(e){function t(n,i,c){var u=e.call(this,n,t.ID,c)||this;return u.element=n,u.options=i,u.bindings=c,u.preferencePanelCheckboxInput={},u.options=r.ComponentOptions.initComponentOptions(n,t,i),u.preferencePanel=b.$$(u.element).closest(o.Component.computeCssClassNameForType("PreferencesPanel")),u.preferencePanel?(u.preferencePanelLocalStorage=new a.LocalStorageUtils(t.ID),u.mergeLocalPreferencesWithStaticPreferences(),u.bindPreferencePanelEvent(),u.bindBreadcrumbEvent(),u.bindQueryEvent(),u.bind.oneRootElement(s.InitializationEvents.afterComponentsInitialization,function(){return u.createDom()}),u.bind.oneQueryState(l.MODEL_EVENTS.CHANGE_ONE,d.QUERY_STATE_ATTRIBUTES.T,function(){return u.fromPreferencesToCheckboxInput()}),u):(u.logger.warn('Cannot instantiate ResultsFilterPreferences, as there is no "CoveoPreferencesPanel" in your page !'),u)}return i(t,e),t.prototype.createDom=function(){this.container=new g.FormGroup([],v.l("ResultsFilteringExpression")).build(),this.element.appendChild(this.container),this.buildCheckboxesInput(),this.options.showAdvancedFilters&&this.buildAdvancedFilters()},t.prototype.save=function(){this.fromCheckboxInputToPreferences();var e=y.omit(this.preferences,"tab");this.logger.info("Saving preferences",e),this.preferencePanelLocalStorage.save(e)},t.prototype.exitWithoutSave=function(){this.fromPreferencesToCheckboxInput(),this.hideAdvancedFilterBuilder()},t.prototype.bindPreferencePanelEvent=function(){var e=this;this.bind.on(this.preferencePanel,c.PreferencesPanelEvents.savePreferences,function(){return e.save()}),this.bind.on(this.preferencePanel,c.PreferencesPanelEvents.exitPreferencesWithoutSave,function(){return e.exitWithoutSave()})},t.prototype.bindBreadcrumbEvent=function(){var e=this;this.options.includeInBreadcrumb&&(this.bind.onRootElement(p.BreadcrumbEvents.populateBreadcrumb,function(t){return e.handlePopulateBreadcrumb(t)}),this.bind.onRootElement(p.BreadcrumbEvents.clearBreadcrumb,function(){return e.handleClearBreadcrumb()}))},t.prototype.bindQueryEvent=function(){var e=this;this.bind.onRootElement(u.QueryEvents.buildingQuery,function(t){return e.handleBuildingQuery(t)})},t.prototype.handleBuildingQuery=function(e){y.each(this.getActiveFilters(),function(t){m.Utils.isNonEmptyString(t.expression)&&e.queryBuilder.advancedExpression.add(t.expression)})},t.prototype.handlePopulateBreadcrumb=function(e){var t=this.getActiveFilters();if(m.Utils.isNonEmptyArray(t)){var n=b.$$("div",{className:"coveo-results-filter-preferences-breadcrumb"}),i=b.$$("span",{className:"coveo-title"});i.text(v.l("FiltersInYourPreferences")+":"),n.el.appendChild(i.el);var o=b.$$("span",{className:"coveo-values"});n.el.appendChild(o.el);for(var r=0;r<t.length;r++){if(0!=r){var a=b.$$("span",{className:"coveo-separator"});a.text(", "),o.el.appendChild(a.el)}o.el.appendChild(this.buildBreadcrumb(t[r]))}e.breadcrumbs.push({element:n.el})}},t.prototype.handleClearBreadcrumb=function(){y.each(this.getActiveFilters(),function(e){e.selected=!1}),this.fromPreferencesToCheckboxInput()},t.prototype.buildAdvancedFilters=function(){var e=this;this.advancedFilters=b.$$("div",{className:"coveo-advanced-filters"},v.l("Create")).el,this.buildAdvancedFilterInput(),this.buildAdvancedFilterFormValidate(),this.advancedFiltersBuilder=b.$$("div",{className:"coveo-advanced-filters-builder"}).el,this.advancedFiltersBuilder.appendChild(this.advancedFilterFormValidate),b.$$(this.advancedFilters).on("click",function(){return e.openAdvancedFilterSectionOrSaveFilters()});var t=b.$$("a",{href:"http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10006",className:"coveo-online-help"},"?"),n=b.$$(this.container).find(".coveo-form-group-label");t.insertAfter(n),b.$$(this.advancedFilters).insertAfter(n),this.container.appendChild(this.advancedFiltersBuilder)},t.prototype.buildAdvancedFilterInput=function(){this.advancedFiltersTextInputCaption=new F.TextInput(function(){},v.l("Caption")),this.advancedFiltersTextInputCaption.getInput().setAttribute("required",""),this.advancedFiltersTextInputExpression=new F.TextInput(function(){},v.l("Expression")),this.advancedFiltersTextInputExpression.getInput().setAttribute("required",""),this.advancedFiltersTabSelect=new x.MultiSelect(function(){},this.getAllTabs(),v.l("Tab"))},t.prototype.buildAdvancedFilterFormValidate=function(){var e=this;this.advancedFilterFormValidate=b.$$("form").el;var t=b.$$("input",{type:"submit"}),n=b.$$("span",{className:"coveo-save"},I.SVGIcons.icons.checkboxHookExclusionMore);A.SVGDom.addClassToSVGInContainer(n.el,"coveo-save-svg");var i=b.$$("span",{className:"coveo-close"},I.SVGIcons.icons.checkboxHookExclusionMore);A.SVGDom.addClassToSVGInContainer(i.el,"coveo-close-svg");var o=b.$$("div",{className:"coveo-choice-container coveo-close-and-save"});o.el.appendChild(n.el),o.el.appendChild(i.el);var r=this.advancedFiltersTextInputCaption.build();b.$$(r).addClass("coveo-caption");var a=this.advancedFiltersTabSelect.build();b.$$(a).addClass("coveo-tab");var s=this.advancedFiltersTextInputExpression.build();b.$$(s).addClass("coveo-expression"),y.each([r,s,a,o.el,t.el],function(t){e.advancedFilterFormValidate.appendChild(t)}),n.on("click",function(){t.el.click()}),i.on("click",function(){e.hideAdvancedFilterBuilder()}),b.$$(this.advancedFilterFormValidate).on("submit",function(t){return e.validateAndSaveAdvancedFilter(t)})},t.prototype.getAllTabs=function(){var e=o.Component.getComponentRef("Tab");if(e){var t=b.$$(this.root).findAll("."+o.Component.computeCssClassName(e));return y.map(t,function(e){return o.Component.get(e).options.id})}return[]},t.prototype.getPreferencesBoxInputToBuild=function(){return y.map(this.preferences,function(e){return{label:e.caption,tab:e.tab,expression:e.expression}})},t.prototype.buildCheckboxesInput=function(){var e=this;void 0!=this.preferenceContainer&&this.preferenceContainer.remove();var t=this.getPreferencesBoxInputToBuild();m.Utils.isNonEmptyArray(t)&&(this.preferenceContainer=b.$$("div",{className:"coveo-choices-container"}).el,y.each(t,function(t){var n=new $.Checkbox(function(t){e.save();var n=e.preferences[t.getValue()];e.fromFilterToAnalyticsEvent(n,n.selected?"selected":"unselected"),e.queryController.executeQuery({closeModalBox:!1})},t.label);b.$$(n.build()).addClass("coveo-choice-container"),e.preferencePanelCheckboxInput[t.label]=n,e.preferenceContainer.appendChild(n.getElement())}),y.each(b.$$(this.preferenceContainer).findAll(".coveo-choice-container"),function(e){e.appendChild(b.$$("div",{className:"coveo-section coveo-section-edit-delete"}).el)}),b.$$(this.container).append(this.preferenceContainer),this.buildEditAdvancedFilter(),this.buildDeleteAdvancedFilter(),this.fromPreferencesToCheckboxInput())},t.prototype.buildDeleteAdvancedFilter=function(){var e=this;y.each(this.preferences,function(t){if(t.custom){var n=b.$$("span",{className:"coveo-delete"},I.SVGIcons.icons.checkboxHookExclusionMore).el;A.SVGDom.addClassToSVGInContainer(n,"coveo-delete-svg");var i=e.getFilterElementByCaption(t.caption);b.$$(i).find(".coveo-section-edit-delete").appendChild(n),b.$$(n).on("click",function(){return e.confirmDelete(t,i)})}})},t.prototype.buildEditAdvancedFilter=function(){var e=this;y.each(this.preferences,function(t){if(t.custom){var n=b.$$("span",{className:"coveo-edit"},I.SVGIcons.icons.edit);A.SVGDom.addClassToSVGInContainer(n.el,"coveo-edit-svg");var i=e.getFilterElementByCaption(t.caption);b.$$(i).find(".coveo-section-edit-delete").appendChild(n.el),n.on("click",function(){return e.editElement(t,i)})}})},t.prototype.buildBreadcrumb=function(e){var t=this,n=b.$$("span",{className:"coveo-value"}),i=b.$$("span",{className:"coveo-caption"});i.text(e.caption),n.el.appendChild(i.el);var o=b.$$("span",{className:"coveo-clear"},I.SVGIcons.icons.checkboxHookExclusionMore);return A.SVGDom.addClassToSVGInContainer(o.el,"coveo-clear-svg"),n.el.appendChild(o.el),n.on("click",function(){e.selected=!1,t.fromFilterToAnalyticsEvent(e,"cleared from breadcrumb"),t.fromPreferencesToCheckboxInput(),t.queryController.executeQuery({closeModalBox:!1})}),n.el},t.prototype.confirmDelete=function(e,t){if(confirm(v.l("AreYouSureDeleteFilter",e.caption,e.expression))){var n=e.selected;this.deleteFilterPreference(e,t),n&&(this.fromFilterToAnalyticsEvent(e,"deleted"),this.queryController.executeQuery({closeModalBox:!1}))}},t.prototype.editElement=function(e,t){var n=this.preferences[e.caption].caption,i=this.preferences[e.caption].tab,o=this.preferences[e.caption].expression;this.deleteFilterPreference(e,t),this.openAdvancedFilterSectionOrSaveFilters(),this.populateEditSection({tab:i,caption:n,expression:o})},t.prototype.populateEditSection=function(e){void 0===e&&(e={tab:[""],caption:"",expression:""}),this.advancedFiltersTextInputCaption.setValue(e.caption),this.advancedFiltersTextInputExpression.setValue(e.expression),this.advancedFiltersTabSelect.setValue(e.tab)},t.prototype.deleteFilterPreference=function(e,t){this.preferencePanelLocalStorage.remove(e.caption),delete this.preferences[e.caption],b.$$(b.$$(t).closest(".coveo-choice-container")).detach()},t.prototype.openAdvancedFilterSectionOrSaveFilters=function(){b.$$(this.advancedFiltersBuilder).hasClass("coveo-active")?(b.$$(b.$$(this.advancedFilterFormValidate).find("input[type=submit]")).trigger("click"),this.hideAdvancedFilterBuilder()):(this.populateEditSection(),this.showAdvancedFilterBuilder())},t.prototype.validateAndSaveAdvancedFilter=function(e){e.preventDefault(),this.hideAdvancedFilterBuilder();var t=this.advancedFiltersTextInputCaption.getValue(),n=this.advancedFiltersTextInputExpression.getValue(),i=this.advancedFiltersTabSelect.getValue();this.preferences[t]={caption:t,custom:!0,expression:n,tab:i,selected:!0},this.buildCheckboxesInput(),this.save(),this.queryStateModel.set(d.QueryStateModel.attributesEnum.t,this.getActiveTab()),this.advancedFiltersTextInputCaption.reset(),this.advancedFiltersTextInputExpression.reset(),this.advancedFiltersTabSelect.reset(),this.container.appendChild(this.advancedFiltersBuilder),this.fromFilterToAnalyticsEvent(this.preferences[t],"saved"),this.queryController.executeQuery({closeModalBox:!1})},t.prototype.fromPreferencesToCheckboxInput=function(){var e=this;y.each(this.getActiveFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].select()}),y.each(this.getInactiveFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].reset()}),y.each(this.getDormantFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].select()})},t.prototype.fromCheckboxInputToPreferences=function(){if(this.preferencePanelCheckboxInput){var e=y.map(y.filter(this.preferencePanelCheckboxInput,function(e){return e.isSelected()}),function(e){return e.getValue()});y.each(this.preferences,function(t){y.contains(e,t.caption)?t.selected=!0:t.selected=!1})}},t.prototype.getDormantFilters=function(){var e=this,t=this.getActiveTab();return y.filter(this.preferences,function(n){return n.selected&&!e.filterIsInActiveTab(n,t)})},t.prototype.getActiveFilters=function(){var e=this,t=this.getActiveTab();return y.filter(this.preferences,function(n){return n.selected&&e.filterIsInActiveTab(n,t)})},t.prototype.getInactiveFilters=function(){var e=this,t=this.getActiveTab();return y.filter(this.preferences,function(n){return!n.selected||!e.filterIsInActiveTab(n,t)})},t.prototype.getActiveTab=function(){return this.queryStateModel.get(d.QueryStateModel.attributesEnum.t)},t.prototype.filterIsInActiveTab=function(e,t){return e.tab=y.compact(e.tab),y.contains(e.tab,t)||m.Utils.isEmptyArray(e.tab)},t.prototype.getFilterElementByCaption=function(e){return b.$$(this.preferenceContainer).find("input[value='"+e+"']").parentElement},t.prototype.fromResultsFilterOptionToResultsPreferenceInterface=function(){var e={};return y.each(this.options.filters,function(t,n){e[n]={expression:t.expression,tab:t.tab,selected:!!t.selected&&t.selected,custom:!1,caption:n}}),e},t.prototype.mergeLocalPreferencesWithStaticPreferences=function(){var e=this.fromResultsFilterOptionToResultsPreferenceInterface(),t=this.preferencePanelLocalStorage.load(),n=y.filter(t,function(t){var n=t.custom,i=y.find(e,function(e){return e.caption==t.caption});return n||void 0!=i}),i={};y.each(n,function(e){i[e.caption]={expression:e.expression,tab:e.tab,selected:e.selected,custom:e.custom,caption:e.caption}}),this.preferences=m.Utils.extendDeep(e,i)},t.prototype.fromFilterToAnalyticsEvent=function(e,t){this.usageAnalytics.logSearchEvent(f.analyticsActionCauseList.customfiltersChange,{customFilterName:e.caption,customFilterExpression:e.expression,customFilterType:t})},t.prototype.enlargeModalBox=function(){var e=b.$$(document.body).find(".coveo-modal-container");e&&b.$$(e).addClass("coveo-mod-big")},t.prototype.shrinkModalBox=function(){var e=b.$$(document.body).find(".coveo-modal-container");e&&b.$$(e).removeClass("coveo-mod-big")},t.prototype.showAdvancedFilterBuilder=function(){this.advancedFiltersBuilder&&(b.$$(this.advancedFiltersBuilder).addClass("coveo-active"),this.enlargeModalBox())},t.prototype.hideAdvancedFilterBuilder=function(){this.advancedFiltersBuilder&&(b.$$(this.advancedFiltersBuilder).removeClass("coveo-active"),this.shrinkModalBox())},t.ID="ResultsFiltersPreferences",t.doExport=function(){C.exportGlobally({ResultsFiltersPreferences:t})},t.options={includeInBreadcrumb:r.ComponentOptions.buildBooleanOption({defaultValue:!0}),showAdvancedFilters:r.ComponentOptions.buildBooleanOption({defaultValue:!0}),filters:r.ComponentOptions.buildJsonOption()},t}(o.Component);t.ResultsFiltersPreferences=E,h.Initialization.registerAutoCreateComponent(E)},334:function(e,t){},348:function(e,t){},417:function(e,t){},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=n(0);n(334);var r=n(3),a=function(){function e(e,t){var n=this;this.element=i.$$("fieldset",{className:"coveo-form-group"},i.$$("span",{className:"coveo-form-group-label"},t)),o.each(e,function(e){n.element.append(e.build())})}return e.doExport=function(){r.exportGlobally({FormGroup:e})},e.prototype.build=function(){return this.element.el},e}();t.FormGroup=a}});