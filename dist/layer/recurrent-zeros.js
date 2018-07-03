'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zeros2d = require('../utilities/zeros-2d');

var _zeros2d2 = _interopRequireDefault(_zeros2d);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecurrentZeros = function (_Internal) {
  _inherits(RecurrentZeros, _Internal);

  function RecurrentZeros() {
    _classCallCheck(this, RecurrentZeros);

    return _possibleConstructorReturn(this, (RecurrentZeros.__proto__ || Object.getPrototypeOf(RecurrentZeros)).apply(this, arguments));
  }

  _createClass(RecurrentZeros, [{
    key: 'setDimensions',
    value: function setDimensions(width, height) {
      this.praxis = null;
      this.width = width;
      this.height = height;
      this.weights = new _zeros2d2.default(width, height);
      this.deltas = new _zeros2d2.default(width, height);
    }
  }, {
    key: 'setupKernels',
    value: function setupKernels() {}
  }, {
    key: 'reuseKernels',
    value: function reuseKernels() {}
  }, {
    key: 'predict',
    value: function predict() {}
  }, {
    key: 'compare',
    value: function compare() {}
  }, {
    key: 'learn',
    value: function learn(previousLayer, nextLayer, learningRate) {
      this.weights = this.praxis.run(this, previousLayer, nextLayer, learningRate);
      this.deltas = (0, _zeros2d2.default)(this.width, this.height);
    }
  }, {
    key: 'validate',
    value: function validate() {}
  }, {
    key: 'reset',
    value: function reset() {}
  }]);

  return RecurrentZeros;
}(_types.Internal);

exports.default = RecurrentZeros;
//# sourceMappingURL=recurrent-zeros.js.map