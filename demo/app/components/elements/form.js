System.register(["@angular/core", "@angular/common", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, common_1, ng_semantic_1, codeblock_1, languages_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.formSubmited = false;
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.nameFControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.textControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(10)]));
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                    this.formFeedback = fb.group({
                        nameFControl: this.nameFControl,
                        textControl: this.textControl
                    });
                }
                FormComponent.prototype.checkboxValidator = function (control) {
                    var value = (typeof control.value === "boolean") ? control.value : false;
                    return (value) ? "" : "yes";
                };
                FormComponent.prototype.submit = function () {
                    this.formSubmited = true;
                };
                FormComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "test-form",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Form</h1>\n\t<p>Semantic UI Form collection <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo login</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n\t<sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n\t</div>\n\t<sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    &lt;sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\">&lt;/sm-loader>\n    <div class=\"field\">\n\t    &lt;sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\">&lt;/sm-input>\n    </div>\n    <div class=\"field\">\n\t    &lt;sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\">&lt;/sm-input>\n    </div>\n    <div class=\"field\">\n\t    &lt;sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\">&lt;/sm-checkbox>\n    </div>\n    &lt;sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login&lt;/sm-button>\n&lt;/form>\n</codeblock>\n\n<h4 class=\"ui header\">Demo feedback</h4>\n<form sm-form class=\"ui form\" [ngFormModel]=\"formFeedback\">\n    <div class=\"field\">\n        <sm-input label=\"Name\" [control]=\"nameFControl\" placeholder=\"Enter name...\"></sm-input>\n    </div>\n    <div class=\"field\">\n        <sm-textarea label=\"Name\" rows=\"10\" [control]=\"textControl\"></sm-textarea>\n    </div>\n    <sm-button (click)=\"send()\" class=\"primary\">Send</sm-button>\n</form>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOERBO2dCQVlJLHVCQUFZLEVBQWU7b0JBWDNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFJNUcsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGdCQUFXLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUzRyxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsZ0JBQVcsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRy9HLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ2hDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ0EsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsT0FBZ0I7b0JBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN6RSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDhCQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBdkZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHd4RUFtRGI7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBaUNGLG9CQUFDO1lBQUQsQ0FBQyxBQWhDRCxJQWdDQztZQWhDRCx5Q0FnQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrIH0gZnJvbSBcIm5nMi1wcmlzbS9jb2RlYmxvY2tcIjtcbmltcG9ydCB7IE1hcmt1cCB9IGZyb20gXCJuZzItcHJpc20vbGFuZ3VhZ2VzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBDb2RlYmxvY2ssIE1hcmt1cF0sXG4gICAgc2VsZWN0b3I6IFwidGVzdC1mb3JtXCIsXG4gICAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG5cdDxoMT5Gb3JtPC9oMT5cblx0PHA+U2VtYW50aWMgVUkgRm9ybSBjb2xsZWN0aW9uIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cblx0PGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgRm9ybTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gbG9naW48L2g0PlxuICAgIDxmb3JtIHNtLWZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cblx0PHNtLWxvYWRlciBbY29tcGxldGVdPVwiIWZvcm1TdWJtaXRlZFwiIGNsYXNzPVwiaW52ZXJ0ZWRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvc20tbG9hZGVyPlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgPHNtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj48L3NtLWNoZWNrYm94PlxuXHQ8L2Rpdj5cblx0PHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cInByaW1hcnlcIj5Mb2dpbjwvc20tYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O2Zvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiPlxuICAgICZsdDtzbS1sb2FkZXIgW2NvbXBsZXRlXT1cIiFmb3JtU3VibWl0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj4mbHQ7L3NtLWxvYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgICZsdDtzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPiZsdDsvc20taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdCAgICAmbHQ7c20taW5wdXQgbGFiZWw9XCJFLW1haWxcIiBbY29udHJvbF09XCJlbWFpbENvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGUtbWFpbC4uLlwiPiZsdDsvc20taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdCAgICAmbHQ7c20tY2hlY2tib3ggbGFiZWw9XCJJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIFtjb250cm9sXT1cImFncmVlQ29udHJvbFwiPiZsdDsvc20tY2hlY2tib3g+XG4gICAgPC9kaXY+XG4gICAgJmx0O3NtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cInByaW1hcnlcIj5Mb2dpbiZsdDsvc20tYnV0dG9uPlxuJmx0Oy9mb3JtPlxuPC9jb2RlYmxvY2s+XG5cbjxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gZmVlZGJhY2s8L2g0PlxuPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybUZlZWRiYWNrXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lRkNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWUuLi5cIj48L3NtLWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICA8c20tdGV4dGFyZWEgbGFiZWw9XCJOYW1lXCIgcm93cz1cIjEwXCIgW2NvbnRyb2xdPVwidGV4dENvbnRyb2xcIj48L3NtLXRleHRhcmVhPlxuICAgIDwvZGl2PlxuICAgIDxzbS1idXR0b24gKGNsaWNrKT1cInNlbmQoKVwiIGNsYXNzPVwicHJpbWFyeVwiPlNlbmQ8L3NtLWJ1dHRvbj5cbjwvZm9ybT5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IHtcbiAgICBhZ3JlZUNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICBlbWFpbENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuICAgIGZvcm1GZWVkYmFjazogQ29udHJvbEdyb3VwO1xuICAgIGZvcm1TdWJtaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcblxuICAgIG5hbWVGQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG4gICAgdGV4dENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0pKTtcblxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuXHR0aGlzLmZvcm0gPSBmYi5ncm91cCh7XG5cdCAgICBlbWFpbENvbnRyb2w6IHRoaXMuZW1haWxDb250cm9sLFxuXHQgICAgbmFtZUNvbnRyb2w6IHRoaXMubmFtZUNvbnRyb2wsXG5cdH0pO1xuXG5cdHRoaXMuZm9ybUZlZWRiYWNrID0gZmIuZ3JvdXAoe1xuXHQgICAgbmFtZUZDb250cm9sOiB0aGlzLm5hbWVGQ29udHJvbCxcblx0ICAgIHRleHRDb250cm9sOiB0aGlzLnRleHRDb250cm9sXG5cdH0pO1xuICAgIH1cblxuICAgIGNoZWNrYm94VmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpIHtcblx0ICAgIGxldCB2YWx1ZSA9ICh0eXBlb2YgY29udHJvbC52YWx1ZSA9PT0gXCJib29sZWFuXCIpID8gY29udHJvbC52YWx1ZSA6IGZhbHNlO1xuXHQgICAgcmV0dXJuICh2YWx1ZSkgPyBcIlwiIDogXCJ5ZXNcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG5cdCAgICB0aGlzLmZvcm1TdWJtaXRlZCA9IHRydWU7XG4gICAgfVxufVxuIl19