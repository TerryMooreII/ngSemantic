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
    var HomeComponent;
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
            HomeComponent = (function () {
                function HomeComponent() {
                    var _this = this;
                    setTimeout(function () { return _this.title = "Starter project"; }, 500);
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        directives: [codeblock_1.Codeblock, languages_1.Markup, languages_1.Bash, languages_1.Typescript, ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "home",
                        template: "\n<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Getting Started</h1>\n        <p>Angular2 building blocks based on Semantic UI</p>\n        <ul class=\"\">\n            <li class=\"item\">Angular 2 <a href=\"https://angular.io/\" target=\"_blank\">angular.io</a></li>\n            <li class=\"item\">Semantic UI <a href=\"http://semantic-ui.com/\" target=\"_blank\">semantic-ui.com</a></li>\n            <li class=\"item\"><b>GitHub repository</b> <a href=\"https://github.com/vladotesanovic/ngSemantic\"> \n            https://github.com/vladotesanovic/ngSemantic</a> ( If you like it, give it a star <i class=\"icon star\"></i> )</li>\n          </ul>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h2 class=\"header\">Installation</h2>\n<sm-segment class=\"raised\">\nIn terminal: \n<codeblock bash>\n$ npm install ng-semantic --save\n</codeblock>\n</sm-segment>\n    <p></p>\n    <sm-segment class=\"raised\">\n    <p>In your index.html ( entry file )</p>\n    <codeblock markup>\n&lt;script src=&quot;node_modules/ng-semantic/bundles/ng-semantic.js&quot;&gt;&lt;/script&gt;\n</codeblock>\n    <p></p>\n    </sm-segment>\n    <br/>\n    <sm-segment class=\"raised\">\n    <p>Semantic css and js ( with jQuery are required )</p>\n        <codeblock markup>\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; \nsrc=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css&quot;&gt;&lt;/link&gt;\n\n<!-- JS -->\n&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js&quot;&gt;&lt;/script&gt;\n</codeblock>\n</sm-segment>\n\n    <p></p>\n    <h2 class=\"header\">Use</h2>\n    <sm-segment class=\"raised\">\n       <codeblock typescript>\nimport {Component} from '@angular/core';\nimport { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from \"ng-semantic\";\n\n@Component({\n    selector: 'demo-cmp',\n    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],\n    template: '&lt;sm-segment class=\"raised\">Hello&lt;/sm-segment>'\n})\nexport class DemoComponent {}\n    </codeblock>\n</sm-segment>\n    <h2>{{title}}</h2>\n        <p><i class=\"icon external\"></i> \n        <a href=\"https://github.com/vladotesanovic/angular2-express-starter\" target=\"_blank\">Express app with included ng-semantic</a></p>\n</div>\n\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3RUE7Z0JBRUk7b0JBRkosaUJBS0M7b0JBRk8sVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixFQUE5QixDQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQXZFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLHFCQUFTLEVBQUUsa0JBQU0sRUFBRSxnQkFBSSxFQUFFLHNCQUFVLEVBQUUsaUNBQW1CLEVBQUUsaUNBQW1CLENBQUM7d0JBQzNGLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsdTZFQThEYjtxQkFDQSxDQUFDOztpQ0FBQTtnQkFNRixvQkFBQztZQUFELENBQUMsQUFMRCxJQUtDO1lBTEQseUNBS0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwLCBUeXBlc2NyaXB0LCBCYXNoIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW0NvZGVibG9jaywgTWFya3VwLCBCYXNoLCBUeXBlc2NyaXB0LCBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+R2V0dGluZyBTdGFydGVkPC9oMT5cbiAgICAgICAgPHA+QW5ndWxhcjIgYnVpbGRpbmcgYmxvY2tzIGJhc2VkIG9uIFNlbWFudGljIFVJPC9wPlxuICAgICAgICA8dWwgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj5Bbmd1bGFyIDIgPGEgaHJlZj1cImh0dHBzOi8vYW5ndWxhci5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5hbmd1bGFyLmlvPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+U2VtYW50aWMgVUkgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+c2VtYW50aWMtdWkuY29tPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PGI+R2l0SHViIHJlcG9zaXRvcnk8L2I+IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpY1wiPiBcbiAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljPC9hPiAoIElmIHlvdSBsaWtlIGl0LCBnaXZlIGl0IGEgc3RhciA8aSBjbGFzcz1cImljb24gc3RhclwiPjwvaT4gKTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+SW5zdGFsbGF0aW9uPC9oMj5cbjxzbS1zZWdtZW50IGNsYXNzPVwicmFpc2VkXCI+XG5JbiB0ZXJtaW5hbDogXG48Y29kZWJsb2NrIGJhc2g+XG4kIG5wbSBpbnN0YWxsIG5nLXNlbWFudGljIC0tc2F2ZVxuPC9jb2RlYmxvY2s+XG48L3NtLXNlZ21lbnQ+XG4gICAgPHA+PC9wPlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwicmFpc2VkXCI+XG4gICAgPHA+SW4geW91ciBpbmRleC5odG1sICggZW50cnkgZmlsZSApPC9wPlxuICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NjcmlwdCBzcmM9JnF1b3Q7bm9kZV9tb2R1bGVzL25nLXNlbWFudGljL2J1bmRsZXMvbmctc2VtYW50aWMuanMmcXVvdDsmZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7XG48L2NvZGVibG9jaz5cbiAgICA8cD48L3A+XG4gICAgPC9zbS1zZWdtZW50PlxuICAgIDxici8+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj5cbiAgICA8cD5TZW1hbnRpYyBjc3MgYW5kIGpzICggd2l0aCBqUXVlcnkgYXJlIHJlcXVpcmVkICk8L3A+XG4gICAgICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O2xpbmsgcmVsPSZxdW90O3N0eWxlc2hlZXQmcXVvdDsgdHlwZT0mcXVvdDt0ZXh0L2NzcyZxdW90OyBcbnNyYz0mcXVvdDtodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjEuOC9zZW1hbnRpYy5taW4uY3NzJnF1b3Q7Jmd0OyZsdDsvbGluayZndDtcblxuPCEtLSBKUyAtLT5cbiZsdDtzY3JpcHQgc3JjPSZxdW90O2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8yLjEuNC9qcXVlcnkubWluLmpzJnF1b3Q7Jmd0OyZsdDsvc2NyaXB0Jmd0O1xuJmx0O3NjcmlwdCBzcmM9JnF1b3Q7aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4xLjgvc2VtYW50aWMubWluLmpzJnF1b3Q7Jmd0OyZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlYmxvY2s+XG48L3NtLXNlZ21lbnQ+XG5cbiAgICA8cD48L3A+XG4gICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+VXNlPC9oMj5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPlxuICAgICAgIDxjb2RlYmxvY2sgdHlwZXNjcmlwdD5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZW1vLWNtcCcsXG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiAnJmx0O3NtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj5IZWxsbyZsdDsvc20tc2VnbWVudD4nXG59KVxuZXhwb3J0IGNsYXNzIERlbW9Db21wb25lbnQge31cbiAgICA8L2NvZGVibG9jaz5cbjwvc20tc2VnbWVudD5cbiAgICA8aDI+e3t0aXRsZX19PC9oMj5cbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9hbmd1bGFyMi1leHByZXNzLXN0YXJ0ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5FeHByZXNzIGFwcCB3aXRoIGluY2x1ZGVkIG5nLXNlbWFudGljPC9hPjwvcD5cbjwvZGl2PlxuXG5gXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50aXRsZSA9IFwiU3RhcnRlciBwcm9qZWN0XCIsIDUwMCk7XG4gICAgfVxufVxuIl19