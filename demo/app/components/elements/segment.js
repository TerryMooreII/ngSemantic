System.register(["@angular/core", "ng-semantic", "../../services/data", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, data_1, codeblock_1, languages_1;
    var SegmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            SegmentComponent = (function () {
                function SegmentComponent() {
                }
                SegmentComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        providers: [data_1.DataServices],
                        selector: "segment",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Segment</h1>\n\t<p>Semantic UI segment element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/elements/segment.html\" target=\"_blank\">Semantic UI Segment</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-segment class=\"raised\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n\n    <h4 class=\"ui header\">Code</h4>\n    <codeblock markup>\n&lt;sm-segment class=\"raised\">...&lt;/sm-segment>\n</codeblock>\n      <h4 class=\"ui header\">Demo stacked</h4>\n    <sm-segment class=\"stacked\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n\n    <h4 class=\"ui header\">Demo circular</h4>\n    <sm-segment class=\"circular\">\n\t<h2 class=\"ui header\">\n\t    Buy Now\n\t    <div class=\"sub header\">$10.99</div>\n\t</h2>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo compact</h4>\n    <sm-segment class=\"compact\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo aligned</h4>\n    <sm-segment class=\"right aligned\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo colored</h4>\n    <sm-segment class=\"red\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n    <sm-segment class=\"blue\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo inverted</h4>\n    <sm-segment class=\"inverted green\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SegmentComponent);
                return SegmentComponent;
            }());
            exports_1("SegmentComponent", SegmentComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkVBO2dCQUFBO2dCQUErQixDQUFDO2dCQXZFaEM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBRSxxQkFBUyxFQUFFLGtCQUFNLENBQUM7d0JBQ3pFLFNBQVMsRUFBRSxDQUFDLG1CQUFZLENBQUM7d0JBQ3pCLFFBQVEsRUFBRyxTQUFTO3dCQUNwQixRQUFRLEVBQUcsdzBFQWdFZDtxQkFDQSxDQUFDOztvQ0FBQTtnQkFFNkIsdUJBQUM7WUFBRCxDQUFDLEFBQWhDLElBQWdDO1lBQWhDLCtDQUFnQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZXNdLFxuICAgIHNlbGVjdG9yIDogXCJzZWdtZW50XCIsXG4gICAgdGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuXHQ8aDE+U2VnbWVudDwvaDE+XG5cdDxwPlNlbWFudGljIFVJIHNlZ21lbnQgZWxlbWVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG5cdDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIFNlZ21lbnQ8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPlBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlxuICAgIFZlc3RpYnVsdW0gdG9ydG9yIHF1YW0sIGZldWdpYXQgdml0YWUsIHVsdHJpY2llcyBlZ2V0LCB0ZW1wb3Igc2l0IGFtZXQsIGFudGUuIERvbmVjIGV1IGxpYmVybyBzaXQgYW1ldCBxdWFtIGVnZXN0YXMgc2VtcGVyLlxuICAgIEFlbmVhbiB1bHRyaWNpZXMgbWkgdml0YWUgZXN0LiBNYXVyaXMgcGxhY2VyYXQgZWxlaWZlbmQgbGVvLjwvc20tc2VnbWVudD5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj4uLi4mbHQ7L3NtLXNlZ21lbnQ+XG48L2NvZGVibG9jaz5cbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc3RhY2tlZDwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJzdGFja2VkXCI+UGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXG4gICAgVmVzdGlidWx1bSB0b3J0b3IgcXVhbSwgZmV1Z2lhdCB2aXRhZSwgdWx0cmljaWVzIGVnZXQsIHRlbXBvciBzaXQgYW1ldCwgYW50ZS4gRG9uZWMgZXUgbGliZXJvIHNpdCBhbWV0IHF1YW0gZWdlc3RhcyBzZW1wZXIuXG4gICAgQWVuZWFuIHVsdHJpY2llcyBtaSB2aXRhZSBlc3QuIE1hdXJpcyBwbGFjZXJhdCBlbGVpZmVuZCBsZW8uPC9zbS1zZWdtZW50PlxuXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBjaXJjdWxhcjwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJjaXJjdWxhclwiPlxuXHQ8aDIgY2xhc3M9XCJ1aSBoZWFkZXJcIj5cblx0ICAgIEJ1eSBOb3dcblx0ICAgIDxkaXYgY2xhc3M9XCJzdWIgaGVhZGVyXCI+JDEwLjk5PC9kaXY+XG5cdDwvaDI+XG4gICAgPC9zbS1zZWdtZW50PlxuXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBjb21wYWN0PC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cImNvbXBhY3RcIj5cblx0PHA+XG5cdCAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS5cblx0PC9wPlxuICAgIDwvc20tc2VnbWVudD5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gYWxpZ25lZDwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJyaWdodCBhbGlnbmVkXCI+XG5cdDxwPlxuXHQgICAgUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEuXG5cdDwvcD5cbiAgICA8L3NtLXNlZ21lbnQ+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGNvbG9yZWQ8L2g0PlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwicmVkXCI+XG5cdDxwPlxuXHQgICAgUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEuXG5cdDwvcD5cbiAgICA8L3NtLXNlZ21lbnQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJibHVlXCI+XG5cdDxwPlxuXHQgICAgUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEuXG5cdDwvcD5cbiAgICA8L3NtLXNlZ21lbnQ+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGludmVydGVkPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cImludmVydGVkIGdyZWVuXCI+XG5cdDxwPlxuXHQgICAgUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEuXG5cdDwvcD5cbiAgICA8L3NtLXNlZ21lbnQ+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWdtZW50Q29tcG9uZW50IHt9XG4iXX0=