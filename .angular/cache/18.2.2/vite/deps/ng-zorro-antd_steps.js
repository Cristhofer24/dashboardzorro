import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-JIWVDMU7.js";
import {
  NzDestroyService
} from "./chunk-7HASYDA3.js";
import "./chunk-4YKANONB.js";
import {
  Directionality
} from "./chunk-3IDOYYFE.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-JQGVPN5J.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-3BSSA7EC.js";
import "./chunk-GSS2JWKH.js";
import {
  isNotNil,
  numberAttributeWithZeroFallback,
  toBoolean
} from "./chunk-GZH7XLUW.js";
import "./chunk-6VMPVWJN.js";
import "./chunk-E56Z4PR7.js";
import "./chunk-GIU6Z5JA.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-66UIAXOZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  booleanAttribute,
  filter,
  fromEvent,
  merge,
  numberAttribute,
  setClassMetadata,
  startWith,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-G6XKNNX3.js";
import {
  __objRest
} from "./chunk-5K356HEJ.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-progress.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formatter_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", formatter_r2(ctx_r0.nzPercent), " ");
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.formatter)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.nzPercent));
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template, 1, 1, "span", 4)(2, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 4, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional((ctx_r0.status === "exception" || ctx_r0.status === "success") && !ctx_r0.nzFormat ? 1 : 2);
  }
}
function NzProgressComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Template, 3, 1, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzShowInfo ? 0 : -1);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    ɵɵproperty("ngStyle", step_r3);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵrepeaterCreate(1, NzProgressComponent_Conditional_3_Conditional_1_For_2_Template, 1, 1, "div", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.steps);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r0.nzSuccessPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r0.strokeWidth, "px");
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵelement(2, "div", 11);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template, 1, 6, "div", 12);
    ɵɵelementEnd()();
    ɵɵtemplate(4, NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r0.nzPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r0.isGradient ? ctx_r0.nzStrokeColor : null)("background-image", ctx_r0.isGradient ? ctx_r0.lineGradient : null)("height", ctx_r0.strokeWidth, "px");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSuccessPercent || ctx_r0.nzSuccessPercent === 0 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzProgressComponent_Conditional_3_Conditional_1_Template, 4, 1, "div", 6)(2, NzProgressComponent_Conditional_3_Conditional_2_Template, 5, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isSteps ? 1 : 2);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    ɵɵattribute("offset", i_r5.offset)("stop-color", i_r5.color);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs")(1, "linearGradient", 17);
    ɵɵrepeaterCreate(2, NzProgressComponent_Conditional_4_Conditional_2_For_3_Template, 1, 2, ":svg:stop", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", "gradient-" + ctx_r0.gradientId);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.circleGradient);
  }
}
function NzProgressComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 16);
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", p_r6.strokePathStyle);
    ɵɵattribute("d", ctx_r0.pathString)("stroke-linecap", ctx_r0.nzStrokeLinecap)("stroke", p_r6.stroke)("stroke-width", ctx_r0.nzPercent ? ctx_r0.strokeWidth : 0);
  }
}
function NzProgressComponent_Conditional_4_ng_template_6_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵtemplate(2, NzProgressComponent_Conditional_4_Conditional_2_Template, 4, 1, ":svg:defs");
    ɵɵelement(3, "path", 15);
    ɵɵrepeaterCreate(4, NzProgressComponent_Conditional_4_For_5_Template, 1, 5, ":svg:path", 16, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵtemplate(6, NzProgressComponent_Conditional_4_ng_template_6_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r0.nzWidth, "px")("height", ctx_r0.nzWidth, "px")("font-size", ctx_r0.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r0.isGradient);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.isGradient ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r0.strokeWidth)("d", ctx_r0.pathString);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.progressCirclePath);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
var sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const value = gradients[key];
    const formatKey = stripPercentToNumber(key);
    if (!isNaN(formatKey)) {
      tempArr.push({
        key: formatKey,
        value
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr;
};
var handleCircleGradient = (strokeColor) => sortGradient(strokeColor).map(({
  key,
  value
}) => ({
  offset: `${key}%`,
  color: value
}));
var handleLinearGradient = (strokeColor) => {
  const _a = strokeColor, {
    from = "#1890ff",
    to = "#1890ff",
    direction = "to right"
  } = _a, rest = __objRest(_a, [
    "from",
    "to",
    "direction"
  ]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest).map(({
      key,
      value
    }) => `${value} ${key}%`).join(", ");
    return `linear-gradient(${direction}, ${sortedGradients})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
};
var gradientIdSeed = 0;
var NZ_CONFIG_MODULE_NAME = "progress";
var statusIconNameMap = /* @__PURE__ */ new Map([["success", "check"], ["exception", "close"]]);
var statusColorMap = /* @__PURE__ */ new Map([["normal", "#108ee9"], ["exception", "#ff5500"], ["success", "#87d068"]]);
var defaultFormatter = (p) => `${p}%`;
var _NzProgressComponent = class _NzProgressComponent {
  get formatter() {
    return this.nzFormat || defaultFormatter;
  }
  get status() {
    return this.nzStatus || this.inferredStatus;
  }
  get strokeWidth() {
    return this.nzStrokeWidth || (this.nzType === "line" && this.nzSize !== "small" ? 8 : 6);
  }
  get isCircleStyle() {
    return this.nzType === "circle" || this.nzType === "dashboard";
  }
  constructor(cdr, nzConfigService, directionality) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowInfo = true;
    this.nzWidth = 132;
    this.nzStrokeColor = void 0;
    this.nzSize = "default";
    this.nzPercent = 0;
    this.nzType = "line";
    this.nzGapPosition = "top";
    this.nzStrokeLinecap = "round";
    this.nzSteps = 0;
    this.steps = [];
    this.lineGradient = null;
    this.isGradient = false;
    this.isSteps = false;
    this.gradientId = gradientIdSeed++;
    this.progressCirclePath = [];
    this.trailPathStyle = null;
    this.dir = "ltr";
    this.cachedStatus = "normal";
    this.inferredStatus = "normal";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzSteps,
      nzGapPosition,
      nzStrokeLinecap,
      nzStrokeColor,
      nzGapDegree,
      nzType,
      nzStatus,
      nzPercent,
      nzSuccessPercent,
      nzStrokeWidth
    } = changes;
    if (nzStatus) {
      this.cachedStatus = this.nzStatus || this.cachedStatus;
    }
    if (nzPercent || nzSuccessPercent) {
      const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
      if (fillAll) {
        if (isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === void 0) {
          this.inferredStatus = "success";
        }
      } else {
        this.inferredStatus = this.cachedStatus;
      }
    }
    if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
      this.updateIcon();
    }
    if (nzStrokeColor) {
      this.setStrokeColor();
    }
    if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
      this.getCirclePaths();
    }
    if (nzPercent || nzSteps || nzStrokeWidth) {
      this.isSteps = this.nzSteps > 0;
      if (this.isSteps) {
        this.getSteps();
      }
    }
  }
  ngOnInit() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateIcon();
      this.setStrokeColor();
      this.getCirclePaths();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateIcon() {
    const ret = statusIconNameMap.get(this.status);
    this.icon = ret ? ret + (this.isCircleStyle ? "-o" : "-circle-fill") : "";
  }
  /**
   * Calculate step render configs.
   */
  getSteps() {
    const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
    const stepWidth = this.nzSize === "small" ? 2 : 14;
    const steps = [];
    for (let i = 0; i < this.nzSteps; i++) {
      let color;
      if (i <= current - 1) {
        color = this.nzStrokeColor;
      }
      const stepStyle = {
        backgroundColor: `${color}`,
        width: `${stepWidth}px`,
        height: `${this.strokeWidth}px`
      };
      steps.push(stepStyle);
    }
    this.steps = steps;
  }
  /**
   * Calculate paths when the type is circle or dashboard.
   */
  getCirclePaths() {
    if (!this.isCircleStyle) {
      return;
    }
    const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
    const radius = 50 - this.strokeWidth / 2;
    const gapPosition = this.nzGapPosition || (this.nzType === "circle" ? "top" : "bottom");
    const len = Math.PI * 2 * radius;
    const gapDegree = this.nzGapDegree || (this.nzType === "circle" ? 0 : 75);
    let beginPositionX = 0;
    let beginPositionY = -radius;
    let endPositionX = 0;
    let endPositionY = radius * -2;
    switch (gapPosition) {
      case "left":
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = radius * 2;
        endPositionY = 0;
        break;
      case "right":
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = radius * -2;
        endPositionY = 0;
        break;
      case "bottom":
        beginPositionY = radius;
        endPositionY = radius * 2;
        break;
      default:
    }
    this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
    this.trailPathStyle = {
      strokeDasharray: `${len - gapDegree}px ${len}px`,
      strokeDashoffset: `-${gapDegree / 2}px`,
      transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
    };
    this.progressCirclePath = values.map((value, index) => {
      const isSuccessPercent = values.length === 2 && index === 0;
      return {
        stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
        strokePathStyle: {
          stroke: !this.isGradient ? isSuccessPercent ? statusColorMap.get("success") : this.nzStrokeColor : null,
          transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
          strokeDasharray: `${(value || 0) / 100 * (len - gapDegree)}px ${len}px`,
          strokeDashoffset: `-${gapDegree / 2}px`
        }
      };
    }).reverse();
  }
  setStrokeColor() {
    const color = this.nzStrokeColor;
    const isGradient = this.isGradient = !!color && typeof color !== "string";
    if (isGradient && !this.isCircleStyle) {
      this.lineGradient = handleLinearGradient(color);
    } else if (isGradient && this.isCircleStyle) {
      this.circleGradient = handleCircleGradient(this.nzStrokeColor);
    } else {
      this.lineGradient = null;
      this.circleGradient = [];
    }
  }
};
_NzProgressComponent.ɵfac = function NzProgressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzProgressComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
};
_NzProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzProgressComponent,
  selectors: [["nz-progress"]],
  inputs: {
    nzShowInfo: "nzShowInfo",
    nzWidth: "nzWidth",
    nzStrokeColor: "nzStrokeColor",
    nzSize: "nzSize",
    nzFormat: "nzFormat",
    nzSuccessPercent: [2, "nzSuccessPercent", "nzSuccessPercent", numberAttributeWithZeroFallback],
    nzPercent: [2, "nzPercent", "nzPercent", numberAttribute],
    nzStrokeWidth: [2, "nzStrokeWidth", "nzStrokeWidth", numberAttributeWithZeroFallback],
    nzGapDegree: [2, "nzGapDegree", "nzGapDegree", numberAttributeWithZeroFallback],
    nzStatus: "nzStatus",
    nzType: "nzType",
    nzGapPosition: "nzGapPosition",
    nzStrokeLinecap: "nzStrokeLinecap",
    nzSteps: [2, "nzSteps", "nzSteps", numberAttribute]
  },
  exportAs: ["nzProgress"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 17,
  consts: [["progressInfoTemplate", ""], [3, "ngClass"], [1, "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient"], [1, "ant-progress-text"], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-progress-steps-outer"], [1, "ant-progress-steps-item", 3, "ngStyle"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], [1, "ant-progress-success-bg", 3, "width", "border-radius", "height"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"]],
  template: function NzProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementStart(2, "div", 1);
      ɵɵtemplate(3, NzProgressComponent_Conditional_3_Template, 3, 1, "div")(4, NzProgressComponent_Conditional_4_Template, 7, 13, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassProp("ant-progress-line", ctx.nzType === "line")("ant-progress-small", ctx.nzSize === "small")("ant-progress-default", ctx.nzSize === "default")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
      ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
      ɵɵadvance();
      ɵɵconditional(ctx.nzType === "line" ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.isCircleStyle ? 4 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgClass, NgTemplateOutlet, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var NzProgressComponent = _NzProgressComponent;
__decorate([WithConfig()], NzProgressComponent.prototype, "nzShowInfo", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeColor", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzGapDegree", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzGapPosition", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-progress",
      exportAs: "nzProgress",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NzIconModule, NzOutletModule, NgClass, NgTemplateOutlet, NgStyle],
      template: `
    <ng-template #progressInfoTemplate>
      @if (nzShowInfo) {
        <span class="ant-progress-text">
          @if ((status === 'exception' || status === 'success') && !nzFormat) {
            <span nz-icon [nzType]="icon"></span>
          } @else {
            <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
              {{ formatter(nzPercent) }}
            </ng-container>
          }
        </span>
      }
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType === 'line'"
      [class.ant-progress-small]="nzSize === 'small'"
      [class.ant-progress-default]="nzSize === 'default'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      @if (nzType === 'line') {
        <div>
          <!-- normal line style -->
          @if (isSteps) {
            <div class="ant-progress-steps-outer">
              @for (step of steps; track step) {
                <div class="ant-progress-steps-item" [ngStyle]="step"></div>
              }
              <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
            </div>
          } @else {
            <div class="ant-progress-outer">
              <div class="ant-progress-inner">
                <div
                  class="ant-progress-bg"
                  [style.width.%]="nzPercent"
                  [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                  [style.background]="!isGradient ? nzStrokeColor : null"
                  [style.background-image]="isGradient ? lineGradient : null"
                  [style.height.px]="strokeWidth"
                ></div>
                @if (nzSuccessPercent || nzSuccessPercent === 0) {
                  <div
                    class="ant-progress-success-bg"
                    [style.width.%]="nzSuccessPercent"
                    [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                    [style.height.px]="strokeWidth"
                  ></div>
                }
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
          }
        </div>
      }
      <!-- line progress -->

      <!-- circle / dashboard progress -->

      @if (isCircleStyle) {
        <div
          [style.width.px]="this.nzWidth"
          [style.height.px]="this.nzWidth"
          [style.fontSize.px]="this.nzWidth * 0.15 + 6"
          class="ant-progress-inner"
          [class.ant-progress-circle-gradient]="isGradient"
        >
          <svg class="ant-progress-circle " viewBox="0 0 100 100">
            @if (isGradient) {
              <defs>
                <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
                  @for (i of circleGradient; track i) {
                    <stop [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
                  }
                </linearGradient>
              </defs>
            }

            <path
              class="ant-progress-circle-trail"
              stroke="#f3f3f3"
              fill-opacity="0"
              [attr.stroke-width]="strokeWidth"
              [attr.d]="pathString"
              [ngStyle]="trailPathStyle"
            ></path>
            @for (p of progressCirclePath; track p) {
              <path
                class="ant-progress-circle-path"
                fill-opacity="0"
                [attr.d]="pathString"
                [attr.stroke-linecap]="nzStrokeLinecap"
                [attr.stroke]="p.stroke"
                [attr.stroke-width]="nzPercent ? strokeWidth : 0"
                [ngStyle]="p.strokePathStyle"
              ></path>
            }
          </svg>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
        </div>
      }
    </div>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzShowInfo: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzStrokeColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzSuccessPercent: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzPercent: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStrokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzGapDegree: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzGapPosition: [{
      type: Input
    }],
    nzStrokeLinecap: [{
      type: Input
    }],
    nzSteps: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var _NzProgressModule = class _NzProgressModule {
};
_NzProgressModule.ɵfac = function NzProgressModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzProgressModule)();
};
_NzProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _NzProgressModule,
  imports: [NzProgressComponent],
  exports: [NzProgressComponent]
});
_NzProgressModule.ɵinj = ɵɵdefineInjector({
  imports: [NzProgressComponent]
});
var NzProgressModule = _NzProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressModule, [{
    type: NgModule,
    args: [{
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-steps.mjs
var _c02 = ["processDotTemplate"];
var _c1 = ["itemContainer"];
var _c2 = (a0, a1, a2) => ({
  $implicit: a0,
  status: a1,
  index: a2
});
function NzStepComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
}
function NzStepComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "nz-progress", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzPercent", ctx_r0.nzPercentage)("nzWidth", ctx_r0.nzSize === "small" ? 32 : 40)("nzFormat", ctx_r0.nullProcessFormat)("nzStrokeWidth", 4);
  }
}
function NzStepComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "span", 13);
    ɵɵelementEnd();
  }
}
function NzStepComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "span", 14);
    ɵɵelementEnd();
  }
}
function NzStepComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.index + 1, " ");
  }
}
function NzStepComponent_Conditional_4_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzType", !ctx_r0.oldAPIIcon && icon_r2)("ngClass", ctx_r0.oldAPIIcon && icon_r2);
  }
}
function NzStepComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzStepComponent_Conditional_4_Conditional_4_ng_container_1_Template, 2, 2, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzIcon);
  }
}
function NzStepComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzStepComponent_Conditional_4_Conditional_0_Template, 2, 4, "div", 11)(1, NzStepComponent_Conditional_4_Conditional_1_Template, 2, 0, "span", 5)(2, NzStepComponent_Conditional_4_Conditional_2_Template, 2, 0, "span", 5)(3, NzStepComponent_Conditional_4_Conditional_3_Template, 2, 1, "span", 5)(4, NzStepComponent_Conditional_4_Conditional_4_Template, 2, 1, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.showProgress ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzStatus === "finish" && !ctx_r0.nzIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzStatus === "error" ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional((ctx_r0.nzStatus === "process" || ctx_r0.nzStatus === "wait") && !ctx_r0.nzIcon ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzIcon ? 4 : -1);
  }
}
function NzStepComponent_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
}
function NzStepComponent_Conditional_5_ng_template_3_Template(rf, ctx) {
}
function NzStepComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzStepComponent_Conditional_5_ng_template_1_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, NzStepComponent_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processDotTemplate_r3 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.customProcessTemplate || processDotTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c2, processDotTemplate_r3, ctx_r0.nzStatus, ctx_r0.index));
  }
}
function NzStepComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzStepComponent_Conditional_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzSubtitle);
  }
}
function NzStepComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzStepComponent_Conditional_9_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzSubtitle);
  }
}
function NzStepComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDescription);
  }
}
var _c3 = ["*"];
var _NzStepComponent = class _NzStepComponent {
  get nzStatus() {
    return this._status;
  }
  set nzStatus(status) {
    this._status = status;
    this.isCustomStatus = true;
  }
  get nzIcon() {
    return this._icon;
  }
  set nzIcon(value) {
    if (!(value instanceof TemplateRef)) {
      this.oldAPIIcon = typeof value === "string" && value.indexOf("anticon") > -1;
    } else {
    }
    this._icon = value;
  }
  get showProgress() {
    return this.nzPercentage !== null && !this.nzIcon && this.nzStatus === "process" && this.nzPercentage >= 0 && this.nzPercentage <= 100;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(current) {
    this._currentIndex = current;
    if (!this.isCustomStatus) {
      this._status = current > this.index ? "finish" : current === this.index ? this.outStatus || "" : "wait";
    }
  }
  constructor(cdr, ngZone, destroy$) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.nzDisabled = false;
    this.nzPercentage = null;
    this.nzSize = "default";
    this.isCustomStatus = false;
    this._status = "wait";
    this.oldAPIIcon = true;
    this.direction = "horizontal";
    this.index = 0;
    this.last = false;
    this.outStatus = "process";
    this.showProcessDot = false;
    this.clickable = false;
    this.clickOutsideAngular$ = new Subject();
    this.nullProcessFormat = () => null;
    this._currentIndex = 0;
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.itemContainer.nativeElement, "click").pipe(filter(() => this.clickable && this.currentIndex !== this.index && !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
      this.clickOutsideAngular$.next(this.index);
    }));
  }
  enable() {
    this.nzDisabled = false;
    this.cdr.markForCheck();
  }
  disable() {
    this.nzDisabled = true;
    this.cdr.markForCheck();
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
};
_NzStepComponent.ɵfac = function NzStepComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzStepComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
};
_NzStepComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzStepComponent,
  selectors: [["nz-step"]],
  viewQuery: function NzStepComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemContainer = _t.first);
    }
  },
  hostAttrs: [1, "ant-steps-item"],
  hostVars: 16,
  hostBindings: function NzStepComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzSubtitle: "nzSubtitle",
    nzDescription: "nzDescription",
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzPercentage: "nzPercentage",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzIcon: "nzIcon"
  },
  exportAs: ["nzStep"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 8,
  consts: [["itemContainer", ""], ["processDotTemplate", ""], [1, "ant-steps-item-container", 3, "tabindex"], [1, "ant-steps-item-tail"], [1, "ant-steps-item-icon"], [1, "ant-steps-icon"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], [1, "ant-steps-item-subtitle"], [1, "ant-steps-item-description"], [1, "ant-steps-progress-icon"], ["nzType", "circle", 3, "nzPercent", "nzWidth", "nzFormat", "nzStrokeWidth"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"]],
  template: function NzStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 2, 0);
      ɵɵtemplate(2, NzStepComponent_Conditional_2_Template, 1, 0, "div", 3);
      ɵɵelementStart(3, "div", 4);
      ɵɵtemplate(4, NzStepComponent_Conditional_4_Template, 5, 5)(5, NzStepComponent_Conditional_5_Template, 4, 6, "span", 5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 6)(7, "div", 7);
      ɵɵtemplate(8, NzStepComponent_ng_container_8_Template, 2, 1, "ng-container", 8)(9, NzStepComponent_Conditional_9_Template, 2, 1, "div", 9);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 10);
      ɵɵtemplate(11, NzStepComponent_ng_container_11_Template, 2, 1, "ng-container", 8);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
      ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
      ɵɵadvance(2);
      ɵɵconditional(ctx.last !== true ? 2 : -1);
      ɵɵadvance(2);
      ɵɵconditional(!ctx.showProcessDot ? 4 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.showProcessDot ? 5 : -1);
      ɵɵadvance(3);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
      ɵɵadvance();
      ɵɵconditional(ctx.nzSubtitle ? 9 : -1);
      ɵɵadvance(2);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
    }
  },
  dependencies: [NzProgressModule, NzProgressComponent, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzStepComponent = _NzStepComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-step",
      exportAs: "nzStep",
      preserveWhitespaces: false,
      template: `
    <div
      #itemContainer
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
    >
      @if (last !== true) {
        <div class="ant-steps-item-tail"></div>
      }
      <div class="ant-steps-item-icon">
        @if (!showProcessDot) {
          @if (showProgress) {
            <div class="ant-steps-progress-icon">
              <nz-progress
                [nzPercent]="nzPercentage"
                nzType="circle"
                [nzWidth]="nzSize === 'small' ? 32 : 40"
                [nzFormat]="nullProcessFormat"
                [nzStrokeWidth]="4"
              ></nz-progress>
            </div>
          }
          @if (nzStatus === 'finish' && !nzIcon) {
            <span class="ant-steps-icon"><span nz-icon nzType="check"></span></span>
          }
          @if (nzStatus === 'error') {
            <span class="ant-steps-icon"><span nz-icon nzType="close"></span></span>
          }
          @if ((nzStatus === 'process' || nzStatus === 'wait') && !nzIcon) {
            <span class="ant-steps-icon">
              {{ index + 1 }}
            </span>
          }
          @if (nzIcon) {
            <span class="ant-steps-icon">
              <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                <span nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></span>
              </ng-container>
            </span>
          }
        }
        @if (showProcessDot) {
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            ></ng-template>
          </span>
        }
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          @if (nzSubtitle) {
            <div class="ant-steps-item-subtitle">
              <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
            </div>
          }
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
      host: {
        class: "ant-steps-item",
        "[class.ant-steps-item-wait]": 'nzStatus === "wait"',
        "[class.ant-steps-item-process]": 'nzStatus === "process"',
        "[class.ant-steps-item-finish]": 'nzStatus === "finish"',
        "[class.ant-steps-item-error]": 'nzStatus === "error"',
        "[class.ant-steps-item-active]": "currentIndex === index",
        "[class.ant-steps-item-disabled]": "nzDisabled",
        "[class.ant-steps-item-custom]": "!!nzIcon",
        "[class.ant-steps-next-error]": '(outStatus === "error") && (currentIndex === index + 1)'
      },
      providers: [NzDestroyService],
      imports: [NzProgressModule, NzIconModule, NzOutletModule, NgClass, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    processDotTemplate: [{
      type: ViewChild,
      args: ["processDotTemplate", {
        static: false
      }]
    }],
    itemContainer: [{
      type: ViewChild,
      args: ["itemContainer", {
        static: true
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPercentage: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }]
  });
})();
var _NzStepsComponent = class _NzStepsComponent {
  set nzProgressDot(value) {
    if (value instanceof TemplateRef) {
      this.showProcessDot = true;
      this.customProcessDotTemplate = value;
    } else {
      this.showProcessDot = toBoolean(value);
    }
    this.updateChildrenSteps();
  }
  constructor(ngZone, cdr, directionality, destroy$) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this.nzCurrent = 0;
    this.nzDirection = "horizontal";
    this.nzLabelPlacement = "horizontal";
    this.nzType = "default";
    this.nzSize = "default";
    this.nzStartIndex = 0;
    this.nzStatus = "process";
    this.nzIndexChange = new EventEmitter();
    this.indexChangeSubscription = Subscription.EMPTY;
    this.showProcessDot = false;
    this.showProgress = false;
    this.dir = "ltr";
  }
  ngOnChanges(changes) {
    if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent || changes.nzSize) {
      this.updateChildrenSteps();
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateChildrenSteps();
  }
  ngAfterContentInit() {
    if (this.steps) {
      this.steps.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
        this.updateHostProgressClass();
        this.updateChildrenSteps();
      });
    }
  }
  updateHostProgressClass() {
    if (this.steps && !this.showProcessDot) {
      this.showProgress = !!this.steps.toArray().find((step) => step.nzPercentage !== null);
    }
  }
  updateChildrenSteps() {
    if (this.steps) {
      const length = this.steps.length;
      this.steps.toArray().forEach((step, index) => {
        Promise.resolve().then(() => {
          step.nzSize = this.nzSize;
          step.outStatus = this.nzStatus;
          step.showProcessDot = this.showProcessDot;
          if (this.customProcessDotTemplate) {
            step.customProcessTemplate = this.customProcessDotTemplate;
          }
          step.clickable = this.nzIndexChange.observers.length > 0;
          step.direction = this.nzDirection;
          step.index = index + this.nzStartIndex;
          step.currentIndex = this.nzCurrent;
          step.last = length === index + 1;
          step.markForCheck();
        });
      });
      this.indexChangeSubscription.unsubscribe();
      this.indexChangeSubscription = merge(...this.steps.map((step) => step.clickOutsideAngular$)).pipe(takeUntil(this.destroy$)).subscribe((index) => {
        if (this.nzIndexChange.observers.length) {
          this.ngZone.run(() => this.nzIndexChange.emit(index));
        }
      });
    }
  }
};
_NzStepsComponent.ɵfac = function NzStepsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzStepsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(NzDestroyService));
};
_NzStepsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzStepsComponent,
  selectors: [["nz-steps"]],
  contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzStepComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.steps = _t);
    }
  },
  hostAttrs: [1, "ant-steps"],
  hostVars: 18,
  hostBindings: function NzStepsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-steps-horizontal", ctx.nzDirection === "horizontal")("ant-steps-vertical", ctx.nzDirection === "vertical")("ant-steps-label-horizontal", ctx.nzDirection === "horizontal")("ant-steps-label-vertical", (ctx.showProcessDot || ctx.nzLabelPlacement === "vertical") && ctx.nzDirection === "horizontal")("ant-steps-dot", ctx.showProcessDot)("ant-steps-small", ctx.nzSize === "small")("ant-steps-navigation", ctx.nzType === "navigation")("ant-steps-rtl", ctx.dir === "rtl")("ant-steps-with-progress", ctx.showProgress);
    }
  },
  inputs: {
    nzCurrent: "nzCurrent",
    nzDirection: "nzDirection",
    nzLabelPlacement: "nzLabelPlacement",
    nzType: "nzType",
    nzSize: "nzSize",
    nzStartIndex: "nzStartIndex",
    nzStatus: "nzStatus",
    nzProgressDot: "nzProgressDot"
  },
  outputs: {
    nzIndexChange: "nzIndexChange"
  },
  exportAs: ["nzSteps"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NzStepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzStepsComponent = _NzStepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-steps",
      exportAs: "nzSteps",
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-steps",
        "[class.ant-steps-horizontal]": `nzDirection === 'horizontal'`,
        "[class.ant-steps-vertical]": `nzDirection === 'vertical'`,
        "[class.ant-steps-label-horizontal]": `nzDirection === 'horizontal'`,
        "[class.ant-steps-label-vertical]": `(showProcessDot || nzLabelPlacement === 'vertical') && nzDirection === 'horizontal'`,
        "[class.ant-steps-dot]": "showProcessDot",
        "[class.ant-steps-small]": `nzSize === 'small'`,
        "[class.ant-steps-navigation]": `nzType === 'navigation'`,
        "[class.ant-steps-rtl]": `dir === 'rtl'`,
        "[class.ant-steps-with-progress]": "showProgress"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }, {
    type: NzDestroyService
  }], {
    steps: [{
      type: ContentChildren,
      args: [NzStepComponent]
    }],
    nzCurrent: [{
      type: Input
    }],
    nzDirection: [{
      type: Input
    }],
    nzLabelPlacement: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStartIndex: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzProgressDot: [{
      type: Input
    }],
    nzIndexChange: [{
      type: Output
    }]
  });
})();
var _NzStepsModule = class _NzStepsModule {
};
_NzStepsModule.ɵfac = function NzStepsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzStepsModule)();
};
_NzStepsModule.ɵmod = ɵɵdefineNgModule({
  type: _NzStepsModule,
  imports: [NzStepsComponent, NzStepComponent],
  exports: [NzStepsComponent, NzStepComponent]
});
_NzStepsModule.ɵinj = ɵɵdefineInjector({
  imports: [NzStepComponent]
});
var NzStepsModule = _NzStepsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepsModule, [{
    type: NgModule,
    args: [{
      imports: [NzStepsComponent, NzStepComponent],
      exports: [NzStepsComponent, NzStepComponent]
    }]
  }], null, null);
})();
export {
  NzStepComponent,
  NzStepsComponent,
  NzStepsModule
};
//# sourceMappingURL=ng-zorro-antd_steps.js.map
