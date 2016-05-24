System.register(["@angular/core", "ng-semantic", "../../services/message", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, message_1, codeblock_1, languages_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(ms) {
                    var _this = this;
                    this.ms = ms;
                    this.messages = [];
                    this.LENGTH = 5000;
                    ms._rx.subscribe(function (data) {
                        if (typeof data === "string") {
                            data = {
                                text: data
                            };
                        }
                        _this.messages.push(data);
                        if (_this.LENGTH > 0) {
                            setTimeout(function () {
                                _this.messages.shift();
                            }, _this.LENGTH);
                        }
                    });
                }
                MessageComponent.prototype.submitMessage = function (event, message) {
                    this.ms.emitMessage(message);
                };
                MessageComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        providers: [message_1.MessageService],
                        selector: "message",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Message</h1>\n\t<p>Semantic UI Message element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"#message of messages\" class=\"ui message {{message.type}}\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n\n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n\tIcon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n\tInfo message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n\tWarning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n\tPositive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }&lt;/sm-message>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQU1FLDBCQUFtQixFQUFrQjtvQkFOdkMsaUJBK0JDO29CQXpCb0IsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7b0JBSnJDLGFBQVEsR0FBa0IsRUFBRSxDQUFDO29CQUVyQixXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUc1QixFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7d0JBRXpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLElBQUksR0FBRztnQ0FDTCxJQUFJLEVBQUUsSUFBSTs2QkFDWCxDQUFDO3dCQUNHLENBQUM7d0JBR0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBR3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsVUFBVSxDQUFDO2dDQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3hCLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxLQUFZLEVBQUUsT0FBZTtvQkFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBckVIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO3dCQUMzQixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDY2Q0FpQ1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBDb2RlYmxvY2ssIE1hcmt1cF0sXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXSxcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cblx0PGgxPk1lc3NhZ2U8L2gxPlxuXHQ8cD5TZW1hbnRpYyBVSSBNZXNzYWdlIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZXNzYWdlPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHA+T25jZSBjcmVhdGVkLCBtZXNzYWdlIHdpbGwgZXhwaXJlIGZvciAxMCBzZWNvbmRzLjwvcD5cbiAgICA8c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCJcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57e21lc3NhZ2UudGV4dH19PC9zbS1tZXNzYWdlPlxuXG4gICAgPHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxuXHRJY29uIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwiYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5cblx0SW5mbyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cblx0V2FybmluZyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxuXHRQb3NpdGl2ZSBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2UgeyB7bWVzc2FnZS50eXBlfSB9XCJcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57IHttZXNzYWdlLnRleHR9IH0mbHQ7L3NtLW1lc3NhZ2U+XG48L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXG4gIG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgTEVOR1RIOiBudW1iZXIgPSA1MDAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtczogTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBtcy5fcnguc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG5cdGRhdGEgPSB7XG5cdCAgdGV4dDogZGF0YVxuXHR9O1xuICAgICAgfVxuXG4gICAgICAvLyBkaXNwbGF5IG1lc3NhZ2VcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcblxuICAgICAgLy8gcmVtb3ZlIG1lc3NhZ2VcbiAgICAgIGlmICh0aGlzLkxFTkdUSCA+IDApIHtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdCAgdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xuXHR9LCB0aGlzLkxFTkdUSCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRNZXNzYWdlKGV2ZW50OiBFdmVudCwgbWVzc2FnZTogT2JqZWN0KSB7XG4gICAgdGhpcy5tcy5lbWl0TWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG59XG4iXX0=