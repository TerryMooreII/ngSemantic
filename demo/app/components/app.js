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
                        { component: home_1.HomeComponent, path: "/", useAsDefault: true },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThDQTtnQkFBQTtnQkFXQSxDQUFDO2dCQVZBLHNDQUFlLEdBQWY7b0JBRUMsSUFBTSxPQUFPLEdBQUc7d0JBQ2YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzVFLENBQUMsQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSzt3QkFDL0IsT0FBTyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDO2dCQUNILENBQUM7Z0JBbkNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDO29CQUNELGVBQU0sQ0FBQzt3QkFDUCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDM0QsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7d0JBQ3hELEVBQUUsU0FBUyxFQUFFLDhCQUFrQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTt3QkFDOUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSx3QkFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTt3QkFDeEQsRUFBRSxTQUFTLEVBQUUsNEJBQWlCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO3dCQUM1RCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7d0JBQ3RELEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLGtCQUFZLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTt3QkFDbEQsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7cUJBQ3hELENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCx1Q0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xpc3RcIjtcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3RhYlwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvY2FyZFwiO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2Zvcm1cIjtcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgeyBEaW1tZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9kaW1tZXJcIjtcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcHJvZ3Jlc3NcIjtcbmltcG9ydCB7IEZsYWdDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mbGFnXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9hY2NvcmRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgICAgICBzZWxlY3RvcjogXCJhcHBcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcbn0pXG5AUm91dGVzKFtcblx0eyBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGg6IFwiL1wiLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcblx0eyBjb21wb25lbnQ6IExvYWRlckNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbG9hZGVyXCIgfSxcblx0eyBjb21wb25lbnQ6IEFjY29yZGlvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYWNjb3JkaW9uXCIgfSxcblx0eyBjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xpc3RcIiB9LFxuXHR7IGNvbXBvbmVudDogRm9ybUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvZm9ybVwiIH0sXG5cdHsgY29tcG9uZW50OiBDYXJkQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9jYXJkXCIgfSxcblx0eyBjb21wb25lbnQ6IFNlZ21lbnRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NlZ21lbnRcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVudUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVudVwiIH0sXG5cdHsgY29tcG9uZW50OiBNZXNzYWdlQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZXNzYWdlXCIgfSxcblx0eyBjb21wb25lbnQ6IERpbW1lckNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvZGltbWVyXCIgfSxcblx0eyBjb21wb25lbnQ6IFByb2dyZXNzQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wcm9ncmVzc1wiIH0sXG5cdHsgY29tcG9uZW50OiBGbGFnQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mbGFnXCIgfSxcblx0eyBjb21wb25lbnQ6IE1vZGFsQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tb2RhbFwiIH0sXG5cdHsgY29tcG9uZW50OiBQb3B1cENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvcG9wdXBcIiB9LFxuXHR7IGNvbXBvbmVudDogU2lkZWJhckNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvc2lkZWJhclwiIH0sXG5cdHsgY29tcG9uZW50OiBUYWJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3RhYlwiIH0sXG5cdHsgY29tcG9uZW50OiBCdXR0b25Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2J1dHRvblwiIH0sXG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuXHRcdGNvbnN0IF9yZXNpemUgPSAoKTogYW55ID0+IHtcblx0XHRcdGpRdWVyeShcIiNwYWdlIC5mdWxsLmhlaWdodFwiKS5jc3MoXCJoZWlnaHRcIiwgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgKyBcInB4XCIpO1xuXHRcdH07XG5cdFx0X3Jlc2l6ZSgpO1xuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KTogYW55IHtcblx0XHRcdF9yZXNpemUoKTtcblx0XHR9O1xuXHR9XG59XG4iXX0=