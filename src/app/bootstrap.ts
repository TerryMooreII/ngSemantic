/// <reference path="../../typings/main.d.ts"/>

import { provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent } from "./components/app";
import {ROUTER_PROVIDERS} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {bootstrap} from "@angular/platform-browser-dynamic";

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
