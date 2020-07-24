(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],2:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],3:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],4:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataBox = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var DataBox = /*#__PURE__*/function () {
  function DataBox() {
    (0, _classCallCheck2["default"])(this, DataBox);
    (0, _defineProperty2["default"])(this, "dataBox", document.querySelector('.data-box'));
  }

  (0, _createClass2["default"])(DataBox, [{
    key: "createData",
    value: function createData(icon) {
      console.log(icon);
      this.dataBox.innerHTML = "\n      <h1>".concat(icon.name, "</h1>\n      <p>Location: <em>").concat(icon.location, "</em></p>\n      <p>").concat(icon.description, "</p>\n      <button id=\"close\">Close</button>\n    ");
      $(this.dataBox).animate({
        'opacity': '1',
        'transform': 'scale(1, 1)'
      }, 500, 'linear', function () {});
    }
  }, {
    key: "close",
    value: function close() {
      var _this = this;

      $(this.dataBox).animate({
        'opacity': '0',
        'transform': 'scale(0, 0)'
      }, 500, 'linear', function () {
        _this.dataBox.innerHTML = '';
      });
    }
  }]);
  return DataBox;
}();

exports.DataBox = DataBox;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/defineProperty":3,"@babel/runtime/helpers/interopRequireDefault":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconsDiv = iconsDiv;
exports.iconHover = iconHover;
exports.iconHoverEnd = iconHoverEnd;
exports.icons = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var icons = [{
  name: 'Remote Bomb (Sphere)',
  location: 'Ja Baij Shrine',
  description: 'The Remote Bomb is a Rune ability ' + 'for the Sheikah Slate found in Breath ' + 'of the Wild. It is obtained in the Ja Baij ' + 'Shrine while exploring the Great Plateau. ' + 'It can be used to: gather resources, blow up ' + 'enemies, and even open secret areas. The sphere bomb ' + 'will roll down any slope and its trajectory is ' + 'influenced by wind.',
  category: 'Rune',
  slug: 'remote-bomb-sphere'
}, {
  name: 'Remote Bomb (Cube) ',
  location: 'Ja Baij Shrine',
  description: 'The Remote Bomb is a Rune ability ' + 'for the Sheikah Slate found in Breath ' + 'of the Wild. It is obtained in the Ja Baij ' + 'Shrine while exploring the Great Plateau. ' + 'It can be used to: gather resources, blow up ' + 'enemies, and even open secret areas. Unlike the sphere bomb, ' + 'the square variant will not roll although, like the sphere bomb, ' + 'it can be influenced by wind.',
  category: 'Rune',
  slug: 'remote-bomb-cube'
}, {
  name: 'Stasis',
  location: 'Owa Daime Shrine',
  description: 'The Stasis Rune is ability obtained ' + 'in the Owa Daime Shrine at the Great Plateau. ' + 'Stasis allows link to freeze objects in time for a period of time. ' + 'Frozen Objects can be stricken with a weapon which will create kinetic ' + 'energy that is stored in the object. Upon the stasis timer running out ' + 'or Link releasing the object in stasis, the stored kinetic energy is applied to and object and released.' + 'Upon upgrading the at the [Hateno Lab] Link can freeze enemies for a short period of time.',
  category: 'Rune',
  slug: 'stasis'
}, {
  name: 'Magnesis',
  location: '',
  description: '',
  category: 'Rune',
  slug: 'magnesis'
}, {
  name: 'Cryonis',
  location: '',
  description: '',
  category: 'Rune',
  slug: 'cryonis'
}, {
  name: 'Camera',
  location: 'Hateno Lab ',
  description: 'The Camera Rune is obtained in the Hateno Lab after completing Purah\'s quest. The camera allows link to take pictures. When taking pictures of items or enemy\'s they can be stored in the Hyrule Compendium which gives more information and tells you of common locations. They can also be targeted with with the Sheikah Sensor to let Link know when he is nearby a target. After receiving the Camera Rune the album is also unlocked which comes preset with images that can lead to Link\'s lost Memories.',
  category: 'rune',
  slug: 'camera'
}, {
  name: 'Hylian Shield',
  location: 'Hyrule Castle',
  description: 'Iconic shield present in most Legend of Zelda games. In breath of the wild the Hylian shield can be found in the depths of the Hyrule Castle\'s dungeon floor. The shield is obtained after defeating the Stalnox located in the castle. Unlike most games in the franchise, the shield is not a main item and can in fact be destroyed or lost. The shield can be bought after completing the Terry Town storyline.',
  category: 'item',
  slug: 'hylian-shield'
}, {
  name: 'Master Sword',
  location: 'Korok Forest',
  description: "The Master Sword is the legendary weapon wielded by Link with the ability to vanquish evil. In breath of the wild the master sword will have a blue glow when near the calamity (including infested enemies, when in divine beasts, and all guardians). When the blading is glowing, its strength is boosted to 60 damage. <br />Although the sword has durability, unlike other weapons it doesn't get destroyed. When the durability is depleted the sword has a cool down period before its usable again. <br />Additionally through the Trail of the sword DLC you are able to improve the Master Sword damage and durability. The Trial of the sword consist of 3 trials with increasing difficulty. Each trial are a series of challenge you most face, each trial also upgrading the Master sword.",
  category: 'item',
  slug: 'master-sword'
}, {
  name: 'Spirit Orb',
  location: 'Shrines',
  description: 'Key item that are obtained by completing shrine trails. Upon completing the shrine, the monk located there will award link the orb. Spirit Orbs are used to upgrading health or stamina.  In total there are 120 spirit orbs in the game, allowing for 30 upgrades (Can only fully complete heart containers or stamina vessels).',
  category: 'KeyItem',
  slug: 'spirit-orb'
}, {
  name: 'Korok Seeds',
  location: '900 Hidden Locations',
  description: '',
  category: 'KeyItem',
  slug: 'korok-seeds'
}, {
  name: 'Milpha\'s Grace',
  location: 'Divine Beast Vah Ruta',
  description: '',
  category: 'KeyItem',
  slug: 'mipha-grace'
}, {
  name: 'Revali\'s Gale',
  location: 'Divine Beast Vah Medoh',
  description: '',
  category: 'KeyItem',
  slug: 'revali-gale'
}, {
  name: 'Daruk\'s Protection',
  location: 'Divine Beast Vah Rudania',
  description: '',
  category: 'KeyItem',
  slug: 'daruk-protection'
}, {
  name: 'Urbosa\'s Fury',
  location: 'Divine Beast Vah Naboris',
  description: '',
  category: 'KeyItem',
  slug: 'urbosa-fury'
}, {
  name: 'Master Torch',
  location: '',
  description: 'The legendary weapon wield by the chosen hero, at least that\'s what Yolero seems to believe.  Than again Yolero also seems to believe that the Master Sword is an off brand knock off. ',
  category: 'Item',
  slug: 'master-torch'
}];
exports.icons = icons;

function iconsDiv() {
  var _iterator = _createForOfIteratorHelper(icons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var icon = _step.value;
      var iconContainer = document.querySelector(".icon--".concat(icon.slug));
      iconContainer.innerHTML += "\n      <p class=\"icon--name\"><strong>".concat(icon.name, "</strong></p>\n    ");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function iconHover(parent) {
  $(".".concat(parent, " .icon--name")).animate({
    'opacity': '1'
  }, 300, 'linear');
}

function iconHoverEnd(parent) {
  $(".".concat(parent, " .icon--name")).animate({
    'opacity': '0'
  }, 300, 'linear');
}

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _icons = require("./icons");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Nav = /*#__PURE__*/function () {
  function Nav() {
    (0, _classCallCheck2["default"])(this, Nav);
    (0, _defineProperty2["default"])(this, "$nav", document.getElementById('nav-list'));
  }

  (0, _createClass2["default"])(Nav, [{
    key: "createNav",
    value: function createNav() {
      var _iterator = _createForOfIteratorHelper(_icons.icons),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var icon = _step.value;
          var slug = icon.slug;
          var name = icon.name;
          this.$nav.innerHTML += "\n        <li>\n          <a href=\"/#/".concat(slug, "\">").concat(name, "</a>\n        </li>\n      ");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return Nav;
}();

exports.Nav = Nav;

},{"./icons":6,"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/defineProperty":3,"@babel/runtime/helpers/interopRequireDefault":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _icons = require("./icons");

var _databox = require("./databox");

// import Navigo from "navigo";
var root = 'http://localhost:3000/';
var useHash = true; // Defaults to: false

var hash = '#'; // Defaults to: '#'

var router = new Navigo(root, useHash, hash);

function routes() {
  router.on(function () {
    alert('hello router!');
  });
  router.on('/:slug', function (params) {
    // let slug = params.slug
    var icon = _icons.icons.find(function (value) {
      return value.slug === params.slug;
    });

    var $icon = $('.icon--' + icon.slug);
    var iconPosTop = $icon.css('top').replace('px', '') * -1 + 'px';
    var iconPosLeft = $icon.css('left').replace('px', '') * -.75 + 'px';
    var $mapContainer = $('.map-container');
    $mapContainer.animate({
      top: iconPosTop,
      left: iconPosLeft
    }, 1000, function () {});
    console.log('.icon--' + icon.slug);
    console.log("Icon: ".concat($icon.css('top'), " ").concat($icon.css('left')));
    console.log("Icon: ".concat(iconPosTop, " ").concat(iconPosLeft));
    console.log("Map:  ".concat($mapContainer.css('top'), " ").concat($mapContainer.css('left')));
    var db = new _databox.DataBox();
    db.createData(icon);
    var closeButton = document.querySelector('#close');
    $(closeButton).on('click', function () {
      db.close();
    });
  }); // router.notFound(()=> {
  //   alert('404 not found')
  // })

  router.resolve();
  $;
}

},{"./databox":5,"./icons":6}],9:[function(require,module,exports){
"use strict";

var _icons = require("./modules/icons");

var _routes = require("./modules/routes");

var _navigation = require("./modules/navigation");

$(window).ready(function (e) {
  (0, _routes.routes)();
  var nav = new _navigation.Nav();
  nav.createNav();
  var $map = $('.map-container');
  var x1 = '0';
  var x2 = '-2058';
  var y1 = '0';
  var y2 = '-2239';
  $map.draggable({
    // containment: [x1, y1, x2, y2]
    drag: function drag(e, ui) {
      if (ui.position.left < x1 && ui.position.left > x2 && ui.position.left !== x2 && (ui.position.left !== x1 || ui.position.left !== x2)) {
        console.log('can move x');
        return true;
      } else if (ui.position.top < y1 && ui.position.top > y2 && ui.position.top !== y2 && (ui.position.top !== y1 || ui.position.top !== y2)) {
        console.log('can move y');
        return true;
      } else {
        // console.log('can\'t move y')
        return false;
      }
    }
  });
  (0, _icons.iconsDiv)();
  var $icon = $('.icon');
  $icon.on('mouseenter', function (e) {
    (0, _icons.iconHover)(e.currentTarget.className.replace('icon ', ''));
  });
  $icon.on('mouseleave', function (e) {
    (0, _icons.iconHoverEnd)(e.currentTarget.className.replace('icon ', ''));
  });
  $map.on('mousedown', function () {
    console.log($map.position());
  });
});

},{"./modules/icons":6,"./modules/navigation":7,"./modules/routes":8}]},{},[9])

//# sourceMappingURL=script.js.map
