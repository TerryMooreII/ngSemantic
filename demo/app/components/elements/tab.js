System.register(["@angular/core", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, codeblock_1, languages_1;
    var TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent() {
                }
                TabComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "tab",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Tab</h1>\n        <p>Semantic UI Tab module <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/tab.html\" target=\"_blank\">Semantic UI Tab</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-tabs>\n          <sm-tab title=\"Hello\" class=\"ui tab bottom attached segment active\" data-tab=\"first\">Lorem ipsum dolor sit amet, \n          consectetur adipiscing elit. \n          Mauris vehicula eros lacus, maximus accumsan sem dignissim et. Lorem ipsum dolor sit amet, \n          consectetur adipiscing elit. \n          Cras non elementum lectus. Sed pretium vulputate quam in laoreet. Nunc molestie id erat in mollis. \n          Integer sit amet dignissim tortor. \n          Donec non ultrices augue. Aenean posuere et justo ut tempor. Fusce sagittis viverra euismod.\n</sm-tab>\n          <sm-tab title=\"About\" class=\"ui tab bottom attached segment\" data-tab=\"second\">Suspendisse vehicula, lorem in maximus vehicula, \n          massa leo viverra purus, ac blandit nulla orci eget eros. Integer at est dapibus, molestie justo non, accumsan est. \n          In dictum consequat pharetra. \n          Cras ultricies elit nec auctor volutpat. In nibh justo, fringilla non tellus ac, imperdiet iaculis diam. \n          Cras maximus ex urna, sit amet elementum eros aliquam volutpat. Ut nec commodo neque. Mauris euismod, leo eu iaculis \n          vestibulum, massa nibh eleifend ante, eu interdum lacus arcu sit amet dui. Fusce tincidunt semper justo et feugiat. \n          Mauris turpis mi, dignissim quis turpis vel, molestie aliquet augue. Curabitur finibus nibh vitae lobortis lacinia. \n          Curabitur molestie porta mauris at elementum. Nunc dignissim pharetra ligula non elementum. \n          Praesent gravida porta nunc et venenatis. \n          Curabitur malesuada arcu non risus aliquet, vitae pulvinar metus luctus. Nulla fermentum, \n          elit a pellentesque aliquet, metus felis mollis enim, et pulvinar orci massa in est.\n</sm-tab>\n      </sm-tabs>\n    <h4 class=\"ui header\">Code</h4>\n    <codeblock markup>\n&lt;sm-tabs>\n  <sm-tab title=\"Hello\" class=\"ui tab bottom attached segment active\" data-tab=\"first\">text...</sm-tab>\n  <sm-tab title=\"About\" class=\"ui tab bottom attached segment\" data-tab=\"second\">text..</sm-tab>\n&lt;/sm-tabs>\n    </codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            }());
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL3RhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtEQTtnQkFBQTtnQkFBMkIsQ0FBQztnQkE3QzVCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxRQUFRLEVBQUcsS0FBSzt3QkFDaEIsUUFBUSxFQUFHLGk5RUF3Q2Q7cUJBQ0EsQ0FBQzs7Z0NBQUE7Z0JBQ3lCLG1CQUFDO1lBQUQsQ0FBQyxBQUE1QixJQUE0QjtZQUE1Qix1Q0FBNEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcbiAgICBzZWxlY3RvciA6IFwidGFiXCIsXG4gICAgdGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+VGFiPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgVGFiIG1vZHVsZSA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3RhYi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgVGFiPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHNtLXRhYnM+XG4gICAgICAgICAgPHNtLXRhYiB0aXRsZT1cIkhlbGxvXCIgY2xhc3M9XCJ1aSB0YWIgYm90dG9tIGF0dGFjaGVkIHNlZ21lbnQgYWN0aXZlXCIgZGF0YS10YWI9XCJmaXJzdFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcbiAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFxuICAgICAgICAgIE1hdXJpcyB2ZWhpY3VsYSBlcm9zIGxhY3VzLCBtYXhpbXVzIGFjY3Vtc2FuIHNlbSBkaWduaXNzaW0gZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcbiAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFxuICAgICAgICAgIENyYXMgbm9uIGVsZW1lbnR1bSBsZWN0dXMuIFNlZCBwcmV0aXVtIHZ1bHB1dGF0ZSBxdWFtIGluIGxhb3JlZXQuIE51bmMgbW9sZXN0aWUgaWQgZXJhdCBpbiBtb2xsaXMuIFxuICAgICAgICAgIEludGVnZXIgc2l0IGFtZXQgZGlnbmlzc2ltIHRvcnRvci4gXG4gICAgICAgICAgRG9uZWMgbm9uIHVsdHJpY2VzIGF1Z3VlLiBBZW5lYW4gcG9zdWVyZSBldCBqdXN0byB1dCB0ZW1wb3IuIEZ1c2NlIHNhZ2l0dGlzIHZpdmVycmEgZXVpc21vZC5cbjwvc20tdGFiPlxuICAgICAgICAgIDxzbS10YWIgdGl0bGU9XCJBYm91dFwiIGNsYXNzPVwidWkgdGFiIGJvdHRvbSBhdHRhY2hlZCBzZWdtZW50XCIgZGF0YS10YWI9XCJzZWNvbmRcIj5TdXNwZW5kaXNzZSB2ZWhpY3VsYSwgbG9yZW0gaW4gbWF4aW11cyB2ZWhpY3VsYSwgXG4gICAgICAgICAgbWFzc2EgbGVvIHZpdmVycmEgcHVydXMsIGFjIGJsYW5kaXQgbnVsbGEgb3JjaSBlZ2V0IGVyb3MuIEludGVnZXIgYXQgZXN0IGRhcGlidXMsIG1vbGVzdGllIGp1c3RvIG5vbiwgYWNjdW1zYW4gZXN0LiBcbiAgICAgICAgICBJbiBkaWN0dW0gY29uc2VxdWF0IHBoYXJldHJhLiBcbiAgICAgICAgICBDcmFzIHVsdHJpY2llcyBlbGl0IG5lYyBhdWN0b3Igdm9sdXRwYXQuIEluIG5pYmgganVzdG8sIGZyaW5naWxsYSBub24gdGVsbHVzIGFjLCBpbXBlcmRpZXQgaWFjdWxpcyBkaWFtLiBcbiAgICAgICAgICBDcmFzIG1heGltdXMgZXggdXJuYSwgc2l0IGFtZXQgZWxlbWVudHVtIGVyb3MgYWxpcXVhbSB2b2x1dHBhdC4gVXQgbmVjIGNvbW1vZG8gbmVxdWUuIE1hdXJpcyBldWlzbW9kLCBsZW8gZXUgaWFjdWxpcyBcbiAgICAgICAgICB2ZXN0aWJ1bHVtLCBtYXNzYSBuaWJoIGVsZWlmZW5kIGFudGUsIGV1IGludGVyZHVtIGxhY3VzIGFyY3Ugc2l0IGFtZXQgZHVpLiBGdXNjZSB0aW5jaWR1bnQgc2VtcGVyIGp1c3RvIGV0IGZldWdpYXQuIFxuICAgICAgICAgIE1hdXJpcyB0dXJwaXMgbWksIGRpZ25pc3NpbSBxdWlzIHR1cnBpcyB2ZWwsIG1vbGVzdGllIGFsaXF1ZXQgYXVndWUuIEN1cmFiaXR1ciBmaW5pYnVzIG5pYmggdml0YWUgbG9ib3J0aXMgbGFjaW5pYS4gXG4gICAgICAgICAgQ3VyYWJpdHVyIG1vbGVzdGllIHBvcnRhIG1hdXJpcyBhdCBlbGVtZW50dW0uIE51bmMgZGlnbmlzc2ltIHBoYXJldHJhIGxpZ3VsYSBub24gZWxlbWVudHVtLiBcbiAgICAgICAgICBQcmFlc2VudCBncmF2aWRhIHBvcnRhIG51bmMgZXQgdmVuZW5hdGlzLiBcbiAgICAgICAgICBDdXJhYml0dXIgbWFsZXN1YWRhIGFyY3Ugbm9uIHJpc3VzIGFsaXF1ZXQsIHZpdGFlIHB1bHZpbmFyIG1ldHVzIGx1Y3R1cy4gTnVsbGEgZmVybWVudHVtLCBcbiAgICAgICAgICBlbGl0IGEgcGVsbGVudGVzcXVlIGFsaXF1ZXQsIG1ldHVzIGZlbGlzIG1vbGxpcyBlbmltLCBldCBwdWx2aW5hciBvcmNpIG1hc3NhIGluIGVzdC5cbjwvc20tdGFiPlxuICAgICAgPC9zbS10YWJzPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLXRhYnM+XG4gIDxzbS10YWIgdGl0bGU9XCJIZWxsb1wiIGNsYXNzPVwidWkgdGFiIGJvdHRvbSBhdHRhY2hlZCBzZWdtZW50IGFjdGl2ZVwiIGRhdGEtdGFiPVwiZmlyc3RcIj50ZXh0Li4uPC9zbS10YWI+XG4gIDxzbS10YWIgdGl0bGU9XCJBYm91dFwiIGNsYXNzPVwidWkgdGFiIGJvdHRvbSBhdHRhY2hlZCBzZWdtZW50XCIgZGF0YS10YWI9XCJzZWNvbmRcIj50ZXh0Li48L3NtLXRhYj5cbiZsdDsvc20tdGFicz5cbiAgICA8L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge31cbiJdfQ==