var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var MESSAGES;
(function (MESSAGES) {
    MESSAGES["INVALID_INDEX"] = "Invalid index";
    MESSAGES["EMPTY_LIST"] = "The list is empty";
})(MESSAGES || (MESSAGES = {}));
var listNode = /** @class */ (function () {
    function listNode(el) {
        this.el = el;
    }
    return listNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.append = function () {
            var el = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                el[_i] = arguments[_i];
            }
            el.forEach(function (el) {
                var node = new listNode(el);
                if (_this.head === null) {
                    _this.head = node;
                }
                else {
                    var previous = _this.head;
                    while (previous.next) {
                        previous = previous.next;
                    }
                    previous.next = node;
                }
                _this.length++;
            });
            return _this;
        };
        this.prepend = function () {
            var el = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                el[_i] = arguments[_i];
            }
            el.reverse().forEach(function (el) {
                var node = new listNode(el);
                if (_this.head === null) {
                    _this.head = node;
                }
                else {
                    node.next = _this.head;
                    _this.head = node;
                }
                _this.length++;
            });
            return _this;
        };
        this.insert = function (index) {
            var el = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                el[_i - 1] = arguments[_i];
            }
            el.reverse().forEach(function (el) {
                if (index < 0 || index > _this.length) {
                    console.log(MESSAGES.INVALID_INDEX);
                    return;
                }
                else if (index === 0) {
                    _this.prepend(el);
                }
                else {
                    var node = new listNode(el);
                    var previous = _this.head;
                    for (var i = 0; i < index - 1; i++) {
                        previous = previous.next;
                    }
                    node.next = previous.next;
                    previous.next = node;
                    _this.length++;
                }
            });
            return _this;
        };
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.getFirst = function () {
        var first = this.head;
        return first === null || first === void 0 ? void 0 : first.el;
    };
    LinkedList.prototype.getLast = function () {
        var last = this.head;
        if (last) {
            while (last.next) {
                last = last.next;
            }
        }
        return last === null || last === void 0 ? void 0 : last.el;
    };
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    LinkedList.prototype.removeAt = function (index) {
        var removedNode;
        if (index < 0 || index > this.length) {
            console.log(MESSAGES.INVALID_INDEX);
        }
        else if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            this.length--;
        }
        else {
            var previous = this.head;
            for (var i = 0; i < index - 1; i++) {
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
            this.length--;
        }
        return removedNode.el;
    };
    ;
    LinkedList.prototype.at = function (index, el) {
        if (index < 0 || index > this.length) {
            console.log(MESSAGES.INVALID_INDEX);
            return;
        }
        else {
            var current = this.head;
            var count = 0;
            while (index > count) {
                count++;
                current = current.next;
            }
            if (el != undefined) {
                current.el = el;
                return el;
            }
            else {
                return current.el;
            }
        }
    };
    ;
    LinkedList.prototype.toArray = function () {
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(current.el);
            current = current.next;
        }
        return arr;
    };
    ;
    LinkedList.prototype.toString = function () {
        var result = "";
        var current = this.head;
        while (current) {
            result += "".concat(current.el).concat(current.next ? " -> " : "");
            current = current.next;
        }
        return result;
    };
    ;
    LinkedList.prototype[Symbol.iterator] = function () {
        var current;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    current = this.head;
                    _a.label = 1;
                case 1:
                    if (!current) return [3 /*break*/, 3];
                    return [4 /*yield*/, current.el];
                case 2:
                    _a.sent();
                    current = current.next;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    LinkedList.prototype.print = function () {
        if (this.head === null) {
            console.log(MESSAGES.EMPTY_LIST);
        }
        else {
            var current = this.head;
            var listValues = "";
            while (current) {
                listValues += "".concat(current.el, " ");
                current = current.next;
            }
            console.log(listValues);
        }
    };
    ;
    return LinkedList;
}());
console.log("List1:");
var list1 = new LinkedList();
list1.append(1, 2, 3).append(4);
list1.print();
console.log("List2:");
var list2 = new LinkedList();
list2.append(4, 5, 6).prepend(1, 2, 3);
list2.print();
console.log("List3:");
var list3 = new LinkedList();
list3.append(1, 4, 5).insert(1, 2, 3);
list3.print();
console.log("List4:");
var list4 = new LinkedList();
list4.append(1, 2, 3, 4, 5, 6);
console.log(list4.at(2)); // 3
list4.at(2, "gosho");
console.log(list4.at(2)); // gosho
list4.print();
console.log("List5:");
var list5 = new LinkedList();
var removed = list5.append(1, 2, 3, 4, 5).removeAt(1);
console.log(removed);
list5.print();
console.log("List6:");
var list6 = new LinkedList().append(6, 7, 8).prepend(1, 2, 3, 4, 5);
try {
    for (var list6_1 = __values(list6), list6_1_1 = list6_1.next(); !list6_1_1.done; list6_1_1 = list6_1.next()) {
        var value = list6_1_1.value;
        console.log(value);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (list6_1_1 && !list6_1_1.done && (_a = list6_1.return)) _a.call(list6_1);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log("List7:");
var list7 = new LinkedList();
list7.append(1, 2, 3, 4, 5, 6);
var arr = list7.toArray();
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr instanceof Array); // true
list7.print();
console.log("List8:");
var list8 = new LinkedList();
list8.append(1, 2, 3, 4, 5, 6);
console.log(list8.toString()); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
