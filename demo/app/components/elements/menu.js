System.register(["@angular/core", "ng-semantic", "@angular/router", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, router_1, codeblock_1, languages_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                    this.items = [];
                    this.labeledIcons = [];
                    this.items = [{
                            "title": "Home",
                            "link": "Home",
                            "icon": "home"
                        }, {
                            "title": "About Us",
                            "link": "#/"
                        }, {
                            "title": "Contact",
                            "link": "#/"
                        }];
                    this.labeledIcons = [{
                            "title": "Games",
                            "link": "Home",
                            "icon": "gamepad"
                        }, {
                            "title": "Chanel",
                            "link": "Chanel",
                            "icon": "video camera"
                        }, {
                            "title": "Videos",
                            "link": "Videos",
                            "icon": "video play"
                        }];
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "menu-cp",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Menu</h1>\n        <p>Semantic UI Menu component <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/menu.html\" target=\"_blank\">Semantic UI Menu</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo inverted ( with sidebar )</h4>\n    <sm-menu title=\"Angular2\" class=\"ui menu inverted teal\" logo=\"/assets/images/semantic.png\">\n        <a sm-item href=\"#/elements/menu\" *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n\n        <sm-menu class=\"ui menu right secondary icon\">\n            <a sm-item href=\"#/elements/menu\" icon=\"sidebar big\" class=\"item\" sm-dir-sidebar=\"right\"></a>\n            <sm-sidebar class=\"right vertical inverted sidebar labeled menu teal huge\">\n                <a class=\"item\">\n                    <i class=\"home icon\"></i>\n                    Home\n                </a>\n                <a class=\"item\">\n                    <i class=\"block layout icon\"></i>\n                    Topics\n                </a>\n                <a class=\"item\">\n                    <i class=\"smile icon\"></i>\n                    Friends\n                </a>\n            </sm-sidebar>\n        </sm-menu>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n    <codeblock markup>\n&lt;sm-menu title=\"Angular2\" class=\"ui menu inverted teal\" logo=\"/assets/images/semantic.png\">\n    &lt;a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}&lt;/a>\n\n    &lt;sm-menu class=\"ui menu right secondary\">\n        &lt;a sm-item icon=\"sidebar big\" class=\"item\">&lt;/a>\n    &lt;/sm-menu>\n&lt;/sm-menu>\n</codeblock>\n    <h4 class=\"ui header\">Demo three item</h4>\n    <sm-menu title=\"\" class=\"ui three item menu\">\n        <a sm-item *ngFor=\"#item of ['Editorials', 'Reviews', 'Upcoming Events']\" class=\"item\">{{item}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Demo pointing</h4>\n    <sm-menu title=\"\" class=\"ui three item menu pointing\">\n        <a sm-item *ngFor=\"#item of ['Editorials', 'Reviews', 'Upcoming Events']; #i = index\"\n        class=\"item\" [ngClass]=\"{'active': i == 1}\" >{{item}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Labeled fluid icon menu</h4>\n    <sm-menu title=\"Labeled Icon\" class=\"ui fluid three item labeled icon menu inverted blue\">\n        <a sm-item *ngFor=\"#item of labeledIcons\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>    \n    \n    <h4 class=\"ui header\">Demo vertical</h4>\n    <sm-menu title=\"Vertical\" class=\"ui menu vertical\">\n        <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-menu title=\"Vertical\" class=\"ui menu vertical\">\n    &lt;a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}&lt;/a>\n&lt;/sm-menu>\n</codeblock>\n      <h4 class=\"ui header\">Demo secondary</h4>\n    <sm-menu title=\"Secondary\" class=\"ui menu secondary\">\n        <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-menu title=\"Secondary\" class=\"ui menu secondary\">\n    &lt;a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}&lt;/a>\n&lt;/sm-menu>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkZBO2dCQUlJO29CQUhBLFVBQUssR0FBZSxFQUFFLENBQUM7b0JBQ3ZCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO29CQUcxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7NEJBQ1YsT0FBTyxFQUFFLE1BQU07NEJBQ2YsTUFBTSxFQUFFLE1BQU07NEJBQ2QsTUFBTSxFQUFFLE1BQU07eUJBQ2pCLEVBQUU7NEJBQ0ssT0FBTyxFQUFFLFVBQVU7NEJBQ25CLE1BQU0sRUFBRSxJQUFJO3lCQUNmLEVBQUU7NEJBQ0MsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLE1BQU0sRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQztvQkFFUCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7NEJBQ2pCLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixNQUFNLEVBQUUsTUFBTTs0QkFDZCxNQUFNLEVBQUUsU0FBUzt5QkFDcEIsRUFBRTs0QkFDSyxPQUFPLEVBQUUsUUFBUTs0QkFDakIsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCLE1BQU0sRUFBRSxjQUFjO3lCQUN6QixFQUFFOzRCQUNDLE9BQU8sRUFBRSxRQUFROzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsTUFBTSxFQUFFLFlBQVk7eUJBQ3ZCLENBQUMsQ0FBQztnQkFFWCxDQUFDO2dCQXRITDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFFLDBCQUFpQixFQUFFLHFCQUFTLEVBQUUsa0JBQU0sQ0FBQzt3QkFDNUYsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSx5aUhBaUZiO3FCQUNBLENBQUM7O2lDQUFBO2dCQWtDRixvQkFBQztZQUFELENBQUMsQUFoQ0QsSUFnQ0M7WUFoQ0QseUNBZ0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBDb2RlYmxvY2ssIE1hcmt1cF0sXG4gICAgc2VsZWN0b3I6IFwibWVudS1jcFwiLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+TWVudTwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIE1lbnUgY29tcG9uZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVudTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gaW52ZXJ0ZWQgKCB3aXRoIHNpZGViYXIgKTwvaDQ+XG4gICAgPHNtLW1lbnUgdGl0bGU9XCJBbmd1bGFyMlwiIGNsYXNzPVwidWkgbWVudSBpbnZlcnRlZCB0ZWFsXCIgbG9nbz1cIi9hc3NldHMvaW1hZ2VzL3NlbWFudGljLnBuZ1wiPlxuICAgICAgICA8YSBzbS1pdGVtIGhyZWY9XCIjL2VsZW1lbnRzL21lbnVcIiAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cblxuICAgICAgICA8c20tbWVudSBjbGFzcz1cInVpIG1lbnUgcmlnaHQgc2Vjb25kYXJ5IGljb25cIj5cbiAgICAgICAgICAgIDxhIHNtLWl0ZW0gaHJlZj1cIiMvZWxlbWVudHMvbWVudVwiIGljb249XCJzaWRlYmFyIGJpZ1wiIGNsYXNzPVwiaXRlbVwiIHNtLWRpci1zaWRlYmFyPVwicmlnaHRcIj48L2E+XG4gICAgICAgICAgICA8c20tc2lkZWJhciBjbGFzcz1cInJpZ2h0IHZlcnRpY2FsIGludmVydGVkIHNpZGViYXIgbGFiZWxlZCBtZW51IHRlYWwgaHVnZVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhvbWUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayBsYXlvdXQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgVG9waWNzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInNtaWxlIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIEZyaWVuZHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NtLXNpZGViYXI+XG4gICAgICAgIDwvc20tbWVudT5cbiAgICA8L3NtLW1lbnU+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICA8Y29kZWJsb2NrIG1hcmt1cD5cbiZsdDtzbS1tZW51IHRpdGxlPVwiQW5ndWxhcjJcIiBjbGFzcz1cInVpIG1lbnUgaW52ZXJ0ZWQgdGVhbFwiIGxvZ289XCIvYXNzZXRzL2ltYWdlcy9zZW1hbnRpYy5wbmdcIj5cbiAgICAmbHQ7YSBzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zXCIgW2ljb25dPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJpdGVtXCI+e3tpdGVtPy50aXRsZX19Jmx0Oy9hPlxuXG4gICAgJmx0O3NtLW1lbnUgY2xhc3M9XCJ1aSBtZW51IHJpZ2h0IHNlY29uZGFyeVwiPlxuICAgICAgICAmbHQ7YSBzbS1pdGVtIGljb249XCJzaWRlYmFyIGJpZ1wiIGNsYXNzPVwiaXRlbVwiPiZsdDsvYT5cbiAgICAmbHQ7L3NtLW1lbnU+XG4mbHQ7L3NtLW1lbnU+XG48L2NvZGVibG9jaz5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHRocmVlIGl0ZW08L2g0PlxuICAgIDxzbS1tZW51IHRpdGxlPVwiXCIgY2xhc3M9XCJ1aSB0aHJlZSBpdGVtIG1lbnVcIj5cbiAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBbJ0VkaXRvcmlhbHMnLCAnUmV2aWV3cycsICdVcGNvbWluZyBFdmVudHMnXVwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19PC9hPlxuICAgIDwvc20tbWVudT5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gcG9pbnRpbmc8L2g0PlxuICAgIDxzbS1tZW51IHRpdGxlPVwiXCIgY2xhc3M9XCJ1aSB0aHJlZSBpdGVtIG1lbnUgcG9pbnRpbmdcIj5cbiAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBbJ0VkaXRvcmlhbHMnLCAnUmV2aWV3cycsICdVcGNvbWluZyBFdmVudHMnXTsgI2kgPSBpbmRleFwiXG4gICAgICAgIGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogaSA9PSAxfVwiID57e2l0ZW19fTwvYT5cbiAgICA8L3NtLW1lbnU+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5MYWJlbGVkIGZsdWlkIGljb24gbWVudTwvaDQ+XG4gICAgPHNtLW1lbnUgdGl0bGU9XCJMYWJlbGVkIEljb25cIiBjbGFzcz1cInVpIGZsdWlkIHRocmVlIGl0ZW0gbGFiZWxlZCBpY29uIG1lbnUgaW52ZXJ0ZWQgYmx1ZVwiPlxuICAgICAgICA8YSBzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGxhYmVsZWRJY29uc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cbiAgICA8L3NtLW1lbnU+ICAgIFxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gdmVydGljYWw8L2g0PlxuICAgIDxzbS1tZW51IHRpdGxlPVwiVmVydGljYWxcIiBjbGFzcz1cInVpIG1lbnUgdmVydGljYWxcIj5cbiAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cbiAgICA8L3NtLW1lbnU+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLW1lbnUgdGl0bGU9XCJWZXJ0aWNhbFwiIGNsYXNzPVwidWkgbWVudSB2ZXJ0aWNhbFwiPlxuICAgICZsdDthIHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXNcIiBbaWNvbl09XCJpdGVtLmljb25cIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW0/LnRpdGxlfX0mbHQ7L2E+XG4mbHQ7L3NtLW1lbnU+XG48L2NvZGVibG9jaz5cbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc2Vjb25kYXJ5PC9oND5cbiAgICA8c20tbWVudSB0aXRsZT1cIlNlY29uZGFyeVwiIGNsYXNzPVwidWkgbWVudSBzZWNvbmRhcnlcIj5cbiAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cbiAgICA8L3NtLW1lbnU+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLW1lbnUgdGl0bGU9XCJTZWNvbmRhcnlcIiBjbGFzcz1cInVpIG1lbnUgc2Vjb25kYXJ5XCI+XG4gICAgJmx0O2Egc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fSZsdDsvYT5cbiZsdDsvc20tbWVudT5cbjwvY29kZWJsb2NrPlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XG4gICAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBsYWJlbGVkSWNvbnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW3tcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJIb21lXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJIb21lXCIsXG4gICAgICAgICAgICBcImljb25cIjogXCJob21lXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJBYm91dCBVc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIiMvXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIiMvXCJcbiAgICAgICAgICAgIH1dO1xuXG4gICAgICAgIHRoaXMubGFiZWxlZEljb25zID0gW3tcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHYW1lc1wiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiSG9tZVwiLFxuICAgICAgICAgICAgXCJpY29uXCI6IFwiZ2FtZXBhZFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2hhbmVsXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiQ2hhbmVsXCIsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwidmlkZW8gY2FtZXJhXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVmlkZW9zXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiVmlkZW9zXCIsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwidmlkZW8gcGxheVwiXG4gICAgICAgICAgICB9XTtcblxuICAgIH1cbn1cbiJdfQ==