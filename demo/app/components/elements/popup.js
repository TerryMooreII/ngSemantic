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
    var PopupComponent;
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
            PopupComponent = (function () {
                function PopupComponent() {
                }
                PopupComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "popup",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Popup &amp; Tooltip</h1>\n        <p>Semantic UI Popup component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/popup.html\" target=\"_blank\">Semantic UI Popup</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo tooltip</h4>\n    <button class=\"ui button\" sm-dir-tooltip=\"Pellentesque habitant morbi tristique.\">Hover me</button>\n    \n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;button class=\"ui button\" sm-dir-tooltip=\"text...\">Hover me&lt;/button>\n</codeblock>\n      <div class=\"ui divider\"></div>\n      \n      <h4 class=\"ui header\">Demo popup</h4>\n    <button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me</button>\n    <sm-popup selector=\"my-popup\">\n        <div class='header'>User Rating</div>\n        <div class='content'>\n            <div class='ui star rating'>\n                <i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='icon'></i><i class='icon'></i>\n            </div>\n        </div>\n    </sm-popup>\n    \n    <h4 class=\"ui header\">Code</h4>\n        <codeblock markup>\n&lt;button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me&lt;/button>\n&lt;sm-popup selector=\"my-popup\">\n    ...\n&lt;/sm-popup>\n    </codeblock>   \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopupComponent);
                return PopupComponent;
            }());
            exports_1("PopupComponent", PopupComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnREE7Z0JBQUE7Z0JBQTZCLENBQUM7Z0JBM0M5QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFFLHFCQUFTLEVBQUUsa0JBQU0sQ0FBQzt3QkFDekUsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRywrL0NBcUNkO3FCQUNBLENBQUM7O2tDQUFBO2dCQUUyQixxQkFBQztZQUFELENBQUMsQUFBOUIsSUFBOEI7WUFBOUIsMkNBQThCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrIH0gZnJvbSBcIm5nMi1wcmlzbS9jb2RlYmxvY2tcIjtcbmltcG9ydCB7IE1hcmt1cCB9IGZyb20gXCJuZzItcHJpc20vbGFuZ3VhZ2VzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBDb2RlYmxvY2ssIE1hcmt1cF0sXG4gICAgc2VsZWN0b3IgOiBcInBvcHVwXCIsXG4gICAgdGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UG9wdXAgJmFtcDsgVG9vbHRpcDwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIFBvcHVwIGNvbXBvbmVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQb3B1cDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gdG9vbHRpcDwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHNtLWRpci10b29sdGlwPVwiUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZS5cIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuPGNvZGVibG9jayBtYXJrdXA+XG4mbHQ7YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgc20tZGlyLXRvb2x0aXA9XCJ0ZXh0Li4uXCI+SG92ZXIgbWUmbHQ7L2J1dHRvbj5cbjwvY29kZWJsb2NrPlxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIFxuICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBwb3B1cDwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItcG9wdXBdPVwie3NlbGVjdG9yOiAnbXktcG9wdXAnLCBwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8c20tcG9wdXAgc2VsZWN0b3I9XCJteS1wb3B1cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdoZWFkZXInPlVzZXIgUmF0aW5nPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWkgc3RhciByYXRpbmcnPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdpY29uJz48L2k+PGkgY2xhc3M9J2ljb24nPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NtLXBvcHVwPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgICAgICA8Y29kZWJsb2NrIG1hcmt1cD5cbiZsdDtidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW5cIiBbc20tZGlyLXBvcHVwXT1cIntzZWxlY3RvcjogJ215LXBvcHVwJywgcG9zaXRpb246ICdyaWdodCBjZW50ZXInfVwiPkNsaWNrIG1lJmx0Oy9idXR0b24+XG4mbHQ7c20tcG9wdXAgc2VsZWN0b3I9XCJteS1wb3B1cFwiPlxuICAgIC4uLlxuJmx0Oy9zbS1wb3B1cD5cbiAgICA8L2NvZGVibG9jaz4gICBcbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IHt9XG4iXX0=