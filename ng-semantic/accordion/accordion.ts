import {Component, ChangeDetectionStrategy, Input, Directive, ElementRef, OnInit } from "angular2/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI accordination
 *
 * @link http://semantic-ui.com/modules/accordion.html
 */
@Directive({
    inputs: [
        "data: sm-dir-accordion"
    ],
    selector: "[sm-dir-accordion]"
})
class SMAccordionDirective implements OnInit {

    public data: string;

    constructor(public element: ElementRef) {}

    ngOnInit() {

        let options = {};

        if(typeof this.data === "object") {
            options = this.data;
        }

        jQuery(this.element.nativeElement).accordion(options);
    }
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [SMAccordionDirective],
    selector: "sm-accordion",
    template: `
<div class="ui accordion {{class}}" [sm-dir-accordion]="options">
    <ng-content></ng-content>
</div>
`,
    styles: [`sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }`]
})
export class SemanticAccordion {
    @Input("class") class: string;
    @Input("options") options: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordion-item",
    template: `
<div class="active title">
    <i class="dropdown icon"></i>
    {{title}}
</div>
<div class="content">
    <p><ng-content></ng-content></p>
</div>
`

})
export class SemanticAccordionItem {
    @Input("title") title: string;
}
