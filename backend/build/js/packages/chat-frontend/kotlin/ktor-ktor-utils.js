(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    root['ktor-ktor-utils'] = factory(typeof this['ktor-ktor-utils'] === 'undefined' ? {} : this['ktor-ktor-utils'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-io'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.b5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var protoOf = kotlin_kotlin.$_$.w5;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var getStringHashCode = kotlin_kotlin.$_$.l5;
  var classMeta = kotlin_kotlin.$_$.d5;
  var setMetadataFor = kotlin_kotlin.$_$.x5;
  var interfaceMeta = kotlin_kotlin.$_$.n5;
  var charArray = kotlin_kotlin.$_$.z4;
  var charSequenceGet = kotlin_kotlin.$_$.a5;
  var concatToString = kotlin_kotlin.$_$.m6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var numberToChar = kotlin_kotlin.$_$.s5;
  var indexOf = kotlin_kotlin.$_$.u6;
  var CoroutineImpl = kotlin_kotlin.$_$.u4;
  var VOID = kotlin_kotlin.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g4;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var equals = kotlin_kotlin.$_$.g5;
  var hashCode = kotlin_kotlin.$_$.m5;
  var Map = kotlin_kotlin.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var Entry = kotlin_kotlin.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.q5;
  var toString = kotlin_kotlin.$_$.y1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.j4;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Element = kotlin_kotlin.$_$.s4;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.q;
  var writeText = kotlin_io_ktor_ktor_io.$_$.z;
  var concatToString_0 = kotlin_kotlin.$_$.l6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Set = kotlin_kotlin.$_$.u2;
  var toString_0 = kotlin_kotlin.$_$.b6;
  var Collection = kotlin_kotlin.$_$.p2;
  var Enum = kotlin_kotlin.$_$.t7;
  var objectMeta = kotlin_kotlin.$_$.v5;
  var firstOrNull = kotlin_kotlin.$_$.e3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var emptyMap = kotlin_kotlin.$_$.c3;
  var getBooleanHashCode = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.a7;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.v1;
  var equals_0 = kotlin_kotlin.$_$.q6;
  var IOException = kotlin_io_ktor_ktor_io.$_$.a1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var Long = kotlin_kotlin.$_$.y7;
  var Comparable = kotlin_kotlin.$_$.s7;
  var isSuspendFunction = kotlin_kotlin.$_$.r5;
  var MutableList = kotlin_kotlin.$_$.t2;
  var objectCreate = kotlin_kotlin.$_$.u5;
  var ArrayList = kotlin_kotlin.$_$.o2;
  var emptyList = kotlin_kotlin.$_$.b3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.j3;
  var last = kotlin_kotlin.$_$.l3;
  var mutableListOf = kotlin_kotlin.$_$.p3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var extendThrowable = kotlin_kotlin.$_$.h5;
  var captureStack = kotlin_kotlin.$_$.x4;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Companion_instance = kotlin_kotlin.$_$.l2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.z1;
  var createFailure = kotlin_kotlin.$_$.g8;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.a2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.b2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var Continuation = kotlin_kotlin.$_$.o4;
  var fillArrayVal = kotlin_kotlin.$_$.i5;
  var intercepted = kotlin_kotlin.$_$.i4;
  var toList = kotlin_kotlin.$_$.a4;
  var KProperty0 = kotlin_kotlin.$_$.j6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k5;
  var lazy = kotlin_kotlin.$_$.k8;
  var isNaN_0 = kotlin_kotlin.$_$.i8;
  var numberToLong = kotlin_kotlin.$_$.t5;
  var IllegalStateException = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.c2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta);
  function get(key) {
    var tmp0_elvis_lhs = this.w1e(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, VOID, [Map], CaseInsensitiveMap);
  setMetadataFor(Entry_0, 'Entry', classMeta, VOID, [Entry]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(DelegatingMutableSet$iterator$1, VOID, classMeta);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, VOID, [Set, Collection]);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta);
  function get_0(name) {
    var tmp0_safe_receiver = this.p1g(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_iterator = this.r1g().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.z1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.a2();
      body(k, v);
    }
    return Unit_instance;
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, VOID, VOID, StringValuesBuilderImpl);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, VOID, [StringValues], StringValuesImpl);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta);
  setMetadataFor(ChannelIOException, 'ChannelIOException', classMeta, IOException);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, VOID, VOID, CopyOnWriteHashMap);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Month, 'Month', classMeta, Enum);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation);
  setMetadataFor(SuspendFunctionGun$continuation$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, VOID, [Attributes], AttributesJs);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException);
  setMetadataFor(KtorSimpleLogger$1, VOID, classMeta);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(JsType, 'JsType', objectMeta);
  //endregion
  function AttributeKey(name) {
    this.u1e_1 = name;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.u1e_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.u1e_1;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof AttributeKey))
      THROW_CCE();
    if (!(this.u1e_1 === other.u1e_1))
      return false;
    return true;
  };
  protoOf(AttributeKey).hashCode = function () {
    return getStringHashCode(this.u1e_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.b1f().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.y1e(element instanceof AttributeKey ? element : THROW_CCE(), other.v1e(element));
    }
  }
  var BASE64_INVERSE_ALPHABET;
  function encodeBase64(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var array = _this__u8e3s4;
    var position = 0;
    var writeOffset = 0;
    var charArray_0 = charArray((imul(_this__u8e3s4.length, 8) / 6 | 0) + 3 | 0);
    while ((position + 3 | 0) <= array.length) {
      var first = array[position];
      var second = array[position + 1 | 0];
      var third = array[position + 2 | 0];
      position = position + 3 | 0;
      var chunk = (first & 255) << 16 | (second & 255) << 8 | third & 255;
      var inductionVariable = 3;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var char = chunk >> imul(6, index) & 63;
          var tmp1 = writeOffset;
          writeOffset = tmp1 + 1 | 0;
          // Inline function 'io.ktor.util.toBase64' call
          charArray_0[tmp1] = charSequenceGet(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), char);
        }
         while (0 <= inductionVariable);
    }
    var remaining = array.length - position | 0;
    if (remaining === 0)
      return concatToString(charArray_0, 0, writeOffset);
    var tmp;
    if (remaining === 1) {
      tmp = (array[position] & 255) << 16 | 0 | 0;
    } else {
      tmp = (array[position] & 255) << 16 | (array[position + 1 | 0] & 255) << 8 | 0;
    }
    var chunk_0 = tmp;
    var padSize = imul(3 - remaining | 0, 8) / 6 | 0;
    var inductionVariable_0 = 3;
    if (padSize <= inductionVariable_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var char_0 = chunk_0 >> imul(6, index_0) & 63;
        var tmp3 = writeOffset;
        writeOffset = tmp3 + 1 | 0;
        // Inline function 'io.ktor.util.toBase64' call
        charArray_0[tmp3] = charSequenceGet(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), char_0);
      }
       while (!(index_0 === padSize));
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < padSize)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'io.ktor.util.encodeBase64.<anonymous>' call
        var tmp0 = writeOffset;
        writeOffset = tmp0 + 1 | 0;
        charArray_0[tmp0] = _Char___init__impl__6a9atx(61);
      }
       while (inductionVariable_1 < padSize);
    return concatToString(charArray_0, 0, writeOffset);
  }
  function _get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0() {
    _init_properties_Base64_kt__ymmsz3();
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  }
  var properties_initialized_Base64_kt_5g824v;
  function _init_properties_Base64_kt__ymmsz3() {
    if (!properties_initialized_Base64_kt_5g824v) {
      properties_initialized_Base64_kt_5g824v = true;
      var tmp = 0;
      var tmp_0 = new Int32Array(256);
      while (tmp < 256) {
        var tmp_1 = tmp;
        tmp_0[tmp_1] = indexOf(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), numberToChar(tmp_1));
        tmp = tmp + 1 | 0;
      }
      BASE64_INVERSE_ALPHABET = tmp_0;
    }
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1f_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$0).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = this.k1f_1.m16(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 2) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.l1f_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.z1().l1f_1, $this$$receiver.a2());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.z1()), $this$$receiver.a2());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n1f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).i = function () {
    return this.n1f_1.i();
  };
  protoOf(CaseInsensitiveMap).o1f = function (key) {
    return this.n1f_1.e2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).e2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.o1f((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).p1f = function (key) {
    return this.n1f_1.h2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).h2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p1f((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).w = function () {
    return this.n1f_1.w();
  };
  protoOf(CaseInsensitiveMap).s = function () {
    this.n1f_1.s();
  };
  protoOf(CaseInsensitiveMap).q1f = function (key, value) {
    return this.n1f_1.x1(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).x1 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.q1f(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r1f = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.w1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.z1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.a2();
      this.q1f(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).y1 = function (from) {
    return this.r1f(from);
  };
  protoOf(CaseInsensitiveMap).s1f = function (key) {
    return this.n1f_1.b2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).b2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.s1f((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).u1 = function () {
    var tmp = this.n1f_1.u1();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).w1 = function () {
    var tmp = this.n1f_1.w1();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).v1 = function () {
    return this.n1f_1.v1();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.n1f_1, this.n1f_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.n1f_1);
  };
  function Entry_0(key, value) {
    this.t1f_1 = key;
    this.u1f_1 = value;
  }
  protoOf(Entry_0).z1 = function () {
    return this.t1f_1;
  };
  protoOf(Entry_0).a2 = function () {
    return this.u1f_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.t1f_1)) | 0) + hashCode(ensureNotNull(this.u1f_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.z1(), this.t1f_1) ? equals(other.a2(), this.u1f_1) : false;
  };
  protoOf(Entry_0).toString = function () {
    return '' + this.t1f_1 + '=' + this.u1f_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString(_this__u8e3s4).toLowerCase();
    return charSequenceGet(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.sb(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).tk = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_instance;
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.generateNonce.<anonymous>' call
        while (builder.i() < size) {
          writeText(builder, generateNonce_0());
        }
        tmp$ret$0 = builder.g14();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.sk();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return readBytes(tmp$ret$0, size);
  }
  function get_NONCE_SIZE_IN_BYTES() {
    return NONCE_SIZE_IN_BYTES;
  }
  var NONCE_SIZE_IN_BYTES;
  function hex(bytes) {
    _init_properties_Crypto_kt__txayzl();
    var result = charArray(imul(bytes.length, 2));
    var resultIndex = 0;
    var digits = get_digits();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = bytes[index] & 255;
        var tmp1 = resultIndex;
        resultIndex = tmp1 + 1 | 0;
        result[tmp1] = digits[b >> 4];
        var tmp2 = resultIndex;
        resultIndex = tmp2 + 1 | 0;
        result[tmp2] = digits[b & 15];
      }
       while (inductionVariable < last);
    return concatToString_0(result);
  }
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (!properties_initialized_Crypto_kt_8g5vqb) {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.x1f_1 = this$0;
    this.w1f_1 = this$0.y1f_1.p();
  }
  protoOf(DelegatingMutableSet$iterator$1).q = function () {
    return this.w1f_1.q();
  };
  protoOf(DelegatingMutableSet$iterator$1).r = function () {
    return this.x1f_1.z1f_1(this.w1f_1.r());
  };
  protoOf(DelegatingMutableSet$iterator$1).t = function () {
    return this.w1f_1.t();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.y1f_1 = delegate;
    this.z1f_1 = convertTo;
    this.a1g_1 = convert;
    this.b1g_1 = this.y1f_1.i();
  }
  protoOf(DelegatingMutableSet).c1g = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.a1g_1(item);
      destination.m(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).d1g = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.z1f_1(item);
      destination.m(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).i = function () {
    return this.b1g_1;
  };
  protoOf(DelegatingMutableSet).e1g = function (element) {
    return this.y1f_1.m(this.a1g_1(element));
  };
  protoOf(DelegatingMutableSet).m = function (element) {
    return this.e1g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).f1g = function (elements) {
    return this.y1f_1.n(this.c1g(elements));
  };
  protoOf(DelegatingMutableSet).n = function (elements) {
    return this.f1g(elements);
  };
  protoOf(DelegatingMutableSet).s = function () {
    this.y1f_1.s();
  };
  protoOf(DelegatingMutableSet).g1g = function (element) {
    return this.y1f_1.u(this.a1g_1(element));
  };
  protoOf(DelegatingMutableSet).u = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.g1g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).h1g = function (elements) {
    return this.y1f_1.v(this.c1g(elements));
  };
  protoOf(DelegatingMutableSet).v = function (elements) {
    return this.h1g(elements);
  };
  protoOf(DelegatingMutableSet).w = function () {
    return this.y1f_1.w();
  };
  protoOf(DelegatingMutableSet).p = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.y1f_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.d1g(this.y1f_1);
    var tmp_0;
    if (other.v(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.v(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString_0(this.d1g(this.y1f_1));
  };
  var Platform_Jvm_instance;
  var Platform_Native_instance;
  var Platform_Browser_instance;
  var Platform_Node_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Jvm_instance = new Platform('Jvm', 0);
    Platform_Native_instance = new Platform('Native', 1);
    Platform_Browser_instance = new Platform('Browser', 2);
    Platform_Node_instance = new Platform('Node', 3);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    this.i1g_1 = get_platform(this).equals(Platform_Browser_getInstance());
    this.j1g_1 = get_platform(this).equals(Platform_Node_getInstance());
    this.k1g_1 = get_platform(this).equals(Platform_Jvm_getInstance());
    this.l1g_1 = get_platform(this).equals(Platform_Native_getInstance());
    this.m1g_1 = get_isDevelopmentMode(this);
    this.n1g_1 = get_isNewMemoryModel(this);
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function Platform_Jvm_getInstance() {
    Platform_initEntries();
    return Platform_Jvm_instance;
  }
  function Platform_Native_getInstance() {
    Platform_initEntries();
    return Platform_Native_instance;
  }
  function Platform_Browser_getInstance() {
    Platform_initEntries();
    return Platform_Browser_instance;
  }
  function Platform_Node_getInstance() {
    Platform_initEntries();
    return Platform_Node_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.u1g_1.h2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.v1g(name);
      // Inline function 'kotlin.collections.set' call
      $this.u1g_1.x1(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.w1g(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.t1g_1 = caseInsensitiveName;
    this.u1g_1 = this.t1g_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).o1g = function () {
    return this.t1g_1;
  };
  protoOf(StringValuesBuilderImpl).p1g = function (name) {
    return this.u1g_1.h2(name);
  };
  protoOf(StringValuesBuilderImpl).q1g = function () {
    return this.u1g_1.u1();
  };
  protoOf(StringValuesBuilderImpl).w = function () {
    return this.u1g_1.w();
  };
  protoOf(StringValuesBuilderImpl).r1g = function () {
    return unmodifiable(this.u1g_1.w1());
  };
  protoOf(StringValuesBuilderImpl).x1g = function (name, value) {
    this.y1g(value);
    var list = ensureListForKey(this, name);
    list.s();
    list.m(value);
  };
  protoOf(StringValuesBuilderImpl).p1f = function (name) {
    var tmp0_safe_receiver = this.p1g(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).z1g = function (name, value) {
    this.y1g(value);
    ensureListForKey(this, name).m(value);
  };
  protoOf(StringValuesBuilderImpl).a1h = function (stringValues) {
    stringValues.s1g(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).w1g = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var list = ensureListForKey(this, name);
    var tmp0_iterator = values.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.y1g(element);
      list.m(element);
    }
  };
  protoOf(StringValuesBuilderImpl).b1h = function (name) {
    this.u1g_1.b2(name);
  };
  protoOf(StringValuesBuilderImpl).s = function () {
    this.u1g_1.s();
  };
  protoOf(StringValuesBuilderImpl).v1g = function (name) {
  };
  protoOf(StringValuesBuilderImpl).y1g = function (value) {
  };
  function listForKey($this, name) {
    return $this.d1h_1.h2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.c1h_1 = caseInsensitiveName;
    var tmp;
    if (this.c1h_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.w1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.z1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.a2();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.i();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          var tmp$ret$4 = value.a1(index);
          list.m(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.x1(key, list);
    }
    this.d1h_1 = newMap;
  }
  protoOf(StringValuesImpl).o1g = function () {
    return this.c1h_1;
  };
  protoOf(StringValuesImpl).p1f = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).p1g = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).q1g = function () {
    return unmodifiable(this.d1h_1.u1());
  };
  protoOf(StringValuesImpl).w = function () {
    return this.d1h_1.w();
  };
  protoOf(StringValuesImpl).r1g = function () {
    return unmodifiable(this.d1h_1.w1());
  };
  protoOf(StringValuesImpl).s1g = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.d1h_1.w1().p();
    while (tmp0_iterator.q()) {
      var tmp1_loop_parameter = tmp0_iterator.r();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.z1();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.a2();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.c1h_1 + ') ' + this.r1g();
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.c1h_1 === other.o1g()))
      return false;
    return entriesEquals(this.r1g(), other.r1g());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.r1g(), imul(31, getBooleanHashCode(this.c1h_1)));
  };
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.r1g().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.z1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.a2();
      _this__u8e3s4.w1g(name, values);
    }
    return _this__u8e3s4;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    this_0.a7(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.e5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(ch).toLowerCase();
      tmp = charSequenceGet(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.l1f_1 = content;
    var tmp = this;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.l1f_1.toLowerCase();
    tmp.m1f_1 = getStringHashCode(tmp$ret$1);
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1f_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.l1f_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.m1f_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.l1f_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function ChannelIOException() {
  }
  function CopyOnWriteHashMap() {
    this.e1h_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).f1h = function (key) {
    return this.e1h_1.kotlinx$atomicfu$value.h2(key);
  };
  function Companion() {
    Companion_instance_0 = this;
    this.g1h_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.h1h_1 = seconds;
    this.i1h_1 = minutes;
    this.j1h_1 = hours;
    this.k1h_1 = dayOfWeek;
    this.l1h_1 = dayOfMonth;
    this.m1h_1 = dayOfYear;
    this.n1h_1 = month;
    this.o1h_1 = year;
    this.p1h_1 = timestamp;
  }
  protoOf(GMTDate).q1h = function (other) {
    return this.p1h_1.u7(other.p1h_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.q1h(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.h1h_1 + ', minutes=' + this.i1h_1 + ', hours=' + this.j1h_1 + ', dayOfWeek=' + this.k1h_1 + ', dayOfMonth=' + this.l1h_1 + ', dayOfYear=' + this.m1h_1 + ', month=' + this.n1h_1 + ', year=' + this.o1h_1 + ', timestamp=' + this.p1h_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.h1h_1;
    result = imul(result, 31) + this.i1h_1 | 0;
    result = imul(result, 31) + this.j1h_1 | 0;
    result = imul(result, 31) + this.k1h_1.hashCode() | 0;
    result = imul(result, 31) + this.l1h_1 | 0;
    result = imul(result, 31) + this.m1h_1 | 0;
    result = imul(result, 31) + this.n1h_1.hashCode() | 0;
    result = imul(result, 31) + this.o1h_1 | 0;
    result = imul(result, 31) + this.p1h_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.h1h_1 === tmp0_other_with_cast.h1h_1))
      return false;
    if (!(this.i1h_1 === tmp0_other_with_cast.i1h_1))
      return false;
    if (!(this.j1h_1 === tmp0_other_with_cast.j1h_1))
      return false;
    if (!this.k1h_1.equals(tmp0_other_with_cast.k1h_1))
      return false;
    if (!(this.l1h_1 === tmp0_other_with_cast.l1h_1))
      return false;
    if (!(this.m1h_1 === tmp0_other_with_cast.m1h_1))
      return false;
    if (!this.n1h_1.equals(tmp0_other_with_cast.n1h_1))
      return false;
    if (!(this.o1h_1 === tmp0_other_with_cast.o1h_1))
      return false;
    if (!this.p1h_1.equals(tmp0_other_with_cast.p1h_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).r1h = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.u1h_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).r1h = function (ordinal) {
    return values_0()[ordinal];
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.x1h_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1i_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$1).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 6;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            this.h1i_1 = this.g1i_1.o1i_1;
            if (this.h1i_1 === -1) {
              this.e9_1 = 5;
              continue $sm;
            } else {
              this.e9_1 = 2;
              continue $sm;
            }

          case 2:
            this.i1i_1 = this.g1i_1.l1i_1;
            if (this.h1i_1 >= this.i1i_1.i()) {
              this.g1i_1.p1i();
              this.e9_1 = 5;
              continue $sm;
            } else {
              this.e9_1 = 3;
              continue $sm;
            }

          case 3:
            this.j1i_1 = this.i1i_1.a1(this.h1i_1);
            this.g1i_1.o1i_1 = this.h1i_1 + 1 | 0;
            this.e9_1 = 4;
            var tmp_0 = this.j1i_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.g1i_1, this.g1i_1.n1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.e9_1 = 1;
            continue $sm;
          case 5:
            return this.g1i_1.n1i_1;
          case 6:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 6) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.l1i_1 = interceptors;
    this.m1i_1 = coroutineContext;
    this.n1i_1 = subject;
    this.o1i_1 = 0;
  }
  protoOf(DebugPipelineContext).re = function () {
    return this.m1i_1;
  };
  protoOf(DebugPipelineContext).p1i = function () {
    this.o1i_1 = -1;
  };
  protoOf(DebugPipelineContext).q1i = function (subject, $completion) {
    this.n1i_1 = subject;
    return this.r1i($completion);
  };
  protoOf(DebugPipelineContext).r1i = function ($completion) {
    var index = this.o1i_1;
    if (index < 0)
      return this.n1i_1;
    if (index >= this.l1i_1.i()) {
      this.p1i();
      return this.n1i_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).s1i = function (initial, $completion) {
    this.o1i_1 = 0;
    this.n1i_1 = initial;
    return this.r1i($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().t1i_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().t1i_1.w()) {
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copyInterceptors($this) {
    $this.w1i_1 = $this.y1i();
    $this.x1i_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t1i_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.u1i_1 = phase;
    this.v1i_1 = relation;
    this.w1i_1 = interceptors;
    this.x1i_1 = true;
  }
  protoOf(PhaseContent).f10 = function () {
    return this.w1i_1.w();
  };
  protoOf(PhaseContent).i = function () {
    return this.w1i_1.i();
  };
  protoOf(PhaseContent).z1i = function (interceptor) {
    if (this.x1i_1) {
      copyInterceptors(this);
    }
    this.w1i_1.m(interceptor);
  };
  protoOf(PhaseContent).a1j = function (destination) {
    var interceptors = this.w1i_1;
    if (destination instanceof ArrayList) {
      destination.p2(destination.i() + interceptors.i() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.m(interceptors.a1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).b1j = function () {
    this.x1i_1 = true;
    return this.w1i_1;
  };
  protoOf(PhaseContent).y1i = function () {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    this_0.n(this.w1i_1);
    return this_0;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.u1i_1.c1j_1 + '`, ' + this.i() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.h1j_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.h1j_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.k1j());
  }
  function findPhase($this, phase) {
    var phasesList = $this.f1j_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.a1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.j(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.u1i_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.f1j_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.a1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.u1i_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.f1j_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.a1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.u1i_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.g1j_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.f1j_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.a1(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.f10())
            continue $l$loop_0;
          var interceptors = phaseContent.b1j();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.a1(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.a1j(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.i1j_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.i1j_1 = false;
    $this.j1j_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.i1j_1 = false;
    $this.j1j_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.b1j());
    $this.i1j_1 = false;
    $this.j1j_1 = phaseContent.u1i_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.f1j_1.w() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.i1j_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.j1j_1, phase)) {
      currentInterceptors.m(block);
      return true;
    }
    if (equals(phase, last($this.f1j_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.f1j_1)) {
      ensureNotNull(findPhase($this, phase)).z1i(block);
      currentInterceptors.m(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.d1j_1 = AttributesJsFn(true);
    this.e1j_1 = false;
    this.f1j_1 = mutableListOf(phases.slice());
    this.g1j_1 = 0;
    this.h1j_1 = atomic$ref$1(null);
    this.i1j_1 = false;
    this.j1j_1 = null;
  }
  protoOf(Pipeline).k1j = function () {
    return this.e1j_1;
  };
  protoOf(Pipeline).l1j = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.l9();
    return createContext(this, context, subject, tmp$ret$0).s1i(subject, $completion);
  };
  protoOf(Pipeline).n1j = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.f1j_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.f1j_1.a1(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v1i_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.o1j_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.f1j_1.i1(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).p1j = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.f1j_1.i1(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).q1j = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block !== 'function')
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.g1j_1 = this.g1j_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.z1i(block);
    this.g1j_1 = this.g1j_1 + 1 | 0;
    resetInterceptorsList(this);
    this.r1j();
  };
  protoOf(Pipeline).r1j = function () {
  };
  function PipelineContext(context) {
    this.m1j_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.c1j_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.c1j_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.o1j_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.s1j_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _ = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.z1j_1;
      if (currentIndex === $this.u1j_1.i()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.w1j_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.z1j_1 = currentIndex + 1 | 0;
      var next = $this.u1j_1.a1(currentIndex);
      try {
        var result = next($this, $this.w1j_1, $this.v1j_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.y1j_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var next = ensureNotNull($this.x1j_1[$this.y1j_1]);
    var tmp1 = $this.y1j_1;
    $this.y1j_1 = tmp1 - 1 | 0;
    $this.x1j_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.s9(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.s9(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.y1j_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp1 = $this.y1j_1;
    $this.y1j_1 = tmp1 - 1 | 0;
    $this.x1j_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    $this.y1j_1 = $this.y1j_1 + 1 | 0;
    $this.x1j_1[$this.y1j_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.b1k_1 = this$0;
    this.a1k_1 = IntCompanionObject_instance.MIN_VALUE;
  }
  protoOf(SuspendFunctionGun$continuation$1).l9 = function () {
    var tmp0_safe_receiver = this.b1k_1.x1j_1[this.b1k_1.y1j_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l9();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Not started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SuspendFunctionGun$continuation$1).c1k = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.b1k_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.b1k_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).s9 = function (result) {
    return this.c1k(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.u1j_1 = blocks;
    var tmp = this;
    tmp.v1j_1 = new SuspendFunctionGun$continuation$1(this);
    this.w1j_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.u1j_1.i();
    tmp_0.x1j_1 = fillArrayVal(Array(size), null);
    this.y1j_1 = -1;
    this.z1j_1 = 0;
  }
  protoOf(SuspendFunctionGun).re = function () {
    return this.v1j_1.l9();
  };
  protoOf(SuspendFunctionGun).r1i = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.z1j_1 === this.u1j_1.i()) {
        tmp$ret$0 = this.w1j_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.w1j_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).q1i = function (subject, $completion) {
    this.w1j_1 = subject;
    return this.r1i($completion);
  };
  protoOf(SuspendFunctionGun).s1i = function (initial, $completion) {
    this.z1j_1 = 0;
    if (this.z1j_1 === this.u1j_1.i())
      return initial;
    this.w1j_1 = initial;
    if (this.y1j_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.r1i($completion);
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.d1k_1 = type;
    this.e1k_1 = reifiedType;
    this.f1k_1 = kotlinType;
  }
  protoOf(TypeInfo).toString = function () {
    return 'TypeInfo(type=' + this.d1k_1 + ', reifiedType=' + this.e1k_1 + ', kotlinType=' + this.f1k_1 + ')';
  };
  protoOf(TypeInfo).hashCode = function () {
    var result = this.d1k_1.hashCode();
    result = imul(result, 31) + hashCode(this.e1k_1) | 0;
    result = imul(result, 31) + (this.f1k_1 == null ? 0 : hashCode(this.f1k_1)) | 0;
    return result;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.d1k_1.equals(tmp0_other_with_cast.d1k_1))
      return false;
    if (!equals(this.e1k_1, tmp0_other_with_cast.e1k_1))
      return false;
    if (!equals(this.f1k_1, tmp0_other_with_cast.f1k_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g1k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).w1e = function (key) {
    var tmp = this.g1k_1.h2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).x1e = function (key) {
    return this.g1k_1.e2(key);
  };
  protoOf(AttributesJs).y1e = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.g1k_1.x1(key, value);
  };
  protoOf(AttributesJs).z1e = function (key) {
    this.g1k_1.b2(key);
  };
  protoOf(AttributesJs).a1f = function (key, block) {
    var tmp0_safe_receiver = this.g1k_1.h2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.g1k_1.x1(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).b1f = function () {
    return toList(this.g1k_1.u1());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    // Inline function 'kotlin.getValue' call
    var this_0 = _crypto$delegate;
    _crypto$factory();
    return this_0.a2();
  }
  var _crypto$delegate;
  function generateNonce_0() {
    _init_properties_CryptoJs_kt__3vpuru();
    var buffer = new Int8Array(get_NONCE_SIZE_IN_BYTES());
    if (get_platform(PlatformUtils_getInstance()).o7_1 === 3) {
      get__crypto().randomFillSync(buffer);
    } else {
      get__crypto().getRandomValues(buffer);
    }
    return hex(buffer);
  }
  function _crypto$delegate$lambda() {
    _init_properties_CryptoJs_kt__3vpuru();
    return get_platform(PlatformUtils_getInstance()).o7_1 === 3 ? eval('require')('crypto') : window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
  }
  function _crypto$factory() {
    return getPropertyCallableRef('_crypto', 0, KProperty0, function () {
      return get__crypto();
    }, null);
  }
  var properties_initialized_CryptoJs_kt_linsrw;
  function _init_properties_CryptoJs_kt__3vpuru() {
    if (!properties_initialized_CryptoJs_kt_linsrw) {
      properties_initialized_CryptoJs_kt_linsrw = true;
      _crypto$delegate = lazy(_crypto$delegate$lambda);
    }
  }
  function get_platform(_this__u8e3s4) {
    var tmp = typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
    var hasNodeApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    return hasNodeApi ? Platform_Node_getInstance() : Platform_Browser_getInstance();
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.m8();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_instance_1.r1h((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.r1h(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().j1g_1) {
      case true:
        // Inline function 'kotlin.Result.getOrNull' call

        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp_2 = process.env.KTOR_LOG_LEVEL;
          var value = (tmp_2 == null ? true : typeof tmp_2 === 'string') ? tmp_2 : THROW_CCE();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_3;
        }

        var this_0 = tmp_1;
        var tmp_4;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_4 = null;
        } else {
          var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_4;
        var tmp_6;
        if (tmp1_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var indexedObject = values_1();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var element = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.n7_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_6 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_6;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.h1k_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).i1k = function (message) {
    if (this.h1k_1.p7(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.s5(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
  }
  var JsType_instance;
  function JsType_getInstance() {
    return JsType_instance;
  }
  //region block: post-declaration
  protoOf(AttributesJs).v1e = get;
  //endregion
  //region block: init
  NONCE_SIZE_IN_BYTES = 16;
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  JsType_instance = new JsType();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = JsType_instance;
  _.$_$.c = PlatformUtils_getInstance;
  _.$_$.d = ChannelIOException;
  _.$_$.e = CopyOnWriteHashMap;
  _.$_$.f = GMTDate_0;
  _.$_$.g = getTimeMillis;
  _.$_$.h = KtorSimpleLogger;
  _.$_$.i = PipelineContext;
  _.$_$.j = PipelinePhase;
  _.$_$.k = Pipeline;
  _.$_$.l = instanceOf;
  _.$_$.m = typeInfoImpl;
  _.$_$.n = AttributeKey;
  _.$_$.o = AttributesJsFn;
  _.$_$.p = SilentSupervisor;
  _.$_$.q = forEach;
  _.$_$.r = get_0;
  _.$_$.s = StringValuesBuilderImpl;
  _.$_$.t = StringValuesImpl;
  _.$_$.u = StringValues;
  _.$_$.v = appendAll;
  _.$_$.w = encodeBase64;
  _.$_$.x = generateNonce;
  _.$_$.y = hex;
  _.$_$.z = isLowerCase;
  _.$_$.a1 = get_platform;
  _.$_$.b1 = putAll;
  _.$_$.c1 = toCharArray;
  _.$_$.d1 = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
