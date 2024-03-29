/*    *****************************************************************************
    
      CREDITS: THE SOFTWARE HAS BEEN EXTENDED FROM OPEN SOURCE CODE OF WORDLE, CREATED BY JOSH WARDLE. 
      THIS GAME IS NOT ASSOCIATED WITH THE NEW YORK TIMES IN ANY FORM.

      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.

      ***************************************************************************** */
(this.indle = this.indle || {}),
  (this.indle.bundle = (function (e) {
    "use strict"; 
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e, a) {
      if (!(e instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, a) {
      for (var s = 0; s < a.length; s++) {
        var t = a[s];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(e, t.key, t);
      }
    }
    function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e;
    }
    function n(e, a, s) {
      return (
        a in e
          ? Object.defineProperty(e, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = s),
        e
      );
    }
    function r(e, a) {
      if ("function" != typeof a && null !== a)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(a && a.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        a && l(e, a);
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, a) {
      return (l =
        Object.setPrototypeOf ||
        function (e, a) {
          return (e.__proto__ = a), e;
        })(e, a);
    }
    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function u(e, a, s) {
      return (u = d()
        ? Reflect.construct
        : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t))();
            return s && l(o, s.prototype), o;
          }).apply(null, arguments);
    }
    function c(e) {
      var a = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (
          null === e ||
          ((s = e), -1 === Function.toString.call(s).indexOf("[native code]"))
        )
          return e;
        var s;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== a) {
          if (a.has(e)) return a.get(e);
          a.set(e, t);
        }
        function t() {
          return u(e, arguments, i(this).constructor);
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          l(t, e)
        );
      })(e);
    }
    function p(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function m(e, a) {
      return !a || ("object" != typeof a && "function" != typeof a) ? p(e) : a;
    }
    function h(e) {
      var a = d();
      return function () {
        var s,
          t = i(e);
        if (a) {
          var o = i(this).constructor;
          s = Reflect.construct(t, arguments, o);
        } else s = t.apply(this, arguments);
        return m(this, s);
      };
    }
    function y(e, a) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, a) {
          var s =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == s) return;
          var t,
            o,
            n = [],
            r = !0,
            i = !1;
          try {
            for (
              s = s.call(e);
              !(r = (t = s.next()).done) &&
              (n.push(t.value), !a || n.length !== a);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, a) ||
        b(e, a) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return f(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function b(e, a) {
      if (e) {
        if ("string" == typeof e) return f(e, a);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === s && e.constructor && (s = e.constructor.name),
          "Map" === s || "Set" === s
            ? Array.from(e)
            : "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            ? f(e, a)
            : void 0
        );
      }
    }
    function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t;
    }
    var v = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "_letter", ""),
          n(p(e), "_state", "empty"),
          n(p(e), "_animation", "idle"),
          n(p(e), "_last", !1),
          n(p(e), "_reveal", !1),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "last",
              set: function (e) {
                this._last = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                  (this.$tile = this.shadowRoot.querySelector(".tile")),
                  this.$tile.addEventListener("animationend", function (a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                      "FlipIn" === a.animationName &&
                        ((e.$tile.dataset.state = e._state),
                        (e._animation = "flip-out")),
                      "FlipOut" === a.animationName &&
                        ((e._animation = "idle"),
                        e._last &&
                          e.dispatchEvent(
                            new CustomEvent("game-last-tile-revealed-in-row", {
                              bubbles: !0,
                              composed: !0,
                            })
                          )),
                      e._render();
                  }),
                  this._render();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letter":
                    if (s === a) break;
                    var t = "null" === s ? "" : s;
                    (this._letter = t),
                      (this._state = t ? "tbd" : "empty"),
                      (this._animation = t ? "pop" : "idle");
                    break;
                  case "evaluation":
                    if (!s) break;
                    this._state = s;
                    break;
                  case "reveal":
                    (this._animation = "flip-in"), (this._reveal = !0);
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                this.$tile &&
                  ((this.$tile.textContent = this._letter),
                  ["empty", "tbd"].includes(this._state) &&
                    (this.$tile.dataset.state = this._state),
                  (["empty", "tbd"].includes(this._state) || this._reveal) &&
                    this.$tile.dataset.animation != this._animation &&
                    (this.$tile.dataset.animation = this._animation));
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letter", "evaluation", "reveal"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
//Moved array for random letter words - begin. 	
    var La = [
        "cigar",
        "rebut",
        "sissy",
        "humph",
        "awake",
        "blush",
        "focal",
        "evade",
        "naval",
        "serve",
        "heath",
        "dwarf",
        "model",
        "karma",
        "stink",
        "grade",
        "quiet",
        "bench",
        "abate",
        "feign",
        "major",
        "death",
        "fresh",
        "crust",
        "stool",
        "colon",
        "abase",
        "marry",
        "react",
        "batty",
        "pride",
        "floss",
        "helix",
        "croak",
        "staff",
        "paper",
        "unfed",
        "whelp",
        "trawl",
        "outdo",
        "adobe",
        "crazy",
        "sower",
        "repay",
        "digit",
        "crate",
        "cluck",
        "spike",
        "mimic",
        "pound",
        "maxim",
        "linen",
        "unmet",
        "flesh",
        "booby",
        "forth",
        "first",
        "stand",
        "belly",
        "ivory",
        "seedy",
        "print",
        "yearn",
        "drain",
        "bribe",
        "stout",
        "panel",
        "crass",
        "flume",
        "offal",
        "agree",
        "error",
        "swirl",
        "argue",
        "bleed",
        "delta",
        "flick",
        "totem",
        "wooer",
        "front",
        "shrub",
        "parry",
        "biome",
        "lapel",
        "start",
        "greet",
        "goner",
        "golem",
        "lusty",
        "loopy",
        "round",
        "audit",
        "lying",
        "gamma",
        "labor",
        "islet",
        "civic",
        "forge",
        "corny",
        "moult",
        "basic",
        "salad",
        "agate",
        "spicy",
        "spray",
        "essay",
        "fjord",
        "spend",
        "kebab",
        "guild",
        "aback",
        "motor",
        "alone",
        "hatch",
        "hyper",
        "thumb",
        "dowry",
        "ought",
        "belch",
        "dutch",
        "pilot",
        "tweed",
        "comet",
        "jaunt",
        "enema",
        "steed",
        "abyss",
        "growl",
        "fling",
        "dozen",
        "boozy",
        "erode",
        "world",
        "gouge",
        "click",
        "briar",
        "great",
        "altar",
        "pulpy",
        "blurt",
        "coast",
        "duchy",
        "groin",
        "fixer",
        "group",
        "rogue",
        "badly",
        "smart",
        "pithy",
        "gaudy",
        "chill",
        "heron",
        "vodka",
        "finer",
        "surer",
        "radio",
        "rouge",
        "perch",
        "retch",
        "wrote",
        "clock",
        "tilde",
        "store",
        "prove",
        "bring",
        "solve",
        "cheat",
        "grime",
        "exult",
        "usher",
        "epoch",
        "triad",
        "break",
        "rhino",
        "viral",
        "conic",
        "masse",
        "sonic",
        "vital",
        "trace",
        "using",
        "peach",
        "champ",
        "baton",
        "brake",
        "pluck",
        "craze",
        "gripe",
        "weary",
        "picky",
        "acute",
        "ferry",
        "aside",
        "tapir",
        "troll",
        "unify",
        "rebus",
        "boost",
        "truss",
        "siege",
        "tiger",
        "banal",
        "slump",
        "crank",
        "gorge",
        "query",
        "drink",
        "favor",
        "abbey",
        "tangy",
        "panic",
        "solar",
        "shire",
        "proxy",
        "point",
        "robot",
        "prick",
        "wince",
        "crimp",
        "knoll",
        "sugar",
        "whack",
        "mount",
        "perky",
        "could",
        "wrung",
        "light",
        "those",
        "moist",
        "shard",
        "pleat",
        "aloft",
        "skill",
        "elder",
        "frame",
        "terry", 
        "canoe", 
        "maple", 
        "inuit", 
        "plaid", 
        "igloo", 
        "hoser", 
        "syrup", 
        "bacon", 
        "sorry", 
        "whale", 
        "north", 
        "aboot", 
        "banff", 
        "falls", 
        "totem", 
        "queen", 
        "loons", 
        "metis", 
        "toque", 
        "canal", 
        "crude", 
        "goose", 
        "lakes", 
        "crown", 
        "spuds", 
        "roots", 
        "snowy", 
        "yukon", 
        "polar", 
        "bison", 
        "delhi", /* 1 (MAR 12) - launch of indle */
		"ganga",  /* 2 (13 Mar) */
		"minar",  /* 3 (14 Mar) */
		"karma",  /* 4 (15 Mar) */
		"rural",  /* 5 (16 Mar) */
		"vishu",  /* 6 (17 Mar) */
		"saree",  /* 7 (18 Mar) */
		"tikka",  /* 8 (19 Mar) */
		"papad",  /* 9 (20 Mar) */
		"korma",  /* 10 (21 Mar) */
		"begum",  /* 11 (22 Mar) */
		"kheer",  /* 12 (23 Mar) */
		"jammu",  /* 13 (24 Mar ) */
		"dosas",  /* 14 (25Mar ) */
		"patna",  /* 15 (26Mar ) */
		"herbs",  /* 16 (27Mar ) */
		"pulse",  /* 17 (28Mar ) */
		"saina",  /* 18 (29Mar ) */
		"swami",  /* 19 (30Mar ) */
		"kalam",  /* 20 (31Mar ) */
		"padma",  /* 21 (1Apr ) */
		"rasam",  /* 22 (2Apr ) */
		"chole",  /* 23 (3Apr ) */
		"lassi",  /* 24 (4Apr ) */
		"avial",  /* 25 (5Apr ) */
		"shiva",  /* 26 (6Apr ) */
		"tiger",  /* 27 (7Apr ) */
		"curry",  /* 28 (8Apr ) */
		"moong",  /* 29 (9Apr ) */
		"clove",  /* 30 (10Apr ) */
		"iftar",  /* 31 (11Apr ) */
		"nimbu",  /* 32 (12Apr ) */
		"shyok",  /* 33 (13Apr ) */
		"barfi",  /* 34 (14Apr ) */
		"ugadi",  /* 35 (15Apr ) */
		"sitar",  /* 36 (16Apr ) */
		"divya",  /* 37 (17Apr ) */
		"assam",  /* 38 (18Apr ) */
		"anand",  /* 39 (19Apr ) */
		"kumar",  /* 40 (20Apr ) */
		"rupee",  /* 41 (21Apr ) */
		"bhang",  /* 42 (22Apr ) */
		"nehru",  /* 43 (23Apr ) */
		"chaat",  /* 44 (24Apr ) */
		"surat",  /* 45 (25Apr ) */
		"shawl",  /* 46 (26Apr ) */
		"kalki",  /* 47 (27Apr ) */
		"ajmer",  /* 48 (28Apr ) */
		"chess",  /* 49 (29Apr ) */
		"lungi",  /* 50 (30Apr ) */
		"khadi",  /* 51 (1May ) */
		"garba",  /* 52 (2May ) */
		"raman",  /* 53 (3May ) */
		"kochi",  /* 54 (4May ) */
		"sadhu",  /* 55 (5May ) */
		"garam",  /* 56 (6May ) */
		"chawl",  /* 57 (7May ) */
		"unity",  /* 58 (8May ) */
		"amrut",  /* 59 (9May ) */
		"aamir",  /* 60 (10May ) */
		"bihar",  /* 61 (11May ) */
		"kisan",  /* 62 (12May ) */
		"asana",  /* 63 (13May ) */
		"naidu",  /* 64 (14May ) */
		"tamil",  /* 65 (15May ) */
		"asiad",  /* 66 (16May ) */
		"sania",  /* 67 (17May ) */
		"bajaj",  /* 68 (18May ) */
		"akbar",  /* 69 (19May ) */
		"salem",  /* 70 (20May ) */
		"times",  /* 71 (21May ) */
		"thali",  /* 72 (22May ) */
		"laddu",  /* 73 (23May ) */
		"cumin",  /* 74 (24May ) */
		"maggi",  /* 75 (25May ) */
		"paisa",  /* 76 (26May ) */
		"natya",  /* 77 (27May ) */
		"singh",  /* 78 (28May ) */
		"thane",  /* 79 (29May ) */
		"nifty",  /* 80 (30May ) */
		"chola",  /* 81 (31May ) */
		"hindu",  /* 82 (1Jun ) */
		"haora",  /* 83 (2Jun ) */
		"jiddu",  /* 84 (3Jun ) */
		"bally",  /* 85 (4Jun ) */
		"pooja",  /* 86 (5Jun ) */
		"alwar",  /* 87 (6Jun ) */
		"puttu",  /* 88 (7Jun ) */
		"hindi",  /* 89 (8Jun ) */
		"betel",  /* 90 (9Jun ) */
		"budha",  /* 91 (10Jun ) */
		"latur",  /* 92 (11Jun ) */
		"kurta",  /* 93 (12Jun ) */
		"vedas",  /* 94 (13Jun ) */
		"bhaji",  /* 95 (14Jun ) */
		"choli",  /* 96 (15Jun ) */
		"oriya",  /* 97 (16Jun ) */
		"dhoti",  /* 98 (17Jun ) */
		"wheat",  /* 99 (18Jun ) */
		"sport",  /* 100 (19Jun ) */
		"bidar",  /* 101 (20Jun ) */
		"toddy",  /* 102 (21Jun ) */
		"achar",  /* 103 (22Jun ) */
		"kohli",  /* 104 (23Jun ) */
		"tihar",  /* 105 (24Jun ) */
		"chaas",  /* 106 (25Jun ) */
		"malik",  /* 107 (26Jun ) */
		"bandh",  /* 108 (27Jun ) */
		"ghats",  /* 109 (28Jun ) */
		"khans",  /* 110 (29Jun ) */
		"omkar",  /* 111 (30Jun ) */
		"nagar",  /* 112 (1Jul ) */
		"indus",  /* 113 (2Jul ) */
		"mundu",  /* 114 (3Jul ) */
		"dhoni",  /* 115 (4Jul ) */
		"surya",  /* 116 (5Jul ) */
		"jowar",  /* 117 (6Jul ) */
		"babur",  /* 118 (7Jul ) */
		"kashi",  /* 119 (8Jul ) */
		"methi",  /* 120 (9Jul ) */
		"hisar",  /* 121 (10Jul ) */
		"reddy",  /* 122 (11Jul ) */
		"appam",  /* 123 (12Jul ) */
		"udupi",  /* 124 (13Jul ) */
		"kapil",  /* 125 (14Jul ) */
		"lotus",  /* 126 (15Jul ) */
		"noida",  /* 127 (16Jul ) */
		"bindi",  /* 128 (17Jul ) */
		"kulfi",  /* 129 (18Jul ) */
		"nawab",  /* 130 (19Jul ) */
		"durga",  /* 131 (20Jul ) */
		"narad",  /* 132 (21Jul ) */
		"korba",  /* 133 (22Jul ) */
		"akola",  /* 134 (23Jul ) */
		"kokum",  /* 135 (24Jul ) */
		"simla",  /* 136 (25Jul ) */
		"raina",  /* 137 (26Jul ) */
		"avadi",  /* 138 (27Jul ) */
		"uttar",  /* 139 (28Jul ) */
		"chand",  /* 140 (29Jul ) */
		"bekal",  /* 141 (30Jul ) */
		"satya",  /* 142 (31Jul ) */
		"satna",  /* 143 (1Aug ) */
		"raita",  /* 144 (2Aug ) */
		"besan",  /* 145 (3Aug ) */
		"rajma",  /* 146 (4Aug ) */
		"mahal",  /* 147 (5Aug ) */
		"kajol",  /* 148 (6Aug ) */
		"vijay",  /* 149 (7Aug ) */
		"nagas",  /* 150 (8Aug ) */
		"jagat",  /* 151 (9Aug ) */
		"bhuna",  /* 152 (10Aug ) */
		"poori",  /* 153 (11Aug ) */
		"music",  /* 154 (12Aug ) */
		"atman",  /* 155 (13Aug ) */
		"court",  /* 156 (14Aug ) */
		"india",  /* 157 (15Aug ) */
		/* sort and set trivia */			
		"parks",  /* 158 (16Aug ) */
		"kebab",  /* 159 (17Aug ) */
		"dewas",  /* 160 (18Aug ) */
		"basti",  /* 161 (19Jul ) */
		"beans",  /* 162 (20Aug ) */
		"jawan",  /* 163 (21Aug ) */
		"dhule",  /* 164 (22Aug ) */
		"pulav",  /* 165 (23Aug ) */
		"ratna",  /* 166 (24Aug ) */
		"munda",  /* 167 (25Aug ) */
		"moksh",  /* 168 (26Aug ) */
		"halwa",  /* 169 (27Aug ) */
		"patel",  /* 170 (28Aug ) */
		"apple",  /* 171 (29Aug ) */
		"beach",  /* 172 (30Aug ) */
		"brahm",  /* 173 (31Aug ) */
		"caves",  /* 174 (1Sep ) */
		"crabs",  /* 175 (2Sep ) */
		"dance",  /* 176 (3Sep ) */
		"Fattu",  /* 177 (4Sep ) */
		"forts",  /* 178 (5Sep ) */
		"grape",  /* 179 (6Sep ) */
		"guava",  /* 180 (7Sep ) */
		"gurus",  /* 181 (8Sep ) */
		"halal",  /* 182 (9Sep ) */
		"hills",  /* 183 (10Sep ) */
		"kappa",  /* 184 (11Sep ) */
		"kulti",  /* 185 (12Sep ) */
		"mallu",  /* 186 (13Sep ) */
		"mango",  /* 187 (14Sep ) */
		"namaz",  /* 188 (15Sep ) */
		"nayak",  /* 189 (16Sep ) */
		"nepal",  /* 190 (17Sep ) */
		"north",  /* 191 (18Sep ) */
		"pappu",  /* 192 (19Sep ) */
		"prawn",  /* 193 (20Sep ) */
		"qilas",  /* 194 (21Sep ) */
		"quran",  /* 195 (22Sep ) */
		"rajas",  /* 196 (23Sep ) */
		"ranis",  /* 197 (24Sep ) */
		"river",  /* 198 (25Sep ) */
		"santi",  /* 199 (26Sep ) */
		"south",  /* 200 (27Sep ) */
		"squid",  /* 201 (28Sep ) */
		"tatas",  /* 202 (29Sep ) */
		"tejas",  /* 203 (30Sep ) */
		"jeera",  /* 204 (1Oct ) */
		"tombs",  /* 205 (2Oct ) */
		"islam",  /* 206 (3Oct ) */
		"baghs",  /* 207 (4Oct ) */
		"salam",  /* 208 (5Oct ) */
		"savan",  /* 209 (6Oct ) */
		"galli",  /* 210 (7Oct ) */
		"gujju",  /* 211 (8Oct ) */
		"kriti",  /* 212 (9Oct ) */
		"sabzi",  /* 213 (10Oct ) */
		"mogul",  /* 214 (11Oct ) */
		"aadab",  /* 215 (12Oct ) */
		"khaki",  /* 216 (13Oct ) */
		"jalsa",  /* 217 (14Oct ) */
		"mirza",  /* 218 (15Oct ) */
        "kayak",
        "moose", 
        "pride", 
        "rocky", 
        "scoff", 
        "cabin", 
        "beers", 
        "parka", 
        "rinks", 
        "fries", 
        "coast", 
        "order", 
        "phone", 
        "birch", 
        "ports", 
        "dairy", 
        "skate", 
        "farms", 
        "river", 
        "sport", 
        "globe", 
        "curds", 
        "foxes", 
        "crops", 
        "camps", 
        "rodeo", 
        "trade", 
        "peace", 
        "mines", 
        "shore", 
        "cedar", 
        "large", 
        "brier", 
        "tides", 
        "klick", 
        "denim", 
        "ships", 
        "poppy", 
        "court", 
        "lodge", 
        "ocean", 
        "rugby", 
        "metre", 
        "elder", 
        "space", 
        "horse", 
        "foggy", 
        "taxes", 
        "train", 
        "music", 
        "mitts", 
        "grain", 
        "rouge", 
        "tulip", 
        "wines", 
        "serge", 
        "rural", 
        "troop", 
        "junos", 
        "track", 
        "sunny", 
        "zones", 
        "beach", 
        "skier", 
        "bases", 
        "smile", 
        "hydro", 
        "trail", 
        "sands", 
        "water", 
        "boots", 
        "tarts", 
        "docks", 
        "privy", 
        "otter", 
        "field", 
        "games", 
        "sleds", 
        "trees", 
        "union", 
        "prime", 
        "chips", 
        "perch", 
        "banks", 
        "pines", 
        "chief", 
        "peaks", 
        "arena", 
        "elect", 
        "house", 
        "bagel", 
        "heron", 
        "mogul", 
        "radio", 
        "litre", 
        "royal", 
        "taiga", 
        "huron", 
        "trout", 
        "scarf", 
        "beads", 
        "storm", 
        "craft", 
        "taffy", 
        "great", 
        "pucks", 
        "proud"  
      ],
      Ta = [    /* DICTIONARY WORDS*/
		"gimli","comox","digby","edson","essex","gaspe","leduc","magog","perth","truro","sioux","rouyn","madam","night","bland","liver","wedge","augur","roomy","wacky","flock","angry","bobby","trite","aphid","tryst","midge","power","elope","cinch","motto","stomp","upset","bluff","cramp","quart","coyly","youth","rhyme","buggy","alien","smear","unfit","patty","cling","glean","label","hunky","khaki","poker","gruel","twice","twang","shrug","treat","unlit","waste","merit","woven","octal","needy","clown","widow","irony","ruder","gauze","chief","onset","prize","fungi","charm","gully","inter","whoop","taunt","leery","class","theme","lofty","tibia","booze","alpha","thyme","eclat","doubt","parer","chute","stick","trice","alike","sooth","recap","saint","liege","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting","bough","marsh","sloth","dandy","vigor","howdy","enjoy","valid","ionic","equal","unset","floor","catch","spade","stein","exist","quirk","denim","grove","spiel","mummy","fault","foggy","flout","carry","sneak","libel","waltz","aptly","piney","inept","aloud","photo","dream","stale","vomit","ombre","fanny","unite","snarl","baker","there","glyph","pooch","hippy","spell","folly","louse","gulch","vault","godly","threw","fleet","grave","inane","shock","crave","spite","valve","skimp","claim","rainy","musty","pique","daddy","quasi","arise","aging","valet","opium","avert","stuck","recut","mulch","genre","plume","rifle","count","incur","total","wrest","mocha","deter","study","lover","safer","rivet","funny","smoke","mound","undue","sedan","pagan","swine","guile","gusty","equip","tough","canoe","chaos","covet","human","udder","lunch","blast","stray","manga","melee","lefty","quick","paste","given","octet","risen","groan","leaky","grind","carve","loose","sadly","spilt","apple","slack","honey","final","sheen","eerie","minty","slick","derby","wharf","spelt","coach","erupt","singe","price","spawn","fairy","jiffy","filmy","stack","chose","sleep","ardor","nanny","niece","woozy","handy","grace","ditto","stank","cream","usual","diode","valor","angle","ninja","muddy","chase","reply","prone","spoil","heart","shade","diner","arson","onion","sleet","dowel","couch","palsy","bowel","smile","evoke","creek","lance","eagle","idiot","siren","built","embed","award","dross","annul","goody","frown","patio","laden","humid","elite","lymph","edify","might","reset","visit","gusto","purse","vapor","crock","write","sunny","loath","chaff","slide","queer","venom","stamp","sorry","still","acorn","aping","pushy","tamer","hater","mania","awoke","brawn","swift","exile","birch","lucky","freer","risky","ghost","plier","lunar","winch","snare","nurse","house","borax","nicer","lurch","exalt","about","savvy","toxin","tunic","pried","inlay","chump","lanky","cress","eater","elude","cycle","kitty","boule","moron","tenet","place","lobby","plush","vigil","index","blink","clung","qualm","croup","clink","juicy","stage","decay","nerve","flier","shaft","crook","clean","china","ridge","vowel","gnome","snuck","icing","spiny","rigor","snail","flown","rabid","prose","thank","poppy","budge","fiber","moldy","dowdy","kneel","track","caddy","quell","dumpy","paler","swore","rebar","scuba","splat","flyer","horny","mason","doing","ozone","amply","molar","ovary","beset","queue","cliff","magic","truce","sport","fritz","edict","twirl","verse","llama","eaten","range","whisk","hovel","rehab","macaw","sigma","spout","verve","sushi","dying","fetid","brain","buddy","thump","scion","candy","chord","basin","march","crowd","arbor","gayly","musky","stain","dally","bless","bravo","stung","title","ruler","kiosk","blond","ennui","layer","fluid","tatty","score","cutie","zebra","barge","matey","bluer","aider","shook","river","privy","betel","frisk","bongo","begun","azure","weave","genie","sound","glove","braid","scope","wryly","rover","assay","ocean","bloom","irate","later","woken","silky","wreck","dwelt","slate","smack","solid","amaze","hazel","wrist","jolly","globe","flint","rouse","civil","vista","relax","cover","alive","beech","jetty","bliss","vocal","often","dolly","eight","joker","since","event","ensue","shunt","diver","poser","worst","sweep","alley","creed","anime","leafy","bosom","dunce","stare","pudgy","waive","choir","stood","spoke","outgo","delay","bilge","ideal","clasp","seize","hotly","laugh","sieve","block","meant","grape","noose","hardy","shied","drawl","daisy","putty","strut","burnt","tulip","crick","idyll","vixen","furor","geeky","cough","naive","shoal","stork","bathe","aunty","check","prime","brass","outer","furry","razor","elect","evict","imply","demur","quota","haven","cavil","swear","crump","dough","gavel","wagon","salon","nudge","harem","pitch","sworn","pupil","excel","stony","cabin","unzip","queen","trout","polyp","earth","storm","until","taper","enter","child","adopt","minor","fatty","husky","brave","filet","slime","glint","tread","steal","regal","guest","every","murky","share","spore","hoist","buxom","inner","otter","dimly","level","sumac","donut","stilt","arena","sheet","scrub","fancy","slimy","pearl","silly","porch","dingo","sepia","amble","shady","bread","friar","reign","dairy","quill","cross","brood","tuber","shear","posit","blank","villa","shank","piggy","freak","which","among","fecal","shell","would","algae","large","rabbi","agony","amuse","bushy","copse","swoon","knife","pouch","ascot","plane","crown","urban","snide","relay","abide","viola","rajah","straw","dilly","crash","amass","third","trick","tutor","woody","blurb","grief","disco","where","sassy","beach","sauna","comic","clued","creep","caste","graze","snuff","frock","gonad","drunk","prong","lurid","steel","halve","buyer","vinyl","utile","smell","adage","worry","tasty","local","trade","finch","ashen","modal","gaunt","clove","enact","adorn","roast","speck","sheik","missy","grunt","snoop","party","touch","mafia","emcee","array","south","vapid","jelly","skulk","angst","tubal","lower","crest","sweat","cyber","adore","tardy","swami","notch","groom","roach","hitch","young","align","ready","frond","strap","puree","realm","venue","swarm","offer","seven","dryer","diary","dryly","drank","acrid","heady","theta","junto","pixie","quoth","bonus","shalt","penne","amend","datum","build","piano","shelf","lodge","suing","rearm","coral","ramen","worth","psalm","infer","overt","mayor","ovoid","glide","usage","poise","randy","chuck","prank","fishy","tooth","ether","drove","idler","swath","stint","while","begat","apply","slang","tarot","radar","credo","aware","canon","shift","timer","bylaw","serum","three","steak","iliac","shirk","blunt","puppy","penal","joist","bunny","shape","beget","wheel","adept","stunt","stole","topaz","chore","fluke","afoot","bloat","bully","dense","caper","sneer","boxer","jumbo","lunge","space","avail","short","slurp","loyal","flirt","pizza","conch","tempo","droop","plate","bible","plunk","afoul","savoy","steep","agile","stake","dwell","knave","beard","arose","motif","smash","broil","glare","shove","baggy","mammy","swamp","along","rugby","wager","quack","squat","snaky","debit","mange","skate","ninth","joust","tramp","spurn","medal","micro","rebel","flank","learn","nadir","maple","comfy","remit","gruff","ester","least","mogul","fetch","cause","oaken","aglow","meaty","gaffe","shyly","racer","prowl","thief","stern","poesy","rocky","tweet","waist","spire","grope","havoc","patsy","truly","forty","deity","uncle","swish","giver","preen","bevel","lemur","draft","slope","annoy","lingo","bleak","ditty","curly","cedar","dirge","grown","horde","drool","shuck","crypt","cumin","stock","gravy","locus","wider","breed","quite","chafe","cache","blimp","deign","fiend","logic","cheap","elide","rigid","false","renal","pence","rowdy","shoot","blaze","envoy","posse","brief","never","abort","mouse","mucky","sulky","fiery","media","trunk","yeast","clear","skunk","scalp","bitty","cider","koala","duvet","segue","creme","super","grill","after","owner","ember","reach","nobly","empty","speed","gipsy","recur","smock","dread","merge","burst","kappa","amity","shaky","hover","carol","snort","synod","faint","haunt","flour","chair","detox","shrew","tense","plied","quark","burly","novel","waxen","stoic","jerky","blitz","beefy","lyric","hussy","towel","quilt","below","bingo","wispy","brash","scone","toast","easel","saucy","value","spice","honor","route","sharp","bawdy","radii","skull","phony","issue","lager","swell","urine","gassy","trial","flora","upper","latch","wight","brick","retry","holly","decal","grass","shack","dogma","mover","defer","sober","optic","crier","vying","nomad","flute","hippo","shark","drier","obese","bugle","tawny","chalk","feast","ruddy","pedal","scarf","cruel","bleat","tidal","slush","semen","windy","dusty","sally","igloo","nerdy","jewel","shone","whale","hymen","abuse","fugue","elbow","crumb","pansy","welsh","syrup","terse","suave","gamut","swung","drake","freed","afire","shirt","grout","oddly","tithe","plaid","dummy","broom","blind","torch","enemy","again","tying","pesky","alter","gazer","noble","ethos","bride","extol","decor","hobby","beast","idiom","utter","these","sixth","alarm","erase","elegy","spunk","piper","scaly","scold","hefty","chick","sooty","canal","whiny","slash","quake","joint","swept","prude","heavy","wield","femme","lasso","maize","shale","screw","spree","smoky","whiff","scent","glade","spent","prism","stoke","riper","orbit","cocoa","guilt","humus","shush","table","smirk","wrong","noisy","alert","shiny","elate","resin","whole","hunch","pixel","polar","hotel","sword","cleat","mango","rumba","puffy","filly","billy","leash","clout","dance","ovate","facet","chili","paint","liner","curio","salty","audio","snake","fable","cloak","navel","spurt","pesto","balmy","flash","unwed","early","churn","weedy","stump","lease","witty","wimpy","spoof","saner","blend","salsa","thick","warty","manic","blare","squib","spoon","probe","crepe","knack","force","debut","order","haste","teeth","agent","widen","icily","slice","ingot","clash","juror","blood","abode","throw","unity","pivot","slept","troop","spare","sewer","parse","morph","cacti","tacky","spool","demon","moody","annex","begin","fuzzy","patch","water","lumpy","admin","omega","limit","tabby","macho","aisle","skiff","basis","plank","verge","botch","crawl","lousy","slain","cubic","raise","wrack","guide","foist","cameo","under","actor","revue","fraud","harpy","scoop","climb","refer","olden","clerk","debar","tally","ethic","cairn","tulle","ghoul","hilly","crude","apart","scale","older","plain","sperm","briny","abbot","rerun","quest","crisp","bound","befit","drawn","suite","itchy","cheer","bagel","guess","broad","axiom","chard","caput","leant","harsh","curse","proud","swing","opine","taste","lupus","gumbo","miner","green","chasm","lipid","topic","armor","brush","crane","mural","abled","habit","bossy","maker","dusky","dizzy","lithe","brook","jazzy","fifty","sense","giant","surly","legal","fatal","flunk","began","prune","small","slant","scoff","torus","ninny","covey","viper","taken","moral","vogue","owing","token","entry","booth","voter","chide","elfin","ebony","neigh","minim","melon","kneed","decoy","voila","ankle","arrow","mushy","tribe","cease","eager","birth","graph","odder","terra","weird","tried","clack","color","rough","weigh","uncut","ladle","strip","craft","minus","dicey","titan","lucid","vicar","dress","ditch","gypsy","pasta","taffy","flame","swoop","aloof","sight","broke","teary","chart","sixty","wordy","sheer","leper","nosey","bulge","savor","clamp","funky","foamy","toxic","brand","plumb","dingy","butte","drill","tripe","bicep","tenor","krill","worse","drama","hyena","think","ratio","cobra","basil","scrum","bused","phone","court","camel","proof","heard","angel","petal","pouty","throb","maybe","fetal","sprig","spine","shout","cadet","macro","dodgy","satyr","rarer","binge","trend","nutty","leapt","amiss","split","myrrh","width","sonar","tower","baron","fever","waver","spark","belie","sloop","expel","smote","baler","above","north","wafer","scant","frill","awash","snack","scowl","frail","drift","limbo","fence","motel","ounce","wreak","revel","talon","prior","knelt","cello","flake","debug","anode","crime","salve","scout","imbue","pinky","stave","vague","chock","fight","video","stone","teach","cleft","frost","prawn","booty","twist","apnea","stiff","plaza","ledge","tweak","board","grant","medic","bacon","cable","brawl","slunk","raspy","forum","drone","women","mucus","boast","toddy","coven","tumor","truer","wrath","stall","steam","axial","purer","daily","trail","niche","mealy","juice","nylon","plump","merry","flail","papal","wheat","berry","cower","erect","brute","leggy","snipe","sinew","skier","penny","jumpy","rally","umbra","scary","modem","gross","avian","greed","satin","tonic","parka","sniff","livid","stark","trump","giddy","reuse","taboo","avoid","quote","devil","liken","gloss","gayer","beret","noise","gland","dealt","sling","rumor","opera","thigh","tonga","flare","wound","white","bulky","etude","horse","circa","paddy","inbox","fizzy","grain","exert","surge","gleam","belle","salvo","crush","fruit","sappy","taker","tract","ovine","spiky","frank","reedy","filth","spasm","heave","mambo","right","clank","trust","lumen","borne","spook","sauce","amber","lathe","carat","corer","dirty","slyly","affix","alloy","taint","sheep","kinky","wooly","mauve","flung","yacht","fried","quail","brunt","grimy","curvy","cagey","rinse","deuce","state","grasp","milky","bison","graft","sandy","baste","flask","hedge","girly","swash","boney","coupe","endow","abhor","welch","blade","tight","geese","miser","mirth","cloud","cabal","leech","close","tenth","pecan","droit","grail","clone","guise","ralph","tango","biddy","smith","mower","payee","serif","drape","fifth","spank","glaze","allot","truck","kayak","virus","testy","tepee","fully","zonal","metro","curry","grand","banjo","axion","bezel","occur","chain","nasal","gooey","filer","brace","allay","pubic","raven","plead","gnash","flaky","munch","dully","eking","thing","slink","hurry","theft","shorn","pygmy","ranch","wring","lemon","shore","mamma","froze","newer","style","moose","antic","drown","vegan","chess","guppy","union","lever","lorry","image","cabby","druid","exact","truth","dopey","spear","cried","chime","crony","stunk","timid","batch","gauge","rotor","crack","curve","latte","witch","bunch","repel","anvil","soapy","meter","broth","madly","dried","scene","known","magma","roost","woman","thong","punch","pasty","downy","knead","whirl","rapid","clang","anger","drive","goofy","email","music","stuff","bleep","rider","mecca","folio","setup","verso","quash","fauna","gummy","happy","newly","fussy","relic","guava","ratty","fudge","femur","chirp","forte","alibi","whine","petty","golly","plait","fleck","felon","gourd","brown","thrum","ficus","stash","decry","wiser","junta","visor","daunt","scree","impel","await","press","whose","turbo","stoop","speak","mangy","eying","inlet","crone","pulse","mossy","staid","hence","pinch","teddy","sully","snore","ripen","snowy","attic","going","leach","mouth","hound","clump","tonal","bigot","peril","piece","blame","haute","spied","undid","intro","basal","shine","gecko","rodeo","guard","steer","loamy","scamp","scram","manly","hello","vaunt","organ","feral","knock","extra","condo","adapt","willy","polka","rayon","skirt","faith","torso","match","mercy","tepid","sleek","riser","twixt","peace","flush","catty","login","eject","roger","rival","untie","refit","aorta","adult","judge","rower","artsy","rural","shave","humor","pause","ulcer","ultra","robin","cynic","agora","aroma","caulk","shake","pupal","dodge","swill","tacit","other","thorn","trove","bloke","vivid","spill","chant","choke","rupee","nasty","mourn","ahead","brine","cloth","hoard","sweet","month","lapse","watch","today","focus","smelt","tease","cater","movie","lynch","saute","allow","renew","their","slosh","purge","chest","depot","epoxy","nymph","found","shall","harry","stove","lowly","snout","trope","fewer","shawl","natal","fibre","comma","foray","scare","stair","black","squad","royal","chunk","mince","slave","shame","cheek","ample","flair","foyer","cargo","oxide","plant","olive","inert","askew","heist","shown","zesty","hasty","trash","fella","larva","forgo","story","hairy","train","homer","badge","midst","canny","fetus","butch","farce","slung","tipsy","metal","yield","delve","being","scour","glass","gamer","scrap","money","hinge","album","vouch","asset","tiara","crept","bayou","atoll","manor","creak","showy","phase","froth","depth","gloom","flood","trait","girth","piety","payer","goose","float","donor","atone","primo","apron","blown","cacao","loser","input","gloat","awful","brink","smite","beady","rusty","retro","droll","gawky","hutch","pinto","gaily","egret","lilac","sever","field","fluff","hydro","flack","agape","wench","voice","stead","stalk","berth","aahed","aalii","aargh","aarti","abaca","abaci","abacs","abaft","abaka","abamp","aband","abash","abask","abaya","abbas","abbed","abbes","abcee","abeam","abear","abele","abers","abets","abies","abler","ables","ablet","ablow","abmho","abohm","aboil","aboma","aboon","abord","abore","abram","abray","abrim","abrin","abris","absey","absit","abuna","abune","abuts","abuzz","abyes","abysm","acais","acari","accas","accoy","acerb","acers","aceta","achar","ached","aches","achoo","acids","acidy","acing","acini","ackee","acker","acmes","acmic","acned","acnes","acock","acold","acred","acres","acros","acted","actin","acton","acyls","adaws","adays","adbot","addax","added","adder","addio","addle","adeem","adhan","adieu","adios","adits","adman","admen","admix","adobo","adown","adoze","adrad","adred","adsum","aduki","adunc","adust","advew","adyta","adzed","adzes","aecia","aedes","aegis","aeons","aerie","aeros","aesir","afald","afara","afars","afear","aflaj","afore","afrit","afros","agama","agami","agars","agast","agave","agaze","agene","agers","agger","aggie","aggri","aggro","aggry","aghas","agila","agios","agism","agist","agita","aglee","aglet","agley","agloo","aglus","agmas","agoge","agone","agons","agood","agria","agrin","agros","agued","agues","aguna","aguti","aheap","ahent","ahigh","ahind","ahing","ahint","ahold","ahull","ahuru","aidas","aided","aides","aidoi","aidos","aiery","aigas","aight","ailed","aimed","aimer","ainee","ainga","aioli","aired","airer","airns","airth","airts","aitch","aitus","aiver","aiyee","aizle","ajies","ajiva","ajuga","ajwan","akees","akela","akene","aking","akita","akkas","alaap","alack","alamo","aland","alane","alang","alans","alant","alapa","alaps","alary","alate","alays","albas","albee","alcid","alcos","aldea","alder","aldol","aleck","alecs","alefs","aleft","aleph","alews","aleye","alfas","algal","algas","algid","algin","algor","algum","alias","alifs","aline","alist","aliya","alkie","alkos","alkyd","alkyl","allee","allel","allis","allod","allyl","almah","almas","almeh","almes","almud","almug","alods","aloed","aloes","aloha","aloin","aloos","alowe","altho","altos","alula","alums","alure","alvar","alway","amahs","amain","amate","amaut","amban","ambit","ambos","ambry","ameba","ameer","amene","amens","ament","amias","amice","amici","amide","amido","amids","amies","amiga","amigo","amine","amino","amins","amirs","amlas","amman","ammon","ammos","amnia","amnic","amnio","amoks","amole","amort","amour","amove","amowt","amped","ampul","amrit","amuck","amyls","anana","anata","ancho","ancle","ancon","andro","anear","anele","anent","angas","anglo","anigh","anile","anils","anima","animi","anion","anise","anker","ankhs","ankus","anlas","annal","annas","annat","anoas","anole","anomy","ansae","antae","antar","antas","anted","antes","antis","antra","antre","antsy","anura","anyon","apace","apage","apaid","apayd","apays","apeak","apeek","apers","apert","apery","apgar","aphis","apian","apiol","apish","apism","apode","apods","apoop","aport","appal","appay","appel","appro","appui","appuy","apres","apses","apsis","apsos","apted","apter","aquae","aquas","araba","araks","arame","arars","arbas","arced","archi","arcos","arcus","ardeb","ardri","aread","areae","areal","arear","areas","areca","aredd","arede","arefy","areic","arene","arepa","arere","arete","arets","arett","argal","argan","argil","argle","argol","argon","argot","argus","arhat","arias","ariel","ariki","arils","ariot","arish","arked","arled","arles","armed","armer","armet","armil","arnas","arnut","aroba","aroha","aroid","arpas","arpen","arrah","arras","arret","arris","arroz","arsed","arses","arsey","arsis","artal","artel","artic","artis","aruhe","arums","arval","arvee","arvos","aryls","asana","ascon","ascus","asdic","ashed","ashes","ashet","asked","asker","askoi","askos","aspen","asper","aspic","aspie","aspis","aspro","assai","assam","asses","assez","assot","aster","astir","astun","asura","asway","aswim","asyla","ataps","ataxy","atigi","atilt","atimy","atlas","atman","atmas","atmos","atocs","atoke","atoks","atoms","atomy","atony","atopy","atria","atrip","attap","attar","atuas","audad","auger","aught","aulas","aulic","auloi","aulos","aumil","aunes","aunts","aurae","aural","aurar","auras","aurei","aures","auric","auris","aurum","autos","auxin","avale","avant","avast","avels","avens","avers","avgas","avine","avion","avise","aviso","avize","avows","avyze","awarn","awato","awave","aways","awdls","aweel","aweto","awing","awmry","awned","awner","awols","awork","axels","axile","axils","axing","axite","axled","axles","axman","axmen","axoid","axone","axons","ayahs","ayaya","ayelp","aygre","ayins","ayont","ayres","ayrie","azans","azide","azido","azine","azlon","azoic","azole","azons","azote","azoth","azuki","azurn","azury","azygy","azyme","azyms","baaed","baals","babas","babel","babes","babka","baboo","babul","babus","bacca","bacco","baccy","bacha","bachs","backs","baddy","baels","baffs","baffy","bafts","baghs","bagie","bahts","bahus","bahut","bails","bairn","baisa","baith","baits","baiza","baize","bajan","bajra","bajri","bajus","baked","baken","bakes","bakra","balas","balds","baldy","baled","bales","balks","balky","balls","bally","balms","baloo","balsa","balti","balun","balus","bambi","banak","banco","bancs","banda","bandh","bands","bandy","baned","banes","bangs","bania","banks","banns","bants","bantu","banty","banya","bapus","barbe","barbs","barby","barca","barde","bardo","bards","bardy","bared","barer","bares","barfi","barfs","baric","barks","barky","barms","barmy","barns","barny","barps","barra","barre","barro","barry","barye","basan","based","basen","baser","bases","basho","basij","basks","bason","basse","bassi","basso","bassy","basta","basti","basto","basts","bated","bates","baths","batik","batta","batts","battu","bauds","bauks","baulk","baurs","bavin","bawds","bawks","bawls","bawns","bawrs","bawty","bayed","bayer","bayes","bayle","bayts","bazar","bazoo","beads","beaks","beaky","beals","beams","beamy","beano","beans","beany","beare","bears","beath","beats","beaty","beaus","beaut","beaux","bebop","becap","becke","becks","bedad","bedel","bedes","bedew","bedim","bedye","beedi","beefs","beeps","beers","beery","beets","befog","begad","begar","begem","begot","begum","beige","beigy","beins","bekah","belah","belar","belay","belee","belga","bells","belon","belts","bemad","bemas","bemix","bemud","bends","bendy","benes","benet","benga","benis","benne","benni","benny","bento","bents","benty","bepat","beray","beres","bergs","berko","berks","berme","berms","berob","beryl","besat","besaw","besee","beses","besit","besom","besot","besti","bests","betas","beted","betes","beths","betid","beton","betta","betty","bever","bevor","bevue","bevvy","bewet","bewig","bezes","bezil","bezzy","bhais","bhaji","bhang","bhats","bhels","bhoot","bhuna","bhuts","biach","biali","bialy","bibbs","bibes","biccy","bices","bided","bider","bides","bidet","bidis","bidon","bield","biers","biffo","biffs","biffy","bifid","bigae","biggs","biggy","bigha","bight","bigly","bigos","bijou","biked","biker","bikes","bikie","bilbo","bilby","biled","biles","bilgy","bilks","bills","bimah","bimas","bimbo","binal","bindi","binds","biner","bines","bings","bingy","binit","binks","bints","biogs","biont","biota","biped","bipod","birds","birks","birle","birls","biros","birrs","birse","birsy","bises","bisks","bisom","bitch","biter","bites","bitos","bitou","bitsy","bitte","bitts","bivia","bivvy","bizes","bizzo","bizzy","blabs","blads","blady","blaer","blaes","blaff","blags","blahs","blain","blams","blart","blase","blash","blate","blats","blatt","blaud","blawn","blaws","blays","blear","blebs","blech","blees","blent","blert","blest","blets","bleys","blimy","bling","blini","blins","bliny","blips","blist","blite","blits","blive","blobs","blocs","blogs","blook","bloop","blore","blots","blows","blowy","blubs","blude","bluds","bludy","blued","blues","bluet","bluey","bluid","blume","blunk","blurs","blype","boabs","boaks","boars","boart","boats","bobac","bobak","bobas","bobol","bobos","bocca","bocce","bocci","boche","bocks","boded","bodes","bodge","bodhi","bodle","boeps","boets","boeuf","boffo","boffs","bogan","bogey","boggy","bogie","bogle","bogue","bogus","bohea","bohos","boils","boing","boink","boite","boked","bokeh","bokes","bokos","bolar","bolas","bolds","boles","bolix","bolls","bolos","bolts","bolus","bomas","bombe","bombo","bombs","bonce","bonds","boned","boner","bones","bongs","bonie","bonks","bonne","bonny","bonza","bonze","booai","booay","boobs","boody","booed","boofy","boogy","boohs","books","booky","bools","booms","boomy","boong","boons","boord","boors","boose","boots","boppy","borak","boral","boras","borde","bords","bored","boree","borel","borer","bores","borgo","boric","borks","borms","borna","boron","borts","borty","bortz","bosie","bosks","bosky","boson","bosun","botas","botel","botes","bothy","botte","botts","botty","bouge","bouks","boult","bouns","bourd","bourg","bourn","bouse","bousy","bouts","bovid","bowat","bowed","bower","bowes","bowet","bowie","bowls","bowne","bowrs","bowse","boxed","boxen","boxes","boxla","boxty","boyar","boyau","boyed","boyfs","boygs","boyla","boyos","boysy","bozos","braai","brach","brack","bract","brads","braes","brags","brail","braks","braky","brame","brane","brank","brans","brant","brast","brats","brava","bravi","braws","braxy","brays","braza","braze","bream","brede","breds","breem","breer","brees","breid","breis","breme","brens","brent","brere","brers","breve","brews","breys","brier","bries","brigs","briki","briks","brill","brims","brins","brios","brise","briss","brith","brits","britt","brize","broch","brock","brods","brogh","brogs","brome","bromo","bronc","brond","brool","broos","brose","brosy","brows","brugh","bruin","bruit","brule","brume","brung","brusk","brust","bruts","buats","buaze","bubal","bubas","bubba","bubbe","bubby","bubus","buchu","bucko","bucks","bucku","budas","budis","budos","buffa","buffe","buffi","buffo","buffs","buffy","bufos","bufty","buhls","buhrs","buiks","buist","bukes","bulbs","bulgy","bulks","bulla","bulls","bulse","bumbo","bumfs","bumph","bumps","bumpy","bunas","bunce","bunco","bunde","bundh","bunds","bundt","bundu","bundy","bungs","bungy","bunia","bunje","bunjy","bunko","bunks","bunns","bunts","bunty","bunya","buoys","buppy","buran","buras","burbs","burds","buret","burfi","burgh","burgs","burin","burka","burke","burks","burls","burns","buroo","burps","burqa","burro","burrs","burry","bursa","burse","busby","buses","busks","busky","bussu","busti","busts","busty","buteo","butes","butle","butoh","butts","butty","butut","butyl","buzzy","bwana","bwazi","byded","bydes","byked","bykes","byres","byrls","byssi","bytes","byway","caaed","cabas","caber","cabob","caboc","cabre","cacas","cacks","cacky","cadee","cades","cadge","cadgy","cadie","cadis","cadre","caeca","caese","cafes","caffs","caged","cager","cages","cagot","cahow","caids","cains","caird","cajon","cajun","caked","cakes","cakey","calfs","calid","calif","calix","calks","calla","calls","calms","calmy","calos","calpa","calps","calve","calyx","caman","camas","cames","camis","camos","campi","campo","camps","campy","camus","caned","caneh","caner","canes","cangs","canid","canna","canns","canso","canst","canto","cants","canty","capas","caped","capes","capex","caphs","capiz","caple","capon","capos","capot","capri","capul","carap","carbo","carbs","carby","cardi","cards","cardy","cared","carer","cares","caret","carex","carks","carle","carls","carns","carny","carob","carom","caron","carpi","carps","carrs","carse","carta","carte","carts","carvy","casas","casco","cased","cases","casks","casky","casts","casus","cates","cauda","cauks","cauld","cauls","caums","caups","cauri","causa","cavas","caved","cavel","caver","caves","cavie","cawed","cawks","caxon","ceaze","cebid","cecal","cecum","ceded","ceder","cedes","cedis","ceiba","ceili","ceils","celeb","cella","celli","cells","celom","celts","cense","cento","cents","centu","ceorl","cepes","cerci","cered","ceres","cerge","ceria","ceric","cerne","ceroc","ceros","certs","certy","cesse","cesta","cesti","cetes","cetyl","cezve","chace","chack","chaco","chado","chads","chaft","chais","chals","chams","chana","chang","chank","chape","chaps","chapt","chara","chare","chark","charr","chars","chary","chats","chave","chavs","chawk","chaws","chaya","chays","cheep","chefs","cheka","chela","chelp","chemo","chems","chere","chert","cheth","chevy","chews","chewy","chiao","chias","chibs","chica","chich","chico","chics","chiel","chiks","chile","chimb","chimo","chimp","chine","ching","chink","chino","chins","chips","chirk","chirl","chirm","chiro","chirr","chirt","chiru","chits","chive","chivs","chivy","chizz","choco","chocs","chode","chogs","choil","choko","choky","chola","choli","cholo","chomp","chons","choof","chook","choom","choon","chops","chota","chott","chout","choux","chowk","chows","chubs","chufa","chuff","chugs","chums","churl","churr","chuse","chuts","chyle","chyme","chynd","cibol","cided","cides","ciels","ciggy","cilia","cills","cimar","cimex","cinct","cines","cinqs","cions","cippi","circs","cires","cirls","cirri","cisco","cissy","cists","cital","cited","citer","cites","cives","civet","civie","civvy","clach","clade","clads","claes","clags","clame","clams","clans","claps","clapt","claro","clart","clary","clast","clats","claut","clave","clavi","claws","clays","cleck","cleek","cleep","clefs","clegs","cleik","clems","clepe","clept","cleve","clews","clied","clies","clift","clime","cline","clint","clipe","clips","clipt","clits","cloam","clods","cloff","clogs","cloke","clomb","clomp","clonk","clons","cloop","cloot","clops","clote","clots","clour","clous","clows","cloye","cloys","cloze","clubs","clues","cluey","clunk","clype","cnida","coact","coady","coala","coals","coaly","coapt","coarb","coate","coati","coats","cobbs","cobby","cobia","coble","cobza","cocas","cocci","cocco","cocks","cocky","cocos","codas","codec","coded","coden","coder","codes","codex","codon","coeds","coffs","cogie","cogon","cogue","cohab","cohen","cohoe","cohog","cohos","coifs","coign","coils","coins","coirs","coits","coked","cokes","colas","colby","colds","coled","coles","coley","colic","colin","colls","colly","colog","colts","colza","comae","comal","comas","combe","combi","combo","combs","comby","comer","comes","comix","commo","comms","commy","compo","comps","compt","comte","comus","coned","cones","coney","confs","conga","conge","congo","conia","conin","conks","conky","conne","conns","conte","conto","conus","convo","cooch","cooed","cooee","cooer","cooey","coofs","cooks","cooky","cools","cooly","coomb","cooms","coomy","coons","coops","coopt","coost","coots","cooze","copal","copay","coped","copen","coper","copes","coppy","copra","copsy","coqui","coram","corbe","corby","cords","cored","cores","corey","corgi","coria","corks","corky","corms","corni","corno","corns","cornu","corps","corse","corso","cosec","cosed","coses","coset","cosey","cosie","costa","coste","costs","cotan","coted","cotes","coths","cotta","cotts","coude","coups","courb","courd","coure","cours","couta","couth","coved","coves","covin","cowal","cowan","cowed","cowks","cowls","cowps","cowry","coxae","coxal","coxed","coxes","coxib","coyau","coyed","coyer","coypu","cozed","cozen","cozes","cozey","cozie","craal","crabs","crags","craic","craig","crake","crame","crams","crans","crape","craps","crapy","crare","craws","crays","creds","creel","crees","crems","crena","creps","crepy","crewe","crews","crias","cribs","cries","crims","crine","crios","cripe","crips","crise","crith","crits","croci","crocs","croft","crogs","cromb","crome","cronk","crons","crool","croon","crops","crore","crost","crout","crows","croze","cruck","crudo","cruds","crudy","crues","cruet","cruft","crunk","cruor","crura","cruse","crusy","cruve","crwth","cryer","ctene","cubby","cubeb","cubed","cuber","cubes","cubit","cuddy","cuffo","cuffs","cuifs","cuing","cuish","cuits","cukes","culch","culet","culex","culls","cully","culms","culpa","culti","cults","culty","cumec","cundy","cunei","cunit","cunts","cupel","cupid","cuppa","cuppy","curat","curbs","curch","curds","curdy","cured","curer","cures","curet","curfs","curia","curie","curli","curls","curns","curny","currs","cursi","curst","cusec","cushy","cusks","cusps","cuspy","cusso","cusum","cutch","cuter","cutes","cutey","cutin","cutis","cutto","cutty","cutup","cuvee","cuzes","cwtch","cyano","cyans","cycad","cycas","cyclo","cyder","cylix","cymae","cymar","cymas","cymes","cymol","cysts","cytes","cyton","czars","daals","dabba","daces","dacha","dacks","dadah","dadas","dados","daffs","daffy","dagga","daggy","dagos","dahls","daiko","daine","daint","daker","daled","dales","dalis","dalle","dalts","daman","damar","dames","damme","damns","damps","dampy","dancy","dangs","danio","danks","danny","dants","daraf","darbs","darcy","dared","darer","dares","darga","dargs","daric","daris","darks","darky","darns","darre","darts","darzi","dashi","dashy","datal","dated","dater","dates","datos","datto","daube","daubs","dauby","dauds","dault","daurs","dauts","daven","davit","dawah","dawds","dawed","dawen","dawks","dawns","dawts","dayan","daych","daynt","dazed","dazer","dazes","deads","deair","deals","deans","deare","dearn","dears","deary","deash","deave","deaws","deawy","debag","debby","debel","debes","debts","debud","debur","debus","debye","decad","decaf","decan","decko","decks","decos","dedal","deeds","deedy","deely","deems","deens","deeps","deere","deers","deets","deeve","deevs","defat","deffo","defis","defog","degas","degum","degus","deice","deids","deify","deils","deism","deist","deked","dekes","dekko","deled","deles","delfs","delft","delis","dells","delly","delos","delph","delts","deman","demes","demic","demit","demob","demoi","demos","dempt","denar","denay","dench","denes","denet","denis","dents","deoxy","derat","deray","dered","deres","derig","derma","derms","derns","derny","deros","derro","derry","derth","dervs","desex","deshi","desis","desks","desse","devas","devel","devis","devon","devos","devot","dewan","dewar","dewax","dewed","dexes","dexie","dhaba","dhaks","dhals","dhikr","dhobi","dhole","dholl","dhols","dhoti","dhows","dhuti","diact","dials","diane","diazo","dibbs","diced","dicer","dices","dicht","dicks","dicky","dicot","dicta","dicts","dicty","diddy","didie","didos","didst","diebs","diels","diene","diets","diffs","dight","dikas","diked","diker","dikes","dikey","dildo","dilli","dills","dimbo","dimer","dimes","dimps","dinar","dined","dines","dinge","dings","dinic","dinks","dinky","dinna","dinos","dints","diols","diota","dippy","dipso","diram","direr","dirke","dirks","dirls","dirts","disas","disci","discs","dishy","disks","disme","dital","ditas","dited","dites","ditsy","ditts","ditzy","divan","divas","dived","dives","divis","divna","divos","divot","divvy","diwan","dixie","dixit","diyas","dizen","djinn","djins","doabs","doats","dobby","dobes","dobie","dobla","dobra","dobro","docht","docks","docos","docus","doddy","dodos","doeks","doers","doest","doeth","doffs","dogan","doges","dogey","doggo","doggy","dogie","dohyo","doilt","doily","doits","dojos","dolce","dolci","doled","doles","dolia","dolls","dolma","dolor","dolos","dolts","domal","domed","domes","domic","donah","donas","donee","doner","donga","dongs","donko","donna","donne","donny","donsy","doobs","dooce","doody","dooks","doole","dools","dooly","dooms","doomy","doona","doorn","doors","doozy","dopas","doped","doper","dopes","dorad","dorba","dorbs","doree","dores","doric","doris","dorks","dorky","dorms","dormy","dorps","dorrs","dorsa","dorse","dorts","dorty","dosai","dosas","dosed","doseh","doser","doses","dosha","dotal","doted","doter","dotes","dotty","douar","douce","doucs","douks","doula","douma","doums","doups","doura","douse","douts","doved","doven","dover","doves","dovie","dowar","dowds","dowed","dower","dowie","dowle","dowls","dowly","downa","downs","dowps","dowse","dowts","doxed","doxes","doxie","doyen","doyly","dozed","dozer","dozes","drabs","drack","draco","draff","drags","drail","drams","drant","draps","drats","drave","draws","drays","drear","dreck","dreed","dreer","drees","dregs","dreks","drent","drere","drest","dreys","dribs","drice","dries","drily","drips","dript","droid","droil","droke","drole","drome","drony","droob","droog","drook","drops","dropt","drouk","drows","drubs","drugs","drums","drupe","druse","drusy","druxy","dryad","dryas","dsobo","dsomo","duads","duals","duans","duars","dubbo","ducal","ducat","duces","ducks","ducky","ducts","duddy","duded","dudes","duels","duets","duett","duffs","dufus","duing","duits","dukas","duked","dukes","dukka","dulce","dules","dulia","dulls","dulse","dumas","dumbo","dumbs","dumka","dumky","dumps","dunam","dunch","dunes","dungs","dungy","dunks","dunno","dunny","dunsh","dunts","duomi","duomo","duped","duper","dupes","duple","duply","duppy","dural","duras","dured","dures","durgy","durns","duroc","duros","duroy","durra","durrs","durry","durst","durum","durzi","dusks","dusts","duxes","dwaal","dwale","dwalm","dwams","dwang","dwaum","dweeb","dwile","dwine","dyads","dyers","dyked","dykes","dykey","dykon","dynel","dynes","dzhos","eagre","ealed","eales","eaned","eards","eared","earls","earns","earnt","earst","eased","easer","eases","easle","easts","eathe","eaved","eaves","ebbed","ebbet","ebons","ebook","ecads","eched","eches","echos","ecrus","edema","edged","edger","edges","edile","edits","educe","educt","eejit","eensy","eeven","eevns","effed","egads","egers","egest","eggar","egged","egger","egmas","ehing","eider","eidos","eigne","eiked","eikon","eilds","eisel","ejido","ekkas","elain","eland","elans","elchi","eldin","elemi","elfed","eliad","elint","elmen","eloge","elogy","eloin","elops","elpee","elsin","elute","elvan","elven","elver","elves","emacs","embar","embay","embog","embow","embox","embus","emeer","emend","emerg","emery","emeus","emics","emirs","emits","emmas","emmer","emmet","emmew","emmys","emoji","emong","emote","emove","empts","emule","emure","emyde","emyds","enarm","enate","ended","ender","endew","endue","enews","enfix","eniac","enlit","enmew","ennog","enoki","enols","enorm","enows","enrol","ensew","ensky","entia","enure","enurn","envoi","enzym","eorls","eosin","epact","epees","ephah","ephas","ephod","ephor","epics","epode","epopt","epris","eques","equid","erbia","erevs","ergon","ergos","ergot","erhus","erica","erick","erics","ering","erned","ernes","erose","erred","erses","eruct","erugo","eruvs","erven","ervil","escar","escot","esile","eskar","esker","esnes","esses","estoc","estop","estro","etage","etape","etats","etens","ethal","ethne","ethyl","etics","etnas","ettin","ettle","etuis","etwee","etyma","eughs","euked","eupad","euros","eusol","evens","evert","evets","evhoe","evils","evite","evohe","ewers","ewest","ewhow","ewked","exams","exeat","execs","exeem","exeme","exfil","exies","exine","exing","exits","exode","exome","exons","expat","expos","exude","exuls","exurb","eyass","eyers","eyots","eyras","eyres","eyrie","eyrir","ezine","fabby","faced","facer","faces","facia","facta","facts","faddy","faded","fader","fades","fadge","fados","faena","faery","faffs","faffy","faggy","fagin","fagot","faiks","fails","faine","fains","fairs","faked","faker","fakes","fakey","fakie","fakir","falaj","falls","famed","fames","fanal","fands","fanes","fanga","fango","fangs","fanks","fanon","fanos","fanum","faqir","farad","farci","farcy","fards","fared","farer","fares","farle","farls","farms","faros","farro","farse","farts","fasci","fasti","fasts","fated","fates","fatly","fatso","fatwa","faugh","fauld","fauns","faurd","fauts","fauve","favas","favel","faver","faves","favus","fawns","fawny","faxed","faxes","fayed","fayer","fayne","fayre","fazed","fazes","feals","feare","fears","feart","fease","feats","feaze","feces","fecht","fecit","fecks","fedex","feebs","feeds","feels","feens","feers","feese","feeze","fehme","feint","feist","felch","felid","fells","felly","felts","felty","femal","femes","femmy","fends","fendy","fenis","fenks","fenny","fents","feods","feoff","ferer","feres","feria","ferly","fermi","ferms","ferns","ferny","fesse","festa","fests","festy","fetas","feted","fetes","fetor","fetta","fetts","fetwa","feuar","feuds","feued","feyed","feyer","feyly","fezes","fezzy","fiars","fiats","fibro","fices","fiche","fichu","ficin","ficos","fides","fidge","fidos","fiefs","fient","fiere","fiers","fiest","fifed","fifer","fifes","fifis","figgy","figos","fiked","fikes","filar","filch","filed","files","filii","filks","fille","fillo","fills","filmi","films","filos","filum","finca","finds","fined","fines","finis","finks","finny","finos","fiord","fiqhs","fique","fired","firer","fires","firie","firks","firms","firns","firry","firth","fiscs","fisks","fists","fisty","fitch","fitly","fitna","fitte","fitts","fiver","fives","fixed","fixes","fixit","fjeld","flabs","flaff","flags","flaks","flamm","flams","flamy","flane","flans","flaps","flary","flats","flava","flawn","flaws","flawy","flaxy","flays","fleam","fleas","fleek","fleer","flees","flegs","fleme","fleur","flews","flexi","flexo","fleys","flics","flied","flies","flimp","flims","flips","flirs","flisk","flite","flits","flitt","flobs","flocs","floes","flogs","flong","flops","flors","flory","flosh","flota","flote","flows","flubs","flued","flues","fluey","fluky","flump","fluor","flurr","fluty","fluyt","flyby","flype","flyte","foals","foams","foehn","fogey","fogie","fogle","fogou","fohns","foids","foils","foins","folds","foley","folia","folic","folie","folks","folky","fomes","fonda","fonds","fondu","fones","fonly","fonts","foods","foody","fools","foots","footy","foram","forbs","forby","fordo","fords","forel","fores","forex","forks","forky","forme","forms","forts","forza","forze","fossa","fosse","fouat","fouds","fouer","fouet","foule","fouls","fount","fours","fouth","fovea","fowls","fowth","foxed","foxes","foxie","foyle","foyne","frabs","frack","fract","frags","fraim","franc","frape","fraps","frass","frate","frati","frats","fraus","frays","frees","freet","freit","fremd","frena","freon","frere","frets","fribs","frier","fries","frigs","frise","frist","frith","frits","fritt","frize","frizz","froes","frogs","frons","frore","frorn","frory","frosh","frows","frowy","frugs","frump","frush","frust","fryer","fubar","fubby","fubsy","fucks","fucus","fuddy","fudgy","fuels","fuero","fuffs","fuffy","fugal","fuggy","fugie","fugio","fugle","fugly","fugus","fujis","fulls","fumed","fumer","fumes","fumet","fundi","funds","fundy","fungo","fungs","funks","fural","furan","furca","furls","furol","furrs","furth","furze","furzy","fused","fusee","fusel","fuses","fusil","fusks","fusts","fusty","futon","fuzed","fuzee","fuzes","fuzil","fyces","fyked","fykes","fyles","fyrds","fytte","gabba","gabby","gable","gaddi","gades","gadge","gadid","gadis","gadje","gadjo","gadso","gaffs","gaged","gager","gages","gaids","gains","gairs","gaita","gaits","gaitt","gajos","galah","galas","galax","galea","galed","gales","galls","gally","galop","galut","galvo","gamas","gamay","gamba","gambe","gambo","gambs","gamed","games","gamey","gamic","gamin","gamme","gammy","gamps","ganch","gandy","ganef","ganev","gangs","ganja","ganof","gants","gaols","gaped","gaper","gapes","gapos","gappy","garbe","garbo","garbs","garda","gares","garis","garms","garni","garre","garth","garum","gases","gasps","gaspy","gasts","gatch","gated","gater","gates","gaths","gator","gauch","gaucy","gauds","gauje","gault","gaums","gaumy","gaups","gaurs","gauss","gauzy","gavot","gawcy","gawds","gawks","gawps","gawsy","gayal","gazal","gazar","gazed","gazes","gazon","gazoo","geals","geans","geare","gears","geats","gebur","gecks","geeks","geeps","geest","geist","geits","gelds","gelee","gelid","gelly","gelts","gemel","gemma","gemmy","gemot","genal","genas","genes","genet","genic","genii","genip","genny","genoa","genom","genro","gents","genty","genua","genus","geode","geoid","gerah","gerbe","geres","gerle","germs","germy","gerne","gesse","gesso","geste","gests","getas","getup","geums","geyan","geyer","ghast","ghats","ghaut","ghazi","ghees","ghest","ghyll","gibed","gibel","giber","gibes","gibli","gibus","gifts","gigas","gighe","gigot","gigue","gilas","gilds","gilet","gills","gilly","gilpy","gilts","gimel","gimme","gimps","gimpy","ginch","ginge","gings","ginks","ginny","ginzo","gipon","gippo","gippy","girds","girls","girns","giron","giros","girrs","girsh","girts","gismo","gisms","gists","gitch","gites","giust","gived","gives","gizmo","glace","glads","glady","glaik","glair","glams","glans","glary","glaum","glaur","glazy","gleba","glebe","gleby","glede","gleds","gleed","gleek","glees","gleet","gleis","glens","glent","gleys","glial","glias","glibs","gliff","glift","glike","glime","glims","glisk","glits","glitz","gloam","globi","globs","globy","glode","glogg","gloms","gloop","glops","glost","glout","glows","gloze","glued","gluer","glues","gluey","glugs","glume","glums","gluon","glute","gluts","gnarl","gnarr","gnars","gnats","gnawn","gnaws","gnows","goads","goafs","goals","goary","goats","goaty","goban","gobar","gobbi","gobbo","gobby","gobis","gobos","godet","godso","goels","goers","goest","goeth","goety","gofer","goffs","gogga","gogos","goier","gojis","golds","goldy","goles","golfs","golpe","golps","gombo","gomer","gompa","gonch","gonef","gongs","gonia","gonif","gonks","gonna","gonof","gonys","gonzo","gooby","goods","goofs","googs","gooks","gooky","goold","gools","gooly","goons","goony","goops","goopy","goors","goory","goosy","gopak","gopik","goral","goras","gored","gores","goris","gorms","gormy","gorps","gorse","gorsy","gosht","gosse","gotch","goths","gothy","gotta","gouch","gouks","goura","gouts","gouty","gowan","gowds","gowfs","gowks","gowls","gowns","goxes","goyim","goyle","graal","grabs","grads","graff","graip","grama","grame","gramp","grams","grana","grans","grapy","gravs","grays","grebe","grebo","grece","greek","grees","grege","grego","grein","grens","grese","greve","grews","greys","grice","gride","grids","griff","grift","grigs","grike","grins","griot","grips","gript","gripy","grise","grist","grisy","grith","grits","grize","groat","grody","grogs","groks","groma","grone","groof","grosz","grots","grouf","grovy","grows","grrls","grrrl","grubs","grued","grues","grufe","grume","grump","grund","gryce","gryde","gryke","grype","grypt","guaco","guana","guano","guans","guars","gucks","gucky","gudes","guffs","gugas","guids","guimp","guiro","gulag","gular","gulas","gules","gulet","gulfs","gulfy","gulls","gulph","gulps","gulpy","gumma","gummi","gumps","gundy","gunge","gungy","gunks","gunky","gunny","guqin","gurdy","gurge","gurls","gurly","gurns","gurry","gursh","gurus","gushy","gusla","gusle","gusli","gussy","gusts","gutsy","gutta","gutty","guyed","guyle","guyot","guyse","gwine","gyals","gyans","gybed","gybes","gyeld","gymps","gynae","gynie","gynny","gynos","gyoza","gypos","gyppo","gyppy","gyral","gyred","gyres","gyron","gyros","gyrus","gytes","gyved","gyves","haafs","haars","hable","habus","hacek","hacks","hadal","haded","hades","hadji","hadst","haems","haets","haffs","hafiz","hafts","haggs","hahas","haick","haika","haiks","haiku","hails","haily","hains","haint","hairs","haith","hajes","hajis","hajji","hakam","hakas","hakea","hakes","hakim","hakus","halal","haled","haler","hales","halfa","halfs","halid","hallo","halls","halma","halms","halon","halos","halse","halts","halva","halwa","hamal","hamba","hamed","hames","hammy","hamza","hanap","hance","hanch","hands","hangi","hangs","hanks","hanky","hansa","hanse","hants","haole","haoma","hapax","haply","happi","hapus","haram","hards","hared","hares","harim","harks","harls","harms","harns","haros","harps","harts","hashy","hasks","hasps","hasta","hated","hates","hatha","hauds","haufs","haugh","hauld","haulm","hauls","hault","hauns","hause","haver","haves","hawed","hawks","hawms","hawse","hayed","hayer","hayey","hayle","hazan","hazed","hazer","hazes","heads","heald","heals","heame","heaps","heapy","heare","hears","heast","heats","heben","hebes","hecht","hecks","heder","hedgy","heeds","heedy","heels","heeze","hefte","hefts","heids","heigh","heils","heirs","hejab","hejra","heled","heles","helio","hells","helms","helos","helot","helps","helve","hemal","hemes","hemic","hemin","hemps","hempy","hench","hends","henge","henna","henny","henry","hents","hepar","herbs","herby","herds","heres","herls","herma","herms","herns","heros","herry","herse","hertz","herye","hesps","hests","hetes","heths","heuch","heugh","hevea","hewed","hewer","hewgh","hexad","hexed","hexer","hexes","hexyl","heyed","hiant","hicks","hided","hider","hides","hiems","highs","hight","hijab","hijra","hiked","hiker","hikes","hikoi","hilar","hilch","hillo","hills","hilts","hilum","hilus","himbo","hinau","hinds","hings","hinky","hinny","hints","hiois","hiply","hired","hiree","hirer","hires","hissy","hists","hithe","hived","hiver","hives","hizen","hoaed","hoagy","hoars","hoary","hoast","hobos","hocks","hocus","hodad","hodja","hoers","hogan","hogen","hoggs","hoghs","hohed","hoick","hoied","hoiks","hoing","hoise","hokas","hoked","hokes","hokey","hokis","hokku","hokum","holds","holed","holes","holey","holks","holla","hollo","holme","holms","holon","holos","holts","homas","homed","homes","homey","homie","homme","homos","honan","honda","honds","honed","honer","hones","hongi","hongs","honks","honky","hooch","hoods","hoody","hooey","hoofs","hooka","hooks","hooky","hooly","hoons","hoops","hoord","hoors","hoosh","hoots","hooty","hoove","hopak","hoped","hoper","hopes","hoppy","horah","horal","horas","horis","horks","horme","horns","horst","horsy","hosed","hosel","hosen","hoser","hoses","hosey","hosta","hosts","hotch","hoten","hotty","houff","houfs","hough","houri","hours","houts","hovea","hoved","hoven","hoves","howbe","howes","howff","howfs","howks","howls","howre","howso","hoxed","hoxes","hoyas","hoyed","hoyle","hubby","hucks","hudna","hudud","huers","huffs","huffy","huger","huggy","huhus","huias","hulas","hules","hulks","hulky","hullo","hulls","hully","humas","humfs","humic","humps","humpy","hunks","hunts","hurds","hurls","hurly","hurra","hurst","hurts","hushy","husks","husos","hutia","huzza","huzzy","hwyls","hydra","hyens","hygge","hying","hykes","hylas","hyleg","hyles","hylic","hymns","hynde","hyoid","hyped","hypes","hypha","hyphy","hypos","hyrax","hyson","hythe","iambi","iambs","ibrik","icers","iched","iches","ichor","icier","icker","ickle","icons","ictal","ictic","ictus","idant","ideas","idees","ident","idled","idles","idola","idols","idyls","iftar","igapo","igged","iglus","ihram","ikans","ikats","ikons","ileac","ileal","ileum","ileus","iliad","ilial","ilium","iller","illth","imago","imams","imari","imaum","imbar","imbed","imide","imido","imids","imine","imino","immew","immit","immix","imped","impis","impot","impro","imshi","imshy","inapt","inarm","inbye","incel","incle","incog","incus","incut","indew","india","indie","indol","indow","indri","indue","inerm","infix","infos","infra","ingan","ingle","inion","inked","inker","inkle","inned","innit","inorb","inrun","inset","inspo","intel","intil","intis","intra","inula","inure","inurn","inust","invar","inwit","iodic","iodid","iodin","iotas","ippon","irade","irids","iring","irked","iroko","irone","irons","isbas","ishes","isled","isles","isnae","issei","istle","items","ither","ivied","ivies","ixias","ixnay","ixora","ixtle","izard","izars","izzat","jaaps","jabot","jacal","jacks","jacky","jaded","jades","jafas","jaffa","jagas","jager","jaggs","jaggy","jagir","jagra","jails","jaker","jakes","jakey","jalap","jalop","jambe","jambo","jambs","jambu","james","jammy","jamon","janes","janns","janny","janty","japan","japed","japer","japes","jarks","jarls","jarps","jarta","jarul","jasey","jaspe","jasps","jatos","jauks","jaups","javas","javel","jawan","jawed","jaxie","jeans","jeats","jebel","jedis","jeels","jeely","jeeps","jeers","jeeze","jefes","jeffs","jehad","jehus","jelab","jello","jells","jembe","jemmy","jenny","jeons","jerid","jerks","jerry","jesse","jests","jesus","jetes","jeton","jeune","jewed","jewie","jhala","jiaos","jibba","jibbs","jibed","jiber","jibes","jiffs","jiggy","jigot","jihad","jills","jilts","jimmy","jimpy","jingo","jinks","jinne","jinni","jinns","jirds","jirga","jirre","jisms","jived","jiver","jives","jivey","jnana","jobed","jobes","jocko","jocks","jocky","jocos","jodel","joeys","johns","joins","joked","jokes","jokey","jokol","joled","joles","jolls","jolts","jolty","jomon","jomos","jones","jongs","jonty","jooks","joram","jorum","jotas","jotty","jotun","joual","jougs","jouks","joule","jours","jowar","jowed","jowls","jowly","joyed","jubas","jubes","jucos","judas","judgy","judos","jugal","jugum","jujus","juked","jukes","jukus","julep","jumar","jumby","jumps","junco","junks","junky","jupes","jupon","jural","jurat","jurel","jures","justs","jutes","jutty","juves","juvie","kaama","kabab","kabar","kabob","kacha","kacks","kadai","kades","kadis","kafir","kagos","kagus","kahal","kaiak","kaids","kaies","kaifs","kaika","kaiks","kails","kaims","kaing","kains","kakas","kakis","kalam","kales","kalif","kalis","kalpa","kamas","kames","kamik","kamis","kamme","kanae","kanas","kandy","kaneh","kanes","kanga","kangs","kanji","kants","kanzu","kaons","kapas","kaphs","kapok","kapow","kapus","kaput","karas","karat","karks","karns","karoo","karos","karri","karst","karsy","karts","karzy","kasha","kasme","katal","katas","katis","katti","kaugh","kauri","kauru","kaury","kaval","kavas","kawas","kawau","kawed","kayle","kayos","kazis","kazoo","kbars","kebar","kebob","kecks","kedge","kedgy","keech","keefs","keeks","keels","keema","keeno","keens","keeps","keets","keeve","kefir","kehua","keirs","kelep","kelim","kells","kelly","kelps","kelpy","kelts","kelty","kembo","kembs","kemps","kempt","kempy","kenaf","kench","kendo","kenos","kente","kents","kepis","kerbs","kerel","kerfs","kerky","kerma","kerne","kerns","keros","kerry","kerve","kesar","kests","ketas","ketch","ketes","ketol","kevel","kevil","kexes","keyed","keyer","khadi","khafs","khans","khaph","khats","khaya","khazi","kheda","kheth","khets","khoja","khors","khoum","khuds","kiaat","kiack","kiang","kibbe","kibbi","kibei","kibes","kibla","kicks","kicky","kiddo","kiddy","kidel","kidge","kiefs","kiers","kieve","kievs","kight","kikes","kikoi","kiley","kilim","kills","kilns","kilos","kilps","kilts","kilty","kimbo","kinas","kinda","kinds","kindy","kines","kings","kinin","kinks","kinos","kiore","kipes","kippa","kipps","kirby","kirks","kirns","kirri","kisan","kissy","kists","kited","kiter","kites","kithe","kiths","kitul","kivas","kiwis","klang","klaps","klett","klick","klieg","kliks","klong","kloof","kluge","klutz","knags","knaps","knarl","knars","knaur","knawe","knees","knell","knish","knits","knive","knobs","knops","knosp","knots","knout","knowe","knows","knubs","knurl","knurr","knurs","knuts","koans","koaps","koban","kobos","koels","koffs","kofta","kogal","kohas","kohen","kohls","koine","kojis","kokam","kokas","koker","kokra","kokum","kolas","kolos","kombu","konbu","kondo","konks","kooks","kooky","koori","kopek","kophs","kopje","koppa","korai","koras","korat","kores","korma","koros","korun","korus","koses","kotch","kotos","kotow","koura","kraal","krabs","kraft","krais","krait","krang","krans","kranz","kraut","krays","kreep","kreng","krewe","krona","krone","kroon","krubi","krunk","ksars","kubie","kudos","kudus","kudzu","kufis","kugel","kuias","kukri","kukus","kulak","kulan","kulas","kulfi","kumis","kumys","kuris","kurre","kurta","kurus","kusso","kutas","kutch","kutis","kutus","kuzus","kvass","kvell","kwela","kyack","kyaks","kyang","kyars","kyats","kybos","kydst","kyles","kylie","kylin","kylix","kyloe","kynde","kynds","kypes","kyrie","kytes","kythe","laari","labda","labia","labis","labra","laced","lacer","laces","lacet","lacey","lacks","laddy","laded","lader","lades","laers","laevo","lagan","lahal","lahar","laich","laics","laids","laigh","laika","laiks","laird","lairs","lairy","laith","laity","laked","laker","lakes","lakhs","lakin","laksa","laldy","lalls","lamas","lambs","lamby","lamed","lamer","lames","lamia","lammy","lamps","lanai","lanas","lanch","lande","lands","lanes","lanks","lants","lapin","lapis","lapje","larch","lards","lardy","laree","lares","largo","laris","larks","larky","larns","larnt","larum","lased","laser","lases","lassi","lassu","lassy","lasts","latah","lated","laten","latex","lathi","laths","lathy","latke","latus","lauan","lauch","lauds","laufs","laund","laura","laval","lavas","laved","laver","laves","lavra","lavvy","lawed","lawer","lawin","lawks","lawns","lawny","laxed","laxer","laxes","laxly","layed","layin","layup","lazar","lazed","lazes","lazos","lazzi","lazzo","leads","leady","leafs","leaks","leams","leans","leany","leaps","leare","lears","leary","leats","leavy","leaze","leben","leccy","ledes","ledgy","ledum","leear","leeks","leeps","leers","leese","leets","leeze","lefte","lefts","leger","leges","legge","leggo","legit","lehrs","lehua","leirs","leish","leman","lemed","lemel","lemes","lemma","lemme","lends","lenes","lengs","lenis","lenos","lense","lenti","lento","leone","lepid","lepra","lepta","lered","leres","lerps","lesbo","leses","lests","letch","lethe","letup","leuch","leuco","leuds","leugh","levas","levee","leves","levin","levis","lewis","lexes","lexis","lezes","lezza","lezzy","liana","liane","liang","liard","liars","liart","liber","libra","libri","lichi","licht","licit","licks","lidar","lidos","liefs","liens","liers","lieus","lieve","lifer","lifes","lifts","ligan","liger","ligge","ligne","liked","liker","likes","likin","lills","lilos","lilts","liman","limas","limax","limba","limbi","limbs","limby","limed","limen","limes","limey","limma","limns","limos","limpa","limps","linac","linch","linds","lindy","lined","lines","liney","linga","lings","lingy","linin","links","linky","linns","linny","linos","lints","linty","linum","linux","lions","lipas","lipes","lipin","lipos","lippy","liras","lirks","lirot","lisks","lisle","lisps","lists","litai","litas","lited","liter","lites","litho","liths","litre","lived","liven","lives","livor","livre","llano","loach","loads","loafs","loams","loans","loast","loave","lobar","lobed","lobes","lobos","lobus","loche","lochs","locie","locis","locks","locos","locum","loden","lodes","loess","lofts","logan","loges","loggy","logia","logie","logoi","logon","logos","lohan","loids","loins","loipe","loirs","lokes","lolls","lolly","lolog","lomas","lomed","lomes","loner","longa","longe","longs","looby","looed","looey","loofa","loofs","looie","looks","looky","looms","loons","loony","loops","loord","loots","loped","loper","lopes","loppy","loral","loran","lords","lordy","lorel","lores","loric","loris","losed","losel","losen","loses","lossy","lotah","lotas","lotes","lotic","lotos","lotsa","lotta","lotte","lotto","lotus","loued","lough","louie","louis","louma","lound","louns","loupe","loups","loure","lours","loury","louts","lovat","loved","loves","lovey","lovie","lowan","lowed","lowes","lownd","lowne","lowns","lowps","lowry","lowse","lowts","loxed","loxes","lozen","luach","luaus","lubed","lubes","lubra","luces","lucks","lucre","ludes","ludic","ludos","luffa","luffs","luged","luger","luges","lulls","lulus","lumas","lumbi","lumme","lummy","lumps","lunas","lunes","lunet","lungi","lungs","lunks","lunts","lupin","lured","lurer","lures","lurex","lurgi","lurgy","lurks","lurry","lurve","luser","lushy","lusks","lusts","lusus","lutea","luted","luter","lutes","luvvy","luxed","luxer","luxes","lweis","lyams","lyard","lyart","lyase","lycea","lycee","lycra","lymes","lynes","lyres","lysed","lyses","lysin","lysis","lysol","lyssa","lyted","lytes","lythe","lytic","lytta","maaed","maare","maars","mabes","macas","maced","macer","maces","mache","machi","machs","macks","macle","macon","madge","madid","madre","maerl","mafic","mages","maggs","magot","magus","mahoe","mahua","mahwa","maids","maiko","maiks","maile","maill","mails","maims","mains","maire","mairs","maise","maist","makar","makes","makis","makos","malam","malar","malas","malax","males","malic","malik","malis","malls","malms","malmy","malts","malty","malus","malva","malwa","mamas","mamba","mamee","mamey","mamie","manas","manat","mandi","maneb","maned","maneh","manes","manet","mangs","manis","manky","manna","manos","manse","manta","manto","manty","manul","manus","mapau","maqui","marae","marah","maras","marcs","mardy","mares","marge","margs","maria","marid","marka","marks","marle","marls","marly","marms","maron","maror","marra","marri","marse","marts","marvy","masas","mased","maser","mases","mashy","masks","massa","massy","masts","masty","masus","matai","mated","mater","mates","maths","matin","matlo","matte","matts","matza","matzo","mauby","mauds","mauls","maund","mauri","mausy","mauts","mauzy","maven","mavie","mavin","mavis","mawed","mawks","mawky","mawns","mawrs","maxed","maxes","maxis","mayan","mayas","mayed","mayos","mayst","mazed","mazer","mazes","mazey","mazut","mbira","meads","meals","meane","means","meany","meare","mease","meath","meats","mebos","mechs","mecks","medii","medle","meeds","meers","meets","meffs","meins","meint","meiny","meith","mekka","melas","melba","melds","melic","melik","mells","melts","melty","memes","memos","menad","mends","mened","menes","menge","mengs","mensa","mense","mensh","menta","mento","menus","meous","meows","merch","mercs","merde","mered","merel","merer","meres","meril","meris","merks","merle","merls","merse","mesal","mesas","mesel","meses","meshy","mesic","mesne","meson","messy","mesto","meted","metes","metho","meths","metic","metif","metis","metol","metre","meuse","meved","meves","mewed","mewls","meynt","mezes","mezze","mezzo","mhorr","miaou","miaow","miasm","miaul","micas","miche","micht","micks","micky","micos","micra","middy","midgy","midis","miens","mieve","miffs","miffy","mifty","miggs","mihas","mihis","miked","mikes","mikra","mikva","milch","milds","miler","miles","milfs","milia","milko","milks","mille","mills","milor","milos","milpa","milts","milty","miltz","mimed","mimeo","mimer","mimes","mimsy","minae","minar","minas","mincy","minds","mined","mines","minge","mings","mingy","minis","minke","minks","minny","minos","mints","mired","mires","mirex","mirid","mirin","mirks","mirky","mirly","miros","mirvs","mirza","misch","misdo","mises","misgo","misos","missa","mists","misty","mitch","miter","mites","mitis","mitre","mitts","mixed","mixen","mixer","mixes","mixte","mixup","mizen","mizzy","mneme","moans","moats","mobby","mobes","mobey","mobie","moble","mochi","mochs","mochy","mocks","moder","modes","modge","modii","modus","moers","mofos","moggy","mohel","mohos","mohrs","mohua","mohur","moile","moils","moira","moire","moits","mojos","mokes","mokis","mokos","molal","molas","molds","moled","moles","molla","molls","molly","molto","molts","molys","momes","momma","mommy","momus","monad","monal","monas","monde","mondo","moner","mongo","mongs","monic","monie","monks","monos","monte","monty","moobs","mooch","moods","mooed","mooks","moola","mooli","mools","mooly","moong","moons","moony","moops","moors","moory","moots","moove","moped","moper","mopes","mopey","moppy","mopsy","mopus","morae","moras","morat","moray","morel","mores","moria","morne","morns","morra","morro","morse","morts","mosed","moses","mosey","mosks","mosso","moste","mosts","moted","moten","motes","motet","motey","moths","mothy","motis","motte","motts","motty","motus","motza","mouch","moues","mould","mouls","moups","moust","mousy","moved","moves","mowas","mowed","mowra","moxas","moxie","moyas","moyle","moyls","mozed","mozes","mozos","mpret","mucho","mucic","mucid","mucin","mucks","mucor","mucro","mudge","mudir","mudra","muffs","mufti","mugga","muggs","muggy","muhly","muids","muils","muirs","muist","mujik","mulct","muled","mules","muley","mulga","mulie","mulla","mulls","mulse","mulsh","mumms","mumps","mumsy","mumus","munga","munge","mungo","mungs","munis","munts","muntu","muons","muras","mured","mures","murex","murid","murks","murls","murly","murra","murre","murri","murrs","murry","murti","murva","musar","musca","mused","muser","muses","muset","musha","musit","musks","musos","musse","mussy","musth","musts","mutch","muted","muter","mutes","mutha","mutis","muton","mutts","muxed","muxes","muzak","muzzy","mvule","myall","mylar","mynah","mynas","myoid","myoma","myope","myops","myopy","mysid","mythi","myths","mythy","myxos","mzees","naams","naans","nabes","nabis","nabks","nabla","nabob","nache","nacho","nacre","nadas","naeve","naevi","naffs","nagas","naggy","nagor","nahal","naiad","naifs","naiks","nails","naira","nairu","naked","naker","nakfa","nalas","naled","nalla","named","namer","names","namma","namus","nanas","nance","nancy","nandu","nanna","nanos","nanua","napas","naped","napes","napoo","nappa","nappe","nappy","naras","narco","narcs","nards","nares","naric","naris","narks","narky","narre","nashi","natch","nates","natis","natty","nauch","naunt","navar","naves","navew","navvy","nawab","nazes","nazir","nazis","nduja","neafe","neals","neaps","nears","neath","neats","nebek","nebel","necks","neddy","needs","neeld","neele","neemb","neems","neeps","neese","neeze","negro","negus","neifs","neist","neive","nelis","nelly","nemas","nemns","nempt","nenes","neons","neper","nepit","neral","nerds","nerka","nerks","nerol","nerts","nertz","nervy","nests","netes","netop","netts","netty","neuks","neume","neums","nevel","neves","nevus","newbs","newed","newel","newie","newsy","newts","nexts","nexus","ngaio","ngana","ngati","ngoma","ngwee","nicad","nicht","nicks","nicol","nidal","nided","nides","nidor","nidus","niefs","nieve","nifes","niffs","niffy","nifty","niger","nighs","nihil","nikab","nikah","nikau","nills","nimbi","nimbs","nimps","niner","nines","ninon","nipas","nippy","niqab","nirls","nirly","nisei","nisse","nisus","niter","nites","nitid","niton","nitre","nitro","nitry","nitty","nival","nixed","nixer","nixes","nixie","nizam","nkosi","noahs","nobby","nocks","nodal","noddy","nodes","nodus","noels","noggs","nohow","noils","noily","noint","noirs","noles","nolls","nolos","nomas","nomen","nomes","nomic","nomoi","nomos","nonas","nonce","nones","nonet","nongs","nonis","nonny","nonyl","noobs","nooit","nooks","nooky","noons","noops","nopal","noria","noris","norks","norma","norms","nosed","noser","noses","notal","noted","noter","notes","notum","nould","noule","nouls","nouns","nouny","noups","novae","novas","novum","noway","nowed","nowls","nowts","nowty","noxal","noxes","noyau","noyed","noyes","nubby","nubia","nucha","nuddy","nuder","nudes","nudie","nudzh","nuffs","nugae","nuked","nukes","nulla","nulls","numbs","numen","nummy","nunny","nurds","nurdy","nurls","nurrs","nutso","nutsy","nyaff","nyala","nying","nyssa","oaked","oaker","oakum","oared","oases","oasis","oasts","oaten","oater","oaths","oaves","obang","obeah","obeli","obeys","obias","obied","obiit","obits","objet","oboes","obole","oboli","obols","occam","ocher","oches","ochre","ochry","ocker","ocrea","octad","octan","octas","octyl","oculi","odahs","odals","odeon","odeum","odism","odist","odium","odors","odour","odyle","odyls","ofays","offed","offie","oflag","ofter","ogams","ogeed","ogees","oggin","ogham","ogive","ogled","ogler","ogles","ogmic","ogres","ohias","ohing","ohmic","ohone","oidia","oiled","oiler","oinks","oints","ojime","okapi","okays","okehs","okras","oktas","oldie","oleic","olein","olent","oleos","oleum","olios","ollas","ollav","oller","ollie","ology","olpae","olpes","omasa","omber","ombus","omens","omers","omits","omlah","omovs","omrah","oncer","onces","oncet","oncus","onely","oners","onery","onium","onkus","onlay","onned","ontic","oobit","oohed","oomph","oonts","ooped","oorie","ooses","ootid","oozed","oozes","opahs","opals","opens","opepe","oping","oppos","opsin","opted","opter","orach","oracy","orals","orang","orant","orate","orbed","orcas","orcin","ordos","oread","orfes","orgia","orgic","orgue","oribi","oriel","orixa","orles","orlon","orlop","ormer","ornis","orpin","orris","ortho","orval","orzos","oscar","oshac","osier","osmic","osmol","ossia","ostia","otaku","otary","ottar","ottos","oubit","oucht","ouens","ouija","oulks","oumas","oundy","oupas","ouped","ouphe","ouphs","ourie","ousel","ousts","outby","outed","outre","outro","outta","ouzel","ouzos","ovals","ovels","ovens","overs","ovist","ovoli","ovolo","ovule","owche","owies","owled","owler","owlet","owned","owres","owrie","owsen","oxbow","oxers","oxeye","oxids","oxies","oxime","oxims","oxlip","oxter","oyers","ozeki","ozzie","paals","paans","pacas","paced","pacer","paces","pacey","pacha","packs","pacos","pacta","pacts","padis","padle","padma","padre","padri","paean","paedo","paeon","paged","pager","pages","pagle","pagod","pagri","paiks","pails","pains","paire","pairs","paisa","paise","pakka","palas","palay","palea","paled","pales","palet","palis","palki","palla","palls","pally","palms","palmy","palpi","palps","palsa","pampa","panax","pance","panda","pands","pandy","paned","panes","panga","pangs","panim","panko","panne","panni","panto","pants","panty","paoli","paolo","papas","papaw","papes","pappi","pappy","parae","paras","parch","pardi","pards","pardy","pared","paren","pareo","pares","pareu","parev","parge","pargo","paris","parki","parks","parky","parle","parly","parma","parol","parps","parra","parrs","parti","parts","parve","parvo","paseo","pases","pasha","pashm","paska","paspy","passe","pasts","pated","paten","pater","pates","paths","patin","patka","patly","patte","patus","pauas","pauls","pavan","paved","paven","paver","paves","pavid","pavin","pavis","pawas","pawaw","pawed","pawer","pawks","pawky","pawls","pawns","paxes","payed","payor","paysd","peage","peags","peaks","peaky","peals","peans","peare","pears","peart","pease","peats","peaty","peavy","peaze","pebas","pechs","pecke","pecks","pecky","pedes","pedis","pedro","peece","peeks","peels","peens","peeoy","peepe","peeps","peers","peery","peeve","peggy","peghs","peins","peise","peize","pekan","pekes","pekin","pekoe","pelas","pelau","peles","pelfs","pells","pelma","pelon","pelta","pelts","pends","pendu","pened","penes","pengo","penie","penis","penks","penna","penni","pents","peons","peony","pepla","pepos","peppy","pepsi","perai","perce","percs","perdu","perdy","perea","peres","peris","perks","perms","perns","perog","perps","perry","perse","perst","perts","perve","pervo","pervs","pervy","pesos","pests","pesty","petar","peter","petit","petre","petri","petti","petto","pewee","pewit","peyse","phage","phang","phare","pharm","pheer","phene","pheon","phese","phial","phish","phizz","phlox","phoca","phono","phons","phots","phpht","phuts","phyla","phyle","piani","pians","pibal","pical","picas","piccy","picks","picot","picra","picul","piend","piers","piert","pieta","piets","piezo","pight","pigmy","piing","pikas","pikau","piked","piker","pikes","pikey","pikis","pikul","pilae","pilaf","pilao","pilar","pilau","pilaw","pilch","pilea","piled","pilei","piler","piles","pilis","pills","pilow","pilum","pilus","pimas","pimps","pinas","pined","pines","pingo","pings","pinko","pinks","pinna","pinny","pinon","pinot","pinta","pints","pinup","pions","piony","pious","pioye","pioys","pipal","pipas","piped","pipes","pipet","pipis","pipit","pippy","pipul","pirai","pirls","pirns","pirog","pisco","pises","pisky","pisos","pissy","piste","pitas","piths","piton","pitot","pitta","piums","pixes","pized","pizes","plaas","plack","plage","plans","plaps","plash","plasm","plast","plats","platt","platy","playa","plays","pleas","plebe","plebs","plena","pleon","plesh","plews","plica","plies","plims","pling","plink","ploat","plods","plong","plonk","plook","plops","plots","plotz","plouk","plows","ploye","ploys","plues","pluff","plugs","plums","plumy","pluot","pluto","plyer","poach","poaka","poake","poboy","pocks","pocky","podal","poddy","podex","podge","podgy","podia","poems","poeps","poets","pogey","pogge","pogos","pohed","poilu","poind","pokal","poked","pokes","pokey","pokie","poled","poler","poles","poley","polio","polis","polje","polks","polls","polly","polos","polts","polys","pombe","pomes","pommy","pomos","pomps","ponce","poncy","ponds","pones","poney","ponga","pongo","pongs","pongy","ponks","ponts","ponty","ponzu","poods","pooed","poofs","poofy","poohs","pooja","pooka","pooks","pools","poons","poops","poopy","poori","poort","poots","poove","poovy","popes","poppa","popsy","porae","poral","pored","porer","pores","porge","porgy","porin","porks","porky","porno","porns","porny","porta","ports","porty","posed","poses","posey","posho","posts","potae","potch","poted","potes","potin","potoo","potsy","potto","potts","potty","pouff","poufs","pouke","pouks","poule","poulp","poult","poupe","poupt","pours","pouts","powan","powin","pownd","powns","powny","powre","poxed","poxes","poynt","poyou","poyse","pozzy","praam","prads","prahu","prams","prana","prang","praos","prase","prate","prats","pratt","praty","praus","prays","predy","preed","prees","preif","prems","premy","prent","preon","preop","preps","presa","prese","prest","preve","prexy","preys","prial","pricy","prief","prier","pries","prigs","prill","prima","primi","primp","prims","primy","prink","prion","prise","priss","proas","probs","prods","proem","profs","progs","proin","proke","prole","proll","promo","proms","pronk","props","prore","proso","pross","prost","prosy","proto","proul","prows","proyn","prunt","pruta","pryer","pryse","pseud","pshaw","psion","psoae","psoai","psoas","psora","psych","psyop","pubco","pubes","pubis","pucan","pucer","puces","pucka","pucks","puddy","pudge","pudic","pudor","pudsy","pudus","puers","puffa","puffs","puggy","pugil","puhas","pujah","pujas","pukas","puked","puker","pukes","pukey","pukka","pukus","pulao","pulas","puled","puler","pules","pulik","pulis","pulka","pulks","pulli","pulls","pully","pulmo","pulps","pulus","pumas","pumie","pumps","punas","punce","punga","pungs","punji","punka","punks","punky","punny","punto","punts","punty","pupae","pupas","pupus","purda","pured","pures","purin","puris","purls","purpy","purrs","pursy","purty","puses","pusle","pussy","putid","puton","putti","putto","putts","puzel","pwned","pyats","pyets","pygal","pyins","pylon","pyned","pynes","pyoid","pyots","pyral","pyran","pyres","pyrex","pyric","pyros","pyxed","pyxes","pyxie","pyxis","pzazz","qadis","qaids","qajaq","qanat","qapik","qibla","qophs","qorma","quads","quaff","quags","quair","quais","quaky","quale","quant","quare","quass","quate","quats","quayd","quays","qubit","quean","queme","quena","quern","queyn","queys","quich","quids","quiff","quims","quina","quine","quino","quins","quint","quipo","quips","quipu","quire","quirt","quist","quits","quoad","quods","quoif","quoin","quoit","quoll","quonk","quops","qursh","quyte","rabat","rabic","rabis","raced","races","rache","racks","racon","radge","radix","radon","raffs","rafts","ragas","ragde","raged","ragee","rager","rages","ragga","raggs","raggy","ragis","ragus","rahed","rahui","raias","raids","raiks","raile","rails","raine","rains","raird","raita","raits","rajas","rajes","raked","rakee","raker","rakes","rakia","rakis","rakus","rales","ramal","ramee","ramet","ramie","ramin","ramis","rammy","ramps","ramus","ranas","rance","rands","ranee","ranga","rangi","rangs","rangy","ranid","ranis","ranke","ranks","rants","raped","raper","rapes","raphe","rappe","rared","raree","rares","rarks","rased","raser","rases","rasps","rasse","rasta","ratal","ratan","ratas","ratch","rated","ratel","rater","rates","ratha","rathe","raths","ratoo","ratos","ratus","rauns","raupo","raved","ravel","raver","raves","ravey","ravin","rawer","rawin","rawly","rawns","raxed","raxes","rayah","rayas","rayed","rayle","rayne","razed","razee","razer","razes","razoo","readd","reads","reais","reaks","realo","reals","reame","reams","reamy","reans","reaps","rears","reast","reata","reate","reave","rebbe","rebec","rebid","rebit","rebop","rebuy","recal","recce","recco","reccy","recit","recks","recon","recta","recti","recto","redan","redds","reddy","reded","redes","redia","redid","redip","redly","redon","redos","redox","redry","redub","redux","redye","reech","reede","reeds","reefs","reefy","reeks","reeky","reels","reens","reest","reeve","refed","refel","reffo","refis","refix","refly","refry","regar","reges","reggo","regie","regma","regna","regos","regur","rehem","reifs","reify","reiki","reiks","reink","reins","reird","reist","reive","rejig","rejon","reked","rekes","rekey","relet","relie","relit","rello","reman","remap","remen","remet","remex","remix","renay","rends","reney","renga","renig","renin","renne","renos","rente","rents","reoil","reorg","repeg","repin","repla","repos","repot","repps","repro","reran","rerig","resat","resaw","resay","resee","reses","resew","resid","resit","resod","resow","resto","rests","resty","resus","retag","retax","retem","retia","retie","retox","revet","revie","rewan","rewax","rewed","rewet","rewin","rewon","rewth","rexes","rezes","rheas","rheme","rheum","rhies","rhime","rhine","rhody","rhomb","rhone","rhumb","rhyne","rhyta","riads","rials","riant","riata","ribas","ribby","ribes","riced","ricer","rices","ricey","richt","ricin","ricks","rides","ridgy","ridic","riels","riems","rieve","rifer","riffs","rifte","rifts","rifty","riggs","rigol","riled","riles","riley","rille","rills","rimae","rimed","rimer","rimes","rimus","rinds","rindy","rines","rings","rinks","rioja","riots","riped","ripes","ripps","rises","rishi","risks","risps","risus","rites","ritts","ritzy","rivas","rived","rivel","riven","rives","riyal","rizas","roads","roams","roans","roars","roary","roate","robed","robes","roble","rocks","roded","rodes","roguy","rohes","roids","roils","roily","roins","roist","rojak","rojis","roked","roker","rokes","rolag","roles","rolfs","rolls","romal","roman","romeo","romps","ronde","rondo","roneo","rones","ronin","ronne","ronte","ronts","roods","roofs","roofy","rooks","rooky","rooms","roons","roops","roopy","roosa","roose","roots","rooty","roped","roper","ropes","ropey","roque","roral","rores","roric","rorid","rorie","rorts","rorty","rosed","roses","roset","roshi","rosin","rosit","rosti","rosts","rotal","rotan","rotas","rotch","roted","rotes","rotis","rotls","roton","rotos","rotte","rouen","roues","roule","rouls","roums","roups","roupy","roust","routh","routs","roved","roven","roves","rowan","rowed","rowel","rowen","rowie","rowme","rownd","rowth","rowts","royne","royst","rozet","rozit","ruana","rubai","rubby","rubel","rubes","rubin","ruble","rubli","rubus","ruche","rucks","rudas","rudds","rudes","rudie","rudis","rueda","ruers","ruffe","ruffs","rugae","rugal","ruggy","ruing","ruins","rukhs","ruled","rules","rumal","rumbo","rumen","rumes","rumly","rummy","rumpo","rumps","rumpy","runch","runds","runed","runes","rungs","runic","runny","runts","runty","rupia","rurps","rurus","rusas","ruses","rushy","rusks","rusma","russe","rusts","ruths","rutin","rutty","ryals","rybat","ryked","rykes","rymme","rynds","ryots","ryper","saags","sabal","sabed","saber","sabes","sabha","sabin","sabir","sable","sabot","sabra","sabre","sacks","sacra","saddo","sades","sadhe","sadhu","sadis","sados","sadza","safed","safes","sagas","sager","sages","saggy","sagos","sagum","saheb","sahib","saice","saick","saics","saids","saiga","sails","saims","saine","sains","sairs","saist","saith","sajou","sakai","saker","sakes","sakia","sakis","sakti","salal","salat","salep","sales","salet","salic","salix","salle","salmi","salol","salop","salpa","salps","salse","salto","salts","salue","salut","saman","samas","samba","sambo","samek","samel","samen","sames","samey","samfu","sammy","sampi","samps","sands","saned","sanes","sanga","sangh","sango","sangs","sanko","sansa","santo","sants","saola","sapan","sapid","sapor","saran","sards","sared","saree","sarge","sargo","sarin","saris","sarks","sarky","sarod","saros","sarus","saser","sasin","sasse","satai","satay","sated","satem","sates","satis","sauba","sauch","saugh","sauls","sault","saunt","saury","sauts","saved","saver","saves","savey","savin","sawah","sawed","sawer","saxes","sayed","sayer","sayid","sayne","sayon","sayst","sazes","scabs","scads","scaff","scags","scail","scala","scall","scams","scand","scans","scapa","scape","scapi","scarp","scars","scart","scath","scats","scatt","scaud","scaup","scaur","scaws","sceat","scena","scend","schav","schmo","schul","schwa","sclim","scody","scogs","scoog","scoot","scopa","scops","scots","scoug","scoup","scowp","scows","scrab","scrae","scrag","scran","scrat","scraw","scray","scrim","scrip","scrob","scrod","scrog","scrow","scudi","scudo","scuds","scuff","scuft","scugs","sculk","scull","sculp","sculs","scums","scups","scurf","scurs","scuse","scuta","scute","scuts","scuzz","scyes","sdayn","sdein","seals","seame","seams","seamy","seans","seare","sears","sease","seats","seaze","sebum","secco","sechs","sects","seder","sedes","sedge","sedgy","sedum","seeds","seeks","seeld","seels","seely","seems","seeps","seepy","seers","sefer","segar","segni","segno","segol","segos","sehri","seifs","seils","seine","seirs","seise","seism","seity","seiza","sekos","sekts","selah","seles","selfs","sella","selle","sells","selva","semee","semes","semie","semis","senas","sends","senes","sengi","senna","senor","sensa","sensi","sente","senti","sents","senvy","senza","sepad","sepal","sepic","sepoy","septa","septs","serac","serai","seral","sered","serer","seres","serfs","serge","seric","serin","serks","seron","serow","serra","serre","serrs","serry","servo","sesey","sessa","setae","setal","seton","setts","sewan","sewar","sewed","sewel","sewen","sewin","sexed","sexer","sexes","sexto","sexts","seyen","shads","shags","shahs","shako","shakt","shalm","shaly","shama","shams","shand","shans","shaps","sharn","shash","shaul","shawm","shawn","shaws","shaya","shays","shchi","sheaf","sheal","sheas","sheds","sheel","shend","shent","sheol","sherd","shere","shero","shets","sheva","shewn","shews","shiai","shiel","shier","shies","shill","shily","shims","shins","ships","shirr","shirs","shish","shiso","shist","shite","shits","shiur","shiva","shive","shivs","shlep","shlub","shmek","shmoe","shoat","shoed","shoer","shoes","shogi","shogs","shoji","shojo","shola","shool","shoon","shoos","shope","shops","shorl","shote","shots","shott","showd","shows","shoyu","shred","shris","shrow","shtik","shtum","shtup","shule","shuln","shuls","shuns","shura","shute","shuts","shwas","shyer","sials","sibbs","sibyl","sices","sicht","sicko","sicks","sicky","sidas","sided","sider","sides","sidha","sidhe","sidle","sield","siens","sient","sieth","sieur","sifts","sighs","sigil","sigla","signa","signs","sijos","sikas","siker","sikes","silds","siled","silen","siler","siles","silex","silks","sills","silos","silts","silty","silva","simar","simas","simba","simis","simps","simul","sinds","sined","sines","sings","sinhs","sinks","sinky","sinus","siped","sipes","sippy","sired","siree","sires","sirih","siris","siroc","sirra","sirup","sisal","sises","sista","sists","sitar","sited","sites","sithe","sitka","situp","situs","siver","sixer","sixes","sixmo","sixte","sizar","sized","sizel","sizer","sizes","skags","skail","skald","skank","skart","skats","skatt","skaws","skean","skear","skeds","skeed","skeef","skeen","skeer","skees","skeet","skegg","skegs","skein","skelf","skell","skelm","skelp","skene","skens","skeos","skeps","skers","skets","skews","skids","skied","skies","skiey","skimo","skims","skink","skins","skint","skios","skips","skirl","skirr","skite","skits","skive","skivy","sklim","skoal","skody","skoff","skogs","skols","skool","skort","skosh","skran","skrik","skuas","skugs","skyed","skyer","skyey","skyfs","skyre","skyrs","skyte","slabs","slade","slaes","slags","slaid","slake","slams","slane","slank","slaps","slart","slats","slaty","slaws","slays","slebs","sleds","sleer","slews","sleys","slier","slily","slims","slipe","slips","slipt","slish","slits","slive","sloan","slobs","sloes","slogs","sloid","slojd","slomo","sloom","sloot","slops","slopy","slorm","slots","slove","slows","sloyd","slubb","slubs","slued","slues","sluff","slugs","sluit","slums","slurb","slurs","sluse","sluts","slyer","slype","smaak","smaik","smalm","smalt","smarm","smaze","smeek","smees","smeik","smeke","smerk","smews","smirr","smirs","smits","smogs","smoko","smolt","smoor","smoot","smore","smorg","smout","smowt","smugs","smurs","smush","smuts","snabs","snafu","snags","snaps","snarf","snark","snars","snary","snash","snath","snaws","snead","sneap","snebs","sneck","sneds","sneed","snees","snell","snibs","snick","snies","snift","snigs","snips","snipy","snirt","snits","snobs","snods","snoek","snoep","snogs","snoke","snood","snook","snool","snoot","snots","snowk","snows","snubs","snugs","snush","snyes","soaks","soaps","soare","soars","soave","sobas","socas","soces","socko","socks","socle","sodas","soddy","sodic","sodom","sofar","sofas","softa","softs","softy","soger","sohur","soils","soily","sojas","sojus","sokah","soken","sokes","sokol","solah","solan","solas","solde","soldi","soldo","solds","soled","solei","soler","soles","solon","solos","solum","solus","soman","somas","sonce","sonde","sones","songs","sonly","sonne","sonny","sonse","sonsy","sooey","sooks","sooky","soole","sools","sooms","soops","soote","soots","sophs","sophy","sopor","soppy","sopra","soral","soras","sorbo","sorbs","sorda","sordo","sords","sored","soree","sorel","sorer","sores","sorex","sorgo","sorns","sorra","sorta","sorts","sorus","soths","sotol","souce","souct","sough","souks","souls","soums","soups","soupy","sours","souse","souts","sowar","sowce","sowed","sowff","sowfs","sowle","sowls","sowms","sownd","sowne","sowps","sowse","sowth","soyas","soyle","soyuz","sozin","spacy","spado","spaed","spaer","spaes","spags","spahi","spail","spain","spait","spake","spald","spale","spall","spalt","spams","spane","spang","spans","spard","spars","spart","spate","spats","spaul","spawl","spaws","spayd","spays","spaza","spazz","speal","spean","speat","specs","spect","speel","speer","speil","speir","speks","speld","spelk","speos","spets","speug","spews","spewy","spial","spica","spick","spics","spide","spier","spies","spiff","spifs","spiks","spile","spims","spina","spink","spins","spirt","spiry","spits","spitz","spivs","splay","splog","spode","spods","spoom","spoor","spoot","spork","sposh","spots","sprad","sprag","sprat","spred","sprew","sprit","sprod","sprog","sprue","sprug","spuds","spued","spuer","spues","spugs","spule","spume","spumy","spurs","sputa","spyal","spyre","squab","squaw","squeg","squid","squit","squiz","stabs","stade","stags","stagy","staig","stane","stang","staph","staps","starn","starr","stars","stats","staun","staws","stays","stean","stear","stedd","stede","steds","steek","steem","steen","steil","stela","stele","stell","steme","stems","stend","steno","stens","stent","steps","stept","stere","stets","stews","stewy","steys","stich","stied","sties","stilb","stile","stime","stims","stimy","stipa","stipe","stire","stirk","stirp","stirs","stive","stivy","stoae","stoai","stoas","stoat","stobs","stoep","stogy","stoit","stoln","stoma","stond","stong","stonk","stonn","stook","stoor","stope","stops","stopt","stoss","stots","stott","stoun","stoup","stour","stown","stowp","stows","strad","strae","strag","strak","strep","strew","stria","strig","strim","strop","strow","stroy","strum","stubs","stude","studs","stull","stulm","stumm","stums","stuns","stupa","stupe","sture","sturt","styed","styes","styli","stylo","styme","stymy","styre","styte","subah","subas","subby","suber","subha","succi","sucks","sucky","sucre","sudds","sudor","sudsy","suede","suent","suers","suete","suets","suety","sugan","sughs","sugos","suhur","suids","suint","suits","sujee","sukhs","sukuk","sulci","sulfa","sulfo","sulks","sulph","sulus","sumis","summa","sumos","sumph","sumps","sunis","sunks","sunna","sunns","sunup","supes","supra","surah","sural","suras","surat","surds","sured","sures","surfs","surfy","surgy","surra","sused","suses","susus","sutor","sutra","sutta","swabs","swack","swads","swage","swags","swail","swain","swale","swaly","swamy","swang","swank","swans","swaps","swapt","sward","sware","swarf","swart","swats","swayl","sways","sweal","swede","sweed","sweel","sweer","swees","sweir","swelt","swerf","sweys","swies","swigs","swile","swims","swink","swipe","swire","swiss","swith","swits","swive","swizz","swobs","swole","swoln","swops","swopt","swots","swoun","sybbe","sybil","syboe","sybow","sycee","syces","sycon","syens","syker","sykes","sylis","sylph","sylva","symar","synch","syncs","synds","syned","synes","synth","syped","sypes","syphs","syrah","syren","sysop","sythe","syver","taals","taata","taber","tabes","tabid","tabis","tabla","tabor","tabun","tabus","tacan","taces","tacet","tache","tacho","tachs","tacks","tacos","tacts","taels","tafia","taggy","tagma","tahas","tahrs","taiga","taigs","taiko","tails","tains","taira","taish","taits","tajes","takas","takes","takhi","takin","takis","takky","talak","talaq","talar","talas","talcs","talcy","talea","taler","tales","talks","talky","talls","talma","talpa","taluk","talus","tamal","tamed","tames","tamin","tamis","tammy","tamps","tanas","tanga","tangi","tangs","tanhs","tanka","tanks","tanky","tanna","tansy","tanti","tanto","tanty","tapas","taped","tapen","tapes","tapet","tapis","tappa","tapus","taras","tardo","tared","tares","targa","targe","tarns","taroc","tarok","taros","tarps","tarre","tarry","tarsi","tarts","tarty","tasar","tased","taser","tases","tasks","tassa","tasse","tasso","tatar","tater","tates","taths","tatie","tatou","tatts","tatus","taube","tauld","tauon","taupe","tauts","tavah","tavas","taver","tawai","tawas","tawed","tawer","tawie","tawse","tawts","taxed","taxer","taxes","taxis","taxol","taxon","taxor","taxus","tayra","tazza","tazze","teade","teads","teaed","teaks","teals","teams","tears","teats","teaze","techs","techy","tecta","teels","teems","teend","teene","teens","teeny","teers","teffs","teggs","tegua","tegus","tehrs","teiid","teils","teind","teins","telae","telco","teles","telex","telia","telic","tells","telly","teloi","telos","temed","temes","tempi","temps","tempt","temse","tench","tends","tendu","tenes","tenge","tenia","tenne","tenno","tenny","tenon","tents","tenty","tenue","tepal","tepas","tepoy","terai","teras","terce","terek","teres","terfe","terfs","terga","terms","terne","terns","terry","terts","tesla","testa","teste","tests","tetes","teths","tetra","tetri","teuch","teugh","tewed","tewel","tewit","texas","texes","texts","thack","thagi","thaim","thale","thali","thana","thane","thang","thans","thanx","tharm","thars","thaws","thawy","thebe","theca","theed","theek","thees","thegn","theic","thein","thelf","thema","thens","theow","therm","thesp","thete","thews","thewy","thigs","thilk","thill","thine","thins","thiol","thirl","thoft","thole","tholi","thoro","thorp","thous","thowl","thrae","thraw","thrid","thrip","throe","thuds","thugs","thuja","thunk","thurl","thuya","thymi","thymy","tians","tiars","tical","ticca","ticed","tices","tichy","ticks","ticky","tiddy","tided","tides","tiers","tiffs","tifos","tifts","tiges","tigon","tikas","tikes","tikis","tikka","tilak","tiled","tiler","tiles","tills","tilly","tilth","tilts","timbo","timed","times","timon","timps","tinas","tinct","tinds","tinea","tined","tines","tinge","tings","tinks","tinny","tints","tinty","tipis","tippy","tired","tires","tirls","tiros","tirrs","titch","titer","titis","titre","titty","titup","tiyin","tiyns","tizes","tizzy","toads","toady","toaze","tocks","tocky","tocos","todde","toeas","toffs","toffy","tofts","tofus","togae","togas","toged","toges","togue","tohos","toile","toils","toing","toise","toits","tokay","toked","toker","tokes","tokos","tolan","tolar","tolas","toled","toles","tolls","tolly","tolts","tolus","tolyl","toman","tombs","tomes","tomia","tommy","tomos","tondi","tondo","toned","toner","tones","toney","tongs","tonka","tonks","tonne","tonus","tools","tooms","toons","toots","toped","topee","topek","toper","topes","tophe","tophi","tophs","topis","topoi","topos","toppy","toque","torah","toran","toras","torcs","tores","toric","torii","toros","torot","torrs","torse","torsi","torsk","torta","torte","torts","tosas","tosed","toses","toshy","tossy","toted","toter","totes","totty","touks","touns","tours","touse","tousy","touts","touze","touzy","towed","towie","towns","towny","towse","towsy","towts","towze","towzy","toyed","toyer","toyon","toyos","tozed","tozes","tozie","trabs","trads","tragi","traik","trams","trank","tranq","trans","trant","trape","traps","trapt","trass","trats","tratt","trave","trayf","trays","treck","treed","treen","trees","trefa","treif","treks","trema","trems","tress","trest","trets","trews","treyf","treys","triac","tride","trier","tries","triff","trigo","trigs","trike","trild","trill","trims","trine","trins","triol","trior","trios","trips","tripy","trist","troad","troak","troat","trock","trode","trods","trogs","trois","troke","tromp","trona","tronc","trone","tronk","trons","trooz","troth","trots","trows","troys","trued","trues","trugo","trugs","trull","tryer","tryke","tryma","tryps","tsade","tsadi","tsars","tsked","tsuba","tsubo","tuans","tuart","tuath","tubae","tubar","tubas","tubby","tubed","tubes","tucks","tufas","tuffe","tuffs","tufts","tufty","tugra","tuile","tuina","tuism","tuktu","tules","tulpa","tulsi","tumid","tummy","tumps","tumpy","tunas","tunds","tuned","tuner","tunes","tungs","tunny","tupek","tupik","tuple","tuque","turds","turfs","turfy","turks","turme","turms","turns","turnt","turps","turrs","tushy","tusks","tusky","tutee","tutti","tutty","tutus","tuxes","tuyer","twaes","twain","twals","twank","twats","tways","tweel","tween","tweep","tweer","twerk","twerp","twier","twigs","twill","twilt","twink","twins","twiny","twire","twirp","twite","twits","twoer","twyer","tyees","tyers","tyiyn","tykes","tyler","tymps","tynde","tyned","tynes","typal","typed","types","typey","typic","typos","typps","typto","tyran","tyred","tyres","tyros","tythe","tzars","udals","udons","ugali","ugged","uhlan","uhuru","ukase","ulama","ulans","ulema","ulmin","ulnad","ulnae","ulnar","ulnas","ulpan","ulvas","ulyie","ulzie","umami","umbel","umber","umble","umbos","umbre","umiac","umiak","umiaq","ummah","ummas","ummed","umped","umphs","umpie","umpty","umrah","umras","unais","unapt","unarm","unary","unaus","unbag","unban","unbar","unbed","unbid","unbox","uncap","unces","uncia","uncos","uncoy","uncus","undam","undee","undos","undug","uneth","unfix","ungag","unget","ungod","ungot","ungum","unhat","unhip","unica","units","unjam","unked","unket","unkid","unlaw","unlay","unled","unlet","unlid","unman","unmew","unmix","unpay","unpeg","unpen","unpin","unred","unrid","unrig","unrip","unsaw","unsay","unsee","unsew","unsex","unsod","untax","untin","unwet","unwit","unwon","upbow","upbye","updos","updry","upend","upjet","uplay","upled","uplit","upped","upran","uprun","upsee","upsey","uptak","upter","uptie","uraei","urali","uraos","urare","urari","urase","urate","urbex","urbia","urdee","ureal","ureas","uredo","ureic","urena","urent","urged","urger","urges","urial","urite","urman","urnal","urned","urped","ursae","ursid","urson","urubu","urvas","users","usnea","usque","usure","usury","uteri","uveal","uveas","uvula","vacua","vaded","vades","vagal","vagus","vails","vaire","vairs","vairy","vakas","vakil","vales","valis","valse","vamps","vampy","vanda","vaned","vanes","vangs","vants","vaped","vaper","vapes","varan","varas","vardy","varec","vares","varia","varix","varna","varus","varve","vasal","vases","vasts","vasty","vatic","vatus","vauch","vaute","vauts","vawte","vaxes","veale","veals","vealy","veena","veeps","veers","veery","vegas","veges","vegie","vegos","vehme","veils","veily","veins","veiny","velar","velds","veldt","veles","vells","velum","venae","venal","vends","vendu","veney","venge","venin","vents","venus","verbs","verra","verry","verst","verts","vertu","vespa","vesta","vests","vetch","vexed","vexer","vexes","vexil","vezir","vials","viand","vibes","vibex","vibey","viced","vices","vichy","viers","views","viewy","vifda","viffs","vigas","vigia","vilde","viler","villi","vills","vimen","vinal","vinas","vinca","vined","viner","vines","vinew","vinic","vinos","vints","viold","viols","vired","vireo","vires","virga","virge","virid","virls","virtu","visas","vised","vises","visie","visne","vison","visto","vitae","vitas","vitex","vitro","vitta","vivas","vivat","vivda","viver","vives","vizir","vizor","vleis","vlies","vlogs","voars","vocab","voces","voddy","vodou","vodun","voema","vogie","voids","voile","voips","volae","volar","voled","voles","volet","volks","volta","volte","volti","volts","volva","volve","vomer","voted","votes","vouge","voulu","vowed","vower","voxel","vozhd","vraic","vrils","vroom","vrous","vrouw","vrows","vuggs","vuggy","vughs","vughy","vulgo","vulns","vulva","vutty","waacs","wacke","wacko","wacks","wadds","waddy","waded","wader","wades","wadge","wadis","wadts","waffs","wafts","waged","wages","wagga","wagyu","wahoo","waide","waifs","waift","wails","wains","wairs","waite","waits","wakas","waked","waken","waker","wakes","wakfs","waldo","walds","waled","waler","wales","walie","walis","walks","walla","walls","wally","walty","wamed","wames","wamus","wands","waned","wanes","waney","wangs","wanks","wanky","wanle","wanly","wanna","wants","wanty","wanze","waqfs","warbs","warby","wards","wared","wares","warez","warks","warms","warns","warps","warre","warst","warts","wases","washy","wasms","wasps","waspy","wasts","watap","watts","wauff","waugh","wauks","waulk","wauls","waurs","waved","waves","wavey","wawas","wawes","wawls","waxed","waxer","waxes","wayed","wazir","wazoo","weald","weals","weamb","weans","wears","webby","weber","wecht","wedel","wedgy","weeds","weeke","weeks","weels","weems","weens","weeny","weeps","weepy","weest","weete","weets","wefte","wefts","weids","weils","weirs","weise","weize","wekas","welds","welke","welks","welkt","wells","welly","welts","wembs","wends","wenge","wenny","wents","weros","wersh","wests","wetas","wetly","wexed","wexes","whamo","whams","whang","whaps","whare","whata","whats","whaup","whaur","wheal","whear","wheen","wheep","wheft","whelk","whelm","whens","whets","whews","wheys","whids","whift","whigs","whilk","whims","whins","whios","whips","whipt","whirr","whirs","whish","whiss","whist","whits","whity","whizz","whomp","whoof","whoot","whops","whore","whorl","whort","whoso","whows","whump","whups","whyda","wicca","wicks","wicky","widdy","wides","wiels","wifed","wifes","wifey","wifie","wifty","wigan","wigga","wiggy","wikis","wilco","wilds","wiled","wiles","wilga","wilis","wilja","wills","wilts","wimps","winds","wined","wines","winey","winge","wings","wingy","winks","winna","winns","winos","winze","wiped","wiper","wipes","wired","wirer","wires","wirra","wised","wises","wisha","wisht","wisps","wists","witan","wited","wites","withe","withs","withy","wived","wiver","wives","wizen","wizes","woads","woald","wocks","wodge","woful","wojus","woker","wokka","wolds","wolfs","wolly","wolve","wombs","womby","womyn","wonga","wongi","wonks","wonky","wonts","woods","wooed","woofs","woofy","woold","wools","woons","woops","woopy","woose","woosh","wootz","words","works","worms","wormy","worts","wowed","wowee","woxen","wrang","wraps","wrapt","wrast","wrate","wrawl","wrens","wrick","wried","wrier","wries","writs","wroke","wroot","wroth","wryer","wuddy","wudus","wulls","wurst","wuses","wushu","wussy","wuxia","wyled","wyles","wynds","wynns","wyted","wytes","xebec","xenia","xenic","xenon","xeric","xerox","xerus","xoana","xrays","xylan","xylem","xylic","xylol","xylyl","xysti","xysts","yaars","yabas","yabba","yabby","yacca","yacka","yacks","yaffs","yager","yages","yagis","yahoo","yaird","yakka","yakow","yales","yamen","yampy","yamun","yangs","yanks","yapok","yapon","yapps","yappy","yarak","yarco","yards","yarer","yarfa","yarks","yarns","yarrs","yarta","yarto","yates","yauds","yauld","yaups","yawed","yawey","yawls","yawns","yawny","yawps","ybore","yclad","ycled","ycond","ydrad","ydred","yeads","yeahs","yealm","yeans","yeard","years","yecch","yechs","yechy","yedes","yeeds","yeesh","yeggs","yelks","yells","yelms","yelps","yelts","yenta","yente","yerba","yerds","yerks","yeses","yesks","yests","yesty","yetis","yetts","yeuks","yeuky","yeven","yeves","yewen","yexed","yexes","yfere","yiked","yikes","yills","yince","yipes","yippy","yirds","yirks","yirrs","yirth","yites","yitie","ylems","ylike","ylkes","ymolt","ympes","yobbo","yobby","yocks","yodel","yodhs","yodle","yogas","yogee","yoghs","yogic","yogin","yogis","yoick","yojan","yoked","yokel","yoker","yokes","yokul","yolks","yolky","yomim","yomps","yonic","yonis","yonks","yoofs","yoops","yores","yorks","yorps","youks","yourn","yours","yourt","youse","yowed","yowes","yowie","yowls","yowza","yrapt","yrent","yrivd","yrneh","ysame","ytost","yuans","yucas","yucca","yucch","yucko","yucks","yucky","yufts","yugas","yuked","yukes","yukky","yukos","yulan","yules","yummo","yummy","yumps","yupon","yuppy","yurta","yurts","yuzus","zabra","zacks","zaida","zaidy","zaire","zakat","zaman","zambo","zamia","zanja","zante","zanza","zanze","zappy","zarfs","zaris","zatis","zaxes","zayin","zazen","zeals","zebec","zebub","zebus","zedas","zeins","zendo","zerda","zerks","zeros","zests","zetas","zexes","zezes","zhomo","zibet","ziffs","zigan","zilas","zilch","zilla","zills","zimbi","zimbs","zinco","zincs","zincy","zineb","zines","zings","zingy","zinke","zinky","zippo","zippy","ziram","zitis","zizel","zizit","zlote","zloty","zoaea","zobos","zobus","zocco","zoeae","zoeal","zoeas","zoism","zoist","zombi","zonae","zonda","zoned","zoner","zones","zonks","zooea","zooey","zooid","zooks","zooms","zoons","zooty","zoppa","zoppo","zoril","zoris","zorro","zouks","zowee","zowie","zulus","zupan","zupas","zuppa","zurfs","zuzim","zygal","zygon","zymes","zymic",
		"abacus","abased","abases","abated","abates","abbacy","abbess","abbeys","abbots","abduct","abhors","abided","abider","abides","abject","abjure","ablate","ablaut","ablaze","ablest","abloom","aboard","abodes","aborts","abound","abrade","abroad","abrupt","abseil","absent","absorb","absurd","abused","abuser","abuses","acacia","acajou","accede","accent","accept","access","accord","accost","accrue","accuse","acetic","achier","aching","acidic","acidly","acorns","acquit","across","acting","action","active","actors","actual","acuity","acumen","acuter","adages","adagio","adapts","addend","adders","addict","adding","addled","addles","adduce","adduct","adepts","adhere","adjoin","adjure","adjust","admire","admits","adnoun","adopts","adored","adorer","adores","adorns","adrift","adroit","adsorb","adults","advent","adverb","advert","advice","advise","adytum","adzuki","aerate","aerial","aerobe","affair","affect","affine","affirm","afflux","afford","affray","afghan","aflame","afloat","afraid","afresh","afters","agates","agedly","ageing","agency","agenda","agents","aghast","agleam","agnail","agnate","agouti","agreed","agrees","aguish","ahimsa","aiding","aikido","ailing","aimers","aiming","airbag","airbus","airgun","airier","airily","airing","airman","airmen","airway","aisles","akimbo","alarms","alarum","albeit","albino","albums","alcove","alerts","alexia","algoid","alibis","aliens","alight","aligns","aliped","alkali","allays","allege","allele","alleys","allied","allies","allots","allows","alloys","allude","allure","almond","almost","alnico","alpaca","alpine","altars","alters","alumna","alumni","always","amatol","amazed","amazes","ambled","ambler","ambles","ambush","amends","amidst","ammine","amnion","amoeba","amoral","amount","amours","ampere","ampler","amrita","amulet","amused","amuser","amuses","anchor","angels","angers","angina","angled","angler","angles","angora","animal","animus","anions","ankles","anklet","annals","anneal","annexe","annoys","annual","annuli","annuls","anodal","anodes","anodic","anoint","anomic","anomie","anonym","anorak","anoxia","anoxic","answer","anthem","anther","antics","antler","anuran","anvils","anyhow","anyone","anyway","aortal","aortic","aoudad","apache","apathy","apexes","aphids","apiary","apical","apices","apiece","aplomb","apnoea","apogee","appals","appeal","appear","append","apples","appose","approx","aprons","arable","arbour","arcade","arcane","arched","archer","arches","archly","archon","arcing","arctic","ardent","ardour","arenas","areola","areole","argent","argued","arguer","argues","argufy","aright","arioso","arisen","arises","armada","armful","armies","arming","armlet","armour","armpit","arnica","aromas","around","arouse","arrack","arrant","arrays","arrear","arrest","arrive","arroba","arrows","arroyo","arsine","artery","artful","artier","artily","artist","ascend","ascent","ashcan","ashier","ashore","ashram","asides","askers","asking","aslant","asleep","aslope","aspect","aspire","assail","assent","assert","assess","assets","assign","assist","assize","assort","assume","assure","astern","asters","asthma","astral","astray","astron","astute","asylum","ataman","ataxia","ataxic","atolls","atomic","atonal","atoned","atones","atrium","attach","attack","attain","attend","attest","attics","attire","attune","auburn","audits","augers","augurs","augury","august","auklet","auntie","aurora","aurous","auteur","author","autism","autumn","avails","avatar","avenge","avenue","averse","averts","aviary","avidly","avoids","avouch","avowal","avowed","avower","avulse","awaits","awaked","awaken","awakes","awards","aweigh","awheel","awhile","awhirl","awning","awoken","axioms","azalea","babble","babied","babies","baboon","backed","backer","backup","baddie","badger","badges","baffle","bagels","bagful","bagged","bagger","bagman","bagwig","bailer","bailie","baited","baiter","bakers","bakery","baking","balder","baldly","baleen","balers","baling","balked","ballad","balled","ballet","ballot","balsam","bamboo","banana","banded","bandit","banged","banger","bangle","banish","banjos","banked","banker","banned","banner","bantam","banter","banyan","banzai","baobab","barbed","barber","barbet","barely","barest","barfly","barged","bargee","barges","baring","barite","barium","barked","barker","barley","barman","barong","barons","barony","barque","barred","barrel","barren","barrio","barrow","barter","baryon","basalt","basely","basest","bashed","basher","bashes","basics","basify","basing","basins","basked","basket","basses","basset","basted","bastes","batboy","bateau","bathed","bather","bathes","bathos","bating","batman","batons","batted","batten","batter","battle","battue","bauble","baulks","bawdry","bawled","bawler","baying","bayous","bazaar","beacon","beaded","beadle","beagle","beaked","beaker","beamed","beamer","beanie","beards","bearer","beasts","beaten","beater","beauty","beaver","becalm","became","beckon","become","bedaub","bedbug","bedded","bedeck","bedlam","bedpan","beefed","beeped","beeper","beetle","beeves","befall","befell","befits","befogs","befool","before","befoul","begets","beggar","begged","begins","begird","behalf","behave","behead","beheld","behest","behind","behold","behove","beings","belays","beldam","belfry","belied","belief","belier","belies","belike","belles","bellow","bellum","belong","belted","beluga","bemire","bemoan","bemuse","bended","bender","benign","benumb","benzyl","berate","bereft","berets","berths","beseem","besets","beside","bested","bester","bestir","bestow","betake","bethel","betide","betook","betray","betted","better","bettor","bevels","bevies","bewail","beware","beyond","biased","biases","bibbed","bibber","bibles","biceps","bicker","bicorn","bidden","bidder","biding","biform","bigamy","bigger","bights","bigots","bigwig","bikers","biking","bikini","bilged","bilges","bilked","bilker","billed","billet","billon","billow","binary","binate","binder","bindle","binges","bingos","binned","bionic","biopsy","biotic","biotin","bipeds","birder","birdie","bireme","births","bisect","bishop","bisons","bisque","bistre","bistro","bitchy","biters","biting","bitmap","bitted","bitten","bitter","blabby","blacks","bladed","blades","blamed","blamer","blames","blanch","blanks","blared","blares","blasts","blazed","blazer","blazes","blazon","bleach","bleary","bleats","bleeds","bleeps","blench","blends","blenny","blight","blimey","blimps","blinds","blinks","blintz","blithe","bloats","blocks","blocky","blokes","blonde","blonds","bloods","bloody","blooms","bloomy","blotch","blotto","blouse","blower","blowsy","blowzy","bluely","bluest","bluesy","bluffs","bluing","bluish","blunts","blurry","blurts","boards","boasts","boated","boatel","boater","bobbed","bobber","bobbin","bobble","bobcat","bodega","bodice","bodied","bodies","bodily","boding","bodkin","boffin","bogeys","bogged","boggle","bogies","boiled","boiler","bolder","boldly","bolero","bollix","bolted","bolter","bombed","bomber","bonbon","bonded","bonder","boners","bonier","boning","bonito","bonnet","bonsai","bonzes","booboo","boodle","booger","boogie","boohoo","booked","booker","bookie","boomed","boomer","boosts","booted","bootee","booths","bootie","boozer","bopper","borage","borate","border","boreal","borers","boride","boring","borrow","borzoi","bosoms","bosomy","bossed","bosses","botany","botchy","botfly","bother","bottle","bottom","boughs","bought","bounce","bouncy","bounds","bounty","bourse","bovine","bovver","bowels","bowers","bowery","bowfin","bowing","bowled","bowleg","bowler","bowman","bowmen","bowser","bowyer","boxcar","boxers","boxful","boxier","boxing","boyars","boyish","braced","bracer","braces","braids","brains","brainy","braise","braked","brakes","branch","brands","brandy","brassy","bratty","braved","braver","braves","bravos","brawls","brawly","brawny","brayed","brayer","brazed","brazen","brazes","breach","breads","breaks","breams","breast","breath","breech","breeds","breeze","breezy","brevet","brewed","brewer","briars","bribed","briber","bribes","bricks","bridal","brides","bridge","bridle","briefs","bright","brings","broach","broads","brogan","brogue","broils","broken","broker","brolly","bronco","bronze","bronzy","brooch","broods","broody","brooks","brooms","broths","browns","browse","bruise","brumal","brumby","brunch","brunet","brushy","brutal","brutes","bryony","bubble","bubbly","bucked","bucker","bucket","buckle","buckra","budded","buddle","budged","budges","budget","budgie","buffer","buffet","bugged","bugger","bugled","bugler","bugles","builds","bulbar","bulbul","bulged","bulges","bulgur","bulked","bulled","bullet","bumble","bummed","bummer","bumped","bumper","bunchy","bundle","bunger","bungle","bunion","bunked","bunker","bunkum","bunted","bunter","buoyed","burble","burden","bureau","burgee","burger","burgle","burgoo","burial","buried","burier","buries","burlap","burled","burley","burned","burner","burnet","burped","burred","burros","burrow","bursar","bursas","bursts","busboy","bushed","bushel","bushes","busied","busier","busies","busily","busker","buskin","bussed","busses","busted","buster","bustle","butane","butler","butted","butter","buttes","button","buyers","buying","buzzed","buzzer","buzzes","byelaw","bygone","bylaws","byname","bypass","bypath","byplay","byroad","byways","byword","cabala","cabals","cabana","cabbie","cabins","cabled","cables","cabman","cached","caches","cachet","cachou","cackle","cactus","caddie","cadent","cadged","cadger","cadges","caftan","cagier","cagily","caging","caiman","cairns","cajole","caking","calash","calico","caliph","called","caller","callow","callus","calmed","calmer","calmly","calves","camber","camels","cameos","camera","camion","camlet","camped","camper","campus","canals","canard","canary","cancan","cancel","cancer","candid","candle","cangue","canine","caning","canker","canned","cannel","canner","cannon","cannot","canoed","canoes","canons","canopy","canted","canter","cantle","canton","cantor","cantos","cantus","canvas","canyon","capers","capful","capita","capote","capped","capper","captor","carafe","carbon","carboy","carded","carder","careen","career","carers","caress","carets","cargos","carhop","caries","caring","carnal","carnet","carols","carpal","carped","carpel","carpet","carrot","carted","cartel","carter","carton","carved","carvel","carven","carver","carves","casaba","casein","casern","cashed","casher","cashes","cashew","casing","casino","casket","caster","castes","castle","castor","casual","catchy","caters","catgut","catkin","catnap","catnip","catsup","cattle","caucus","caudal","caudle","caught","caulis","caulks","causal","caused","causer","causes","caveat","cavern","caviar","cavies","caving","cavity","cavort","cawing","ceased","ceases","cedarn","ceding","celery","celiac","cellar","celled","cellos","cement","censer","censor","census","centre","centum","cerate","cereal","cereus","cerise","cerium","certes","ceruse","cervix","cetera","chafer","chaffy","chains","chairs","chaise","chalet","chalks","chalky","champs","chance","chancy","change","chants","chapel","charge","charms","charts","chased","chaser","chases","chasms","chaste","chatty","cheats","checks","cheeks","cheeky","cheeps","cheers","cheery","cheese","cheesy","chemic","cheque","cherry","cherub","chests","chesty","chewed","chewer","chichi","chicks","chicly","chided","chides","chiefs","chilli","chills","chilly","chimed","chimer","chimes","chimps","chinch","chinks","chinos","chintz","chirps","chirpy","chisel","chital","chitin","chives","chivvy","chocks","choice","choirs","choked","choker","chokes","choler","choose","choosy","choppy","choral","chords","chorea","chores","choric","chorus","chosen","chough","chrome","chromo","chubby","chucks","chukka","chummy","chumps","chunks","chunky","church","churls","churns","chutes","cicada","ciders","cigars","cilice","cilium","cinder","cinema","cinque","cipher","circle","circus","cirque","cirrus","cither","citied","cities","citify","citing","citole","citric","citron","citrus","ciudad","civics","clacks","claims","clammy","clamps","clangs","claque","claret","clasps","classy","clause","claver","clawed","clawer","clayed","clayey","cleans","clears","cleats","cleave","clefts","clench","clergy","cleric","clerks","clever","cliche","clicks","client","cliffs","cliffy","climax","climbs","climes","clinch","clings","clingy","clinic","clique","cloaks","cloche","clocks","cloddy","clomps","cloned","clones","clonks","closed","closer","closes","closet","clothe","cloths","clouds","cloudy","clough","cloven","clover","cloves","clowns","clubby","clucks","clucky","cluing","clumps","clumpy","clumsy","clunks","clunky","clutch","coaled","coaler","coarse","coasts","coated","coater","coaxed","coaxer","coaxes","cobalt","cobber","cobble","cobnut","cobweb","coccid","coccyx","cocked","cocker","cockle","cocoon","coddle","coders","codger","codify","coding","coerce","coeval","coffee","coffer","coffin","coffle","cogent","cogged","cogito","cognac","coheir","cohere","cohort","coiled","coined","coital","coitus","coking","colder","coldly","coleus","collar","collie","colloq","colons","colony","colour","colugo","column","colure","comate","combat","combed","comber","combos","comedy","comely","comers","cometh","comets","comfit","comics","coming","comity","commas","commie","commit","commix","common","compel","comply","compos","concur","condom","condor","condos","confab","confer","conger","congou","conics","coning","conked","conker","conned","consol","consul","convex","convey","convoy","cooing","cooked","cooker","cookie","cooled","cooler","coolie","coolly","cooped","cooper","cootie","copied","copier","copies","coping","copper","copses","copter","copula","coquet","corbel","corded","cordon","corers","coring","corium","corked","corker","cornea","corned","cornel","corner","cornet","corona","corpse","corpus","corral","corset","cortex","corves","cosily","cosine","cosmic","cosmos","cosset","costal","costly","cotter","cotton","cougar","coughs","coulee","counts","county","couple","coupon","course","courts","cousin","covers","covert","covets","coveys","coving","cowage","coward","cowboy","cowers","cowing","cowman","cowmen","cowpat","cowpea","cowpox","coyote","crabby","cracks","cradle","crafts","crafty","craggy","crambo","cramps","craned","cranes","crania","cranks","cranky","cranny","crappy","crater","crates","cravat","craved","craven","craver","craves","crawls","crawly","crayon","crazed","crazes","creaks","creaky","creams","creamy","crease","create","creche","credit","credos","creeds","creeks","creels","creeps","creepy","crenel","cresol","crests","cretin","crewed","crewel","criers","crikey","crimes","crimps","crimpy","cringe","cripes","crises","crisis","crisps","crispy","critic","croaks","croaky","crocks","crocus","crones","crooks","croons","crotch","croton","crouch","croupy","crowds","crowed","crowns","cruces","cruddy","cruder","cruise","crumbs","crumby","crummy","crunch","crusts","crusty","crutch","crying","crypto","crypts","cubage","cubing","cubism","cubist","cuckoo","cuddle","cuddly","cudgel","cueing","cuffed","cuisse","culled","culler","cullet","cultch","cultic","cumber","cupful","cupola","cupped","cupric","cuprum","curacy","curare","curate","curbed","curdle","curfew","curiae","curing","curios","curium","curled","curler","curlew","cursed","curses","cursor","curtly","curtsy","curved","curves","cussed","cusses","custom","cutely","cutest","cutesy","cutler","cutlet","cutter","cutups","cyanic","cycled","cycles","cyclic","cygnet","cymbal","cymene","cynics","cystic","dabbed","dabber","dabble","dacoit","dacron","dactyl","daemon","dafter","daftly","dagger","dahlia","daimyo","dainty","daises","damage","damask","dammed","damned","damped","dampen","damper","damply","damsel","danced","dancer","dances","dander","dandle","danger","dangle","dankly","dapper","dapple","darers","daring","darken","darker","darkle","darkly","darned","darnel","darner","darted","darter","dashed","dasher","dashes","dating","dative","daubed","dauber","daunts","davits","dawdle","dawned","daybed","dayboy","dayfly","dazing","dazzle","deacon","deaden","deadly","deafen","deafer","deafly","dealer","dearer","dearly","dearth","deaths","debark","debars","debase","debate","debits","debris","debtor","debugs","debunk","debuts","decade","decamp","decant","decays","deceit","decent","decide","decked","deckle","decoct","decode","decoys","decree","deduce","deduct","deeded","deejay","deemed","deepen","deeper","deeply","deface","defame","defeat","defect","defend","defers","defied","defies","defile","define","deform","defray","defter","deftly","defuse","degree","degust","dehorn","deific","deigns","deject","delays","delete","deltas","delude","deluge","deluxe","delved","delver","delves","demand","demark","demean","dement","demise","demist","demons","demote","demure","demurs","denary","dengue","denial","denied","denier","denies","denims","denote","denser","dental","dented","dentil","dentin","denude","depart","depend","depict","deploy","deport","depose","depots","depths","depute","deputy","derail","deride","derive","dermal","dermis","descry","desert","design","desire","desist","desman","despot","detach","detail","detain","detect","detent","deters","detest","detour","detune","deuced","deuces","device","devils","devise","devoid","devote","devour","devout","dewier","dewily","dewing","dharma","diadem","dialog","dialup","diaper","diatom","dibble","dicier","dicing","dicker","dickey","dictum","diddle","dieing","diesel","diesis","dieter","differ","digest","digger","digits","diktat","dilate","dildos","dilute","dimmed","dimmer","dimple","dimply","dimwit","diners","dinghy","dingle","dining","dinner","diodes","diplex","dipody","dipole","dipped","dipper","direct","direly","direst","dirges","dirndl","disarm","disbar","disbud","discos","discus","dished","dishes","disked","dismal","dismay","disown","dispel","distal","distil","disuse","dither","dittos","divans","divers","divert","divest","divide","divine","diving","doable","dobbin","docent","docile","docked","docker","docket","doctor","dodder","doddle","dodged","dodgem","dodger","dodges","dogged","doggie","dogleg","dogman","dogmas","doings","doling","dollar","dollop","dolman","dolmen","dolour","domain","doming","domino","donate","donjon","donkey","donned","donors","donuts","doodad","doodah","doodle","doomed","dopers","dopier","doping","dormer","dorsal","dosage","dosing","dosser","dotage","dotard","doting","dotted","dotter","double","doubly","doubts","douche","doughy","dourly","doused","douser","douses","dovish","downed","downer","dowser","dowses","dozens","dozier","dozing","drably","drafts","dragon","drains","dramas","draped","draper","drapes","drawer","drawls","drawly","dreads","dreams","dreamt","dreamy","dreary","dredge","dreggy","drench","dressy","driers","driest","drifts","drifty","drills","drinks","drippy","drivel","driven","driver","drives","drogue","drolly","drones","drools","droops","droopy","dropsy","drossy","drover","droves","drowns","drowse","drowsy","drudge","drunks","dryers","drying","dually","dubbed","ducked","ducker","ducted","dudeen","duello","duenna","duffel","duffer","duffle","dugong","dugout","duiker","dulcet","dulled","duller","dumber","dumbly","dumdum","dumped","dumper","dunces","dunker","dunlin","dupery","duping","duplet","duplex","durbar","duress","during","dusted","duster","dustup","duties","duvets","dwarfs","dwells","dyeing","dynamo","dynast","dynode","eagles","eaglet","earful","earned","earner","earths","earthy","earwax","earwig","easier","easily","easing","eaters","eatery","eating","ebbing","echoed","echoes","echoic","ectype","eczema","eddied","eddies","edgier","edgily","edging","edible","edicts","edited","editor","eerier","eerily","efface","effect","effete","effigy","efflux","effort","effuse","eggcup","egging","eggnog","egoism","egoist","egress","egrets","eighth","eights","eighty","either","ejects","elapid","elapse","elated","elates","elbows","elders","eldest","elects","eleven","elfish","elicit","elided","elides","elites","elixir","eloped","eloper","elopes","eluded","eludes","eluted","embalm","embank","embark","embeds","embers","emblem","embody","emboss","embryo","emceed","emerge","emetic","emigre","emoted","emotes","empery","empire","employ","enable","enacts","enamel","encage","encamp","encase","encode","encore","endear","enders","ending","endive","endows","endued","endure","enemas","energy","enface","enfant","enfold","engage","engine","engird","engulf","enigma","enjoin","enjoys","enlace","enlist","enmesh","enmity","ennead","enosis","enough","enrage","enrapt","enrich","enrobe","enrols","enroot","ensign","ensile","ensued","ensues","ensure","entail","enters","entice","entire","entity","entomb","entrap","entree","envied","envier","envies","envoys","enwind","enwomb","enwrap","enzyme","eolith","eparch","epical","epochs","eponym","equals","equate","equine","equips","equity","erased","eraser","erases","erbium","erects","erenow","ermine","eroded","erodes","erotic","errand","errant","errata","erring","errors","ersatz","erupts","eryngo","escape","escarp","eschew","escort","escrow","escudo","espial","espied","espies","esprit","essays","estate","esteem","esters","estrum","etalon","etched","etcher","etches","eterne","ethane","ethers","ethics","ethnic","etudes","euchre","eulogy","eunuch","eureka","evaded","evader","evades","evened","evener","evenly","events","evicts","evilly","evince","evoked","evokes","evolve","exacta","exacts","exalts","exceed","excels","except","excess","excide","excise","excite","excuse","exedra","exempt","exerts","exeunt","exhale","exhort","exhume","exiled","exiles","exilic","exists","exited","exodus","exotic","expand","expect","expels","expend","expert","expire","expiry","export","expose","extant","extend","extent","extern","extoll","extols","extort","extras","exuded","exudes","exults","eyecup","eyeful","eyeing","eyelet","eyelid","eyetie","fabled","fabler","fables","fabric","facade","facets","facial","facile","facing","factor","faders","fading","faecal","faeces","faerie","faggot","failed","faints","faired","fairer","fairly","faiths","fakery","faking","falcon","fallen","faller","fallow","falser","falter","family","famine","faming","famish","famous","fanged","fanned","fanner","fantod","farces","faring","farmed","farmer","farrow","fasces","fascia","fasted","fasten","faster","father","fathom","fating","fatted","fatten","fatter","faucal","faucet","faults","faulty","faunal","favour","fawned","fawner","fazing","fealty","feared","fearer","feasts","featly","fecund","fedora","feeble","feebly","feeder","feeing","feeler","feigns","feints","feisty","feline","fellah","felled","feller","felloe","fellow","felons","felony","felted","female","femmes","femurs","fenced","fencer","fences","fender","fennec","fennel","ferbam","ferial","ferity","ferret","ferric","ferule","fervid","fescue","festal","fester","fetish","fetter","fettle","feudal","fevers","fewest","fezzes","fiance","fiasco","fibber","fibred","fibres","fibril","fibrin","fibula","fickle","fiddle","fidget","fields","fiends","fierce","fiesta","fifths","fights","figure","filers","filets","filial","filing","filled","filler","fillet","fillip","filmed","filmic","filter","filthy","finale","finals","finder","finely","finery","finest","finger","finial","fining","finish","finite","finned","fipple","firers","firing","firkin","firmed","firmer","firmly","firsts","fiscal","fished","fisher","fishes","fisted","fistic","fitful","fitted","fitter","fixate","fixers","fixing","fixity","fizzer","fizzle","fjords","flabby","flaggy","flagon","flails","flaked","flakes","flamed","flamer","flames","flange","flanks","flared","flares","flashy","flatly","flatus","flaunt","flawed","flaxen","flecks","fledge","fledgy","fleece","fleecy","fleets","flense","fleshy","fletch","flexed","flexor","flicks","fliers","flight","flimsy","flinch","flings","flints","flinty","flirts","flirty","flitch","floats","flocks","floods","floors","floozy","floppy","floral","floret","florid","florin","flossy","flours","floury","flouts","flowed","flower","fluent","fluffs","fluffy","fluids","flumed","flumes","flumps","flunks","flunky","flurry","fluted","flutes","fluxed","fluxes","flybys","flyers","flying","flyway","foamed","fodder","foeman","foetal","foetid","foetor","foetus","fogbow","fogdog","fogeys","fogged","fogies","foible","foiled","foists","folded","folder","foliar","folios","folium","folksy","follow","foment","fonder","fondle","fondly","fondue","fontal","fooled","footed","footer","footie","footle","foozle","forage","forays","forbid","forced","forcer","forces","forego","forest","forged","forger","forges","forget","forgot","forint","forked","formal","format","formed","former","formic","fortes","forums","forwhy","fossil","foster","fought","fouled","fouler","foully","founds","founts","fourth","fowler","foxier","foxily","foxing","fracas","framed","framer","frames","franca","franks","frappe","frauds","frayed","freaks","freaky","freely","freest","freeze","frenzy","fresco","friars","friary","fridge","friend","frieze","fright","frigid","frills","frilly","fringe","fringy","frisks","frisky","frivol","frizzy","frocks","frolic","fronds","fronts","frosts","frosty","froths","frothy","frowns","frowsy","frowzy","frozen","frugal","fruits","fruity","frumps","frumpy","frying","fucked","fucker","fuddle","fudged","fudges","fulcra","fulfil","fuller","fulmar","fumble","fuming","funded","fungal","fungus","funnel","furies","furled","furore","furred","furrow","fusing","fusion","fusser","futile","future","fuzzed","fylfot","gabber","gabble","gabled","gables","gadded","gadfly","gadget","gadoid","gaffer","gaffes","gagged","gagger","gaggle","gaiety","gained","gainer","gaited","gaiter","galaxy","galena","galled","galley","gallon","gallop","galoot","galore","galosh","galyak","gambit","gamble","gambol","gamely","gamete","gamier","gamily","gamine","gaming","gammas","gammon","gander","ganger","gangly","gangue","gannet","gantry","gaping","gapped","garage","garbed","garble","garden","garget","gargle","garish","garlic","garner","garnet","garret","garter","gasbag","gashed","gashes","gasket","gaskin","gaslit","gasman","gasped","gasper","gassed","gasser","gasses","gather","gating","gauche","gauged","gauges","gauzed","gauzes","gayest","gayety","gazebo","gazers","gazing","geared","geezer","geisha","gelled","gender","genera","genial","genies","genius","genome","genres","gentle","gently","gentry","geodes","gerbil","gerent","germen","gerund","getter","getups","gewgaw","geyser","ghetto","ghosts","ghouls","giants","gibber","gibbet","gibbon","gibing","giblet","gifted","giggle","giggly","gigolo","gigots","gilded","gilder","gilled","gimlet","ginger","gingko","ginkgo","girded","girder","girdle","girlie","gismos","givens","givers","giveth","giving","gizmos","glacis","glades","gladly","glaive","glance","glands","glared","glares","glassy","glazed","glazer","glazes","gleams","gleans","glibly","glided","glider","glides","glints","glitch","gloats","global","globes","glooms","gloomy","glossy","gloved","glover","gloves","glowed","glower","gluers","gluing","glumly","gluten","glycol","gnarls","gnarly","gnawed","gnawer","gneiss","gnomes","gnomic","gnomon","gnosis","goaded","goalie","goanna","goatee","gobbet","gobble","goblet","goblin","godson","godwit","goggle","goings","goitre","golden","golfer","gomuti","gonads","goober","goodie","goodly","goofed","googly","googol","gooney","gooses","gopher","gorger","gorges","gorgon","gorier","goring","gospel","gossip","gotcha","gotten","gouged","gouger","gouges","gourds","govern","gowned","grabby","graced","graces","graded","grader","grades","grafts","graham","grails","grains","grainy","gramme","gramps","grange","granny","grants","grapes","graphs","grappa","grasps","grassy","grated","grater","grates","gratin","gratis","gravel","graven","graver","graves","gravid","grazed","grazer","grazes","grease","greasy","greats","greave","greedy","greens","greets","grieve","grille","grills","grimed","grimes","grimly","grinds","gringo","griped","griper","gripes","grippe","grisly","gritty","grivet","groans","grocer","groggy","grooms","groove","groovy","groped","groper","gropes","grotto","grouch","ground","groups","grouse","grouts","grovel","grover","groves","grower","growls","growth","grubby","grudge","grugru","grumps","grumpy","grunts","guards","guenon","guests","guffaw","guided","guider","guides","guilty","guinea","guised","guises","guitar","gulags","gulden","gulled","gullet","gulped","gulper","gummed","gummer","gundog","gunman","gunmen","gunned","gunnel","gunner","gunter","gurgle","gurney","gushed","gusher","gushes","gusset","gutted","gutter","guying","guzzle","gypsum","gyrate","habeas","habits","hacked","hacker","hackle","haemal","haggis","haggle","hailed","hailer","hairdo","haired","halide","haling","halite","halloo","hallow","haloes","halted","halter","halvah","halved","halves","hamlet","hammer","hamper","handed","handle","hangar","hanged","hanger","hanker","hankie","hansom","happen","harass","harden","harder","hardly","harked","harken","harlot","harmed","harmer","harped","harrow","hashed","hasher","hashes","hassle","hasted","hasten","hatbox","hating","hatpin","hatred","hatter","hauled","hauler","haunch","haunts","havens","having","havocs","hawing","hawked","hawker","hawser","haying","haymow","hazard","hazier","hazily","hazing","headed","header","healed","healer","health","heaped","hearer","hearse","hearth","hearts","hearty","heated","heater","heaved","heaven","heaver","heaves","heckle","hectic","hector","heddle","hedged","hedger","hedges","heeded","heehaw","heeled","heeler","hefted","hegira","heifer","height","heists","helium","hellos","helmet","helped","helper","helved","helves","hemmed","hemmer","hempen","henbit","hepcat","herald","herbal","herded","herder","hereby","herein","hereof","hereon","heresy","hereto","hermit","hernia","heroes","heroic","heroin","herons","herpes","hetero","hewing","hexane","heyday","hiatus","hidden","hiding","higher","highly","hijack","hikers","hiking","hilled","hinder","hinged","hinges","hinted","hipped","hipper","hippie","hippos","hirers","hiring","hispid","hissed","hisser","hisses","hither","hitter","hiving","hoagie","hoards","hoarse","hoaxed","hoaxer","hoaxes","hobble","hobnob","hockey","hoeing","hogged","hogtie","hoicks","hoists","holder","holier","holies","holily","holing","holism","holler","hollow","holmic","homage","hombre","homely","homers","homier","homily","homing","hominy","honcho","honest","honeys","honing","honked","honker","honour","hooded","hoodoo","hoofed","hoofer","hookah","hooked","hooker","hoopla","hoopoe","hooray","hootch","hooted","hooter","hoover","hooves","hoping","hopped","hopper","hopple","horary","hordes","horned","hornet","horrid","horror","horses","hosier","hosing","hosted","hostel","hotbed","hotbox","hotels","hotpot","hotrod","hotter","hounds","hourly","housed","houses","hovels","hovers","howdah","howled","howler","hoyden","hubbub","hubcap","hubris","huddle","hugely","hugest","hugged","hugger","hulked","hulled","huller","humane","humans","humble","humbly","humbug","hummed","hummer","humour","humped","humpty","hunger","hungry","hunker","hunted","hunter","hurdle","hurled","hurler","hurrah","hurray","hurter","hurtle","hushed","hushes","husked","husker","hussar","hustle","huzzah","hybrid","hydria","hymens","hymnal","hyphen","hypoid","hyssop","iambic","iambus","ibises","icebox","icecap","iceman","icicle","iciest","icings","ickier","iconic","ideals","ideate","idiocy","idioms","idiots","idlers","idlest","idling","igloos","ignite","ignore","iguana","illume","imaged","images","imbibe","imbrue","imbued","immune","immure","impact","impair","impala","impale","impart","impede","impels","impend","impish","import","impose","impost","impugn","impure","impute","inaner","inborn","inbred","incant","incept","incest","inched","inches","incise","incite","income","incubi","incurs","incuse","indaba","indeed","indene","indent","indict","indigo","indium","indoor","induce","induct","indult","infamy","infant","infect","infers","infest","infill","infirm","inflow","influx","inform","infuse","ingest","inhale","inhaul","inhere","inhume","inject","injure","injury","inking","inlaid","inland","inlets","inmate","inmost","innate","inning","inputs","inroad","inrush","insane","inseam","insect","insert","insets","inside","insist","insole","instep","instil","insult","insure","intact","intake","intend","intent","intern","intone","intuit","inured","invade","invent","invert","invest","invite","invoke","inward","iodide","iodine","iodise","iolite","ionise","ionone","ipecac","ireful","irenic","irises","iritis","irking","ironed","ironer","ironic","irrupt","island","islets","isobar","isomer","isopod","issued","issuer","issues","italic","itches","itself","jabbed","jabber","jackal","jacked","jacket","jading","jagged","jaguar","jailed","jailer","jailor","jalopy","jammed","jammer","jangle","japery","japing","jarful","jargon","jarred","jasper","jaunts","jaunty","jeerer","jejune","jelled","jerboa","jerked","jerker","jerkin","jersey","jested","jester","jetsam","jetted","jewels","jibber","jibing","jigged","jigger","jiggle","jigsaw","jilted","jilter","jingle","jingly","jitney","jitter","jiving","jobbed","jobber","jockey","jocose","jocund","jogged","jogger","joggle","joined","joiner","joints","joists","jokers","joking","jolted","jolter","joshed","josher","joshes","jostle","jotted","jotter","jounce","jousts","jovial","joyful","joyous","joypop","jubbah","judged","judger","judges","judoka","jugged","juggle","juiced","juicer","juices","jujube","juleps","jumble","jumbos","jumped","jumper","jungle","junior","junket","junkie","juries","jurist","jurors","justly","jutted","kakapo","kaolin","karate","karmic","kasbah","kayaks","kayoed","kazoos","kebabs","keeled","keener","keenly","keeper","kelpie","kennel","kermes","kermis","kernel","kersey","ketene","kettle","kewpie","keying","keypad","keyway","kibble","kibitz","kibosh","kicked","kicker","kidded","kidder","kiddie","kidnap","kidney","killed","killer","kilter","kimono","kinder","kindle","kindly","kingly","kiosks","kipper","kirsch","kirtle","kismet","kissed","kisser","kisses","kitbag","kiting","kitsch","kitten","kittle","klatch","klaxon","kludge","knacks","knaves","kneads","kneels","knells","knifed","knifes","knight","knives","knocks","knolls","knotty","knower","kobold","kopeck","kosher","kowtow","kraken","labels","labial","labile","labium","lablab","labour","labret","lacier","lacing","lacked","lackey","lactic","lacuna","ladder","laddie","ladies","lading","ladled","ladles","lagers","lagged","lagoon","lambda","lamely","lament","lamest","lamina","laming","lampas","lanced","lancer","lances","lancet","landau","landed","lander","lankly","lapdog","lapels","lapful","lapped","lapper","lappet","lapsed","lapser","lapses","laptop","larded","larder","larger","largos","lariat","larker","larrup","larvae","larval","larynx","lasers","lashed","lasher","lashes","lasing","lasses","lassie","lasted","lastly","lateen","lately","latent","latest","lather","lathes","latish","latter","lauder","laughs","launch","laurel","lavabo","laving","lavish","lawful","lawman","lawmen","lawyer","laxity","layers","laying","layman","laymen","layoff","layout","lazier","lazily","lazing","lazuli","leaded","leaden","leader","leafed","league","leaked","leaned","leaner","leanly","leaped","leaper","learns","learnt","leased","leases","leaved","leaven","leaver","leaves","lecher","lector","ledger","ledges","leered","leeway","legacy","legate","legato","legend","legged","legion","legist","legman","legume","lemmas","lemons","lemony","lender","length","lenity","lenses","lentil","lepers","lepton","lesion","lessee","lessen","lesser","lesson","lethal","letter","levees","levels","levers","levied","levier","levies","levity","lewdly","lexeme","liable","liaise","libels","libido","lichen","licked","licker","lidded","lieder","lierne","lifers","lifted","lifter","lights","lignin","lignum","likely","likens","liking","lilacs","lilied","lilies","limbed","limber","limbic","limbos","limier","liming","limits","limner","limped","limper","limpet","limpid","limply","linage","linden","lineal","linear","linens","liners","lingam","linger","lingua","lining","linked","linker","linkup","linnet","lintel","linter","lipase","lipids","lipoid","lipped","lippie","liquid","liquor","lisped","lisper","lissom","listed","listen","litany","litmus","litres","litter","little","lively","livers","livery","living","lizard","llamas","llanos","loaded","loader","loafed","loafer","loaned","loaner","loathe","loaves","lobule","locale","locals","locate","locked","locker","locket","lockup","locust","lodged","lodger","lodges","logged","logger","logics","logins","logion","logjam","logoff","logout","loiter","lollop","lonely","loners","longed","longer","looked","lookup","loomed","looped","loosed","loosen","looser","looses","looted","looter","loping","lopped","lopper","lordly","losers","losing","losses","lotion","louder","loudly","lounge","loused","louses","louvre","lovely","lovers","loving","lowboy","lowers","lowest","lowing","lubber","lucent","lucked","luffed","lugged","lugger","lulled","lumbar","lumber","lumens","lummox","lumped","lunacy","lunged","lupine","luring","lurked","lushes","lushly","lustre","luxury","lyceum","lynxes","lyrics","lyrist","macaws","macron","macros","macula","madams","madcap","madden","madder","madman","madmen","madras","maenad","maggot","magnet","magnum","magpie","maguey","mahout","maiden","mailed","mailer","maimed","mainly","maitre","majors","makers","makeup","making","malady","malice","malign","mallet","mallow","malted","mambos","mammal","mammas","mammon","manage","manful","manger","mangle","mangos","maniac","manioc","manned","manner","manors","manque","mantel","mantic","mantis","mantle","mantra","manual","manure","maples","mapped","maraca","maraud","marble","margin","marina","marine","marked","marker","market","marlin","marmot","maroon","marred","marrow","marshy","marten","martin","martyr","marvel","mascot","mashed","masher","mashes","mashie","masked","masker","masons","masque","massed","masses","massif","masted","master","mastic","mating","matins","matrix","matron","matted","matter","mature","matzos","mauler","maxims","mayday","mayfly","mayhap","mayhem","mayors","meadow","meagre","meaner","meanly","measly","medals","meddle","medial","median","medias","medico","medics","medium","medley","meeker","meekly","megohm","megrim","mellow","melody","melons","melted","member","memoir","memory","menace","mended","mender","menhir","menial","mensal","menses","mental","mentor","meowed","mercer","merely","merest","merged","merger","merges","merino","merits","merlon","merman","mermen","mescal","meshed","meshes","messed","messes","metals","meteor","meters","method","methyl","metier","meting","metres","metric","metros","mettle","mezzos","miasma","mickle","micron","micros","midair","midday","midden","middle","midges","midget","midrib","midway","miffed","mighty","mignon","milady","milder","mildew","mildly","milieu","milked","milker","milled","miller","millet","milord","mimics","miming","mimosa","minced","minces","minded","minder","miners","mingle","minify","minima","mining","minion","minnow","minors","minted","minter","minuet","minute","minxes","mirage","miring","mirror","misaim","miscue","misers","misery","misfit","mishap","mislay","misled","missal","missed","misses","missus","misted","mister","misuse","mitred","mitten","mixers","mixing","mizzen","mizzle","moaned","moated","mobbed","mobile","mocked","mocker","models","modems","modern","modest","modify","modish","module","modulo","mohair","moiety","molars","molest","molten","moment","monads","moneys","monger","monied","monies","monism","monist","monkey","monody","months","mooned","moored","mooted","moping","mopped","moppet","morale","morals","morass","morbid","morgue","morose","morrow","morsel","mortal","mortar","mortem","mosaic","mosque","mosses","mostly","motels","mother","motifs","motile","motion","motive","motley","motors","motown","mottle","mottos","moulds","mouldy","mounds","mounts","mourns","mouser","mousse","mouths","mouthy","movers","movies","moving","mowers","mowing","mucked","muckle","mucous","mudded","muddle","muesli","muffin","muffle","muftis","mugged","mugger","mukluk","mulish","mullah","mullet","mumble","mummer","murals","murder","murmur","muscle","museum","musing","muskeg","musket","muslin","mussed","mussel","musses","muster","mutant","mutate","mutely","mutest","muting","mutiny","mutter","mutton","mutual","muumuu","muzzle","myelin","myopia","myopic","myosin","myriad","myrtle","myself","mystic","mythic","mzungu","nabbed","nagged","nagger","nailed","namely","naming","napalm","napery","napkin","napped","narrow","nation","native","natter","nature","naught","nausea","navels","navies","nearby","neared","nearer","nearly","neaten","neater","neatly","nebula","necked","nectar","needed","needle","negate","nekton","nelson","nephew","nerved","nerves","nested","nester","nestle","nether","netted","netter","nettle","neural","neuron","neuter","newest","niacin","nibble","nicely","nicest","nicety","niches","nicked","nickel","nieces","nights","nimble","nimbly","nimbus","ninety","nipped","nipper","nipple","nitric","nitwit","nixing","nobble","nobler","nobles","nobody","nodded","nodule","noggin","noised","noises","nomads","noodle","nooses","normal","nosier","nosily","nosing","notary","notate","notice","notify","noting","notion","nougat","nought","novels","novice","nowise","nozzle","nuance","nubbin","nubile","nuclei","nudged","nudges","nudism","nudist","nudity","nugget","nulled","numbed","number","numbly","nuncio","nursed","nurses","nutlet","nutmeg","nutter","nuzzle","nylons","nympho","nymphs","oafish","oaring","obeyed","obiter","object","oblast","oblate","oblige","oblong","oboist","obsess","obtain","obtund","obtuse","obvert","occult","occupy","occurs","oceans","ocelot","octane","octant","octave","octavo","ocular","oddest","oddity","odious","odours","oedema","oeuvre","offend","offers","office","offing","offish","offset","ogling","ogress","oilcan","oilier","oiling","oilman","oilmen","oldest","oldies","olives","omegas","onions","online","onrush","onsets","onside","onward","oodles","oolong","oozier","oozing","opaque","opcode","opened","opener","openly","operas","opiate","opined","opines","oppose","oppugn","optics","optima","opting","option","opuses","oracle","orally","orange","orated","orates","orator","orbits","orchid","ordain","ordeal","orders","ordure","organs","orgasm","orgies","orient","origin","oriole","orison","ormolu","ornate","ornery","orphan","orrery","oscine","osmium","osprey","ossify","others","otiose","otters","ounces","ousted","ouster","outage","outbid","outcry","outfit","outfox","outgas","outgun","outing","outlaw","outlay","outlet","output","outrun","outset","outwit","overdo","overly","ovular","owlish","owners","owning","oxalic","oxalis","oxcart","oxides","oxtail","oxygen","oyster","pacers","pacify","pacing","packed","packer","packet","padded","paddle","padsaw","paeans","paella","pagans","pagers","paging","pagoda","pained","paints","paired","palace","palate","palely","palest","paling","pallet","pallid","pallor","palmed","palmer","palter","paltry","pampas","pamper","panama","pandas","pander","panels","panics","panned","panted","pantry","panzer","papacy","papaya","papers","papery","papist","papyri","parade","parang","parcel","pardon","parent","pariah","paring","parish","parity","parkas","parked","parker","parlay","parley","parody","parole","parrot","parsec","parsed","parser","parses","parson","parted","partly","passed","passer","passes","passim","pasted","pastel","pastes","pastor","pastry","patchy","patent","pathos","patina","patios","patois","patrol","patron","patted","patter","paunch","pauper","paused","pauses","pavane","paving","pawing","pawned","payday","payers","paying","payoff","payola","peaces","peachy","peahen","peaked","pealed","peanut","pearls","pearly","peavey","pebble","pebbly","pecans","pecked","pecker","pectin","pedalo","pedals","pedant","peddle","peeked","peeled","peeler","peeped","peered","peeved","peeves","peewee","pegged","pelage","pellet","pelmet","pelvic","pelvis","pencil","pended","penile","penman","penmen","penned","pennon","pentad","penult","penury","people","peplum","pepper","pepsin","peptic","perils","period","perish","perked","permit","person","pertly","peruse","peseta","pester","pestle","petals","petard","peters","petite","petrel","petrol","petted","pewter","peyote","phalli","phased","phases","phenol","phenyl","phlegm","phloem","phobia","phobic","phoebe","phoned","phones","phoney","phonic","phonon","phooey","photon","photos","phrase","phylum","physic","pianos","piazza","picked","picker","picket","pickle","pickup","picnic","piddle","pieced","pieces","pierce","piffle","pigeon","pigged","piglet","pignut","pigpen","pigsty","pilaff","pileup","pilfer","piling","pillar","pillow","pilots","pimple","pimply","pincer","pineal","pining","pinion","pinked","pinker","pinkie","pinkly","pinned","pipers","piping","pippin","piqued","piquet","piracy","pirate","pissed","pisser","pisses","pistil","pistol","piston","pitchy","pitied","pities","pitman","pitons","pitsaw","pitted","pivots","pixels","pixies","placed","placer","places","placid","plague","plaice","plaids","plains","plaint","plaits","planar","planed","planer","planes","planet","planks","plants","plaque","plasma","plated","platen","plates","played","player","plazas","pleads","please","pleats","plebes","pledge","plenty","plenum","pleura","plexus","pliant","pliers","plight","plinks","plinth","plough","plover","plucky","plumbs","plumed","plumes","plunge","plural","pluses","plying","pneuma","pocket","podium","poetic","poetry","pogrom","points","pointy","poised","poises","poison","pokier","pokily","poking","polder","police","policy","poling","polish","polite","polity","polkas","polled","pollen","pollex","polloi","pomade","pommel","pompon","poncho","ponder","pongee","ponies","poodle","pooled","poorer","poorly","popery","popgun","popish","poplar","poplin","popped","popper","poring","porker","porous","portal","ported","porter","portly","posers","poseur","posies","posing","posits","posses","possum","postal","posted","poster","potage","potash","potato","potboy","poteen","potent","potion","potpie","potted","potter","pounce","pounds","poured","pourer","pouted","pouter","powder","powers","powwow","praise","prance","pranks","prated","prates","prawns","praxis","prayed","prayer","preach","precis","prefab","prefer","prefix","premed","premix","prepay","preset","presto","pretty","preyed","priced","prices","pricey","pricks","prided","prides","priest","primal","primed","primer","primes","primly","primus","prince","prints","priori","priors","priory","prisms","prison","prissy","privet","prized","prizes","probed","probes","profit","prolix","prolog","prompt","prongs","pronto","proofs","propel","proper","propos","proton","proved","proven","proves","prowls","prudes","pruned","prunes","prying","psalms","pseudo","psyche","psycho","public","pucker","puddle","pueblo","puffed","puffer","puffin","puking","puling","pulled","puller","pullet","pulley","pulpit","pulsar","pulsed","pulses","pumice","pummel","pumped","punchy","pundit","punier","punish","punkah","punted","punter","pupate","pupils","puppet","purdah","pureed","purees","purely","purest","purged","purges","purify","purism","purist","purity","purled","purler","purlin","purple","purred","pursed","purser","purses","pursue","purvey","pushed","pusher","pushes","putlog","putout","putrid","putsch","putted","puttee","putter","puzzle","pyjama","pylons","pyrite","python","quacks","quahog","quails","quaint","quaked","quaker","quakes","qualms","quango","quanta","quarks","quarry","quarto","quarts","quartz","quasar","quaver","queasy","queens","queers","quells","quench","querns","quests","queued","queues","quiche","quiets","quills","quilts","quince","quinsy","quirks","quirky","quiver","quoits","quorum","quotas","quoted","quotes","rabbet","rabbit","rabble","rabies","racers","racial","racier","racing","racism","racist","racked","racket","racoon","radars","radial","radian","radios","radish","radium","radius","radome","raffia","raffle","rafter","ragbag","ragged","raging","ragman","ragout","ragtag","raided","raider","railed","rained","raised","raiser","raises","raisin","raison","rajahs","raking","rakish","ramble","ramify","ramjet","rammed","rammer","ramose","ramous","ramped","ramrod","rancho","rancid","random","ranged","ranger","ranges","ranked","ranker","rankle","rankly","ransom","ranted","rapids","rapier","rapine","raping","rapist","rapped","rappel","rapper","raptly","raptor","rarefy","rarely","rarest","raring","rarity","rascal","rasher","rashes","rashly","rasped","raster","rather","ratify","rating","ration","ratios","ratite","rattan","ratted","ratter","rattle","ravage","ravels","ravens","ravine","raving","ravish","rawest","razing","razors","razzle","reacts","reader","really","realms","realty","reamed","reamer","reaped","reaper","reared","rearms","reason","reaver","rebate","rebels","reboot","reborn","rebuff","rebuke","recall","recant","recast","recede","recent","recess","recipe","recite","reckon","recode","recoil","recopy","record","recoup","rectal","rector","rectos","rectum","recurs","redact","redbud","redbug","redcap","redden","redder","redeem","redeye","redial","redone","redraw","redtop","reduce","reefer","reeked","reeled","reeves","reface","refers","refill","refine","reflex","reflux","reform","refuel","refuge","refund","refuse","refute","regain","regale","regard","regent","reggae","regime","region","regnum","regret","rehash","rehear","reigns","reined","reiver","reject","rejoin","relate","relays","relent","relics","relict","relied","relief","relies","reline","relish","relive","reload","remade","remain","remake","remand","remark","remedy","remind","remise","remiss","remits","remora","remote","remove","rename","render","renege","renews","rennet","rennin","renown","rental","rented","renter","reopen","repack","repaid","repair","repast","repays","repeal","repeat","repels","repent","repine","replay","report","repose","repost","repute","reread","reruns","resale","rescan","rescue","reseat","reseed","resell","resend","resent","resets","reship","reside","resign","resins","resist","resize","resold","resole","resort","rested","result","resume","retail","retain","retake","retard","retell","retest","retied","retina","retire","retold","retool","retort","retted","return","retype","reused","reuses","revamp","reveal","revels","reverb","revere","revert","review","revile","revise","revive","revoke","revolt","revues","revved","reward","rewind","rewire","reword","rework","rezone","rhesus","rheumy","rhinos","rhombi","rhymed","rhymes","rhythm","rialto","ribald","riband","ribbed","ribbon","ribose","richer","riches","richly","rictus","ridded","ridden","riddle","riders","ridged","ridges","riding","riffle","rifled","rifles","rigged","rigger","rights","rigour","riling","riming","rimmed","ringed","ringer","rinsed","rinses","rioted","rioter","ripens","ripest","ripped","ripper","ripple","riprap","ripsaw","risers","rising","risked","ritual","rivals","rivers","rivets","riving","roamed","roared","roasts","robbed","robber","robins","robots","robust","rocked","rocker","rocket","rococo","rodent","rodeos","rogues","rolled","roller","romped","romper","rondos","roofed","roofer","rookie","roomed","roomer","rooted","rooter","ropers","ropier","roping","rosary","rosier","rosily","roster","rostra","rotary","rotate","rotgut","rotors","rotted","rotten","rotund","rouble","rounds","roused","rouses","routed","router","routes","roving","rowers","rowing","rozzer","rubbed","rubber","rubble","rubies","rubout","rubric","ruckus","rudder","ruddle","rudely","rudest","rueful","ruffed","ruffle","rugged","rugger","ruined","rulers","ruling","rumble","rumens","rumour","rumple","rumpus","rundle","runlet","runnel","runner","runoff","runway","rupees","rushed","rusher","rushes","russet","rusted","rustic","rustle","rutted","sables","sabres","sachem","sachet","sacked","sacker","sacral","sacred","sacrum","sadden","sadder","saddle","sadism","sadist","safari","safely","safest","safety","sagely","sagged","sailed","sailor","saints","salaam","salads","salami","salary","saline","saliva","sallow","salmon","salons","saloon","salsas","salted","saluki","salute","salver","salves","salvos","samara","sampan","sample","sancta","sandal","sanded","sander","sanely","sanest","sanity","sapped","sapper","sarong","sashay","sashes","sateen","sating","satiny","satire","satrap","saucer","sauces","saunas","savage","savant","savers","saving","savoir","savour","sawfly","sawing","sawyer","saying","scabby","scalar","scalds","scaled","scales","scalps","scampi","scanty","scarab","scarce","scared","scares","scarps","scathe","scenes","scenic","scents","schema","scheme","schism","schist","school","scions","sclera","scoffs","scolds","sconce","scoops","scoots","scoped","scopes","scorch","scored","scorer","scores","scoria","scorns","scotch","scoter","scours","scouts","scowls","scrape","scraps","scrawl","scream","screed","screen","screws","screwy","scribe","scrimp","script","scroll","scrota","scrubs","scruff","scuffs","sculls","sculpt","scummy","scurfy","scurry","scurvy","scythe","seabed","seadog","sealed","sealer","seaman","seamed","seamen","search","seared","season","seated","seaway","secant","secede","second","secret","sector","secure","sedans","sedate","seduce","seeded","seeing","seeker","seemed","seemly","seeped","seesaw","seethe","segued","segues","seized","seizes","seldom","select","seller","selves","senate","sender","senile","senior","sensed","senses","sensor","sentry","sepses","sepsis","septet","septic","septum","sequel","sequin","serape","seraph","serene","serial","series","serine","sermon","serous","serums","served","server","serves","servos","sesame","sestet","setoff","settee","setter","settle","sevens","severe","severs","sewage","sewers","sewing","sexier","sexily","sexism","sexist","sextet","sexton","sexual","shabby","shacks","shaded","shades","shadow","shaduf","shafts","shaggy","shaken","shaker","shakes","shalom","shaman","shamed","shames","shamus","shanty","shaped","shaper","shapes","shards","shared","sharer","shares","sharks","sharps","shaved","shaven","shaver","shaves","shawls","shears","sheath","sheave","sheets","sheikh","shekel","shells","shelly","shelve","sherry","shield","shiest","shifts","shifty","shills","shimmy","shined","shiner","shines","shinny","shires","shirks","shirts","shiver","shoals","shocks","shoddy","shogun","shoots","shoran","shored","shores","shorts","should","shouts","shoved","shovel","shoves","showed","shower","shrank","shreds","shrewd","shrews","shriek","shrift","shrike","shrill","shrimp","shrine","shrink","shrive","shroud","shrove","shrubs","shrugs","shrunk","shtick","shucks","shunts","shyest","shying","sibyls","sicken","sicker","sickle","sickly","siding","sidled","sidles","sieges","sienna","sierra","siesta","sieves","sifted","sifter","sighed","sights","signal","signed","signer","signet","silage","silent","silica","silken","silted","silver","simian","simile","simmer","simony","simoom","simper","simple","simply","sinews","sinewy","sinful","singed","singer","single","singly","sinker","sinned","sinner","sinter","sipped","sipper","sirens","siring","sister","sitcom","sitter","sixths","sizing","sizzle","skated","skater","skates","skeins","sketch","skewed","skewer","skibob","skidoo","skiffs","skiing","skills","skimps","skimpy","skinny","skirts","skivvy","skulks","skulls","skunks","skycap","skyway","slacks","slaked","slalom","slangy","slants","slated","slates","slaved","slaver","slaves","slayer","sleazy","sledge","sleeps","sleepy","sleety","sleeve","sleigh","sleuth","slewed","sliced","slices","slicks","slider","slides","sliest","slight","slimed","slimes","slimly","slings","slinks","slinky","sliver","slogan","sloops","sloped","slopes","sloppy","slouch","slough","slowed","slower","slowly","sludge","sludgy","sluice","sluing","slummy","slumps","slurps","slurry","slushy","slyest","smacks","smarmy","smarts","smarty","smears","smeary","smells","smelly","smelts","smiled","smiles","smiley","smirch","smiths","smithy","smocks","smoggy","smoked","smoker","smokes","smooch","smooth","smudge","smudgy","smugly","smutch","smutty","snacks","snails","snaked","snakes","snappy","snared","snares","snarls","snatch","snazzy","sneaks","sneaky","sneers","sneeze","sneezy","snider","sniffs","sniffy","sniped","sniper","snipes","snippy","snitch","snivel","snobby","snoops","snoopy","snooty","snooze","snored","snores","snorts","snotty","snouts","snowed","snuffs","snugly","soaked","soaker","soaped","soared","sobbed","sobers","soccer","social","socked","socket","sodden","sodium","soffit","soften","softer","softie","softly","soiled","soiree","solace","solder","solely","solemn","solids","soling","soloed","solute","solved","solver","solves","sombre","sonant","sonata","sonnet","sooner","soothe","sordid","sorely","sorest","sorrel","sorrow","sorted","sorter","sortie","sought","sounds","source","soured","sourer","sourly","soviet","sovran","sowing","spaced","spacer","spaces","spaded","spades","spanks","spared","sparer","spares","sparks","sparse","spasms","spates","spavin","spawns","spayed","speaks","spears","specie","specks","speech","speeds","speedy","spells","spends","sperms","sphere","sphinx","spiced","spices","spider","spiffy","spigot","spiked","spikes","spills","spinal","spines","spinet","spiral","spires","spirit","spited","spites","splash","spleen","splice","spline","splint","splits","spoils","spoilt","spoken","spokes","sponge","spongy","spooky","spools","spoons","spores","sports","sporty","spotty","spouse","spouts","sprain","sprang","sprawl","sprays","spread","sprees","sprier","spring","sprint","sprite","sprout","spruce","sprung","spryer","spryly","spunky","spurge","spurns","spurts","sputum","spying","squabs","squads","squall","square","squash","squats","squawk","squeak","squeal","squibs","squids","squint","squire","squirm","squirt","squish","stable","stably","stacks","staffs","staged","stager","stages","stains","stairs","staked","stakes","staled","staler","stales","stalks","stalls","stamen","stamps","stance","stanch","stands","stanza","stapes","staple","starch","stared","stares","starry","starts","starve","stases","stasis","stated","states","static","stator","statue","status","staved","staves","stayed","steady","steaks","steals","steams","steamy","steeds","steels","steely","steeps","steers","stench","stenos","steppe","stereo","sterna","sterns","sterol","stewed","sticks","sticky","stiffs","stifle","stigma","stiles","stills","stilly","stilts","stings","stingy","stinks","stinky","stints","stitch","stoats","stocks","stocky","stodgy","stoics","stoked","stoker","stokes","stolen","stoles","stolid","stomas","stomps","stoned","stoner","stones","stooge","stools","stoops","stored","stores","storey","storks","storms","stormy","stoves","stowed","strafe","strain","strait","strake","strand","straps","strata","straws","strays","streak","stream","street","stress","strewn","strews","strict","stride","strife","strike","string","stripe","strips","stripy","strive","strobe","strode","stroke","stroll","strong","strops","strove","struck","strung","struts","stubby","stucco","studio","stuffs","stuffy","stumps","stumpy","stunts","stupid","stupor","sturdy","styled","styles","stylus","stymie","subdue","sublet","submit","subnet","suborn","subset","subtle","subtly","suburb","subway","sucked","sucker","suckle","sudden","suffer","suffix","sugars","sugary","suited","suites","suitor","sulked","sullen","sultan","sultry","summed","summer","summit","summon","sunbow","sundae","sunder","sundew","sundog","sundry","sunhat","sunken","sunlit","sunned","sunray","sunset","suntan","superb","supine","supper","supple","supply","surely","surest","surety","surfer","surged","surges","surrey","surtax","survey","suttee","suture","svelte","swains","swamps","swampy","swanky","swarms","swatch","swathe","swayed","swears","sweats","sweaty","sweeps","sweets","swells","swerve","swings","swingy","swiped","swipes","swirls","swishy","switch","swivel","swoons","swoops","swoosh","swords","sylvan","symbol","syndic","synods","syntax","syrupy","system","tabard","tabbed","tabled","tables","tablet","taboos","tabors","tacked","tackle","tactic","tagged","tailed","tailor","taints","takers","taking","talcum","talent","talked","talker","talkie","taller","tallow","talons","tamale","tamely","tamest","taming","tamper","tampon","tandem","tangle","tangos","tanked","tanker","tanned","tanner","tannic","tannin","tapers","taping","tapirs","tapped","tappet","target","tariff","tarmac","tarpon","tarred","tarsal","tarsus","tartan","tartar","tartly","tasked","tassel","tasted","taster","tastes","tatted","tatter","tattle","tattoo","taught","taunts","tauten","tautly","tavern","tawdry","taxied","taxies","taxing","teacup","teamed","teapot","teased","teasel","teaser","teases","tedium","teeing","teemed","teensy","teeter","teethe","teller","telnet","temper","temple","tempos","tempts","tenant","tended","tender","tendon","tenets","tennis","tenors","tenpin","tensed","tenser","tenses","tensor","tented","tenths","tenure","tepees","termed","terror","terser","tested","tester","testes","testis","tetchy","tether","tetrad","thanks","thatch","thawed","thecae","thefts","theirs","theism","theist","themes","thence","theory","thermo","theses","thesis","thetas","thieve","thighs","things","thinks","thinly","thirds","thirst","thirty","thorax","thorns","thorny","though","thrall","thrash","thread","threat","threes","thresh","thrice","thrift","thrill","thrive","throat","throbs","throes","throne","throng","throve","thrown","throws","thrush","thrust","thumbs","thumps","thusly","thwack","thwart","thymes","thymus","ticked","ticker","ticket","tickle","tiddly","tidied","tidier","tidies","tidily","tiding","tiepin","tierce","tiered","tiffin","tigers","tights","tildes","tiling","tilled","tiller","tilted","timber","timbre","timely","timers","timing","tinder","tinged","tingle","tingly","tinier","tinker","tinkle","tinned","tinpot","tinsel","tinted","tipped","tipper","tippet","tipple","tiptoe","tiptop","tirade","tiring","tisane","tissue","titans","titbit","tithes","titian","titled","titles","titres","titter","toasts","toasty","tocsin","toddle","toecap","toeing","toffee","toggle","toiled","toiler","toilet","tokens","tolled","tomato","tomboy","tomcat","tomcod","tomtit","tongue","tonics","toning","tonnes","tonsil","tooled","tooted","toothy","topics","toping","topped","topper","topple","torero","toroid","torpid","torpor","torque","torrid","torsos","tortes","tossed","tosses","totals","toting","totted","totter","toucan","touchy","toughs","toupee","toured","tousle","touted","towage","toward","towels","towers","towhee","towing","toxins","toying","traced","tracer","traces","tracks","tracts","traded","trader","trades","tragic","trails","trains","traits","tramps","trance","trashy","trauma","travel","treads","treats","treaty","treble","trebly","tremor","trench","trends","trendy","trepan","trepid","triage","trials","tribal","tribes","tricks","tricky","tricot","trifle","trilby","trimly","triode","triple","triply","tripod","triton","triune","trivet","trivia","troche","trogon","troika","trolls","troops","trophy","tropic","trough","troupe","trowel","truant","trucks","trudge","truest","truing","truism","trumps","trunks","trusts","trusty","truths","trying","tryout","tsetse","tubers","tubing","tubule","tucked","tucker","tuffet","tufted","tugged","tulips","tumble","tumour","tumult","tundra","tuners","tunica","tunics","tuning","tunnel","tupelo","turban","turbid","turbot","tureen","turgid","turkey","turned","turner","turnip","turret","turtle","tusker","tussah","tussle","tutees","tutors","tuxedo","tweaks","tweedy","tweeze","twelve","twenty","twiggy","twilit","twined","twines","twinge","twirls","twists","twisty","twitch","twofer","tycoon","typhus","typify","typing","typist","tyrant","uglier","ulcers","ultimo","umbrae","umlaut","umpire","unable","unbend","unbent","unbind","unbolt","unborn","uncial","unclad","uncles","unclog","uncoil","uncork","uncurl","undies","undine","undock","undoes","undone","unduly","unease","uneasy","uneven","unfair","unfelt","unfold","unfurl","unglue","unhand","unholy","unhook","unhurt","unions","unique","unisex","unison","united","unites","unjust","unkind","unlace","unlade","unlash","unless","unlike","unlink","unload","unlock","unmade","unmake","unmask","unmoor","unpack","unpaid","unpick","unplug","unread","unreal","unreel","unrest","unripe","unroll","unruly","unsafe","unsaid","unseal","unseat","unseen","unsent","unshed","unship","unshod","unsnap","unsold","unstop","unsung","unsure","unthaw","untidy","untied","unties","untold","untrue","unused","unveil","unwary","unwell","unwept","unwind","unwire","unwise","unworn","unwrap","unyoke","upbeat","update","upheld","uphill","uphold","upkeep","upland","uplift","upload","uppers","upping","uppish","uppity","uproar","uproot","upsets","upshot","upside","uptake","uptime","uptown","upturn","upward","upwind","urbane","urchin","urgent","urging","urinal","ursine","usable","usages","useful","ushers","usurer","uterus","utmost","utopia","utters","uvular","vacant","vacate","vacuum","vagary","vagina","vaguer","vainly","valets","valise","valley","valour","valued","values","valves","vandal","vanish","vanity","vapour","variac","varied","varies","varlet","vassal","vaster","vastly","vaults","vector","veered","veiled","veined","veldts","vellum","velour","velvet","vendee","vender","vendor","veneer","venery","venial","venire","venous","vented","venues","verbal","verger","verges","verify","verily","verity","vermin","vernal","versed","verses","versos","versus","vertex","vesper","vessel","vestal","vested","vestry","vetoed","vetoes","vetted","vexing","viable","viably","viands","victim","victor","vicuna","videos","viewed","viewer","vigour","vilely","vilest","vilify","villas","vinery","vinous","violet","violin","vipers","virago","virgin","virile","virtue","visage","viscid","vision","visits","visors","vistas","visual","vitals","vivify","vizier","vocals","voiced","voices","voided","volley","volume","volute","vomits","voodoo","vortex","votary","voters","voting","votive","vowels","vowing","voyage","voyeur","vulgar","vulvae","wadded","waddle","waders","wading","wafers","waffle","wagers","wagged","waggle","waging","wagons","wailed","wailer","waists","waited","waiter","waived","waiver","waives","wakeup","waking","waling","walked","walker","wallah","walled","wallet","wallop","wallow","walnut","walrus","wampum","wander","wangle","waning","wanted","wanton","wapiti","warble","warded","warden","warder","warier","warily","warmed","warmer","warmly","warmth","warned","warped","warred","warren","washed","washer","washes","wasted","waster","wastes","waters","watery","wattle","wavers","wavier","waving","waxier","waxing","waylay","weaken","weaker","weakly","wealth","weaned","weaner","weapon","wearer","weasel","weaver","weaves","webbed","wedded","wedged","wedges","weeded","weekly","weever","weevil","weighs","weight","weirdo","welded","welder","welkin","welled","welter","weskit","wetted","wetter","whacko","whacks","whaler","whales","whammy","wharfs","wharve","wheels","wheeze","wheezy","whence","wherry","whiled","whiles","whilom","whilst","whimsy","whined","whiner","whines","whiney","whinge","whinny","whippy","whirls","whirly","whisht","whisks","whisky","whiten","whiter","whites","whitey","wholes","wholly","whoops","whoosh","whores","whorls","whydah","wicked","wicker","wicket","wicopy","widely","widens","widest","widget","widows","widths","wields","wieldy","wiener","wienie","wifely","wigged","wiggle","wiggly","wigwag","wigwam","wilder","wildly","wilful","wilier","wilily","wiling","willed","willow","wilted","wimble","wimple","winced","winces","wincey","winded","winder","window","windup","winery","winged","winger","wining","winked","winker","winkle","winner","winnow","winter","wintry","wipers","wiping","wirier","wirily","wiring","wisdom","wisely","wisent","wisest","wished","wisher","wishes","wising","withal","wither","within","witted","witter","wittol","wizard","wobble","wobbly","woeful","woggle","wolver","wolves","wombat","wonder","wonted","wonton","wooded","wooden","woodsy","woofed","woofer","wooing","woolly","worded","worked","worker","worlds","wormed","wormer","worsen","worthy","wounds","wracks","wraith","wrasse","wreaks","wreath","wrecks","wrench","wrests","wretch","wriest","wright","wrings","wrists","writer","writes","writhe","wrongs","wyvern","xxviii","xxxiii","xxxvii","yachts","yammer","yanked","yarded","yarned","yarrow","yaupon","yawing","yawner","yclept","yearly","yearns","yeasts","yeasty","yelled","yeller","yellow","yelped","yelper","yeoman","yeomen","yester","yields","yippee","yodels","yoicks","yokels","yoking","yonder","youths","yuppie","zanier","zanies","zanily","zapped","zealot","zebras","zenith","zephyr","zeroed","zeroes","zeugma","zigzag","zinger","zinnia","zipped","zipper","zircon","zither","zizith","zlotys","zodiac","zombie","zoning","zonked","zoomed","zounds","zygote",
		"aarrghh","abactor","abalone","abanded","abandon","abasers","abashed","abashes","abasias","abasing","abaters","abating","abators","abattis","abature","abaxial","abaxile","abbotcy","abdomen","abduced","abduces","abducts","abelian","abelias","abettal","abetted","abetter","abettor","abeyant","abfarad","abhenry","abidden","abiders","abiding","abietic","abigail","ability","abioses","abiosis","abiotic","abjects","abjoint","abjured","abjurer","abjures","ablated","ablates","ablator","ablauts","ableism","ableist","ablings","abluent","abluted","aboding","abolish","abollae","abollas","abomasa","abomasi","aborded","aborted","abortee","aborter","abortus","abought","aboulia","aboulic","abounds","abraded","abrader","abrades","abraids","abrasax","abraxas","abrayed","abrazos","abreact","abreast","abreges","abridge","abroach","abroads","abrooke","abrosia","abrupts","abscess","abscind","abscise","absciss","abscond","abseils","absence","absents","absinth","absolve","absorbs","abstain","absurds","abthane","abubble","abulias","abusage","abusers","abusing","abusion","abusive","abuttal","abutted","abutter","abvolts","abwatts","abyeing","abysmal","abyssal","abysses","acacias","academe","academy","acajous","acaleph","acantha","acanthi","acanths","acapnia","acarian","acarids","acarine","acaroid","acaters","acatour","acaudal","accable","acceded","acceder","accedes","accends","accents","accepts","accidia","accidie","accinge","accited","accites","acclaim","accloys","accoast","accoied","accoils","accompt","accords","accosts","account","accourt","accoyed","accoyld","accrete","accrews","accrual","accrued","accrues","accurse","accurst","accusal","accused","accuser","accuses","acedias","acequia","acerate","acerber","acerbic","acerola","acerose","acerous","acetals","acetate","acetify","acetins","acetone","acetose","acetous","acetyls","achages","acharne","acharya","achates","achenes","achenia","achiest","achieve","achings","achiote","achiral","achkans","acholia","acicula","acidest","acidier","acidify","acidity","aciform","acinose","acinous","acknown","acknows","aclinic","acmatic","acmites","acnodal","acnodes","acolyte","acolyth","aconite","acorned","acouchi","acouchy","acquest","acquire","acquist","acquite","acquits","acrasia","acrasin","acratic","acreage","acrider","acridin","acridly","acrobat","acrogen","acromia","acronic","acronym","acroter","acrotic","acrylic","acrylyl","actable","actants","actinal","actings","actinia","actinic","actinon","actions","actives","actorly","actress","actuals","actuary","actuate","actures","aculeus","acumens","acushla","acutely","acutest","acyclic","acylate","acyloin","adagial","adagios","adamant","adapted","adapter","adaptor","adawing","adaxial","addable","addaxes","addedly","addeems","addenda","addends","addible","addicts","addling","addooms","address","addrest","adduced","adducer","adduces","adducts","adeemed","adenine","adenoid","adenoma","adenyls","adepter","adeptly","adermin","adharma","adhered","adherer","adheres","adhibit","adipose","adipous","adipsia","adjigos","adjoins","adjoint","adjourn","adjudge","adjunct","adjured","adjurer","adjures","adjuror","adjusts","adlands","admiral","admired","admirer","admires","admixed","admixes","adnexal","adnouns","adonise","adonize","adopted","adoptee","adopter","adorers","adoring","adorned","adorner","adpress","adreads","adrenal","adsorbs","adsukis","adulate","adultly","adusted","advance","advects","advened","advenes","advents","adverbs","adverse","adverts","advewed","advices","advised","advisee","adviser","advises","advisor","adwards","adwares","adwoman","adwomen","adzukis","aecidia","aediles","aefauld","aegises","aemuled","aemules","aeneous","aeolian","aeonian","aerated","aerates","aerator","aerials","aeriest","aerobat","aerobes","aerobia","aerobic","aerobus","aerogel","aerosat","aerosol","aerugos","aethers","afeared","affable","affably","affaire","affairs","affeard","affeare","affears","affects","affeers","affiant","affiche","affinal","affined","affines","affirms","affixal","affixed","affixer","affixes","afflict","affoord","afforce","affords","affraps","affrays","affrets","affront","affying","afghani","afghans","afreets","aftmost","aftosas","agacant","against","agamete","agamids","agamoid","agamont","agamous","agapeic","agarics","agarose","agatise","agatize","agatoid","ageings","ageisms","ageists","agelast","ageless","agelong","agemate","agendas","agendum","agenise","agenize","agented","agentry","ageusia","aggadah","aggadas","aggadic","aggadot","aggrace","aggrade","aggrate","aggress","agilely","agilest","agility","aginner","agisted","agister","agistor","agitans","agitate","agitato","agitpop","aglycon","agnails","agnamed","agnames","agnates","agnatic","agnised","agnises","agnized","agnizes","agnomen","agnosia","agnosic","agogics","agonies","agonise","agonist","agonize","agoroth","agoutas","agoutis","agrafes","agraffe","agrapha","agraste","agravic","agreges","agrised","agrises","agrized","agrizes","aground","agryzed","agryzes","aguised","aguises","aguized","aguizes","aheight","ahimsas","ahungry","aiblins","aidance","aidless","aieries","aiglets","aigrets","aikidos","ailanto","aileron","ailette","ailment","aimless","ainsell","airbags","airbase","airboat","aircrew","airdate","airdrop","airfare","airflow","airfoil","airgaps","airglow","airhead","airhole","airiest","airings","airless","airlift","airlike","airline","airlock","airmail","airning","airpark","airplay","airport","airpost","airshed","airship","airshot","airshow","airsick","airside","airstop","airthed","airtime","airting","airward","airwave","airways","airwise","aisling","aitches","ajowans","ajutage","akeakes","akedahs","akenial","akharas","akiraho","akrasia","akratic","akvavit","alalias","alameda","alamode","alamort","alanine","alanins","alannah","alanyls","alarmed","alarums","alaskas","alastor","alation","alaying","albatas","albedos","albergo","alberts","albinal","albinic","albinos","albites","albitic","albizia","albugos","albumen","albumin","alcades","alcaics","alcaide","alcalde","alcayde","alcazar","alchemy","alchera","alchymy","alcohol","alcools","alcopop","alcorza","alcoved","alcoves","aldoses","aldrins","alecost","alegars","alegged","alegges","alembic","alencon","alength","alepine","alerces","alerion","alerted","alerter","alertly","alethic","aleuron","alevins","alewife","alexias","alexine","alexins","aleying","alfakis","alfalfa","alfaqui","alferez","alforja","alfredo","algates","algebra","algeses","algesia","algesic","algesis","algetic","alginic","aliases","alibied","alibies","alicant","alidade","alidads","aliened","alienee","aliener","alienly","alienor","aliform","alights","aligned","aligner","aliment","alimony","aliners","alining","alipeds","aliquot","alismas","alisons","aliunde","aliyahs","aliyoth","alizari","alkalic","alkalin","alkalis","alkanes","alkanet","alkenes","alkines","alkylic","alkynes","allayed","allayer","alledge","alleged","alleger","alleges","allegge","allegro","alleles","allelic","allergy","alleyed","allheal","allices","allicin","allises","alliums","allness","allobar","allodia","allonge","allonym","allover","allowed","alloxan","alloyed","allseed","alluded","alludes","allured","allurer","allures","alluvia","allying","allylic","almains","almanac","almemar","almirah","almners","almonds","almondy","almoner","almonry","almsman","almsmen","almuces","almudes","alnager","alnages","alnicos","alodial","alodium","aloetic","alogias","alonely","alongst","aloofly","alpacas","alpacca","alpeens","alphorn","alphyls","alpines","already","alright","alsikes","alsoone","altered","alterer","alterne","altesse","altezas","altezza","althaea","altheas","althorn","altoist","aludels","alumina","alumine","alumins","alumish","alumium","alumnae","alumnus","alunite","alveary","alveole","alveoli","alyssum","amabile","amadoda","amadous","amalgam","amandla","amanita","amarant","amarone","amassed","amasser","amasses","amateur","amating","amation","amative","amatols","amatory","amazing","amazons","ambages","ambaris","ambassy","ambatch","ambeers","ambered","ambient","ambitty","amblers","ambling","amboina","ambones","amboyna","ambries","ambroid","ambsace","amearst","amebean","ameboid","amelias","amenage","amended","amender","amendes","amening","amenity","amental","amentia","amentum","amerced","amercer","amerces","amesace","amiable","amiably","amidase","amidine","amidins","amidols","amidone","amildar","aminity","amirate","amisses","amities","ammeter","ammines","ammiral","ammonal","ammonia","ammonic","amnesia","amnesic","amnesty","amnions","amniote","amoebae","amoeban","amoebas","amoebic","amokura","amomums","amongst","amooved","amooves","amorant","amorces","amorets","amorini","amorino","amorism","amorist","amorosa","amoroso","amorous","amosite","amotion","amounts","amoving","ampassy","amperes","amphora","amplest","amplify","ampoule","ampules","ampulla","amputee","amreeta","amritas","amtmans","amtrack","amtracs","amulets","amusers","amusias","amusing","amusive","amygdal","amylase","amylene","amyloid","amylose","amylums","amytals","anadems","anaemia","anaemic","anagoge","anagogy","anagram","analgia","anality","analoga","analogs","analogy","analyse","analyst","analyte","analyze","anankes","anapest","anaphor","anarchs","anarchy","anatase","anatman","anatomy","anattas","anattos","anaxial","anchors","anchovy","anchusa","ancient","ancilia","ancilla","ancomes","anconal","ancones","ancress","andante","andiron","android","andvile","aneared","anelace","aneling","anemias","anemone","anergia","anergic","aneroid","anestra","anestri","anethol","aneurin","angakok","angaria","angekok","angeled","angelic","angelus","angered","angerly","angicos","anginal","anginas","angioma","anglers","anglice","anglify","angling","anglist","angoras","angrier","angries","angrily","anguine","anguish","angular","anhinga","aniccas","anicuts","aniline","anilins","anility","animacy","animals","animate","animato","animism","animist","anionic","aniseed","anisole","anklets","ankling","anklong","anklung","ankuses","anlaces","anlagen","anlages","anlases","annates","annatta","annatto","anneals","annelid","annexed","annexes","annicut","annonas","annoyed","annoyer","annuals","annuity","annular","annulet","annulus","anobiid","anodise","anodize","anodyne","anoeses","anoesis","anoetic","anoints","anolyte","anomaly","anomies","anonyma","anonyms","anopias","anopsia","anoraks","anorexy","anosmia","anosmic","another","anoxias","ansated","answers","antacid","antaras","antbear","antbird","antefix","anteing","antenna","anthems","anthers","anthill","anthoid","anthrax","antiair","antiars","antibug","antical","anticar","anticke","anticks","anticly","antient","antifat","antiflu","antifog","antifur","antigay","antigen","antigun","antijam","antilog","antiman","antings","antipot","antique","antired","antisag","antisex","antitax","antiwar","antlers","antliae","antlike","antlion","antonym","antrums","antsier","anurans","anurias","anurous","anviled","anxiety","anxious","anybody","anymore","anyones","anyroad","anytime","anyways","anywhen","anywise","anziani","aorists","aoudads","apaches","apadana","apagoge","apanage","aparejo","apatite","apaying","apedoms","apehood","apelike","apepsia","apercus","aperies","apetaly","aphagia","aphakia","aphasia","aphasic","aphelia","apheses","aphesis","aphetic","aphides","aphonia","aphonic","aphotic","aphthae","aphylly","apicals","apician","apiculi","apishly","aplanat","aplasia","aplenty","aplites","aplitic","aplombs","apnoeal","apnoeas","apnoeic","apocarp","apocope","apodous","apogamy","apogeal","apogean","apogees","apogeic","apollos","apologs","apology","apolune","apomict","apoplex","aporias","apostil","apostle","apothem","apozems","appairs","appalls","appalti","appalto","apparat","apparel","appeach","appeals","appears","appease","appends","apperil","applaud","applets","applied","applier","applies","appoint","apports","apposed","apposer","apposes","appress","apprise","apprize","approof","approve","appuied","appulse","appuyed","apraxia","apraxic","apricot","aproned","apropos","aprotic","apsaras","apsidal","apsides","apteral","apteria","apteryx","aptness","aptotes","aptotic","apyrase","aquafer","aquaria","aquatic","aquavit","aqueous","aquifer","aquilon","aquiver","araaras","arabesk","arabica","arabins","arabise","arabize","arables","arachis","araised","araises","aralias","aramids","araneid","araroba","araysed","arayses","arbiter","arblast","arbored","arbores","arboret","arborio","arbours","arbutes","arbutus","arcaded","arcades","arcadia","arcanas","arcanum","archaea","archaei","archaic","archean","archers","archery","archest","archeus","archfoe","archils","archine","arching","archive","archlet","archons","archway","arcings","arcking","arcmins","arcsecs","arcsine","arcsins","arctans","arctics","arctiid","arctoid","arcuate","arcuses","ardency","ardours","ardrigh","arduous","areally","areaway","areding","arefied","arefies","arenite","arenose","arenous","areolae","areolar","areolas","areoles","aretted","argalas","argalis","argands","argents","arghans","argling","argonon","argotic","arguers","arguing","argulus","arguses","argyles","argylls","argyria","aridest","aridity","arietta","ariette","arillus","ariosos","aripple","arishes","arising","aristae","aristas","aristos","arkites","arkoses","arkosic","armadas","armband","armfuls","armhole","armiger","armilla","armings","armless","armlets","armlike","armload","armlock","armoire","armored","armorer","armours","armoury","armpits","armrest","armsful","armures","arnatto","arnicas","arnotto","aroints","arollas","arousal","aroused","arouser","arouses","aroynts","arpents","arracks","arraign","arrange","arrased","arrases","arrayal","arrayed","arrayer","arrears","arreede","arrests","arriage","arrided","arrides","arriere","arriero","arrises","arrival","arrived","arriver","arrives","arrobas","arrowed","arroyos","arsenal","arsenic","arsheen","arshine","arshins","arsiest","arsines","article","artiest","artisan","artiste","artists","artless","artsier","artsies","artsman","artsmen","artwork","arugola","arugula","aruspex","asarums","ascared","ascarid","ascaris","ascaunt","ascends","ascents","asceses","ascesis","ascetic","ascians","ascidia","ascites","ascitic","asconce","ascribe","asepses","asepsis","aseptic","asexual","ashamed","ashames","ashcake","ashcans","ashfall","ashiest","ashiver","ashkeys","ashlars","ashlers","ashless","ashrama","ashrams","ashtray","asiagos","asinico","asinine","askance","askants","askaris","askeses","askesis","askings","asklent","aslaked","aslakes","asocial","aspects","asperge","asperse","asphalt","asphyxy","aspicks","aspidia","aspines","aspired","aspirer","aspires","aspirin","aspises","asports","asprawl","aspread","asprout","asquint","asramas","assagai","assails","assarts","assault","assayed","assayer","assegai","assents","asserts","assever","asshole","assiege","assigns","assists","assized","assizer","assizes","asslike","assoils","assorts","assuage","assumed","assumer","assumes","assured","assurer","assures","assuror","asswage","astable","astarts","astasia","astatic","astatki","asteism","astelic","asteria","asterid","asterts","astheny","asthmas","asthore","astilbe","astoned","astones","astound","astrals","astrand","astrict","astride","astroid","astuter","astylar","asudden","asunder","asylums","ataatas","atabals","atabegs","atabeks","atabrin","atactic","ataghan","atalaya","atamans","ataraxy","atavism","atavist","ataxias","ataxics","ataxies","atebrin","atelier","atemoya","athames","athanor","atheise","atheism","atheist","atheize","atheous","athirst","athleta","athlete","athodyd","athrill","athwart","atimies","atingle","atishoo","atlases","atlatls","atocias","atokous","atomics","atomies","atomise","atomism","atomist","atomize","atoners","atonias","atonics","atonies","atoning","atopies","atresia","atresic","atretic","atriums","atrophy","atropia","atropin","attaboy","attache","attacks","attains","attaint","attasks","attaskt","attempt","attends","attents","attests","attired","attires","attonce","attones","attorns","attract","attraps","attrist","attrite","attrits","attuent","attuite","attuned","attunes","aubades","auberge","auburns","auction","aucubas","audible","audibly","audient","audiles","audings","audited","auditee","auditor","aufgabe","augends","augites","augitic","augment","augural","augured","augurer","auguste","augusts","auklets","auldest","aulnage","aumails","aunters","aunties","aurally","aurated","aurates","aureate","aureity","aurelia","aureola","aureole","auricle","aurists","aurochs","aurorae","auroral","auroras","ausform","auspice","austere","austral","ausubos","autarch","autarky","auteurs","authors","autisms","autists","autobus","autocar","autocue","autoing","automan","automat","automen","autonym","autopen","autopsy","autoput","autovac","autumns","autumny","auxeses","auxesis","auxetic","auxinic","availed","availes","avaling","avarice","avatars","avaunts","avellan","avenged","avenger","avenges","avenirs","avenses","aventre","avenues","average","averred","averted","averter","avgases","aviated","aviates","aviatic","aviator","avidest","avidins","avidity","aviette","aviform","avionic","avising","avizing","avocado","avocets","avodire","avoided","avoider","avosets","avoures","avoutry","avowals","avowers","avowing","avoyers","avrugas","avulsed","avulses","avyzing","awaited","awaiter","awakens","awaking","awarded","awardee","awarder","awarest","awarned","awayday","aweless","awesome","awfully","awhaped","awhapes","awheels","awkward","awlbird","awlwort","awmries","awniest","awnings","awnless","axebird","axially","axillae","axillar","axillas","axinite","axolotl","axoneme","axseeds","aywords","azaleas","azimuth","aziones","azollas","azotise","azotize","azotous","azulejo","azurean","azurine","azurite","azygies","azygous","azymite","azymous","baaings","baalism","baaskap","babacos","babalas","babassu","babbitt","babbled","babbler","babbles","babesia","babiche","babiest","bablahs","babools","baboons","baboosh","babuche","babudom","babuism","babying","babyish","babysat","babysit","bacalao","baccara","baccare","baccate","bacchic","bacchii","baccies","baccoes","bachcha","baching","bacilli","backare","backbit","backers","backets","backfit","backhoe","backies","backing","backlit","backlog","backlot","backout","backpay","backras","backsaw","backset","backsey","backups","baclava","baconer","baculum","baddest","baddies","baddish","badgers","badging","badious","badland","badmash","badness","baetyls","baffies","baffing","baffled","baffler","baffles","bagarre","bagasse","bagfuls","baggage","baggers","baggier","baggies","baggily","bagging","baggits","bagless","baglike","bagnios","bagpipe","bagsful","baguets","baguios","bagwash","bagwigs","bagworm","bahadas","bahadur","bailees","bailers","baileys","bailies","bailiff","bailing","baillie","baillis","bailors","bailout","bainins","bainite","bairnly","baiters","baiting","baizing","bajadas","bajrees","bakings","bakkies","baklava","baklawa","baladin","balance","balases","balatas","balboas","balcony","baldest","baldier","baldies","balding","baldish","baldric","baleens","baleful","balista","balkers","balkier","balkily","balking","ballade","ballads","ballans","ballant","ballast","ballats","ballers","ballets","ballies","balling","ballium","ballons","balloon","ballots","ballows","ballups","ballute","balmier","balmily","balming","balneal","baloney","balsams","balsamy","bambini","bambino","bamboos","bammers","bamming","bampots","banaler","banally","bananas","bandage","bandaid","bandana","bandari","bandars","bandbox","bandeau","banders","bandied","bandier","bandies","banding","bandito","bandits","bandogs","bandook","bandora","bandore","bandrol","bandsaw","bandura","baneful","bangers","banging","bangkok","bangled","bangles","banians","banjoes","bankers","bankets","banking","bankits","banksia","banners","bannets","banning","bannock","banoffi","banquet","bansela","banshee","banshie","bantams","banteng","banters","banties","banting","banyans","banzais","baobabs","baptise","baptism","baptist","baptize","baracan","barazas","barbate","barbell","barbels","barbers","barbets","barbies","barbing","barbola","barbule","barbuts","barchan","bardash","bardier","bardies","barding","bardism","barefit","bareges","barfing","bargain","bargees","bargest","barging","bargoon","barhops","barilla","barista","barites","bariums","barkans","barkeep","barkens","barkers","barkhan","barkier","barking","barless","barleys","barlows","barmaid","barmier","barmkin","barnets","barneys","barnier","barning","barocco","barocks","barolos","baronet","barongs","baronne","baroque","barques","barrace","barrack","barrage","barrats","barreed","barrels","barrens","barrets","barrico","barrier","barries","barring","barrios","barroom","barrows","bartend","barters","bartons","bartsia","barware","barwood","baryons","barytas","barytes","barytic","baryton","basally","basalts","bascule","baseman","basemen","basenji","bashaws","bashers","bashful","bashing","bashlik","bashlyk","basidia","basilar","basilic","basinal","basined","basinet","basions","baskets","basking","basmati","basnets","basoche","basqued","basques","bassest","bassets","bassett","bassier","bassing","bassist","bassoon","bastard","basters","bastide","bastile","basting","bastion","bastles","basucos","batable","batatas","batavia","batboys","batched","batcher","batches","bateaux","batfish","batfowl","batgirl","bathers","bathing","bathmat","bathmic","bathtub","bathyal","batiked","batiste","batlers","batlets","batlike","batoned","batoons","batsman","batsmen","batteau","battels","battens","battero","batters","battery","battier","battiks","battill","batting","battled","battler","battles","battues","battuta","batwing","baubees","baubles","bauchle","baudric","baueras","bauking","baulked","baulker","bausond","bauxite","bawbees","bawbles","bawcock","bawdier","bawdies","bawdily","bawdkin","bawdric","bawlers","bawleys","bawling","bawneen","bawsunt","bawties","baxters","bayamos","bayards","bayonet","bayting","baywood","bayyans","bazaars","bazooka","bazooms","bazouki","beached","beaches","beacons","beaders","beadier","beadily","beading","beadles","beadman","beadmen","beagled","beagler","beagles","beakers","beakier","beamers","beamier","beamily","beaming","beamish","beamlet","beanbag","beanery","beanies","beaning","bearcat","bearded","beardie","bearers","bearhug","bearing","bearish","beastie","beastly","beatbox","beaters","beathed","beatier","beatify","beating","beatnik","beaufet","beaufin","beauish","beavers","beavery","bebeeru","beblood","bebungs","becalls","becalms","becasse","because","bechalk","becharm","beckets","becking","beckons","beclasp","becloak","beclogs","becloud","beclown","becomes","becrawl","becrime","becrowd","becrust","becurls","becurse","becurst","bedamns","bedaubs","bedawin","bedazed","bedazes","bedbugs","bedders","bedding","bedecks","bedells","bedeman","bedemen","bederal","bedevil","bedewed","bedfast","bedgown","bedight","bedirty","bedizen","bedlamp","bedlams","bedless","bedlike","bedmate","bedouin","bedpans","bedpost","bedrail","bedrals","bedrape","bedrock","bedroll","bedroom","bedrops","bedropt","bedrugs","bedside","bedsits","bedsore","bedtick","bedtime","beducks","beduins","bedumbs","bedunce","bedungs","bedusts","bedward","bedwarf","beebees","beechen","beeches","beedies","beefalo","beefier","beefily","beefing","beegahs","beehive","beelike","beeline","beenahs","beentos","beepers","beeping","beerage","beerier","beerily","beesome","beeswax","beetfly","beeting","beetled","beetler","beetles","beeyard","beezers","befalls","befanas","beffana","beflags","befleas","befleck","beflums","befoams","befools","befouls","befrets","begalls","begazed","begazes","beggars","beggary","begging","beghard","begifts","begilds","beginne","begirds","beglads","begloom","begnaws","begoing","begonia","begorah","begored","begorra","begrime","begrims","begroan","beguile","beguine","beguins","begulfs","begunks","behaved","behaver","behaves","beheads","behests","behight","behinds","beholds","behoofs","behoove","behotes","behoved","behoves","behowls","beigels","beignes","beignet","beinked","bejaded","bejades","bejants","bejesus","bejewel","beknave","beknots","beknown","belabor","belaced","belaces","belated","belates","belauds","belayed","belayer","belched","belcher","belches","beldame","beldams","beleaps","beleapt","belgard","beliefs","beliers","believe","bellboy","belleek","bellhop","bellied","bellies","belling","bellman","bellmen","bellock","bellows","belongs","beloved","beloves","belters","belting","beltman","beltmen","beltway","belugas","belying","bemadam","bemauls","bemazed","bemeans","bemeant","bemedal","bemeted","bemetes","bemired","bemires","bemists","bemixed","bemixes","bemoans","bemocks","bemoils","bemouth","bemused","bemuses","benamed","benames","benched","bencher","benches","bendays","bendees","benders","bendier","bending","bendlet","beneath","benefic","benefit","benempt","benight","benison","bennets","bennies","benomyl","benthal","benthic","benthon","benthos","bentier","benumbs","benzals","benzene","benzils","benzine","benzins","benzoic","benzoin","benzole","benzols","benzoyl","benzyls","bepaint","bepearl","bepelts","beprose","bepuffs","bequest","beraked","berakes","berated","berates","berayed","berbere","berbice","berceau","berdash","bereave","beretta","bergama","bergens","bergere","bergylt","berhyme","berimed","berimes","berleys","berline","berlins","berming","berobed","berrets","berried","berries","berseem","berserk","berthas","berthed","berthes","besaint","bescour","beseech","beseeke","beseems","beshame","beshine","beshone","beshout","beshrew","besides","besiege","besighs","besings","beslave","beslime","besmear","besmile","besmoke","besmuts","besnows","besoins","besomed","besorts","bespake","bespate","bespeak","bespeed","bespice","bespits","bespoke","besport","bespots","bespout","bestain","bestars","bestead","bestial","bestick","bestill","besting","bestirs","bestorm","bestows","bestrew","bestrid","bestrow","bestuck","bestuds","beswarm","betaine","betaken","betakes","betaxed","beteeme","beteems","bethank","bethels","bethink","bethorn","bethumb","bethump","betided","betides","betight","betimed","betimes","betises","betitle","betoils","betoken","betrays","betread","betrims","betroth","betters","betties","betting","bettong","bettors","between","betwixt","beurres","beveled","beveler","bevomit","bevvied","bevvies","bewails","bewared","bewares","beweary","beweeps","bewhore","bewitch","beworms","beworry","bewraps","bewrapt","bewrays","beylics","beyliks","beyonds","bezants","bezique","bezoars","bezzant","bezzazz","bezzled","bezzles","bhagees","bhajans","bhajees","bhaktas","bhaktis","bhangra","bharals","bhavans","bhawans","bheesty","bhikhus","bhindis","bhishti","bhistee","bhistie","bhistis","bialies","biasing","biassed","biasses","biaxial","bibasic","bibbers","bibbery","bibbing","bibbles","bibcock","bibelot","bibless","biblike","biblist","bicarbs","biccies","bichord","bickers","bickies","bicolor","bicorne","bicorns","bicrons","bicycle","bidarka","bidders","biddies","bidding","bidents","bidings","bielded","biennia","bifaces","biffers","biffies","biffing","biffins","bifidly","bifilar","bifocal","bifters","bigener","bigeyes","bigfeet","bigfoot","biggest","biggety","biggies","bigging","biggins","biggish","biggity","biggons","bighead","bighorn","bighted","bigness","bigoses","bigoted","bigotry","bigtime","bigwigs","bikeway","bikings","bikinis","bikkies","bilayer","bilbies","bilboas","bilboes","bilevel","bilgier","bilging","bilians","biliary","bilimbi","bilious","bilkers","bilking","billbug","billers","billets","billies","billing","billion","billman","billmen","billons","billows","billowy","billyoh","billyos","bilobar","bilobed","bilsted","biltong","bimanal","bimboes","bimetal","bimodal","bimorph","binders","bindery","bindhis","binding","bindles","bingers","binghis","bingies","binging","bingled","bingles","bingoes","binious","binning","binocle","biochip","biocide","biodata","biodots","biofact","biofilm","biofuel","biogens","biogeny","bioherm","biology","biomass","bionics","bionomy","biontic","biophor","biopics","biopsic","bioptic","biotech","biotics","biotins","biotite","biotope","biotron","biotype","bipacks","biparty","bipedal","biplane","bipolar","biprism","birched","birchen","birches","birddog","birders","birdied","birdies","birding","birdman","birdmen","biremes","biretta","biriani","birkier","birkies","birlers","birling","birlinn","birring","birsier","birsled","birsles","birthed","biryani","biscuit","bisects","bishops","bismars","bismuth","bisnaga","bisques","bistate","bisters","bistort","bistred","bistres","bistros","bitable","bitched","bitchen","bitches","bitings","bitless","bitmaps","bitonal","bitsers","bitsier","bittern","bitters","bittier","bitties","bitting","bittock","bittors","bittour","bitturs","bitumed","bitumen","bivalve","bivinyl","bivious","bivouac","bivvied","bivvies","bizarre","bizarro","biznaga","bizonal","bizones","bizzies","blabbed","blabber","blacked","blacken","blacker","blackly","bladded","bladder","bladers","blading","blagged","blagger","blaguer","blagues","blahing","blamers","blaming","blancos","blander","blandly","blanked","blanker","blanket","blankly","blaring","blarney","blarted","blashes","blasted","blaster","blastie","blatant","blatest","blather","blatted","blatter","blaubok","blauded","blawing","blawort","blazers","blazing","blazons","bleaker","bleakly","bleared","blearer","bleated","bleater","bleeder","bleeped","bleeper","blellum","blemish","blended","blender","blendes","blesbok","blessed","blesser","blesses","blether","bletted","blewart","blewits","blights","blighty","bliksem","blinded","blinder","blindly","blinger","blinked","blinker","blinned","blintze","blipped","blissed","blisses","blister","blither","blitzed","blitzer","blitzes","bloated","bloater","blobbed","blocked","blocker","blockie","blogger","blokier","blokish","blonder","blondes","blooded","bloomed","bloomer","blooped","blooper","bloosme","blossom","blotchy","blotted","blotter","bloubok","bloused","blouses","blouson","blowbys","blowers","blowfly","blowgun","blowier","blowies","blowing","blowjob","blowoff","blowout","blowsed","blowses","blowups","blowzed","blowzes","blubbed","blubber","blucher","bludged","bludger","bludges","bludier","bluecap","bluefin","bluegum","blueing","blueish","bluejay","bluetit","bluette","bluffed","bluffer","bluffly","bluiest","bluings","bluming","blunder","blunged","blunger","blunges","blunked","blunker","blunted","blunter","bluntly","blurbed","blurred","blurted","blurter","blushed","blusher","blushes","blushet","bluster","boaking","boarded","boarder","boarish","boasted","boaster","boatels","boaters","boatful","boaties","boating","boatman","boatmen","bobbers","bobbery","bobbies","bobbing","bobbins","bobbish","bobbitt","bobbled","bobbles","bobcats","bobeche","boblets","bobotie","bobsled","bobstay","bobtail","bobwigs","bocages","boccias","boccies","bockedy","bocking","bodachs","boddles","bodeful","bodegas","bodgers","bodgier","bodgies","bodging","bodhran","bodices","bodikin","bodings","bodkins","bodrags","bodying","boerbul","boffing","boffins","boffola","bogarts","bogbean","bogeyed","boggard","boggart","boggers","boggier","bogging","boggish","boggled","boggler","boggles","bogland","bogoaks","bogongs","bogusly","bogwood","bogyism","bogyman","bogymen","bohemia","bohrium","bohunks","boilers","boilery","boiling","boiloff","boinged","boinked","bolases","boldens","boldest","boleros","boletes","boletus","bolides","bolines","bolivar","bolivia","bolixed","bolixes","bollard","bolling","bollock","bologna","boloney","bolshie","bolsons","bolster","bolters","bolting","boluses","bombard","bombast","bombers","bombing","bomblet","bombora","bommies","bonacis","bonamia","bonanza","bonasus","bonbons","bondage","bonders","bonding","bondman","bondmen","bonducs","boneset","boneyer","bonfire","bonging","bongoes","bonhams","boniato","boniest","bonings","bonisms","bonists","bonitas","bonitos","bonjour","bonkers","bonking","bonnets","bonnier","bonnies","bonnily","bonnock","bonobos","bonsais","bonsela","bonsoir","bonuses","bonxies","boobies","boobing","boobird","boobish","boobook","booboos","boocoos","boodied","boodies","boodled","boodler","boodles","boofier","boogers","boogeys","boogied","boogies","boohais","boohing","boohoos","boojums","bookend","bookers","bookful","bookier","bookies","booking","bookish","booklet","bookman","bookmen","bookoos","booksie","booling","boombox","boomers","boomier","booming","boomkin","boomlet","booners","boongas","boonies","boordes","boorish","boorkas","booshit","boosing","boosted","booster","bootees","bootery","booties","booting","bootleg","boozers","boozier","boozily","boozing","bopeeps","boppers","bopping","boraces","boracic","borages","boranes","borated","borates","boraxes","borazon","bordars","bordels","borders","bordure","boredom","boreens","borides","borings","borking","borming","borneol","bornite","bornyls","boronia","boronic","borough","borrell","borrows","borscht","borshch","borshts","borsics","borstal","bortier","bortsch","bortzes","borzois","bosboks","boscage","bosches","boshbok","boshter","boskage","boskets","boskier","bosomed","bosonic","bosques","bosquet","bossboy","bossdom","bossest","bossets","bossier","bossies","bossily","bossing","bossism","bostons","bostryx","botanic","botargo","botched","botcher","botches","bothans","bothers","bothies","bothole","bothria","botnets","botonee","bottega","botties","bottine","botting","bottled","bottler","bottles","bottoms","bottony","botulin","boubous","bouchee","bouches","bouclee","boucles","boudins","boudoir","bouffes","bougets","boughed","boughts","bougies","bouging","bouilli","boulder","boulles","boulted","boulter","bounced","bouncer","bounces","bounded","bounden","bounder","bouning","bouquet","bourbon","bourder","bourdon","bourkha","bourlaw","bournes","bourree","bourses","boursin","bousier","bousing","boutade","boutons","bouvier","bovates","bovines","bovvers","bowbent","boweled","bowered","bowfins","bowgets","bowhead","bowings","bowknot","bowlder","bowlegs","bowlers","bowless","bowlful","bowlike","bowline","bowling","bowning","bowpots","bowsaws","bowsers","bowseys","bowshot","bowsies","bowsing","bowwows","bowyang","bowyers","boxball","boxcars","boxfish","boxfuls","boxhaul","boxiest","boxings","boxlike","boxroom","boxwood","boyards","boychik","boycott","boyhood","boysier","braaied","braatas","brabble","braccia","braccio","bracero","bracers","brachah","braches","brachet","brachia","bracing","bracken","bracket","bracted","bradawl","bradded","bradoon","bragged","bragger","brahman","brahmas","brahmin","braided","braider","brailed","braille","brained","brairds","braised","braises","braizes","brakier","braking","braless","bramble","brambly","branchy","branded","brander","brangle","branked","branles","branned","branner","bransle","brantle","brascos","brasero","brashed","brasher","brashes","brashly","brasier","brasils","brassed","brasses","brasset","brassie","brattle","braunch","bravado","bravely","bravers","bravery","bravest","braving","bravoed","bravoes","bravura","bravure","brawest","brawled","brawler","brawlie","brawned","braxies","brayers","braying","brazens","brazers","brazier","brazils","brazing","breaded","breadth","breaker","breakup","breamed","breares","breasts","breathe","breaths","breathy","breccia","brecham","brechan","bredies","breding","breeder","breenge","breered","breeses","breests","breezed","breezes","brehons","breiing","breinge","breists","brennes","brenter","bretons","brevete","brevets","brevier","brevity","brewage","brewers","brewery","brewing","brewpub","brewski","breying","briards","briared","bribees","bribers","bribery","bribing","bricked","bricken","brickie","brickle","bricole","bridals","bridged","bridges","bridies","briding","bridled","bridler","bridles","bridoon","briefed","briefer","briefly","briered","brigade","brigand","brights","brigued","brigues","briller","brillos","brimful","briming","brimmed","brimmer","brinded","brindle","briners","bringer","brinier","brinies","brining","brinish","brinjal","brioche","briquet","brisant","brisked","brisken","brisker","brisket","briskly","brisses","bristle","bristly","bristol","brisure","britska","brittle","brittly","britzka","broadax","broaden","broader","broadly","brocade","brocage","brocard","brochan","broched","broches","brochos","brocked","brocket","brockit","brocoli","brodded","broddle","brodkin","brogans","brogged","brogues","broider","broiled","broiler","brokage","brokers","brokery","broking","brolgas","bromals","bromate","bromide","bromids","bromine","bromins","bromise","bromism","bromize","brommer","bronchi","broncho","broncos","bronzed","bronzen","bronzer","bronzes","brooded","brooder","brooked","brookie","broomed","brooses","brothel","brother","broughs","brought","brouzes","browned","browner","brownie","browsed","browser","browses","browsts","bruchid","brucine","brucins","brucite","bruckle","bruhaha","bruised","bruiser","bruises","bruited","bruiter","brulots","brulyie","brulzie","brummer","brumous","brunets","brunted","brushed","brusher","brushes","brushup","brusker","brusque","brussen","brutely","bruters","brutify","bruting","brutish","brutism","bruxing","bruxism","bubales","bubalis","bubbies","bubbled","bubbler","bubbles","bubinga","bubonic","bubukle","buccina","buckeen","buckers","buckets","buckeye","buckies","bucking","buckish","buckled","buckler","buckles","buckoes","buckram","buckras","bucksaw","bucksom","bucolic","budders","buddhas","buddied","buddier","buddies","budding","buddled","buddles","budgero","budgers","budgets","budgies","budging","budless","budlike","budmash","budworm","buffalo","buffers","buffest","buffets","buffier","buffing","buffoon","bugaboo","bugbane","bugbear","bugeyes","buggane","buggans","buggers","buggery","buggier","buggies","bugging","buggins","buglers","buglets","bugling","bugloss","bugongs","bugouts","bugseed","bugshas","bugwort","buhunds","buibuis","builded","builder","buildup","buirdly","buisted","bukkake","bukshee","bukshis","bulbels","bulbils","bulbing","bulblet","bulbous","bulbuls","bulgers","bulghur","bulgier","bulgine","bulging","bulgurs","bulimia","bulimic","bulimus","bulkage","bulkers","bulkier","bulkily","bulking","bullace","bullary","bullate","bullbar","bullbat","bulldog","bullers","bullets","bullied","bullier","bullies","bulling","bullion","bullish","bullock","bullosa","bullous","bullpen","bulrush","bulwark","bumbags","bumbaze","bumbled","bumbler","bumbles","bumboat","bumelia","bumkins","bummalo","bummels","bummers","bummest","bumming","bummled","bummles","bummock","bumpers","bumpier","bumpily","bumping","bumpkin","bunched","bunches","buncing","buncoed","bundied","bundies","bunding","bundist","bundled","bundler","bundles","bundook","bungees","bungers","bungeys","bungies","bunging","bungled","bungler","bungles","bunions","bunjees","bunjies","bunkers","bunking","bunkoed","bunkums","bunnets","bunnias","bunnies","bunraku","bunsens","buntals","bunters","buntier","bunting","bunyips","buoyage","buoyant","buoying","buppies","buqshas","burbled","burbler","burbles","burbots","burdash","burdens","burdies","burdock","bureaus","bureaux","burette","burgage","burgees","burgeon","burgers","burgess","burghal","burgher","burghul","burglar","burgled","burgles","burgoos","burgout","burhels","burials","buriers","buritis","burkers","burking","burkite","burlaps","burlers","burlesk","burleys","burlier","burlily","burling","burners","burnets","burnies","burning","burnish","burnous","burnout","burpees","burping","burrell","burrels","burrers","burrhel","burrier","burring","burrito","burrows","bursars","bursary","bursate","burseed","bursera","bursted","bursten","burster","burthen","burtons","burweed","burying","busbars","busbies","busboys","buseras","busgirl","bushels","bushers","bushfly","bushido","bushier","bushies","bushily","bushing","bushman","bushmen","bushpig","bushtit","bushwah","bushwas","busiest","busings","buskers","buskets","busking","buskins","busload","bussing","bustard","bustees","busters","bustics","bustier","busting","bustled","bustler","bustles","busuuti","busying","butanes","butanol","butcher","butches","butenes","butlers","butlery","butling","butment","buttals","butters","buttery","butties","butting","buttled","buttles","buttock","buttons","buttony","butyral","butyric","butyrin","butyryl","buvette","buxomer","buxomly","buyable","buyback","buyoffs","buyouts","buzukia","buzukis","buzzard","buzzcut","buzzers","buzzier","buzzing","buzzwig","bycatch","bycoket","byelaws","bygones","bylanes","bylined","byliner","bylines","bynames","bynempt","bypaths","byplace","byplays","byreman","byremen","byrlady","byrlaws","byrling","byrnies","byroads","byrooms","byssine","byssoid","bytalks","bywoner","bywords","byworks","byzants","cabalas","cabanas","cabaret","cabbage","cabbagy","cabbala","cabbies","cabbing","cabezon","cabildo","cabined","cabinet","cablers","cablets","cabling","cabomba","caboose","cabover","cabries","cabrios","cabrits","cachets","cachexy","caching","cachous","cacique","cackier","cackled","cackler","cackles","cacodyl","cacoepy","cacolet","caconym","cacoons","cactoid","cacumen","cadagas","cadagis","cadaver","caddice","caddied","caddies","caddish","caddyss","cadeaux","cadelle","cadence","cadency","cadenza","cadgers","cadgier","cadging","cadmium","cadrans","caduacs","caducei","caeomas","caerule","caesars","caesium","caestus","caesura","cafards","caffein","caffila","cafilas","caftans","caganer","cageful","cagiest","cagmags","cagoule","cagouls","cahiers","cahoots","cailles","caimacs","caimans","caiques","cairned","caisson","caitiff","caitive","cajaput","cajeput","cajoled","cajoler","cajoles","cajones","cajuput","cakiest","cakings","calaloo","calalus","calamar","calamus","calando","calathi","calcars","calcify","calcine","calcite","calcium","calculi","caldera","caldron","caleche","calends","calesas","caliber","calibre","calices","caliche","calicle","calicos","caligos","calimas","calipee","caliper","caliphs","caliver","calkers","calking","calkins","callais","callans","callant","callboy","callees","callers","callets","calling","callops","callose","callous","callows","calluna","calmant","calmest","calmier","calming","calomel","caloric","calorie","calotte","caloyer","calpack","calpacs","calpain","calqued","calques","calthas","caltrap","caltrop","calumba","calumet","calumny","calvary","calvers","calving","calyces","calycle","calypso","calyxes","calzone","calzoni","camaieu","camails","camaron","camases","cambers","cambial","cambism","cambist","cambium","camboge","cambrel","cambric","camelia","camelid","camelot","camelry","cameoed","camerae","cameral","cameras","cameses","camions","camisas","camises","camisia","camlets","cammies","camming","camogie","camoodi","camorra","camotes","campana","campers","campest","camphol","camphor","campier","campily","camping","campion","campled","camples","campong","campout","camuses","camwood","canadas","canakin","canaled","canapes","canards","canasta","canbank","cancans","cancels","cancers","canchas","candela","candent","candida","candids","candied","candies","candled","candler","candles","candock","candors","candour","canella","canfuls","cangled","cangles","cangues","caniest","canikin","canines","canings","cankers","cankery","cannach","cannels","canners","cannery","cannier","cannily","canning","cannoli","cannons","cannula","canoers","canolas","canonic","canonry","canopic","cansful","cantala","cantals","cantars","cantata","cantate","cantdog","canteen","canters","cantest","canthal","canthus","cantico","cantier","cantily","cantina","canting","cantion","cantled","cantles","cantlet","cantons","cantors","cantrap","cantred","cantref","cantrip","canulae","canular","canulas","canvass","canyons","canzona","canzone","canzoni","capable","capably","capelan","capelet","capelin","capered","caperer","capfuls","capital","capitan","capitol","capizes","capless","caplets","caplins","caporal","capotes","capouch","cappers","capping","caprate","caprice","caprids","caprify","caprine","caprock","caproic","capsids","capsize","capstan","capsule","captain","captans","caption","captive","captors","capture","capuche","capuera","carabao","carabid","carabin","caracal","caracks","caracol","caracts","caracul","carafes","caramba","caramel","caranna","carapax","carates","carauna","caravan","caravel","caraway","carbarn","carbeen","carbene","carbide","carbies","carbine","carbons","carbora","carboys","carcake","carcase","carcass","carcels","cardecu","carders","cardiac","cardiae","cardias","cardies","carding","cardons","cardoon","carduus","careens","careers","careful","caremes","carfare","carfuls","cargoed","cargoes","carhops","cariama","caribes","caribou","carices","cariere","carinae","carinal","carinas","carioca","cariole","cariose","carious","caritas","carjack","carking","carless","carline","carling","carlins","carlish","carload","carlock","carlots","carmine","carnage","carnals","carnets","carneys","carnied","carnier","carnies","carnify","carnose","caroach","caroche","caroled","caroler","carolus","caromed","caromel","carotid","carotin","carouse","carpale","carpals","carpark","carpels","carpers","carpets","carping","carpool","carport","carrack","carract","carrats","carrect","carrell","carrels","carrick","carried","carrier","carries","carrion","carroch","carroms","carrots","carroty","carryon","carseys","carsick","cartage","cartels","carters","cartful","carting","cartons","cartoon","cartway","carvels","carvers","carvery","carvies","carving","carwash","casabas","casavas","casbahs","cascade","cascara","casease","caseate","caseins","caseman","casemen","caseose","caseous","caserne","caserns","casette","cashaws","cashbox","cashews","cashier","cashing","cashoos","casings","casinos","casitas","caskets","casking","casqued","casques","cassaba","cassata","cassava","cassena","cassene","cassias","cassina","cassine","cassino","cassock","cassone","casspir","casters","casting","castled","castles","castock","castoff","castors","castory","castral","casuals","casuist","catalog","catalos","catalpa","catapan","catarrh","catasta","catawba","catbird","catboat","catcall","catched","catchen","catcher","catches","catchup","catclaw","catechu","catelog","catenae","catenas","cateran","catered","caterer","catface","catfall","catfish","catguts","cathead","cathect","cathode","cathole","cathood","cations","catjang","catkins","catlike","catling","catlins","catmint","catnaps","catneps","catnips","catskin","catspaw","catsuit","catsups","cattabu","cattail","cattalo","cattery","cattier","catties","cattily","catting","cattish","catwalk","catworm","caudate","caudled","caudles","caudron","caukers","caulder","cauline","caulked","caulker","caulome","cauming","causals","causers","causeys","causing","caustic","cautels","cauters","cautery","caution","cavalla","cavally","cavalry","caveats","caveman","cavemen","caverns","cavetti","cavetto","caviare","caviars","caviers","caviled","caviler","cavings","cavorts","cawings","cawkers","cayenne","caymans","cayuses","cazique","ceasing","ceazing","ceboids","cecally","cecitis","cedared","cedilla","cedrate","cedrine","cedulas","ceilers","ceilidh","ceiling","celadon","celesta","celeste","celiacs","cellars","celling","cellist","cellose","cellule","celomic","celosia","celotex","cembali","cembalo","cembras","cementa","cements","cenacle","cenotes","censers","censing","censors","censual","censure","centage","centals","centare","centaur","centavo","centers","centile","centime","centimo","centner","central","centred","centres","centric","centrum","centums","century","cepheid","ceramal","ceramic","cerasin","cerated","cerates","ceratin","cereals","cerebra","cereous","ceresin","ceriphs","cerises","cerites","ceriums","cermets","cerning","ceroons","cerotic","cerrial","certain","certify","cerumen","ceruses","cerveza","cervids","cervine","cesious","cesiums","cessers","cessing","cession","cesspit","cestode","cestoid","cestuis","cesurae","cesural","cesuras","cesures","cetanes","ceviche","chablis","chabouk","chabuks","chachka","chacing","chacked","chacmas","chacoes","chadars","chaddar","chaddor","chadors","chaebol","chaetae","chaetal","chafers","chaffed","chaffer","chafing","chagans","chagrin","chained","chaines","chaired","chaises","chakras","chalahs","chalans","chalaza","chalcid","chalder","chalehs","chalets","chalice","chalked","challah","challan","challas","challie","challis","challot","chalone","chaloth","chalupa","chalutz","chamade","chamber","chambre","chametz","chamfer","chamisa","chamise","chamiso","chamlet","chamois","chamoix","champac","champak","champed","champer","chanced","chancel","chancer","chances","chancey","chancre","changed","changer","changes","channel","channer","chanoyo","chanoyu","chanson","chanted","chanter","chantey","chantie","chantor","chantry","chaoses","chaotic","chapati","chapeau","chapels","chapess","chapkas","chaplet","chapman","chapmen","chappal","chapped","chappie","chapter","charact","charade","charets","charged","charger","charges","charier","charily","charing","chariot","charism","charity","charkas","charked","charkha","charley","charlie","charmed","charmer","charnel","charpai","charpie","charpoy","charqui","charred","charros","chartas","charted","charter","charver","chasers","chasing","chasmal","chasmed","chasmic","chassed","chasses","chassis","chasten","chaster","chatbot","chateau","chatons","chattas","chatted","chattel","chatter","chattis","chaufed","chaufer","chaufes","chauffs","chaumer","chaunce","chaunge","chaunts","chauvin","chavish","chawers","chawing","chayote","chazans","chazzan","chazzen","cheaped","cheapen","cheaper","cheapie","cheaply","cheapos","cheated","cheater","chebecs","chechia","checked","checker","checkup","cheddar","cheders","chedite","cheeked","cheeped","cheeper","cheered","cheerer","cheerio","cheerly","cheeros","cheesed","cheeses","cheetah","chefdom","cheffed","chefing","chegoes","chekist","chelate","chellup","cheloid","chelone","chelped","chemics","chemise","chemism","chemist","chenars","chenets","chequer","cheques","cherish","cheroot","cherubs","cherups","chervil","chesils","chesnut","chessel","chesses","chested","chetahs","chetnik","chetrum","chevens","chevets","chevied","chevies","chevins","cheviot","chevres","chevret","chevron","chewers","chewets","chewier","chewies","chewing","chewink","chiacks","chianti","chiasma","chiasmi","chiasms","chibbed","chibols","chibouk","chicana","chicane","chicano","chicest","chichas","chiches","chichis","chickee","chicken","chicles","chicons","chicory","chidden","chiders","chiding","chiefer","chiefly","chiefry","chields","chiffon","chiggas","chigger","chignon","chigoes","chigres","chikara","chikhor","chikors","childed","childer","childes","childly","chiliad","chilies","chilioi","chilled","chiller","chillis","chillum","chimars","chimbly","chimera","chimere","chimers","chiming","chimlas","chimley","chimney","chinars","chinchy","chindit","chinese","chining","chinked","chinkie","chinned","chinone","chinook","chintzy","chinwag","chipped","chipper","chippie","chipset","chirked","chirker","chirled","chirmed","chirped","chirper","chirred","chirren","chirres","chirrup","chirted","chisels","chitals","chitins","chitlin","chitons","chitted","chitter","chivari","chivied","chivies","chiving","chivved","chizzed","chizzes","chlamys","chloral","chloric","chlorid","chlorin","choanae","chobdar","chochos","chocked","chocker","chockos","choctaw","choenix","choicer","choices","choired","chokers","chokeys","chokier","chokies","choking","chokras","chokris","cholate","cholent","cholera","cholers","choline","chollas","choltry","chometz","chommie","chomped","chomper","chondre","chondri","choofed","chooked","chookie","chooser","chooses","choosey","chopine","chopins","chopped","chopper","choragi","chorale","chorals","chordae","chordal","chorded","chordee","choreal","choreas","chorees","choregi","choreic","choreus","chorial","chorine","choring","chorion","chorism","chorist","chorizo","choroid","chorrie","chorten","chortle","choughs","choused","chouser","chouses","chowder","chowing","chowris","chowsed","chowses","chrisma","chrisms","chrisom","christy","chromas","chromed","chromel","chromes","chromic","chromos","chromyl","chronic","chronon","chucked","chucker","chuckie","chuckle","chuddah","chuddar","chudder","chuffed","chuffer","chugged","chugger","chukars","chukkar","chukkas","chukker","chukors","chumash","chumley","chummed","chumped","chunder","chunked","chunnel","chunner","chunter","chupati","chuppah","chuppas","churchy","churned","churner","churred","churros","churrus","chusing","chuting","chutist","chutnee","chutney","chutzpa","chyacks","chylify","chylous","chymics","chymify","chymist","chymous","chypres","chytrid","ciboria","ciboule","cicadae","cicadas","cicalas","ciceros","cichlid","cicoree","cicutas","cidaris","cieling","cierges","cigaret","ciggies","ciliary","ciliate","cilices","cimelia","cimices","cimiers","cinched","cinches","cinders","cindery","cineast","cinemas","cineole","cineols","cinerea","cinerin","cingula","cinques","ciphers","ciphony","cipolin","circars","circled","circler","circles","circlet","circlip","circuit","circusy","cirques","cirrate","cirrose","cirrous","cirsoid","ciscoes","cissier","cissies","cissing","cissoid","cistern","cistron","citable","citadel","citator","cithara","cithern","cithers","cithren","citizen","citolas","citoles","citrals","citrate","citrine","citrins","citrons","citrous","citrusy","cittern","civilly","civisms","civvies","clabber","clachan","clacked","clacker","cladded","cladder","claddie","cladism","cladist","cladode","clagged","claimed","claimer","clamant","clamber","clammed","clammer","clamors","clamour","clamped","clamper","clanged","clanger","clangor","clanked","clapnet","clapped","clapper","claquer","claques","clarain","clarets","claries","clarify","clarini","clarino","clarion","clarity","clarkia","claroes","clarted","clashed","clasher","clashes","clasped","clasper","classed","classer","classes","classic","classis","classon","clastic","clatted","clatter","claucht","claught","clausal","clauses","clauted","clavate","clavers","clavier","clavies","clawers","clawing","claxons","clayier","claying","clayish","claypan","cleaned","cleaner","cleanly","cleanse","cleanup","cleared","clearer","clearly","cleated","cleaved","cleaver","cleaves","clecked","cleeked","cleekit","cleeped","cleeves","clefted","clement","clemmed","cleomes","cleping","clerics","clerids","clerisy","clerked","clerkly","cleruch","cleuchs","cleughs","clewing","cliched","cliches","clicked","clicker","clicket","clients","cliffed","clifted","climate","climbed","climber","clinged","clinger","clinics","clinked","clinker","clipart","cliping","clipped","clipper","clippie","cliqued","cliques","cliquey","clitics","clitter","clivers","clivias","cloacae","cloacal","cloacas","cloaked","clobber","cloches","clocked","clocker","clodded","clogged","clogger","cloison","cloking","clomped","cloners","cloning","clonism","clonked","clopped","cloques","closely","closers","closest","closets","closeup","closing","closure","clotbur","clothed","clothes","clotted","clotter","cloture","clouded","cloughs","cloured","clouted","clouter","clovers","clovery","clowder","clowned","cloying","clubbed","clubber","clubman","clubmen","clucked","cludgie","clueing","clumber","clumped","clumper","clunked","clunker","clupeid","clusias","cluster","clutchy","clutter","clypeal","clypeus","clyping","clyster","cnemial","coached","coachee","coacher","coaches","coacted","coactor","coadmit","coaeval","coagent","coagula","coaitas","coalbin","coalbox","coalers","coalier","coalify","coaling","coalise","coalize","coalman","coalmen","coalpit","coaltar","coaming","coannex","coapted","coarsen","coarser","coastal","coasted","coaster","coatees","coaters","coating","coaxers","coaxial","coaxing","cobaeas","cobalts","cobbers","cobbier","cobbing","cobbled","cobbler","cobbles","cobloaf","cobnuts","coburgs","cobwebs","cocaine","cocains","coccids","coccoid","coccous","cochair","cochins","cochlea","cockade","cockers","cockets","cockeye","cockier","cockies","cockily","cocking","cockish","cockled","cockler","cockles","cockney","cockpit","cockshy","cockups","cocomat","coconut","cocoons","cocopan","cocotte","cocoyam","coctile","coction","codable","codders","codding","coddled","coddler","coddles","codeias","codeina","codeine","codeins","codetta","codfish","codgers","codices","codicil","codilla","codille","codings","codists","codling","codlins","codrive","codrove","coedits","coehorn","coeliac","coelome","coeloms","coempts","coenact","coenure","coenuri","coequal","coerced","coercer","coerces","coerect","coesite","coevals","coexert","coexist","coffees","coffers","coffing","coffins","coffled","coffles","coffret","cofound","cogence","cogency","cogener","coggers","coggies","cogging","coggled","coggles","cogitos","cognacs","cognate","cognise","cognize","cogways","cohabit","coheads","coheirs","cohered","coherer","coheres","cohibit","cohorns","cohorts","cohosts","cohunes","coiffed","coiffes","coifing","coigned","coignes","coilers","coiling","coinage","coiners","coinfer","coining","cointer","coition","cojoins","cojones","cokeses","cokiest","colbies","coldest","coldies","coldish","coleads","coletit","colibri","colicin","colicky","colitic","colitis","collage","collard","collars","collate","collect","colleen","college","collets","collide","collied","collier","collies","colling","collins","colloid","collops","collude","colobid","colobus","cologne","colonel","colones","colonic","colonus","colored","colorer","colossi","colours","coloury","coltans","colters","colting","coltish","colugos","columel","columns","colures","comaker","comakes","comarbs","comarts","comates","comatic","comatik","combats","combers","combier","combies","combine","combing","combles","combust","comedic","comedos","cometic","comfier","comfits","comfort","comfrey","comical","comices","comings","comique","comital","comitia","command","commata","commend","comment","commere","commers","commies","commits","commixt","commode","commodo","commons","commote","commots","commove","commune","commute","compact","compage","compand","company","compare","compart","compass","compast","compear","compeer","compels","compend","compere","compers","compete","compile","comping","complex","complin","complot","compone","compony","comport","compose","compost","compote","compots","compted","compter","compute","comrade","comsymp","comuses","conacre","conaria","conatus","concave","conceal","concede","concedo","conceit","concent","concept","concern","concert","conchae","conchal","conchas","conched","conches","conchie","conchos","concise","concoct","concord","concrew","concupy","concurs","concuss","condemn","conders","condies","condign","condoes","condole","condoms","condone","condors","conduce","conduct","conduit","condyle","confabs","confect","confers","confess","confest","confide","confine","confirm","confits","conflux","conform","confuse","confute","congaed","congeal","congeed","congees","congers","congest","congius","congoes","congous","congree","congrue","conical","conidia","conifer","coniine","conimas","conines","coniums","conject","conjeed","conjees","conjoin","conjure","conjury","conkers","conkier","conking","connate","connect","conners","conning","connive","connote","conoids","conquer","conseil","consent","consign","consist","console","consols","consort","conster","consuls","consult","consume","contact","contain","conteck","contemn","contend","content","contest","context","contort","contour","contras","contrat","control","contund","contuse","conures","convect","convene","convent","convert","conveys","convict","convive","convoke","convoys","cooches","cooeyed","cooings","cookers","cookery","cookeys","cookies","cooking","cookoff","cookout","cooktop","coolant","coolers","coolest","coolies","cooling","coolish","coolths","coombes","coomier","cooming","cooncan","coondog","coontie","coopers","coopery","cooping","coopted","cooried","coories","coosens","coosers","coosins","cooters","cooties","copaiba","copaiva","copalms","copecks","copepod","copered","copiers","copihue","copilot","copings","copious","copitas","coplots","copouts","coppers","coppery","coppice","coppies","copping","coppins","copples","coppras","coprahs","copshop","copsier","copsing","copters","copulae","copular","copulas","copyboy","copycat","copying","copyism","copyist","coquets","coquina","coquito","coracle","coralla","coranto","corbans","corbeau","corbeil","corbels","corbies","corbina","corcass","cordage","cordate","corders","cordial","cording","cordite","cordoba","cordons","coreign","corella","coremia","corious","coriums","corival","corixid","corkage","corkers","corkier","corking","corkirs","cormels","cormoid","cormous","cornage","corncob","corneae","corneal","corneas","cornels","corners","cornets","cornett","cornfed","cornfly","cornice","cornier","cornify","cornily","corning","cornist","cornrow","cornual","cornute","cornuto","corolla","coronae","coronal","coronas","coronel","coroner","coronet","coronis","corozos","corpora","corpsed","corpses","corrade","corrals","correas","correct","corrida","corries","corrode","corrody","corrupt","corsacs","corsage","corsair","corsets","corseys","corsive","corslet","corsned","cortege","cortile","cortili","cortina","cortins","coruler","corvees","corvets","corvids","corvina","corvine","corylus","corymbs","coryphe","coryzal","coryzas","cosechs","coshers","coshery","coshing","cosiers","cosiest","cosigns","cosines","cosmeas","cosmids","cosmine","cosmins","cosmism","cosmist","cosmoid","cossack","cossets","cossies","costals","costard","costars","costate","costean","costers","costing","costive","costrel","costume","cosying","coteaux","coterie","cothurn","cotidal","cotinga","cotised","cotises","cotland","cottage","cottars","cotters","cottids","cottier","cotting","cottise","cottoid","cottons","cottony","cottown","cotwals","cotylae","cotyles","cotypes","coucals","couched","couchee","coucher","couches","cougans","cougars","coughed","cougher","couguar","couldst","coulees","couloir","coulomb","coulter","council","counsel","counted","counter","country","coupees","coupers","couping","coupled","coupler","couples","couplet","coupons","coupure","courage","courant","courbed","couried","courier","couries","couring","courlan","coursed","courser","courses","courted","courter","courtly","cousins","couteau","couters","couther","couthie","coutils","couture","couvade","couvert","couzins","covelet","covents","covered","coverer","coverts","coverup","coveted","coveter","covings","covynes","cowages","cowards","cowbane","cowbell","cowbind","cowbird","cowboys","cowedly","cowered","cowfish","cowflap","cowflop","cowgirl","cowhage","cowhand","cowheel","cowherb","cowherd","cowhide","cowiest","cowitch","cowking","cowlick","cowling","cowpats","cowpeas","cowpies","cowping","cowplop","cowpoke","cowries","cowrite","cowrote","cowshed","cowskin","cowslip","cowtree","coxalgy","coxcomb","coxiest","coxitis","coxless","coydogs","coyness","coyotes","coypous","cozened","cozener","coziers","coziest","cozying","craaled","crabbed","crabber","crackas","cracked","cracker","cracket","crackle","crackly","crackup","cracowe","cradled","cradler","cradles","crafted","crafter","cragged","craking","crambes","crambos","cramesy","crammed","crammer","cramped","cramper","crampet","crampit","crampon","cranage","cranial","craning","cranium","cranked","cranker","crankle","crankly","crannog","crapaud","crapier","craping","craples","crapola","crapped","crapper","crappie","crashed","crasher","crashes","crasser","crassly","craters","crating","cratons","craturs","craunch","cravats","cravens","cravers","craving","crawdad","crawled","crawler","crayers","crayons","crazier","crazies","crazily","crazing","creachs","creaghs","creaked","creamed","creamer","creance","creased","creaser","creases","created","creates","creatic","creatin","creator","creches","credent","credits","creedal","creeing","creeled","creeped","creeper","creepie","creesed","creeses","creeshy","cremant","cremate","cremini","cremona","cremors","cremsin","crenate","crenels","creoles","creosol","crepier","creping","crepons","cresols","cresses","cresset","crestal","crested","creston","cresyls","cretics","cretins","cretism","crevice","crewcut","crewels","crewing","crewman","crewmen","cribbed","cribber","cribble","cricked","cricket","crickey","cricoid","crimina","crimine","criming","crimini","criminy","crimmer","crimped","crimper","crimple","crimson","crinate","cringed","cringer","cringes","cringle","crining","crinite","crinkle","crinkly","crinoid","crinose","crinums","criollo","crioses","cripple","crisped","crispen","crisper","crispin","crisply","crissal","crissum","cristae","critics","critter","crittur","crivens","croaked","croaker","crocein","croches","crochet","crocine","crocked","crocket","crofter","crogged","crojiks","cromack","crombec","crombed","croming","cronets","cronies","cronish","cronker","croodle","crooked","crooker","crooled","crooned","crooner","crooves","cropful","cropped","cropper","croppie","croquet","croquis","crosier","crossed","crosser","crosses","crossly","crotala","crotals","crotons","crottle","crouped","crouper","croupes","croupon","croutes","crouton","crowbar","crowded","crowder","crowdie","croweas","crowers","crowing","crowned","crowner","crownet","crozers","crozier","crubeen","crucial","crucian","crucify","crudded","cruddle","crudely","crudest","crudity","crueler","cruells","cruelly","cruelty","cruised","cruiser","cruises","cruisie","cruives","cruizie","cruller","crumbed","crumber","crumble","crumbly","crumbum","crumens","crummie","crumped","crumper","crumpet","crumple","crumply","crunchy","crunkle","crunode","cruores","crupper","crusade","crusado","crusets","crushed","crusher","crushes","crusian","crusies","crusily","crustae","crustal","crusted","cruzado","cruzies","crybaby","cryings","cryogen","cryonic","cryptal","cryptic","crypton","cryptos","crystal","csardas","ctenoid","cuatros","cubages","cubanes","cubbies","cubbing","cubbish","cubhood","cubical","cubicas","cubicle","cubicly","cubisms","cubists","cubital","cubitus","cubless","cuboids","cucking","cuckold","cuckoos","cudbear","cuddens","cuddies","cuddins","cuddled","cuddler","cuddles","cudgels","cudweed","cueists","cuestas","cuffing","cuffins","cuffled","cuffles","cuirass","cuishes","cuisine","cuisser","cuisses","cuiters","cuittle","culches","culchie","culexes","culices","culicid","cullays","cullers","cullets","cullied","cullies","culling","cullion","culmens","culming","culotte","culprit","culters","cultier","cultish","cultism","cultist","culture","culvers","culvert","cumaric","cumarin","cumbent","cumbers","cumbias","cummers","cummins","cumquat","cumshaw","cumulet","cumulus","cundies","cundums","cuneate","cunette","cunners","cunning","cupcake","cupeled","cupeler","cupfuls","cupgall","cuphead","cuplike","cupolar","cupolas","cuppers","cuppier","cupping","cuprite","cuprous","cuprums","cupsful","cupulae","cupular","cupules","curable","curably","curacao","curacoa","curaghs","curaras","curares","curaris","curated","curates","curator","curbers","curbing","curchef","curches","curcuma","curdier","curding","curdled","curdler","curdles","curette","curfews","curiets","curiosa","curious","curites","curiums","curlers","curlews","curlier","curlies","curlily","curling","curnier","curpels","currach","curragh","currans","currant","current","curried","currier","curries","curring","currish","cursers","cursing","cursive","cursors","cursory","curtail","curtain","curtals","curtana","curtate","curtaxe","curtest","curtesy","curtsey","curvate","curvets","curvier","curving","curvity","cushats","cushaws","cushier","cushies","cushily","cushion","cuspate","cuspids","cussers","cussing","custard","custock","custode","custody","customs","custrel","cutaway","cutback","cutbank","cutches","cutdown","cutesie","cuticle","cutikin","cutises","cutlass","cutlers","cutlery","cutlets","cutline","cutoffs","cutouts","cutover","cuttage","cutters","cuttier","cutties","cutting","cuttled","cuttles","cuttoes","cutwork","cutworm","cuvette","cwtched","cwtches","cyanate","cyanide","cyanids","cyanine","cyanins","cyanise","cyanite","cyanize","cyathia","cyathus","cyborgs","cybrids","cycases","cycasin","cyclase","cyclers","cyclery","cycling","cyclins","cyclise","cyclist","cyclize","cycloid","cyclone","cyclops","cygnets","cylices","cymatia","cymbalo","cymbals","cymenes","cymling","cymlins","cynical","cyphers","cypress","cyprian","cyprids","cyprine","cypsela","cystein","cystids","cystine","cystoid","cytases","cytisus","cytodes","cytosol","czapkas","czardas","czardom","czarina","czarism","czarist","dabbers","dabbing","dabbity","dabbled","dabbler","dabbles","dabster","dacites","dackers","dacking","dacoits","dacoity","dacrons","dactyli","dactyls","dadaism","dadaist","daddies","dadding","daddled","daddles","daddock","dadoing","daemons","daffier","daffies","daffily","daffing","daftars","daftest","dafties","dagabas","daggers","daggier","dagging","daggled","daggles","daglock","dagobas","dagwood","dahlias","dahoons","daidled","daidles","daikers","daikons","dailies","daimios","daimoku","daimons","daimyos","daining","dairies","daisied","daisies","dakered","dakoiti","dakoits","dakoity","dalapon","dalasis","daledhs","daleths","dalgyte","dallied","dallier","dallies","dallops","daltons","damaged","damager","damages","damasks","dambrod","damfool","damiana","dammars","dammers","damming","damners","damnify","damning","damosel","damozel","dampens","dampers","dampest","dampier","damping","dampish","damsels","damsons","danazol","dancers","dancier","dancing","danders","dandier","dandies","dandify","dandily","dandled","dandler","dandles","danelaw","dangers","danging","dangled","dangler","dangles","dankest","dankish","dannies","danseur","danting","dantons","daphnes","daphnia","daphnid","dappers","dapping","dappled","dapples","dapsone","daquiri","darbars","darbies","darcies","dareful","daresay","dargahs","dargles","darings","dariole","darkens","darkest","darkeys","darkies","darking","darkish","darkled","darkles","darling","darnels","darners","darning","darogha","darrain","darrayn","darring","darshan","darters","darting","dartled","dartles","dartres","dasheen","dasheki","dashers","dashier","dashiki","dashing","dashpot","dassies","dastard","dasypod","dasyure","datable","databus","dataria","datchas","datedly","datings","datival","datives","daturas","daturic","daubers","daubery","daubier","daubing","dauding","daunder","dauners","daunted","daunter","daunton","dauphin","dauring","dauties","dauting","davened","davidia","dawbake","dawcock","dawding","dawdled","dawdler","dawdles","dawners","dawning","dawties","dawting","dayanim","daybeds","daybook","dayboys","daycare","dayched","dayches","dayglow","daylily","daylong","daymare","daymark","dayroom","daysack","dayside","daysman","daysmen","daystar","daytale","daytime","daywork","dazedly","dazzled","dazzler","dazzles","deacons","deadboy","deadens","deaders","deadest","deadeye","deading","deadman","deadmen","deadpan","deafens","deafest","deafish","deaired","dealate","dealers","dealing","deaners","deanery","deaning","dearest","dearies","dearing","dearnly","dearths","deashed","deashes","deasils","deasiul","deasoil","deathly","deaving","debacle","debarks","debased","debaser","debases","debated","debater","debates","debauch","debbier","debbies","debeaks","debeard","debited","debitor","deboned","deboner","debones","debouch","debride","debrief","debtees","debtors","debunks","deburrs","debused","debuses","debuted","decadal","decades","decaffs","decagon","decaled","decalog","decamps","decanal","decanes","decants","decapod","decarbs","decares","decayed","decayer","deccies","decease","deceits","deceive","decency","decerns","deciare","decibel","decided","decider","decides","decidua","deciles","decimal","decimes","deckels","deckers","decking","deckled","deckles","deckoed","declaim","declare","declass","declaws","decline","decocts","decoded","decoder","decodes","decoked","decokes","decolor","decorum","decoyed","decoyer","decreed","decreer","decrees","decreet","decrews","decrial","decried","decrier","decries","decrown","decrypt","dectets","decuman","decuple","decuria","decurve","dedimus","deduced","deduces","deducts","deedest","deedful","deedier","deedily","deeding","deejays","deeming","deepens","deepest","deepies","deerfly","deerlet","deeving","deewans","defaced","defacer","defaces","defamed","defamer","defames","defangs","defaste","default","defeats","defects","defence","defends","defense","deffest","defiant","deficit","defiers","defiled","defiler","defiles","defined","definer","defines","deflate","defleas","deflect","defoams","defocus","deforce","deforms","defouls","defrags","defraud","defrays","defrock","defrost","defroze","deftest","defuels","defunct","defunds","defused","defuser","defuses","defuzed","defuzes","defying","degames","degamis","degases","degauss","degerms","degging","deglaze","degouts","degrade","degreed","degrees","degusts","dehisce","dehorns","dehorts","deicers","deicide","deicing","deictic","deidest","deifest","deified","deifier","deifies","deiform","deigned","deindex","deiseal","deistic","deities","dejecta","dejects","dejeune","dekares","dekeing","dekkoed","delaine","delapse","delated","delates","delator","delayed","delayer","deleads","deleave","deleble","deleing","delenda","deleted","deletes","delible","delices","delicts","delight","delimed","delimes","delimit","deliria","delists","deliver","dellies","deloped","delopes","delouse","delphic","delphin","deltaic","deltoid","deluded","deluder","deludes","deluged","deluges","delvers","delving","demagog","demaine","demains","demands","demarks","demasts","demayne","demeane","demeans","dementi","dements","demerge","demerit","demerse","demesne","demeton","demigod","demirep","demised","demises","demists","demiveg","demoded","demoing","demonic","demonry","demoses","demoted","demotes","demotic","demount","demured","demurer","demures","denarii","denayed","dendron","dengues","denials","deniers","denimed","denizen","dennets","denning","denoted","denotes","densely","densest","densify","density","dentals","dentary","dentate","dentels","dentils","dentine","denting","dentins","dentist","dentoid","denture","denuded","denuder","denudes","denying","deodand","deodara","deodars","deodate","deontic","deorbit","depaint","departs","depeche","depends","deperms","depicts","deplane","deplete","deplore","deploys","deplume","deponed","depones","deports","deposal","deposed","deposer","deposes","deposit","deprave","depress","deprive","depside","deputed","deputes","deraign","derails","derange","derated","derates","derayed","derbies","derhams","derided","derider","derides","derived","deriver","derives","dermoid","dernful","dernier","derrick","derries","dervish","desalts","desands","descale","descant","descend","descent","deserts","deserve","desexed","desexes","designs","desined","desines","desired","desirer","desires","desists","deskill","deskman","deskmen","desktop","desmans","desmids","desmine","desmoid","desnood","desorbs","despair","despise","despite","despoil","despond","despots","dessert","destain","destine","destiny","destock","destroy","desugar","desyned","desynes","details","detains","detects","detente","detents","detenue","detenus","deterge","detests","deticks","detinue","detorts","detours","detoxed","detoxes","detract","detrain","detrude","detuned","detunes","deucing","deutons","deutzia","devalls","devalue","deveins","develed","develop","devests","deviant","deviate","devices","deviled","devilet","devilry","devious","devisal","devised","devisee","deviser","devises","devisor","devling","devoice","devoirs","devolve","devores","devoted","devotee","devotes","devours","devvels","dewanis","dewanny","dewater","dewaxed","dewaxes","dewclaw","dewdrop","dewfall","dewfull","dewiest","dewitts","dewlaps","dewlapt","dewless","dewools","deworms","dexters","dextral","dextran","dextrin","dezincs","dhammas","dhansak","dharmas","dharmic","dharnas","dhooras","dhootie","dhootis","dhourra","dhurnas","dhurras","dhurrie","diabase","diables","diabolo","diacids","diadems","diadrom","diagram","diagrid","dialect","dialers","dialing","dialist","dialled","diallel","dialler","dialogs","dialyse","dialyze","diamide","diamine","diamins","diamond","diandry","dianoia","diapase","diapers","diapirs","diapsid","diarchy","diarial","diarian","diaries","diarise","diarist","diarize","diastem","diaster","diatoms","diatron","diaxons","diazine","diazins","diazoes","diazole","dibasic","dibbers","dibbing","dibbled","dibbler","dibbles","dibbuks","dibutyl","dicamba","dicasts","dichord","dichted","diciest","dicings","dickens","dickers","dickeys","dickier","dickies","dicking","dicliny","dicotyl","dictate","dictier","dicting","diction","dictums","dicycly","didacts","didakai","didakei","didders","diddier","diddies","diddled","diddler","diddles","diddley","didicoi","didicoy","dieback","diedral","diedres","diehard","dieoffs","diesels","diester","dietary","dieters","diether","diethyl","dietine","dieting","dietist","differs","difform","diffuse","digamma","digests","diggers","digging","dighted","digicam","digital","diglots","diglyph","dignify","dignity","digonal","digoxin","digraph","digress","dihedra","dikasts","dikdiks","dikiest","dikkops","diktats","dilated","dilater","dilates","dilator","dildoes","dilemma","dillier","dillies","dilling","diluent","diluted","dilutee","diluter","dilutes","dilutor","diluvia","dimbles","dimeric","dimeter","dimmers","dimmest","dimming","dimmish","dimness","dimorph","dimouts","dimpled","dimples","dimwits","dindled","dindles","dineric","dineros","dinette","dingbat","dingers","dingeys","dingier","dingies","dingily","dinging","dingles","dingoed","dingoes","dinitro","dinkest","dinkeys","dinkier","dinkies","dinking","dinkums","dinmont","dinners","dinning","dinnled","dinnles","dinting","diobols","diocese","diopter","dioptre","diorama","diorism","diorite","dioxane","dioxans","dioxide","dioxids","dioxins","diphase","diphone","diploes","diploic","diploid","diploma","diplons","diplont","dipnets","dipnoan","dipodic","dipolar","dipoles","dippers","dippier","dipping","dipshit","diptera","diptyca","diptych","diquark","diquats","dirdams","dirdums","directs","direful","dirempt","dirhams","dirhems","diriges","dirking","dirling","dirndls","dirtbag","dirtied","dirtier","dirties","dirtily","dirting","disable","disally","disarms","disavow","disband","disbark","disbars","disbuds","discage","discant","discard","discase","discept","discern","discerp","discide","discing","discoed","discoer","discoid","discord","discure","discuss","disdain","disease","disedge","diseurs","diseuse","disfame","disform","disgest","disgown","disgust","dishelm","dishful","dishier","dishing","dishome","dishorn","dishpan","dishrag","disject","disjoin","disjune","disking","disleaf","disleal","dislike","dislimb","dislimn","dislink","disload","dismals","dismans","dismask","dismast","dismayd","dismayl","dismays","dismiss","disnest","disobey","disomic","disowns","dispace","dispark","dispart","dispels","dispend","display","displed","disples","dispone","disport","dispose","dispost","disprad","dispred","dispute","disrank","disrate","disrobe","disroot","disrupt","dissave","disseat","dissect","dissent","dissert","dissing","distaff","distain","distant","distend","distent","distich","distill","distils","distome","distort","distrix","distune","disturb","distyle","disused","disuses","disyoke","ditched","ditcher","ditches","dithers","dithery","dithiol","ditones","ditsier","dittany","dittays","dittied","ditties","ditting","dittoed","ditzier","diurnal","diurons","diverge","diverse","diverts","divests","divided","divider","divides","divined","diviner","divines","divings","divisim","divisor","divorce","divulge","divulse","divvied","divvies","dizains","dizened","dizzard","dizzied","dizzier","dizzies","dizzily","djebels","djembes","djibbah","doaters","doating","dobbers","dobbies","dobbing","dobbins","dobhash","doblons","dobsons","docents","docetic","dochmii","docible","dociler","dockage","dockens","dockers","dockets","docking","dockise","dockize","docquet","doctors","doddard","dodders","doddery","doddier","doddies","dodding","doddles","dodgems","dodgers","dodgery","dodgier","dodging","dodkins","dodmans","dodoism","doeskin","doffers","doffing","dogates","dogbane","dogbolt","dogcart","dogdays","dogdoms","dogears","dogeate","dogedom","dogface","dogfish","doggers","doggery","doggess","doggier","doggies","dogging","doggish","doggone","doggrel","doghole","doglegs","doglike","dogmata","dognaps","dogship","dogskin","dogsled","dogtown","dogtrot","dogvane","dogwood","doilies","doilter","doitkin","doleful","dolente","dolinas","dolines","dollars","dolldom","dollied","dollier","dollies","dolling","dollish","dollops","dolmans","dolmens","dolosse","dolours","dolphin","doltish","domaine","domains","domatia","dometts","domical","domicil","domiest","dominee","domines","dominie","dominos","donated","donates","donator","donders","donging","dongles","dongola","donings","donjons","donkeys","donnard","donnart","donnats","donnees","donnerd","donnert","donnies","donning","donnish","donnism","donnots","donship","donsier","donzels","doobies","doocots","doodads","doodahs","doodies","doodled","doodler","doodles","doodoos","doofers","dookets","dooking","doolans","doolees","doolies","doomful","doomier","doomily","dooming","doorman","doormat","doormen","doorway","doosras","doowops","doozers","doozies","dopants","dopatta","dopiaza","dopiest","dopings","doppers","doppies","dopping","doppios","dorados","dorbugs","dorhawk","dorised","dorises","dorized","dorizes","dorkier","dorlach","dormant","dormers","dormice","dormins","dorneck","dornick","dornock","dorpers","dorring","dorsals","dorsels","dorsers","dorters","dortier","dorting","dortour","dosages","dossals","dossels","dossers","dossier","dossils","dossing","dotages","dotants","dotards","dotcoms","dotiest","dotings","dottels","dotters","dottier","dottily","dotting","dottled","dottler","dottles","dottrel","douanes","doubled","doubler","doubles","doublet","doubted","doubter","doucely","doucest","doucets","douceur","douched","douches","doucine","doughty","douking","douleia","dourahs","dourest","dourine","dousers","dousing","douters","douting","dovecot","doveish","dovekey","dovekie","dovelet","dovened","dovered","doviest","dowable","dowager","dowdier","dowdies","dowdily","doweled","dowered","dowiest","dowlier","dowlnes","dowlney","downbow","downers","downier","downing","dowries","dowsers","dowsets","dowsing","doyenne","doyleys","doylies","dozened","dozenth","doziest","dozings","drabbed","drabber","drabbet","drabble","drabler","dracena","drachma","drachms","dracone","drafted","draftee","drafter","dragees","dragged","dragger","draggle","dragnet","dragons","dragoon","drailed","drained","drainer","dramady","dramedy","drammed","dranted","drapers","drapery","drapets","drapier","draping","drapped","drappie","drastic","dratted","draught","draunts","drawbar","drawees","drawers","drawing","drawled","drawler","drayage","draying","drayman","draymen","drazels","dreaded","dreader","dreadly","dreamed","dreamer","drearer","dreares","dredged","dredger","dredges","dreeing","dreidel","dreidls","dressed","dresser","dresses","drevill","dribbed","dribber","dribble","dribbly","driblet","drifted","drifter","drilled","driller","drinker","dripped","dripper","drivels","drivers","driving","drizzle","drizzly","drogers","drogher","drogues","droguet","droichs","droichy","droiled","drolest","drolled","droller","dromond","dromons","droners","drongos","dronier","droning","dronish","drooked","drookit","drooled","droomes","drooped","dropfly","droplet","dropout","dropped","dropper","dropple","drosera","droshky","drosses","drostdy","drought","drouked","droukit","drouths","drouthy","drovers","droving","drownds","drowned","drowner","drowsed","drowses","drubbed","drubber","drucken","drudged","drudger","drudges","drugged","drugger","drugget","druggie","druidic","druidry","drumble","drumlin","drummed","drummer","drunken","drunker","drupels","drusier","druxier","dryable","dryades","dryadic","drybeat","dryings","dryland","drylots","dryness","drywall","drywell","dualins","dualise","dualism","dualist","duality","dualize","dualled","duarchy","dubbers","dubbing","dubbins","dubiety","dubious","dubnium","ducally","ducdame","duchess","duchies","duckers","duckier","duckies","ducking","duckpin","ductile","ducting","ductule","dudders","duddery","duddier","dudeens","dudgeon","dudheen","dudisms","duelers","dueling","duelist","duelled","dueller","duellos","duendes","dueness","duennas","dueting","duetted","duettos","duffels","duffers","duffest","duffing","duffles","dufuses","dugites","dugongs","dugouts","duhkhas","duikers","dukedom","dukkahs","dukkhas","dulcets","dulcian","dulcify","dulcite","dulcose","dullard","dullest","dullier","dulling","dullish","dulness","duloses","dulosis","dulotic","dumaist","dumbest","dumbing","dumdums","dummied","dummier","dummies","dumpbin","dumpers","dumpier","dumpies","dumpily","dumping","dumpish","dumpled","dumples","duncery","dunched","dunches","duncish","dunders","dungeon","dungers","dungier","dunging","dunites","dunitic","dunkers","dunking","dunlins","dunnage","dunnart","dunness","dunnest","dunnier","dunnies","dunning","dunnish","dunnite","dunnock","dunshed","dunshes","dunting","duodena","duologs","duopoly","duotone","dupable","dupatta","dupions","duplets","duplied","duplies","duppies","dupping","durable","durably","duramen","durance","durants","durbars","durdums","dureful","duresse","durgahs","durgans","durgier","durians","durions","durmast","durning","durries","dushing","duskens","duskest","duskier","duskily","dusking","duskish","dustbin","dusters","dustier","dustily","dusting","dustman","dustmen","dustoff","dustpan","dustrag","dustups","dutches","duteous","dutiful","duumvir","duvetyn","duykers","dvandva","dvornik","dwalmed","dwammed","dwarfed","dwarfer","dwarves","dwaumed","dwelled","dweller","dwindle","dwining","dyadics","dyarchy","dybbuks","dyeable","dyeings","dyeline","dyester","dyeweed","dyewood","dyingly","dykiest","dynamic","dynamos","dynasts","dynasty","dyneins","dynodes","dyslogy","dysodil","dyspnea","dysuria","dysuric","dyvours","dyvoury","dzerens","eagerer","eagerly","eaglets","eagling","eanling","earache","earball","earbash","earbobs","earbuds","earcons","earding","eardrop","eardrum","earflap","earfuls","earings","earlaps","earldom","earless","earlier","earlies","earlike","earlobe","earlock","earmark","earmuff","earners","earnest","earning","earpick","earplug","earring","earshot","earthed","earthen","earthly","earwigs","earworm","easeful","easeled","easiest","eastern","easters","easting","eastlin","easying","eatable","eatages","eatches","eaterie","eatings","ebauche","ebayers","ebaying","ebbless","ebbtide","ebonics","ebonies","ebonise","ebonist","ebonite","ebonize","ebriate","ebriety","ebriose","ecartes","ecboles","ecbolic","eccrine","ecdemic","ecdyses","ecdysis","ecdyson","echappe","echards","echelle","echelon","echidna","echinus","echiums","echoers","echoing","echoise","echoism","echoist","echoize","eclairs","eclipse","eclogue","eclosed","ecloses","ecocide","ecology","economy","econuts","ecorche","ecotage","ecotone","ecotour","ecotype","ecstasy","ectases","ectasia","ectasis","ectatic","ecthyma","ectopia","ectopic","ectozoa","ectypal","ectypes","ecuelle","ecuries","eczemas","edacity","edaphic","eddying","edemata","edental","edgiest","edgings","edibles","edictal","edifice","edified","edifier","edifies","editing","edition","editors","editrix","educate","educing","eductor","eeching","eelfare","eeliest","eellike","eelpout","eelworm","eeriest","eevning","effable","effaced","effacer","effaces","effects","effeirs","effendi","effered","efferes","effings","efforce","efforts","effrays","effulge","effused","effuses","eftsoon","egalite","egality","egences","egested","eggcups","egghead","eggiest","egglers","eggless","eggmass","eggnogs","eggwash","egoisms","egoists","egoless","egotise","egotism","egotist","egotize","eidetic","eidolic","eidolon","eighths","eightvo","eikones","eilding","einkorn","eiracks","eirenic","eisells","eiswein","ejected","ejector","ekistic","ekpwele","elanced","elances","elanets","elapids","elapine","elapsed","elapses","elastic","elastin","elaters","elating","elation","elative","elbowed","elchees","elderly","eldings","eldress","eldrich","elected","electee","elector","electro","elegant","elegiac","elegies","elegise","elegist","elegits","elegize","element","elenchi","elenchs","elevate","elevens","elevons","elfhood","elfland","elflike","elflock","eliches","elicits","eliding","elision","elitism","elitist","elixirs","ellagic","ellipse","ellwand","elmiest","elmwood","elocute","elodeas","elogies","elogist","elogium","eloigns","eloined","eloiner","elopers","eloping","elopses","elshins","eltchis","eluants","eluates","eluders","eluding","eluents","elusion","elusive","elusory","eluting","elution","elutors","eluvial","eluvium","elysian","elytral","elytron","elytrum","emacsen","emailed","emanant","emanate","embaces","embails","embaled","embales","emballs","embalms","embanks","embargo","embarks","embased","embases","embassy","embaste","embathe","embayed","embayld","emblaze","emblema","emblems","emblics","embloom","embogue","emboils","embolic","embolus","embosks","embosom","embound","embowed","embowel","embower","emboxed","emboxes","embrace","embraid","embrave","embread","embroil","embrown","embrued","embrues","embrute","embryon","embryos","embused","embuses","emended","emender","emerald","emerged","emerges","emeried","emeries","emerita","emeriti","emerods","emeroid","emersed","emetics","emetine","emetins","emeutes","emicant","emicate","emigres","eminent","emirate","emitted","emitter","emmewed","emmoved","emmoves","emodins","emonges","emongst","emoters","emoting","emotion","emotive","emoving","empaire","empaled","empaler","empales","empanel","empared","empares","emparls","emparts","empathy","empayre","empeach","emperce","emperor","empight","empires","empiric","emplace","emplane","employe","employs","emplume","emporia","empower","empress","emprise","emprize","emptied","emptier","empties","emptily","empting","emptins","emption","empusas","empuses","empyema","emulate","emulged","emulges","emuling","emulous","emulsin","emulsor","emunged","emunges","emuring","enabled","enabler","enables","enacted","enactor","enamels","enamine","enamors","enamour","enarmed","enation","encaged","encages","encalms","encamps","encased","encases","encaved","encaves","enchafe","enchain","enchant","encharm","enchase","encheer","encinal","encinas","enclasp","enclave","enclose","encloud","encoded","encoder","encodes","encomia","encored","encores","encraty","encrust","encrypt","encysts","endarch","endarts","endears","endemic","enderon","endewed","endgame","endings","endiron","endited","endites","endives","endlang","endleaf","endless","endlong","endmost","endnote","endogen","endopod","endorse","endowed","endower","endozoa","endplay","endrins","endship","enduing","endured","endurer","endures","enduros","endways","endwise","endyses","endysis","enemata","enemies","energic","energid","enerved","enerves","enewing","enfaced","enfaces","enfants","enfelon","enfeoff","enfever","enfiled","enfired","enfires","enfixed","enfixes","enflame","enflesh","enfolds","enforce","enforms","enframe","enfreed","enfrees","enfroze","engaged","engagee","engager","engages","engaols","engilds","engined","enginer","engines","engirds","english","englobe","engloom","engluts","engobes","engored","engores","engorge","engrace","engraff","engraft","engrail","engrain","engrams","engrasp","engrave","engross","enguard","engulfs","engulph","enhalos","enhance","enigmas","enisled","enisles","enjambs","enjoins","enjoyed","enjoyer","enlaced","enlaces","enlards","enlarge","enlight","enlinks","enlists","enliven","enlocks","enmewed","enmoved","enmoves","ennages","enneads","ennoble","ennuied","ennuyed","ennuyee","enolase","enology","enomoty","enoughs","enounce","enplane","enprint","enquire","enquiry","enraced","enraces","enraged","enrages","enrange","enranks","enrheum","enrings","enriven","enrobed","enrober","enrobes","enrolls","enroots","enrough","enround","enseals","enseams","ensears","enserfs","ensewed","enshell","ensigns","ensiled","ensiles","enskied","enskies","enskyed","enslave","ensnare","ensnarl","ensouls","enstamp","ensteep","enstyle","ensuing","ensured","ensurer","ensures","ensweep","enswept","entails","entamed","entames","entases","entasia","entasis","entayle","entente","enteral","entered","enterer","enteric","enteron","entetee","enthral","enthuse","enticed","enticer","entices","entires","entitle","entoils","entombs","entomic","entopic","entotic","entozoa","entrail","entrain","entrall","entrant","entraps","entreat","entrees","entries","entrism","entrist","entrold","entropy","entrust","entwine","entwist","enuring","envault","envelop","envenom","enviers","envious","environ","enviros","envying","enwalls","enwheel","enwinds","enwombs","enwound","enwraps","enzians","enzoned","enzones","enzymes","enzymic","eobiont","eoliths","eonisms","eosines","eosinic","epacrid","epacris","epagoge","eparchs","eparchy","epatant","epaules","epaulet","epaxial","epazote","epeeist","epeiras","epeiric","epeirid","eperdue","epergne","ephebes","ephebic","epheboi","ephebos","ephebus","ephedra","ephelis","ephoral","epiblem","epiboly","epicarp","epicede","epicene","epicier","epicism","epicist","epicure","epiderm","epidote","epigeal","epigean","epigeic","epigene","epigone","epigoni","epigons","epigram","epigyny","epilate","epilogs","epimere","epimers","epinaoi","epinaos","episcia","episode","episome","epistle","epitaph","epitaxy","epithem","epithet","epitome","epitope","epizoan","epizoic","epizoon","epochal","epochas","eponyms","eponymy","epopees","epoxide","epoxied","epoxies","epoxyed","epsilon","epuisee","epulary","epurate","epyllia","equable","equably","equaled","equally","equants","equated","equates","equator","equerry","equinal","equines","equinia","equinox","equipes","equites","erasers","erasing","erasion","erasure","erathem","erbiums","erected","erecter","erectly","erector","erelong","eremite","eremuri","erepsin","erethic","ergates","ergodic","ergotic","eriachs","ericoid","eringos","erinite","eristic","erlangs","erlking","ermelin","ermined","ermines","erodent","eroding","erodium","erosely","erosion","erosive","erotema","eroteme","erotica","erotics","erotise","erotism","erotize","errable","errancy","errands","errants","erratas","erratic","erratum","errhine","errings","eructed","erudite","erupted","eryngos","escalop","escaped","escapee","escaper","escapes","escarps","eschars","escheat","eschews","escolar","escorts","escoted","escribe","escrocs","escroll","escrols","escrows","escuage","escudos","eserine","esloins","esloyne","esotery","espadas","espanol","esparto","espials","espiers","espouse","esprits","espying","esquire","essayed","essayer","essence","essives","essoins","essoyne","estated","estates","esteems","esthete","estival","estoile","estover","estrade","estrays","estreat","estrepe","estrich","estrins","estriol","estrone","estrous","estrual","estrums","estuary","etacism","etaerio","etagere","etalage","etalons","etamine","etamins","etatism","etatist","etchant","etchers","etching","eternal","etesian","ethanal","ethanes","ethanol","ethenes","etheric","ethical","ethinyl","ethions","ethiops","ethmoid","ethnics","ethoses","ethoxyl","ethylic","ethynes","ethynyl","etiolin","etoiles","etourdi","etrenne","etriers","ettling","etymons","eucaine","eucains","euchred","euchres","euclase","eucrite","eudemon","eugarie","eugenia","eugenic","eugenol","euglena","eulogia","eumongs","eumungs","eunuchs","euouaes","eupepsy","euphons","euphony","euphory","euphroe","euploid","eupneas","eupneic","eupnoea","eurekas","euripus","euryoky","eustacy","eustasy","eustele","eustyle","eutaxia","eutexia","eutropy","evacuee","evaders","evading","evangel","evanish","evasion","evasive","evejars","eveners","evenest","evening","evented","eventer","evernet","everted","evertor","evicted","evictee","evictor","evident","evilest","eviller","evinced","evinces","evirate","evitate","eviting","evocate","evokers","evoking","evolues","evolute","evolved","evolver","evolves","evovaes","evulsed","evulses","evzones","exabyte","exactas","exacted","exacter","exactly","exactor","exacums","exalted","exalter","examens","examine","example","exapted","exarate","exarchs","exarchy","excambs","exceeds","excepts","excerpt","excheat","excided","excides","excimer","exciple","excised","excises","excited","exciter","excites","exciton","excitor","exclaim","exclave","exclude","excreta","excrete","excudit","excurse","excusal","excused","excuser","excuses","execute","exedrae","exeemed","exegete","exeming","exempla","exemple","exempts","exergue","exerted","exhaled","exhales","exhaust","exhedra","exhibit","exhorts","exhumed","exhumer","exhumes","exigent","exilers","exilian","exiling","exility","existed","exiting","exocarp","exoderm","exodist","exogamy","exogens","exomion","exonyms","exopods","exordia","exosmic","exotica","exotics","exotism","expands","expanse","expects","expends","expense","experts","expiate","expired","expirer","expires","explain","explant","explode","exploit","explore","exports","exposal","exposed","exposer","exposes","exposit","expound","express","expugns","expulse","expunct","expunge","expurge","exscind","exsects","exserts","extatic","extends","extense","extents","externe","externs","extinct","extines","extirps","extolls","extorts","extract","extrait","extreat","extrema","extreme","extrude","exudate","exuding","exulted","exurban","exurbia","exuviae","exuvial","exuvium","eyalets","eyasses","eyeable","eyeball","eyebank","eyebars","eyebath","eyebeam","eyebolt","eyebrow","eyecups","eyefold","eyefuls","eyehole","eyehook","eyelash","eyeless","eyelets","eyeliad","eyelids","eyelift","eyelike","eyeshot","eyesome","eyesore","eyespot","eyewash","eyewear","eyewink","eyliads","fabbest","fablers","fabliau","fabling","fabrics","fabular","facades","facebar","faceman","facemen","faceted","facials","faciend","facings","faconne","factful","factice","faction","factive","factoid","factors","factory","factual","factums","facture","faculae","facular","faculty","fadable","fadaise","faddier","faddish","faddism","faddist","faddled","faddles","fadedly","fadeins","fadeout","fadeurs","fadging","fadiest","fadings","fadlike","faeries","faffing","faggery","faggier","fagging","faggots","faggoty","fagoted","fagoter","fagotti","fagotto","fahlerz","fahlore","faibles","faience","faiking","failing","failles","failure","fainest","faining","fainnes","fainted","fainter","faintly","fairest","fairies","fairily","fairing","fairish","fairway","faithed","faither","faitors","faitour","fajitas","fakeers","falafel","falbala","falcade","falcate","falcons","falcula","faldage","fallacy","fallals","fallers","falling","falloff","fallout","fallows","falsely","falsers","falsest","falsies","falsify","falsing","falsish","falsism","falsity","falters","famille","famines","famulus","fanatic","fanbase","fancied","fancier","fancies","fancify","fancily","fanding","fandoms","fanegas","fanfare","fanfics","fanfold","fanging","fangled","fangles","fanions","fanjets","fankled","fankles","fanlike","fannell","fannels","fanners","fannies","fanning","fantads","fantail","fantasm","fantast","fantasy","fanteeg","fantods","fantoms","fanwise","fanwort","fanzine","faquirs","faraday","faradic","faraway","farcers","farceur","farcied","farcies","farcify","farcing","farcins","fardage","fardels","fardens","farding","farebox","farfals","farfels","farinas","farinha","farmers","farmery","farming","farmost","farness","farrago","farrand","farrant","farrens","farrier","farring","farrows","farruca","farside","farsing","farthel","farther","farting","fartlek","fasciae","fascial","fascias","fascine","fascism","fascist","fashery","fashing","fashion","fastens","fasters","fastest","fasties","fasting","fastish","fatally","fatback","fatbird","fateful","fathead","fathers","fathoms","fatidic","fatigue","fatless","fatlike","fatling","fatness","fatsias","fatsoes","fattens","fattest","fattier","fatties","fattily","fatting","fattish","fattism","fattist","fatuity","fatuous","fatwaed","fatwahs","fatwood","faucals","faucets","fauchon","faucial","faulted","faunist","faunula","faunule","faurest","fauting","fautors","fauvism","fauvist","favelas","favella","favisms","favored","favorer","favours","favrile","favuses","fawners","fawnier","fawning","fayence","fayning","fazenda","feagued","feagues","fealing","fearers","fearful","fearing","feasing","feasted","feaster","featest","feather","feating","featous","feature","feazing","febrile","fechter","fecials","fecking","feculae","feculas","fedarie","fedayee","federal","fedexed","fedexes","fedoras","feebled","feebler","feebles","feedbag","feedbox","feeders","feeding","feedlot","feelbad","feelers","feeless","feeling","feeries","feering","feerins","feesing","feezing","feigned","feigner","feijoas","feinted","feinter","felafel","felicia","felines","fellahs","fellate","fellers","fellest","fellies","felling","felloes","fellows","felonry","felsite","felspar","felters","feltier","felting","felucca","felwort","females","feminal","feminie","femiter","femmier","femoral","fenagle","fencers","fencing","fenders","fendier","fending","fenitar","fenland","fennecs","fennels","fennier","fennies","fennish","fenuron","feodary","feoffed","feoffee","feoffer","feoffor","ferbams","ferlied","ferlier","ferlies","fermata","fermate","ferment","fermion","fermium","fernery","fernier","ferning","ferrate","ferrels","ferrets","ferrety","ferried","ferries","ferrite","ferrous","ferrugo","ferrule","ferrums","fertile","ferulae","ferulas","feruled","ferules","fervent","fervors","fervour","fescues","fessing","festals","festers","festier","festive","festoon","fetched","fetcher","fetches","fetials","fetiche","fetider","fetidly","fetlock","fetters","fetting","fettled","fettler","fettles","fetuses","feudary","feuding","feudist","feutred","feutres","fevered","fewmets","fewness","fewters","feyness","fiacres","fiancee","fiances","fiaschi","fiascos","fiating","fiaunts","fibbers","fibbery","fibbing","fibered","fibrils","fibrins","fibroid","fibroin","fibroma","fibrose","fibrous","fibster","fibulae","fibular","fibulas","fickled","fickler","fickles","fictile","fiction","fictive","fictors","ficuses","fiddled","fiddler","fiddles","fiddley","fideism","fideist","fidgets","fidgety","fidging","fidibus","fiefdom","fielded","fielder","fiercer","fierier","fierily","fiestas","fifteen","fifthly","fifties","figgery","figging","fighter","figjams","figment","figural","figured","figurer","figures","figwort","fikiest","filabeg","filacer","filaree","filaria","filasse","filazer","filberd","filbert","filched","filcher","filches","filemot","fileted","filfots","filiate","filibeg","filings","fillers","fillets","fillies","filling","fillips","filmdom","filmers","filmier","filmily","filming","filmish","filmset","filters","fimbles","fimbria","finable","finagle","finales","finalis","finally","finance","finback","finched","finches","finders","finding","findram","fineers","fineish","finesse","finfish","finfoot","fingans","fingers","finials","finical","finicky","finikin","finings","finises","finites","finjans","finking","finless","finlike","finmark","finnack","finnacs","finnans","finners","finnier","finning","finnock","finnsko","fiorins","fipples","firearm","firebox","firebug","firedog","firefly","firelit","fireman","firemen","firepan","firepot","firings","firking","firkins","firlots","firmans","firmers","firmest","firming","firrier","firring","firstly","fiscals","fisgigs","fishers","fishery","fisheye","fishful","fishgig","fishier","fishify","fishily","fishing","fishnet","fishway","fisking","fissate","fissile","fission","fissive","fissled","fissles","fissure","fistful","fistier","fisting","fistula","fitchee","fitches","fitchet","fitchew","fitlier","fitment","fitness","fitters","fittest","fitting","fivepin","fixable","fixated","fixates","fixatif","fixedly","fixings","fixture","fixures","fizgigs","fizzens","fizzers","fizzgig","fizzier","fizzing","fizzled","fizzles","fjordic","flaccid","flacked","flacker","flacket","flacons","flaffed","flaffer","flagged","flagger","flagman","flagmen","flagons","flailed","flakers","flakier","flakies","flakily","flaking","flambee","flambes","flamens","flamers","flamfew","flamier","flaming","flammed","flaneur","flanged","flanger","flanges","flanked","flanken","flanker","flannel","flannen","flapped","flapper","flareup","flarier","flaring","flasers","flashed","flasher","flashes","flasket","flatbed","flatcap","flatcar","flatlet","flatted","flatten","flatter","flattie","flattop","flaught","flaunch","flaunes","flaunts","flaunty","flautas","flavine","flavins","flavone","flavors","flavory","flavour","flawier","flawing","flaxier","flayers","flaying","fleabag","fleapit","fleches","flecked","flecker","fledged","fledges","fleeced","fleecer","fleeces","fleecie","fleeing","fleered","fleerer","fleeted","fleeter","fleetly","flegged","flehmen","fleming","flemish","flensed","flenser","flenses","fleshed","flesher","fleshes","fleshly","fletton","fleuret","fleuron","flexile","flexing","flexion","flexors","flexure","fleying","flicked","flicker","flights","flighty","flimped","flinder","flinger","flinted","flipped","flipper","flirted","flirter","flisked","fliting","flitted","flitter","flivver","flixing","floated","floatel","floater","flocced","floccus","flocked","flogged","flogger","flokati","flooded","flooder","floored","floorer","floosie","floozie","flopped","flopper","florals","floreat","florets","florier","florins","florist","floruit","florula","florule","floshes","flossed","flosser","flosses","flossie","flotage","flotant","flotels","flotsam","flounce","flouncy","floured","floused","flouses","flouted","flouter","flowage","flowers","flowery","flowing","fluates","flubbed","flubber","flubdub","fluence","fluency","fluents","flueric","fluffed","fluffer","flugels","fluidal","fluidic","fluidly","fluiest","flukier","flukily","fluking","fluming","flummox","flumped","flunked","flunker","flunkey","flunkie","fluoric","fluorid","fluorin","flurred","flushed","flusher","flushes","fluster","fluters","flutier","flutina","fluting","flutist","flutter","fluvial","fluxing","fluxion","fluxive","flyable","flyaway","flyback","flybane","flybelt","flyblew","flyblow","flyboat","flybook","flyboys","flyhand","flyings","flyleaf","flyless","flyoffs","flyover","flypast","flyping","flytier","flyting","flytrap","flyways","foaling","foamers","foamier","foamily","foaming","fobbing","focally","focused","focuser","focuses","fodders","foetors","fogbows","fogdogs","foggage","foggers","foggier","foggily","fogging","foghorn","fogless","fograms","fogydom","fogyish","fogyism","foibles","foiling","foining","foisons","foisted","foister","folacin","folates","folders","folding","foldout","foldups","foliage","foliate","folioed","foliole","foliose","folious","foliums","folkier","folkies","folkish","folkmot","folkway","follied","follies","follows","foments","fomites","fondant","fondest","fonding","fondled","fondler","fondles","fondued","fondues","fonning","fontina","fontlet","foodful","foodies","foodism","foolery","fooling","foolish","footage","footbag","footbar","footboy","footers","footier","footies","footing","footled","footler","footles","footman","footmen","footpad","footras","footrot","footsie","footway","foozled","foozler","foozles","fopling","foppery","fopping","foppish","foraged","forager","forages","foramen","forayed","forayer","forbade","forbare","forbear","forbids","forbode","forbore","forcats","forceps","forcers","forcing","fording","fordoes","fordone","forearm","forebay","forebye","forecar","foredid","foregut","foreign","forelay","foreleg","forelie","foreman","foremen","forepaw","foreran","forerun","foresaw","foresay","foresee","forests","foretop","forever","forexes","forfair","forfeit","forfend","forgave","forgers","forgery","forgets","forging","forgive","forgoer","forgoes","forgone","forhent","forhoos","forhows","forints","forkers","forkful","forkier","forking","forlana","forlend","forlent","forlese","forlore","forlorn","formals","formant","formate","formats","formers","formful","formica","forming","formols","formula","formyls","fornent","forpets","forpine","forpits","forrays","forsaid","forsake","forsays","forsloe","forslow","forsook","forties","fortify","forting","fortlet","fortune","forward","forwarn","forwent","forworn","forzati","forzato","fossate","fossick","fossils","fossors","fossula","fosters","fothers","foudrie","fouette","fougade","foughty","foulard","foulder","foulest","foulies","fouling","foumart","founded","founder","foundry","fourgon","fourses","fourths","foussas","fouters","foutras","foutred","foutres","foveate","foveola","foveole","fowlers","fowling","fowlpox","foxfire","foxfish","foxhole","foxhunt","foxiest","foxings","foxlike","foxship","foxskin","foxtail","foxtrot","foyboat","foyling","foyning","foziest","frabbed","frabbit","fractal","fracted","fractur","fractus","fraenum","fragged","fragile","fragors","frailer","frailly","frailty","fraised","fraises","fraktur","framers","framing","frampal","franger","franion","franked","franker","frankly","frantic","frapped","frappee","frappes","frasses","fratchy","fraters","fratery","fraught","frawzey","fraying","frazils","frazzle","freaked","freckle","freckly","freebee","freebie","freedom","freegan","freeing","freeman","freemen","freesia","freeway","freezer","freezes","freight","fremits","frenula","frenums","frescos","freshed","freshen","fresher","freshes","freshet","freshie","freshly","fresnel","fretful","fretsaw","fretted","fretter","friable","friande","friands","friarly","fribble","frichts","fridged","fridges","friends","friezed","friezes","frigate","frigged","frigger","frights","frigots","frijole","frilled","friller","fringed","fringes","fripons","fripper","frippet","frisbee","frisees","friseur","friskas","frisked","frisker","frisket","frisson","fristed","frisure","fritfly","fritted","fritter","friture","fritzes","frivols","frizers","frizing","frizzed","frizzer","frizzes","frizzle","frizzly","frocked","frogbit","frogeye","frogged","froglet","frogman","frogmen","froings","froises","frolics","fromage","fronded","frontal","fronted","fronter","frontes","fronton","froshes","frosted","frothed","frother","froughy","frounce","froward","frowier","frowned","frowner","frowsts","frowsty","fructan","fructed","frugged","fruicts","fruited","fruiter","frumped","frumple","frushed","frushes","frustum","frutify","fryable","fryings","frypans","fubbery","fubbier","fubbing","fubsier","fuchsia","fuchsin","fuckers","fucking","fuckoff","fuckups","fuckwit","fucoids","fucoses","fucused","fucuses","fuddies","fuddled","fuddler","fuddles","fudging","fuehrer","fuelers","fueling","fuelled","fueller","fuffier","fuffing","fugally","fugatos","fuggier","fuggily","fugging","fuglier","fugling","fuguing","fuguist","fuhrers","fulcrum","fulfill","fulfils","fulgent","fulgors","fulgour","fulhams","fullage","fullams","fullans","fullers","fullery","fullest","fulling","fullish","fulmars","fulmine","fulness","fulsome","fulvous","fumados","fumages","fumaric","fumbled","fumbler","fumbles","fumette","fumetti","fumetto","fumiest","fumulus","functor","funders","fundies","funding","funebre","funeral","funfair","funfest","fungals","fungoes","fungoid","fungous","funicle","funkers","funkias","funkier","funkily","funking","funnels","funnest","funnier","funnies","funnily","funning","funplex","funster","furanes","furbish","furcate","furcula","fureurs","furfair","furfurs","furioso","furious","furkids","furlana","furlers","furless","furling","furlong","furmety","furmity","furnace","furnish","furoles","furores","furrier","furries","furrily","furring","furrows","furrowy","further","furtive","furzier","fusains","fusaria","fusarol","fuscous","fushion","fusible","fusibly","fusilli","fusions","fussers","fussier","fussily","fussing","fusspot","fustets","fustian","fustics","fustier","fustily","fusting","fustocs","futchel","futharc","futhark","futhorc","futhork","futiler","futsals","futtock","futural","futures","futzing","fuzzier","fuzzily","fuzzing","fuzzled","fuzzles","fylfots","gabbard","gabbart","gabbers","gabbier","gabbing","gabbled","gabbler","gabbles","gabbros","gabelle","gabfest","gabions","gablets","gabling","gabnash","gaboons","gadders","gadding","gadgets","gadgety","gadgies","gadling","gadoids","gadroon","gadsman","gadsmen","gadwall","gaffers","gaffing","gagakus","gaggers","gaggery","gagging","gaggled","gaggles","gagster","gahnite","gainers","gainest","gainful","gaining","gainsay","gaiters","gaiting","galabea","galabia","galages","galagos","galanga","galanty","galatea","galaxes","galeate","galenas","galenic","galeres","galette","galilee","galiots","galipot","gallant","gallate","gallein","galleon","gallery","galleta","gallets","galleys","gallfly","gallica","gallied","gallies","galling","galliot","gallise","gallium","gallize","gallnut","gallock","gallons","galloon","galloot","gallops","gallous","gallows","galoche","galoots","galoped","galopin","galores","galoshe","galumph","galuths","galyacs","galyaks","gambade","gambado","gambets","gambias","gambier","gambirs","gambist","gambits","gambled","gambler","gambles","gamboge","gambols","gambrel","gamelan","gametal","gametes","gametic","gamiest","gamines","gamings","gammats","gammers","gammier","gamming","gammock","gammons","gamones","gampish","ganache","ganched","ganches","ganders","gangers","ganging","ganglia","gangrel","gangsta","gangues","gangway","ganjahs","gannets","ganning","ganoids","ganoine","ganoins","ganseys","ganting","gantlet","gaolers","gaoling","gapiest","gapings","gapless","gaposis","gappers","gappier","gapping","garaged","garages","garbage","garbagy","garbing","garbled","garbler","garbles","garboil","garbure","garcons","gardant","gardens","garfish","gargets","gargety","gargled","gargler","gargles","garials","garigue","garjans","garland","garlics","garment","garners","garnets","garnish","garoted","garotes","garotte","garoupa","garpike","garrans","garrets","garring","garrons","garrote","garrots","garryas","garters","garudas","garveys","garvies","garvock","gasahol","gasbags","gascons","gaseity","gaseous","gashest","gashful","gashing","gaskets","gasking","gaskins","gasless","gasohol","gaspers","gaspier","gasping","gassers","gassier","gassily","gassing","gasters","gasting","gastral","gastrea","gastric","gastrin","gateaus","gateaux","gateleg","gateman","gatemen","gateway","gathers","gatings","gaucher","gauchos","gaucier","gaudery","gaudgie","gaudier","gaudies","gaudily","gauding","gaufers","gauffer","gaufres","gaugers","gauging","gaulter","gaumier","gauming","gaunted","gaunter","gauntly","gauntry","gaupers","gauping","gausses","gauzier","gauzily","gavages","gaveled","gavials","gavotte","gawcier","gawkers","gawkier","gawkies","gawkily","gawking","gawkish","gawpers","gawping","gawsier","gaydars","gayness","gaysome","gazabos","gazania","gazebos","gazeful","gazelle","gazette","gaziest","gazings","gazooka","gazoons","gazumps","gealing","gealous","gearbox","gearing","gecking","geckoes","gedacts","gedeckt","geebags","geebung","geechee","geegaws","geekdom","geekier","geelbek","geezahs","geezers","gefilte","geggies","geishas","gelable","geladas","gelande","gelants","gelated","gelates","gelatin","gelatis","gelatos","gelcaps","gelders","gelding","gelider","gelidly","gellant","gellies","gelling","gemclip","gemfish","geminal","gemlike","gemmate","gemmery","gemmier","gemmily","gemming","gemmule","gemotes","gemsbok","genappe","genders","general","generic","geneses","genesis","genetic","genette","genevas","genipap","genista","genital","genitor","genizah","genizot","genlock","gennels","gennets","gennies","genning","genoise","genomes","genomic","genseng","genteel","gentian","gentier","gentile","gentled","gentler","gentles","gentoos","genuine","genuses","geodesy","geoduck","geofact","geogeny","geogony","geoidal","geology","geomant","georgic","gerbera","gerbils","gerents","gerenuk","germain","germane","germans","germens","germier","germina","germing","germins","gerning","gertcha","gerunds","gessing","gessoed","gessoes","gestalt","gestant","gestapo","gestate","gesture","getable","getaway","getters","getting","gewgaws","geysers","gharial","gharris","ghasted","ghastly","ghazals","ghazels","ghazies","gheraos","gherkin","ghessed","ghesses","ghettos","ghiblis","ghilgai","ghillie","ghosted","ghostly","ghoulie","giantly","giantry","giaours","giardia","gibbers","gibbets","gibbing","gibbons","gibbose","gibbous","giblets","gibsons","gibuses","giddied","giddier","giddies","giddily","giddyap","giddyup","gidgees","gidjees","giftees","gifting","gigabit","gigaton","gigging","giggits","giggled","giggler","giggles","giglets","giglots","gigolos","gilbert","gilcups","gilders","gilding","gilgais","gilgies","gillers","gillets","gillied","gillies","gilling","gillion","gillnet","gilpeys","gilpies","giltcup","gimbals","gimlets","gimmals","gimmers","gimmick","gimmies","gimmors","gimpier","gimping","gingall","gingals","gingeli","gingely","gingers","gingery","gingham","gingili","gingiva","gingkos","gingles","ginkgos","ginnels","ginners","ginnery","ginnier","ginning","ginseng","ginshop","ginzoes","giocoso","gippers","gippies","gipping","gippoes","gipsens","gipsied","gipsies","giraffe","girasol","girders","girding","girdled","girdler","girdles","girkins","girlier","girlies","girlish","girlond","girnels","girners","girnier","girning","girolle","gironic","gironny","girosol","girshes","girthed","girting","gisarme","gitanas","gitanos","gittern","gitting","giusted","givable","givings","gizzard","gizzens","gjetost","glaceed","glacial","glacier","gladded","gladden","gladder","gladdie","gladdon","gladful","gladier","gladius","glaiket","glaikit","glaired","glaires","glairin","glaived","glaives","glamors","glamour","glanced","glancer","glances","glandes","glareal","glarier","glaring","glassed","glassen","glasses","glassie","glaumed","glazers","glazier","glazily","glazing","gleamed","gleamer","gleaned","gleaner","gleaves","glebous","gledged","gledges","gleeful","gleeing","gleeked","gleeman","gleemen","gleenie","gleeted","glegger","glenoid","glented","gleying","gliadin","glibbed","glibber","glidder","gliders","gliding","gliming","glimmer","glimpse","glinted","gliomas","glioses","gliosis","glisten","glister","glitchy","glitter","glitzed","glitzes","gloated","gloater","globate","globing","globins","globoid","globose","globous","globule","glochid","gloires","glomera","glommed","glonoin","gloomed","glooped","glopped","glorias","gloried","glories","glorify","glossae","glossal","glossas","glossed","glosser","glosses","glottal","glottic","glottis","glouted","glovers","gloving","glowers","glowfly","glowing","glozing","glucans","glucina","glucose","glueing","gluepot","glugged","gluiest","glummer","glurges","glutaei","gluteal","glutens","gluteus","glutted","glutton","glycans","glycine","glycins","glycols","glycose","glycyls","glyphic","glyptal","glyptic","gnarled","gnarred","gnashed","gnasher","gnashes","gnathal","gnathic","gnawers","gnawing","gnocchi","gnomish","gnomist","gnomons","gnostic","goading","goalies","goaling","goannas","goateed","goatees","goatier","goatish","gobangs","gobbets","gobbier","gobbing","gobbled","gobbler","gobbles","gobiids","gobioid","goblets","goblins","gobonee","goburra","goddamn","goddams","goddens","goddess","godding","godetia","godhead","godhood","godless","godlier","godlike","godlily","godling","godowns","godroon","godsend","godship","godslot","godsons","godward","godwits","goeties","goffers","goffing","goggled","goggler","goggles","goglets","goiters","goitred","goitres","goldarn","goldbug","goldens","goldest","goldeye","goldier","goldish","goldurn","golfers","golfing","goliard","goliath","golland","gollans","gollars","gollers","gollied","gollies","gollops","goloshe","gombeen","gombros","gomeral","gomerel","gomeril","gomokus","gomutis","gomutos","gonadal","gonadic","gondola","gonging","gongyos","gonidia","gonidic","goniffs","gonophs","gonopod","gonyses","goobers","goobies","goodbye","goodbys","goodier","goodies","goodish","goodman","goodmen","goofier","goofily","goofing","googled","googles","googols","gooiest","gooleys","goolies","goombah","goombay","goondas","gooneys","goonier","goonies","goopier","goorals","goories","gooroos","goosery","gooseys","goosier","goosies","goosing","gophers","gopuram","gopuras","gorcock","gorcrow","gordita","gorgers","gorgets","gorgias","gorging","gorgios","gorgons","gorhens","goriest","gorilla","gorings","gormand","gormier","gorming","gorping","gorsedd","gorsier","gorsoon","goshawk","goslets","gosling","gospels","gospoda","gosport","gossans","gossibs","gossing","gossips","gossipy","gossoon","gosters","gotchas","gothics","gothite","gouache","gougere","gougers","gouging","goujons","goulash","gourami","gourdes","gourmet","goutfly","goutier","goutily","gouttes","governs","gowaned","gowdest","gowfers","gowfing","gowland","gowlans","gowling","gownboy","gowning","gownman","gownmen","gowpens","goyisch","gozzans","grabbed","grabber","grabble","grabens","gracile","gracing","grackle","gradate","graddan","gradely","graders","gradine","grading","gradini","gradino","gradins","gradual","graffed","grafted","grafter","grahams","grailes","grained","grainer","graines","graiths","grakles","gramary","gramash","grammar","grammas","grammes","grampas","grampus","granary","grandad","grandam","grandee","grander","grandly","grandma","grandpa","granfer","granger","granges","granita","granite","grannam","grannie","grannom","granola","granted","grantee","granter","grantor","granule","grapery","graphed","graphic","grapier","graping","graples","graplin","grapnel","grappas","grapple","grasped","grasper","grassed","grasser","grasses","grassum","graters","gratify","gratine","grating","gratins","graunch","graupel","gravels","gravely","gravers","gravest","gravida","gravies","graving","gravity","gravlax","gravure","grayest","grayfly","graying","grayish","graylag","grayles","grayout","grazers","grazier","grazing","greased","greaser","greases","greaten","greater","greatly","greaved","greaves","grecian","grecise","grecize","grecque","greeces","greeing","greeked","greened","greener","greenie","greenly","greenth","greeses","greeted","greeter","greetes","gregale","greiges","greined","greisen","greisly","gremial","gremlin","gremmie","grenade","grenned","grewing","greyest","greyhen","greying","greyish","greylag","gribble","gricers","gricing","gridded","gridder","griddle","griding","grieced","grieces","griefer","griesie","griesly","grieved","griever","grieves","griffes","griffin","griffon","grifted","grifter","grigged","grigris","grilled","griller","grilles","grilses","grimace","grimier","grimily","griming","grimmer","grinded","grinder","gringas","gringos","grinned","grinner","gripers","gripier","griping","gripman","gripmen","gripped","gripper","grippes","gripple","grisely","grising","griskin","grisled","grisons","grister","gristle","gristly","gritted","gritter","grivets","grizzle","grizzly","groaned","groaner","grocers","grocery","grockle","grodier","grogged","grogram","groined","grokked","gromets","grommet","groning","groomed","groomer","grooved","groover","grooves","gropers","groping","grosers","grosert","grosets","grossed","grosser","grosses","grossly","grottos","grouchy","groughs","grounds","grouped","grouper","groupie","groused","grouser","grouses","grouted","grouter","grovels","grovets","growers","growing","growled","growler","grownup","growths","growthy","groynes","grozing","grubbed","grubber","grubble","grudged","grudger","grudges","grueing","grueled","grueler","gruffed","gruffer","gruffly","grufted","grugrus","grumble","grumbly","grummer","grummet","grumose","grumous","grumped","grumphs","grumphy","grunger","grunges","grunion","grunted","grunter","gruntle","grushie","grutten","gruyere","gryding","gryfons","gryphon","grysbok","grysely","guaiacs","guanaco","guanase","guanays","guangos","guanine","guanins","guanxis","guarana","guarani","guarded","guardee","guarder","guarish","guayule","gubbahs","gubbins","guckier","guddled","guddles","gudeman","gudemen","gudgeon","guenons","guerdon","guereza","guerite","guessed","guesser","guesses","guested","guesten","guffaws","guffies","guggled","guggles","guglets","guichet","guidage","guiders","guiding","guidons","guilder","guildry","guilers","guiling","guimped","guimpes","guineas","guipure","guisard","guisers","guising","guitars","guizers","gulched","gulches","guldens","gulfier","gulfing","gullers","gullery","gullets","gulleys","gullied","gullies","gulling","gullish","gulpers","gulpier","gulping","gumball","gumboil","gumboot","gumdrop","gumless","gumlike","gumline","gummata","gummers","gummier","gummies","gummily","gumming","gummite","gummose","gummous","gumnuts","gumping","gumshoe","gumtree","gumweed","gumwood","gunboat","gundies","gundogs","gunfire","gungier","gunging","gunites","gunkier","gunless","gunlock","gunnage","gunnels","gunnera","gunners","gunnery","gunnies","gunning","gunplay","gunport","gunroom","gunsels","gunship","gunshot","gunters","gunwale","gunyahs","guppies","guramis","gurging","gurgled","gurgles","gurglet","gurjuns","gurlets","gurlier","gurling","gurnard","gurnets","gurneys","gurning","gurrahs","gurrier","gurries","gurshes","gurudom","guruism","gushers","gushier","gushily","gushing","guslars","gussets","gussied","gussies","gustful","gustier","gustily","gusting","gustoes","gutcher","gutfuls","gutless","gutlike","gutrots","gutsers","gutsful","gutsier","gutsily","gutsing","guttate","gutters","guttery","guttier","gutties","gutting","guttled","guttler","guttles","gutzers","guylers","guyline","guyling","guzzled","guzzler","guzzles","gweduck","gweducs","gwiniad","gwyniad","gymbals","gymmals","gymnast","gympies","gymping","gymslip","gynecia","gynecic","gynneys","gynnies","gyplure","gyppers","gyppies","gypping","gypsied","gypsies","gypster","gypsums","gyrally","gyrases","gyrated","gyrates","gyrator","gyrenes","gyrocar","gyronic","gyronny","gyruses","gytrash","gyttjas","habdabs","habitan","habitat","habited","habitue","habitus","haboobs","hachure","hackbut","hackees","hackers","hackery","hackies","hacking","hackled","hackler","hackles","hacklet","hackman","hackmen","hackney","hacksaw","hadarim","hadaway","haddest","haddies","hadding","haddock","hadedah","hadiths","hadjees","hadrome","hadrons","haemins","haemoid","haemony","haffets","haffits","hafflin","hafizes","hafnium","haftara","hafters","hafting","hagadic","hagbolt","hagborn","hagbush","hagbuts","hagdens","hagdons","hagdown","hagfish","haggada","haggard","hagging","haggish","haggled","haggler","haggles","haglets","haglike","hagride","hagrode","hahnium","haiduks","hailers","hailier","hailing","haimish","haining","haiques","haircap","haircut","hairdos","hairier","hairifs","hairing","hairnet","hairpin","hairsts","hajjahs","hakeems","halacha","halakah","halakha","halakic","halalah","halalas","halavah","halberd","halbert","halcyon","halflin","halfway","halfwit","halibut","halides","halidom","halimot","halites","halitus","hallahs","hallali","hallals","hallans","hallels","hallian","halling","hallion","halloas","halloed","halloes","halloos","halloth","hallows","hallway","hallyon","halogen","haloids","haloing","haloumi","halsers","halsing","haltere","halters","halting","halvahs","halvers","halving","halyard","hamadas","hamates","hamauls","hambled","hambles","hambone","hamburg","hamlets","hammada","hammals","hammams","hammers","hammier","hammily","hamming","hammock","hampers","hamster","hamular","hamulus","hamzahs","hanaper","hanched","hanches","handbag","handcar","handers","handfed","handful","handgun","handier","handily","handing","handism","handjar","handled","handler","handles","handoff","handout","handsaw","handsel","handset","hangars","hangdog","hangers","hanging","hangman","hangmen","hangout","hangtag","hangups","hanjars","hankers","hankies","hanking","hansels","hansoms","hanting","hantles","hanuman","hapaxes","hapkido","hapless","haplite","haploid","haplont","happens","happied","happier","happies","happily","happing","haptene","haptens","haptics","hapukas","hapukus","haramda","haramdi","harbors","harbour","hardass","hardbag","hardens","hardest","hardhat","hardier","hardies","hardily","hardish","hardman","hardmen","hardoke","hardpan","hardset","hardtop","hareems","harelds","harelip","hariana","haricot","harijan","hariras","harissa","harkens","harking","harling","harlots","harmala","harmans","harmels","harmers","harmful","harmine","harming","harmins","harmony","harmost","harness","haroset","harpers","harpies","harping","harpins","harpist","harpoon","harried","harrier","harries","harrows","harshen","harsher","harshly","harslet","hartals","hartely","hartens","harumph","harvest","hasbian","hashier","hashing","hashish","haslets","hasping","hassars","hassels","hassium","hassled","hassles","hassock","hastate","hastens","hastier","hastily","hasting","hatable","hatband","hatched","hatchel","hatcher","hatches","hatchet","hateful","hatfuls","hatless","hatlike","hatpegs","hatpins","hatrack","hatreds","hatsful","hatters","hatting","hattock","hauberk","haubois","hauding","haughty","haulage","haulers","haulier","hauling","haunted","haunter","hausens","hausing","hautboy","hauteur","hauynes","havarti","havened","haveour","havered","haverel","havings","haviors","haviour","hawalas","hawbuck","hawkbit","hawkers","hawkeys","hawkies","hawking","hawkish","hawming","hawsers","hawsing","hayband","haycock","hayfork","hayings","haylage","hayloft","haymows","hayrack","hayrick","hayride","hayseed","haysels","hayward","haywire","hazanim","hazards","hazelly","haziest","hazings","hazmats","hazzans","headage","headend","headers","headful","headier","headily","heading","headman","headmen","headpin","headrig","headset","headway","healded","healees","healers","healing","healths","healthy","heapers","heapier","heaping","hearers","hearing","hearken","hearsay","hearsed","hearses","hearted","hearten","hearths","heartly","heastes","heaters","heathen","heather","heating","heaumes","heavens","heavers","heavier","heavies","heavily","heaving","hebenon","hebetic","hebonas","heckled","heckler","heckles","hectare","hectics","hectors","heddled","heddles","hederal","hederas","hedgers","hedgier","hedging","hedonic","heeders","heedful","heeding","heehaws","heelers","heeling","heeltap","heezies","heezing","hefters","heftier","heftily","hefting","hegaris","hegemon","hegiras","hegumen","heifers","heighth","heights","heiling","heimish","heinies","heinous","heirdom","heiress","heiring","heisted","heister","heitiki","hejiras","hektare","helcoid","heliast","helibus","helical","helices","helicon","heliman","helimen","helipad","heliums","helixes","hellbox","hellcat","helleri","hellers","hellery","hellier","helling","hellion","hellish","helloed","helloes","hellova","helluva","helmers","helmets","helming","helotry","helpers","helpful","helping","helving","hemagog","hematal","hematic","hematin","heminas","hemiola","hemione","hemipod","hemline","hemlock","hemmers","hemming","hempier","hempies","henbane","henbits","hencoop","hending","henleys","henlike","hennaed","henners","hennery","hennier","hennies","henning","hennins","hennish","henotic","henpeck","henries","henting","heparin","hepatic","hepcats","heppest","hepster","heptads","heptane","heptose","heralds","herbage","herbals","herbars","herbary","herbier","herbist","herblet","herbose","herbous","herdboy","herdens","herders","herdess","herdics","herding","herdman","herdmen","heredes","heretic","heriots","herisse","heritor","herling","hermits","herniae","hernial","hernias","heroics","heroine","heroins","heroise","heroism","heroize","heronry","heroons","herried","herries","herring","hersall","herself","hership","hertzes","herying","hesping","hessian","hessite","hetaera","hetaira","heteros","hetmans","heureka","heurism","hewable","hewings","hexacts","hexades","hexadic","hexagon","hexanes","hexapla","hexapod","hexarch","hexenes","hexerei","hexings","hexones","hexosan","hexoses","hexylic","heydays","heydeys","heyduck","hibachi","hicatee","hiccups","hiccupy","hickeys","hickies","hickish","hickory","hidable","hidages","hidalga","hidalgo","hidders","hideous","hideout","hidings","hidling","hidlins","hieland","higgled","higgler","higgles","highboy","highers","highest","highing","highish","highman","highmen","highted","highths","hightop","highway","hijacks","hijinks","hijrahs","hikoied","hilched","hilches","hilding","hillers","hillier","hilling","hillmen","hilloas","hillock","hilloed","hilloes","hilltop","hilting","himatia","himself","hinders","hindgut","hindleg","hingers","hinging","hinkier","hinnied","hinnies","hinters","hinting","hipbone","hipless","hiplike","hipline","hipness","hippens","hippest","hippier","hippies","hipping","hippins","hippish","hipshot","hipster","hirable","hirages","hircine","hireage","hirings","hirling","hirpled","hirples","hirsels","hirsled","hirsles","hirstie","hirsute","hirudin","hishing","hisself","hissers","hissier","hissies","hissing","histing","histoid","histone","history","histrio","hitched","hitcher","hitches","hithers","hitless","hitters","hitting","hizzing","hoagies","hoarded","hoarder","hoarier","hoarily","hoaring","hoarsen","hoarser","hoasted","hoatzin","hoaxers","hoaxing","hobbers","hobbies","hobbing","hobbish","hobbits","hobbled","hobbler","hobbles","hobdays","hobjobs","hoblike","hobnail","hobnobs","hobodom","hoboing","hoboism","hockers","hockeys","hocking","hockled","hockles","hocused","hocuses","hodaddy","hoddens","hodding","hoddins","hoddled","hoddles","hoecake","hoedown","hoelike","hogback","hogfish","hoggers","hoggery","hoggets","hogging","hoggins","hoggish","hoghood","hoglike","hogmane","hognose","hognuts","hogtied","hogties","hogward","hogwash","hogweed","hoicked","hoidens","hoiking","hoising","hoisins","hoisted","hoister","hokiest","hokonui","holards","holdall","holders","holding","holdout","holdups","holesom","holeyer","holibut","holiday","holiest","holings","holisms","holists","holking","hollaed","holland","hollers","hollies","holloas","holloed","holloes","holloos","hollows","holmias","holmium","holonic","holster","holydam","holyday","homaged","homager","homages","hombres","homburg","homeboy","homelyn","homered","homeric","homiest","homines","homings","hominid","hommock","homolog","homonym","homosex","honchos","hondled","hondles","honesty","honeyed","hongied","hongies","honging","honkers","honkeys","honkies","honking","honored","honoree","honorer","honours","hooches","hoochie","hoodias","hoodier","hoodies","hooding","hoodlum","hoodman","hoodmen","hoodoos","hoofers","hoofing","hoofrot","hookahs","hookers","hookeys","hookier","hookies","hooking","hooklet","hookups","hooleys","hoolier","hoolies","hoolock","hoopers","hooping","hooplas","hoopoes","hoopoos","hoorahs","hoorays","hoosgow","hooshed","hooshes","hooters","hootier","hooting","hoovers","hooving","hopbind","hopbine","hopdogs","hopeful","hophead","hoplite","hoppers","hoppier","hopping","hoppled","hoppler","hopples","hopsack","hoptoad","hordein","hording","hordock","horizon","horkeys","hormone","hornbag","hornbug","horners","hornets","hornful","hornier","hornily","horning","hornish","hornist","hornito","hornlet","horoeka","horrent","horrify","horrors","horsier","horsily","horsing","horsons","horstes","hosanna","hoseman","hosemen","hoseyed","hosiers","hosiery","hospice","hostage","hostels","hostess","hosties","hostile","hosting","hostler","hotbeds","hotcake","hotched","hotches","hotdogs","hotfoot","hothead","hotline","hotlink","hotness","hotpots","hotrods","hotshot","hotspot","hotspur","hotters","hottest","hotties","hotting","hottish","houdahs","houdans","houffed","houfing","houghed","houhere","hoummos","houmous","hounded","hounder","houngan","housels","housers","housier","housing","houting","hoveled","hovered","hoverer","howbeit","howdahs","howdied","howdies","however","howffed","howfing","howkers","howking","howlers","howlets","howling","hoydens","hryvnas","hryvnia","hryvnya","huanaco","hubbies","hubbubs","hubcaps","huckery","huckles","huddled","huddler","huddles","hueless","huffers","huffier","huffily","huffing","huffish","huffkin","hugeous","huggers","huggier","hugging","huipils","huitain","hulkier","hulking","hullers","hullier","hulling","hulloas","hulloed","hulloes","hulloos","humaner","humanly","humates","humbled","humbler","humbles","humbugs","humbuzz","humdrum","humects","humeral","humerus","humfing","humhums","humider","humidex","humidly","humidor","humints","humites","humlies","hummaum","hummels","hummers","humming","hummock","hummums","humogen","humoral","humored","humours","humpens","humpers","humphed","humpier","humpies","humping","humuses","humvees","hunched","hunches","hundred","hungans","hungers","hunkers","hunkeys","hunkier","hunkies","hunkses","hunnish","hunters","hunting","huppahs","hupping","hurdens","hurdies","hurdled","hurdler","hurdles","hurlbat","hurlers","hurleys","hurlies","hurling","hurraed","hurrahs","hurrays","hurried","hurrier","hurries","hurters","hurtful","hurting","hurtled","hurtles","husband","hushaby","hushers","hushful","hushier","hushing","huskers","huskier","huskies","huskily","husking","hussars","hussies","hussifs","hustled","hustler","hustles","huswife","hutched","hutches","hutchie","hutlike","hutment","hutting","hutzpah","hutzpas","huzoors","huzzaed","huzzahs","huzzies","hyacine","hyaenas","hyaenic","hyaline","hyalins","hyalite","hyaloid","hybrids","hydatid","hydrant","hydrase","hydrate","hydriae","hydride","hydrids","hydroid","hydroma","hydrops","hydrous","hydroxy","hydynes","hyenine","hyenoid","hygeist","hygiene","hygroma","hylding","hylisms","hylists","hyloist","hymenal","hymenia","hymnals","hymnary","hymning","hymnist","hymnody","hyoidal","hypates","hyperon","hyphens","hypings","hypnics","hypnoid","hypnone","hypnums","hypogea","hypoing","hyponea","hyponym","hypoxia","hypoxic","hypping","hypural","hyraces","hyraxes","hyssops","iambics","iambist","iceball","iceberg","iceboat","icecaps","icefall","iceless","icelike","icepack","icewine","ichabod","ichnite","ichthic","ichthys","icicled","icicles","iciness","ickiest","icklest","iconify","iconise","iconize","icteric","icterid","icterus","ictuses","ideally","ideated","ideates","ideatum","identic","idiotcy","idiotic","idlesse","idolise","idolism","idolist","idolize","idylist","idyllic","iffiest","igarape","ignaros","ignatia","igneous","ignited","igniter","ignites","ignitor","ignoble","ignobly","ignored","ignorer","ignores","iguanas","iguanid","ijtihad","ikebana","ileitis","ileuses","iliacus","ilkaday","illapse","illegal","illiads","illicit","illipes","illites","illitic","illness","illogic","illuded","illudes","illumed","illumes","illupis","illuvia","imagers","imagery","imagine","imaging","imagism","imagist","imagoes","imamate","imarets","imbalms","imbarks","imbased","imbases","imbathe","imbibed","imbiber","imbibes","imbizos","imblaze","imbosks","imbosom","imbower","imbrast","imbrown","imbrued","imbrues","imbrute","imbuing","imburse","imitant","imitate","immasks","immense","immerge","immerse","immewed","immixed","immixes","immoral","immunes","immured","immures","impacts","impaint","impairs","impalas","impaled","impaler","impales","impanel","imparks","imparls","imparts","impasse","impaste","impasto","impaved","impaves","impavid","impawns","impeach","impearl","impeded","impeder","impedes","impedor","impends","imperia","imperil","impetus","imphees","impiety","impinge","impings","impious","implant","implate","implead","implete","implied","implies","implode","implore","imponed","impones","imports","imposed","imposer","imposes","imposts","impound","impower","impregn","impresa","imprese","impress","imprest","imprint","improve","improvs","impugns","impulse","impurer","imputed","imputer","imputes","inanely","inanest","inangas","inanity","inaptly","inarmed","inbeing","inboard","inbound","inbreak","inbreds","inbreed","inbring","inbuilt","inburst","incaged","incages","incants","incased","incases","incaved","incaves","inceded","incedes","incense","incents","incepts","incests","inchase","inchers","inching","inchpin","incipit","incisal","incised","incises","incisor","incited","inciter","incites","incivil","inclasp","incline","inclips","inclose","include","incomer","incomes","inconie","inconnu","incross","incrust","incubus","incudal","incudes","incurve","incused","incuses","indabas","indamin","indarts","indenes","indents","indewed","indexal","indexed","indexer","indexes","indican","indices","indicia","indicts","indigen","indigos","indited","inditer","indites","indiums","indoles","indoors","indorse","indowed","indoxyl","indraft","indrawn","induced","inducer","induces","inducts","induing","indulge","indulin","indults","indunas","indusia","indwell","indwelt","inearth","inedita","inepter","ineptly","inerter","inertia","inertly","inexact","infalls","infamed","infames","infancy","infanta","infante","infants","infarct","infares","infauna","infaust","infects","infefts","infeoff","inferno","infests","infidel","infield","infight","infills","infimum","infirms","infixed","infixes","inflame","inflate","inflect","inflict","inflows","infolds","inforce","informs","infract","infulae","infused","infuser","infuses","ingates","ingener","ingenue","ingenus","ingesta","ingests","ingines","inglobe","ingoing","ingoted","ingraft","ingrain","ingrate","ingress","ingross","ingroup","ingrown","ingulfs","ingulph","inhabit","inhaled","inhaler","inhales","inhauls","inhaust","inherce","inhered","inheres","inherit","inhibin","inhibit","inhoops","inhuman","inhumed","inhumer","inhumes","inisled","inisles","initial","injects","injelly","injeras","injoint","injunct","injured","injurer","injures","inkblot","inkhorn","inkiest","inkless","inklike","inkling","inkpots","inkspot","inkwell","inkwood","inlaced","inlaces","inlands","inlayer","inliers","inlocks","inlying","inmates","innages","innards","innerly","innerve","innings","innless","innyard","inocula","inorbed","inosine","inosite","inphase","inpours","inqilab","inquere","inquest","inquiet","inquire","inquiry","inroads","insaner","insanie","inscape","insculp","inseams","insects","inseems","inserts","inshell","inships","inshore","insider","insides","insight","insigne","insinew","insipid","insists","insnare","insofar","insoles","insooth","insouls","inspans","inspect","inspire","install","instals","instant","instars","instate","instead","insteps","instill","instils","insulae","insular","insulas","insulin","insulse","insults","insured","insurer","insures","inswept","inswing","intagli","intakes","integer","intends","intense","intents","interim","interne","interns","inthral","intimae","intimal","intimas","intines","intitle","intombs","intoned","intoner","intones","intorts","intrada","intrant","intreat","introfy","introit","introld","introns","intrude","intrust","intuits","inturns","intuses","intwine","intwist","inulase","inulins","inuring","inurned","inutile","invaded","invader","invades","invalid","inveigh","invenit","invents","inverse","inverts","invests","invexed","invious","invital","invited","invitee","inviter","invites","invoice","invoked","invoker","invokes","involve","inwalls","inwards","inweave","inwicks","inwinds","inworks","inwound","inwoven","inwraps","inyalas","iodated","iodates","iodides","iodines","iodised","iodiser","iodises","iodisms","iodized","iodizer","iodizes","ioduret","iolites","ionised","ioniser","ionises","ioniums","ionized","ionizer","ionizes","ionogen","ionomer","ionones","ipecacs","ipomoea","iracund","irately","iratest","ireless","irenics","irideal","iridial","iridian","iridise","iridium","iridize","irisate","irising","irksome","ironers","ironier","ironies","ironing","ironise","ironist","ironize","ironman","ironmen","irrupts","isabels","isagoge","isatine","isatins","ischial","ischium","islands","isleman","islemen","isleted","ismatic","isoamyl","isobare","isobars","isobase","isobath","isochor","isodica","isodoma","isodont","isodose","isoetes","isoform","isogamy","isogeny","isogone","isogons","isogony","isogram","isogriv","isohels","isohyet","isokont","isolate","isolead","isoline","isologs","isomere","isomers","isonome","isonomy","isopach","isopods","isospin","isotach","isotone","isotope","isotopy","isotron","isotype","isozyme","issuant","issuers","issuing","istanas","isthmic","isthmus","itacism","italics","itchier","itchily","itching","iteming","itemise","itemize","iterant","iterate","ivoried","ivories","ivorist","ivresse","ivylike","ixodids","izzards","jabbers","jabbing","jabbled","jabbles","jabirus","jacales","jacamar","jacanas","jacares","jacchus","jacinth","jackals","jackass","jackdaw","jackeen","jackers","jackets","jackies","jacking","jackleg","jackman","jackmen","jackpot","jacksie","jacobin","jacobus","jaconet","jacuzzi","jadedly","jadeite","jaditic","jaegers","jagaing","jaggary","jaggers","jaggery","jaggier","jaggies","jagging","jaghire","jaghirs","jagless","jaguars","jailers","jailing","jailors","jakeses","jalapic","jalapin","jaloppy","jalouse","jamadar","jambart","jambeau","jambees","jambers","jambeux","jambier","jambing","jambiya","jamboks","jambone","jambool","jambuls","jamdani","jameses","jamjars","jamlike","jammers","jammier","jammies","jamming","jampani","jampans","jampots","jandals","jangled","jangler","jangles","janitor","janizar","jankers","jannies","jannock","janskys","jantier","janties","japings","japping","jarfuls","jargons","jargony","jargoon","jarhead","jarinas","jarkman","jarkmen","jarldom","jarools","jarping","jarrahs","jarring","jarsful","jarveys","jarvies","jasmine","jasmins","jaspers","jaspery","jassids","jatakas","jauking","jaunced","jaunces","jaunsed","jaunses","jaunted","jauntee","jauntie","jauping","javelin","jawaris","jawbone","jawfall","jawhole","jawings","jawless","jawlike","jawline","jaybird","jaygees","jayvees","jaywalk","jazzbos","jazzers","jazzier","jazzily","jazzing","jazzman","jazzmen","jealous","jeelied","jeelies","jeeling","jeepers","jeeping","jeepney","jeerers","jeering","jeffing","jehadis","jejunal","jejunum","jellaba","jellied","jellies","jellify","jelling","jemadar","jemidar","jemimas","jemmied","jemmier","jemmies","jennets","jennies","jeofail","jeopard","jerbils","jerboas","jereeds","jerkers","jerkier","jerkies","jerkily","jerking","jerkins","jerqued","jerquer","jerques","jerreed","jerrids","jerries","jerseys","jessamy","jessant","jessies","jessing","jestees","jesters","jestful","jesting","jesuits","jetbead","jetfoil","jetlags","jetlike","jetport","jetsams","jetsoms","jetsons","jettied","jettier","jetties","jetting","jettons","jetways","jeweled","jeweler","jewelry","jewfish","jezails","jezebel","jhatkas","jibbahs","jibbers","jibbing","jibbons","jibboom","jicamas","jiffies","jigaboo","jigajig","jigajog","jiggers","jiggier","jigging","jiggish","jiggled","jiggles","jigjigs","jiglike","jigsawn","jigsaws","jihadis","jilbabs","jilgies","jillets","jillion","jilters","jilting","jimjams","jimmied","jimmies","jimminy","jimpest","jimpier","jingall","jingals","jingled","jingler","jingles","jinglet","jingoes","jinjili","jinkers","jinking","jinxing","jipyapa","jirbled","jirbles","jissoms","jitneys","jitters","jittery","jiveass","jiviest","joannas","joannes","jobbers","jobbery","jobbies","jobbing","jobless","jobname","jockeys","jockney","jocular","jodhpur","joggers","jogging","joggled","joggler","joggles","jogtrot","johnnie","johnson","joinder","joiners","joinery","joining","jointed","jointer","jointly","joisted","jojobas","jokiest","jolleys","jollied","jollier","jollies","jollify","jollily","jolling","jollity","jollops","jollyer","jolters","joltier","joltily","jolting","jonesed","joneses","jonnock","jonquil","jonties","jookery","jooking","jordans","josephs","joshers","joshing","joskins","jossers","jostled","jostler","jostles","jotters","jotting","jotunns","joukery","jouking","jouling","jounced","jounces","journal","journey","journos","jousted","jouster","jowaris","jowlers","jowlier","jowling","joyance","joyless","joypops","joyride","joyrode","jubbahs","jubhahs","jubilee","jubiles","judases","judders","judgers","judging","judogis","judoist","judokas","jugfuls","jugging","juggins","juggled","juggler","juggles","jughead","juglets","jugsful","jugular","jugulum","juicers","juicier","juicily","juicing","jujitsu","jujubes","jujuism","jujuist","jujutsu","jukebox","jukskei","jumared","jumarts","jumbals","jumbies","jumbled","jumbler","jumbles","jumbuck","jumelle","jumpers","jumpier","jumpily","jumping","jumpoff","juncate","juncoes","jungled","jungles","junglis","juniors","juniper","junkers","junkets","junkier","junkies","junking","junkman","junkmen","jupatis","jurally","jurants","juridic","jurists","jurying","juryman","jurymen","jussive","justers","justest","justice","justify","justing","justled","justles","juttied","jutties","jutting","juvenal","kabaddi","kabakas","kabalas","kabayas","kabbala","kabeles","kabikis","kabukis","kacchas","kachcha","kacheri","kachina","kaddish","kaffirs","kafilas","kaftans","kagools","kagoule","kagouls","kahawai","kahunas","kaiaked","kaikais","kaingas","kainite","kainits","kaisers","kaizens","kajawah","kajeput","kakapos","kakodyl","kalends","kalians","kalimba","kaliphs","kaliums","kalmias","kalongs","kalpacs","kalpaks","kamalas","kamelas","kamerad","kamichi","kamilas","kamises","kampong","kamseen","kamsins","kanakas","kanbans","kandies","kanghas","kantars","kantela","kantele","kantens","kanthas","kanting","kaoline","kaolins","karaism","karaits","karakas","karakia","karakul","karamus","karanga","karaoke","karates","karengo","karites","karking","karoros","karoshi","karroos","karseys","karsies","karstic","karters","karting","karyons","karzies","kasbahs","kashers","kashmir","kashrus","kashrut","katanas","katcina","kathaks","kathode","kations","katipos","katorga","katsura","katydid","kaupapa","kauries","kayaked","kayaker","kaylied","kayoing","keasars","keavies","kebbies","kebbing","kebbock","kebbuck","kebeles","keblahs","kecking","keckled","keckles","keckses","keddahs","kedgers","kedgier","kedging","keeches","keekers","keeking","keelage","keelers","keelies","keeling","keelman","keelmen","keelson","keeners","keenest","keening","keepers","keeping","keepnet","keester","keffels","kegeler","keggers","kegging","keglers","kegling","keister","keitloa","keksyes","kellaut","kellies","keloids","kelpers","kelpies","kelping","kelsons","kelters","kelties","kelvins","kembing","kemblas","kemboed","kempers","kempier","kemping","kemples","kenches","kennels","kenners","kennets","kennett","kenning","kenoses","kenosis","kenotic","kentias","kenting","kephirs","kepping","keramic","keratin","kerbaya","kerbing","kerchoo","kerfing","kerkier","kermess","kernels","kerning","kernish","kernite","kerogen","kerrias","kerries","kerseys","kerving","kerygma","kesting","kestrel","ketches","ketchup","ketenes","ketmias","ketones","ketonic","ketoses","ketosis","ketotic","kettles","ketubah","ketubot","kewlest","kewpies","keycard","keyhole","keyings","keyless","keyline","keynote","keypads","keypals","keyring","keysets","keyster","keyways","keyword","kgotlas","khaddar","khalats","khalifa","khalifs","khamsin","khanate","khandas","khangas","khanjar","khanums","kharifs","khayals","khazens","khedahs","khediva","khedive","khilats","khilims","khirkah","khodjas","khotbah","khotbeh","khurtas","khutbah","kiaughs","kibbehs","kibbitz","kibbled","kibbles","kibbutz","kibitka","kiblahs","kickbox","kickers","kickier","kicking","kickoff","kickups","kidders","kiddied","kiddier","kiddies","kidding","kiddish","kiddles","kiddoes","kiddush","kidgier","kidlets","kidlike","kidling","kidnaps","kidneys","kidskin","kidults","kidvids","kiekies","kieries","kiester","kikumon","kikuyus","kilergs","killcow","killdee","killers","killick","killies","killing","killjoy","killock","killuts","kilning","kilobar","kilobit","kilorad","kiloton","kilters","kilties","kilting","kimboed","kimchee","kimchis","kimmers","kimonos","kinaras","kinases","kinchin","kincobs","kinders","kindest","kindies","kinding","kindled","kindler","kindles","kindred","kinemas","kineses","kinesic","kinesis","kinetic","kinetin","kinfolk","kingcup","kingdom","kinging","kingles","kinglet","kingpin","kinkier","kinkily","kinking","kinkles","kinless","kinones","kinreds","kinship","kinsman","kinsmen","kippage","kippers","kipping","kipskin","kirbehs","kirimon","kirking","kirkman","kirkmen","kirkton","kirmess","kirning","kirpans","kirtans","kirtled","kirtles","kishkas","kishkes","kismats","kismets","kissels","kissers","kissing","kistful","kisting","kitbags","kitchen","kitenge","kithara","kithing","kitings","kitling","kitschy","kitsets","kittels","kittens","kitteny","kitties","kitting","kittled","kittler","kittles","kittuls","klapped","klatsch","klavern","klavier","klaxons","kleagle","kleenex","klephts","kleptos","klezmer","klinker","klipdas","klister","klootch","kludged","kludges","kludgey","kluging","klutzes","knacked","knacker","knaidel","knapped","knapper","knapple","knarred","knavery","knavish","knawels","kneaded","kneader","kneecap","kneeing","kneeled","kneeler","kneepad","kneepan","kneidel","knelled","knesset","knevell","knicker","knifers","knifing","knights","knishes","knitted","knitter","knittle","kniving","knobbed","knobber","knobble","knobbly","knocked","knocker","knolled","knoller","knopped","knotted","knotter","knouted","knowers","knowhow","knowing","knubble","knubbly","knuckle","knuckly","knurled","kobangs","kobolds","kochias","koekoea","koftgar","kokakos","kokanee","kokobeh","kokowai","kolacky","kolbasi","kolhozy","kolkhos","kolkhoz","kolkozy","komatik","konfyts","kongoni","konking","konning","koodoos","kookier","kooking","koolahs","koories","kopecks","kopiyka","koppies","koreros","korkirs","kororas","korowai","korunas","koshers","kotched","kotches","kotowed","kotower","kotwals","koulans","koumiss","koumyss","kouprey","koussos","kowhais","kowtows","kraaled","krakens","kranses","kranzes","kraters","kreesed","kreeses","kremlin","kreuzer","krimmer","krising","krubuts","kruller","krypses","krypsis","krypton","krytron","kuchcha","kuchens","kudliks","kudoses","kufiyah","kulturs","kumaras","kumaris","kumeras","kumites","kummels","kumquat","kumyses","kunjoos","kunkars","kunkurs","kunzite","kurbash","kurgans","kursaal","kurveys","kutches","kvasses","kvelled","kvetchy","kwachas","kwaitos","kwanzas","kyanise","kyanite","kyanize","kylices","kylikes","kynding","kyogens","kything","laagers","labarum","labeled","labeler","labella","labials","labiate","labises","lablabs","labored","laborer","labours","labrets","labrids","labroid","labrose","labrums","laciest","lacings","lacinia","lackers","lackeys","lacking","laconic","lacquer","lacquey","lactams","lactary","lactase","lactate","lacteal","lactean","lactone","lactose","lacunae","lacunal","lacunar","lacunas","lacunes","ladanum","ladders","laddery","laddies","laddish","ladened","ladette","ladhood","ladings","ladinos","ladlers","ladling","ladrone","ladrons","ladyboy","ladybug","ladycow","ladyfly","ladyish","ladyism","ladykin","laering","laetare","lagenas","lagends","lagered","laggard","laggens","laggers","lagging","laggins","lagoons","lagunas","lagunes","laicise","laicism","laicity","laicize","laiding","laigher","laikers","laiking","laipsed","laipses","lairage","lairdly","lairier","lairing","lairise","lairize","laisses","laithly","laities","lakebed","lakelet","lakiest","lakings","lalangs","laldies","lalique","lalland","lallans","lalling","lambada","lambast","lambdas","lambent","lambers","lambert","lambier","lambies","lambing","lambkin","lamboys","lamedhs","lamella","laments","lameter","lamiger","laminae","laminal","laminar","laminas","laminin","lamiter","lammers","lammies","lamming","lampads","lampern","lampers","lamping","lampion","lampoon","lamprey","lampuka","lampuki","lamster","lanated","lancers","lancets","lanched","lanches","lancing","landaus","landers","landing","landler","landman","landmen","laneway","langaha","langars","langers","langest","langley","langrel","langued","langues","languet","languid","languor","langurs","laniard","laniary","lanital","lankest","lankier","lankily","lanking","lanners","lanolin","lantana","lantern","lanugos","lanyard","laogais","lapdogs","lapeled","lapfuls","lapheld","lapides","lapilli","lapises","lappels","lappers","lappets","lappies","lapping","lapsang","lapsers","lapsing","laptops","laptray","lapwing","lapwork","larceny","larchen","larches","larders","lardier","larding","lardons","lardoon","largely","largens","largess","largest","largish","lariats","larkers","larkier","larking","larkish","larmier","larneys","larnier","larning","larrups","larvate","lasagna","lasagne","lascars","lashers","lashing","lashins","lashkar","lasings","laskets","lasques","lassies","lassock","lassoed","lassoer","lassoes","lastage","lasters","lasting","latakia","latched","latches","latchet","lateens","latence","latency","latened","latents","laterad","lateral","latests","latexes","lathees","lathers","lathery","lathier","lathing","latices","latigos","latilla","latinas","latinos","latitat","latosol","latrant","latrias","latrine","latrons","lattens","lattice","lattins","lauders","lauding","laughed","laugher","launced","launces","launder","laundry","laurels","lauryls","lauwine","lavabos","lavages","laveers","lavolta","lavolts","lavrock","lawbook","lawines","lawings","lawland","lawless","lawlike","lawnier","lawsuit","lawyers","laxator","laxisms","laxists","laxness","layaway","layback","laydeez","layered","layette","layings","laylock","layoffs","layouts","layover","laytime","lazaret","laziest","lazoing","lazulis","lazying","lazyish","leached","leacher","leaches","leadens","leaders","leadier","leading","leadman","leadmen","leadoff","leafage","leafbud","leafery","leafier","leafing","leaflet","leagued","leaguer","leagues","leakage","leakers","leakier","leakily","leaking","lealest","leaming","leaners","leanest","leaning","leapers","leaping","learier","learing","learned","learner","leasers","leashed","leashes","leasing","leasowe","leasows","leasure","leather","leavens","leavers","leavier","leaving","lebbeks","leccies","lechaim","lechers","lechery","leching","lechwes","lectern","lectins","lection","lectors","lecture","lecturn","lecythi","leddens","ledgers","ledgier","leeched","leechee","leeches","leeping","leerier","leerily","leering","leesing","leeward","leeways","leftest","lefties","leftish","leftism","leftist","legally","legated","legatee","legates","legator","legatos","legends","leggers","leggier","legging","leggins","leggism","leghorn","legible","legibly","legions","legists","legitim","leglans","leglens","legless","leglets","leglike","leglins","legongs","legroom","leguaan","legumes","legumin","legwear","legwork","lehaims","lehayim","leidger","leigers","leipoas","leiring","leisher","leisler","leister","leisure","lekking","lekvars","lekythi","lemmata","lemming","lemoned","lempira","lemures","lenders","lending","lengest","lenging","lengths","lengthy","lenient","lenited","lenites","lensing","lensman","lensmen","lentigo","lentils","lentisk","lentoid","lentors","lentous","lenvoys","leonine","leopard","leotard","leporid","lepping","leprose","leprosy","leprous","leptins","leptome","leptons","lequear","lernean","lesbian","lesions","lessees","lessens","lessons","lessors","lesting","letched","letches","letdown","lethals","lethean","lethees","lethied","lettern","letters","letting","lettres","lettuce","leuchen","leucine","leucins","leucite","leucoma","leughen","leukoma","leukons","levants","levator","leveled","leveler","levelly","levered","leveret","leviers","levites","levitic","levulin","levying","lewdest","lewdsby","lewises","lewisia","lexemes","lexemic","lexical","lexicon","lexises","lezzies","liaised","liaises","liaison","lianoid","liatris","libated","libates","libbard","libbers","libbing","libeled","libelee","libeler","liberal","liberos","liberty","libidos","libkens","liblabs","library","librate","licence","license","licente","lichees","lichens","lichted","lichter","lichtly","lichway","licitly","lickers","licking","lictors","lidding","lidgers","lidless","liefest","liegers","liernes","lievest","lifeful","lifeway","liftboy","lifters","lifting","liftman","liftmen","liftoff","ligands","ligases","ligated","ligates","liggers","ligging","lighted","lighten","lighter","lightly","lignage","lignans","lignify","lignins","lignite","lignose","lignums","ligroin","ligulae","ligular","ligulas","ligules","ligures","likable","likened","likings","lilling","lilting","limacel","limaces","limacon","limails","limbate","limbeck","limbecs","limbers","limbier","limbing","limbous","limeade","limelit","limepit","limiest","liminal","limings","limited","limiter","limites","limmers","limners","limning","limoses","limosis","limpers","limpest","limpets","limping","limpkin","limpsey","limulus","linable","linages","linalol","linches","linchet","linctus","lindane","lindens","lindies","lineage","lineate","linecut","lineman","linemen","lineups","lingams","lingcod","lingels","lingers","lingier","lingles","lingoes","lingots","linguae","lingual","linguas","lingula","linhays","liniest","linings","linkage","linkboy","linkers","linking","linkman","linkmen","linkups","linnets","linneys","linnies","linning","linocut","linsang","linseed","linseys","lintels","linters","lintier","linties","linting","lintols","linuron","linuxes","lioncel","lionels","lioness","lionets","lionise","lionism","lionize","lipases","lipemia","lipides","lipidic","lipless","liplike","lipoids","lipomas","lippens","lippers","lippier","lippies","lipping","lipread","lipuria","liquate","liquefy","liqueur","liquids","liquify","liquors","liriope","lirking","lisente","lispers","lisping","lispund","lissome","listees","listels","listens","listers","listeth","listful","listing","litchis","literal","lithate","lithely","lithest","lithias","lithify","lithing","lithite","lithium","lithoed","lithoid","lithops","litoral","litotes","litotic","litters","littery","littler","littles","littlie","littlin","liturgy","livable","livedos","livelod","livened","livener","livered","liveyer","livider","lividly","liviers","livings","livyers","lixivia","lizards","lizzies","llanero","loaches","loadens","loaders","loading","loafers","loafing","loamier","loaming","loaners","loaning","loathed","loather","loathes","loathly","loaving","lobated","lobbers","lobbied","lobbies","lobbing","lobbyer","lobefin","lobelet","lobelia","lobings","lobiped","lobolas","lobolos","lobster","lobular","lobules","lobulus","lobworm","locales","locally","located","locater","locates","locator","lochans","lochial","lockage","lockbox","lockers","lockets","lockful","locking","lockjaw","lockman","lockmen","locknut","lockout","lockram","lockset","lockups","locoing","locoism","locoman","locomen","locular","loculed","locules","loculus","locusta","locusts","lodgers","lodging","loeries","loessal","loesses","lofters","loftier","loftily","lofting","logania","logbook","loggats","loggers","loggets","loggias","loggier","logging","loggish","logical","logiest","logions","logjams","logline","loglogs","logoffs","logouts","logroll","logways","logwood","loiding","loiters","lokshen","loligos","loliums","lollers","lollies","lolling","lollops","lollopy","lomeins","lomenta","loments","lompish","longans","longbow","longers","longest","longies","longing","longish","loobier","loobies","loobily","loofahs","loofful","lookers","looking","lookism","lookist","lookout","lookups","looming","looneys","loonier","loonies","loonily","looning","loopers","loopier","loopily","looping","loosely","loosens","loosest","loosies","loosing","looters","looting","loppers","loppier","loppies","lopping","loquats","lorchas","lording","lordkin","lordoma","lorette","lorgnon","loricae","lorimer","loriner","lorings","loriots","lorises","lorrell","lorries","losable","losings","loslyfs","lossier","lothest","lotions","lotoses","lotters","lottery","lotting","lotuses","loudens","loudest","loudish","lounded","lounder","lounged","lounger","lounges","louning","louping","lourier","louries","louring","lousers","lousier","lousily","lousing","louting","loutish","louvars","louvers","louvred","louvres","lovable","lovably","lovages","lovebug","lovered","loverly","lovings","lowball","lowborn","lowboys","lowbred","lowbrow","lowdown","lowered","lowings","lowland","lowlier","lowlife","lowlily","lownded","lowness","lowning","lowping","lowries","lowsest","lowsing","lowting","lowveld","loxygen","loyaler","loyally","loyalty","lozells","lozenge","lozengy","lubbard","lubbers","lubfish","lucarne","lucence","lucency","lucerne","lucerns","luchoth","lucider","lucidly","lucifer","lucigen","lucites","luckier","luckies","luckily","lucking","lucumas","lucumos","ludship","luetics","luffing","lugeing","luggage","luggers","luggies","lugging","lughole","lugings","lugsail","lugworm","lulibub","lullaby","lullers","lulling","lumbago","lumbang","lumbars","lumbers","lumenal","luminal","lumined","lumines","lummier","lumpens","lumpers","lumpier","lumpily","lumping","lumpish","lumpkin","lunated","lunates","lunatic","lunched","luncher","lunches","lunette","lungans","lungees","lungers","lungful","lungies","lunging","lungyis","luniest","lunkers","lunting","lunulae","lunular","lunules","lunyies","lupanar","lupines","lupulin","lupuses","lurched","lurcher","lurches","lurdane","lurdans","lurdens","lurexes","lurgies","lurider","luridly","lurkers","lurking","lurries","lushers","lushest","lushier","lushing","lusking","luskish","lusters","lustful","lustick","lustier","lustily","lusting","lustral","lustred","lustres","lustrum","lususes","luteins","luteous","lutfisk","luthern","luthier","lutings","lutists","lutites","luvvies","luxated","luxates","luzerns","lyceums","lychees","lychnis","lycopod","lyddite","lyingly","lymiter","lymphad","lynages","lyncean","lynched","lyncher","lynches","lynchet","lyophil","lyrated","lyrical","lyricon","lyrisms","lyrists","lysates","lysines","lysogen","maatjes","mabelas","macaber","macabre","macacos","macadam","macaque","macchia","macchie","maceral","machair","machans","machers","machete","machine","machree","machzor","mackled","mackles","macoyas","macrame","macrami","macrons","maculae","macular","maculas","maculed","macules","macumba","madafus","madamed","madames","madcaps","maddens","madders","maddest","madding","maddish","maddock","madeira","madison","madling","madness","madonna","madoqua","madrasa","madrona","madrone","madrono","madtoms","maduros","madwort","madzoon","maelids","maenads","maestri","maestro","maffias","maffick","maffled","mafflin","mafiosi","mafioso","maftirs","magalog","magenta","maggies","magging","maggots","maggoty","magians","magical","magilps","magisms","maglevs","magmata","magnate","magneto","magnets","magnify","magnons","magnums","magpies","magsman","magsmen","magueys","mahatma","mahewus","mahjong","mahmals","mahonia","mahouts","mahseer","mahsirs","mahuang","mahzors","maidans","maidens","maiding","maidish","maidism","maigres","maihems","mailbag","mailbox","mailcar","mailers","mailing","maillot","mailman","mailmen","mailvan","maimers","maiming","mainest","maining","mainors","mainour","maintop","maister","maistry","majagua","majesty","majorat","majored","majorly","makable","makeups","makings","makutus","malacca","malacia","malaise","malanga","malaria","malarky","malates","malaxed","malaxes","maleate","malefic","malgred","malgres","maliced","malices","malicho","maligns","malines","malisms","malison","malkins","mallams","mallard","mallees","mallets","malleus","malling","mallows","malmags","malmier","malmsey","malodor","malonic","maltase","malteds","malthas","maltier","malting","maltman","maltmen","maltols","maltose","malware","mamaguy","mamakau","mamboed","mamboes","mamelon","mameyes","mamilla","mamluks","mammals","mammary","mammate","mammati","mammees","mammers","mammets","mammeys","mammies","mammock","mammons","mammoth","mampara","mampoer","mamzers","manacle","managed","manager","manages","manakin","mananas","manatee","manatis","manawas","mancala","manches","manchet","mandala","mandate","mandioc","mandira","mandirs","mandola","mandoms","mandora","mandrel","mandril","maneged","maneges","mangaby","mangals","mangeao","mangels","mangers","mangier","mangily","manging","mangled","mangler","mangles","mangoes","mangold","manhole","manhood","manhunt","maniacs","manihoc","manihot","manikin","manilas","manilla","manille","manioca","maniocs","maniple","manitos","manitou","manitus","manjack","mankier","mankind","manless","manlier","manlike","manlily","manmade","mannans","manners","manning","mannish","mannite","mannose","manoaos","manpack","manreds","manrent","manrope","mansard","mansion","manteau","manteel","mantels","mantids","manties","mantled","mantles","mantlet","mantoes","mantram","mantrap","mantras","mantric","mantuas","manuals","manuary","manukas","manumea","manumit","manured","manurer","manures","manward","manwise","manyata","maormor","mapless","maplike","mappers","mappery","mapping","mappist","mapwise","maquila","marabis","marabou","maracas","maranta","mararis","marasca","marauds","marbled","marbler","marbles","marcato","marcels","marched","marchen","marcher","marches","marconi","mardied","mardier","mardies","maremma","maremme","marengo","margays","margent","margins","margosa","marimba","marinas","mariner","marines","marital","markers","markets","markhor","marking","markkaa","markkas","markman","markmen","markups","marlier","marline","marling","marlins","marlite","marmite","marmose","marmots","maroons","marplot","marquee","marques","marquis","marrams","marrano","marrels","marrers","married","marrier","marries","marring","marrons","marrows","marrowy","marrums","marsala","marshal","marshes","martels","martens","martext","martial","martian","marting","martini","martins","martlet","martyrs","martyry","marvels","marvers","marybud","masalas","mascara","mascled","mascles","mascons","mascots","masculy","mashers","mashier","mashies","mashing","mashlam","mashlim","mashlin","mashlum","mashman","mashmen","mashuas","mashups","masjids","maskegs","maskers","masking","maslins","masoned","masonic","masonry","masquer","masques","massage","masseur","massier","massifs","massing","massive","mastaba","masters","mastery","mastful","mastich","mastics","mastier","mastiff","masting","mastoid","masulas","matador","matched","matcher","matches","matchet","matchup","matelot","maticos","matiest","matilda","matinal","matinee","matings","matipos","matless","matlows","matokes","matooke","matrass","matrice","matrics","matrons","matross","matsahs","matsuri","matters","mattery","matties","mattify","matting","mattins","mattock","mattoid","matured","maturer","matures","matweed","matzahs","matzohs","matzoon","matzoth","maubies","maudlin","maugred","maugres","maulers","maulgre","mauling","maulvis","maumets","maunded","maunder","mauther","mauvais","mauvein","mauvest","mauvine","mauvins","mavises","mawkier","mawkins","mawkish","mawmets","mawseed","mawther","maxilla","maximal","maximin","maximum","maximus","maxixes","maxwell","maybird","maybush","maydays","mayhems","mayings","mayoral","maypole","maypops","mayster","mayvins","mayweed","mazards","mazedly","mazeful","mazhbis","maziest","mazouts","mazumas","mazurka","mazzard","meacock","meadows","meadowy","meagrer","meagres","mealers","mealier","mealies","mealing","meander","meaners","meanest","meanies","meaning","mearing","measing","measled","measles","measure","meataxe","meathes","meatier","meatily","meatman","meatmen","meazels","meboses","meconic","meconin","medacca","medakas","medaled","medalet","meddled","meddler","meddles","medevac","mediacy","medials","medians","mediant","mediate","medical","medicks","medicos","medigap","medinas","mediums","medivac","medlars","medleys","medling","medrese","medulla","medusae","medusal","medusan","medusas","meekens","meekest","meemies","meercat","meering","meerkat","meeters","meetest","meeting","megabar","megabit","megafog","megahit","megapod","megarad","megaron","megasse","megaton","megilla","megilph","megilps","megohms","megrims","mehndis","meineys","meinies","meining","meioses","meiosis","meiotic","meishis","meister","melamed","melange","melanic","melanin","melanos","melders","melding","melenas","melicks","melilot","melisma","mellays","melling","mellite","mellows","mellowy","melodia","melodic","meloids","meltage","meltemi","melters","meltier","melting","meltith","meltons","members","membral","memento","memoirs","menaced","menacer","menaces","menaged","menages","menazon","menders","mendigo","mending","meneers","menfolk","menging","menhirs","menials","menisci","menorah","menschy","menshed","menshen","menshes","mensing","mensual","mentees","menthol","mention","mentors","menudos","menyies","meouing","meowing","meranti","mercats","mercers","mercery","merches","merchet","mercies","mercify","mercury","merells","merfolk","mergees","mergers","merging","merings","merinos","merises","merisis","merisms","merited","merkins","merling","merlins","merlons","merlots","mermaid","meromes","meronym","meropia","meropic","merrier","merries","merrily","mersion","mesails","mesally","mesarch","mescals","mesclum","mesclun","meseems","meseled","mesetas","meshier","meshing","meshuga","mesonic","mesquin","mesquit","message","messans","messiah","messias","messier","messily","messing","messman","messmen","mestees","mesters","mesteso","mestino","mestiza","mestizo","mestome","mestoms","metages","metaled","metally","metamer","metatag","metates","metayer","metazoa","metcast","meteors","metepas","metered","methane","methink","methods","methoxy","methyls","metical","metiers","metisse","metonym","metopae","metopes","metopic","metopon","metrics","metrify","metring","metrist","mettled","mettles","metumps","meusing","mevrous","mewlers","mewling","mewsing","mezails","mezcals","mezquit","mezuzah","mezuzas","mezuzot","mgangas","miaoued","miaowed","miasmal","miasmas","miasmic","miauled","micated","micates","micella","micelle","micells","michers","miching","mickeys","mickies","mickler","mickles","micrify","microbe","microhm","microns","miction","midairs","midcult","middays","middens","middest","middies","middled","middler","middles","midgets","midgier","midgies","midguts","midiron","midland","midlegs","midlife","midline","midlist","midmost","midnoon","midrash","midribs","midriff","midship","midsize","midsole","midterm","midtown","midways","midweek","midwife","midwive","midyear","mielies","mieving","miffier","miffily","miffing","miggles","mightst","mignons","migrant","migrate","mihiing","mihrabs","mikados","mikrons","mikvahs","mikvehs","mikvoth","miladis","milages","milchig","milchik","mildens","mildest","mildews","mildewy","milding","mileage","milfoil","miliary","milieus","milieux","militar","militia","milkers","milkier","milkily","milking","milkman","milkmen","milksop","millage","milldam","millers","millets","millier","millies","millime","milline","milling","million","millrun","milnebs","milords","milreis","milseys","milters","miltier","milting","miltzes","milvine","mimbars","mimeoed","mimeses","mimesis","mimetic","mimical","mimicry","mimmest","mimmick","mimosas","mimsier","mimulus","minable","minaret","minbars","mincers","minceur","mincier","mincing","minders","mindful","minding","mindset","mineola","mineral","minette","minever","mingers","mingier","minging","mingled","mingler","mingles","miniate","minibar","minibus","minicab","minicam","minicar","minicom","miniest","minikin","minilab","minimal","minimax","minimum","minimus","minings","minions","miniski","miniums","minivan","miniver","minivet","minnick","minnies","minnock","minnows","minorca","minored","minster","mintage","minters","mintier","minting","minuend","minuets","minuses","minuted","minuter","minutes","minutia","minxish","minyans","miocene","miombos","miotics","mirable","miracle","mirador","mirages","mirbane","mirexes","miriest","mirific","miritis","mirkest","mirkier","mirkily","mirlier","mirrors","mirving","misacts","misadds","misaims","misally","misaver","misbias","misbill","misbind","misborn","miscall","miscast","miscite","miscode","miscoin","miscook","miscopy","miscued","miscues","miscuts","misdate","misdeal","misdeed","misdeem","misdial","misdiet","misdoer","misdoes","misdone","misdraw","misdrew","misease","miseats","misedit","miseres","miserly","misfall","misfare","misfeed","misfell","misfile","misfire","misfits","misform","misgave","misgive","misgoes","misgone","misgrew","misgrow","mishaps","mishapt","mishear","mishits","mishmee","mishmis","misjoin","miskals","miskeep","miskens","miskent","miskept","miskeys","miskick","misknew","misknow","mislaid","mislain","mislays","mislead","mislies","mislike","mislive","misluck","mismade","mismake","mismark","mismate","mismeet","mismove","misname","mispage","mispart","mispens","misplan","misplay","mispled","misrate","misread","misrely","misrule","missaid","missals","missays","misseat","misseem","misseen","missees","missels","missend","missent","missets","misshod","missier","missies","missile","missing","mission","missish","missive","missort","missout","misstep","misstop","missuit","mistake","mistals","mistbow","mistell","mistend","misterm","misters","mistery","misteuk","mistful","mistico","mistier","mistily","mistime","misting","mistled","mistles","mistold","mistook","mistral","mistune","mistype","misused","misuser","misuses","misween","miswend","miswent","misword","miswrit","misyoke","mitched","mitches","mitered","miterer","mithers","mitiest","mitises","mitogen","mitoses","mitosis","mitotic","mitring","mitsvah","mittens","mitumba","mitzvah","mixable","mixdown","mixedly","mixible","mixiest","mixtion","mixture","mizmaze","mizunas","mizzens","mizzled","mizzles","mnemons","moaners","moanful","moaning","moating","mobbers","mobbies","mobbing","mobbish","mobbism","mobbled","mobbles","mobcaps","mobiles","mobling","moblogs","mobsman","mobsmen","mobster","moccies","mochell","mochier","mochila","mockado","mockage","mockers","mockery","mocking","mockney","mockups","mococks","mocucks","modally","modeled","modeler","modelli","modello","modemed","modenas","moderne","moderns","modesty","modging","modicum","modioli","modiste","modists","modular","modules","modulus","moellon","moering","mofette","moffies","moggans","moggies","mogging","moghuls","moguled","mohairs","mohalim","mohawks","mohelim","mohican","moiders","moidore","moilers","moiling","moineau","moisers","moisted","moisten","moister","moistly","moither","mojarra","mokoros","mokshas","molasse","molders","moldier","molding","molerat","molests","molimen","molines","molinet","mollahs","mollies","mollify","mollusc","mollusk","molochs","molossi","molters","molting","momenta","momento","moments","momisms","mommets","mommies","momsers","momuses","momzers","monacid","monadal","monades","monadic","monarch","monarda","monases","monauls","monaxon","mondain","mondial","monemes","moneran","moneron","moneths","moneyed","moneyer","mongers","mongery","mongoes","mongols","mongrel","monials","moniker","monilia","monisms","monists","monitor","monkery","monkeys","monkish","monocle","monocot","monodic","monoecy","monofil","monolog","monomer","mononym","monopod","monoses","monosis","monoski","monsoon","monster","montage","montane","montant","montems","montero","monthly","monties","montres","monture","monuron","mooched","moocher","mooches","moodied","moodier","moodies","moodily","mooktar","moolahs","mooleys","moolies","mooling","mooloos","moolvie","moolvis","moonbow","mooners","mooneye","moonier","moonies","moonily","mooning","moonish","moonlet","moonlit","moonset","mooping","moorage","moorhen","moorier","moorill","mooring","moorish","moorlog","moorman","moormen","moorvas","mooters","mootest","mooting","mootman","mootmen","mooving","mopanes","mopanis","mophead","mopiest","mopokes","moppers","moppets","moppier","mopping","mopsies","mopuses","moraine","morales","moralls","morally","morassy","morceau","morchas","mordant","mordent","moreens","moreish","morelle","morello","morendo","morgans","morgays","morgens","morgues","moriche","morions","morisco","morkins","morling","mormaor","mornays","morning","morocco","moronic","moroser","morphed","morphew","morphia","morphic","morphin","morphos","morrell","morrhua","morrice","morrion","morrows","morsels","morsure","mortals","mortars","mortary","mortice","mortify","mortise","morulae","morular","morulas","morwong","mosaics","moselle","moseyed","moshers","moshing","mosques","mossers","mossier","mossies","mossing","mostest","motetts","mothers","mothery","mothier","motiest","motific","motiles","motions","motived","motives","motivic","motleys","motlier","motmots","motored","motoric","motsers","mottier","motties","mottled","mottler","mottles","mottoed","mottoes","motucas","mouched","moucher","mouches","mouflon","mouille","moujiks","moulage","moulded","moulder","moulins","moulted","moulten","moulter","mounded","mounted","mounter","mouping","mourned","mourner","mousaka","mousers","mousery","mousier","mousies","mousily","mousing","mousled","mousles","mousmee","mousmes","moussed","mousses","mousted","moutans","mouters","mouthed","mouther","moutons","movable","movably","moviola","mowburn","mowdies","mowings","moyling","mozetta","mozette","mozzies","mozzles","mridang","mucates","muchell","muchels","mucigen","muckers","muckier","muckily","mucking","muckles","muclucs","mucoids","mucosae","mucosal","mucosas","mucuses","mudbath","mudbugs","mudcaps","mudcats","mudders","muddied","muddier","muddies","muddily","mudding","muddled","muddler","muddles","mudejar","mudeyes","mudfish","mudflap","mudflat","mudflow","mudgers","mudging","mudhens","mudhole","mudhook","mudiria","mudlark","mudpack","mudrock","mudroom","mudscow","mudsill","mudwort","mueddin","mueslis","muezzin","muffing","muffins","muffish","muffled","muffler","muffles","muflons","mugfuls","muggars","muggees","muggers","muggier","muggily","mugging","muggins","muggish","muggurs","mughals","mugshot","mugwort","mugwump","muhlies","muisted","mukhtar","mukluks","muktuks","mulatta","mulatto","mulched","mulches","mulcted","mulesed","muleses","muletas","mullahs","mullein","mullens","mullers","mullets","mulleys","mulling","mullion","mullite","mullock","mulmull","mulmuls","mulshed","mulshes","multums","multure","mumbled","mumbler","mumbles","mummers","mummery","mummias","mummied","mummies","mummify","mumming","mummock","mumpers","mumping","mumpish","mumsier","munched","muncher","munches","mundane","mundics","mundify","munging","mungoes","munited","munites","munnion","munshis","munster","munters","munting","muntins","muntjac","muntjak","muntrie","muonium","muppets","muraena","murages","muraled","murders","mureins","murenas","murexes","murgeon","muriate","murices","murines","murkest","murkier","murkily","murkish","murlain","murlans","murlier","murling","murlins","murmurs","murragh","murrain","murrams","murrays","murrees","murrens","murreys","murrhas","murries","murrine","murrins","murrion","murther","musangs","muscats","muscids","muscled","muscles","muscoid","muscone","muscose","museful","musette","museums","mushers","mushier","mushily","mushing","musical","musicks","musimon","musings","musjids","muskegs","muskets","muskier","muskies","muskily","musking","muskits","muskles","muskone","muskrat","muslins","musmons","muspike","musrols","mussels","mussier","mussily","mussing","mustang","mustard","mustees","musters","mustier","mustily","musting","mutable","mutably","mutagen","mutanda","mutants","mutases","mutated","mutates","mutched","mutches","mutedly","mutined","mutines","mutisms","mutters","muttons","muttony","mutuals","mutucas","mutuels","mutular","mutules","mutuums","muumuus","muzhiks","muzjiks","muzzier","muzzily","muzzing","muzzled","muzzler","muzzles","mwalimu","myalgia","myalgic","myalism","myalist","myceles","mycelia","mycella","mycetes","mycoses","mycosis","mycotic","myeline","myelins","myeloid","myeloma","myelons","mygales","myiases","myiasis","mylodon","mynheer","myogens","myogram","myology","myomata","myopias","myopics","myopies","myopses","myosins","myosote","myotics","myotome","myotube","myrbane","myriads","myricas","myringa","myrrhic","myrrhol","myrtles","mysosts","mystery","mystics","mystify","mythier","mythise","mythism","mythist","mythize","myxomas","mzungus","naartje","nabbers","nabbing","nacarat","nacelle","nackets","nacrite","nacrous","nadiral","naebody","naevoid","naffest","naffing","naganas","nagapie","nagaris","naggers","naggier","nagging","nagmaal","naiades","naifest","nailers","nailery","nailing","nailset","naively","naivest","naivete","naivety","naivist","nakeder","nakedly","nallahs","namable","namaste","nametag","namings","nancies","nandina","nandine","nandins","nandoos","nanisms","nankeen","nankins","nannied","nannies","nanobes","nanodot","nanooks","napalms","naphtha","naphtol","napkins","napless","napooed","nappers","nappier","nappies","napping","naprons","narases","narceen","narcein","narcism","narcist","narcoma","narcose","nardine","narding","nardoos","nargile","nargily","narkier","narking","narrate","narrows","narthex","nartjie","narwals","narwhal","nasally","nasards","nascent","nashgab","nasions","nastier","nasties","nastily","nasutes","natches","nathemo","nations","natives","natrium","natrons","natters","nattery","nattier","nattily","naturae","natural","natured","natures","nauches","naughts","naughty","nauplii","nauseas","nautics","nautili","navaids","navally","navarch","navarho","navarin","navette","navvied","navvies","naysaid","naysays","nayward","nayword","neaffes","nealing","neaping","nearest","nearing","neatens","neatest","neatnik","nebbich","nebbing","nebbish","nebbuks","nebecks","nebulae","nebular","nebulas","nebules","neckers","necking","necklet","necktie","necrose","nectars","nectary","neddier","neddies","neddish","nedette","needers","needful","needier","needily","needing","needled","needler","needles","neesing","neezing","negated","negater","negates","negaton","negator","neglect","neglige","negress","negroes","negroid","negroni","neguses","neighed","neineis","neither","nektons","nellies","nelsons","nelumbo","nematic","nemeses","nemesia","nemesis","nemning","nemoral","neocons","neogene","neolith","neology","neonate","neoteny","neotype","nepetas","nephews","nephric","nephron","nepotic","nerdier","nerdish","nereids","nerines","nerites","neritic","nerolis","nervate","nervers","nervier","nervily","nervine","nerving","nervous","nervule","nervure","neshest","nesters","nestful","nesting","nestled","nestler","nestles","nestors","netball","netfuls","nethead","netizen","netless","netlike","netsuke","netters","nettier","netties","netting","nettled","nettler","nettles","network","neurine","neurism","neurite","neuroid","neuroma","neurone","neurons","neurula","neustic","neuston","neuters","neutral","neutron","newbies","newborn","newcome","newells","newmown","newness","newsboy","newsier","newsies","newsing","newsman","newsmen","newtons","nexuses","ngarara","nhandus","niacins","nibbing","nibbled","nibbler","nibbles","niblick","niblike","niceish","nichers","niching","nickars","nickels","nickers","nicking","nickled","nickles","nickums","nicoise","nicotin","nictate","nidated","nidates","niddick","nidgets","nidings","niduses","niellos","niffers","niffier","niffing","niftier","nifties","niftily","nigella","niggard","niggers","niggery","niggled","niggler","niggles","nighest","nighing","nighted","nightie","nightly","nigiris","nigrify","nihonga","nilgais","nilgaus","nilghai","nilghau","nilling","nimbler","nimiety","nimious","nimmers","nimming","nimonic","nimrods","nincoms","nincums","ninepin","ninnies","ninthly","niobate","niobite","niobium","niobous","nippers","nippier","nippily","nipping","nippled","nipples","nipters","nirlier","nirling","nirvana","nisguls","nitchie","niterie","nithers","nithing","nitinol","nitpick","nitrate","nitride","nitrids","nitrify","nitrile","nitrils","nitrite","nitroso","nitrous","nitryls","nittier","nitwits","niveous","nobbier","nobbily","nobbled","nobbler","nobbles","noblest","nocakes","nocents","nochels","nockets","nocking","noctuas","noctuid","noctule","nocturn","nocuous","nodally","nodated","nodders","noddier","noddies","nodding","noddled","noddles","nodical","nodular","noduled","nodules","nogging","noggins","nointed","nointer","noirish","noisier","noisily","noising","noisome","nomades","nomadic","nomarch","nombles","nombril","nominal","nominee","nomisms","nonacid","nonaged","nonages","nonagon","nonanes","nonarts","nonbank","nonbody","nonbook","noncash","noncola","noncoms","noncore","nondrip","nondrug","nonegos","nonette","nonetti","nonetto","nonfact","nonfans","nonfarm","nonfood","nonfuel","nongame","nongays","nonheme","nonhero","nonhome","noniron","nonjury","nonlife","nonmeat","nonnews","nonnies","nonoily","nonoral","nonpaid","nonpast","nonpeak","nonplay","nonplus","nonpoor","nonpros","nonself","nonsked","nonskid","nonslip","nonstop","nonsuch","nonsuit","nonuple","nonuser","nonuses","nonwage","nonwars","nonwool","nonword","nonwork","nonzero","noodged","noodges","noodled","noodles","noogies","nookier","nookies","noology","noonday","nooners","nooning","noosers","noosing","nopales","noplace","norimon","norites","noritic","norland","normals","normans","norsels","nortena","norteno","northed","norther","norward","noseans","nosebag","nosegay","noshers","noshery","noshing","nosiest","nosings","nosodes","nostocs","nostril","nostrum","notable","notably","notaeum","notanda","notated","notates","notched","notchel","notcher","notches","notedly","notelet","notepad","nothing","noticed","noticer","notices","notions","notitia","nougats","noughts","noumena","nounier","nourice","nourish","noursle","nousell","nousled","nousles","nouveau","novalia","novated","novella","novelle","novelly","novelty","novenae","novenas","novices","nowhere","nowness","nowtier","noxious","noyades","noyance","noyeses","noysome","nozzers","nozzles","nuanced","nuances","nubbier","nubbing","nubbins","nubbled","nubbles","nubucks","nucelli","nuchals","nucleal","nuclear","nucleic","nuclein","nucleon","nucleus","nuclide","nucules","nuddies","nudgers","nudging","nudisms","nudists","nudnick","nudniks","nudzhed","nudzhes","nuffins","nuggars","nuggets","nuggety","nullahs","nullify","nulling","nullity","numbats","numbers","numbest","numbing","numbles","numdahs","numeral","numeric","nummary","numnahs","nunatak","nuncios","nuncles","nundine","nunhood","nunlike","nunnery","nunnish","nunship","nuptial","nuraghe","nuraghi","nurdier","nurdish","nurdled","nurdles","nurhags","nurling","nursers","nursery","nursing","nursled","nursles","nurture","nutated","nutates","nutcase","nutgall","nutlets","nutlike","nutmeal","nutmeat","nutmegs","nutpick","nutrias","nutsier","nutters","nuttery","nuttier","nuttily","nutting","nutwood","nuzzers","nuzzled","nuzzler","nuzzles","nyaffed","nyanzas","nybbles","nylghai","nylghau","nymphae","nymphal","nymphet","nymphic","nymphly","nymphos","oakiest","oakleaf","oaklike","oakling","oakmoss","oarages","oarfish","oariest","oarless","oarlike","oarlock","oarsman","oarsmen","oarweed","oatcake","oatlike","oatmeal","obconic","obdured","obdures","obeahed","obeches","obeisms","obelias","obelion","obelise","obelisk","obelism","obelize","obentos","obesely","obesest","obesity","obeyers","obeying","obiisms","obitual","objects","objured","objures","oblasti","oblasts","oblates","obliged","obligee","obliger","obliges","obligor","oblique","oblongs","obloquy","oboists","obolary","obovate","obovoid","obscene","obscure","obsequy","observe","obsigns","obtains","obtends","obtests","obtrude","obtunds","obtuser","obverse","obverts","obviate","obvious","ocarina","occiput","occlude","occults","oceanic","oceanid","ocellar","ocellus","oceloid","ocelots","ochered","ochreae","ochring","ochroid","ochrous","ocicats","ocreate","octadic","octagon","octanes","octanol","octants","octapla","octaval","octaves","octavos","octette","octetts","octofid","octopod","octopus","octrois","octuors","octuple","octuply","oculars","oculate","oculist","odalisk","odaller","oddball","oddment","oddness","oddsman","oddsmen","odonate","odontic","odorant","odorate","odorful","odorise","odorize","odorous","odoured","odylism","odyssey","odzooks","oecists","oedemas","oedipal","oenomel","oersted","oestral","oestrin","oestrum","oestrus","oeuvres","offbeat","offcast","offcuts","offence","offends","offense","offered","offeree","offerer","offeror","offhand","officer","offices","offings","offline","offload","offpeak","offputs","offramp","offscum","offsets","offside","offtake","oftener","ogdoads","oghamic","oglings","ogreish","ogreism","ogrisms","ohmages","oidioid","oikists","oilbird","oilcamp","oilcans","oilcups","oilhole","oiliest","oillets","oilnuts","oilseed","oilskin","oilways","oinking","oinomel","ointing","okaying","okimono","oldened","oldness","oldster","oldwife","olearia","oleates","olefine","olefins","oleines","olestra","olfacts","olicook","oligist","olingos","olitory","olivary","olivers","olivets","olivine","ollamhs","ologies","ologist","ologoan","oloroso","olycook","olykoek","omelets","omening","omental","omentum","omertas","omicron","omikron","ominous","omitted","omitter","ommatea","omneity","omniana","omnibus","omniety","omnific","omniums","omphali","onagers","onanism","onanist","onbeats","onboard","oncogen","oncomes","oncosts","ondatra","ondines","ondings","onefold","oneiric","oneness","onerier","onerous","oneself","onetime","oneyers","oneyres","onfalls","onflows","ongoing","onioned","onliest","onliner","onloads","onshore","onsides","onstage","onstead","onwards","onychas","onychia","onymous","oocysts","oocytes","oodlins","oofiest","ooftish","oogonia","oolakan","oolites","ooliths","oolitic","oologic","oolongs","oomiack","oomiacs","oomiaks","oompahs","oophyte","ooralis","oorials","ooriest","oosiest","oosperm","oospore","ootheca","ooziest","opacify","opacity","opacous","opaline","opaqued","opaquer","opaques","opcodes","openers","openest","opening","operand","operant","operate","operons","operose","opgefok","ophites","ophitic","ophiura","opiated","opiates","opining","opinion","opioids","oporice","opossum","oppidan","opposed","opposer","opposes","oppress","oppugns","opsonic","opsonin","optants","optical","optimal","optimes","optimum","options","opulent","opuntia","opuscle","oquassa","oraches","oracies","oracled","oracles","oralism","oralist","orality","oranger","oranges","orangey","orarian","orarion","orarium","orating","oration","orators","oratory","oratrix","orbiest","orbital","orbitas","orbited","orbiter","orbless","orceins","orchard","orchats","orchels","orchids","orchils","orcines","orcinol","ordains","ordeals","ordered","orderer","orderly","ordinal","ordinar","ordinee","ordines","ordures","oreades","orectic","oregano","oreides","oreweed","orfrays","organdy","organic","organon","organum","organza","orgasms","orgeats","orgiast","orgones","oriency","orients","orifice","origami","origane","origans","origins","orioles","orishas","orisons","orleans","ormolus","ornater","ornises","orogens","orogeny","oroides","orology","oropesa","orotund","orphans","orphism","orphrey","orpines","orraman","orramen","orrices","orrises","orthian","orthros","ortolan","oscheal","oscines","oscular","oscules","osculum","osetras","osiered","osmates","osmatic","osmiate","osmious","osmiums","osmolal","osmolar","osmoles","osmosed","osmoses","osmosis","osmotic","osmunda","osmunds","ospreys","osseins","osselet","osseous","osseter","ossetra","ossicle","ossific","ossuary","ostents","osteoid","osteoma","ostiary","ostiate","ostiole","ostlers","ostmark","ostoses","ostosis","ostraca","ostraka","ostrich","otalgia","otalgic","otaries","otarine","otocyst","otolith","otology","ottavas","ottered","ottoman","ouabain","ouakari","ouching","oughted","ouglied","ouglies","ouguiya","oulakan","ouldest","oulongs","ouralis","ourangs","ouraris","ourebis","ouriest","ourself","ousters","ousting","oustiti","outacts","outadds","outages","outasks","outback","outbake","outbark","outbars","outbawl","outbeam","outbegs","outbids","outbrag","outbred","outbulk","outburn","outbuys","outcall","outcast","outchid","outcity","outcome","outcook","outcrop","outcrow","outdare","outdate","outdoer","outdoes","outdone","outdoor","outdrag","outdraw","outdrew","outdrop","outduel","outdure","outearn","outeats","outecho","outedge","outface","outfall","outfast","outfawn","outfeel","outfelt","outfind","outfire","outfish","outfits","outflew","outflow","outfool","outfoot","outgain","outgate","outgave","outgaze","outgive","outglow","outgnaw","outgoer","outgoes","outgone","outgrew","outgrin","outgrow","outguns","outgush","outhaul","outhear","outhire","outhits","outhowl","outhunt","outhyre","outings","outjest","outjets","outjinx","outjump","outjuts","outkeep","outkept","outkick","outkill","outkiss","outlaid","outlain","outland","outlash","outlast","outlaws","outlays","outlead","outleap","outlers","outlets","outlied","outlier","outlies","outline","outlive","outlook","outlove","outmans","outmode","outmost","outmove","outname","outness","outpace","outpart","outpass","outpeep","outpeer","outpity","outplan","outplay","outplod","outplot","outpoll","outport","outpost","outpour","outpray","outpull","outpush","outputs","outrace","outrage","outrang","outrank","outrate","outrave","outread","outreds","outride","outrigs","outring","outroar","outrock","outrode","outroll","outroop","outroot","outrope","outrows","outrung","outruns","outrush","outsaid","outsail","outsang","outsays","outseen","outsees","outsell","outsert","outsets","outshot","outside","outsing","outsins","outsits","outsize","outsoar","outsold","outsole","outspan","outsped","outstay","outstep","outsulk","outsums","outsung","outswam","outswim","outswum","outtake","outtalk","outtask","outtell","outtold","outtook","outtops","outtrot","outturn","outvied","outvies","outvote","outwait","outwalk","outward","outwars","outwash","outwear","outweed","outweep","outwell","outwent","outwept","outwick","outwile","outwill","outwind","outwing","outwins","outwish","outwith","outwits","outwore","outwork","outworn","outwrit","outyell","outyelp","ouverte","ouvrage","ouvrier","ovality","ovarial","ovarian","ovaries","ovately","ovating","ovation","ovators","ovening","overact","overage","overall","overapt","overarm","overate","overawe","overbed","overbet","overbid","overbig","overbuy","overcoy","overcut","overdid","overdog","overdry","overdub","overdue","overdye","overeat","overegg","overeye","overfar","overfat","overfed","overfit","overfly","overget","overgot","overhit","overhot","overing","overjoy","overlap","overlax","overlay","overlet","overlie","overlit","overman","overmen","overmix","overnet","overnew","overpay","overply","overran","overred","overren","overrun","oversad","oversaw","oversea","oversee","overset","oversew","oversow","oversup","overtax","overtip","overtly","overtop","overuse","overwet","ovicide","oviduct","oviform","ovipara","ovisacs","ovoidal","ovonics","ovulary","ovulate","owliest","owllike","ownable","owrelay","owriest","oxalate","oxazine","oxblood","oxcarts","oxfords","oxgangs","oxgates","oxheads","oxheart","oxhides","oxidant","oxidase","oxidate","oxidise","oxidize","oxlands","oxonium","oxslips","oxtails","oxtered","oxyacid","oxygens","oxymels","oxymora","oxyntic","oxyphil","oxysalt","oxysome","oxytone","oyesses","oysters","ozaenas","ozalids","ozonate","ozonide","ozonise","ozonize","ozonous","pablums","pabular","pabulum","pacable","paceway","pachaks","pachisi","pachuco","paciest","pacific","package","packers","packets","packing","packman","packmen","packwax","packway","paction","padangs","padauks","padders","paddies","padding","paddled","paddler","paddles","paddock","padella","padlock","padnags","padouks","padrone","padroni","padsaws","padshah","paellas","paenula","paeonic","paesani","paesano","paesans","pageant","pageboy","pageful","paginal","pagings","pagodas","pagurid","pahlavi","paidles","paigles","paiking","pailful","paillon","painful","painims","paining","painted","painter","paiocke","paiocks","pairest","pairial","pairing","paisana","paisano","paisans","paisley","pajamas","pajocke","pajocks","pakahis","pakapoo","pakehas","pakfong","pakihis","pakokos","pakoras","paktong","palabra","palaced","palaces","paladin","palagis","palamae","palapas","palases","palatal","palated","palates","palaver","palazzi","palazzo","paleate","paletot","palette","palfrey","paliest","palikar","palings","palinka","palkees","pallahs","pallets","pallial","pallier","palling","pallium","pallone","pallors","palmary","palmate","palmers","palmful","palmier","palmies","palmiet","palming","palmist","palmtop","palmyra","palolos","palooka","palpate","palping","palship","palsied","palsier","palsies","palters","paludal","paludic","pampean","pampero","pampers","pampoen","panacea","panache","panadas","panamas","panaxes","pancake","panchax","pandani","pandars","pandect","panders","pandied","pandies","pandits","pandoor","pandora","pandore","pandour","pandura","paneers","paneity","paneled","panfish","panfuls","pangamy","pangene","pangens","panging","pangram","panicks","panicky","panicle","panicum","paniers","paniscs","panisks","pannage","panners","pannick","pannier","panning","pannose","panocha","panoche","panoply","panpipe","pansied","pansies","panters","panther","panties","pantile","pantine","panting","pantler","pantons","pantoum","pantuns","panzers","papable","papadam","papadom","papadum","papains","papally","papauma","papayan","papayas","papered","paperer","paphian","papilio","papilla","papisms","papists","papoose","pappier","pappies","papping","pappose","pappous","paprica","paprika","papulae","papular","papules","papyral","papyrus","parable","paracme","paraded","parader","parades","parador","parados","paradox","parafle","parages","paragon","paramos","parangs","paranym","parapet","paraphs","parasol","paratha","parazoa","parbake","parboil","parcels","parched","parches","pardahs","pardale","pardals","pardine","pardner","pardons","pareira","parella","parelle","parents","parerga","pareses","paresis","paretic","parfait","pargana","pargets","parging","pariahs","parials","parians","parings","parises","parison","paritor","parkade","parkees","parkers","parkier","parkies","parking","parkins","parkish","parkour","parkway","parlays","parleys","parlies","parling","parlors","parlour","parlous","parodic","parodoi","parodos","paroled","parolee","paroles","paronym","parotic","parotid","parotis","parpane","parpend","parpens","parpent","parping","parquet","parrals","parrels","parried","parrier","parries","parring","parrock","parrots","parroty","parsecs","parsers","parsing","parsley","parsnep","parsnip","parsons","partake","partans","parters","partial","partied","partier","parties","parting","partita","partite","partlet","partner","partons","partook","parture","partway","partyer","parulis","paruras","parures","parvenu","parvise","pascals","paschal","pascual","pasears","paselas","pashims","pashing","pashkas","paspies","pasquil","passade","passado","passage","passant","passata","passels","passers","passing","passion","passive","passkey","passman","passmen","passout","pastels","pastern","pasters","pasteup","pastier","pasties","pastils","pastily","pastime","pastina","pasting","pastors","pasture","patacas","patagia","patamar","patball","patched","patcher","patches","patella","patency","patents","paterae","pathics","pathing","pathway","patible","patient","patinae","patinas","patined","patines","patness","patonce","patrial","patrick","patrico","patriot","patrols","patrons","patroon","patsies","pattens","pattern","patters","patties","patting","pattles","patulin","patzers","paucals","paucity","paughty","paulins","paunces","paunchy","paupers","pausers","pausing","pavages","pavanes","pavings","paviors","paviour","paviser","pavises","pavisse","pavlova","pavones","pawawed","pawkier","pawkily","pawnage","pawnces","pawnees","pawners","pawning","pawnors","pawpaws","paxiuba","payable","payably","payback","paydays","payfone","payings","payload","payment","paynims","payoffs","payolas","payouts","payroll","paysage","payslip","pazzazz","peached","peacher","peaches","peacing","peacoat","peacock","peacods","peafowl","peahens","peakier","peaking","peakish","pealike","pealing","peaning","peanuts","peapods","pearced","pearces","pearled","pearler","pearlin","pearter","peartly","peasant","peascod","peasing","peatary","peatery","peatier","peatman","peatmen","peaveys","peavies","peazing","pebbled","pebbles","pebrine","peccant","peccary","peccavi","pechans","peching","peckers","peckier","pecking","peckish","pectase","pectate","pectens","pectins","pectise","pectize","pectose","peculia","pedagog","pedaled","pedaler","pedalos","pedants","pedders","peddled","peddler","peddles","pedeses","pedesis","pedetic","pedicab","pedicel","pedicle","pedlars","pedlary","pedlers","pedlery","pedocal","pedrail","pedrero","peebeen","peekabo","peeking","peelers","peeling","peenged","peenges","peening","peepers","peeping","peepuls","peerage","peeress","peerier","peeries","peering","peevers","peeving","peevish","peewees","peewits","pegasus","peggies","pegging","peghing","pegless","peglike","peincts","peining","peishwa","peising","peizing","pekepoo","pelages","pelagic","pelhams","pelican","pelisse","pelites","pelitic","pellach","pellack","pellets","pellock","pellums","pelmets","peloids","peloria","peloric","pelorus","pelotas","peloton","peltast","peltate","pelters","pelting","pelvics","pembina","pemican","pemphix","penally","penalty","penance","penangs","penates","pencels","pencils","pendant","pendent","pending","pendule","penfold","penfuls","penguin","penicil","penises","penlite","pennals","penname","pennant","pennate","penners","pennied","pennies","pennill","pennine","penning","pennons","penoche","pensees","pensels","pensile","pensils","pension","pensive","penster","pensums","pentact","pentads","pentane","pentels","pentene","penthia","pentice","pentise","pentiti","pentito","pentode","pentose","pentyls","penuche","penuchi","penults","peonage","peonies","peonism","peopled","peopler","peoples","pepinos","peplums","peppers","peppery","peppier","peppily","pepping","pepsine","pepsins","peptalk","peptics","peptide","peptids","peptise","peptize","peptone","peracid","peraeon","percale","percase","percent","percept","perched","percher","perches","percine","percing","percoct","percoid","percuss","perdues","perdure","peregal","pereion","pereira","perenty","pereons","perfect","perfidy","perfing","perfins","perform","perfume","perfumy","perfuse","pergola","perhaps","periapt","pericon","peridia","peridot","perigee","perigon","periled","perilla","perinea","periods","periost","perique","peritus","periwig","perjink","perjure","perjury","perkier","perkily","perking","perkins","perkish","perlite","perlous","permian","permies","perming","permits","permute","pernods","perones","peroral","peroxid","perpend","perpent","perplex","perrier","perries","perrons","persalt","persant","persico","persing","persist","persona","persons","perspex","persued","persues","pertain","pertake","pertest","pertook","perturb","pertuse","peruked","perukes","perusal","perused","peruser","peruses","pervade","pervert","perving","pesades","pesante","pesants","pesaunt","pesetas","pesewas","peshwas","peskier","peskily","pessary","pessima","pesters","pestful","pestier","pestled","pestles","petaled","petaras","petards","petasos","petasus","petcock","petered","pethers","petiole","petites","petnaps","petrale","petrary","petrels","petrify","petrols","petrous","petsais","petters","pettier","petties","pettily","petting","pettish","pettled","pettles","petunia","pewters","peyotes","peyotls","peysing","peytral","peytrel","pezants","pfennig","phacoid","phaeism","phaeton","phalanx","phallic","phallin","phallus","phanged","phantom","pharaoh","pharmas","pharynx","phaseal","phasing","phasmid","phasors","phatter","pheazar","pheeres","pheesed","pheeses","pheezed","pheezes","phellem","phenate","phenols","phenoms","phenoxy","phenyls","phesing","philter","philtra","philtre","phizogs","phizzes","phlegms","phlegmy","phloems","phlomis","phloxes","phobias","phobics","phobism","phobist","phocine","phoebes","phoebus","phoenix","phonate","phoneme","phoners","phoneys","phonics","phonied","phonier","phonies","phonily","phoning","phonons","phorate","phoresy","photics","photism","photoed","photogs","photons","phrasal","phrased","phraser","phrases","phratry","phreaks","phrenic","phrensy","phutted","phyllid","phyllos","physeds","physics","physios","phytane","phytins","phytoid","phytols","phytons","piaffed","piaffer","piaffes","pianino","pianism","pianist","piarist","piasaba","piasava","piaster","piastre","piazzas","pibroch","picacho","picador","picamar","picante","picaras","picaros","piccata","piccies","piccolo","picenes","piceous","pickaxe","pickeer","pickers","pickery","pickets","pickier","pickily","picking","pickins","pickled","pickler","pickles","pickmaw","pickoff","pickups","picnics","picolin","picongs","picoted","picotee","picquet","picrate","picrite","picture","piddled","piddler","piddles","piddock","pidgeon","pidgins","piebald","piecens","piecers","piecing","piedish","piefort","piehole","pierage","pierced","piercer","pierces","pierids","pierogi","pierrot","pieties","pietism","pietist","piffero","piffled","piffler","piffles","pigboat","pigeons","pigface","pigfeed","pigfish","piggery","piggier","piggies","pigging","piggins","piggish","pighted","pightle","piglets","piglike","pigling","pigmean","pigmeat","pigment","pigmies","pigmoid","pignoli","pignora","pignuts","pigouts","pigpens","pigskin","pigsney","pigsnie","pigtail","pigwash","pigweed","pikakes","pikelet","pikeman","pikemen","pikings","pilaffs","pilcher","pilches","pilcorn","pilcrow","pileate","pileous","pileups","pilfers","pilfery","pilgrim","pilings","pillage","pillars","pillaus","pillbox","pillies","pilling","pillion","pillock","pillory","pillows","pillowy","piloted","pilotis","pilsner","pilulae","pilular","pilulas","pilules","pimento","piments","pimping","pimpled","pimples","pinangs","pinatas","pinball","pinbone","pincase","pincers","pinched","pincher","pinches","pindans","pindari","pinders","pindown","pineals","pinenes","pinesap","pinetum","pinfall","pinfish","pinfold","pingers","pinging","pingled","pingler","pingles","pingoes","pinguid","pinguin","pinhead","pinhole","piniest","pinions","pinites","pinitol","pinkens","pinkers","pinkest","pinkeye","pinkeys","pinkier","pinkies","pinking","pinkish","pinkoes","pinnace","pinnate","pinners","pinnets","pinnies","pinning","pinnock","pinnoed","pinnula","pinnule","pinocle","pinoles","pinones","pintada","pintado","pintail","pintano","pintles","pintoes","pinwale","pinweed","pinwork","pinworm","pinyons","piolets","pioneer","pioners","pioneys","pionies","pioning","piosity","piously","pipages","pipeage","pipeful","piperic","pipette","pipiest","pipings","pipkins","pipless","pippier","pipping","pippins","piquant","piquets","piquing","piragua","piranas","piranha","pirated","pirates","piratic","pirayas","pirnies","pirogen","piroghi","pirogue","pirojki","piroque","piscary","piscina","piscine","pishers","pishing","pishoge","piskies","pismire","pissant","pissers","pissing","pissoir","pistils","pistole","pistols","pistons","pistous","pitapat","pitarah","pitaras","pitayas","pitched","pitcher","pitches","piteous","pitfall","pithead","pithful","pithier","pithily","pithing","pitiers","pitiful","pitmans","pitprop","pitsaws","pitters","pitting","pittite","pituita","pituite","pituris","pitying","piupius","pivotal","pivoted","pivoter","pixyish","pizazzy","pizzazz","pizzles","plaases","placard","placate","placcat","placebo","placers","placets","placing","placita","placits","placket","placoid","plafond","plagium","plagued","plaguer","plagues","plaguey","plaices","plaided","plained","plainer","plainly","plaints","plaited","plaiter","planate","planche","planers","planets","planing","planish","planked","planned","planner","plantae","plantar","plantas","planted","planter","planula","planury","planxty","plapped","plaques","plashed","plasher","plashes","plashet","plasmas","plasmic","plasmid","plasmin","plasmon","plaster","plastic","plastid","platane","platans","plateau","platens","platers","platier","platies","platina","plating","platoon","platted","platter","platypi","plaudit","playact","playboy","playbus","playday","players","playful","playing","playlet","playoff","playpen","pleaded","pleader","pleaing","pleased","pleaser","pleases","pleated","pleater","plebean","plebify","plectra","plectre","pledged","pledgee","pledger","pledges","pledget","pledgor","pleiads","plenary","plenipo","plenish","plenism","plenist","plenums","pleonal","pleonic","pleopod","plerion","pleroma","plerome","pleshes","plessor","pleuchs","pleughs","pleurae","pleural","pleuras","pleuron","plexors","plexure","pliable","pliably","pliancy","plicate","plights","plimmed","plimsol","plinked","plinker","plinths","pliskie","plisses","ploated","plodded","plodder","plodged","plodges","plonged","plonges","plonked","plonker","plonkos","plookie","plopped","plosion","plosive","plotful","plotted","plotter","plottie","plotzed","plotzes","ploughs","ploukie","plouter","plovers","plovery","plowboy","plowers","plowing","plowman","plowmen","plowter","ploying","plucked","plucker","pluffed","plugged","plugger","plugola","plumage","plumate","plumbed","plumber","plumbic","plumbum","plumcot","plumery","plumier","pluming","plumist","plummer","plummet","plumose","plumous","plumped","plumpen","plumper","plumpie","plumply","plumula","plumule","plunder","plunged","plunger","plunges","plunked","plunker","plurals","plusage","plusher","plushes","plushly","plusing","plussed","plusses","pluteal","pluteus","plutons","pluvial","pluvian","plywood","pneumas","poached","poacher","poaches","poblano","pochard","pochays","pochoir","pockard","pockets","pockier","pockies","pockily","pocking","pockpit","pocosen","pocosin","pocoson","podagra","podalic","podcast","poddier","poddies","podding","poddled","poddles","podesta","podexes","podgier","podgily","podites","poditic","podiums","podleys","podlike","podsols","podzols","poepols","poesied","poesies","poetess","poetics","poetise","poetize","poffles","pogoers","pogoing","pogonia","pogonip","pogroms","pohiris","poinado","poinded","poinder","pointed","pointel","pointer","pointes","poisers","poising","poisons","poisson","poitins","poitrel","pokable","pokeful","pokiest","polacca","polacre","polaron","polders","poleaxe","polecat","polemic","polenta","poleyns","policed","policer","polices","polings","politer","politic","polkaed","polking","pollack","pollans","pollard","pollees","pollens","pollent","pollers","pollicy","pollies","polling","pollist","pollman","pollmen","pollock","pollute","poloist","polonie","polting","polyact","polycot","polyene","polygam","polygon","polymer","polynia","polynya","polynyi","polyols","polyoma","polyped","polypes","polypod","polypus","polyzoa","pomaces","pomaded","pomades","pomatum","pomelos","pomeroy","pomfret","pommele","pommels","pommies","pompano","pompelo","pompeys","pompier","pompion","pompoms","pompons","pompoon","pompous","pomroys","ponceau","ponchos","poncier","poncing","pondage","ponders","ponding","pondoks","pongees","pongids","pongier","ponging","pongoes","poniard","ponking","pontage","ponties","pontiff","pontify","pontile","pontils","pontine","pontons","pontoon","ponying","pooched","pooches","poodles","poofier","pooftah","poofter","poogyes","poohing","poojahs","pooking","poolers","pooling","poonacs","poonced","poonces","poopers","pooping","poorest","poorish","pooters","pooting","pootled","pootles","poovery","poovier","popadum","popcorn","popedom","poperas","poperin","popette","popeyed","popguns","popjoys","poplars","poplins","popover","poppers","poppets","poppied","poppier","poppies","popping","poppish","poppits","poppled","popples","poprins","popsies","popster","popular","porangi","porches","porcine","porcini","porcino","porgies","porging","poriest","porifer","porinas","porisms","porkers","porkier","porkies","porking","porkpie","pornier","poroses","porosis","porpess","porrect","porrigo","portage","portals","portate","portend","portent","porters","portess","porthos","portico","portier","porting","portion","portman","portmen","portous","portray","posable","posadas","posaune","poseurs","poseuse","poshest","poshing","posiest","posings","posited","positif","positon","posnets","posoles","possers","possess","possets","possies","possing","possums","postage","postals","postbag","postbox","postboy","postbus","postdoc","posteen","postern","posters","postfix","posties","postils","posting","postins","postman","postmen","postops","posttax","posture","postwar","potable","potager","potages","potamic","potassa","potboil","potboys","potched","potcher","potches","poteens","potence","potency","potents","potfuls","potguns","pothead","potheen","potherb","pothers","pothery","pothole","pothook","potiche","potions","potlach","potlike","potline","potluck","potoroo","potpies","potshop","potshot","potsies","pottage","potteen","potters","pottery","pottier","potties","potting","pottles","potzers","pouched","pouches","pouders","poudres","pouffed","pouffes","poufing","pouftah","poufter","pouking","poulard","poulder","pouldre","poulpes","poulter","poultry","pounced","pouncer","pounces","pouncet","poundal","pounded","pounder","pouping","pourers","pouries","pouring","poursew","poursue","pousses","poussie","poussin","pouters","poutful","pouther","poutier","poutine","pouting","poverty","powders","powdery","powered","powhiri","pownded","powneys","pownies","powring","powters","powwows","poxiest","poynant","poynted","poysing","poysons","pozoles","pozzies","prabble","practic","praeses","praetor","prairie","praised","praiser","praises","prajnas","praline","pranced","prancer","prances","prancke","prancks","pranged","pranked","prankle","praters","praties","prating","pratted","prattle","praunce","pravity","prawles","prawlin","prawned","prawner","prayers","praying","preaced","preaces","preachy","preacts","preaged","preamps","preanal","prearms","preased","preases","preasse","preaver","prebade","prebake","prebend","prebids","prebill","prebind","preboil","prebook","preboom","preborn","prebuys","precast","precava","precede","precent","precept","precess","precipe","precise","precode","precook","precool","precoup","precure","precuts","predate","predawn","predial","predict","predied","predies","predive","predoom","predusk","preedit","preeing","preemie","preempt","preened","preener","preeved","preeves","prefabs","preface","prefade","prefard","prefect","prefers","prefile","prefire","preform","prefund","pregame","preheat","prehend","preifes","prejink","prelacy","prelate","prelaty","prelect","prelife","prelims","preload","prelude","preludi","premade","premeal","premeds","premeet","premier","premies","premise","premiss","premium","premixt","premold","premolt","premove","premune","prename","prenoon","prented","prenups","prenzie","preoral","prepack","prepaid","prepare","prepave","prepays","prepill","preplan","prepone","prepose","prepped","preppie","prepreg","prepuce","prepupa","prequel","prerace","preriot","prerock","prerupt","presage","presale","presell","present","presets","preship","preshow","preside","presift","presoak","presold","presong","presort","pressed","presser","presses","pressie","pressor","prested","prester","prestos","presume","pretape","preteen","pretell","pretend","preterm","pretest","pretext","pretold","pretors","pretrim","pretype","pretzel","prevail","prevene","prevent","preverb","preview","preving","previse","prevued","prevues","prewarm","prewarn","prewash","prewire","prework","preworn","prewrap","prewyns","prexies","preyers","preyful","preying","prezzie","priapic","priapus","pribble","pricers","pricier","pricily","pricing","pricked","pricker","pricket","prickle","prickly","pridian","priding","priefes","priests","prieved","prieves","prigged","prigger","prilled","primacy","primage","primary","primate","primely","primero","primers","primeur","primine","priming","primmed","primmer","primped","primsie","primula","princed","princes","princox","prinked","prinker","printed","printer","priorly","prisage","prisere","prisers","prising","prisons","prissed","prisses","prithee","privacy","privado","private","privets","privier","privies","privily","privity","prizers","prizing","proball","proband","probang","probate","probers","probing","probits","probity","problem","procarp","proceed","process","proctal","proctor","procure","prodded","prodder","prodigy","prodrug","produce","product","proette","proface","profane","profess","proffer","profile","profits","profuse","progeny","progged","progger","program","proigns","proined","proines","project","projets","prokers","proking","prolans","prolate","prolegs","prolers","proline","proling","prolled","proller","prologs","prolong","promine","promise","prommer","promoed","promote","prompts","pronaoi","pronaos","pronate","pronely","pronest","proneur","pronged","pronked","pronota","pronoun","proofed","proofer","prootic","propage","propale","propane","propels","propend","propene","propers","prophet","propine","propjet","propman","propmen","propone","propose","propped","propria","propyla","propyls","prorate","prosaic","prosect","prosers","prosier","prosify","prosily","prosing","prosody","prosoma","prosper","prosses","prossie","prostie","protean","proteas","protect","protege","proteid","protein","protend","protest","proteus","prothyl","protist","protium","protons","protore","protyle","protyls","prouder","proudly","prouled","prouler","provand","provant","provend","proverb","provers","provide","provine","proving","proviso","provoke","provost","prowess","prowest","prowled","prowler","proxies","proximo","proyned","proynes","prudent","prudery","prudish","pruinas","pruines","pruners","pruning","prunted","prurigo","prusiks","prussic","prutoth","pryings","prysing","prythee","psalmed","psalmic","psalter","psaltry","psammon","pschent","pseudos","pshawed","psionic","psoases","psoatic","psocids","psyched","psyches","psychic","psychos","psyllas","psyllid","psywars","ptarmic","pterins","pterion","pteryla","ptisans","ptomain","ptyalin","pubbing","puberal","puberty","pubises","publics","publish","puccoon","pucelle","puckers","puckery","pucking","puckish","puckles","puddens","pudders","puddies","pudding","puddled","puddler","puddles","puddock","pudency","pudenda","pudgier","pudgily","pudsier","pueblos","puerile","puering","puffers","puffery","puffier","puffily","puffing","puffins","pugaree","puggery","puggier","puggies","pugging","puggish","puggled","puggles","puggree","pugmark","pugrees","puirest","puisnes","pukatea","pukekos","puldron","puliest","pulings","pulkhas","pullers","pullets","pulleys","pulling","pullman","pullout","pullups","pulpers","pulpier","pulpify","pulpily","pulping","pulpits","pulpous","pulques","pulsant","pulsars","pulsate","pulsers","pulsing","pulsion","pultans","pultons","pultoon","pultuns","pulture","pulvers","pulvils","pulvini","pulwars","pumelos","pumiced","pumicer","pumices","pummelo","pummels","pumpers","pumping","pumpion","pumpkin","punalua","punched","puncher","punches","puncing","punctos","punctum","pundits","pungent","pungled","pungles","puniest","punkahs","punkers","punkest","punkeys","punkier","punkies","punkins","punkish","punners","punnets","punnier","punning","punster","puntees","punters","punties","punting","puparia","pupated","pupates","pupfish","pupilar","puppets","puppied","puppies","pupping","pupunha","puranas","puranic","purdahs","purfled","purfler","purfles","purgers","purging","purines","puriris","purisms","purists","puritan","purlers","purlieu","purline","purling","purlins","purloin","purpies","purpled","purpler","purples","purport","purpose","purpura","purpure","purring","pursers","pursews","pursier","pursily","pursing","pursual","pursued","pursuer","pursues","pursuit","purtier","purveys","purview","pushers","pushful","pushier","pushily","pushing","pushpin","pushrod","pushups","pusleys","puslike","pusling","pussels","pussers","pussier","pussies","pussley","pustule","putamen","putcher","putchuk","putdown","puteals","putelis","putlock","putlogs","putoffs","putouts","putrefy","puttees","putters","puttied","puttier","putties","putting","puttock","putures","putzing","puzzels","puzzled","puzzler","puzzles","pyaemia","pyaemic","pycnite","pycnons","pyebald","pyemias","pygargs","pygidia","pygmean","pygmies","pygmoid","pyjamas","pyknics","pyloric","pylorus","pyoners","pyralid","pyralis","pyramid","pyramis","pyrenes","pyretic","pyrexes","pyrexia","pyrexic","pyridic","pyrites","pyritic","pyrogen","pyrolas","pyrones","pyropes","pyropus","pyroses","pyrosis","pyrrhic","pyrrole","pyrrols","pyruvic","pythium","pythons","pyurias","pyxides","pyxidia","pzazzes","qabalah","qabalas","qasidas","qawwali","qawwals","qigongs","qindars","qintars","qiviuts","quacked","quacker","quackle","quadded","quadrat","quadric","quaered","quaeres","quaffed","quaffer","quaggas","quahaug","quahogs","quaichs","quaighs","quailed","quakers","quakier","quakily","quaking","qualify","quality","quamash","quangos","quannet","quantal","quanted","quantic","quantum","quarest","quarrel","quartan","quarter","quartes","quartet","quartic","quartos","quartzy","quasars","quashed","quashee","quasher","quashes","quashie","quasses","quassia","quassin","quatres","quavers","quavery","quayage","qubytes","queachy","queechy","queened","queenie","queenly","queered","queerer","queerly","queests","queleas","quelled","queller","queming","querida","queried","querier","queries","querist","quested","quester","questor","quethes","quetsch","quetzal","queuers","queuing","queynie","quezals","quibble","quiblin","quiched","quiches","quicken","quicker","quickie","quickly","quidams","quiddit","quiddle","quiesce","quieted","quieten","quieter","quietly","quietus","quights","quillai","quilled","quillet","quillon","quilted","quilter","quinary","quinate","quinces","quinche","quinela","quinies","quinina","quinine","quinins","quinnat","quinoas","quinoid","quinols","quinone","quintal","quintan","quintar","quintas","quintes","quintet","quintic","quintin","quinzes","quipped","quipper","quippus","quiring","quirked","quirted","quiting","quittal","quitted","quitter","quittor","quivers","quivery","quixote","quizzed","quizzer","quizzes","quodded","quodlin","quohogs","quoifed","quoined","quoists","quoited","quoiter","quokkas","quomodo","quondam","quonked","quopped","quorate","quorums","quoters","quoting","quotums","qurshes","quyting","qwertys","rabanna","rabatos","rabatte","rabbets","rabbies","rabbins","rabbito","rabbits","rabbity","rabbled","rabbler","rabbles","rabboni","rabider","rabidly","raccoon","racemed","racemes","racemic","raceway","rachets","rachial","raciest","racings","racisms","racists","rackers","rackets","rackett","rackety","rackful","racking","racloir","racoons","racquet","raddest","radding","raddled","raddles","radgest","radiale","radials","radians","radiant","radiata","radiate","radical","radicel","radices","radicle","radioed","radiums","radixes","radomes","radulae","radular","radulas","rafales","raffias","raffish","raffled","raffler","raffles","rafters","rafting","raftman","raftmen","ragbags","ragbolt","rageful","raggedy","raggees","raggery","raggier","raggies","ragging","raggled","raggles","raghead","ragings","raginis","raglans","ragmans","ragment","ragouts","ragtags","ragtime","ragtops","raguled","ragweed","ragwork","ragworm","ragwort","raiders","raiding","raiking","railbed","railbus","railcar","railers","railing","railman","railmen","railway","raiment","rainbow","rainier","rainily","raining","rainout","raisers","raising","raisins","raisiny","raiting","raiyats","rakeoff","rakings","rakshas","rallied","rallier","rallies","ralline","rallyes","ralphed","ramadas","ramakin","ramblas","rambled","rambler","rambles","ramcats","ramekin","ramenta","rameous","ramilie","ramjets","rammels","rammers","rammier","rammies","ramming","rammish","rammles","ramonas","rampage","rampant","rampart","rampers","rampick","rampike","ramping","rampion","rampire","rampole","ramrods","ramsons","ramstam","ramtils","ramular","ramulus","rancels","ranched","rancher","ranches","ranchos","rancing","rancors","rancour","randans","randems","randier","randies","randily","randing","randoms","randons","rangers","rangier","rangily","ranging","rangoli","rankers","rankest","ranking","rankish","rankism","rankled","rankles","ranpike","ransack","ransels","ransoms","ranters","ranting","ranular","ranulas","ranzels","raoulia","raphias","raphide","rapider","rapidly","rapiers","rapines","rapists","raploch","rappees","rappels","rappers","rapping","rappini","rapport","raptors","rapture","rarebit","rarking","rasbora","rascals","raschel","rashers","rashest","rashies","rashing","raspers","raspier","rasping","raspish","rassled","rassles","rasters","rastrum","rasures","ratable","ratably","ratafee","ratafia","ratatat","ratbags","ratbite","ratched","ratches","ratchet","rateens","ratfink","ratfish","rathest","rathole","ratines","ratings","rations","ratites","ratlike","ratline","ratling","ratlins","ratoons","ratpack","rattail","rattans","ratteen","rattens","ratters","rattery","rattier","rattily","ratting","rattish","rattled","rattler","rattles","rattlin","rattons","rattoon","rattrap","raucity","raucler","raucous","raunchy","raunged","raunges","raupatu","rauriki","ravaged","ravager","ravages","raveled","raveler","ravelin","ravelly","ravened","ravener","ravined","ravines","ravings","ravioli","rawbone","rawhead","rawhide","rawings","rawness","rayless","raylets","raylike","rayling","razored","razures","razzias","razzing","razzles","reached","reacher","reaches","reacted","reactor","readapt","readded","readers","readied","readier","readies","readily","reading","readmit","readopt","readorn","readout","reaffix","reagent","reagins","reaking","realest","realgar","realign","realise","realism","realist","reality","realize","reallie","reallot","realter","realtie","realtor","reamend","reamers","reamier","reaming","reannex","reapers","reaping","reapply","rearers","reargue","rearing","rearise","rearmed","rearose","reasons","reasted","reavail","reavers","reaving","reavows","reawake","reawoke","rebacks","rebadge","rebaits","rebated","rebater","rebates","rebatos","rebecks","rebegan","rebegin","rebegun","rebills","rebinds","rebirth","rebites","reblend","reblent","rebloom","reboant","reboard","reboils","rebooks","reboots","rebored","rebores","rebound","rebozos","rebrace","rebrand","rebreed","rebuffs","rebuild","rebuilt","rebuked","rebuker","rebukes","rebuses","recalls","recaned","recanes","recants","recarry","recasts","recatch","recceed","reccied","reccies","receded","recedes","receipt","receive","recency","recense","recepts","rechart","rechate","recheat","recheck","rechews","rechose","recipes","recital","recited","reciter","recites","recking","reckons","reclads","reclaim","reclame","reclasp","reclean","reclimb","recline","reclose","recluse","recoals","recoats","recocks","recoded","recodes","recoils","recoins","recolor","recombs","recooks","records","recorks","recount","recoupe","recoups","recoure","recover","recower","recoyle","recrate","recross","recrown","recruit","rectify","rection","rectors","rectory","rectrix","rectums","recuile","reculed","recules","recured","recures","recurve","recusal","recused","recuses","recycle","redacts","redated","redates","redback","redbait","redbays","redbird","redbone","redbuds","redbugs","redcaps","redcoat","reddens","redders","reddest","reddier","redding","reddish","reddled","reddles","redeals","redealt","redears","redeems","redeyes","redfins","redfish","redfoot","redhead","redials","redlegs","redline","redneck","redness","redocks","redoing","redoubt","redound","redouts","redowas","redoxes","redpoll","redraft","redrawn","redraws","redream","redress","redried","redries","redrill","redrive","redroot","redrove","redsear","redskin","redtail","redtops","reduced","reducer","reduces","reduits","redware","redwing","redwood","reearns","reeboks","reeched","reeches","reechie","reedbed","reeders","reedier","reedify","reedily","reeding","reedits","reedman","reedmen","reefers","reefier","reefing","reeject","reekers","reekier","reeking","reelect","reelers","reeling","reelman","reelmen","reemits","reenact","reendow","reenjoy","reenter","reentry","reequip","reerect","reested","reeving","reevoke","reexpel","refaced","refaces","refalls","refects","refeeds","refeels","refence","referee","reffing","refight","refiled","refiles","refills","refilms","refinds","refined","refiner","refines","refired","refires","refixed","refixes","reflags","reflate","reflect","reflets","reflies","refloat","reflood","reflown","reflows","refocus","refolds","refoots","reforge","reforms","refound","refract","refrain","reframe","refresh","refried","refries","refront","refroze","refuels","refuged","refugee","refuges","refugia","refunds","refusal","refused","refuser","refuses","refutal","refuted","refuter","refutes","regains","regaled","regaler","regales","regalia","regally","regards","regatta","regauge","regears","regence","regency","regents","regests","reggaes","regilds","regimen","regimes","reginae","reginal","reginas","regions","regiven","regives","reglaze","reglets","regloss","reglows","reglued","reglues","regmata","regnant","regorge","regosol","regrade","regraft","regrant","regrate","regrede","regreen","regreet","regress","regrets","regrind","regroom","regroup","regrown","regrows","regulae","regular","regulos","regulus","rehangs","reheard","rehears","reheats","reheels","rehinge","rehired","rehires","rehouse","reified","reifier","reifies","reigned","reimage","reincur","reindex","reining","reinked","reinter","reissue","reisted","reitbok","reiters","reivers","reiving","rejects","rejoice","rejoins","rejoneo","rejones","rejourn","rejudge","rekeyed","reknits","reknots","relabel","relaced","relaces","relache","relands","relapse","related","relater","relates","relator","relatum","relaxed","relaxer","relaxes","relaxin","relayed","relearn","release","relends","relents","releves","reliant","relicts","reliefs","reliers","relieve","relievo","relight","relined","relines","relinks","relique","relists","relived","reliver","relives","relleno","rellies","rellish","reloads","reloans","relocks","relooks","relucts","relumed","relumes","relying","remades","remails","remains","remaker","remakes","remands","remanet","remanie","remarks","remarry","rematch","remated","remates","remblai","rembled","rembles","remeads","remeded","remedes","remeets","remeids","remelts","remends","remercy","remerge","remiges","reminds","remints","remised","remises","remixed","remixes","remnant","remodel","remolds","remoras","remorid","remorse","remoter","remotes","remould","remount","removal","removed","remover","removes","remuage","remudas","remueur","renague","renails","renamed","renames","renayed","renders","rending","reneged","reneger","reneges","renegue","renests","renewal","renewed","renewer","reneyed","renkest","rennase","rennets","renning","rennins","renowns","rentals","renters","rentier","renting","renvois","renvoys","renying","reoccur","reoffer","reoiled","reopens","reorder","repacks","repaint","repairs","repanel","repaper","reparks","repasts","repatch","repaved","repaves","repeals","repeats","repents","reperks","repined","repiner","repines","repique","replace","replans","replant","replate","replays","replead","replete","replevy","replica","replied","replier","replies","replots","replows","replumb","repoint","repolls","repoman","repomen","reponed","repones","reports","reposal","reposed","reposer","reposes","reposit","reposts","repours","repower","repping","repress","reprice","reprime","reprint","reprise","reprive","reprize","reprobe","reproof","reprove","repryve","reptant","reptile","repugns","repulps","repulse","repumps","repunit","repured","repures","reputed","reputes","requere","request","requiem","requins","require","requite","requits","requote","reracks","rerails","reraise","rereads","reredos","reremai","rerents","rerisen","rerises","rerolls","reroofs","reroute","resails","resales","resawed","rescale","rescind","rescore","rescued","rescuer","rescues","reseals","reseats","reseaus","reseaux","resects","resedas","reseeds","reseeks","reseize","resells","resends","resents","reserve","resewed","reshape","reshave","reshine","reships","reshoed","reshoes","reshone","reshoot","reshown","reshows","resiant","resided","resider","resides","residua","residue","resifts","resight","resigns","resiled","resiles","resilin","resined","resiner","resists","resited","resites","resized","resizes","reskews","reskill","reskued","reskues","reslate","resmelt","resoaks","resojet","resoled","resoles","resolve","resorbs","resorts","resound","resowed","respace","respade","respeak","respect","respell","respelt","respire","respite","resplit","respoke","respond","respool","respots","respray","restack","restaff","restage","restamp","restart","restate","restems","resters","restful","restier","restiff","resting","restive","restock","restoke","restore","restudy","restuff","restump","restyle","results","resumed","resumer","resumes","resurge","retable","retacks","retails","retains","retaken","retaker","retakes","retally","retamas","retaped","retapes","retards","retaste","retaxed","retaxes","retched","retches","reteach","reteams","retears","retells","retenes","retests","rethink","retiary","reticle","retiled","retiles","retimed","retimes","retinae","retinal","retinas","retines","retinol","retints","retinue","retiral","retired","retiree","retirer","retires","retitle","retools","retorts","retotal","retouch","retours","retrace","retrack","retract","retrain","retrait","retrate","retread","retreat","retrees","retrial","retried","retries","retrims","retsina","rettery","retting","retunds","retuned","retunes","returfs","returns","retwist","retying","retyped","retypes","reunify","reunion","reunite","reurged","reurges","reusing","reutter","revalue","revamps","reveals","reveled","reveler","revelry","revenge","revenue","reverbs","revered","reverer","reveres","reverie","reverse","reversi","reverso","reverts","revests","reveurs","reveuse","reviews","reviled","reviler","reviles","revisal","revised","reviser","revises","revisit","revisor","revival","revived","reviver","revives","revivor","revoice","revoked","revoker","revokes","revolts","revolve","revoted","revotes","revuist","revving","revying","rewaked","rewaken","rewakes","rewards","rewarms","rewaxed","rewaxes","rewears","reweave","reweigh","rewelds","rewiden","rewinds","rewired","rewires","rewoken","rewords","reworks","rewound","rewoven","rewraps","rewrapt","rewrite","rewrote","rexines","reynard","rezeros","rezoned","rezones","rhabdom","rhabdus","rhachis","rhamnus","rhanjas","rhaphae","rhaphes","rhaphis","rhatany","rheboks","rhenium","rhetors","rheumed","rheumic","rhizine","rhizoid","rhizoma","rhizome","rhizopi","rhodies","rhodium","rhodora","rhodous","rhombic","rhomboi","rhombos","rhombus","rhonchi","rhubarb","rhumbas","rhymers","rhyming","rhymist","rhythmi","rhythms","rhytina","rhytons","rialtos","riantly","ribalds","ribands","ribauds","ribband","ribbers","ribbier","ribbing","ribbons","ribbony","ribcage","ribibes","ribible","ribiers","ribless","riblets","riblike","riboses","ribston","ribwork","ribwort","richens","richest","riching","richted","richter","riciest","ricinus","rickers","rickets","rickety","rickeys","ricking","rickles","ricksha","ricotta","ricracs","ridable","ridders","ridding","riddled","riddler","riddles","ridered","ridgels","ridgers","ridgier","ridgils","ridging","ridings","ridleys","ridotto","riempie","rievers","rieving","riffage","riffing","riffled","riffler","riffles","riffola","riflers","riflery","rifling","riflips","riftier","rifting","riggald","riggers","rigging","riggish","righted","righten","righter","rightly","rightos","rigider","rigidly","rigling","riglins","rigolls","rigours","rigouts","rikisha","rikishi","rikshaw","riliest","rilievi","rilievo","rillets","rilling","rimayes","rimfire","rimiest","rimland","rimless","rimmers","rimming","rimpled","rimples","rimrock","rimshot","rindier","rinding","ringbit","ringent","ringers","ringgit","ringing","ringlet","ringman","ringmen","ringtaw","ringway","rinking","rinning","rinsers","rinsing","rioters","rioting","riotise","riotize","riotous","ripcord","ripecks","ripened","ripener","ripieni","ripieno","ripoffs","riposte","riposts","rippers","rippier","ripping","rippled","rippler","ripples","ripplet","ripraps","ripsawn","ripsaws","ripstop","riptide","risible","risibly","risings","riskers","riskful","riskier","riskily","risking","risotto","risping","risques","rissole","ristras","risuses","ritards","ritters","ritting","rituals","ritzier","ritzily","rivages","rivaled","rivalry","rivered","riveret","riveted","riveter","riviera","riviere","rivlins","rivulet","rizards","rizzars","rizzart","rizzers","rizzors","roached","roaches","roadbed","roadeos","roadies","roading","roadman","roadmen","roadway","roamers","roaming","roarers","roarier","roaring","roasted","roaster","roating","robalos","robands","robbers","robbery","robbing","robbins","robings","robinia","robotic","robotry","robusta","rochets","rockaby","rockers","rockery","rockets","rockier","rockily","rocking","rocklay","rockoon","rococos","rocquet","rodding","rodents","rodeoed","rodeway","rodings","rodless","rodlike","rodsman","rodsmen","rodster","roebuck","roemers","rogallo","rogered","rognons","roguery","roguing","roguish","roilier","roiling","roining","roinish","roisted","roister","rokelay","rokiest","rokkaku","rolfers","rolfing","rollbar","rollers","rollick","rolling","rollmop","rollock","rollout","rolltop","rollway","romages","romaika","romaine","romajis","romance","romanos","romanza","romaunt","romcoms","romneya","rompers","romping","rompish","rondeau","rondels","rondino","rondure","roneoed","ronions","ronnels","ronnies","ronning","rontgen","ronyons","ronzers","roofers","roofier","roofies","roofing","rooftop","rooibos","rooikat","rooinek","rookery","rookier","rookies","rooking","rookish","roomers","roomful","roomier","roomies","roomily","rooming","roopier","rooping","roosers","roosing","roosted","rooster","rootage","rootcap","rooters","rootier","rooties","rooting","rootled","rootles","rootlet","ropable","ropeway","ropiest","ropings","roquets","roriest","rorqual","rorters","rortier","rorting","rosacea","rosaces","rosaker","rosalia","rosaria","rosbifs","roscoes","roseate","rosebay","rosebud","rosehip","rosella","roselle","roseola","roseted","rosette","rosetty","rosiere","rosiers","rosiest","rosined","rosiner","rosinol","rosited","rosolio","rossers","rosters","rosting","rostral","rostrum","rosulas","rosying","rotated","rotates","rotator","rotches","rotchie","rotguts","rothers","rotifer","rotolos","rottans","rottens","rotters","rotting","rotulae","rotulas","rotunda","rotunds","roubles","rouches","roucous","roughed","roughen","rougher","roughie","roughly","rouging","rouille","roulade","rouleau","rouming","rounces","rounded","roundel","rounder","roundle","roundly","roundup","roupier","roupily","rouping","rousant","rousers","rousing","rousted","rouster","routers","routhie","routine","routing","routous","rovings","rowable","rowboat","rowdier","rowdies","rowdily","roweled","rowings","rowlock","rownded","rowover","rowting","royalet","royally","royalty","royning","roynish","roysted","royster","rozelle","rozeted","rozited","rozzers","rubaboo","rubaces","rubasse","rubatos","rubbers","rubbery","rubbidy","rubbies","rubbing","rubbish","rubbity","rubbled","rubbles","rubdown","rubella","rubeola","rubicon","rubidic","rubiest","rubigos","rubines","rubious","ruboffs","rubouts","rubrics","rubying","ruching","rucking","ruckled","ruckles","ruckman","ruckmen","rucolas","ruction","rudases","rudders","ruddied","ruddier","ruddies","ruddily","rudding","ruddled","ruddles","ruddock","ruderal","rudesby","rueings","ruelles","ruellia","ruffian","ruffing","ruffins","ruffled","ruffler","ruffles","rufiyaa","rugbies","ruggers","ruggier","rugging","ruglike","rugolas","rugosas","ruinate","ruiners","ruining","ruinous","rulable","rulered","rulesse","ruliest","rulings","rullion","rullock","rumakis","rumbaed","rumbled","rumbler","rumbles","ruminal","rumkins","rummage","rummers","rummest","rummier","rummies","rummily","rummish","rumness","rumored","rumours","rumpies","rumping","rumpled","rumples","runanga","runaway","runback","runches","rundale","rundled","rundles","rundlet","rundown","runflat","runkled","runkles","runless","runlets","runnels","runners","runnets","runnier","running","runnion","runoffs","runouts","runover","runrigs","runtier","runtish","runways","rupiahs","rupture","rurally","rusalka","rushees","rushers","rushier","rushing","russels","russets","russety","russias","russify","russula","rustics","rustier","rustily","rusting","rustled","rustler","rustles","rustred","rustres","ruthful","rutiles","rutters","ruttier","ruttily","rutting","ruttish","ryepeck","rymming","ryokans","rypecks","sabaton","sabayon","sabbath","sabbats","sabbing","sabeing","sabella","sabered","sabines","sabkhah","sabkhas","sabkhat","sabling","sabreur","sabring","saburra","sacaton","sacbuts","saccade","saccate","saccule","sacculi","sacella","sachems","sachets","sackage","sackbut","sackers","sackful","sacking","sacless","saclike","sacques","sacrals","sacrify","sacring","sacrist","sacrums","saddens","saddest","saddhus","sadding","saddish","saddled","saddler","saddles","saddoes","sadhana","sadiron","sadisms","sadists","sadness","saeters","safaris","saffian","saffron","safrole","safrols","saftest","sagaman","sagamen","sagathy","sagbuts","sagenes","saggard","saggars","saggers","saggier","sagging","sagiest","sagitta","sagoins","sagouin","sagrada","saguaro","saguins","sahibah","sahibas","sahiwal","sahuaro","saidest","saikeis","sailers","sailing","sailors","saimins","saimiri","saining","sainted","saintly","saiques","sairest","sairing","saithes","saiyids","sakeret","sakiehs","sakiyeh","saksaul","salaams","salable","salably","salades","salamis","salamon","salband","salchow","salfern","salices","salicet","salicin","salient","saligot","salinas","salines","salival","salivas","sallads","sallals","sallees","sallets","sallied","sallier","sallies","sallows","sallowy","salmons","saloons","saloops","salpian","salpids","salpinx","salsaed","salsify","saltant","saltate","saltato","saltbox","saltcat","saltern","salters","saltest","saltier","salties","saltily","saltine","salting","saltire","saltish","saltoed","saltpan","saluing","salukis","saluted","saluter","salutes","salvage","salvers","salvete","salvias","salving","salvoed","salvoes","salvors","samaans","samadhi","samaras","sambaed","sambals","sambars","sambhar","sambhur","sambuca","sambuke","samburs","samechs","samekhs","samfoos","samiels","samiest","samisen","samites","samithi","samitis","samlets","samlors","sammies","samming","samosas","samovar","samoyed","sampans","sampire","sampled","sampler","samples","samsara","samshoo","samshus","samurai","sancais","sanchos","sanctum","sandals","sandbag","sandbar","sandbox","sandboy","sandbur","sanddab","sandeks","sanders","sandfly","sandhis","sandhog","sandier","sanding","sandlot","sandman","sandmen","sandpit","sangars","sangers","sanghat","sangoma","sangria","sanicle","sanious","sanjaks","sannies","sannops","sannups","sanpans","sanpros","sansars","sanseis","santals","santera","santero","santimi","santims","santimu","santirs","santols","santons","santoor","santour","santurs","sanyasi","saouari","sapajou","sapeles","saphead","saphena","sapiens","sapient","sapless","sapling","saponin","sapotas","sapotes","sapours","sappans","sappers","sapphic","sappier","sappily","sapping","sappled","sapples","saprobe","sapsago","sapwood","sarafan","sarangi","sarapes","sarcasm","sarcina","sarcode","sarcoid","sarcoma","sarcous","sardana","sardars","sardels","sardine","sardius","sarkier","sarking","sarment","sarmies","sarneys","sarnies","sarodes","sarongs","saronic","saroses","sarsars","sarsden","sarsens","sarsnet","sartors","saruses","sashays","sashimi","sashing","sasines","sassaby","sassier","sassies","sassily","sassing","sastras","satangs","satanic","sataras","satchel","sateens","satiate","satiety","satined","satinet","satires","satiric","satisfy","satoris","satraps","satrapy","satsuma","satyral","satyras","satyric","satyrid","saucers","saucier","saucily","saucing","saugers","saulges","saulies","saunaed","saunted","saunter","saurels","saurian","sauries","sauroid","sausage","sauteed","sautees","sauting","sautoir","savable","savaged","savager","savages","savanna","savante","savants","savarin","savates","saveloy","saveyed","savines","savings","saviors","saviour","savored","savorer","savours","savoury","savveys","savvied","savvier","savvies","savvily","sawbill","sawbuck","sawders","sawdust","sawfish","sawings","sawlike","sawlogs","sawmill","sawneys","sawpits","sawyers","saxauls","saxhorn","saxtuba","sayable","sayings","sayyids","sazerac","sazhens","scabbed","scabble","scabies","scabrid","scaffie","scagged","scaglia","scailed","scaiths","scalade","scalado","scalage","scalare","scalars","scalded","scalder","scaldic","scalene","scaleni","scalers","scaleup","scalier","scaling","scalled","scallop","scalped","scalpel","scalper","scamble","scamels","scammed","scammer","scamped","scamper","scampis","scamtos","scandal","scandia","scandic","scanned","scanner","scanted","scanter","scantle","scantly","scapaed","scaping","scapose","scapple","scapula","scarabs","scarcer","scarers","scarfed","scarfer","scarier","scarify","scarily","scaring","scarlet","scarpas","scarped","scarper","scarphs","scarred","scarres","scarted","scarths","scarves","scathed","scathes","scatole","scatted","scatter","scauded","scauped","scauper","scaured","scavage","scazons","scedule","scenary","scended","scenery","scenics","scening","scented","scepsis","scepter","sceptic","sceptre","sceptry","scerned","scernes","schanse","schanze","schappe","schelms","schemas","schemed","schemer","schemes","schemie","scherzi","scherzo","schisma","schisms","schists","schizos","schizzy","schlepp","schleps","schlich","schlock","schlong","schloss","schlubs","schlump","schmalz","schmear","schmeck","schmeer","schmelz","schmick","schmock","schmoes","schmoos","schmooz","schmuck","schnaps","schnell","schnook","schnorr","schnozz","scholar","scholia","schoole","schools","schorls","schouts","schriks","schrods","schtick","schtiks","schtook","schtoom","schtuck","schuits","schuyts","sciarid","sciatic","science","scillas","sciolto","scirocs","scirrhi","scissel","scissil","scissor","sciurid","sclaffs","sclated","sclates","sclaves","sclerae","scleral","scleras","scleres","scliffs","scodier","scoffed","scoffer","scogged","scolded","scolder","scolion","scollop","sconced","sconces","scooged","scooped","scooper","scootch","scooted","scooter","scopate","scoping","scopula","scorers","scoriac","scoriae","scorify","scoring","scorned","scorner","scorper","scorsed","scorser","scorses","scoters","scotias","scotoma","scotomy","scottie","scouged","scouped","scoured","scourer","scourge","scourie","scourse","scouser","scouses","scouted","scouter","scouths","scowder","scowing","scowled","scowler","scowped","scowrer","scowrie","scowths","scozzas","scraggy","scraich","scraigh","scrambs","scranch","scranny","scraped","scraper","scrapes","scrapie","scrappy","scratch","scrauch","scraugh","scrawls","scrawly","scrawms","scrawny","scrawps","scrayes","screaks","screaky","screams","screech","screeds","screens","screets","screeve","screich","screigh","screwed","screwer","screwup","scribal","scribed","scriber","scribes","scriech","scriene","scrieve","scriked","scrikes","scrimps","scrimpy","scrines","scripts","scritch","scrived","scrives","scrobes","scroggy","scrolls","scromed","scromes","scrooch","scrooge","scroops","scrorps","scrotal","scrotes","scrotum","scrouge","scrowle","scrowls","scroyle","scrubby","scruffs","scruffy","scrummy","scrumps","scrumpy","scrunch","scrunts","scrunty","scruple","scrutos","scruzed","scruzes","scryers","scrying","scrynes","scubaed","scuchin","scudded","scudder","scuddle","scudler","scuffed","scuffer","scuffle","scugged","sculked","sculker","sculled","sculler","sculles","sculped","sculpin","sculpts","scultch","scumbag","scumber","scumble","scummed","scummer","scunged","scunges","scunner","scupper","scurred","scurril","scusing","scutage","scutate","scutter","scuttle","scuzzes","scybala","scyphus","scytale","scythed","scyther","scythes","sdained","sdaines","sdayned","sdeigne","sdeigns","sdeined","seabags","seabank","seabeds","seabird","seaboot","seacock","seadogs","seafolk","seafood","seafowl","seagirt","seagull","seahawk","seahogs","seakale","sealant","sealchs","sealers","sealery","sealghs","sealift","sealine","sealing","sealwax","seamaid","seamark","seamers","seamier","seaming","seamset","seances","seaning","seaport","searats","searced","searces","searest","searing","seasick","seaside","seasing","seasons","seasure","seaters","seating","seawall","seawans","seawant","seaward","seaware","seaways","seaweed","seawife","seaworm","seazing","sebacic","sebasic","sebates","sebific","sebundy","secants","seceded","seceder","secedes","secerns","seckels","seckles","seclude","seconal","seconde","secondi","secondo","seconds","secpars","secrecy","secreta","secrete","secrets","sectary","sectile","section","sectors","secular","seculum","secured","securer","secures","sedarim","sedated","sedater","sedates","sedgier","sedilia","seduced","seducer","seduces","seeable","seedbed","seedbox","seeders","seedier","seedily","seeding","seedlip","seedman","seedmen","seedpod","seeings","seekers","seeking","seelier","seeling","seemers","seeming","seepage","seepier","seeping","seeress","seesaws","seethed","seether","seethes","seewing","segetal","seggars","seghols","segment","seiches","seidels","seikest","seiling","seiners","seining","seisers","seising","seisins","seismal","seismic","seisors","seisure","seitans","seitens","seities","seizers","seizing","seizins","seizors","seizure","sejeant","sekoses","selecta","selects","selenic","selfdom","selfing","selfish","selfism","selfist","selkies","sellers","selling","selloff","sellout","selsyns","seltzer","selvage","sematic","sembled","sembles","semeion","sememes","sememic","semidry","semifit","semilog","semimat","seminal","seminar","semiped","semipro","semiraw","semises","semitar","semmits","sempler","semsems","senarii","senates","senator","sendals","senders","sending","sendoff","sendups","senecas","senecio","senegas","senhora","senhors","seniles","seniors","sennets","sennits","senopia","senoras","senores","sensate","senseis","sensile","sensing","sensism","sensist","sensors","sensory","sensual","sentimo","senting","senvies","sepaled","sephens","sepiost","sepiums","seppuku","septage","septate","septets","septics","septime","septums","septuor","sequela","sequels","sequent","sequins","sequoia","serafin","serails","serangs","serapes","seraphs","serdabs","sereins","serened","serener","serenes","serfage","serfdom","serfish","sergers","serging","serials","seriate","sericin","sericon","seriema","serifed","serines","seringa","serious","seriphs","serkali","sermons","seroons","seropus","serosae","serosal","serosas","serovar","serpent","serpigo","serpula","serrano","serrans","serrate","serrati","serried","serries","serring","seruewe","serumal","servals","servant","servers","servery","servewe","service","servile","serving","servlet","sesames","seselis","sessile","session","sestets","sestett","sestina","sestine","sestons","setback","setline","setness","setoffs","setouts","settees","setters","setting","settled","settler","settles","settlor","setuale","setules","setwall","seventh","seventy","several","severed","severer","seviche","sevruga","sewable","sewages","sewered","sewings","sexfoil","sexiest","sexisms","sexists","sexless","sexpert","sexpots","sextain","sextans","sextant","sextets","sextett","sextile","sextons","sextuor","seysure","sferics","sfumato","shabash","shabble","shacked","shackle","shackos","shaders","shadfly","shadier","shadily","shading","shadoof","shadows","shadowy","shadufs","shafted","shafter","shagged","shahada","shahdom","shaikhs","shairds","shairns","shaitan","shakers","shakeup","shakier","shakily","shaking","shakoes","shakudo","shalier","shaling","shallis","shallon","shallop","shallot","shallow","shaloms","shalots","shalwar","shamans","shambas","shamble","shambly","shamers","shamina","shaming","shammas","shammed","shammer","shammes","shammos","shamois","shamoys","shampoo","shandry","shanked","shantey","shantih","shantis","shapely","shapers","shapeup","shaping","sharded","sharers","shariah","sharias","shariat","sharifs","sharing","sharked","sharker","sharped","sharpen","sharper","sharpie","sharply","shashed","shashes","shaslik","shaster","shastra","shatter","shaughs","shauled","shavers","shavies","shaving","shawing","shawled","shawley","shawlie","sheafed","shealed","sheared","shearer","sheathe","sheaths","sheathy","sheaved","sheaves","shebang","shebean","shebeen","shedded","shedder","shedful","sheeled","sheened","sheeney","sheenie","sheeple","sheepos","sheered","sheerer","sheerly","sheeted","sheeter","sheeves","shegetz","shehita","sheikha","sheikhs","sheilas","sheitan","shekels","shelfed","shellac","shelled","sheller","sheltas","shelter","sheltie","shelved","shelver","shelves","sheqels","sherang","sherbet","shereef","sherias","sheriat","sheriff","sherifs","sheroot","sherpas","sherris","sheuchs","sheughs","shewels","shewers","shewing","shiatsu","shiatzu","shibahs","shicker","shicksa","shidder","shields","shieled","shifted","shifter","shikari","shikars","shikker","shiksas","shikseh","shikses","shilled","shilpit","shimaal","shimmed","shimmer","shimmey","shindig","shindys","shiners","shiness","shingle","shingly","shinier","shinies","shinily","shining","shinjus","shinkin","shinned","shinnes","shinney","shipful","shiplap","shipman","shipmen","shipped","shippen","shipper","shippie","shippon","shippos","shipway","shiring","shirked","shirker","shirras","shirred","shirted","shishas","shitake","shiting","shittah","shitted","shittim","shiurim","shivahs","shivers","shivery","shiviti","shivoos","shivved","shlepps","shlocks","shlocky","shlumps","shlumpy","shmaltz","shmatte","shmears","shmocks","shmoose","shmooze","shmucks","shnapps","shnooks","shoaled","shoaler","shochet","shocked","shocker","shodden","shoders","shoebox","shoeing","shoepac","shofars","shogged","shoggle","shoggly","shoguns","sholoms","shoneen","shoofly","shoogie","shoogle","shoogly","shooing","shooled","shooles","shooras","shooter","shopboy","shopful","shophar","shopman","shopmen","shopped","shopper","shoppes","shorans","shorers","shoring","shorted","shorten","shorter","shortia","shortie","shortly","shotgun","shotput","shotted","shotten","shottes","shottle","shoughs","shouses","shouted","shouter","shovels","shovers","shoving","showbiz","showbox","showded","showers","showery","showghe","showier","showily","showing","showman","showmen","showoff","shreddy","shreeks","shreiks","shrewed","shriech","shrieks","shrieky","shrieve","shrifts","shright","shriked","shrikes","shrills","shrilly","shrimps","shrimpy","shrinal","shrined","shrines","shrinks","shritch","shrived","shrivel","shriven","shriver","shrives","shroffs","shrooms","shrouds","shroudy","shroved","shroves","shrowed","shrubby","shtchis","shtetel","shtetls","shticks","shticky","shtooks","shtucks","shucked","shucker","shudder","shuffle","shuftis","shuling","shunned","shunner","shunted","shunter","shushed","shusher","shushes","shuteye","shuting","shutoff","shutout","shutter","shuttle","shylock","shyness","shypoos","shyster","sialids","sialoid","sialons","siamang","siamese","siameze","sibling","sibship","sibylic","siccing","siccity","sichted","sickbay","sickbed","sickees","sickens","sickest","sickies","sicking","sickish","sickled","sickles","sickout","siclike","siddhas","siddhis","siddurs","sidearm","sidebar","sidecar","sideman","sidemen","sideral","sideway","sidings","sidlers","sidling","siecles","siegers","sieging","siemens","sienite","siennas","sierran","sierras","siestas","sievert","sieving","sifakas","siffled","siffles","sifters","sifting","siganid","sighers","sighful","sighing","sighted","sighter","sightly","sigmate","sigmoid","signage","signals","signary","signees","signers","signets","signeur","signify","signing","signior","signora","signore","signori","signors","signory","silaged","silages","silanes","silence","silenes","silents","silenus","silesia","silexes","silicas","silicic","silicle","silicon","siliqua","silique","silkens","silkier","silkies","silkily","silking","sillers","sillier","sillies","sillily","sillock","siloing","silphia","siltier","silting","silurid","silvans","silvern","silvers","silvery","silvics","simarre","simatic","simians","similar","similes","similor","simioid","simious","simitar","simkins","simlins","simmers","simnels","simooms","simoons","simorgs","simpais","simpers","simpkin","simpled","simpler","simples","simplex","simular","simurgh","simurgs","sincere","sinding","sindons","sinewed","singers","singing","singled","singles","singlet","singult","sinical","sinkage","sinkers","sinkier","sinking","sinless","sinners","sinnets","sinning","sinopia","sinopie","sinopis","sinsyne","sinters","sintery","sinuate","sinuose","sinuous","sinuses","siphons","sippers","sippets","sipping","sippled","sipples","sircars","sirdars","sirenic","sirgang","sirkars","sirloin","sirname","sirocco","siroset","sirrahs","sirrees","sirring","siruped","siskins","sissier","sissies","sissoos","sisters","sisting","sistrum","sitcoms","sitella","sitfast","sithens","sithing","sitreps","sittars","sitters","sittine","sitting","situate","situlae","situses","sixaine","sixains","sixfold","sixteen","sixthly","sixties","sizable","sizably","sizeism","sizeist","siziest","sizings","sizisms","sizists","sizzled","sizzler","sizzles","sjambok","skailed","skaiths","skaldic","skanger","skanked","skanker","skarths","skaters","skating","skatole","skatols","skeanes","skeared","skeeing","skeered","skeeter","skegger","skeined","skelder","skellie","skellum","skelped","skelpit","skelter","skelums","skenned","skepful","skepped","skepsis","skeptic","skerred","sketchy","sketted","skewers","skewest","skewing","skiable","skibobs","skidded","skidder","skiddoo","skidlid","skidoos","skidpan","skidway","skieyer","skiffed","skiffle","skiings","skilful","skilled","skillet","skimmed","skimmer","skimmia","skimped","skinful","skinked","skinker","skinned","skinner","skinter","skipped","skipper","skippet","skirled","skirred","skirret","skirted","skirter","skiting","skitter","skittle","skivers","skivier","skiving","skiwear","sklated","sklates","sklents","skliffs","skoaled","skoffed","skolion","skolled","skollie","skookum","skoshes","skreegh","skreens","skreigh","skriech","skriegh","skriked","skrikes","skrimps","skrumps","skryers","skrying","skudler","skugged","skulked","skulker","skulled","skulpin","skummer","skunked","skuttle","skyborn","skycaps","skyclad","skydive","skydove","skyfing","skyhome","skyhook","skyiest","skyjack","skylabs","skylark","skylike","skyline","skyphoi","skyphos","skyring","skysail","skysurf","skyting","skywalk","skyward","skyways","slabbed","slabber","slacked","slacken","slacker","slackly","sladang","slagged","slainte","slairgs","slakers","slaking","slaloms","slammed","slammer","slander","slanged","slanger","slanted","slanter","slantly","slapped","slapper","slarted","slashed","slasher","slashes","slaters","slather","slatier","slating","slatted","slatter","slavers","slavery","slaveys","slaving","slavish","slayers","slaying","sleaved","sleaves","sleazes","sledded","sledder","sledged","sledger","sledges","sleechy","sleeked","sleeken","sleeker","sleekit","sleekly","sleeper","sleepry","sleeted","sleeved","sleever","sleeves","sleided","sleighs","sleight","slender","slenter","sleuths","slewing","slicers","slicing","slicked","slicken","slicker","slickly","slidden","slidder","sliders","sliding","slieves","slights","slimier","slimily","sliming","slimmed","slimmer","slimpsy","slinger","slinked","slinker","slinter","sliotar","sliping","slipout","slipped","slipper","slipups","slipway","slishes","slither","slitted","slitter","slivers","sliving","slobber","slocken","slogans","slogged","slogger","slokens","sloomed","slopers","slopier","sloping","slopped","slormed","sloshed","sloshes","slothed","slotted","slotter","slouchy","sloughs","sloughy","slovens","slowest","slowing","slowish","slubbed","slubber","sludged","sludges","slueing","sluffed","slugged","slugger","sluiced","sluices","slumber","slumbry","slumgum","slumism","slummed","slummer","slumped","slurban","slurped","slurper","slurred","slushed","slushes","slutchy","slyness","smaaked","smacked","smacker","smalled","smaller","smalmed","smaltos","smaragd","smarmed","smarted","smarten","smarter","smartie","smartly","smashed","smasher","smashes","smashup","smatter","smeared","smearer","smeaths","smectic","smeddum","smeeked","smeeths","smegmas","smelled","smeller","smelted","smelter","smerked","smeuses","smicker","smicket","smickly","smidgen","smidges","smidgin","smights","smilers","smilets","smileys","smiling","smirked","smirker","smirred","smiters","smithed","smiting","smitted","smitten","smittle","smocked","smoiled","smoiles","smokeho","smokers","smokier","smokies","smokily","smoking","smolder","smoochy","smoodge","smooged","smooges","smoored","smooted","smooths","smoothy","smoring","smother","smoused","smouser","smouses","smouted","smoyled","smoyles","smritis","smudged","smudger","smudges","smugged","smugger","smuggle","smurred","smushed","smushes","smutchy","smutted","smytrie","snabble","snacked","snacker","snaffle","snafued","snagged","snailed","snakier","snakily","snaking","snakish","snapped","snapper","snaptin","snarers","snarfed","snarier","snaring","snarled","snarler","snarred","snashed","snashes","snastes","snatchy","snathes","snawing","sneaked","sneaker","sneaped","sneaths","snebbed","snebbes","snecked","snedded","sneeing","sneered","sneerer","sneezed","sneezer","sneezes","snelled","sneller","snibbed","snicked","snicker","snicket","snidely","snidest","snidier","sniding","sniffed","sniffer","sniffle","sniffly","snifted","snifter","snigged","snigger","sniggle","sniglet","snipers","snipier","sniping","snipped","snipper","snippet","snirtle","snitchy","snivels","snodded","snodder","snoddit","snogged","snoking","snooded","snooked","snooker","snooled","snooped","snooper","snooted","snoozed","snoozer","snoozes","snoozle","snorers","snoring","snorkel","snorted","snorter","snotted","snotter","snottie","snouted","snowcap","snowcat","snowier","snowily","snowing","snowish","snowked","snowman","snowmen","snubbed","snubber","snubbes","snudged","snudges","snuffed","snuffer","snuffle","snuffly","snugged","snugger","snuggle","snushed","snushes","snuzzle","soakage","soakers","soaking","soapbox","soapers","soapier","soapies","soapily","soaping","soarers","soaring","sobbers","sobbing","sobered","soberer","soberly","soboles","socager","socages","soccage","soccers","socials","sociate","society","sockets","sockeye","socking","sockman","sockmen","sodaine","soddens","soddier","soddies","sodding","sodgers","sodiums","sofabed","soffits","softens","softest","softies","softing","softish","soggier","soggily","sogging","soignee","soilage","soilier","soiling","soilure","soirees","sojourn","sokaiya","sokeman","sokemen","solaced","solacer","solaces","solands","solanin","solanos","solanum","solaria","solated","solates","solatia","soldado","soldans","solders","soldier","soleras","soleret","solfege","solicit","solider","solidly","solidum","solidus","solions","soliped","soliton","solives","sollars","sollers","soloing","soloist","soluble","solubly","solunar","solutes","solvate","solvent","solvers","solving","somatic","sombers","sombred","sombrer","sombres","someday","somehow","someone","someway","somewhy","somital","somites","somitic","somnial","sonance","sonancy","sonants","sonatas","sondage","sondeli","sonders","soneris","songful","songkok","songman","songmen","sonhood","sonless","sonlike","sonnets","sonnies","sonovox","sonship","sonsier","sontags","sonties","soogeed","soogees","soogied","soogies","soojeys","sooking","sooling","sooming","sooners","soonest","sooping","soothed","soother","soothes","soothly","sootier","sootily","sooting","sophies","sophism","sophist","sopited","sopites","soppier","soppily","sopping","soprani","soprano","sorages","sorbate","sorbent","sorbets","sorbing","sorbite","sorbose","sorcery","sordine","sordini","sordino","sordors","soredia","sorehon","sorells","sorexes","sorghos","sorghum","sorings","sorites","soritic","sorners","sorning","soroban","soroche","sororal","soroses","sorosis","sorrels","sorrier","sorrily","sorrows","sortals","sorters","sortied","sorties","sorting","sosatie","sossing","sotting","sottish","souaris","soubise","soucars","soucing","soudans","souffle","soughed","souking","soukous","souldan","soulful","souming","sounded","sounder","soundly","soupcon","soupers","soupfin","soupier","souping","soupled","souples","sourced","sources","sourest","souring","sourish","sourock","sourses","soursop","sousing","souslik","soutane","soutars","souters","southed","souther","souties","soviets","sovkhoz","sovrans","sowable","sowarry","sowback","sowcars","sowcing","sowffed","sowfing","sowings","sowling","sowming","sownded","sowsing","sowssed","sowsses","sowters","sowthed","soybean","soymilk","soyuzes","sozines","sozzled","sozzles","spacers","spacial","spacier","spacing","spackle","spaders","spadger","spading","spadoes","spaeing","spaeman","spaemen","spagged","spahees","spained","spaings","spairge","spalled","spaller","spalles","spalted","spambot","spammed","spammer","spammie","spancel","spandex","spanged","spangle","spangly","spaniel","spaning","spanked","spanker","spanned","spanner","sparely","sparers","sparest","sparged","sparger","sparges","sparids","sparing","sparked","sparker","sparkes","sparkie","sparkle","sparkly","sparoid","sparred","sparrer","sparres","sparrow","sparser","spartan","sparthe","sparths","spasmed","spasmic","spastic","spathal","spathed","spathes","spathic","spatial","spatted","spattee","spatter","spatula","spatule","spatzle","spaulds","spavies","spaviet","spavins","spawled","spawned","spawner","spayads","spaying","spazzed","spazzes","speaker","speaned","speared","spearer","specced","special","species","specify","specked","speckle","specter","spectra","spectre","specula","speeded","speeder","speedos","speedup","speeled","speeler","speered","speiled","speired","speises","spelded","spelder","speldin","spelean","spelled","speller","spelter","spelunk","spencer","spences","spender","spenses","speoses","spermic","sperred","sperres","spersed","sperses","sperthe","spewers","spewier","spewing","sphaere","sphaers","spheare","sphears","sphenes","sphenic","spheral","sphered","spheres","spheric","spicate","spicers","spicery","spicier","spicily","spicing","spicker","spicula","spicule","spiders","spidery","spiegel","spieled","spieler","spiered","spiffed","spights","spignel","spigots","spikers","spikery","spikier","spikily","spiking","spiling","spilite","spilled","spiller","spilths","spinach","spinage","spinals","spinars","spinate","spindle","spindly","spinels","spinets","spinier","spinner","spinnet","spinney","spinode","spinoff","spinone","spinoni","spinors","spinose","spinous","spinout","spintos","spinula","spinule","spiraea","spirals","spirant","spireas","spireme","spirems","spirics","spirier","spiring","spirits","spirity","spiroid","spirted","spirtle","spirula","spitals","spiting","spitted","spitten","spitter","spittle","spitzes","splakes","splashy","splatch","splayed","spleens","spleeny","splenia","splenic","splenii","splents","spliced","splicer","splices","spliffs","splined","splines","splints","splodge","splodgy","sploosh","splores","splotch","splurge","splurgy","spodium","spoiled","spoiler","spoking","spondee","spondyl","sponged","sponger","sponges","spongin","sponsal","sponson","sponsor","spoofed","spoofer","spooked","spooled","spooler","spoomed","spooned","spooney","spoored","spoorer","sporing","sporoid","sporran","sported","sporter","sportif","sporule","sposhes","spotlit","spotted","spotter","spottie","spousal","spoused","spouses","spouted","spouter","sprains","spraint","sprangs","sprawls","sprawly","sprayed","sprayer","sprayey","spreads","spreagh","spreaze","spredde","spredds","spreeze","spriest","spriggy","spright","springe","springs","springy","sprints","sprites","sprouts","spruced","sprucer","spruces","spruiks","spruits","spryest","spudded","spudder","spuddle","spueing","spulyed","spulyes","spulyie","spulzie","spumier","spuming","spumone","spumoni","spumous","spunges","spunked","spunkie","spurges","spuriae","spurned","spurner","spurnes","spurred","spurrer","spurrey","spurted","spurter","spurtle","spurway","sputnik","sputter","spyhole","spyings","spyware","squabby","squacco","squaddy","squails","squalid","squalls","squally","squalor","squamae","squames","squared","squarer","squares","squarks","squashy","squatly","squatty","squawks","squawky","squeaks","squeaky","squeals","squeeze","squeezy","squelch","squidge","squidgy","squiers","squiffy","squilla","squills","squinch","squinny","squints","squinty","squired","squires","squirms","squirmy","squirrs","squirts","squishy","squitch","squoosh","sraddha","sradhas","stabbed","stabber","stabile","stabled","stabler","stables","stachys","stacked","stacker","stacket","stackup","stactes","staddas","staddle","stadial","stadias","stadium","staffed","staffer","stagers","stagery","stagged","stagger","staggie","stagier","stagily","staging","staider","staidly","stained","stainer","staired","staithe","staiths","staking","stalags","stalely","stalest","staling","stalked","stalker","stalled","stamens","stamina","stammel","stammer","stamnoi","stamnos","stamped","stamper","stances","standby","standee","standen","stander","standup","stanged","staniel","stanine","staning","stanked","stannel","stannic","stannum","stanols","stanyel","stanzas","stanzes","stanzos","stapled","stapler","staples","stapped","stapple","starchy","stardom","starers","starets","staretz","staring","starked","starken","starker","starkly","starlet","starlit","starned","starnie","starred","started","starter","startle","startly","startsy","startup","starved","starver","starves","stashed","stashes","stashie","stasima","statant","stately","staters","statice","statics","stating","statins","station","statism","statist","stative","stators","statuas","statued","statues","stature","statusy","statute","staunch","staving","stawing","stayers","staying","stayned","staynes","stayres","steaded","stealed","stealer","steales","stealth","steamed","steamer","steamie","steaned","steanes","steared","steares","stearic","stearin","stedded","steddes","steding","steeded","steeked","steekit","steeled","steelie","steemed","steened","steeped","steepen","steeper","steeple","steeply","steepup","steered","steerer","steeved","steever","steeves","steined","stelene","stellar","stellas","stelled","stembok","steming","stemlet","stemmas","stemmed","stemmer","stemmes","stempel","stemple","stemson","stenchy","stencil","stended","stengah","stenned","stenoky","stented","stentor","stepney","stepped","stepper","steppes","stepson","stereos","sterile","sterlet","sternal","sterned","sterner","sternly","sternum","steroid","sterols","stertor","sterved","sterves","stetson","stetted","stevens","steward","stewbum","stewers","stewier","stewing","stewpan","stewpot","steyest","sthenia","sthenic","stibble","stibial","stibine","stibium","stichic","stichoi","stichos","sticked","sticker","stickit","stickle","stickum","stickup","stiddie","stiever","stiffed","stiffen","stiffer","stiffie","stiffly","stifled","stifler","stifles","stigmal","stigmas","stigmes","stilets","stiling","stilled","stiller","stilted","stilter","stimied","stimies","stiming","stimuli","stinged","stinger","stingos","stinker","stinted","stinter","stipels","stipend","stipple","stipule","stiring","stirpes","stirrah","stirras","stirred","stirrer","stirres","stirrup","stishie","stivers","stivier","stiving","stobbed","stocked","stocker","stodged","stodger","stodges","stogeys","stogies","stoical","stoited","stoiter","stokers","stoking","stokvel","stollen","stolons","stomach","stomack","stomata","stomate","stomium","stomped","stomper","stompie","stonern","stoners","stonied","stonier","stonies","stonily","stoning","stonish","stonked","stonker","stonned","stonnes","stooden","stooged","stooges","stooked","stooker","stookie","stooled","stoolie","stooped","stooper","stoopes","stopers","stopgap","stoping","stopoff","stopped","stopper","stopple","storage","storers","storeys","storges","storied","stories","storing","stormed","stormer","stosses","stotins","stotted","stotter","stottie","stounds","stoures","stourie","stouten","stouter","stouths","stoutly","stovers","stovies","stoving","stowage","stowers","stowing","stownds","stowres","strafed","strafer","strafes","straffs","straiks","strains","straint","straits","straked","strakes","stramps","strands","strange","strappy","stratal","stratas","straths","stratum","stratus","strawed","strawen","strayed","strayer","strayve","streaks","streaky","streams","streamy","streeks","streels","streets","streety","strenes","stretch","stretta","strette","stretti","stretto","strewed","strewer","strewth","striata","striate","stricks","strider","strides","stridor","strifes","strifts","strigae","strigil","striker","strikes","strings","stringy","striped","striper","stripes","stripey","strived","striven","striver","strives","stroams","strobed","strobes","strobic","strobil","strodle","stroked","stroken","stroker","strokes","strolls","stromal","strombs","stronds","strooke","strophe","stroppy","strouds","stroups","strouts","strowed","strower","stroyed","stroyer","strudel","strumae","strumas","strunts","stubbed","stubbie","stubble","stubbly","stuccos","studded","studden","studdie","studdle","student","studied","studier","studies","studios","stuffed","stuffer","stuiver","stumble","stumbly","stumers","stummed","stummel","stumped","stumper","stunned","stunner","stunted","stupefy","stupent","stupids","stuping","stupors","sturmer","sturnus","sturted","stushie","stutter","stygian","stylate","stylers","stylets","stylier","styling","stylise","stylish","stylist","stylite","stylize","styloid","stylops","stymied","stymies","styming","stypsis","styptic","styrene","styring","styting","suasion","suasive","suasory","suavely","suavest","suavity","subacid","subacts","subadar","subalar","subaqua","subarea","subarid","subatom","subbase","subbass","subbies","subbing","subcell","subclan","subcode","subcool","subcult","subdean","subdebs","subdews","subdual","subduce","subduct","subdued","subduer","subdues","subecho","subedar","subedit","suberic","suberin","subfeus","subfile","subfusc","subfusk","subgoal","subgums","subhead","subidea","subitem","subject","subjoin","sublate","sublets","sublime","subline","sublots","submenu","submiss","submits","subnets","suboral","suborns","suboval","subpart","subpena","subplot","subrace","subrent","subring","subrule","subsale","subsect","subsere","subsets","subside","subsidy","subsist","subsite","subsoil","subsong","subsume","subtack","subtask","subtaxa","subteen","subtend","subtest","subtext","subtile","subtler","subtone","subtype","subunit","suburbs","subvene","subvert","subways","subzero","subzone","succade","succahs","succeed","success","succise","succors","succory","succose","succoth","succour","succous","succuba","succubi","succumb","succuss","suckens","suckers","suckets","suckier","sucking","suckled","suckler","suckles","sucrase","sucrier","sucrose","suction","sudamen","sudaria","sudated","sudates","suddens","sudders","sudoral","sudsers","sudsier","sudsing","sueable","sueding","suetier","suffari","suffect","suffers","suffete","suffice","suffuse","sugared","sugarer","suggest","sugging","sughing","suicide","suidian","suiplap","suiters","suiting","suitors","sukkahs","sukkoth","sulcate","suldans","sulfate","sulfide","sulfids","sulfite","sulfone","sulfurs","sulfury","sulkers","sulkier","sulkies","sulkily","sulking","sullage","sullens","sullied","sullies","sulphas","sulphid","sulphur","sultana","sultans","sumachs","sumatra","sumless","summand","summary","summate","summats","summers","summery","summing","summist","summits","summons","sumoist","sumpits","sumpter","sunback","sunbake","sunbath","sunbeam","sunbeat","sunbeds","sunbelt","sunbird","sunbows","sunburn","sundaes","sundari","sundeck","sunders","sundews","sundial","sundogs","sundown","sundras","sundris","sunfast","sunfish","sungars","sunglow","sunhats","sunkets","sunkies","sunlamp","sunland","sunless","sunlike","sunnahs","sunnier","sunnies","sunnily","sunning","sunrays","sunrise","sunroof","sunroom","sunsets","sunspot","sunstar","sunsuit","suntans","suntrap","sunward","sunwise","supawns","supered","supines","suppawn","suppers","supping","suppled","suppler","supples","support","suppose","supreme","supremo","suramin","surance","surbase","surbate","surbeds","surcoat","surculi","surdity","surface","surfeit","surfers","surfier","surfies","surfing","surfman","surfmen","surgent","surgeon","surgers","surgery","surgier","surging","surimis","surlier","surlily","surloin","surmise","surname","surpass","surplus","surreal","surreys","surtout","surveil","surveys","surview","survive","susliks","suspect","suspend","suspens","suspire","sussing","sustain","sutlers","sutlery","suttees","suttled","suttles","sutural","sutured","sutures","svelter","swabbed","swabber","swabbie","swacked","swaddie","swaddle","swagers","swagged","swagger","swaggie","swaging","swagman","swagmen","swalier","swaling","swallet","swallow","swamies","swamped","swamper","swanked","swanker","swankey","swankie","swanned","swannie","swanpan","swapped","swapper","swarded","swarfed","swarmed","swarmer","swarths","swarthy","swarved","swarves","swashed","swasher","swashes","swathed","swather","swathes","swatted","swatter","swayers","swayful","swaying","swayled","swazzle","swealed","sweards","swearer","sweated","sweater","swedger","sweeing","sweeled","sweeney","sweeper","sweered","sweeted","sweeten","sweeter","sweetie","sweetly","sweired","sweirer","swelled","sweller","swelted","swelter","sweltry","swerfed","swerved","swerver","swerves","swevens","sweying","swidden","swifted","swifter","swiftie","swiftly","swigged","swigger","swilers","swilled","swiller","swimmer","swindge","swindle","swinery","swingby","swinged","swinger","swinges","swingle","swinish","swinked","swinker","swinney","swipers","swipier","swiping","swiples","swipple","swirled","swished","swisher","swishes","swisses","switchy","swither","swithly","switses","swivels","swivets","swiving","swizzed","swizzes","swizzle","swobbed","swobber","swoffer","swollen","swooned","swooner","swooped","swooper","swopped","swopper","sworded","sworder","swotted","swotter","swounds","swouned","swounes","swownds","swownes","swozzle","sybotic","syconia","sycoses","sycosis","syenite","syllabi","sylphic","sylphid","sylvans","sylvias","sylvine","sylvins","sylvite","symbion","symbiot","symbole","symbols","symitar","symptom","synagog","synanon","synapse","synapte","synaxes","synaxis","syncarp","synched","synchro","syncing","syncoms","syncope","syndets","syndics","synding","synergy","syneses","synesis","synfuel","syngamy","synodal","synodic","synonym","synovia","synrocs","syntagm","syntans","synteny","synthon","syntony","synurae","syphers","syphons","syrette","syringa","syringe","syrphid","syruped","systems","systole","systyle","syzygal","tabanid","tabards","tabaret","tabbied","tabbies","tabbing","taberds","tabered","tabetic","tabinet","tableau","tablets","tablier","tabling","tabloid","tabooed","tabored","taborer","taboret","taborin","tabouli","tabours","tabrere","tabrets","tabuing","tabulae","tabular","tabulis","tachina","tachism","tachist","tachyon","tacitly","tackers","tackets","tackety","tackier","tackies","tackify","tackily","tacking","tackled","tackler","tackles","tacnode","tacrine","tactful","tactics","tactile","taction","tactism","tactual","taddies","tadpole","taedium","taeniae","taenias","taffeta","taffety","taffias","taffies","tagetes","taggant","taggees","taggers","taggier","tagging","tagines","taglike","tagline","tagmata","tagmeme","tagrags","taguans","tahinas","tahinis","tahsils","taiahas","taigled","taigles","tailard","tailers","tailfan","tailfin","tailfly","tailing","tailles","taillie","tailors","tailyes","tailzie","tainted","taipans","taishes","taivers","taivert","tajines","takable","takahes","takeoff","takeout","takeups","takiest","takings","takkies","talants","talaria","talaunt","talayot","talbots","talcier","talcing","talcked","talcose","talcous","talcums","taleful","talents","talions","talipat","taliped","talipes","talipot","talkbox","talkers","talkier","talkies","talking","tallage","tallats","tallboy","tallent","tallest","tallets","tallied","tallier","tallies","tallish","tallith","tallits","tallols","tallots","tallows","tallowy","tallyho","talmuds","taloned","talooka","talukas","taluses","talwegs","tamable","tamales","tamandu","tamanus","tamarao","tamaras","tamarau","tamarin","tamaris","tamasha","tambacs","tambaks","tambala","tambers","tambour","tambura","tamburs","tameins","tamines","tamings","tamises","tammars","tammied","tammies","tampala","tampans","tampers","tamping","tampion","tampons","tanadar","tanager","tanagra","tanbark","tandems","tandoor","tangelo","tangent","tanghin","tangier","tangies","tanging","tangled","tangler","tangles","tangoed","tangram","tanguns","tanists","taniwha","tankage","tankard","tankers","tankful","tankias","tankies","tanking","tankini","tanling","tannage","tannahs","tannate","tanners","tannery","tannest","tannies","tanning","tannins","tannish","tannoys","tanrecs","tansies","tantara","tantivy","tantony","tantras","tantric","tantrum","tanukis","tanyard","taongas","tapalos","tapered","taperer","tapetal","tapetis","tapetum","taphole","tapioca","tapises","tapists","taplash","tappers","tappets","tappice","tapping","taproom","taproot","tapsman","tapsmen","tapster","tapstry","tapuing","taraire","taramas","taramea","tarands","tarboys","tarbush","tarcels","tardied","tardier","tardies","tardily","tardive","tardyon","targets","targing","tariffs","tarings","tarmacs","tarnish","tarpans","tarpons","tarried","tarrier","tarries","tarring","tarrock","tarrows","tarsals","tarseal","tarsels","tarsias","tarsier","tartana","tartane","tartans","tartare","tartars","tartest","tartier","tartily","tartine","tarting","tartish","tartlet","tartufe","tarweed","tarzans","tasered","tashing","taskbar","taskers","tasking","taslets","tassell","tassels","tassets","tassies","tasters","tastier","tastily","tasting","tatamis","tathing","tatlers","tatouay","tatsois","tatters","tattery","tattier","tatties","tattily","tatting","tattled","tattler","tattles","tattoos","tattows","tatuing","tauhinu","tauiwis","taunted","taunter","taupata","taupies","taurean","taurine","tautaug","tautens","tautest","tauting","tautogs","tavered","taverna","taverns","tawhais","tawhiri","tawiest","tawings","tawneys","tawnier","tawnies","tawnily","tawpies","tawsing","tawtier","tawting","taxable","taxably","taxemes","taxemic","taxicab","taxiing","taximan","taximen","taxings","taxites","taxitic","taxiway","taxless","taxpaid","taxwise","taxying","tchicks","teabowl","teacake","teacart","teacher","teaches","teachie","teacups","teagled","teagles","tealike","teamers","teaming","teapots","teapoys","tearers","tearful","teargas","tearier","tearily","tearing","tearoom","teasels","teasers","teashop","teasing","teatime","teaware","teazels","teazing","teazled","teazles","tebbads","techier","techies","techily","technic","technos","teckels","tectite","tectrix","tectums","tedders","teddies","tedding","tedesca","tedesco","tediest","tedious","tediums","teemers","teemful","teeming","teenage","teended","teeners","teenful","teenier","teening","teentsy","teepees","teering","teeters","teethed","teether","teethes","teflons","tegmina","tegulae","tegular","tegumen","teinded","tekkies","tektite","telamon","telecom","teledus","telefax","telegas","teleman","telemen","teleost","teleran","telergy","teleses","telesis","telesms","teletex","telexed","telexes","telfers","telford","tellars","tellens","tellers","tellies","telling","tellins","telnets","telomes","telomic","teloses","telpher","telsons","temblor","temenos","tempehs","tempera","tempers","tempest","temping","templar","templed","temples","templet","tempore","tempted","tempter","tempura","temsing","tenable","tenably","tenaces","tenails","tenancy","tenants","tenches","tendenz","tenders","tending","tendons","tendres","tendril","tendron","tenfold","tenioid","tenners","tennies","tennist","tenoned","tenoner","tenours","tenpins","tenrecs","tensely","tensest","tensile","tensing","tension","tensity","tensive","tensons","tensors","tentage","tenters","tentful","tenthly","tentier","tentigo","tenting","tenuity","tenuous","tenured","tenures","tenutos","tenzons","teopans","tephras","tepider","tepidly","tequila","teraohm","terbias","terbium","tercels","tercets","tercios","terebic","terebra","teredos","terefah","teretes","tergite","termers","terming","termini","termite","termors","ternary","ternate","terning","ternion","terpene","terrace","terrain","terrane","terreen","terrene","terrets","terrier","terries","terrify","terrine","territs","terroir","terrors","tersely","tersest","tersion","tertial","tertian","tertias","tertium","tertius","tessera","testacy","testate","testees","testern","testers","testier","testify","testily","testing","testons","testoon","testril","testudo","tetanal","tetanic","tetanus","tetched","tethers","tetotum","tetract","tetrads","tetrode","tetryls","tetters","teuchat","teucher","teugher","teughly","tewarts","tewhits","texases","texters","textile","texting","textual","texture","thacked","thairms","thalami","thalers","thalian","thallic","thallus","thalweg","thanage","thanahs","thangka","thanked","thankee","thanker","thannah","thannas","thatcht","thatchy","thawers","thawier","thawing","theater","theatre","theaves","thecate","theeing","theeked","theelin","theelol","thegnly","theines","theisms","theists","thelves","themata","theming","thenage","thenars","theolog","theorbo","theorem","theoric","therapy","thereat","thereby","therein","thereof","thereon","thereto","theriac","therian","thermae","thermal","thermel","thermes","thermic","thermit","thermos","theroid","thether","theurgy","thewier","thiamin","thiasus","thiazin","thiazol","thibets","thibles","thicked","thicken","thicker","thicket","thickie","thickly","thickos","thieved","thieves","thigger","thiggit","thighed","thiller","thimble","thinker","thinned","thinner","thiolic","thionic","thionin","thionyl","thirams","thirded","thirdly","thirled","thirsts","thirsty","thistle","thistly","thither","thivels","tholing","thonder","thonged","thorias","thorite","thorium","thorned","thorons","thorpes","thother","thought","thouing","thowels","thralls","thrangs","thraves","thrawed","threads","thready","threaps","threats","threave","threeps","threnes","threnos","thretty","thrifts","thrifty","thrills","thrilly","thrimsa","thrists","thristy","thrived","thriven","thriver","thrives","throats","throaty","thrombi","throned","thrones","throngs","through","thrower","throwes","thrummy","thruput","thrusts","thrutch","thruway","thrymsa","thudded","thuggee","thuggos","thulias","thulite","thulium","thumbed","thumped","thumper","thunder","thunked","thurify","thwacks","thwaite","thwarts","thylose","thymier","thymine","thymols","thyroid","thyrses","thyrsus","thyself","tiaraed","ticcing","tichier","tickens","tickers","tickets","tickeys","tickies","ticking","tickled","tickler","tickles","tictacs","tictocs","tidally","tidbits","tiddier","tiddies","tiddled","tiddler","tiddles","tiddley","tiderip","tideway","tidiers","tidiest","tidings","tidying","tieback","tieless","tiepins","tierced","tiercel","tierces","tiercet","tiering","tierods","tietack","tietacs","tiffany","tiffing","tiffins","tifting","tigerly","tigging","tighten","tighter","tightly","tiglons","tigress","tigrine","tigrish","tigroid","tikanga","tikiing","tilapia","tilbury","tilings","tillage","tillers","tillier","tilling","tillite","tilters","tilting","timarau","timbale","timbals","timbers","timbery","timbral","timbrel","timbres","timeous","timeout","timider","timidly","timings","timists","timolol","timothy","timpana","timpani","timpano","tinajas","tinamou","tincals","tinchel","tincted","tindals","tinders","tindery","tinding","tineids","tinfoil","tinfuls","tinging","tingled","tingler","tingles","tinhorn","tiniest","tinkers","tinking","tinkled","tinkler","tinkles","tinlike","tinners","tinnier","tinnies","tinnily","tinning","tinpots","tinsels","tinseys","tintack","tinters","tintier","tinting","tintype","tinware","tinwork","tipcart","tipcats","tipless","tipoffs","tippees","tippers","tippets","tippier","tipping","tippled","tippler","tipples","tipsier","tipsify","tipsily","tipster","tiptoed","tiptoes","tiptops","tipulas","tipunas","tirades","tirages","tirasse","tireder","tiredly","tirings","tiritis","tirling","tironic","tirring","tirrits","tisanes","tisicks","tissual","tissued","tissues","tissuey","titania","titanic","titanis","titbits","titches","titfers","tithers","tithing","titians","titlark","titlers","titling","titlist","titmice","titmose","titokis","titrant","titrate","titters","titties","titting","tittish","tittled","tittles","tittups","tittupy","titular","tituled","titules","titulus","tituped","tizzies","toadied","toadies","toadish","toasted","toaster","toastie","toazing","tobacco","toccata","toccate","tochers","tockier","tocking","tockley","tocsins","toddies","todding","toddled","toddler","toddles","toebies","toecaps","toeclip","toehold","toeiest","toeless","toelike","toenail","toerags","toeshoe","toetoes","toffees","toffier","toffies","toffish","tofutti","togated","toggers","toggery","togging","toggled","toggler","toggles","toheroa","tohunga","toilers","toilets","toilful","toiling","toisech","toisons","toiting","toitois","tokamak","tokened","tokomak","tolanes","tolarji","toledos","tolidin","tolings","tollage","tollbar","tollers","tollies","tolling","tollman","tollmen","tollway","tolsels","tolseys","tolters","toluate","toluene","toluide","toluids","toluole","toluols","toluyls","tolzeys","tomback","tombacs","tombaks","tombing","tombocs","tombola","tombolo","tomboys","tomcats","tomcods","tomenta","tomfool","tommied","tommies","tomming","tompion","tompons","tomtits","tonally","tondini","tondino","tonearm","tonemes","tonemic","tonepad","tonetic","tonette","tongers","tonging","tongman","tongmen","tongued","tongues","toniest","tonight","tonings","tonites","tonkers","tonking","tonlets","tonnage","tonnags","tonneau","tonnell","tonners","tonnish","tonsils","tonsors","tonsure","tontine","tonuses","tooarts","toolbag","toolbar","toolbox","toolers","tooling","toolkit","toolman","toolmen","toolset","toomest","tooming","toonies","toories","tooshie","tooters","toothed","tooting","tootled","tootler","tootles","tootsed","tootses","tootsie","toparch","topazes","topcoat","topfull","topiary","topical","topkick","topknot","topless","topline","topmast","topmost","toponym","toppers","topping","toppled","topples","topsail","topside","topsman","topsmen","topsoil","topspin","topwork","toquets","toranas","torched","torcher","torches","torchon","tordion","toreros","torgoch","torment","tormina","tornade","tornado","toroids","torpedo","torpefy","torpids","torpors","torqued","torquer","torques","torrefy","torrent","torrets","torrify","torsade","torsels","torsion","torsive","tortile","tortive","tortoni","tortrix","torture","torulae","torulas","torulin","torulus","toshach","toshers","toshier","toshing","tossers","tossier","tossily","tossing","tosspot","tossups","tostada","tostado","totable","totaled","totally","totanus","totaras","totemic","totient","totters","tottery","tottier","totties","totting","toucans","touched","toucher","touches","touchup","toughed","toughen","tougher","toughie","toughly","touking","toupees","toupets","touraco","tourers","touries","touring","tourism","tourist","tourney","tousers","tousier","tousing","tousled","tousles","toustie","touters","toutier","touting","touzier","touzing","touzled","touzles","towable","towages","towards","towaway","towbars","towboat","toweled","towered","towhead","towhees","towiest","towings","towkays","towline","towmond","towmons","towmont","townees","townier","townies","townish","townlet","towpath","towrope","towsack","towsers","towsier","towsing","towting","towzier","towzing","toxemia","toxemic","toxical","toxines","toxoids","toyings","toyless","toylike","toylsom","toyshop","toysome","toytown","tracers","tracery","traceur","trachea","trachle","tracing","tracked","tracker","tracted","tractor","tractus","traders","trading","traduce","traffic","tragedy","tragics","tragule","traiked","traikit","trailed","trailer","trained","trainee","trainer","traipse","traitor","traject","tramcar","tramell","tramels","trammed","trammel","trammie","tramped","tramper","trampet","trample","tramway","tranced","trances","tranche","tranect","trangam","trangle","trankum","trannie","transes","transit","transom","tranted","tranter","trapans","trapeze","traping","trapped","trapper","trashed","trasher","trashes","trasses","traumas","travail","travels","travois","trawled","trawler","trawley","traybit","trayful","trayned","traynes","treacle","treacly","treaded","treader","treadle","treague","treason","treated","treater","trebled","trebles","trecked","treddle","treeing","treetop","treewax","trefoil","trehala","treille","trekked","trekker","trellis","tremble","trembly","tremies","tremolo","tremors","trenail","trended","trenise","trental","trepang","trepans","tressed","tressel","tresses","trestle","trevets","treviss","treybit","triable","triacid","triadic","triaged","triages","triarch","triatic","triaxon","triazin","tribade","tribady","tribals","tribble","triblet","tribune","tribute","tricars","triceps","tricing","tricked","tricker","trickie","trickle","trickly","tricksy","triclad","tricorn","tricots","tridarn","trident","triduan","triduum","triella","trienes","triffer","triffic","triffid","trifled","trifler","trifles","trifold","trifoly","triform","trigamy","trigged","trigger","triglot","trigons","trigram","trijets","trilbys","trilith","trilled","triller","trilobe","trilogy","trimers","trimmed","trimmer","trimtab","trinary","trindle","tringle","trining","trinity","trinket","trinkum","triodes","triolet","triones","trionym","trioses","trioxid","tripack","tripart","tripery","tripier","tripled","triples","triplet","triplex","tripods","tripody","tripoli","tripped","tripper","trippet","tripple","tripses","tripsis","triptan","trireme","trisect","triseme","trishaw","trismic","trismus","trisome","trisomy","trisula","trisuls","tritely","tritest","tritide","tritium","tritoma","tritone","tritons","triumph","triunes","trivets","trivial","trivium","trizone","troades","troaked","troated","trocars","trochal","trochar","trochee","troches","trochil","trochus","trocked","trocken","trodden","troelie","troffer","trogged","trogons","troikas","troilus","troking","troland","trolled","troller","trolley","trollop","tromino","trommel","tromped","trompes","troolie","trooped","trooper","trophic","tropics","tropine","troping","tropins","tropism","tropist","trothed","trotted","trotter","trotyls","trouble","troughs","trouled","troules","trounce","trouped","trouper","troupes","trouser","trouses","trouter","trovers","trowels","trowing","trowths","truancy","truants","trucage","trucial","trucing","trucked","trucker","truckie","truckle","trudged","trudgen","trudger","trudges","trueing","trueman","truemen","truffes","truffle","truisms","trumeau","trumped","trumpet","truncal","trundle","trunked","trunnel","trussed","trusser","trusses","trusted","trustee","truster","trustor","tryings","trymata","tryouts","trypsin","tryptic","trysail","trysted","tryster","trystes","tsaddik","tsaddiq","tsambas","tsantsa","tsardom","tsarina","tsarism","tsarist","tsatske","tsetses","tsigane","tsimmes","tsktsks","tsooris","tsotsis","tsouris","tsunami","tuatara","tuatera","tubages","tubaist","tubbers","tubbier","tubbing","tubbish","tubeful","tubfast","tubfish","tubfuls","tubifex","tubings","tubists","tublike","tubular","tubules","tubulin","tuchuns","tuckers","tuckets","tucking","tuffets","tufters","tuftier","tuftily","tufting","tugboat","tuggers","tugging","tughras","tughrik","tugless","tugriks","tuilles","tuilyie","tuilzie","tuition","tuktoos","tuladis","tulbans","tulchan","tulwars","tumbled","tumbler","tumbles","tumbrel","tumbril","tumesce","tumidly","tummies","tummler","tumoral","tumours","tumpier","tumping","tumshie","tumular","tumults","tumulus","tunable","tunably","tunding","tundish","tundras","tunduns","tuneful","tuneups","tunicae","tunicin","tunicle","tuniest","tunings","tunnage","tunnels","tunnies","tunning","tupelos","tupping","tupunas","turacin","turacos","turacou","turband","turbans","turbant","turbary","turbeth","turbine","turbith","turbits","turbond","turbots","turdine","turdion","turdoid","tureens","turfier","turfing","turfite","turfman","turfmen","turfski","turgent","turgite","turgors","turions","turista","turkeys","turkies","turkois","turmoil","turndun","turners","turnery","turning","turnips","turnkey","turnoff","turnons","turnout","turnups","turpeth","turrets","turtled","turtler","turtles","tusches","tushery","tushies","tushing","tushkar","tushker","tuskars","tuskers","tuskier","tusking","tussahs","tussars","tussehs","tussers","tussive","tussled","tussles","tussock","tussore","tussors","tussuck","tussurs","tutania","tutelar","tutenag","tutored","tutoyed","tutoyer","tutress","tutsans","tutsing","tutties","tutting","tutwork","tuxedos","tuyeres","twaddle","twaddly","twafald","twaites","twanged","twanger","twangle","twankay","twasome","twattle","tweaked","tweaker","tweedle","tweeled","tweener","tweenie","tweered","tweeted","tweeter","tweezed","tweezer","tweezes","twelfth","twelves","twibill","twibils","twicers","twiddle","twiddly","twifold","twigged","twiggen","twigger","twights","twigloo","twilled","twilted","twiners","twinged","twinges","twinier","twining","twinjet","twinked","twinkie","twinkle","twinkly","twinned","twinset","twinter","twiring","twirled","twirler","twiscar","twisted","twister","twistor","twitchy","twitted","twitten","twitter","twizzle","twoccer","twocker","twofers","twofold","twoness","twonies","twoonie","twosome","twyeres","twyfold","tychism","tycoons","tylopod","tyloses","tylosin","tylosis","tylotes","tymbals","tympana","tympani","tympano","tympans","tympany","typable","typebar","typeset","typhoid","typhons","typhoon","typhose","typhous","typical","typiest","typings","typists","typtoed","tyraned","tyranne","tyranny","tyrants","tyrones","tyronic","tysties","tything","tzaddik","tzaddiq","tzardom","tzarina","tzarism","tzarist","tzetses","tzetzes","tzigane","tzigany","tzimmes","tzitzis","tzitzit","uakaris","uberous","udaller","uddered","ufology","ugliest","uglying","uillean","ujamaas","ukelele","ukulele","ulcered","ulexite","ulicons","ulikons","ullaged","ullages","ullings","ulnaria","ulpanim","ulsters","ultimas","ultions","ululant","ululate","umbeled","umbered","umbonal","umbones","umbonic","umbrage","umbrels","umbrere","umbrils","umbrose","umbrous","umfazis","umiacks","umlauts","umlungu","umpired","umpires","umpteen","umwelts","umwhile","unacted","unadded","unadept","unadult","unagile","unaging","unaided","unaimed","unaired","unaking","unakite","unalike","unalist","unalive","unaptly","unarmed","unasked","unawake","unaware","unbaked","unbaled","unbales","unbared","unbares","unbarks","unbased","unbated","unbears","unbeget","unbegot","unbegun","unbeing","unbelts","unbends","unbinds","unbitts","unblent","unbless","unblest","unblind","unblock","unblown","unbolts","unboned","unbones","unboots","unborne","unbosom","unbound","unbowed","unboxed","unboxes","unbrace","unbraid","unbrake","unbroke","unbuild","unbuilt","unbulky","unburnt","uncaged","uncages","uncaked","uncakes","uncanny","uncaped","uncapes","uncarts","uncased","uncases","unceded","unchain","unchair","uncharm","unchary","uncheck","unchild","unchoke","uncials","uncinal","uncinus","uncited","uncivil","unclamp","unclasp","unclean","unclear","uncleft","unclews","uncling","unclips","unclipt","uncloak","unclogs","unclose","uncloud","uncocks","uncoded","uncoest","uncoils","uncolts","uncomic","uncoped","uncopes","uncords","uncorks","uncouth","uncover","uncowls","uncrate","uncrazy","uncross","uncrown","unction","uncuffs","uncurbs","uncured","uncurls","uncurse","undated","undeafs","undealt","undecks","undeify","underdo","undergo","underns","undight","undines","undocks","undoers","undoing","undrape","undrawn","undraws","undress","undrest","undried","undrunk","undular","undying","uneager","uneared","unearth","uneases","uneaten","unedged","unedges","unended","unequal","unfacts","unfaded","unfairs","unfaith","unfaked","unfamed","unfancy","unfazed","unfence","unfeued","unfilde","unfiled","unfired","unfitly","unfixed","unfixes","unflesh","unflush","unfolds","unfools","unforms","unfound","unfreed","unfrees","unfrock","unfroze","unfumed","unfunny","unfurls","unfused","unfussy","ungated","ungears","ungilds","ungirds","ungirth","unglove","unglued","unglues","ungodly","ungored","ungowns","ungrown","unguard","unguent","ungulae","ungular","unguled","ungyved","ungyves","unhable","unhairs","unhands","unhandy","unhangs","unhappy","unhardy","unhasps","unhasty","unheads","unheals","unheard","unheart","unheedy","unheled","unheles","unhelms","unherst","unhinge","unhired","unhitch","unhived","unhives","unhoard","unhoods","unhooks","unhoops","unhoped","unhorse","unhouse","unhuman","unhusks","unibody","unibrow","unicity","unicorn","unideal","uniface","unified","unifier","unifies","uniform","unipeds","unipods","uniquer","uniques","unisize","unisons","unitage","unitard","unitary","uniters","unities","uniting","unition","unitise","unitive","unitize","unjaded","unjoint","unkempt","unkings","unkinks","unknits","unknots","unknown","unlaced","unlaces","unladed","unladen","unlades","unlaste","unlatch","unlawed","unleads","unlearn","unleash","unlevel","unliked","unlikes","unlimed","unlimes","unlined","unlines","unlinks","unlived","unlives","unloads","unlobed","unlocks","unloose","unlords","unloved","unloves","unlucky","unmacho","unmaker","unmakes","unmanly","unmarry","unmasks","unmated","unmeant","unmerry","unmeted","unmewed","unmined","unmiter","unmitre","unmixed","unmixes","unmolds","unmoors","unmoral","unmould","unmount","unmoved","unnails","unnamed","unneath","unnerve","unnests","unnoble","unnoisy","unnoted","unoften","unoiled","unorder","unowned","unpaced","unpacks","unpaged","unpaint","unpanel","unpaper","unpared","unpaved","unperch","unpicks","unpiled","unpiles","unpinkt","unplace","unplait","unplugs","unplumb","unplume","unpoped","unpopes","unposed","unprays","unprops","unpurse","unqueen","unquiet","unquote","unraced","unraked","unrakes","unrated","unravel","unrazed","unready","unreave","unreels","unreeve","unreins","unrests","unright","unrimed","unriper","unrisen","unriven","unrivet","unrobed","unrobes","unrolls","unroofs","unroost","unroots","unroped","unropes","unrough","unround","unroven","unroyal","unruffe","unruled","unrules","unsafer","unsaint","unsated","unsaved","unsawed","unscale","unscary","unscrew","unseals","unseams","unseats","unseels","unseens","unselfs","unsells","unsense","unsewed","unsexed","unsexes","unshale","unshape","unsharp","unshell","unshent","unshewn","unshift","unships","unshoed","unshoes","unshoot","unshorn","unshout","unshown","unshowy","unshuts","unsight","unsinew","unsized","unslain","unslick","unsling","unslung","unsmart","unsmote","unsnags","unsnaps","unsnarl","unsneck","unsober","unsolid","unsoncy","unsonsy","unsoote","unsouls","unsound","unsowed","unspars","unspeak","unspell","unspent","unspide","unspied","unspilt","unsplit","unspoke","unspool","unstack","unstaid","unstate","unsteel","unsteps","unstick","unstock","unstops","unstows","unstrap","unstrip","unstuck","unstuft","unstung","unsuits","unsunny","unsured","unsurer","unswear","unsweet","unswept","unswore","unsworn","untacks","untaken","untamed","untames","untaxed","untaxes","unteach","unteams","untents","untenty","unthaws","unthink","untiled","untiles","untimed","untired","untombs","untoned","untrace","untrack","untread","untride","untried","untrims","untruer","untruly","untruss","untrust","untruth","untucks","untuned","untunes","unturfs","unturns","untwine","untwist","untying","unurged","unusual","unvaile","unvails","unveils","unvexed","unvisor","unvital","unvocal","unvoice","unwaged","unwaked","unwares","unwarie","unwater","unwaxed","unwayed","unweals","unweary","unweave","unweldy","unwhipt","unwhite","unwills","unwinds","unwiped","unwired","unwires","unwiser","unwitch","unwitty","unwived","unwives","unwoman","unwooed","unworks","unworth","unwound","unwoven","unwraps","unwrite","unwrote","unwrung","unyoked","unyokes","unyoung","unzoned","upbears","upbeats","upbinds","upblown","upblows","upboils","upborne","upbound","upbraid","upbrast","upbrays","upbreak","upbring","upbroke","upbuild","upbuilt","upburst","upcasts","upcatch","upcheer","upchuck","upclimb","upclose","upcoast","upcoils","upcomes","upcourt","upcurls","upcurve","updarts","updated","updater","updates","updived","updives","updraft","updrags","updrawn","updraws","updried","updries","upended","upfield","upfills","upfling","upflows","upflung","upfolds","upfront","upfurls","upgangs","upgazed","upgazes","upgirds","upgoing","upgrade","upgrown","upgrows","uphangs","uphauds","upheaps","upheave","uphills","uphoard","uphoist","upholds","uphoord","uphroes","uphurls","upkeeps","upknits","uplands","upleads","upleans","upleant","upleaps","upleapt","uplifts","uplight","uplinks","uploads","uplocks","uplooks","uplying","upmaker","upmakes","uppiled","uppiles","uppings","upprops","upraise","uprated","uprates","upreach","uprears","uprests","upright","uprisal","uprisen","upriser","uprises","uprists","upriver","uproars","uprolls","uproots","uprouse","upscale","upsends","upshift","upshoot","upshots","upsides","upsilon","upsized","upsizes","upskill","upslope","upsoars","upspake","upspeak","upspear","upspoke","upstage","upstair","upstand","upstare","upstart","upstate","upstays","upsteps","upstirs","upstood","upsurge","upswarm","upsways","upsweep","upswell","upswept","upswing","upswung","uptaken","uptakes","uptalks","uptears","uptempo","upthrew","upthrow","upticks","uptight","uptilts","uptimes","uptowns","uptrain","uptrend","upturns","uptying","upvalue","upwafts","upwards","upwells","upwhirl","upwinds","upwound","upwraps","urachus","uracils","uraemia","uraemic","uralite","uranian","uranias","uranide","uranins","uranism","uranite","uranium","uranous","uranyls","urbaner","urceoli","urchins","ureases","uredial","uredine","uredium","ureides","uremias","ureters","urethan","urethra","urgence","urgency","urgings","uricase","uridine","urinals","urinant","urinary","urinate","urining","urinose","urinous","urnfuls","urnings","urnlike","urodele","urolith","urology","uromere","uropods","urosome","urtexts","urticas","usagers","usances","usaunce","useable","useably","usefuls","useless","ushered","ustions","usually","usucapt","usurers","usuress","usuries","usuring","usurous","usurped","usurper","uswards","utensil","uterine","utilise","utility","utilize","utmosts","utopian","utopias","utopism","utopist","utricle","uttered","utterer","utterly","uveitic","uveitis","uvulars","uxorial","vacance","vacancy","vacated","vacates","vacatur","vaccina","vaccine","vacking","vacuate","vacuist","vacuity","vacuole","vacuous","vacuums","vagally","vagging","vaginae","vaginal","vaginas","vagitus","vagrant","vaguely","vaguest","vaguing","vahanas","vahines","vailing","vainest","vairier","vaivode","vakeels","valance","valence","valency","valeric","valetas","valeted","valetes","valgoid","valgous","valiant","valider","validly","valines","valises","valkyrs","vallary","vallate","valleys","vallums","valonea","valonia","valours","valsing","valuate","valuers","valuing","valutas","valvate","valving","valvula","valvule","vamoose","vamosed","vamoses","vampers","vampier","vamping","vampire","vampish","vanadic","vandals","vandyke","vanessa","vanilla","vanitas","vanload","vanners","vanning","vanpool","vantage","vanward","vapider","vapidly","vapored","vaporer","vapours","vapoury","vaquero","vardies","varechs","vareuse","variant","variate","varices","variers","variety","variola","variole","various","varlets","varment","varmint","varnish","varooms","varroas","varsity","varuses","varvels","varying","vascula","vassail","vassals","vastest","vastier","vastity","vatable","vatfuls","vatical","vatters","vatting","vauched","vauches","vaudoos","vaudoux","vaulted","vaulter","vaunced","vaunces","vaunted","vaunter","vauntie","vaurien","vauting","vavasor","vawards","vawntie","vawting","vealers","vealier","vealing","vectors","vedalia","vedette","veejays","veepees","veeries","veering","veganic","vegetal","veggies","vegging","vehicle","veilers","veilier","veiling","veiners","veinier","veining","veinlet","veinous","veinule","velamen","velaria","velaric","velated","velcros","veletas","veliger","velites","vellets","vellons","vellums","velours","veloute","velured","velures","velvets","velvety","venally","venatic","venator","vendace","vendage","vendees","venders","vending","vendiss","vendors","vendues","veneers","venefic","venenes","venerer","venewes","vengers","venging","venines","venires","venison","venites","vennels","venomed","venomer","ventage","ventail","ventana","venters","ventige","ventils","venting","ventose","ventral","ventred","ventres","venture","venturi","venular","venules","venuses","veranda","verbals","verbena","verbids","verbify","verbile","verbing","verbose","verdant","verdets","verdict","verdins","verdite","verdits","verdure","vergers","verging","verglas","veridic","veriest","verismo","verisms","verists","veritas","verites","verlans","vermeil","vermell","vermian","vermils","vermily","vermins","verminy","vermuth","vernant","vernier","veronal","verrels","verruca","verruga","versals","versant","versers","versets","versify","versine","versing","versins","version","verstes","versute","vertigo","verting","vertues","vervain","vervels","vervens","vervets","vesicae","vesical","vesicle","vespers","vespids","vespine","vespoid","vessail","vessels","vestals","vestees","vestige","vesting","vestral","vesture","vetches","veteran","vetiver","vetkoek","vetoers","vetoing","vetters","vetting","vettura","vexedly","vexilla","vexings","viaduct","vialful","vialing","vialled","viatica","viators","vibices","vibiest","vibists","vibrant","vibrate","vibrato","vibrion","vibrios","vicarly","viceroy","vichies","viciate","vicinal","vicious","vicomte","victims","victors","victory","victrix","victual","vicugna","vicunas","vidames","videnda","videoed","vidette","vidicon","vidimus","viduage","viduity","viduous","vielles","viewers","viewier","viewing","vigoros","vigours","viharas","vihuela","vikings","vilayet","viliaco","viliago","village","villain","villans","villany","villein","villose","villous","vimanas","viminal","vinasse","vincula","vinegar","vinewed","viniest","vintage","vinting","vintner","vinylic","violate","violent","violers","violets","violins","violist","violone","viragos","virally","viranda","virando","virelai","virelay","viremia","viremic","viretot","virgate","virgers","virgins","virgule","virinos","virions","viroids","viroses","virosis","virtual","virtues","viruses","visaged","visages","visaing","visards","viscera","viscins","viscoid","viscose","viscous","viscums","viseing","visible","visibly","visiers","visiles","visions","visited","visitee","visiter","visites","visitor","visnomy","visored","vistaed","visuals","vitally","vitamer","vitamin","vitelli","vitesse","vitexes","vitiate","vitrage","vitrail","vitrain","vitraux","vitreum","vitrics","vitrify","vitrine","vitriol","vittate","vittled","vittles","vitular","vivaces","vivaing","vivaria","vivency","viverra","vivider","vividly","vivific","vixenly","vizards","viziers","vizored","vizslas","vizying","vizzied","vizzies","vocable","vocably","vocalic","vocally","vocoder","vocular","vocules","vodouns","voetsak","voetsek","vogiest","voguers","voguier","voguing","voguish","voicers","voicing","voidees","voiders","voiding","voiture","voivode","volable","volante","volatic","volcano","volleys","volosts","volpino","voltage","voltaic","volubil","voluble","volubly","volumed","volumes","voluspa","voluted","volutes","volutin","volvate","volving","volvuli","vomicae","vomicas","vomited","vomiter","vomitos","vomitus","voodoos","vorlage","vorring","votable","voteens","votings","votives","votress","vouched","vouchee","voucher","vouches","voudons","voudoun","voudous","voulges","vouvray","vowelly","vowless","voyaged","voyager","voyages","voyeurs","vroomed","vuggier","vughier","vulcans","vulgars","vulgate","vulning","vulpine","vulture","vulturn","vulvate","vumming","vuttier","vyingly","wabains","wabbled","wabbler","wabbles","wabooms","wabster","wackers","wackest","wackier","wackily","wadable","wadders","waddied","waddies","wadding","waddled","waddler","waddles","wadings","wadmaal","wadmals","wadmels","wadmoll","wadmols","wadsets","wadsett","waeness","waesome","waesuck","wafered","waffies","waffing","waffled","waffler","waffles","waftage","wafters","wafting","wafture","wagered","wagerer","waggers","waggery","wagging","waggish","waggled","waggler","waggles","waggons","wagoned","wagoner","wagsome","wagtail","wahines","waiatas","waifing","waifish","wailers","wailful","wailing","wainage","waining","wairing","wairuas","waisted","waister","waiters","waiting","waitron","waivers","waiving","waivode","waiwode","wakames","wakanda","wakanes","wakeful","wakeman","wakemen","wakened","wakener","wakikis","wakings","waldoes","waliest","walises","walkers","walking","walkout","walkups","walkway","wallaba","wallaby","wallahs","wallers","wallets","walleye","wallier","wallies","walling","wallops","wallows","walnuts","waltier","waltzed","waltzer","waltzes","wambled","wambles","wamefou","wameful","wammuls","wampees","wampish","wampums","wamuses","wanders","wandoos","wangans","wangled","wangler","wangles","wanguns","wanhope","waniest","wanigan","wanings","wanions","wankers","wankier","wanking","wanksta","wannabe","wanness","wannest","wanning","wannish","wantage","wanters","wanties","wanting","wantons","wanzing","wapitis","wappend","wappers","wapping","waragis","waratah","warbier","warbled","warbler","warbles","wardens","warders","wardian","warding","wardogs","wardrop","warehou","warfare","warhead","wariest","warison","warking","warless","warlike","warling","warlock","warlord","warmers","warmest","warming","warmish","warmths","warmups","warners","warning","warpage","warpath","warpers","warping","warrand","warrans","warrant","warrays","warrens","warreys","warring","warrior","warsaws","warship","warsled","warsler","warsles","warstle","warthog","wartier","wartime","warwolf","warwork","warworn","warzone","wasabis","washday","washers","washery","washier","washily","washing","washins","washout","washpot","washrag","washtub","washups","waspier","waspies","waspily","waspish","wassail","wastage","wastels","wasters","wastery","wasting","wastrel","wastrie","watapes","watched","watcher","watches","watchet","watered","waterer","wattage","wattape","wattest","wattled","wattles","wauchts","wauffed","waughed","waughts","waukers","wauking","wauling","waulked","waulker","wauring","wavelet","waveoff","wavered","waverer","waveson","wavicle","waviest","wavings","wawaing","wawling","waxable","waxbill","waxeyes","waxiest","waxings","waxlike","waxweed","waxwing","waxwork","waxworm","waybill","wayfare","waygone","waylaid","waylays","wayless","waymark","wayment","waypost","wayside","wayward","waywode","wayworn","wazzock","weakens","weakest","weakish","weakons","wealths","wealthy","weanels","weaners","weaning","weapons","wearers","wearied","wearier","wearies","wearily","wearing","wearish","weasand","weasels","weasely","weasons","weather","weavers","weaving","weazand","weazens","webbier","webbies","webbing","webcams","webcast","webfeet","webfoot","webinar","webless","weblike","weblish","weblogs","webmail","webpage","website","webster","webwork","webworm","wedders","wedding","wedeled","wedelns","wedgier","wedgies","wedging","wedlock","weeders","weedery","weedier","weedily","weeding","weekday","weekend","weenier","weenies","weening","weepers","weepier","weepies","weepily","weeping","weetest","weeting","weevers","weevils","weevily","weeweed","weewees","weftage","wefting","weigela","weighed","weigher","weights","weighty","weiners","weirded","weirder","weirdie","weirdly","weirdos","weiring","weising","weizing","welaway","welched","welcher","welches","welcome","welders","welding","weldors","welfare","welking","welkins","wellies","welling","welshed","welsher","welshes","welters","welting","wenched","wencher","wenches","wendigo","wending","wennier","wennish","wergeld","wergelt","wergild","wersher","werwolf","wesands","weskits","wessand","western","westers","westies","westing","westlin","wetback","wethers","wetland","wetness","wetsuit","wetters","wettest","wetties","wetting","wettish","wetware","weyward","wezands","whacked","whacker","whackos","whaisle","whaizle","whalers","whalery","whaling","whammed","whammos","whample","whanaus","whangam","whanged","whangee","whapped","whapper","wharfed","wharfie","wharves","whatnot","whatsis","whatsit","whatten","wheaten","wheechs","wheedle","wheeled","wheeler","wheelie","wheenge","wheeped","wheeple","wheesht","wheezed","wheezer","wheezes","wheezle","whelked","whelmed","whelped","whemmle","whences","whenuas","whenwes","whereas","whereat","whereby","wherein","whereof","whereon","whereso","whereto","wherret","wherrit","wherves","whether","whetted","whetter","wheughs","whewing","wheyier","wheyish","whicker","whidahs","whidded","whidder","whiffed","whiffer","whiffet","whiffle","whigged","whilere","whiling","whimmed","whimper","whimple","whimsey","whiners","whinged","whinger","whinges","whinier","whining","whipcat","whipped","whipper","whippet","whipray","whipsaw","whirled","whirler","whirred","whirret","whirtle","whished","whishes","whishts","whisked","whisker","whisket","whiskey","whisper","whissed","whisses","whisted","whistle","whitely","whitens","whitest","whiteys","whither","whitier","whities","whiting","whitish","whitlow","whitret","whittaw","whitter","whittle","whizzed","whizzer","whizzes","whoever","wholism","wholist","whomble","whommle","whomped","whoobub","whoofed","whooped","whoopee","whooper","whoopie","whoopla","whoosis","whooted","whopped","whopper","whoring","whorish","whorled","whortle","whummle","whumped","whupped","whydahs","whyever","wibbled","wibbles","wiccans","wickape","wickeds","wickens","wickers","wickets","wickies","wicking","wickiup","wickyup","widders","widdies","widdled","widdles","widened","widener","wideout","widgeon","widgets","widgies","widowed","widower","wielded","wielder","wieners","wienies","wifedom","wiftier","wigeons","wiggers","wiggery","wiggier","wigging","wiggled","wiggler","wiggles","wighted","wightly","wigless","wiglets","wiglike","wigwags","wigwams","wikiups","wildcat","wilders","wildest","wilding","wildish","wileful","wiliest","willers","willest","willets","willeys","willful","william","willied","willies","willing","willows","willowy","wilting","wiltjas","wimbled","wimbles","wimbrel","wimpier","wimping","wimpish","wimpled","wimples","wincers","winceys","winched","wincher","winches","wincing","windacs","windage","windbag","winders","windgun","windier","windigo","windily","winding","windled","windles","windock","windore","windows","windowy","windrow","windses","windups","windway","winesap","winesop","wingbow","wingers","wingier","winging","winglet","wingman","wingmen","wingtip","winiest","winkers","winking","winkled","winkler","winkles","winless","winnard","winners","winning","winnles","winnock","winnows","winseys","winsome","winters","wintery","wintled","wintles","wipeout","wipings","wippens","wirable","wireman","wiremen","wiretap","wireway","wiriest","wirilda","wirings","wirrahs","wisards","wisdoms","wiseass","wiseguy","wisents","wishers","wishful","wishing","wiskets","wispier","wispily","wisping","wispish","wissing","wistful","wisting","wistiti","witched","witchen","witches","witgats","withers","withier","withies","withing","withins","without","witless","witling","witloof","witness","witneys","witters","wittier","wittily","witting","wittols","witwall","wiverns","wizards","wizened","wiziers","wizzens","woadwax","wobbled","wobbler","wobbles","woeness","woesome","wofully","woggish","woggles","woiwode","wolfers","wolfing","wolfish","wolfkin","wolfram","wollies","wolvers","wolving","wolvish","womaned","womanly","wombats","wombier","wombing","womeras","wommera","wommits","wonders","wondred","wongied","wonings","wonkier","wonners","wonning","wonting","wontons","woobuts","woodbin","woodbox","woodcut","woodens","woodhen","woodier","woodies","wooding","woodlot","woodman","woodmen","woodsia","woodwax","woofers","woofier","woofing","woofter","wooings","woolded","woolder","woolens","woolers","woolfat","woolhat","woolier","woolies","woolled","woollen","woolman","woolmen","woolsey","woomera","wooning","woopies","woopsed","woopses","woorali","woorara","woorari","woosell","woosels","wooshed","wooshes","wootzes","woozier","woozily","wopping","wordage","wordier","wordily","wording","wordish","workbag","workbox","workday","workers","workful","working","workman","workmen","workout","workshy","worktop","workups","worlded","worldly","wormers","wormery","wormfly","wormier","wormils","worming","wormish","worrals","worrels","worried","worrier","worries","worrits","worsens","worsets","worship","worsing","worsted","worthed","wortles","wosbird","wotcher","wottest","wotteth","wotting","woubits","wouldst","wounded","wounder","wourali","wowfest","wowsers","wracked","wraiths","wranged","wrangle","wrapped","wrapper","wrasses","wrassle","wrasted","wrastle","wrathed","wrawled","wraxled","wraxles","wreaked","wreaker","wreathe","wreaths","wreathy","wrecked","wrecker","wrested","wrester","wrestle","wrethed","wrethes","wricked","wriggle","wriggly","wrights","wringed","wringer","wrinkle","wrinkly","writers","writhed","writhen","writher","writhes","writing","written","wrizled","wroaths","wronged","wronger","wrongly","wrooted","wrought","wrybill","wryneck","wryness","wrythen","wudding","wudjula","wulling","wunners","wurleys","wurlies","wurzels","wussier","wussies","wuthers","wuzzled","wuzzles","wysiwyg","wyverns","xantham","xanthan","xanthic","xanthin","xenopus","xerafin","xerarch","xerasia","xeromas","xeroses","xerosis","xerotes","xerotic","xeroxed","xeroxes","xeruses","xiphoid","xylenes","xylenol","xylidin","xylitol","xylogen","xylomas","xylonic","xyloses","xysters","yabbers","yabbied","yabbies","yachted","yachter","yachtie","yackers","yacking","yaffing","yaffles","yaggers","yakhdan","yakkers","yakking","yamalka","yammers","yampies","yamulka","yankers","yankies","yanking","yanquis","yantras","yaourts","yapocks","yappers","yappier","yappies","yapping","yapster","yaqonas","yardage","yardang","yardarm","yarders","yarding","yardman","yardmen","yarking","yarners","yarning","yarphas","yarrans","yarrows","yashmac","yashmak","yasmaks","yatagan","yatters","yaupers","yauping","yaupons","yautias","yawling","yawners","yawnier","yawning","yawpers","yawping","ycleepe","ycleped","yeading","yealdon","yealing","yealmed","yeaning","yearded","yearend","yearned","yearner","yeasted","yeeding","yeelins","yeggman","yeggmen","yellers","yelling","yelloch","yellows","yellowy","yelming","yelpers","yelping","yemmers","yenning","yerding","yerking","yeshiva","yesking","yessing","yestern","yetties","yeuking","yibbles","yickers","yidakis","yielded","yielder","yikkers","yippers","yippies","yipping","yirding","yirking","yirring","ymolten","ynambus","yobbery","yobbish","yobbism","yobboes","yocking","yodeled","yodeler","yodlers","yodling","yoghurt","yoginis","yogisms","yogurts","yohimbe","yoicked","yojanas","yokings","yokking","yolkier","yomping","yonders","yonkers","yonnies","yoppers","yorkers","yorkies","yorking","yorping","youking","younger","youngly","youngth","younker","youpons","youthen","youthly","yowlers","yowleys","yowling","yperite","yplight","ypsilon","yshends","yslaked","yttrias","yttrium","yuckers","yuckier","yucking","yugarie","yukatas","yukiest","yukkier","yukking","yummier","yummies","yumpies","yumping","yuppies","yuppify","zabetas","zabtieh","zacaton","zaddick","zaddiks","zaffars","zaffers","zaffirs","zaffres","zagging","zaikais","zaitech","zakuska","zakuski","zamangs","zamarra","zamarro","zambuck","zambuks","zamouse","zampone","zamponi","zananas","zanders","zanella","zaniest","zanjero","zanying","zanyish","zanyism","zapateo","zappers","zappier","zapping","zaptiah","zaptieh","zarapes","zarebas","zareeba","zaribas","zarnecs","zarnich","zealant","zealful","zealots","zealous","zeatins","zebecks","zebraic","zebrano","zebrass","zebrina","zebrine","zebroid","zebrula","zebrule","zecchin","zechins","zedoary","zelants","zelator","zelkova","zemstva","zemstvo","zenaida","zenanas","zendiks","zeniths","zeolite","zephyrs","zeppole","zeppoli","zerebas","zeribas","zeroing","zesters","zestful","zestier","zestily","zesting","zetetic","zeugmas","zeuxite","zibeths","ziffius","ziganka","zigging","zigzags","zikurat","zilches","zillahs","zillion","zimmers","zimocca","zincate","zincier","zincify","zincing","zincite","zincked","zincode","zincoid","zincous","zingani","zingano","zingara","zingare","zingari","zingaro","zingels","zingers","zingier","zinging","zinkier","zinkify","zinking","zinnias","zipless","ziplock","zippers","zippier","zipping","zircons","zithern","zithers","zizania","zizzing","zizzled","zizzles","zloties","zlotych","zoarial","zoarium","zocalos","zoccolo","zodiacs","zoecium","zoeform","zoisite","zombies","zombify","zonally","zonated","zonings","zonking","zonulae","zonular","zonulas","zonules","zonulet","zonures","zooecia","zoogamy","zoogeny","zooglea","zoogony","zooidal","zooiest","zoolite","zoolith","zoology","zooming","zooning","zoonite","zoonomy","zoopery","zootaxy","zootier","zootomy","zootype","zoozoos","zorbing","zorgite","zorilla","zorille","zorillo","zorinos","zosters","zouaves","zoysias","zuffoli","zuffolo","zydecos","zygomas","zygoses","zygosis","zygotes","zygotic","zymases","zymites","zymogen","zymomes","zymosan","zymoses","zymosis","zymotic","zymurgy","zythums","zyzzyva",
      ],
      Ia = "present",
      Ma = "correct",
      Oa = "absent";
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
    function Pa(e, a) {
      var s = {};
      return (
        e.forEach(function (e, t) {
          if (a[t])
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = a[t][o],
                i = s[n] || "unknown";
              Ra[r] > Ra[i] && (s[n] = r);
            }
        }),
        s
      );
    }
    function $a(e) {
      var a = ["th", "st", "nd", "rd"],
        s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0]);
    }
    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
    function Na(e, a) {
      var s = new Date(e),
        t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.round(t / 864e5);
    }
    function Da(e) {
      var a,
        s = Ga(e);
      return (a = s % La.length), La[a];
    }
    function Ga(e) {
      return Na(Ha, e);
    }	
//Moved array for random letter words - end. 	
    customElements.define("game-tile", v);
    var k = document.createElement("template");
    var w = document.createElement("template");
	var todaysdate = new Date();
          if (window.localStorage.getItem("archiveDate") == null) {
            var todayGame = Ga(new Date()) - 265;
            window.localStorage.setItem("archiveDate", JSON.stringify(new Date(todaysdate.setDate(todaysdate.getDate() - todayGame + 1))));
          } 
	var wordlength = Da(new Date(JSON.parse(window.localStorage.getItem("archiveDate")))).length;
	if (wordlength <= 5){
		var borderradius = 50;
	}
	else if (wordlength == 6){
		var borderradius = 25;
	}	
	else if (wordlength >= 7){
		var borderradius = 0;
	}	
    k.innerHTML =
      "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    border-radius:"+borderradius+"%;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";	
    w.innerHTML =
      '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat('+wordlength+', 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({ mode: "open" }),
          (e._letters = ""),
          (e._evaluation = []),
          e._length,
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "evaluation",
              get: function () {
                return this._evaluation;
              },
              set: function (e) {
                var a = this;
                (this._evaluation = e),
                  this.$tiles &&
                    this.$tiles.forEach(function (e, s) {
                      e.setAttribute("evaluation", a._evaluation[s]),
                        setTimeout(function () {
                          e.setAttribute("reveal", "");
                        }, 300 * s);
                    });
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                  (this.$row = this.shadowRoot.querySelector(".row"));
                for (
                  var a = function (a) {
                      var s = document.createElement("game-tile"),
                        t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) &&
                        (s.setAttribute("evaluation", e._evaluation[a]),
                        setTimeout(function () {
                          s.setAttribute("reveal", "");
                        }, 100 * a));
                      a === e._length - 1 && (s.last = !0),
                        e.$row.appendChild(s);
                    },
                    s = 0;
                  s < this._length;
                  s++
                )
                  a(s);
                (this.$tiles = this.shadowRoot.querySelectorAll("game-tile")),
                  this.addEventListener("animationend", function (a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid");
                  });
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letters":
                    this._letters = s || "";
                    break;
                  case "length":
                    this._length = parseInt(s, 10);
                    break;
                  case "win":
                    if (null === s) {
                      this.$tiles.forEach(function (e) {
                        e.classList.remove("win");
                      });
                      break;
                    }
                    this.$tiles.forEach(function (e, a) {
                      e.classList.add("win"),
                        (e.style.animationDelay = "".concat(100 * a, "ms"));
                    });
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                var e = this;
                this.$row &&
                  this.$tiles.forEach(function (a, s) {
                    var t = e._letters[s];
                    t
                      ? a.setAttribute("letter", t)
                      : a.removeAttribute("letter");
                  });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letters", "length", "invalid", "win"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "archive-darkTheme",
      S = "archive-colorBlindTheme",
      archiveDate = "archiveDate",
      _ = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          if (window.localStorage.getItem(archiveDate) === null) {
            window.localStorage.setItem(archiveDate, JSON.stringify(new Date()));
          }
          var e;
          s(this, t),
            n(p((e = a.call(this))), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({ mode: "open" });
          var o = JSON.parse(window.localStorage.getItem(j)),
            r = window.matchMedia("(prefers-color-scheme: dark)").matches,
            i = JSON.parse(window.localStorage.getItem(S));
          return (
            !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            (!0 !== i && !1 !== i) || e.setColorBlindTheme(i),
            e
          );
        }
        return (
          o(t, [
            {
              key: "setDarkTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode")
                  ? a.classList.add("nightmode")
                  : a.classList.remove("nightmode"),
                  (this.isDarkTheme = e),
                  window.localStorage.setItem(j, JSON.stringify(e));
              },
            },
            {
              key: "setColorBlindTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind")
                  ? a.classList.add("colorblind")
                  : a.classList.remove("colorblind"),
                  (this.isColorBlindTheme = e),
                  window.localStorage.setItem(S, JSON.stringify(e));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked;
                      switch (t) {
                        case "dark-theme":
                          return void e.setDarkTheme(o);
                        case "color-blind-theme":
                          return void e.setColorBlindTheme(o);
                      }
                    }
                  );
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function q(e, a) {
      return e === a || (e != e && a != a);
    }
    function E(e, a) {
      for (var s = e.length; s--; ) if (q(e[s][0], a)) return s;
      return -1;
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (C.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (C.prototype.delete = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return (
          !(s < 0) &&
          (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
        );
      }),
      (C.prototype.get = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return s < 0 ? void 0 : a[s][1];
      }),
      (C.prototype.has = function (e) {
        return E(this.__data__, e) > -1;
      }),
      (C.prototype.set = function (e, a) {
        var s = this.__data__,
          t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
      });
    var L =
        "object" == ("undefined" == typeof global ? "undefined" : a(global)) &&
        global &&
        global.Object === Object &&
        global,
      T =
        "object" == ("undefined" == typeof self ? "undefined" : a(self)) &&
        self &&
        self.Object === Object &&
        self,
      I = L || T || Function("return this")(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      P = O.toString,
      $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : N && N in Object(e)
        ? (function (e) {
            var a = R.call(e, $),
              s = e[$];
            try {
              e[$] = void 0;
              var t = !0;
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? (e[$] = s) : delete e[$]), o;
          })(e)
        : (function (e) {
            return H.call(e);
          })(e);
    }
    function G(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s);
    }
    function B(e) {
      if (!G(e)) return !1;
      var a = D(e);
      return (
        "[object Function]" == a ||
        "[object GeneratorFunction]" == a ||
        "[object AsyncFunction]" == a ||
        "[object Proxy]" == a
      );
    }
    var F,
      W = I["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + F
        : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp(
        "^" +
          K.call(Q)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function ee(e) {
      return (
        !(!G(e) || ((a = e), Y && Y in a)) &&
        (B(e) ? Z : U).test(
          (function (e) {
            if (null != e) {
              try {
                return J.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          })(e)
        )
      );
      var a;
    }
    function ae(e, a) {
      var s = (function (e, a) {
        return null == e ? void 0 : e[a];
      })(e, a);
      return ee(s) ? s : void 0;
    }
    var se = ae(I, "Map"),
      te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    function ie(e, s) {
      var t,
        o,
        n = e.__data__;
      return (
        "string" == (o = a((t = s))) ||
        "number" == o ||
        "symbol" == o ||
        "boolean" == o
          ? "__proto__" !== t
          : null === t
      )
        ? n["string" == typeof s ? "string" : "hash"]
        : n.map;
    }
    function le(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (re.prototype.clear = function () {
      (this.__data__ = te ? te(null) : {}), (this.size = 0);
    }),
      (re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return (this.size -= a ? 1 : 0), a;
      }),
      (re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s;
        }
        return oe.call(a, e) ? a[e] : void 0;
      }),
      (re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e);
      }),
      (re.prototype.set = function (e, a) {
        var s = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a),
          this
        );
      }),
      (le.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (se || C)(),
            string: new re(),
          });
      }),
      (le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return (this.size -= a ? 1 : 0), a;
      }),
      (le.prototype.get = function (e) {
        return ie(this, e).get(e);
      }),
      (le.prototype.has = function (e) {
        return ie(this, e).has(e);
      }),
      (le.prototype.set = function (e, a) {
        var s = ie(this, e),
          t = s.size;
        return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
      });
    function de(e) {
      var a = (this.__data__ = new C(e));
      this.size = a.size;
    }
    (de.prototype.clear = function () {
      (this.__data__ = new C()), (this.size = 0);
    }),
      (de.prototype.delete = function (e) {
        var a = this.__data__,
          s = a.delete(e);
        return (this.size = a.size), s;
      }),
      (de.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (de.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199)
            return t.push([e, a]), (this.size = ++s.size), this;
          s = this.__data__ = new le(t);
        }
        return s.set(e, a), (this.size = s.size), this;
      });
    var ue = (function () {
      try {
        var e = ae(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })();
    function ce(e, a, s) {
      "__proto__" == a && ue
        ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 })
        : (e[a] = s);
    }
    function pe(e, a, s) {
      ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) &&
        ce(e, a, s);
    }
    var me,
      he = function (e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
          var i = n[me ? r : ++t];
          if (!1 === a(o[i], i, o)) break;
        }
        return e;
      },
      ye =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      ge =
        ye &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
      var s,
        t,
        o = a
          ? ((s = e.buffer),
            (t = new s.constructor(s.byteLength)),
            new ke(t).set(new ke(s)),
            t)
          : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length);
    }
    var we = Object.create,
      xe = (function () {
        function e() {}
        return function (a) {
          if (!G(a)) return {};
          if (we) return we(a);
          e.prototype = a;
          var s = new e();
          return (e.prototype = void 0), s;
        };
      })();
    var ze,
      je,
      Se =
        ((ze = Object.getPrototypeOf),
        (je = Object),
        function (e) {
          return ze(je(e));
        }),
      _e = Object.prototype;
    function qe(e) {
      var a = e && e.constructor;
      return e === (("function" == typeof a && a.prototype) || _e);
    }
    function Ee(e) {
      return null != e && "object" == a(e);
    }
    function Ae(e) {
      return Ee(e) && "[object Arguments]" == D(e);
    }
    var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(
        (function () {
          return arguments;
        })()
      )
        ? Ae
        : function (e) {
            return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee");
          },
      Me = Array.isArray;
    function Oe(e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    }
    function Re(e) {
      return null != e && Oe(e.length) && !B(e);
    }
    var Pe =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      $e =
        Pe &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      He = $e && $e.exports === Pe ? I.Buffer : void 0,
      Ne =
        (He ? He.isBuffer : void 0) ||
        function () {
          return !1;
        },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
    var Ye = {};
    (Ye["[object Float32Array]"] =
      Ye["[object Float64Array]"] =
      Ye["[object Int8Array]"] =
      Ye["[object Int16Array]"] =
      Ye["[object Int32Array]"] =
      Ye["[object Uint8Array]"] =
      Ye["[object Uint8ClampedArray]"] =
      Ye["[object Uint16Array]"] =
      Ye["[object Uint32Array]"] =
        !0),
      (Ye["[object Arguments]"] =
        Ye["[object Array]"] =
        Ye["[object ArrayBuffer]"] =
        Ye["[object Boolean]"] =
        Ye["[object DataView]"] =
        Ye["[object Date]"] =
        Ye["[object Error]"] =
        Ye["[object Function]"] =
        Ye["[object Map]"] =
        Ye["[object Number]"] =
        Ye["[object Object]"] =
        Ye["[object RegExp]"] =
        Ye["[object Set]"] =
        Ye["[object String]"] =
        Ye["[object WeakMap]"] =
          !1);
    var Je =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Ue =
        Je &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = (function () {
        try {
          var e = Ue && Ue.require && Ue.require("util").types;
          return e || (Xe && Xe.binding && Xe.binding("util"));
        } catch (e) {}
      })(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke
        ? (function (e) {
            return function (a) {
              return e(a);
            };
          })(Ke)
        : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)];
          };
    function Ze(e, a) {
      if (
        ("constructor" !== a || "function" != typeof e[a]) &&
        "__proto__" != a
      )
        return e[a];
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
      var t = e[a];
      (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
      var t = a(e);
      return (
        !!(s = null == s ? 9007199254740991 : s) &&
        ("number" == t || ("symbol" != t && sa.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < s
      );
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
      var s = Me(e),
        t = !s && Ie(e),
        o = !s && !t && Ne(e),
        n = !s && !t && !o && Qe(e),
        r = s || t || o || n,
        i = r
          ? (function (e, a) {
              for (var s = -1, t = Array(e); ++s < e; ) t[s] = a(s);
              return t;
            })(e.length, String)
          : [],
        l = i.length;
      for (var d in e)
        (!a && !oa.call(e, d)) ||
          (r &&
            ("length" == d ||
              (o && ("offset" == d || "parent" == d)) ||
              (n &&
                ("buffer" == d || "byteLength" == d || "byteOffset" == d)) ||
              ta(d, l))) ||
          i.push(d);
      return i;
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
      if (!G(e))
        return (function (e) {
          var a = [];
          if (null != e) for (var s in Object(e)) a.push(s);
          return a;
        })(e);
      var a = qe(e),
        s = [];
      for (var t in e)
        ("constructor" != t || (!a && ra.call(e, t))) && s.push(t);
      return s;
    }
    function la(e) {
      return Re(e) ? na(e, !0) : ia(e);
    }
    function da(e) {
      return (function (e, a, s, t) {
        var o = !s;
        s || (s = {});
        for (var n = -1, r = a.length; ++n < r; ) {
          var i = a[n],
            l = t ? t(s[i], e[i], i, s, e) : void 0;
          void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
        }
        return s;
      })(e, la(e));
    }
    function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
        l = Ze(a, s),
        d = r.get(l);
      if (d) pe(e, s, d);
      else {
        var u,
          c = n ? n(i, l, s + "", e, a, r) : void 0,
          p = void 0 === c;
        if (p) {
          var m = Me(l),
            h = !m && Ne(l),
            y = !m && !h && Qe(l);
          (c = l),
            m || h || y
              ? Me(i)
                ? (c = i)
                : Ee((u = i)) && Re(u)
                ? (c = (function (e, a) {
                    var s = -1,
                      t = e.length;
                    for (a || (a = Array(t)); ++s < t; ) a[s] = e[s];
                    return a;
                  })(i))
                : h
                ? ((p = !1),
                  (c = (function (e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t;
                  })(l, !0)))
                : y
                ? ((p = !1), (c = ve(l, !0)))
                : (c = [])
              : (function (e) {
                  if (!Ee(e) || "[object Object]" != D(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return (
                    "function" == typeof s && s instanceof s && Be.call(s) == We
                  );
                })(l) || Ie(l)
              ? ((c = i),
                Ie(i)
                  ? (c = da(i))
                  : (G(i) && !B(i)) ||
                    (c = (function (e) {
                      return "function" != typeof e.constructor || qe(e)
                        ? {}
                        : xe(Se(e));
                    })(l)))
              : (p = !1);
        }
        p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
      }
    }
    function ca(e, a, s, t, o) {
      e !== a &&
        he(
          a,
          function (n, r) {
            if ((o || (o = new de()), G(n))) ua(e, a, r, s, ca, t, o);
            else {
              var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
              void 0 === i && (i = n), pe(e, r, i);
            }
          },
          la
        );
    }
    function pa(e) {
      return e;
    }
    function ma(e, a, s) {
      switch (s.length) {
        case 0:
          return e.call(a);
        case 1:
          return e.call(a, s[0]);
        case 2:
          return e.call(a, s[0], s[1]);
        case 3:
          return e.call(a, s[0], s[1], s[2]);
      }
      return e.apply(a, s);
    }
    var ha = Math.max;
    var ya = ue
        ? function (e, a) {
            return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                ((s = a),
                function () {
                  return s;
                }),
              writable: !0,
            });
            var s;
          }
        : pa,
      ga = Date.now;
    var ba = (function (e) {
      var a = 0,
        s = 0;
      return function () {
        var t = ga(),
          o = 16 - (t - s);
        if (((s = t), o > 0)) {
          if (++a >= 800) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
      };
    })(ya);
    function fa(e, a) {
      return ba(
        (function (e, a, s) {
          return (
            (a = ha(void 0 === a ? e.length - 1 : a, 0)),
            function () {
              for (
                var t = arguments,
                  o = -1,
                  n = ha(t.length - a, 0),
                  r = Array(n);
                ++o < n;

              )
                r[o] = t[a + o];
              o = -1;
              for (var i = Array(a + 1); ++o < a; ) i[o] = t[o];
              return (i[a] = s(r)), ma(e, this, i);
            }
          );
        })(e, a, pa),
        e + ""
      );
    }
    var ka,
      va =
        ((ka = function (e, a, s) {
          ca(e, a, s);
        }),
        fa(function (e, s) {
          var t = -1,
            o = s.length,
            n = o > 1 ? s[o - 1] : void 0,
            r = o > 2 ? s[2] : void 0;
          for (
            n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0,
              r &&
                (function (e, s, t) {
                  if (!G(t)) return !1;
                  var o = a(s);
                  return (
                    !!("number" == o
                      ? Re(t) && ta(s, t.length)
                      : "string" == o && (s in t)) && q(t[s], e)
                  );
                })(s[0], s[1], r) &&
                ((n = o < 3 ? void 0 : n), (o = 1)),
              e = Object(e);
            ++t < o;

          ) {
            var i = s[t];
            i && ka(e, i, t, n);
          }
          return e;
        })),
      wa = "archive-gameState",
      xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1,
      };
    function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e);
    }
    function ja(e) {
      var a = za();
      !(function (e) {
        window.localStorage.setItem(wa, JSON.stringify(e));
		e.lastPlayedTs = Date.now();
		saveArchive(e);		
      })(va(a, e));
    }
    var Sa = document.createElement("template");
      Sa.innerHTML =	
		  '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  font-size: 18px; \n }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  .languagebutton {\n      display: inline-block;\n  font-family: Clear Sans, Arial, sans-serif;\n padding: 1px 7px;\n  font-size: 15px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #86888a;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 1px #999;\n     }\n  .languagebutton:hover\n {\n background-color: #FF0000;\n }\n\n .languagebutton:active\n {\n background-color: #FF0000;\n  box-shadow: 0 1px #666;\n  transform: translateY(1px);\n }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved colour vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n     </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:geowordle@gmail.com?subject=Feedback" title="geowordle@gmail.com">Email</a> |\n          <a href="https://twitter.com/IndleGame" target="blank" title="@IndleGame">Twitter</a>\n          \n        </div>\n      </div>\n    </section> \n  <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Indle Game</div>\n <div class="description">Play the daily word for today</div>\n        </div>\n        <div class="control">\n          <a href="https://indlegame.github.io/indle/"target="blank">game.indle.in</a>\n        </div>\n      </div>\n </section><section> \n      <div class="setting">\n        <div class="text">\n          <div class="title">Submit Words</div>\n  <div class="description">Contribute to the Indle Word list</div>\n       </div>\n        <div class="control">\n          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetDCDQF2bbTcMrpFwOQZY9NHz8MSND2Nk-dp5VLZuLoZ1ZPg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"target="blank">Google Forms</a>\n        </div>\n      </div>\n </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="copyright">Powered by code from the original <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a></div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "gameApp", void 0),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e,
                a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                (this.shadowRoot.querySelector("#hash").textContent =
                  null === (e = window.indle) || void 0 === e
                    ? void 0
                    : e.hash),
                (this.shadowRoot.querySelector("#puzzle-number").textContent =
                  "#".concat(this.gameApp.dayOffset - 265)),
                this.shadowRoot.addEventListener(
                  "game-switch-change",
                  function (e) {
                    e.stopPropagation();
                    var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                    a.dispatchEvent(
                      new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: { name: t, checked: o, disabled: n },
                      })
                    ),
                      a.render();
                  }
                ),
                this.render();
            },
          },
          {
            key: "render",
            value: function () {
              (this.shadowRoot.querySelector("#puzzle-number").textContent =
                  "#".concat(this.gameApp.dayOffset - 265));
              var e = document.querySelector("body");
              e.classList.contains("nightmode") &&
                this.shadowRoot
                  .querySelector("#dark-theme")
                  .setAttribute("checked", ""),
                e.classList.contains("colorblind") &&
                  this.shadowRoot
                    .querySelector("#color-blind-theme")
                    .setAttribute("checked", "");
              var a = za();
              a.hardMode &&
                this.shadowRoot
                  .querySelector("#hard-mode")
                  .setAttribute("checked", ""),
                a.hardMode ||
                  "IN_PROGRESS" !== a.gameStatus ||
                  0 === a.rowIndex ||
                  (this.shadowRoot
                    .querySelector("#hard-mode")
                    .removeAttribute("checked"),
                  this.shadowRoot
                    .querySelector("#hard-mode")
                    .setAttribute("disabled", ""));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML =
      '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
      Aa = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_duration", void 0),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                (a.textContent = this.getAttribute("text")),
                  (this._duration = this.getAttribute("duration") || 1e3),
                  "Infinity" !== this._duration &&
                    setTimeout(function () {
                      a.classList.add("fade");
                    }, this._duration),
                  a.addEventListener("transitionend", function (a) {
                    e.parentNode.removeChild(e);
                  });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function Ca() {
      dataLayer.push(arguments);
    }
    customElements.define("game-toast", Aa),
      (window.dataLayer = window.dataLayer || []),
      Ca("js", new Date());
    Ca("config", "G-ZQTQT7VF9F", {
      app_version:
        null === (Ea = window.indle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1,
    });
//Moved array of dictionary from here to top for early definition - this is needed for random letter words. 
    var Ba = "abcdefghijklmnopqrstuvwxyz",
      Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : "_";
      }
      return a;
    }
    var Ya = "archive-statistics",
      Ja = "fail",
      Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0,
      };
    function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e);
    }
    function Va(e) {
      var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
      a
        ? ((o.guesses[t] += 1),
          s ? (o.currentStreak += 1) : (o.currentStreak = 1))
        : ((o.currentStreak = 0), (o.guesses.fail += 1)),
        (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
        (o.gamesPlayed += 1),
        (o.gamesWon += a ? 1 : 0),
        (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
        (o.averageGuesses = Math.round(
          (Object.entries(o.guesses).reduce(function (e, a) {
            var s = y(a, 2),
              t = s[0],
              o = s[1];
            return t !== Ja ? (e += t * o) : e;
          }, 0) / Math.max(o.gamesWon, 1)) * 10
        ) / 10),
        (function (e) {
          window.localStorage.setItem(Ya, JSON.stringify(e));
        })(o);
    }
    function saveArchive(gameApp) {
      var currentGame = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265;
	  //additional check to delete partial entry before moving across levels	  
	  if (gameApp.rowIndex >= 0 && gameApp.boardState[gameApp.rowIndex]){
		  gameApp.boardState[gameApp.rowIndex] = "";
	  }  
	  
      var saveData = {
        rowIndex: gameApp.rowIndex,
        boardState: gameApp.boardState,
        evaluations: gameApp.evaluations,
        gameStatus: gameApp.gameStatus,
        lastPlayedTs: gameApp.lastPlayedTs
      };
      window.localStorage.setItem("archive"+JSON.stringify(currentGame), JSON.stringify(saveData));
    }
    function saveArchiveNoApp() {
      var currentGame = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265;
      var gameState = window.localStorage.getItem("archive-gameState");
     
      if (gameState != null) {
        var gameData = JSON.parse(gameState);
        var saveData = {
          rowIndex: gameData.rowIndex,
          boardState: gameData.boardState,
          evaluations: gameData.evaluations,
          gameStatus: gameData.gameStatus,
          lastPlayedTs: gameData.lastPlayedTs
        };
        window.localStorage.setItem("archive"+JSON.stringify(currentGame), JSON.stringify(saveData));
      }
    }
    var Ka = document.createElement("template");
    if (window.localStorage.getItem("indle-language") == "fr") {
      // FRENCH
      Ka.innerHTML =
        "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: "
          .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
          .concat(
            4e3,
            ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--green);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 26px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  .archivebutton {\n      display: inline-block;\n  font-family: Clear Sans, Arial, sans-serif;\n padding: 1px 5px;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #86888a;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 1px #999;\n     }\n  .archivebutton:hover\n {\n background-color: #FF6600;\n }\n\n .archivebutton:active\n {\n background-color: #FF6600;\n  box-shadow: 0 1px #666;\n  transform: translateY(1px);\n }\n\n @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div id="indle-title" class="title"></div>\n        <div class="menu">\n             <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n     <div style="width=100%;text-align:center"> <button id="first-archive" type="button" class="archivebutton">PREMIER</button> <button id="minus-archive" type="button" class="archivebutton">\<</button> <button id="random-archive" type="button" class="archivebutton">ALÉATOIRE</button>  <button id="plus-archive" type="button" class="archivebutton">\></button>\n <button id="last-archive" type="button" class="archivebutton">DERNIER</button></div> <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
          );
    } else {
      // ENGLISH
      Ka.innerHTML =
        "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: "
          .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
          .concat(
            4e3,
            ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--green);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 26px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  .archivebutton {\n      display: inline-block;\n  font-family: Clear Sans, Arial, sans-serif;\n padding: 1px 5px;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #86888a;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 1px #999;\n     }\n  .archivebutton:hover\n {\n background-color: #FF6600;\n }\n\n .archivebutton:active\n {\n background-color: #FF6600;\n  box-shadow: 0 1px #666;\n  transform: translateY(1px);\n }\n\n @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div id="indle-title" class="title"></div>\n        <div class="menu">\n             <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n     <div style="width=100%;text-align:center"> <button id="first-archive" type="button" class="archivebutton">FIRST</button> <button id="minus-archive" type="button" class="archivebutton">\< PREV&nbsp;</button> <button id="random-archive" type="button" class="archivebutton">RANDOM</button>  <button id="plus-archive" type="button" class="archivebutton">&nbsp;NEXT \></button>\n <button id="last-archive" type="button" class="archivebutton">LAST</button></div> <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
          );
    }
    var Qa = document.createElement("template");
    Qa.innerHTML =
      '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
      es = "WIN",
      as = "FAIL",
      ss = [
        "A True Indian!",
        "Yeh Dil Maange More!",
        "Like a Boss!",
        "Awesome, Na?",
        "Aaram Se!",
        "Close Call!",
      ],
      ts = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({ mode: "open" }),
            (e.today = new Date());

          if (window.localStorage.getItem("indle-language") == null) {
            window.localStorage.setItem("indle-language", "en");
          }
          var o = za();
          if (window.localStorage.getItem(archiveDate) == null) {
            var todayGame = Ga(new Date()) - 265;
            window.localStorage.setItem(archiveDate, JSON.stringify(new Date(e.today.setDate(e.today.getDate() - todayGame + 1))));
          } 
          var currentGame = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265;
          var savedData = JSON.parse(window.localStorage.getItem("archive"+JSON.stringify(currentGame)));
		          
          if (savedData != null) {
            e.lastPlayedTs = savedData.lastPlayedTs;
            ja(savedData);
          }
          return (
            savedData == null
              ? ((e.boardState = new Array(6).fill("")),
                (e.evaluations = new Array(6).fill(null)),
                (e.solution = Da(new Date(JSON.parse(window.localStorage.getItem(archiveDate))))),
                (e.dayOffset = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate))))),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                (e.restoringFromLocalStorage = !1),
                ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus,
                }),
                Ca("event", "level_start", { level_name: Wa(e.solution) }))
              : ((e.boardState = savedData.boardState),
                (e.evaluations = savedData.evaluations),
                (e.rowIndex = savedData.rowIndex),
                (e.solution = Da(new Date(JSON.parse(window.localStorage.getItem(archiveDate))))),
                (e.dayOffset = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate))))),
                (e.letterEvaluations = Pa(savedData.boardState, savedData.evaluations)),
                (e.gameStatus = savedData.gameStatus),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                e.gameStatus !== Za && (e.canInput = !1),
                (e.restoringFromLocalStorage = !0)),
            e
          );
        }
        return (
          o(t, [
            {
              key: "evaluateRow",
              value: function () { 
                if (wordlength === this.tileIndex && !(this.rowIndex >= 6)) {
                  var e,
                    a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                    s = this.boardState[this.rowIndex];
                  if (((e = s), !Ta.includes(e) && !La.includes(e)))
                    return (
                      a.setAttribute("invalid", ""),
                      void this.addToast("Not in word list")
                    );
                  if (this.hardMode) {
                    var t = (function (e, a, s) {
                        if (!e || !a || !s) return { validGuess: !0 };
                        for (var t = 0; t < s.length; t++)
                          if (s[t] === Ma && e[t] !== a[t])
                            return {
                              validGuess: !1,
                              errorMessage: ""
                                .concat($a(t + 1), " letter must be ")
                                .concat(a[t].toUpperCase()),
                            };
                        for (var o = {}, n = 0; n < s.length; n++)
                          [Ma, Ia].includes(s[n]) &&
                            (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                        var r = e.split("").reduce(function (e, a) {
                          return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                        }, {});
                        for (var i in o)
                          if ((r[i] || 0) < o[i])
                            return {
                              validGuess: !1,
                              errorMessage: "Guess must contain ".concat(
                                i.toUpperCase()
                              ),
                            };
                        return { validGuess: !0 };
                      })(
                        s,
                        this.boardState[this.rowIndex - 1],
                        this.evaluations[this.rowIndex - 1]
                      ),
                      o = t.validGuess,
                      n = t.errorMessage;
                    if (!o)
                      return (
                        a.setAttribute("invalid", ""),
                        void this.addToast(n || "Not valid in hard mode")
                      );
                  }
                  var r = (function (e, a) {
                    for (
                      var s = Array(a.length).fill(Oa),
                        t = Array(a.length).fill(!0),
                        o = Array(a.length).fill(!0),
                        n = 0;
                      n < e.length;
                      n++
                    )
                      e[n] === a[n] &&
                        o[n] &&
                        ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (t[r])
                        for (var l = 0; l < a.length; l++) {
                          var d = a[l];
                          if (o[l] && i === d) {
                            (s[r] = Ia), (o[l] = !1);
                            break;
                          }
                        }
                    }
                    return s;
                  })(s, this.solution);
                  (this.evaluations[this.rowIndex] = r),
                    (this.letterEvaluations = Pa(
                      this.boardState,
                      this.evaluations
                    )),
                    (a.evaluation = this.evaluations[this.rowIndex]),
                    (this.rowIndex += 1);
                  var i = this.rowIndex >= 6,
                    l = r.every(function (e) {
                      return "correct" === e;
                    });
                  if (i || l)
                    Va({
                      isWin: l,
                      isStreak:
                        !!this.lastCompletedTs &&
                        1 === Na(new Date(this.lastCompletedTs), new Date()),
                      numGuesses: this.rowIndex,
                    }),
                      ja({ lastCompletedTs: Date.now() }),
                      (this.gameStatus = l ? es : as),
                      Ca("event", "level_end", {
                        level_name: Wa(this.solution),
                        num_guesses: this.rowIndex,
                        success: l,
                      });
                  (this.tileIndex = 0),
                    (this.canInput = !1),
                    ja({
                      rowIndex: this.rowIndex,
                      boardState: this.boardState,
                      evaluations: this.evaluations,
                      solution: this.solution,
                      gameStatus: this.gameStatus,
                      lastPlayedTs: Date.now(),
                    });
                }
              },
            },
            {
              key: "addLetter",
              value: function (e) {
                this.gameStatus === Za &&
                  this.canInput &&
                  (this.tileIndex >= wordlength ||
                    ((this.boardState[this.rowIndex] += e),
                    this.$board
                      .querySelectorAll("game-row")
                      [this.rowIndex].setAttribute(
                        "letters",
                        this.boardState[this.rowIndex]
                      ),
                    (this.tileIndex += 1)));
              },
            },
            {
              key: "removeLetter",
              value: function () {
                if (
                  this.gameStatus === Za &&
                  this.canInput &&
                  !(this.tileIndex <= 0)
                ) {
                  this.boardState[this.rowIndex] = this.boardState[
                    this.rowIndex
                  ].slice(0, this.boardState[this.rowIndex].length - 1);
                  var e =
                    this.$board.querySelectorAll("game-row")[this.rowIndex];
                  this.boardState[this.rowIndex]
                    ? e.setAttribute("letters", this.boardState[this.rowIndex])
                    : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    (this.tileIndex -= 1);
                }
              },
            },
            {
              key: "submitGuess",
              value: function () {
                if (this.gameStatus === Za && this.canInput) {
                  if (wordlength !== this.tileIndex)
                    return (
                      this.$board
                        .querySelectorAll("game-row")
                        [this.rowIndex].setAttribute("invalid", ""),
                      void this.addToast("Not enough letters")
                    );
                  this.evaluateRow();
                }
              },
            },
            {
              key: "addToast",
              value: function (e, a) {
                var s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  t = document.createElement("game-toast");
                t.setAttribute("text", e),
                  a && t.setAttribute("duration", a),
                  s
                    ? this.shadowRoot
                        .querySelector("#system-toaster")
                        .prepend(t)
                    : this.shadowRoot.querySelector("#game-toaster").prepend(t);
              },
            },
            {
              key: "sizeBoard",
              value: function () {
                var e = this.shadowRoot.querySelector("#board-container"),
                  a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                  s = 6 * Math.floor(a / 5);
                (this.$board.style.width = "".concat(a, "px")),
                  (this.$board.style.height = "".concat(s, "px"));
              },
            },
            {
              key: "showStatsModal",
              value: function () {
                var e = this.$game.querySelector("game-modal"),
                  a = document.createElement("game-stats");
                this.gameStatus === es &&
                  this.rowIndex <= 6 &&
                  a.setAttribute("highlight-guess", this.rowIndex),
                  (a.gameApp = this),
                  e.appendChild(a),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "showHelpModal",
              value: function () {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                var currentGame = Ga(new Date()) - 265;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                  (this.$game = this.shadowRoot.querySelector("#game")),
                  (this.$board = this.shadowRoot.querySelector("#board")),
                  (this.$keyboard =
                    this.shadowRoot.querySelector("game-keyboard")),
                  this.sizeBoard(),
                  this.lastPlayedTs || window.localStorage.getItem("archive-hasPlayed") ||
                    setTimeout(function () {
                      return e.showHelpModal();
                    }, 100);
                for (var a = 0; a < 6; a++) {
                  var s = document.createElement("game-row");
                  s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", wordlength),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s);
                }
                this.$game.addEventListener("game-key-press", function (a) {
                  var s = a.detail.key;
                  "←" === s || "Backspace" === s
                    ? e.removeLetter()
                    : "↵" === s || "Enter" === s
                    ? e.submitGuess()
                    : Ba.includes(s.toLowerCase()) &&
                      e.addLetter(s.toLowerCase());
                }),
                (this.shadowRoot.querySelector("#minus-archive").addEventListener("click", function () {
                    var currentGame = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265;
                    if (currentGame <= 1) {
                      return;
                    }                    
                    window.localStorage.setItem("archive-hasPlayed", "1");
                    e.lastPlayedTs = Date.now();
                    saveArchive(e);
                    
                    var currentArchiveDate = new Date(JSON.parse(window.localStorage.getItem(archiveDate)));
                    window.localStorage.setItem(archiveDate, JSON.stringify(new Date(currentArchiveDate.setDate(currentArchiveDate.getDate() - 1))));
                    
                    window.location.reload();
                })),
                (this.shadowRoot.querySelector("#plus-archive").addEventListener("click", function () {
                    var currentGame = Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265;
                    if (currentGame == Ga(new Date()) - 266|| currentGame > 156) { //last day logic - write the last but 1 day here 
                      return;
                    }

                    window.localStorage.setItem("archive-hasPlayed", "1");
                    e.lastPlayedTs = Date.now();
                    saveArchive(e);
                    
                    var currentArchiveDate = new Date(JSON.parse(window.localStorage.getItem(archiveDate)));
                    window.localStorage.setItem(archiveDate, JSON.stringify(new Date(currentArchiveDate.setDate(currentArchiveDate.getDate() + 1)))); 
                    
                    window.location.reload();
                })),
                (this.shadowRoot.querySelector("#random-archive").addEventListener("click", function () {
                    var archiveToday = new Date();
					//last day logic - begin
					var lastDate = new Date(2022, 7, 15, 0, 0, 0);
					if (archiveToday >= lastDate){
					var archiveToday = new Date(2022, 7, 16, 0, 0, 0);
					}
					//last day logic - end						
                    var currentGame = Ga(archiveToday) - 265;
                    var randomGame = Math.floor(Math.random() * (currentGame - 1)) + 1;
                    var dayDiff = currentGame - randomGame;
                    
                    window.localStorage.setItem("archive-hasPlayed", "1");
                    e.lastPlayedTs = Date.now();
                    saveArchive(e);
                    
                    window.localStorage.setItem(archiveDate, JSON.stringify(archiveToday.setDate(archiveToday.getDate() - dayDiff)));

                    window.location.reload();
                })),
                (this.shadowRoot.querySelector("#first-archive").addEventListener("click", function () {
                    var archiveToday = new Date();
                    var currentGame = Ga(archiveToday) - 265;
                    var dayDiff = currentGame - 1;
                    
                    window.localStorage.setItem("archive-hasPlayed", "1");
                    e.lastPlayedTs = Date.now();
                    saveArchive(e);
                    
                    window.localStorage.setItem(archiveDate, JSON.stringify(archiveToday.setDate(archiveToday.getDate() - dayDiff)));

                    window.location.reload();
                })),
                (this.shadowRoot.querySelector("#last-archive").addEventListener("click", function () {
                    var archiveToday = new Date();
					//last day logic - begin
					var lastDate = new Date(2022, 7, 15, 0, 0, 0);
					if (archiveToday >= lastDate){
					var archiveToday = new Date(2022, 7, 16, 0, 0, 0);
					}
					//last day logic - end						
                    var archiveYesterday = new Date(archiveToday.setDate(archiveToday.getDate() - 1));
                    
                    window.localStorage.setItem("archive-hasPlayed", "1");
                    e.lastPlayedTs = Date.now();
                    saveArchive(e);
                    
                    window.localStorage.setItem(archiveDate, JSON.stringify(archiveYesterday));

                    window.location.reload();
                })),
                (this.shadowRoot.querySelector("#indle-title").textContent = 
                  "INDLE DAY#".concat(Ga(new Date(JSON.parse(window.localStorage.getItem(archiveDate)))) - 265)),
                  this.$game.addEventListener(
                    "game-last-tile-revealed-in-row",
                    function (a) {
                      (e.$keyboard.letterEvaluations = e.letterEvaluations),
                        e.rowIndex < 6 && (e.canInput = !0);
                      var s =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || (a.composedPath && a.composedPath())).includes(
                        s
                      ) &&
                        ([es, as].includes(e.gameStatus) &&
                          (e.restoringFromLocalStorage
                            ? e.showStatsModal()
                            : (e.gameStatus === es &&
                                (s.setAttribute("win", ""),
                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                              e.gameStatus === as &&
                                e.addToast(e.solution.toUpperCase(), 1 / 0),
                              setTimeout(function () {
                                e.showStatsModal();
                              }, 2500))),
                        (e.restoringFromLocalStorage = !1));
                    }
                  ),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                      switch (t) {
                        case "hard-mode":
                          return void (n
                            ? e.addToast(
                                "Hard mode can only be enabled at the start of a round",
                                1500,
                                !0
                              )
                            : ((e.hardMode = o), ja({ hardMode: o })));
                      }
                    }
                  ),
                  this.shadowRoot
                    .getElementById("settings-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page");
                      var t = document.createTextNode("Settings");
                      if (window.localStorage.getItem("indle-language") == "fr") {
                        t = document.createTextNode("Paramètres");
                      }
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"),
                        (o.gameApp = e),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("help-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page");
                      var t = document.createTextNode("How to play");
                      if (window.localStorage.getItem("indle-language") == "fr") {
                        t = document.createTextNode("Comment Jouer");
                      }
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""),
                        o.setAttribute("slot", "content"),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("statistics-button")
                    .addEventListener("click", function (a) {
                      e.showStatsModal();
                    }),
                  window.addEventListener("resize", this.sizeBoard.bind(this));
              },
            },
            { key: "disconnectedCallback", value: function () {} },
            {
              key: "debugTools",
              value: function () {
                var e = this;
                this.shadowRoot
                  .getElementById("debug-tools")
                  .appendChild(Qa.content.cloneNode(!0)),
                  this.shadowRoot
                    .getElementById("toast")
                    .addEventListener("click", function (a) {
                      e.addToast("hello world");
                    }),
                  this.shadowRoot
                    .getElementById("modal")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-modal");
                      (s.textContent = "hello plz"), s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("reveal")
                    .addEventListener("click", function () {
                      e.evaluateRow();
                    }),
                  this.shadowRoot
                    .getElementById("shake")
                    .addEventListener("click", function () {
                      e.$board
                        .querySelectorAll("game-row")
                        [e.rowIndex].setAttribute("invalid", "");
                    }),
                  this.shadowRoot
                    .getElementById("bounce")
                    .addEventListener("click", function () {
                      var a =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win")
                        ? a.removeAttribute("win")
                        : a.setAttribute("win", "");
                    });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(
        3e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n'
      );
    var ns = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", function (a) {
                  e.shadowRoot
                    .querySelector(".content")
                    .classList.add("closing");
                }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".content")
                      .classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML =
      "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
        ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
      ],
      us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_letterEvaluations", {}),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "letterEvaluations",
              set: function (e) {
                (this._letterEvaluations = e), this._render();
              },
            },
            {
              key: "dispatchKeyPressEvent",
              value: function (e) {
                this.dispatchEvent(
                  new CustomEvent("game-key-press", {
                    bubbles: !0,
                    composed: !0,
                    detail: { key: e },
                  })
                );
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                  (this.$keyboard = this.shadowRoot.getElementById("keyboard")),
                  this.$keyboard.addEventListener("click", function (a) {
                    var s = a.target.closest("button");
                    s &&
                      e.$keyboard.contains(s) &&
                      e.dispatchKeyPressEvent(s.dataset.key);
                  }),
                  window.addEventListener("keydown", function (a) {
                    if (!0 !== a.repeat) {
                      var s = a.key,
                        t = a.metaKey,
                        o = a.ctrlKey;
                      t ||
                        o ||
                        ((Ba.includes(s.toLowerCase()) ||
                          "Backspace" === s ||
                          "Enter" === s) &&
                          e.dispatchKeyPressEvent(s));
                    }
                  }),
                  this.$keyboard.addEventListener(
                    "transitionend",
                    function (a) {
                      var s = a.target.closest("button");
                      s &&
                        e.$keyboard.contains(s) &&
                        s.classList.remove("fade");
                    }
                  ),
                  ds.forEach(function (a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                      a.forEach(function (e) {
                        var a;
                        if (
                          (e >= "a" && e <= "z") ||
                          "←" === e ||
                          "↵" === e
                        ) {
                          if (
                            (((a = is.content.cloneNode(
                              !0
                            ).firstElementChild).dataset.key = e),
                            (a.textContent = e),
                            "←" === e)
                          ) {
                            var t = document.createElement("game-icon");
                            t.setAttribute("icon", "backspace"),
                              (a.textContent = ""),
                              a.appendChild(t),
                              a.classList.add("one-and-a-half");
                          }
                          "↵" == e &&
                            ((a.textContent = "enter"),
                            a.classList.add("one-and-a-half"));
                        } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a);
                      }),
                      e.$keyboard.appendChild(s);
                  }),
                  this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                for (var e in this._letterEvaluations) {
                  var a = this.$keyboard.querySelector(
                    '[data-key="'.concat(e, '"]')
                  );
                  (a.dataset.state = this._letterEvaluations[e]),
                    a.classList.add("fade");
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));

    function cs(e, a, s, t) {
      return new (s || (s = Promise))(function (o, n) {
        function r(e) {
          try {
            l(t.next(e));
          } catch (e) {
            n(e);
          }
        }
        function i(e) {
          try {
            l(t.throw(e));
          } catch (e) {
            n(e);
          }
        }
        function l(e) {
          var a;
          e.done
            ? o(e.value)
            : ((a = e.value),
              a instanceof s
                ? a
                : new s(function (e) {
                    e(a);
                  })).then(r, i);
        }
        l((t = t.apply(e, a || [])).next());
      });
    }
    function ps(e, a) {
      var s,
        t,
        o,
        n,
        r = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (n = { next: i(0), throw: i(1), return: i(2) }),
        "function" == typeof Symbol &&
          (n[Symbol.iterator] = function () {
            return this;
          }),
        n
      );
      function i(n) {
        return function (i) {
          return (function (n) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((s = 1),
                  t &&
                    (o =
                      2 & n[0]
                        ? t.return
                        : n[0]
                        ? t.throw || ((o = t.return) && o.call(t), 0)
                        : t.next) &&
                    !(o = o.call(t, n[1])).done)
                )
                  return o;
                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                  case 0:
                  case 1:
                    o = n;
                    break;
                  case 4:
                    return r.label++, { value: n[1], done: !1 };
                  case 5:
                    r.label++, (t = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = r.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                      r.label = n[1];
                      break;
                    }
                    if (6 === n[0] && r.label < o[1]) {
                      (r.label = o[1]), (o = n);
                      break;
                    }
                    if (o && r.label < o[2]) {
                      (r.label = o[2]), r.ops.push(n);
                      break;
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                n = a.call(e, r);
              } catch (e) {
                (n = [6, e]), (t = 0);
              } finally {
                s = o = 0;
              }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 };
          })([n, i]);
        };
      }
    }
    customElements.define("game-keyboard", us),
      function () {
        (console.warn || console.log).apply(console, arguments);
      }.bind("[clipboard-polyfill]");
    var ms,
      hs,
      ys,
      gs,
      bs = "undefined" == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) ||
      void 0 === ms ||
      ms.bind(fs),
      null === (hs = null == fs ? void 0 : fs.readText) ||
        void 0 === hs ||
        hs.bind(fs);
    var ks =
        (null === (ys = null == fs ? void 0 : fs.write) ||
          void 0 === ys ||
          ys.bind(fs),
        null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs
          ? void 0
          : gs.bind(fs)),
      vs = "undefined" == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
      this.success = !1;
    };
    function zs(e, a, s) {
      for (var t in ((e.success = !0), a)) {
        var o = a[t],
          n = s.clipboardData;
        n.setData(t, o),
          "text/plain" === t && n.getData(t) !== o && (e.success = !1);
      }
      s.preventDefault();
    }
    function js(e) {
      var a = new xs(),
        s = zs.bind(this, a, e);
      document.addEventListener("copy", s);
      try {
        document.execCommand("copy");
      } finally {
        document.removeEventListener("copy", s);
      }
      return a.success;
    }
    function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s;
    }
    function _s(e) {
      var a = document.getSelection();
      if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
      }
    }
    function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges();
    }
    function Es(e) {
      return cs(this, void 0, void 0, function () {
        var a;
        return ps(this, function (s) {
          if (
            ((a = "text/plain" in e),
            "undefined" == typeof ClipboardEvent &&
              void 0 !== ws.clipboardData &&
              void 0 !== ws.clipboardData.setData)
          ) {
            if (!a) throw new Error("No `text/plain` value was specified.");
            if (((t = e["text/plain"]), ws.clipboardData.setData("Text", t)))
              return [2, !0];
            throw new Error(
              "Copying failed, possibly because the user rejected it."
            );
          }
          var t;
          return js(e) ||
            navigator.userAgent.indexOf("Edge") > -1 ||
            Ss(document.body, e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important"),
                (a.textContent = "temporary element"),
                document.body.appendChild(a);
              var s = Ss(a, e);
              return document.body.removeChild(a), s;
            })(e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important");
              var s = a;
              a.attachShadow && (s = a.attachShadow({ mode: "open" }));
              var t = document.createElement("span");
              (t.innerText = e),
                s.appendChild(t),
                document.body.appendChild(a),
                _s(t);
              var o = document.execCommand("copy");
              return qs(), document.body.removeChild(a), o;
            })(e["text/plain"])
            ? [2, !0]
            : [2, !1];
        });
      });
    }
    function As(e, a, s) {
      try {
        (t = navigator.userAgent || navigator.vendor || window.opera),
          (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) ||
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
          void 0 === navigator.share ||
          !navigator.canShare ||
          !navigator.canShare(e)
            ? (function (e) {
                return cs(this, void 0, void 0, function () {
                  return ps(this, function (a) {
                    if (ks) return [2, ks(e)];
                    if (
                      !Es(
                        (function (e) {
                          var a = {};
                          return (a["text/plain"] = e), a;
                        })(e)
                      )
                    )
                      throw new Error("writeText() failed");
                    return [2];
                  });
                });
              })(e.text).then(a, s)
            : navigator.share(e);
      } catch (e) {
        s();
      }
      var t;
    }
    var Cs = document.createElement("template");
    var isFrench = window.localStorage.getItem("indle-language") == "fr";
    if (isFrench) {
      Cs.innerHTML =
        '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 26px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistiques</h1>\n    <div id="statistics"></div>\n    <h1>Performances</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';  
    } else {
      Cs.innerHTML =
        '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 26px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    }
    var Ls = document.createElement("template");
    Ls.innerHTML =
      '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML =
      '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var FFs = document.createElement("template");
	//Changed to TRIVIA in INDLE
      FFs.innerHTML =
        '\n  <div class="funFact"> <h1>TRIVIA</h1> </div>\n';	
    var Is = document.createElement("template");
    Is.innerHTML =
      '\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        winPercentage: "Win %",
        gamesPlayed: "Played",
        gamesWon: "Won",
        averageGuesses: "Average Guesses",
      };
    if (isFrench) {
      Ms = {
        currentStreak: "Série actuelle",
        maxStreak: "Meilleure série",
        winPercentage: "Victoires (%)",
        gamesPlayed: "Parties jouées",
        gamesWon: "Gagné",
        averageGuesses: "Suppositions moyennes",
      };
    }
    var Os = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({ mode: "open" }),
            (e.stats = Xa()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                var funFacts = [
				"Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.", /*1 delhi*/
                "The Ganges is a trans-boundary river of Asia which flows through India and Bangladesh. The 2,525 km river rises in the western Himalayas in the Indian state of Uttarakhand. Because it provides water to 40% of India's population, the Ganga is considered a lifeline of India.", /*2 ganga*/
                "The tallest minaret in the world built of bricks is the 73 metres (240 ft) tall Qutb Minar in Delhi, India.", /*3 minar*/
				"Karma, in Indian religion and philosophy, is the universal causal law by which good or bad actions determine the future modes of an individual's existence.", /*4 karma*/
				"Rural areas are also known as the 'countryside' or a 'village' in India. It has a very low population density. ", /*5 rural*/
				"Vishu is a Hindu festival celebrated in the Indian state of Kerala, Tulu Nadu region in Karnataka, Mahe district of Union Territory of Pondicherry, some neighbouring areas of Tamil Nadu and their diaspora communities. The festival is marked by family time, preparing colourful auspicious items and viewing these as the first thing on the Vishu day (Vishukkani).", /*6 vishu*/
				"The Saree (also spelled 'sari'), is a garment traditionally worn in India, Sri Lanka, Pakistan, Bangladesh and Nepal. The word “sari” means “strip of cloth” in Sanskrit. ", /*7 saree*/
				"Tikka is a dish consisting of pieces of meat or vegetarian alternatives, with its origins tracing back to the Mughal dynasty. It is made by marinating the pieces in spices and yogurt, and cooking them in a tandoor.", /*8 tikka*/
				"A Papad  (also known as papadam or appalam) is an Indian deep fried dough of black gram bean flour, either fried or cooked with dry heat (flipped over an open flame) until crunchy.", /*9 papad*/
				"Korma or qorma is a dish originating in the Indian subcontinent, consisting of meat or vegetables braised with yogurt, water or stock, and spices to produce a thick sauce or gravy.", /*10 korma*/
				"Begum is a royal and aristocratic title from Central and South Asia which usually means 'higher official'. In South Asia, particularly in Delhi, Hyderabad, Sindh, Punjab and Bengal, Begum has been adapted for use as an honorific for Muslim women of high social status, accomplishment, or rank.", /*11 begum*/
				"Kheer is a sweet dish and a type of wet pudding popular in the Indian subcontinent and Iranian plateau, usually made by boiling milk, sugar or jaggery, and rice.", /*12 kheer*/
				"Jammu is the winter capital of the Indian union territory of Jammu and Kashmir. It is the headquarters and the largest city in Jammu district of the union territory.", /*13 jammu*/
				"Dosas are thin flat breads originating from South India, made from a fermented batter predominantly consisting of lentils and rice, with savoury flavours generally emphasized. There are over a 100 varities of Dosas in India. ", /*14 dosas*/
				"Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. It is the state capital of Bihar.", /*15 patna*/
				"According to the Botanical Survey of India, India is home to more than 8,000 species of medicinal plants and herbs. The country has a rich history of traditional healing systems, many of which list the use of these plants.", /*16 herbs*/
				"When it comes to Pulses, India stands out: The country produces a quarter of all pulses in the world and consumes 27 per cent — more than any other. India is also the largest importer of pulses. Madhya Pradesh is a major pulse-producing state in the country; it caters to 32 per cent of the country's total production.", /*17 pulse*/
				"Saina Nehwal is an Indian professional badminton player. A former world no. 1, she has won 24 international titles. She is the only Indian to have won at least one medal in every BWF major individual event, namely the Olympics, the BWF World Championships, and the BWF World Junior Championships.", /*18 saina*/
				"Swami in Hinduism, is an honorific title given to a male or female ascetic who has chosen the path of renunciation (sannyasa), or has been initiated into a religious monastic order of Vaishnavas.", /*19 swami*/
				"Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology during his stint in ISRO and DRDO.", /*20 kalam*/
				"The Padma Awards are one of the highest civilian honours of India announced annually on the eve of Republic Day. The Awards are given in three categories: Padma Vibhushan (for exceptional and distinguished service), Padma Bhushan (distinguished service of higher order) and Padma Shri (distinguished service). ", /*21 padma*/
				"Rasam is a clear and spicy South Indian soup. It is eaten with rice or consumed as a soup. In a traditional South Indian meal, it can be part of a course that includes sambar rice and curd rice.  Rasam has a distinct taste in comparison to sambar due to its own seasoning ingredients and is fluid in consistency.", /*22 rasam*/
				"Chana masala, also known as channay, chole masala, chhole masala, chole or chholay, is a dish originating from the Indian subcontinent. The main ingredient is a variety of chickpea called chana or kala chana.", /*23 chole*/
				"Lassi is a regional name for buttermilk, the traditional dahi-based drink in India, Pakistan and rural areas of Nepal. Lassi is a blend of yogurt, water, spices and sometimes fruit. Namkeen lassi is similar to doogh, while sweet and mango lassis are like milkshakes.", /*24 lassi*/
				"Avial is an Indian dish with origins in the Kerala region, although it is equally popular in Tamil Nadu and Udupi. It is a thick mixture of more than 10 vegetables commonly found in the western ghats and coconut, seasoned with coconut oil and curry leaves.", /*25 avial*/
				"Lord Shiva (Siva) is one of the most important Gods in the Hindu pantheon and is considered a member of the holy trinity (trimurti) of Hinduism with Brahma and Vishnu. A complex character, he may represent goodness, benevolence and serve as the Protector.", /*26 shiva*/
				"The national animal of India is the magnificent Royal Bengal Tiger. Its scientific name is Panthera tigris tigris. The Bengal Tiger is a striped animal with a thick yellow coat of fur with dark stripes.", /*27 tiger*/
				"A Curry is a dish with a sauce seasoned with spices, mainly associated with South Asian cuisine. In southern India, leaves from the curry tree may be included. India is the home of curry, and many Indian dishes are curry-based, prepared by adding different types of vegetables, lentils, or meats. ", /*28 curry*/
				"The Moong  bean is green gram which is a small, round olive green bean with a sweet flavor and soft texture. Also called mung bean it is the seed of Vigna radiata, belonging to the Indian subcontinent.", /*29 moong*/
				"Clove is one of the four major spices in trade and history, along with nutmeg, cinnamon, and pepper. Clove was introduced in India by the East India Company during the 1800s along the Courtalam high ranges of the erstwhile south Travancore region.", /*30 clove*/
				"Iftar, also known as ftoor, is the evening meal with which Muslims end their daily Ramadan fast at sunset. In India, Muslims break their fasts with family and friends, and many Mosques arrange free 'Iftar.' Preparations for iftar commence hours before, in homes and at roadside stalls. ", /*31 iftar*/
				"In India, lemon and lime are interchangeable. Both go under the common name of Nimbu in northern India.", /*32 nimbu*/
				"The Shyok River a tributary of the Indus River that flows through northern Ladakh and enters Gilgit–Baltistan, spanning some 550 km. The Shyok River originates at the Rimo Glacier, one of the tongues of Siachen Glacier.", /*33 shyok*/
				"Barfi, barfee, borfi or burfi is a dense milk-based sweet from the Indian subcontinent. The name comes from the Hindustani word barf, which means snow. Common types of barfi include besan barfi, kaju barfi, pista barfi, and sing barfi. Milk powder and sugar are the main ingredients of barfi.", /*34 barfi*/
				"Ugadi or Yugadi, also known as Samvatsaradi, is the New Year's Day for the states of Andhra Pradesh, Telangana, and Karnataka in India. It is festively observed in these regions on the first day of the Hindu lunisolar calendar month of Chaitra.", /*35 ugadi*/
				"The Sitar is a plucked stringed instrument, originating from the Indian subcontinent, used in Hindustani classical music. The instrument was invented in medieval India and flourished in the 16th and 17th centuries and arrived at its present form in 18th-century India.", /*36 sitar*/
				"Divya Bharti was an Indian actress who worked predominantly in Hindi and Telugu films. Known for her acting versatility and beauty, she was considered one of the most popular and highest paid Indian actresses of her time. She died in April 1993, aged 19, after falling from the balcony of her apartment in Mumbai. 'Divya' is a common female name in India, and translates to Divine.", /*37 divya*/
				"Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river. The state capital, Dispur, is a suburb of Guwahati.", /*38 assam*/
				"Viswanathan 'Vishy' Anand is an Indian chess grandmaster and a five-time world chess champion. He became the first grandmaster from India in 1988, and is one of the few players to have surpassed an Elo rating of 2800, a feat he first achieved in 2006.", /*39 anand*/
				"Mohammed Yusuf Khan better known by his stage name Dilip Kumar, was an Indian actor and film producer who worked in Hindi cinema. Referred to as the 'Tragedy King' for his portrayal of serious roles and retrospectively as 'The First Khan' of Bollywood, he has been described as one of the most successful film stars in the industry and is credited with bringing a distinct form of method acting to cinema.", /*40 kumar*/
				"The Indian Rupee is the official currency of India. The rupee is subdivided into 100 paise, though as of 2019, coins of denomination of 1 rupee is the lowest value in use. The issuance of the currency is controlled by the Reserve Bank of India.", /*41 rupee*/
				"Bhang is an edible preparation made from the leaves of the cannabis plant originating from the Indian subcontinent.It has been used in food and drink as early as 1000 BC in ancient India. Bhang is traditionally distributed during the spring festival of Maha Shivaratri and Holi. Bhang is mainly used in bhang shops, which sell the cannabis-infused Indian drinks bhang lassi and bhang thandai.", /*42 bhang*/
				"Jawaharlal Nehru was the first, and longest serving prime minister of India. Fondly called Chacha Nehru by children, he advocated for an all-rounded education of children that would build a better society in the future. ", /*43 nehru*/
				"Chaat or chat is a family of savoury snacks that originated in India, typically served as an hors d'oeuvre or at roadside tracks from stalls or food carts across South Asia in India, Pakistan, Nepal and Bangladesh.", /*44 chaat*/
				"Surat is a large city beside the Tapi River in the west Indian state of Gujarat. Once known for silk weaving, Surat remains a commercial center for textiles, and the New Textile Market area is lined with fabric shops. ", /*45 surat*/
				"The dupatta is a Shawl traditionally worn by women in Indian Subcontinent. The dupatta is currently used most commonly as part of the women's Lehnga outfit, and worn over the kurta and the gharara.", /*46 shawl*/
				"Kalki is the prophesied tenth and final incarnation of Hindu God Vishnu to end the Kali Yuga, one of the four periods in the endless cycle of existence (Krita) in Vaishnavism cosmology. The end of Kali Yuga states this will usher in the new epoch of Satya Yuga in the cycle of existence, until the MahaPralaya (the Great Dissolution of the Universe).", /*47 kalki*/
				"Ajmer is a city in the northern Indian state of Rajasthan. South of the city's artificial Ana Sagar Lake is Ajmer Sharif Dargah, the domed shrine of the Muslim Sufi saint Garib Nawaz. Nearby, a 16th-century palace built by the Mughal emperor Akbar now houses the Ajmer Government Museum, displaying armor and stone sculptures. ", /*48 ajmer*/
				"Chess is a board game played between two players. It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin.", /*49 chess*/
				"The Lungi is a type of sarong that originated in the Indian Subcontinent. The multicoloured lungi is a men's skirt usually tied around the lower waist below the navel.", /*50 lungi*/	
				"Khadi, derived from khaddar, is a hand-spun and woven natural fibre cloth promoted by Mahatma Gandhi as swadeshi (self-sufficiency) for the freedom struggle of the Indian subcontinent, 'Khadi' term is used throughout India, Pakistan and Bangladesh.The first piece of the hand-woven cloth was manufactured in the Sabarmati Ashram during 1917-18. The coarseness of the cloth led Gandhi to call it 'Khadi'. The cloth is usually hand spun and woven from cotton.", /*51 khadi*/
				"Garba is a form of dance which originates from the state of Gujarat in India. The name is derived from the Sanskrit term Garbha and Deep. Many traditional garbas are performed around a centrally lit lamp or a picture or statue of the Goddess Shakti.", /*52 garba*/
				"Sir Chandrasekhara Venkata Raman FRS was an Indian physicist known for his work in the field of light scattering. Using a spectrograph that he developed, he and his student K. S. Krishnan discovered that when light traverses a transparent material, the deflected light changes its wavelength and frequency. This phenomenon, a hitherto unknown type of scattering of light, which they called 'modified scattering' was subsequently termed the Raman effect or Raman scattering. Raman received the 1930 Nobel Prize in Physics for the discovery and was the first Asian to receive a Nobel Prize in any branch of science.", /*53 raman*/
				"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries.", /*54 kochi*/
				"Sadhu, also spelled saadhu, is a religious ascetic, mendicant or any holy person in Hinduism and Jainism who has renounced the worldly life. They are sometimes alternatively referred to as yogi, sannyasi or vairagi. Literally, it means one who practises a ″sadhana″ or keenly follows a path of spiritual discipline.", /*55 sadhu*/
				"India is known for its unique Flavors and Spices. India's most famous seasoning is Garam masala. It's actually a combination of dried spices including pepper, cinnamon, nutmeg, cardamom, cumin, coriander, tej patta, pepper, and some others.", /*56 garam*/
				"A Chawl is a type of residential building found in western India, similar to a tenement. The first chawls were constructed in the early 1700s, as housing for industrial workers. Chawls are rooted in the history of Bombay's (now Mumbai) colonial past. Workers migrated to Bombay from far and wide, as Bombay was the center of trade for the East India Company. ", /*57 chawl*/
				"The Statue of Unity is the world's tallest statue, with a height of 182 metres (597 feet), located in the state of Gujarat, India. It depicts Indian statesman and independence activist Vallabhbhai Patel (1875–1950), who was the first deputy prime minister and home minister of independent India and an adherent of Mahatma Gandhi. ", /*58 unity*/
				"Amrut is a brand of Indian single malt whisky, manufactured by Amrut Distilleries. It is the first single malt whisky to be made in India. Amrut or amrita is a Sanskrit word which can be translated as 'nectar of the gods', 'nectar of life', or 'drink of the gods'. The company translates it as 'Elixir of Life'.", /*59 amrut*/
				"Mohammed Aamir Hussain Khan is an Indian actor, film director and producer who works in Hindi films. Through his career spanning over 30 years, Khan has established himself as one of the most popular and influential actors of Indian cinema.", /*60 aamir*/
				"Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated. ", /*61 bihar*/
				"Kisan translates to a farmer or agricultural worker in India. The Kisan Sabha movement started in Bihar under the leadership of Sahajanand Saraswati who had formed in 1929 the Bihar Provincial Kisan Sabha (BPKS) in order to mobilise peasant grievances against the zamindari attacks on their occupancy rights, and thus sparking the farmers' movements in India.", /*62 kisan*/
				"An Asana is a body posture, originally and still a general term for a sitting meditation pose, and later extended in hatha yoga and modern yoga as exercise, to any type of position, adding reclining, standing, inverted, twisting, and balancing poses. The Yoga Sutras of Patanjali define asana as a position that is steady and comfortable. Asanas originated in India.", /*63 asana*/
				"Sarojini Naidu was an Indian political activist and poet. A proponent of civil rights, women's emancipation, and anti-imperialistic ideas, she was an important figure in India's struggle for independence from colonial rule. Naidu's work as a poet earned her the sobriquet 'the Nightingale of India', or 'Bharat Kokila' by Mahatma Gandhi because of colour, imagery and lyrical quality of her poetry.", /*64 naidu*/
				"Tamil is a classical Dravidian language natively spoken by the Tamil people of South Asia. Tamil is an official language of the Indian state of Tamil Nadu, the sovereign nations of Sri Lanka and Singapore, and the Union Territory of Puducherry.", /*65 tamil*/
				"The Asian Games, also known as Asiad, is a continental multi-sport event held every four years among athletes from all over Asia. The 1951 Asian Games, officially known as the First Asian Games, was a multi-sport event celebrated in New Delhi, India from 4 to 11 March 1951. The Games received names like First Asiad and 1951 Asiad.", /*66 asiad*/
				"Sania Mirza is an Indian professional tennis player. A former doubles world No. 1, she has won six Grand Slam titles in her career. From 2003 until her retirement from singles in 2013, she was ranked by the Women's Tennis Association as India's No. 1 player.", /*67 sania*/
				"Bajaj Auto Limited is an Indian multinational automotive manufacturing company based in Pune. It manufactures motorcycles, scooters and auto rickshaws. Bajaj Auto is a part of the Bajaj Group. It was founded by Jamnalal Bajaj in Rajasthan in the 1940s. The company has plants in Chakan, Waluj and Pantnagar.", /*68 bajaj*/
				"Abu'l-Fath Jalal-ud-din Muhammad Akbar, popularly known as Akbar the Great, and also as Akbar I, was the third Mughal emperor, who reigned from 1556 to 1605. Akbar succeeded his father, Humayun, under a regent, Bairam Khan, who helped the young emperor expand and consolidate Mughal domains in India.", /*69 akbar*/
				"Salem is a city on the Thirumanimuthar River, in the south Indian state of Tamil Nadu. The centuries-old Sugavaneswarar Temple, dedicated to the Hindu deity Shiva, features colorful gopurams (towers) and gardens. Nearby, colonial-era Christ Church is an Indo-Saracenic landmark consecrated in 1875. Jamiya Masjid is a mosque believed to have been built by Tipu Sultan, the 18th-century ruler of the Kingdom of Mysore.", /*70 salem*/
				"The Times of India is an Indian English-language daily newspaper and digital news media owned and managed by The Times Group. It is the third-largest newspaper in India by circulation and largest selling English-language daily in the world.", /*71 times*/
				"Thali (meaning 'plate') or Bhojanam (meaning 'full meal') is a round platter used to serve food in India. Though thalis are found throughout the country (many of the twenty-nine Indian states have their own version), it is said that thali originated in South India. Dominated by rice, South Indian cuisine is replete with dishes, that are meant to be consumed on mixing with rice.", /*72 thali*/
				"Laddu or laddoo is a spherical sweet originating from the Indian subcontinent. Laddus are primarily made from flour, fat and sugar. Laddus are often made of gram flour but can also be made with semolina. Sometimes ingredients such as chopped nuts and/or dried raisins are also added.", /*73 laddu*/
				"Cumin (Cuminum cyminum) is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region.Its seeds – each one contained within a fruit, which is dried – are used in the cuisines of many cultures in both whole and ground form. Although cumin is thought to have uses in traditional medicine, there is no high-quality evidence that it is safe or effective as a therapeutic agent. India is the world's largest producer of cumin, accounting for about 70%.", /*74 cumin*/
				"Maggi  is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century. But, the snack achieved cult status in India mainly because of the ease of cooking it and Maggi's 'two-minute' advertising campaign. ", /*75 maggi*/
				"The Indian Paisa is a 1⁄100 subdivision of the Indian rupee. The paisa was first introduced on 1 April 1957 after decimalisation of the Indian rupee. In 1955, the Government of India first amended the Indian Coinage Act and adopted the 'metric system for coinage'.", /*76 paisa*/
				"The Natya Shastra is a Sanskrit treatise on the performing arts. The text is attributed to sage Bharata Muni, and its first complete compilation is dated to between 200 BCE and 200 CE, but estimates vary between 500 BCE and 500 CE. The Natya Shastra is notable as an ancient encyclopedic treatise on the arts, one which has influenced dance, music and literary traditions in India.", /*77 natya*/
				"Yuvraj Singh is a former Indian international cricketer who played in all formats of the game. He is an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox, and is known for his aggressive batting style and all-round ability. During the 2011 World Cup, he became the first player to take a 5-wicket haul and score a 50 in the same World Cup match. He took a total of 15 wickets and scored 362 runs during the runs and won the man of the tournament award.", /*78 singh*/
				"Thane is a city just outside Mumbai, in the western Indian state of Maharashtra. It’s known as the ‘City of Lakes’, and its more than 30 lakes include tree-lined Upvan Lake, a popular recreational spot. Beside Talao Pali Lake, Kopineshwar Mandir is an old, domed Hindu temple dedicated to Lord Shiva. To the west, leopards, monkeys and parakeets inhabit the teak forest and bamboo groves of Sanjay Gandhi National Park.", /*79 thane*/
				"The NIFTY 50 is a benchmark Indian stock market index that represents the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange. It is one of the two main stock indices used in India, the other being the BSE SENSEX.", /*80 nifty*/
				"The Chola Dynasty was a Tamil thalassocratic empire of southern India, one of the longest-ruling dynasties in the world history. The earliest datable references to the Chola are in inscriptions from the 3rd century BCE left by Ashoka, of the Maurya Empire.", /*81 chola*/
				"Hinduism is an Indian religion and dharma, or way of life. It is the world's third-largest religion, with over 1.2 billion followers, or 15–16% of the global population, known as Hindus.",  /* 82 (hindu ) */
				"Haora or Howrah is the second-largest city after Kolkata in the Indian state of West Bengal. Howrah is located on the western bank of the Hooghly River opposite its twin city of Kolkata. Administratively it lies within Howrah district, and is the headquarters of the Howrah Sadar subdivision.",  /* 83 (haora ) */
				"Jiddu Krishnamurti was a philosopher, speaker and writer. In his early life, he was groomed to be the new World Teacher, but later rejected this mantle and withdrew from the Theosophy organization behind it.",  /* 84 (jiddu ) */
				"Bally, also spelled Bali or Baly, city, southeastern West Bengal state, northeastern India. It lies on the west bank of the Hugli (Hooghly) River, opposite Baranagar, and is part of the Haora (Howrah) urban agglomeration as well as the larger Kolkata (Calcutta) metropolitan area.",  /* 85 (bally ) */
				"Pooja, also spelled puja or poojah, in Hinduism, ceremonial worship, ranging from brief daily rites in the home to elaborate temple rituals. The word Pooja is derived from the Dravidian pu ('flower'). In its simplest form, Pooja usually consists of making an offering of flowers or fruit to an image of a god.",  /* 86 (pooja ) */
				"Alwar is a city in the northern Indian state of Rajasthan. Alwar City Palace, from 1793, blends architectural styles and has marble pavilions on lotus-shaped bases in its courtyard, plus a museum with rare manuscripts. It’s next to the marble and sandstone Moosi Maharani Chhatri shrine.",  /* 87 (alwar ) */
				"Puttu, alternatively spelled pittu, is a dish native to the South Indian states of Kerala, Tamil Nadu, and parts of Karnataka, as well as Northern Province in Sri Lanka. Puttu means 'portioned' in Tamil and Malayalam.",  /* 88 (puttu ) */
				"Hindi, or more precisely Modern Standard Hindi, is an Indo-Aryan language spoken chiefly in the Hindi Belt region encompassing parts of northern, central, eastern and western India.",  /* 89 (hindi ) */
				"The betel (Piper betle) is a vine of the family Piperaceae, which includes pepper and kava. The betel plant is native to Southeast Asia. There are more than 90 variants of betel leaves globally; about 40 are cultivated in India. Symbols of love and hospitality, the well-known types are the hot Calcutta paan, the tough Bangla Patta, the tender Maghai and the neutral kapuri paan used for making chocolate paan.",  /* 90 (betel ) */
				"Gautama Buddha was an ascetic and spiritual teacher of South Asia who lived during the latter half of the first millennium BCE. He was the founder of Buddhism. Buddhism is an ancient Indian religion, which arose in and around the ancient Kingdom of Magadha (now in Bihar, India).",  /* 91 (budha ) */
				"Latur is a city in Maharashtra state, India, and is one of the largest cities of the Marathwada region. It is the administrative headquarters of Latur district and Latur Taluka. The city is a tourist hub surrounded by many historical monuments, including Udgir Fort and Kharosa Caves. ",  /* 92 (latur ) */
				"The Indus Valley Civilization of North and North-West India witnessed a widespread practice of stitching. Originally, the Kurta Pajama was a cultural dress of the Indian subcontinent. It was only post the British colonization of India that the concept of this garment pair spread across other parts of the world.",  /* 93 (kurta ) */
				"The Vedas are a large body of religious texts originating in ancient India. Composed in Vedic Sanskrit, the texts constitute the oldest layer of Sanskrit literature and the oldest scriptures of Hinduism. There are four Vedas: the Rigveda, the Yajurveda, the Samaveda and the Atharvaveda.",  /* 94 (vedas ) */
				"A bhaji or Bajji, is a type of fritter originating from the Indian subcontinent. It is made from spicy hot vegetables, commonly onion, and has several variants",  /* 95 (bhaji ) */
				"A choli is a blouse or a bodice-like upper garment that is commonly cut short leaving the midriff bare, it is worn along with a sari in the Indian subcontinent. The choli is also part of the ghagra choli costume in the Indian subcontinent.",  /* 96 (choli ) */
				"Oriya or Odia is an Indo-Aryan language spoken in the Indian state of Odisha. It is the official language in Odisha where native speakers make up 82% of the population, and it is also spoken in parts of West Bengal, Jharkhand and Chhattisgarh.",  /* 97 (oriya ) */
				"The dhoti, also known as veshti, vetti, dhuti, mardani, chaadra, dhotar, or Jaiñbohorpanchey, is a type of sarong, tied in a manner that outwardly resembles 'loose trousers'. It is a lower garment forming part of the national or ethnic costume for men in the Indian subcontinent.",  /* 98 (dhoti ) */
				"India’s wheat exports topped an all-time-high of 7 mt valued at $2.05 billion in the fiscal ended March 31, 2022. In mid-February, the Agriculture Ministry estimated the country’s 2021-22 wheat crop (marketed in 2022-23) at a record 111.3 mt.",  /* 99 (wheat ) */
				"No particular sport is recognised as India’s national game, something confirmed by the country’s Ministry of Youth Affairs and Sports. Field Hockey is often incorrectly believed to be  the National Sport of India, because of the international success that hockey has gained since its Olympic debut in the early 20th century, making the sport a household name.",  /* 100 (sport ) */
				"Bidar is a city in the north-eastern part of Karnataka state in India. It is the headquarters of Bidar district which borders Maharashtra and Telangana. It is a rapidly urbanising city in the wider Bidar Metropolitan area. The city is well known for its many sites of architectural, historical and religious importance.",  /* 101 (bidar ) */
				"Palm wine, known by several local names, is an alcoholic beverage created from the sap of various species of palm tree such as the palmyra, date palms, and coconut palms. In India this drink is called Toddy. A toddy shop, also known as a kallu shop is a drinking establishment seen in some parts of India (particularly Kerala) where palm toddy, a mildly alcoholic beverage made from the sap of palm trees, is served along with food. The food served with toddy is very spicy and hot with chilies.",  /* 102 (toddy ) */
				"A South Asian pickle, also known as pacchadi, achar, athanu, loncha, oorugai, or avakaai is a pickled food, native to the Indian subcontinent, made from a variety of vegetables and fruits, preserved in brine, vinegar, or edible oils along with various Indian spices.",  /* 103 (achar ) */
				"Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. He is considered one of the all time greats for his prolific run scoring ability.",  /* 104 (kohli ) */
				"Tihar Prisons, also called Tihar Jail and Tihar Ashram, is a prison complex in India and the largest complex of prisons in South Asia. Run by Department of Delhi Prisons, Government of Delhi, the prison contains nine central prisons, and is one of the two prison complexes in Delhi, along with a district prison at Rohini Prison Complex. It is located in Tihar village, approximately 3 km from Janakpuri, to the west of New Delhi, India.",  /* 105 (tihar ) */
				"Chaas is a curd-based drink popular across the Indian subcontinent. In Rajasthani it is called ghol, in Odia it is called Ghol/Chaash, moru in Tamil and Malayalam, taak in Marathi, majjiga in Telugu, majjige in Kannada, ale in Tulu and laban in Bengali. In Indian English, it is often referred to as buttermilk.",  /* 106 (chaas ) */
				"Sakshi Malik (born 3 September 1992) is an Indian freestyle wrestler. At the 2016 Summer Olympics, she won the bronze medal in the 58 kg category, becoming the first Indian female wrestler to win a medal at the Olympics. She is a part of the JSW Sports Excellence Program, along with fellow female wrestlers Vinesh Phogat, Babita Kumari and Geeta Phogat.",  /* 107 (malik ) */
				"Bandh  (literally: shutting down) is a form of protest used by political activists in South Asian countries such as India and Nepal. It is similar to a general strike. During a bandh, a political party or a community declare a general strike.",  /* 108 (bandh ) */
				"The Western Ghats or the Sahyadri Mountain range is a mountain range that covers an area of 160,000 km² in a stretch of 1,600 km parallel to the western coast of the Indian peninsula, traversing the states of Karnataka, Goa, Maharashtra, Gujarat, Kerala, and Tamil Nadu. ",  /* 109 (ghats ) */
				"The term Khans of Bollywood refers to several actors of Bollywood, the Mumbai-based Hindi language Indian film industry, whose surnames are Khan. Most commonly, this involves the Three Khans: Shah Rukh Khan, Aamir Khan and Salman Khan.",  /* 110 (khans ) */
				"Omkar 1973 Worli is a multi-skyscraper project located in Worli, Mumbai. It is a 3-tower development by Omkar Realtors. The project is expected to be completed by 2022. Once complete, Omkar 1973 will be one of the tallest structures in India. The 400-plus sky bungalows, ranging from 2,500 sq. ft. to 18,200 sq. ft. area. It will have a height of over 267 meters and an area of about 5,000,000 sq. ft. ",  /* 111 (omkar ) */
				"Nagar is a village in the Phillaur tehsil of Jalandhar District of the Indian state of Punjab. It is located on Phillaur-Nawanshahr Road, 6.7 kilometres (4.2 mi) from the head postal office in Phillaur, 7 kilometres (4.3 mi) from Apra, 50 kilometres (31 mi) from Jalandhar, and 117 kilometres (73 mi) from the state capital of Chandigarh.",  /* 112 (nagar ) */
				"The Indus Valley Civilisation (IVC), also known as the Harappan civilisation or Indus civilisation, was a Bronze Age civilisation in the northwestern regions of South Asia, lasting from 3300 BCE to 1300 BCE, and in its mature form from 2600 BCE to 1900 BCE. Together with ancient Egypt and Mesopotamia, it was one of three early civilisations of the Near East and South Asia, and of the three, the most widespread, its sites spanning an area stretching from today's northeast Afghanistan, through much of Pakistan, and into western and northwestern India.",  /* 113 (indus ) */
				"The mundu is a garment worn around the waist in the Indian states of Kerala, Tamil Nadu, the Lakshadweep archipelago, and the Indian Ocean island nation of Maldives. It is closely related to sarongs like dhotis and lungis. It is normally woven in cotton and coloured white or cream. The colour is dependent on whether the cotton is bleached or unbleached. ",  /* 114 (mundu ) */
				"Mahendra Singh Dhoni is an Indian professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is a right-handed wicket-keeper batsman. He led the team to three ICC trophies including the 2007 ICC World Twenty20, 2011 ICC Cricket World Cup and 2013 ICC Champions Trophy.",  /* 115 (dhoni ) */
				"Surya is the Sun. He is traditionally one of the major five deities in the Smarta tradition, all of whom are considered as equivalent deities in the Panchayatana puja and a means to realise Brahman. Other names of Surya in ancient Indian literature include Aditya, Arka, Bhanu, Savitr, Pushan, Ravi, Martanda, Mitra, Bhaskara, Prabhakara, Kathiravan, and Vivasvan.",  /* 116 (surya ) */
				"Jowar or sorghum is a cereal grain better known as jowar in India. It can be found in tropical and subtropical climates. People have been eating sorghum for over 5000 years. Its many uses and benefits can be traced back to several civilisations across the world. It is said to be the fifth most important cereal crop grown in the world. Many cultures recognise jowar benefits.",  /* 117 (jowar ) */
				"Babur , born Zahīr ud-Dīn Muhammad, was the founder of the Mughal Empire in the Indian subcontinent. He was a descendant of Timur and Genghis Khan through his father and mother respectively. He was also given the posthumous name of Firdaws Makani ('Dwelling in Paradise'). Babur married several times. Notable among his sons are Humayun, Kamran Mirza and Hindal Mirza. Babur died in 1530 in Agra and Humayun succeeded him. Babur was first buried in Agra but, as per his wishes, his remains were moved to Kabul and reburied. He ranks as a national hero in Uzbekistan and Kyrgyzstan.",  /* 118 (babur ) */
				"The Kingdomin of Kashi was an ancient Indian kingdom located in the region around its capital Varanasi, the latter bounded by the Varuna and Asi rivers in the north and south and named after them. It was one of the sixteen Mahajanapadas,[1] great states that emerged in northern India at the start of the 6th century BCE. Varanasi is a city on the Ganges river in northern India that has a central place in pilgrimage, death, and mourning in the Hindu world, even as the traditions are transformed in the face of modernization, generational changes and emigration. The city has a syncretic tradition of Muslim artisanship that underpins its tourism. The name Varanasi was officially so revived after 1947, but the city is still widely known by its earlier name Banaras or Benares, and its ancient name Kashi.",  /* 119 (kashi ) */
				"Methi is hindi for Fenugreek. The production of fenugreek in India is marked by its dominant position in world production and export. India is the largest producer of fenugreek in the world. Within India Rajasthan accounts for its largest cropped area and production. The fenugreek plant is an annual herbaceous forage legume with aroma, which is used for food in the form of its seeds as spices, and its leaves as a vegetable. It is also used as a medicinal herb in several Ayurvedic formulations for treatment of dry skin, boils, hair loss and so forth. It is believed that fenugreek was known in the Indian cuisine even 3,000 years ago.",  /* 120 (methi ) */
				"Hisar is a city, municipal corporation and administrative headquarters of Hisar district of Hisar division in the state of Haryana in northwestern India. Hisar near by Bhadra Rajasthan (RJ 49). The word Hisar means fort or castle in Persian. The city was ruled by several major powers, including the Tughlaqs in the 14th century, the Mughals in the 16th century, and the British in the 19th century. After India achieved independence, it was unified with the state of Punjab. When Punjab was divided in 1966, Hisar became part of Haryana.",  /* 121 (hisar ) */
				"Neelam Sanjiva Reddy was an Indian politician who served as the sixth president of India, serving from 1977 to 1982. Beginning a long political career with the Indian National Congress Party in the independence movement, he went on to hold several key offices in independent India—as the first Chief Minister of Andhra Pradesh, a two-time Speaker of the Lok Sabha and a Union Minister—before becoming the youngest-ever Indian president.",  /* 122 (reddy ) */
				"Appam is a type of pancake, originating from South India, made with fermented rice batter and coconut milk, common in Tamil Nadu,Kerala and many other southern states in India. It is eaten most frequently for breakfast or dinner.",  /* 123 (appam ) */
				"Udupi, otherwise spelt Udipi and also known as Odipu, is a city in the Indian state of Karnataka. It is the administrative headquarters of Udupi district, and one of the fastest-growing cities in Karnataka. Udupi is one of the top tourist attractions in Karnataka and has various educational institutions. It is notable for the Krishna Temple and is also known as the temple city.[3] It also lends its name to the popular Udupi cuisine, is also known as Parashurama Kshetra, and is famous for Kanakana kindi. A centre of pilgrimage, Udupi is known as Rajata Peetha and Shivalli (Shivabelle).",  /* 124 (udupi ) */
				"Kapil Dev Ramlal Nikhanj is an Indian former cricketer. He was a fast-medium bowler and a hard-hitting middle-order batsman, and was named by Wisden as the Indian Cricketer of the Century in 2002. Kapil captained the Indian cricket team that won the 1983 Cricket World Cup, and in the process became the first Indian captain to win the Cricket World Cup, and is still the youngest captain (at the age of 24) to win the World Cup for any team. He retired in 1994, at the time holding the world record for the highest number of wickets taken in Test cricket, a record subsequently broken by Courtney Walsh in 2000.",  /* 125 (kapil ) */
				"A prominent feature of the Indian mythology, the lotus is one with the Indian identity and represents the core values of Indian psyche. The Lotus symbolizes spirituality, fruitfulness, wealth, knowledge and illumination. The most important thing about lotus is that even after growing in murky water it is untouched by its impurity. The Lotus is also the national flower of India. ",  /* 126 (lotus ) */
				"Noida, short for New Okhla Industrial Development Authority, is a planned city located in Gautam Buddha Nagar district of the Indian state of Uttar Pradesh. Noida is a satellite city of Delhi and is a part of the National Capital Region of India. As per provisional reports of Census of India, the population of Noida in 2011 was 642,381. The city is managed by New Okhla Industrial Development Authority. The district's administrative headquarters are in the nearby city of Greater Noida.",  /* 127 (noida ) */
				"A bindi is an auspicious mark worn by young girls and women in India. The name is derived from “Bindu”, a Sanskrit word for “point” or “dot” and is usually red in color made with vermillion powder which is worn by women between their eyebrows on the forehead. The origin of the bindi can be found in ancient times but has lost this significance in modern life and is mostly worn all over the world as an accessory.",  /* 128 (bindi ) */
				"Kulfi is a frozen dairy dessert originating in the Indian subcontinent during the Mughal era in the 16th century. It is often described as ”traditional Indian ice cream.” Kulfi is a traditional sweet of the Indian subcontinent, where it is commonly sold by street vendors called kulfiwallahs. It is popular in Bangladesh, Myanmar, Nepal, Sri Lanka, and the Middle East and part of the national cuisines of India, Pakistan, and Trinidad and Tobago.",  /* 129 (kulfi ) */
				"The term Nawab of Pataudi refers to the lineage of rulers of the former princely Pataudi State in Northern India. Pataudi was established in 1804 by the British East India Company. The 8th Nawab of Pataudi, Iftikhar Ali Khan Pataudi, played first-class cricket for both England and India while his son, Mansoor Ali Khan Pataudi, the last Nawab, captained the Indian cricket team. Actor Saif Ali Khan and actress Soha Ali Khan are the children of the last Nawab of Pataudi, whereas actress Sara Ali Khan is the granddaughter of the last Nawab.",  /* 130 (nawab ) */
				"Durga is a major deity in Hinduism. She is worshipped as a one of principal aspect of the supreme mother goddess Mahadevi and is one of the most popular and widely revered among Indian divinities. She is associated with protection, strength, motherhood, destruction and wars. Durga has a significant following all over India (particularly in its eastern states such as West Bengal, Odisha, Jharkhand, Assam and Bihar), Bangladesh and Nepal. Durga is revered after spring and autumn harvests, specially during the festivals of Durga Puja and Navratri.",  /* 131 (durga ) */
				"Narada or Narad Muni, is a sage divinity, famous in Hindu traditions as a travelling musician and storyteller, who carries news and enlightening wisdom. He is one of mind-created children of Brahma, the creator god. He appears in a number of Hindu texts, notably the Mahabharata, telling Yudhishtira the story of Prahlada and the Ramayana as well as in the Puranas. His Greek and Roman counterparts are Mercury and Hermes.",  /* 132 (narad ) */
				"Korba is a city and an industrial area in Korba District in the Indian state of Chhattisgarh. Korba was erstwhile part of Bilaspur District before 25 May 1998 later that Korba was made a separate District for ease of administration but it is still under Bilaspur Division. Korba is called power capital of Chhattisgarh due to its Coal reserves and Industrial base for multiple thermal based power plants from Public sector like NTPC Limited, CSEB from State of Chhattisgarh as well as from private sector apart from Power plants Korba has the Asia's second largest and India's largest open cast coal mine in Gevra area of Korba Coalfield. Korba produces 140 Million tons of coal every year which accounts for 17% of Country's total coal production and 85% of Chhattisgarh Coal production.",  /* 133 (korba ) */
				"Akola is the third largest city in Vidarbha after Nagpur and Amravati and tenth largest city in Maharashtra. is located about 580 kilometres (360 mi) east of the state capital, Mumbai, and 250 kilometres (160 mi) west of the second capital, Nagpur. Akola is the administrative headquarters of the Akola district located in the Amravati division, and is governed by the Akola Municipal Corporation. Akola is an important educational center with several colleges affiliated with the Sant Gadge Baba Amravati University. The city is developing into a market center. The primary language spoken by the people of Akola is Marathi.",  /* 134 (akola ) */
				"Garcinia indica, a plant in the mangosteen family (Clusiaceae), commonly known as kokum, is a fruit-bearing tree that has culinary, pharmaceutical, and industrial uses. Kokum is indigenous to the tropical forest regions of India. Of the 35 species found in India, 17 are endemic. Of these, seven are endemic to the Western Ghats, six in the Andaman and Nicobar Islands and four in the northeastern region of India. The kokum variety from the Ratnagiri and Sindhudurg districts from the coastal Konkan region of the state of Maharashtra in India has received the GI (Geographical Indication) tag.",  /* 135 (kokum ) */
				"Simla also known as Shimla,  is the capital and the largest city of the Northern Indian state of Himachal Pradesh. In 1864, Simla was declared as the summer capital of British India. After independence, the city became the capital of East Punjab and was later made the capital city of Himachal Pradesh. It is the principal commercial, cultural and educational centre of the state. Owing to its steep terrain, Simla hosts the mountain biking race MTB Himalaya, which started in 2005 and is regarded as the biggest event of its kind in South Asia. Simla also has the largest natural ice skating rink in South Asia. Apart from being a tourism centre, the city is also an educational hub with several colleges and research institutions.",  /* 136 (simla ) */
				"Suresh Raina is a former Indian international cricketer. He occasionally served as stand-in captain for Indian men's national cricket team during the absence of the main captain. He played for Uttarpradesh in domestic cricket circuit. He is an aggressive left-handed middle-order batsman and an occasional off-spin bowler. He is the second-youngest player ever to captain India. He was the captain of Gujarat Lions in the Indian Premier League, and he also served as vice-captain of the Chennai Super Kings. He is the first Indian batsman to hit a century in all three formats of international cricket.",  /* 137 (raina ) */
				"Avadi is a suburb of Chennai lying inside the Chennai Metropolitan Area limit, located in the Thiruvallur district of Tamil Nadu, India. It is a municipal corporation lying to the west of Chennai, about 22 kilometres (14 mi) west of Chennai Central Railway Station. It is surrounded by major defence establishments and is home to various universities and engineering colleges. The city is served by Avadi Railway Station of the Chennai Suburban Railway. As of 2011, Avadi had a population of 345,996, which is 10th most populous place in Tamil Nadu. It is home to the Heavy Vehicles Factory (HVF), Ordnance Factory Board (ODF) which houses Engine Factory and Combat Vehicles Research and Development Establishment (CVRDE). The lake in Avadi was known as Paaleripattu, which is now found only in very old land documents.",  /* 138 (avadi ) */
				"Uttar Pradesh is a state in northern India. With over 200 million inhabitants, it is the most populated state in India as well as the most populous country subdivision in the world. It was established in 1950 after India had become a republic. It was a successor to the United Provinces (UP) during the period of the Dominion of India (1947–1950), which in turn was a successor to the United Provinces (UP) established in 1935, and eventually of the United Provinces of Agra and Oudh established in 1902 during the British Raj. The state is divided into 18 divisions and 75 districts, with the state capital being Lucknow, and Prayagraj serving as the judicial capital.",  /* 139 (uttar ) */
				"Major Dhyan Chand Saini was an Indian field hockey player widely regarded as one of the greatest field hockey player in history. He was known for his extraordinary ball control and goal-scoring feats, in addition to earning three Olympic gold medals, in 1928, 1932 and 1936, during an era where India dominated field hockey. His influence extended beyond these victories, as India won the field hockey event in seven out of eight Olympics from 1928 to 1964. His birthday, 29 August, is celebrated as National Sports Day in India every year. India's highest sporting honour Major Dhyan Chand Khel Ratna Award is named after him.",  /* 140 (chand ) */
				"Bekal is a small town in the Kasaragod district on the West coast of the state of Kerala, India. Bekal is a town located at the Northern extreme of Kerala 16 km south of the town on the National Highway and is the largest and best preserved fort in the whole of Kerala, bordered by beach. Shaped like a giant keyhole, the historic Bekal Fort offers a view of the Arabian Sea from its tall observation towers, which had huge cannons a couple centuries ago.",  /* 141 (bekal ) */
				"Satya Narayana Nadella is an Indian American business executive. He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO and John W. Thompson in 2021 as chairman. Before becoming CEO, he was the executive vice president of Microsoft's cloud and enterprise group, responsible for building and running the company's computing platforms.",  /* 142 (satya ) */
				"Satna is a city in the Indian state of Madhya Pradesh. It serves as the headquarters of Satna district. It is 6th largest city and 8th most populous city of the state. The city is 500 km east of the state capital Bhopal. The city is distributed over a land area of 111.9 square kilometres. Satna has been selected as one of the hundred Indian cities to be developed as a smart city under PM Narendra Modi's flagship Smart Cities Mission.",  /* 143 (satna ) */
				"Raita is a side dish in Indian cuisine made of dahi (yogurt, often referred to as curd) together with raw or cooked vegetables, more seldom fruit, or in the case of boondi raita, with fried droplets of batter made from besan (chickpea flour, generally labeled as gram flour). The closest approximation in western cuisine is a side dish or dip, or a cooked salad. It is often referred to as a condiment, but unlike traditional western condiments like salt, pepper, mustard and horseradish that make dishes more spicy, a dish of dahi or raita has a cooling effect to contrast with spicy curries and kebabs that are the main fare of some Asian cuisines. In Indian cuisine, some type of flatbread may be eaten together with raita, chutneys and pickles. The yogurt may be seasoned with coriander, roasted cumin seeds, mint, cayenne pepper, chaat masala and other herbs and spices.",  /* 144 (raita ) */
				"Gram flour or Besan is a pulse flour made from a type of ground chickpea called the gram chickpea. It is a staple ingredient in the cuisine of the Indian subcontinent, including in Indian, Bangladeshi, Burmese, Nepali, Pakistani, Sri Lankan and Caribbean cuisines. In Andhra Pradesh, it is used in a curry with gram flour cakes called Senaga Pindi Kura and is eaten with Chapati or Puri, mostly during winter for breakfast. Chila, a pancake made with gram flour batter, is a popular street food in India.",  /* 145 (besan ) */
				"Rajma, also known as rajmah, razma, or lal lobia, is a vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice. It is a part of regular diet in India, Nepal, Bangladesh and Punjab province of Pakistan. The dish developed after the red kidney bean was brought to the Indian subcontinent from Mexico. Rajma chawal is kidney beans served with boiled rice.",  /* 146 (rajma ) */
				"The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was declared a winner of the New 7 Wonders of the World (2000–2007) initiative.",  /* 147 (mahal ) */
				"Kajol Devgn, known mononymously as Kajol, is an Indian actress. Described in the media as one of the most successful actresses of Hindi cinema, she is the recipient of numerous accolades, including six Filmfare Awards, among which she shares the record for most Best Actress wins with her late aunt Nutan. In 2011, she was honoured with the Padma Shri by the Government of India.",  /* 148 (kajol ) */
				"Vijay Amritraj is an Indian sports commentator, actor and retired professional tennis player from Madras. He was awarded the Padma Shri, India's 4th highest civilian honour, in 1983. After playing his first Grand Prix event in 1970, Amritraj achieved his first significant success in singles in 1973 when he reached the quarterfinals at two Grand Slam events. At Wimbledon, he lost in five sets to the eventual champion Jan Kodeš and later that summer at the US Open, lost to Ken Rosewall after having beaten Rod Laver two rounds earlier.  Amritraj was part of the India Davis Cup team that reached the finals in 1974 and 1987. Amritraj had a career singles win–loss record 384–296, winning 16 singles and 13 doubles titles.",  /* 149 (vijay ) */
				"Nagas are various ethnic groups native to northeastern India and northwestern Myanmar. The groups have similar cultures and traditions, and form the majority of population in the Indian state of Nagaland and Naga Self-Administered Zone of Myanmar; with significant populations in Manipur, Arunachal Pradesh and Assam in India; Sagaing Region and Kachin State in Myanmar (Burma).",  /* 150 (nagas ) */
				"Jagat is a Sanskrit word that means ”world,” specifically the physical world or planet. In Advaita Vedanta, jagat is understood as a persons' subjective experience of reality in the material world. It is described specifically in contrast to Brahman, which is considered to be the Supreme Reality, Infinite and Omnipresent. In this understanding, jagat is considered an illusion and unreal in comparison to Brahman. Brahman is the truly awakened state, where individuals rediscover their oneness with Brahman.",  /* 151 (jagat ) */
				"Bhuna is technically an Indian cooking technique in which spices are fried in very hot oil, often until they have formed a paste. For many people, however, the term bhuna is used to refer to a curry dish which has been prepared using these fried spices. This type of curry usually consists of meat, vegetables, or a combination of the two, cooked and served in a thick, spiced sauce. It is common throughout the Bengal region of northeast India and western Bangladesh and is also a popular menu item at Indian restaurants in the US and Europe.",  /* 152 (bhuna ) */
				"Poori or Puri is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in poori bhaji, but may also be eaten with sweet dishes.",  /* 153 (poori ) */
				"The two main traditions of Indian classical music are Carnatic music, which is practised predominantly in the peninsular (southern) regions, and Hindustani music, which is found in the northern, eastern and central regions. The basic concepts of this music includes Shruti (microtones), Swaras (notes), Alankar (ornamentations), Raga (melodies improvised from basic grammars), and Tala (rhythmic patterns used in percussion). Its tonal system divides the octave into 22 segments called Shrutis, not all equal but each roughly equal to a quarter of a whole tone of the Western music. Both the classical music are standing on the fundamentals of The seven notes of Indian Classical music. These seven notes are also called as Sapta svara or Sapta Sur. These seven svaras are Sa, Re, Ga, Ma, Pa, Dha and Ni respectively. ",  /* 154 (music ) */
				"Atman is a Sanskrit word that refers to the (universal) Self or self-existent essence of individuals, as distinct from ego (Ahamkara), mind (Citta) and embodied existence (Prakrti). The term is often translated as soul, but is better translated as ”Self,” as it solely refers to pure consciousness or witness-consciousness, beyond identification with phenomena. In order to attain moksha (liberation), a human being must acquire self-knowledge (Atma Gyaan or Brahmajnana).",  /* 155 (atman ) */
				"The Supreme Court of India is the supreme judicial body of India and the highest court of the Republic of India under the constitution. It is the most senior constitutional court, and has the power of judicial review. The chief justice of India is the head and chief judge of the Supreme Court, which consists of a maximum of 34 judges and has extensive powers in the form of original, appellate and advisory jurisdictions. As the apex constitutional court in India, it takes up appeals primarily against verdicts of the high courts of various states of the Union and other courts and tribunals. ",  /* 156 (court ) */
				"India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. India has been a federal republic since 1950, governed in a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to 1.211 billion in 2011. During the same time, its nominal per capita income increased from US$64 annually to US$1,498, and its literacy rate from 16.6% to 74%. From being a comparatively destitute country in 1951, India has become a fast-growing major economy and a hub for information technology services, with an expanding middle class. Jai Hind!",  /* 157 (india ) */						  
                ];	
                saveArchiveNoApp();
                if ((e.gameApp.gameStatus == "WIN" || e.gameApp.gameStatus == "FAIL") && funFacts.length > (e.gameApp.dayOffset - 266)) {
                  var funFact = funFacts[e.gameApp.dayOffset - 266];  

                  if (funFact != "") {
                    e.shadowRoot.appendChild(FFs.content.cloneNode(!0));
                  
                    var ff = document.createElement("div");
                    ff.innerText = funFact;
                    e.shadowRoot.appendChild(ff);
                  }
                }
					
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics"),
                  s = this.shadowRoot.getElementById("guess-distribution"),
                  t = Math.max.apply(
                    Math,
                    g(Object.values(this.stats.guesses))
                  );
                if (
                  Object.values(this.stats.guesses).every(function (e) {
                    return 0 === e;
                  })
                ) {
                  var o = document.createElement("div");
                  o.classList.add("no-data"),
                    (o.innerText = "No Data"),
                    s.appendChild(o);
                } else
                  for (
                    var n = 1;
                    n < Object.keys(this.stats.guesses).length;
                    n++
                  ) {
                    var r = n,
                      i = this.stats.guesses[n],
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector(".guess").textContent = r;
                    var u = l.querySelector(".graph-bar");
                    if (
                      ((u.style.width = "".concat(d, "%")),
                      "number" == typeof i)
                    ) {
                      (l.querySelector(".num-guesses").textContent = i),
                        i > 0 && u.classList.add("align-right");
                      var c = parseInt(
                        this.getAttribute("highlight-guess"),
                        10
                      );
                      c && n === c && u.classList.add("highlight");
                    }
                    s.appendChild(l);
                  }
                if (
                  ([
                    "gamesPlayed",
                    "winPercentage",
                    /*"currentStreak",*/
                    /*"maxStreak",*/
                    "averageGuesses",
                  ].forEach(function (s) {
                    var t = Ms[s],
                      o = e.stats[s],
                      n = Ls.content.cloneNode(!0);
                    (n.querySelector(".label").textContent = t),
                      (n.querySelector(".statistic").textContent = o),
                      a.appendChild(n);
                  }),
                  this.gameApp.gameStatus !== Za)
                ) {
                  // var p = this.shadowRoot.querySelector(".footer"),
                  //   m = Is.content.cloneNode(!0);
                  // p.appendChild(m),
                  //   this.shadowRoot
                  //     .querySelector("button#share-button")
                  //     .addEventListener("click", function (a) {
                  //       a.preventDefault(), a.stopPropagation();
                  //       As(
                  //         (function (e) {
                  //           var a = e.evaluations,
                  //             s = e.dayOffset,
                  //             t = e.rowIndex,
                  //             o = e.isHardMode,
                  //             n = e.isWin,
                  //             r = JSON.parse(window.localStorage.getItem(j)),
                  //             i = JSON.parse(window.localStorage.getItem(S)),
                  //             arc = JSON.parse(window.localStorage.getItem(archiveDate)),
                  //             l = "Indle ".concat(s - arc);
                  //           (l += " ".concat(n ? t : "X", "/").concat(6)),
                  //             o && (l += "*");
                  //           var d = "";
                  //           return (
                  //             a.forEach(function (e) {
                  //               e &&
                  //                 (e.forEach(function (e) {
                  //                   if (e) {
                  //                     var a = "";
                  //                     switch (e) {
                  //                       case Ma:
                  //                         a = (function (e) {
                  //                           return e ? "🟧" : "🟥";
                  //                         })(i);
                  //                         break;
                  //                       case Ia:
                  //                         a = (function (e) {
                  //                           return e ? "🟦" : "🟨";
                  //                         })(i);
                  //                         break;
                  //                       case Oa:
                  //                         a = (function (e) {
                  //                           return e ? "⬛" : "⬜";
                  //                         })(r);
                  //                     }
                  //                     d += a;
                  //                   }
                  //                 }),
                  //                 (d += "\n"));
                  //             }),
                  //             { text: "".concat(l, "\n\n").concat(d.trimEnd()) }
                  //           );
                  //         })({
                  //           evaluations: e.gameApp.evaluations,
                  //           dayOffset: e.gameApp.dayOffset,
                  //           rowIndex: e.gameApp.rowIndex,
                  //           isHardMode: e.gameApp.hardMode,
                  //           isWin: e.gameApp.gameStatus === es,
                  //         }),
                  //         function () {
                  //           e.gameApp.addToast(
                  //             "Copied results to clipboard",
                  //             2e3,
                  //             !0
                  //           );
                  //         },
                  //         function () {
                  //           e.gameApp.addToast("Share failed", 2e3, !0);
                  //         }
                  //       );
                  //     });
                var announcement = document.createElement("div");
                //announcement.innerHTML = '<style> a {color: var(--orange);} a:hover {color: var(--green);}</style> <center style="font-size:12px", "acolor: #FF0000">Follow us <a href="https://www.twitter.com/IndleGame" target="_blank"><strong>@IndleGame</strong></a> on <strong>Twitter!<strong></center>';
                announcement.innerHTML = '<center style="font-size:12px">Try a different puzzle. Play <a href="https://sank0403.github.io/geordle/"target="_"><strong>GEORDLE</strong></a> 🌎 \n <style> a {color: var(--orange);} a:hover {color: var(--green);}</style> <center style="font-size:12px", "acolor: #FF0000">Share your results with us <a href="https://www.twitter.com/IndleGame" target="_blank"><strong>@IndleGame</strong></a> on <strong> Twitter! </strong></center>';  
				this.shadowRoot.appendChild(announcement); 					  
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML =
      '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(
          t,
          [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                  this.shadowRoot
                    .querySelector(".container")
                    .addEventListener("click", function (a) {
                      a.stopPropagation(),
                        e.hasAttribute("checked")
                          ? e.removeAttribute("checked")
                          : e.setAttribute("checked", ""),
                        e.dispatchEvent(
                          new CustomEvent("game-switch-change", {
                            bubbles: !0,
                            composed: !0,
                            detail: {
                              name: e.getAttribute("name"),
                              checked: e.hasAttribute("checked"),
                              disabled: e.hasAttribute("disabled"),
                            },
                          })
                        );
                    });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["checked"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
      $s.innerHTML =	  '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .s {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  . {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>INDLE</strong> in 6 tries.</p>\n   <p>Each guess must be a valid word. Hit the enter button to submit.</p>\n      <p>After each guess, the colour of the tiles will change to show how close your guess was to the word.</p>\n <p>The answer will be a word/place/name/jargon related to India in some way, and an interesting trivia will be displayed after you play!</p>\n     <div class="s">\n        <p><strong>Examples</strong></p>\n        <div class="">\n          <div class="row">\n            <game-tile letter="s" evaluation="correct" reveal></game-tile>\n            <game-tile letter="t"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="r"></game-tile>\n          </div>\n          <p>The letter <strong>S</strong> is in the word and in the right spot.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="l" evaluation="present" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="k"></game-tile>\n          </div>\n          <p>The letter <strong>L</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="e" evaluation="absent" reveal></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>E</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><center><strong style="color: var(--orange);" >A new INDLE will be available each day until Independence Day, Aug 15th 2022.</strong></center></p>\n </div>\n  </section>\n';	
    var Hs = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              this.shadowRoot.appendChild($s.content.cloneNode(!0));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(
        2e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n'
      );
    var Ds = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot
                  .querySelector("game-icon")
                  .addEventListener("click", function (a) {
                    e.shadowRoot
                      .querySelector(".overlay")
                      .classList.add("closing");
                  }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".overlay")
                      .classList.remove("closing"),
                    Array.from(e.childNodes).forEach(function (a) {
                      e.removeChild(a);
                    }),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML =
      '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings:
          "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace:
          "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close:
          "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share:
          "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics:
          "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
      },
      Fs = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                  "backspace" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--color-tone-1)"),
                  "share" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--white)");
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
      Js = 36e5,
      Us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({ mode: "open" });
          var o = new Date();
          return (
            o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            (e.targetEpochMS = o.getTime()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "padDigit",
              value: function (e) {
                return e.toString().padStart(2, "0");
              },
            },
            {
              key: "updateTimer",
              value: function () {
                var e,
                  a = new Date().getTime(),
                  s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = "00:00:00";
                else {
                  var t = Math.floor((s % 864e5) / Js),
                    o = Math.floor((s % Js) / Ys),
                    n = Math.floor((s % Ys) / 1e3);
                  e = ""
                    .concat(this.padDigit(t), ":")
                    .concat(this.padDigit(o), ":")
                    .concat(this.padDigit(n));
                }
                this.$timer.textContent = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                  (this.$timer = this.shadowRoot.querySelector("#timer")),
                  (this.intervalId = setInterval(function () {
                    e.updateTimer();
                  }, 200));
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                clearInterval(this.intervalId);
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    return (
      customElements.define("countdown-timer", Us),
      (e.CountdownTimer = Us),
      (e.GameApp = ts),
      (e.GameHelp = Hs),
      (e.GameIcon = Fs),
      (e.GameKeyboard = us),
      (e.GameModal = ns),
      (e.GamePage = Ds),
      (e.GameRow = x),
      (e.GameSettings = _a),
      (e.GameStats = Os),
      (e.GameSwitch = Ps),
      (e.GameThemeManager = _),
      (e.GameTile = v),
      (e.GameToast = Aa),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      e
    );
  })({}));	