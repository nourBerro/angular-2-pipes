"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SelectPipe = (function () {
    function SelectPipe() {
    }
    SelectPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value != undefined)
            return value.map(function (x) {
                var o = {};
                args.forEach(function (element) {
                    o[element] = x[element];
                });
                return o;
            });
    };
    SelectPipe = __decorate([
        core_1.Pipe({
            name: "select"
        }), 
        __metadata('design:paramtypes', [])
    ], SelectPipe);
    return SelectPipe;
}());
exports.SelectPipe = SelectPipe;
//# sourceMappingURL=select.pipe.js.map