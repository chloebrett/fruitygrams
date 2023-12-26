(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-events'.");
    }
    root['ktor-ktor-events'] = factory(typeof this['ktor-ktor-events'] === 'undefined' ? {} : this['ktor-ktor-events'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-utils']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var LinkedListNode = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var classMeta = kotlin_kotlin.$_$.d5;
  var setMetadataFor = kotlin_kotlin.$_$.x5;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.e;
  var equals = kotlin_kotlin.$_$.g5;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var addSuppressed = kotlin_kotlin.$_$.e8;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var protoOf = kotlin_kotlin.$_$.w5;
  var VOID = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HandlerRegistration, 'HandlerRegistration', classMeta, LinkedListNode);
  setMetadataFor(Events, 'Events', classMeta, VOID, VOID, Events);
  setMetadataFor(EventDefinition, 'EventDefinition', classMeta, VOID, VOID, EventDefinition);
  //endregion
  function HandlerRegistration() {
  }
  function Events() {
    this.t1v_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).u1v = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.t1v_1.f1h(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
      var cur = tmp0_safe_receiver.vl_1;
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.raise.<anonymous>' call
          var registration = cur;
          try {
            var tmp = registration.y1v_1;
            (typeof tmp === 'function' ? tmp : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_0;
              if (tmp0_safe_receiver_0 == null) {
                tmp_0 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_0 = Unit_instance;
              }
              if (tmp_0 == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.vl_1;
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp1_safe_receiver;
    }
  };
  function EventDefinition() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-events.js.map
