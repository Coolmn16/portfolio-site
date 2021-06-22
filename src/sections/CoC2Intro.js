"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var divider_1 = require("@lekoarts/gatsby-theme-cara/src/elements/divider");
var animations_1 = require("@lekoarts/gatsby-theme-cara/src/styles/animations");
var svg_1 = require("@lekoarts/gatsby-theme-cara/src/components/svg");
var content_1 = require("@lekoarts/gatsby-theme-cara/src/elements/content");
var inner_1 = require("@lekoarts/gatsby-theme-cara/src/elements/inner");
// @ts-ignore
var CoC2Intro_1 = require("./Text/CoC2Intro");
var CoC2Intro = function (_a) {
    var offset = _a.offset, _b = _a.factor, factor = _b === void 0 ? 1 : _b;
    return (React.createElement("div", null,
        React.createElement(divider_1.default, { bg: "divider", clipPath: "polygon(0 16%, 100% 4%, 100% 82%, 0 94%)", speed: 0.2, offset: offset, factor: factor }),
        React.createElement(divider_1.default, { speed: 0.1, offset: offset, factor: factor },
            React.createElement(animations_1.UpDown, null,
                React.createElement(svg_1.default, { icon: "box", hiddenMobile: true, width: 6, color: "icon_blue", left: "50%", top: "75%" }),
                React.createElement(svg_1.default, { icon: "upDown", hiddenMobile: true, width: 8, color: "icon_darkest", left: "70%", top: "20%" }),
                React.createElement(svg_1.default, { icon: "triangle", width: 8, stroke: true, color: "icon_darkest", left: "25%", top: "5%" }),
                React.createElement(svg_1.default, { icon: "upDown", hiddenMobile: true, width: 24, color: "icon_orange", left: "80%", top: "80%" })),
            React.createElement(animations_1.UpDownWide, null,
                React.createElement(svg_1.default, { icon: "arrowUp", hiddenMobile: true, width: 16, color: "icon_purple", left: "5%", top: "80%" }),
                React.createElement(svg_1.default, { icon: "triangle", width: 12, stroke: true, color: "icon_brightest", left: "95%", top: "50%" }),
                React.createElement(svg_1.default, { icon: "circle", hiddenMobile: true, width: 6, color: "icon_brightest", left: "85%", top: "15%" }),
                React.createElement(svg_1.default, { icon: "upDown", hiddenMobile: true, width: 8, color: "icon_darkest", left: "45%", top: "10%" })),
            React.createElement(svg_1.default, { icon: "circle", hiddenMobile: true, width: 6, color: "icon_brightest", left: "4%", top: "20%" }),
            React.createElement(svg_1.default, { icon: "circle", width: 12, color: "icon_darkest", left: "70%", top: "60%" }),
            React.createElement(svg_1.default, { icon: "box", width: 6, color: "icon_orange", left: "10%", top: "10%" }),
            React.createElement(svg_1.default, { icon: "box", width: 12, color: "icon_darkest", left: "20%", top: "30%" }),
            React.createElement(svg_1.default, { icon: "hexa", width: 8, stroke: true, color: "icon_darkest", left: "80%", top: "70%" })),
        React.createElement(content_1.default, { speed: 0.4, offset: offset, factor: factor },
            React.createElement(inner_1.default, null,
                React.createElement(CoC2Intro_1.default, null)))));
};
exports.default = CoC2Intro;
//# sourceMappingURL=CoC2Intro.js.map