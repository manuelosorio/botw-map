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
      this.dataBox.innerHTML = "\n      <h1 class=\"data-box--title\">".concat(icon.name, "</h1>\n      <p class=\"data-box--location\">Location: <em>").concat(icon.location, "</em></p>\n      <p>").concat(icon.description, "</p>\n      <button id=\"close\" class=\"btn\">Close</button>\n    ");
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
exports.findIcon = findIcon;
exports.icons = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var icons = [{
  name: 'Remote Bomb (Sphere)',
  location: 'Ja Baij Shrine - Great Plateau',
  description: 'The Remote Bomb is a Rune ability ' + 'for the Sheikah Slate found in Breath ' + 'of the Wild. It is obtained in the Ja Baij ' + 'Shrine while exploring the Great Plateau. ' + 'It can be used to: gather resources, blow up ' + 'enemies, and even open secret areas. The sphere bomb ' + 'will roll down any slope and its trajectory is ' + 'influenced by wind.',
  category: 'Rune',
  slug: 'remote-bomb-sphere'
}, {
  name: 'Remote Bomb (Cube) ',
  location: 'Ja Baij Shrine - Great Plateau',
  description: 'The Remote Bomb is a Rune ability ' + 'for the Sheikah Slate found in Breath ' + 'of the Wild. It is obtained in the Ja Baij ' + 'Shrine while exploring the Great Plateau. ' + 'It can be used to: gather resources, blow up ' + 'enemies, and even open secret areas. Unlike the sphere bomb, ' + 'the square variant will not roll although, like the sphere bomb, ' + 'it can be influenced by wind.',
  category: 'Rune',
  slug: 'remote-bomb-cube'
}, {
  name: 'Stasis',
  location: 'Owa Daime Shrine - Great Plateau',
  description: 'The Stasis Rune is ability obtained ' + 'in the Owa Daime Shrine at the Great Plateau. ' + 'Stasis allows link to freeze objects in time for a period of time. ' + 'Frozen Objects can be stricken with a weapon which will create kinetic ' + 'energy that is stored in the object. Upon the stasis timer running out ' + 'or Link releasing the object in stasis, the stored kinetic energy is applied to and object and released.' + 'Upon upgrading the at the [Hateno Lab] Link can freeze enemies for a short period of time.',
  category: 'Rune',
  slug: 'stasis'
}, {
  name: 'Magnesis',
  location: 'Oman Au Shrine - Great Plateau',
  description: 'The Magnesis Rune is obtained in the Oman Au Shrine at the Great Plateau. The Magnesis Rune allows Link to harness magnetic energy to lift and carry metallic objects into the air effortlessly, which can then be moved and placed elsewhere. When the Rune is activated, red grid lines cover Link\'s immediate surroundings. Objects in that area that can be picked up will have a red filter, and will turn yellow as the Rune\'s cursor moves over them, signifying that they can be selected. Once lifted, Link can manipulate the object either by moving it in the air, dropping it, or pushing or pulling it. Metallic Treasur',
  category: 'Rune',
  slug: 'magnesis'
}, {
  name: 'Cryonis',
  location: 'Keh Namut Shrine - Great Plateau',
  description: 'The Cryonis Rune is obtained in the Keh Namut Shrine on the Great Plateau. It allows Link to spontaneously create pillars of Ice from the surface of any body of Water, including Waterfalls. Link can create up to three pillars at once; raising a fourth one breaks the first. In addition to creating pillars, Cryonis can also be used to break these pillars as well. After using the Cryonis Rune to create a pillar, a timer gauge will appear which must fully restore before Link can use it again.',
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
  description: 'orok Seeds are given by Koroks when they are found throughout Hyrule. They possess a distinct smell. When Link receives his first Seed, he is asked to return it to the Korok Hestu. Korok Seeds are actually the beads used in Hestu\'s Maracas.' + "<br>" + 'In exchange for Korok Seeds, Hestu will add one slot to Link\'s Weapon, Bow, or Shield stashes. Link can fully upgrade his inventory with only 441 Korok Seeds. If all 900 Seeds are returned to Hestu, he will reward Link with a \"gift of friendship.\"',
  category: 'KeyItem',
  slug: 'korok-seeds'
}, {
  name: 'Milpha\'s Grace',
  location: 'Divine Beast Vah Ruta',
  description: "You receive Mipha's Grace from the Champion Mipha after defeating Waterblight Ganon and clearing the Divine Beast Vah Ruta. Mipha's Grace protects Link from death and recovers his health, activating only when Link loses all of his Hearts, similarly to using a Fairy. The ability will heal the hero back to full health and also grant him five extra temporary Hearts. It takes priority over any Fairies that Link has in his inventory.\n    <br>\nMipha's Grace can only be used once before needing to recharge and cannot be used again for 24 real time minutes. While in Hyrule Castle, Mipha's Grace instead takes eight minutes to recharge.",
  category: 'KeyItem',
  slug: 'mipha-grace'
}, {
  name: 'Revali\'s Gale',
  location: 'Divine Beast Vah Medoh',
  description: "You receive Revali's Gale from the Rito Champion, Revali, after defeating Windblight Ganon and completing the Divine Beast Vah Medoh. Once the ability is used, it launches Link into the sky and creates an updraft that can be re-used until it disappears. Like all Champion abilities in Breath of the Wild, it can be disabled from the Key Items inventory and cannot be used while inside an Ancient Shrine.\n    <br>\n    Revali's Gale can be used three times before needing to recharge and cannot be used again for six real time minutes. While in Hyrule Castle, Revali's Gale instead takes two minutes to recharge. After being upgraded to Revali's Gale +, its normal recharge time is reduced to two minutes and its charge time inside Hyrule Castle is reduced to forty seconds.",
  category: 'KeyItem',
  slug: 'revali-gale'
}, {
  name: 'Daruk\'s Protection',
  location: 'Divine Beast Vah Rudania',
  description: "You receivee Daruk's Protection from the Goron Champion, Daruk, after defeating Fireblight Ganon and completing the Divine Beast Vah Rudania. Daruk's Protection creates a red crystal barrier around Link when used, protecting him from all attacks and damage while up, as well as deflecting certain attacks back such as Guardian beams.\n    <br />\n    Daruk's Protection can be used three times before needing to recharge and cannot be used again for 18 real time minutes. While in Hyrule Castle, Daruk's Protection instead takes six minutes to recharge. After being upgraded to Daruk's Protection +, its normal recharge time is reduced to six minutes and its charge time inside Hyrule Castle is reduced to two minutes.\n    ",
  category: 'KeyItem',
  slug: 'daruk-protection'
}, {
  name: 'Urbosa\'s Fury',
  location: 'Divine Beast Vah Naboris',
  description: "Link receives Urbosa's Fury from the Champion Urbosa's spirit after defeating Thunderblight Ganon and completing the Divine Beast Vah Naboris.[4] Urbosa's Fury allows Link to send off a massive radius of electrical damage to all enemies and Bosses in the vicinity. The area affected by the attack is depicted by a large green hemisphere of light. It is performed by charging a Spin Attack with any Weapon for a certain amount of time and releasing it. With most Weapons, Urbosa's Fury will be ready when the charging sound of the Spin Attack is heard twice\n    <br>\n  Urbosa's Fury can be used three times before needing to recharge and cannot be used again for 12 real time minutes. While in Hyrule Castle, Urbosa's Fury instead takes four minutes to recharge.   \n",
  category: 'KeyItem',
  slug: 'urbosa-fury'
}, {
  name: 'Master Torch',
  location: 'Lanayru Wetlands Stable',
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

function findIcon(slug) {
  return icons.find(function (value) {
    return value.slug === slug;
  });
}

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Meta = /*#__PURE__*/function () {
  function Meta(title, description, slug) {
    (0, _classCallCheck2["default"])(this, Meta);
    (0, _defineProperty2["default"])(this, "title", '');
    (0, _defineProperty2["default"])(this, "description", '');
    (0, _defineProperty2["default"])(this, "slug", '');
    this.title = title;
    this.description = description;
    this.slug = slug;
  }

  (0, _createClass2["default"])(Meta, [{
    key: "browser",
    value: function browser() {
      document.querySelector('title').innerHTML = this.title;
      document.querySelector('meta[name="description"]').setAttribute('content', this.description);
    }
  }, {
    key: "openGraph",
    value: function openGraph() {
      document.querySelector('meta[property="og:site_name"]').setAttribute('content', this.title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', this.description);
      document.querySelector('meta[property="og:url"]').setAttribute('content', this.slug);
    }
  }, {
    key: "twitter",
    value: function twitter() {
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', this.title);
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', this.description);
    }
  }]);
  return Meta;
}();

exports.Meta = Meta;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/defineProperty":3,"@babel/runtime/helpers/interopRequireDefault":4}],8:[function(require,module,exports){
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

},{"./icons":6,"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/defineProperty":3,"@babel/runtime/helpers/interopRequireDefault":4}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _icons = require("./icons");

var _databox = require("./databox");

var _meta = require("./meta");

// import Navigo from "navigo";
var root = 'null';
var useHash = true; // Defaults to: false

var hash = '#'; // Defaults to: '#'

var router = new Navigo(root, useHash, hash);

function routes() {
  var title = "LoZ: Breath of The Wild",
      description = "Interactive Map showing locations of important mostly important items",
      slug = "https://botw.manuelosorio.me/#/";
  router.on(function () {
    $('.map-container').css({
      'top': '-1686px',
      'left': '-800px'
    });
    title = "LoZ: Breath of The Wild";
    description = "Interactive Map showing locations of important mostly important items";
    slug = "https://botw.manuelosorio.me/#/";
    var meta = new _meta.Meta(title, description, slug);
    meta.browser();
    meta.openGraph();
    meta.twitter();
  });
  /*
    remove fbclid script is from:
    https://www.michalspacek.com/using-javascript-to-modify-urls-and-hide-fbclid
   */

  var param = 'fbclid';

  if (location.search.indexOf(param + '=') !== -1) {
    var replace = '';

    try {
      var url = new URL(location);
      url.searchParams["delete"](param);
      replace = url.href;
    } catch (ex) {
      var regExp = new RegExp('[?&]' + param + '=.*$');
      replace = location.search.replace(regExp, '');
      replace = location.pathname + replace + location.hash;
    }

    history.replaceState(null, '', replace);
  } else if (!(window.location.href.indexOf('/#/') > 1)) {
    console.log(false);
    router.navigate('/');
  }

  router.on('/:slug', function (params) {
    // let slug = params.slug
    var icon = (0, _icons.findIcon)(params.slug);
    var $icon = $('.icon--' + icon.slug);
    var iconPosTop = $icon.css('top').replace('px', '') * -1 + 'px';
    var iconPosLeft = $icon.css('left').replace('px', '') * -.75 + 'px';
    var $mapContainer = $('.map-container');
    title += ": ".concat(icon.name);
    description = icon.description.slice(0, 120).concat('...');
    slug += icon.slug;
    var meta = new _meta.Meta(title, description, slug);
    meta.browser();
    meta.openGraph();
    meta.twitter();
    $mapContainer.animate({
      top: iconPosTop,
      left: iconPosLeft
    }, 1000, function () {});
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
  $('.icon').on('click', function (e) {
    var currentIcon = (0, _icons.findIcon)(e.currentTarget.className.replace('icon icon--', ''));
    router.navigate("/".concat(currentIcon.slug));
  });
}

},{"./databox":5,"./icons":6,"./meta":7}],10:[function(require,module,exports){
"use strict";

var _icons = require("./modules/icons");

var _routes = require("./modules/routes");

var _navigation = require("./modules/navigation");

$(window).ready(function () {
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
  $('.menu').on('click', function () {
    $(this).toggleClass('is-active');
  });
});

},{"./modules/icons":6,"./modules/navigation":8,"./modules/routes":9}]},{},[10])

//# sourceMappingURL=script.js.map
