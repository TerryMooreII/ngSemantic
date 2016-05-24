System.register(["@angular/core", "@angular/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar", "./elements/dimmer", "./elements/progress", "./elements/flag", "./elements/accordion"], function(exports_1, context_1) {
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
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1, dimmer_1, progress_1, flag_1, accordion_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (segment_1_1) {
                segment_1 = segment_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (popup_1_1) {
                popup_1 = popup_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            },
            function (dimmer_1_1) {
                dimmer_1 = dimmer_1_1;
            },
            function (progress_1_1) {
                progress_1 = progress_1_1;
            },
            function (flag_1_1) {
                flag_1 = flag_1_1;
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    var _resize = function () {
                        jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
                    };
                    _resize();
                    window.onresize = function (event) {
                        _resize();
                    };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: "app",
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.Routes([
                        { component: home_1.HomeComponent, path: "/" },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: accordion_1.AccordionComponent, path: "/elements/accordion" },
                        { component: list_1.ListComponent, path: "/elements/list" },
                        { component: form_1.FormComponent, path: "/elements/form" },
                        { component: card_1.CardComponent, path: "/elements/card" },
                        { component: segment_1.SegmentComponent, path: "/elements/segment" },
                        { component: menu_1.MenuComponent, path: "/elements/menu" },
                        { component: message_1.MessageComponent, path: "/elements/message" },
                        { component: dimmer_1.DimmerComponent, path: "/elements/dimmer" },
                        { component: progress_1.ProgressComponent, path: "/elements/progress" },
                        { component: flag_1.FlagComponent, path: "/elements/flag" },
                        { component: modal_1.ModalComponent, path: "/elements/modal" },
                        { component: popup_1.PopupComponent, path: "/elements/popup" },
                        { component: sidebar_1.SidebarComponent, path: "/elements/sidebar" },
                        { component: tab_1.TabComponent, path: "/elements/tab" },
                        { component: button_1.ButtonComponent, path: "/elements/button" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThDQTtnQkFBQTtnQkFXQSxDQUFDO2dCQVZBLHNDQUFlLEdBQWY7b0JBRUMsSUFBTSxPQUFPLEdBQUc7d0JBQ2YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzVFLENBQUMsQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSzt3QkFDL0IsT0FBTyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDO2dCQUNILENBQUM7Z0JBbkNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDO29CQUNELGVBQU0sQ0FBQzt3QkFDUCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7d0JBQ3ZDLEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSw4QkFBa0IsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7d0JBQzlELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7d0JBQ3hELEVBQUUsU0FBUyxFQUFFLDRCQUFpQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTt3QkFDNUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt3QkFDdEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSxrQkFBWSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7d0JBQ2xELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3FCQUN4RCxDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsdUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9sb2FkZXJcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9saXN0XCI7XG5pbXBvcnQgeyBTZWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2VnbWVudFwiO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lbnVcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy90YWJcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2NhcmRcIjtcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mb3JtXCI7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2lkZWJhclwiO1xuaW1wb3J0IHsgRGltbWVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvZGltbWVyXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3Byb2dyZXNzXCI7XG5pbXBvcnQgeyBGbGFnQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvZmxhZ1wiO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYWNjb3JkaW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIFx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgc2VsZWN0b3I6IFwiYXBwXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiLi9hcHAvY29tcG9uZW50cy9hcHAuaHRtbFwiXG59KVxuQFJvdXRlcyhbXG5cdHsgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoOiBcIi9cIiB9LFxuXHR7IGNvbXBvbmVudDogTG9hZGVyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9sb2FkZXJcIiB9LFxuXHR7IGNvbXBvbmVudDogQWNjb3JkaW9uQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9hY2NvcmRpb25cIiB9LFxuXHR7IGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbGlzdFwiIH0sXG5cdHsgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mb3JtXCIgfSxcblx0eyBjb21wb25lbnQ6IENhcmRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2NhcmRcIiB9LFxuXHR7IGNvbXBvbmVudDogU2VnbWVudENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvc2VnbWVudFwiIH0sXG5cdHsgY29tcG9uZW50OiBNZW51Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZW51XCIgfSxcblx0eyBjb21wb25lbnQ6IE1lc3NhZ2VDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lc3NhZ2VcIiB9LFxuXHR7IGNvbXBvbmVudDogRGltbWVyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9kaW1tZXJcIiB9LFxuXHR7IGNvbXBvbmVudDogUHJvZ3Jlc3NDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3Byb2dyZXNzXCIgfSxcblx0eyBjb21wb25lbnQ6IEZsYWdDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2ZsYWdcIiB9LFxuXHR7IGNvbXBvbmVudDogTW9kYWxDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21vZGFsXCIgfSxcblx0eyBjb21wb25lbnQ6IFBvcHVwQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wb3B1cFwiIH0sXG5cdHsgY29tcG9uZW50OiBTaWRlYmFyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zaWRlYmFyXCIgfSxcblx0eyBjb21wb25lbnQ6IFRhYkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvdGFiXCIgfSxcblx0eyBjb21wb25lbnQ6IEJ1dHRvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYnV0dG9uXCIgfSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0bmdBZnRlclZpZXdJbml0KCkge1xuXG5cdFx0Y29uc3QgX3Jlc2l6ZSA9ICgpOiBhbnkgPT4ge1xuXHRcdFx0alF1ZXJ5KFwiI3BhZ2UgLmZ1bGwuaGVpZ2h0XCIpLmNzcyhcImhlaWdodFwiLCBqUXVlcnkod2luZG93KS5oZWlnaHQoKSArIFwicHhcIik7XG5cdFx0fTtcblx0XHRfcmVzaXplKCk7XG5cdFx0d2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oZXZlbnQpOiBhbnkge1xuXHRcdFx0X3Jlc2l6ZSgpO1xuXHRcdH07XG5cdH1cbn1cbiJdfQ==