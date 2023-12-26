(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io.js', './ktor-ktor-utils.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-websockets'.");
    }
    root['ktor-ktor-websockets'] = factory(typeof this['ktor-ktor-websockets'] === 'undefined' ? {} : this['ktor-ktor-websockets'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io'], this['ktor-ktor-utils'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.o3;
  var coerceAtLeast = kotlin_kotlin.$_$.e6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var protoOf = kotlin_kotlin.$_$.w5;
  var objectMeta = kotlin_kotlin.$_$.v5;
  var setMetadataFor = kotlin_kotlin.$_$.x5;
  var objectCreate = kotlin_kotlin.$_$.u5;
  var Enum = kotlin_kotlin.$_$.t7;
  var classMeta = kotlin_kotlin.$_$.d5;
  var toString = kotlin_kotlin.$_$.b6;
  var getStringHashCode = kotlin_kotlin.$_$.l5;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var interfaceMeta = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.y7;
  var isInterface = kotlin_kotlin.$_$.q5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.u4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g4;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.x;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.f4;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var IOException_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.e;
  var toLong = kotlin_kotlin.$_$.z5;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var joinToString = kotlin_kotlin.$_$.h3;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var decode = kotlin_io_ktor_ktor_io.$_$.j;
  var readShort = kotlin_io_ktor_ktor_io.$_$.v;
  var Exception = kotlin_kotlin.$_$.v7;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.x4;
  var defineProp = kotlin_kotlin.$_$.f5;
  var get_lastIndex = kotlin_kotlin.$_$.k3;
  var compareTo = kotlin_kotlin.$_$.e5;
  var fillArrayVal = kotlin_kotlin.$_$.i5;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var encodeToByteArray = kotlin_kotlin.$_$.p6;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.k;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.t;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.g;
  var Random = kotlin_kotlin.$_$.d6;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var hex = kotlin_io_ktor_ktor_utils.$_$.y;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.e7;
  var first = kotlin_kotlin.$_$.f3;
  var isCharSequence = kotlin_kotlin.$_$.p5;
  var trim = kotlin_kotlin.$_$.p7;
  var drop = kotlin_kotlin.$_$.a3;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.y;
  var writeText = kotlin_io_ktor_ktor_io.$_$.z;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Codes, 'Codes', classMeta, Enum);
  setMetadataFor(CloseReason, 'CloseReason', classMeta);
  function send(frame, $completion) {
    return this.m1w().yv(frame, $completion);
  }
  setMetadataFor(WebSocketSession, 'WebSocketSession', interfaceMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(DefaultWebSocketSession, 'DefaultWebSocketSession', interfaceMeta, VOID, [WebSocketSession], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, 'DefaultWebSocketSessionImpl$runIncomingProcessor$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, 'DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, 'DefaultWebSocketSessionImpl$runOrCancelPinger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($outgoingProcessorLoopCOROUTINE$0, '$outgoingProcessorLoopCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($sendCloseSequenceCOROUTINE$1, '$sendCloseSequenceCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($checkMaxFrameSizeCOROUTINE$2, '$checkMaxFrameSizeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', classMeta, VOID, [DefaultWebSocketSession, WebSocketSession], VOID, VOID, VOID, [1, 0, 2]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta);
  setMetadataFor(FrameTooBigException, 'FrameTooBigException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum);
  setMetadataFor(ponger$slambda, 'ponger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda, 'pinger$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda_1, 'pinger$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda, 'pinger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', classMeta, VOID, VOID, WebSocketExtensionsConfig);
  setMetadataFor(WebSocketExtensionHeader, 'WebSocketExtensionHeader', classMeta);
  setMetadataFor($closeCOROUTINE$3, '$closeCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Frame, 'Frame', classMeta);
  setMetadataFor(Binary, 'Binary', classMeta, Frame);
  setMetadataFor(Text, 'Text', classMeta, Frame);
  setMetadataFor(Close, 'Close', classMeta, Frame, VOID, Close_init_$Create$_0);
  setMetadataFor(Ping, 'Ping', classMeta, Frame);
  setMetadataFor(Pong, 'Pong', classMeta, Frame);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  //endregion
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = values();
    var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.websocket.Companion.byCodeMap.<anonymous>' call
      var tmp$ret$0 = element.b1w_1;
      destination.x1(tmp$ret$0, element);
    }
    tmp.c1w_1 = destination;
    this.d1w_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).e1w = function (code) {
    return this.c1w_1.h2(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_instance;
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.b1w_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.b1w_1 = code;
  }
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.f1w_1 = code;
    this.g1w_1 = message;
  }
  protoOf(CloseReason).h1w = function () {
    return Companion_getInstance().e1w(this.f1w_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.h1w();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.f1w_1 : tmp0_elvis_lhs) + ', message=' + this.g1w_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.f1w_1;
    result = imul(result, 31) + getStringHashCode(this.g1w_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.f1w_1 === tmp0_other_with_cast.f1w_1))
      return false;
    if (!(this.g1w_1 === tmp0_other_with_cast.g1w_1))
      return false;
    return true;
  };
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingInterval, timeoutMillis) {
    pingInterval = pingInterval === VOID ? new Long(-1, -1) : pingInterval;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      // Inline function 'io.ktor.websocket.DefaultWebSocketSession.<anonymous>' call
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingInterval, timeoutMillis);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().sb(Dispatchers_getInstance().fp_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().sb(Dispatchers_getInstance().fp_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$0($this, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    var tmp = new $sendCloseSequenceCOROUTINE$1($this, reason, exception, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function sendCloseSequence$default($this, reason, exception, $completion, $super) {
    exception = exception === VOID ? null : exception;
    return sendCloseSequence($this, reason, exception, $completion);
  }
  function tryClose($this) {
    return $this.v1x_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.a1y_1;
    var tmp;
    if ($this.v1x_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval.u7(new Long(0, 0)) > 0) {
      var tmp_0 = $this.q1x_1.m1w();
      var tmp_1 = $this.b1y_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.r1x_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.fw();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.zv(Companion_getInstance_0().d1y_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.rw_1);
    if ($this.v1x_1.kotlinx$atomicfu$value ? !(newPinger == null) : false) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$2($this, packet, frame, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var tmp0_iterator = $this.q1y().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processIncomingExtensions.<anonymous>' call
      var current = accumulator;
      accumulator = element.r1y(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var tmp0_iterator = $this.q1y().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processOutgoingExtensions.<anonymous>' call
      var current = accumulator;
      accumulator = element.s1y(current);
    }
    return accumulator;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.d1y_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.b1z_1 = this$0;
    this.c1z_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 39;
            this.e1z_1 = null;
            this.f1z_1 = null;
            this.g1z_1 = false;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            this.e9_1 = 2;
            continue $sm;
          case 2:
            this.f9_1 = 33;
            this.f9_1 = 32;
            var tmp_0 = this;
            tmp_0.j1z_1 = this.b1z_1.q1x_1.l1w();
            this.e9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.l1z_1 = this.j1z_1;
            this.m1z_1 = null;
            this.e9_1 = 4;
            continue $sm;
          case 4:
            this.e9_1 = 5;
            continue $sm;
          case 5:
            this.e9_1 = 6;
            continue $sm;
          case 6:
            this.f9_1 = 29;
            this.f9_1 = 28;
            var tmp_2 = this;
            tmp_2.p1z_1 = this.l1z_1;
            this.q1z_1 = this.p1z_1.p();
            this.e9_1 = 7;
            continue $sm;
          case 7:
            this.e9_1 = 8;
            suspendResult = this.q1z_1.st(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.e9_1 = 26;
              continue $sm;
            }

            this.r1z_1 = this.q1z_1.r();
            this.e9_1 = 9;
            continue $sm;
          case 9:
            var tmp_3 = this;
            tmp_3.t1z_1 = this.r1z_1;
            get_LOGGER().i1k('WebSocketSession(' + this.d1z_1 + ') receiving frame ' + this.t1z_1);
            this.u1z_1 = this.t1z_1;
            var tmp_4 = this.u1z_1;
            if (tmp_4 instanceof Close) {
              if (!this.b1z_1.m1w().ut()) {
                this.e9_1 = 20;
                var tmp_5 = this.b1z_1.m1w();
                var tmp1_elvis_lhs = readReason(this.t1z_1);
                suspendResult = tmp_5.yv(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.e9_1 = 21;
                continue $sm;
              }
            } else {
              var tmp_6 = this.u1z_1;
              if (tmp_6 instanceof Pong) {
                this.v1z_1 = this.b1z_1.r1x_1.kotlinx$atomicfu$value;
                if (this.v1z_1 == null) {
                  this.w1z_1 = null;
                  this.e9_1 = 17;
                  continue $sm;
                } else {
                  this.e9_1 = 16;
                  suspendResult = this.v1z_1.yv(this.t1z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                var tmp_7 = this.u1z_1;
                if (tmp_7 instanceof Ping) {
                  this.e9_1 = 15;
                  suspendResult = this.c1z_1.yv(this.t1z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.e9_1 = 10;
                  suspendResult = checkMaxFrameSize(this.b1z_1, this.f1z_1, this.t1z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.t1z_1.d20_1) {
              if (this.e1z_1 == null) {
                this.e1z_1 = this.t1z_1;
              }
              if (this.f1z_1 == null) {
                this.f1z_1 = new BytePacketBuilder();
              }
              writeFully(ensureNotNull(this.f1z_1), this.t1z_1.f20_1);
              this.s1z_1 = Unit_instance;
              this.e9_1 = 19;
              continue $sm;
            } else {
              this.e9_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.e1z_1 == null) {
              this.e9_1 = 14;
              suspendResult = this.b1z_1.t1x_1.yv(processIncomingExtensions(this.b1z_1, this.t1z_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.f1z_1), this.t1z_1.f20_1);
            this.x1z_1 = Companion_getInstance_2().l20(true, ensureNotNull(this.e1z_1).e20_1, readBytes(ensureNotNull(this.f1z_1).g14()), ensureNotNull(this.e1z_1).h20_1, ensureNotNull(this.e1z_1).i20_1, ensureNotNull(this.e1z_1).j20_1);
            this.e1z_1 = null;
            this.e9_1 = 13;
            suspendResult = this.b1z_1.t1x_1.yv(processIncomingExtensions(this.b1z_1, this.x1z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.e9_1 = 18;
            continue $sm;
          case 14:
            this.s1z_1 = Unit_instance;
            this.e9_1 = 19;
            continue $sm;
          case 15:
            this.e9_1 = 18;
            continue $sm;
          case 16:
            var tmp_8 = this;
            tmp_8.w1z_1 = Unit_instance;
            this.e9_1 = 17;
            continue $sm;
          case 17:
            this.e9_1 = 18;
            continue $sm;
          case 18:
            if (false) {
              this.e9_1 = 9;
              continue $sm;
            }

            this.e9_1 = 19;
            continue $sm;
          case 19:
            this.e9_1 = 7;
            continue $sm;
          case 20:
            this.e9_1 = 21;
            continue $sm;
          case 21:
            this.g1z_1 = true;
            this.o1z_1 = Unit_instance;
            this.e9_1 = 22;
            continue $sm;
          case 22:
            this.f9_1 = 32;
            var tmp_9 = this;
            cancelConsumed(this.l1z_1, this.m1z_1);
            tmp_9.i1z_1 = Unit_instance;
            this.f9_1 = 39;
            this.e9_1 = 23;
            continue $sm;
          case 23:
            this.f9_1 = 39;
            this.c1z_1.fw();
            var tmp0_safe_receiver = this.f1z_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.sk();
            }

            this.b1z_1.t1x_1.fw();
            if (!this.g1z_1) {
              this.e9_1 = 24;
              suspendResult = close(this.b1z_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 25;
              continue $sm;
            }

          case 24:
            this.e9_1 = 25;
            continue $sm;
          case 25:
            return Unit_instance;
          case 26:
            this.n1z_1 = Unit_instance;
            this.e9_1 = 27;
            var tmp_10 = this;
            continue $sm;
          case 27:
            this.f9_1 = 32;
            var tmp_11 = this;
            cancelConsumed(this.l1z_1, this.m1z_1);
            tmp_11.k1z_1 = Unit_instance;
            this.e9_1 = 31;
            continue $sm;
          case 28:
            this.f9_1 = 29;
            var tmp_12 = this.h9_1;
            if (tmp_12 instanceof Error) {
              this.y1z_1 = this.h9_1;
              var tmp_13 = this;
              this.m1z_1 = this.y1z_1;
              throw this.y1z_1;
            } else {
              throw this.h9_1;
            }

          case 29:
            this.f9_1 = 32;
            this.z1z_1 = this.h9_1;
            cancelConsumed(this.l1z_1, this.m1z_1);
            throw this.z1z_1;
          case 30:
            this.f9_1 = 32;
            cancelConsumed(this.l1z_1, this.m1z_1);
            if (false) {
              this.e9_1 = 3;
              continue $sm;
            }

            this.e9_1 = 31;
            continue $sm;
          case 31:
            this.h1z_1 = Unit_instance;
            this.f9_1 = 39;
            this.e9_1 = 36;
            continue $sm;
          case 32:
            this.f9_1 = 33;
            var tmp_14 = this.h9_1;
            if (tmp_14 instanceof ClosedSendChannelException) {
              this.a20_1 = this.h9_1;
              var tmp_15 = this;
              tmp_15.h1z_1 = Unit_instance;
              this.f9_1 = 39;
              this.e9_1 = 36;
              continue $sm;
            } else {
              var tmp_16 = this.h9_1;
              if (tmp_16 instanceof Error) {
                this.b20_1 = this.h9_1;
                var tmp_17 = this;
                this.c1z_1.fw();
                this.b1z_1.t1x_1.dw(this.b20_1);
                tmp_17.h1z_1 = Unit_instance;
                this.f9_1 = 39;
                this.e9_1 = 36;
                continue $sm;
              } else {
                throw this.h9_1;
              }
            }

          case 33:
            this.f9_1 = 39;
            this.c20_1 = this.h9_1;
            this.c1z_1.fw();
            var tmp0_safe_receiver_0 = this.f1z_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.sk();
            }

            this.b1z_1.t1x_1.fw();
            if (!this.g1z_1) {
              this.e9_1 = 34;
              suspendResult = close(this.b1z_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 35;
              continue $sm;
            }

          case 34:
            this.e9_1 = 35;
            continue $sm;
          case 35:
            throw this.c20_1;
          case 36:
            this.f9_1 = 39;
            this.c1z_1.fw();
            var tmp0_safe_receiver_1 = this.f1z_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.sk();
            }

            this.b1z_1.t1x_1.fw();
            if (!this.g1z_1) {
              this.e9_1 = 37;
              suspendResult = close(this.b1z_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 38;
              continue $sm;
            }

          case 37:
            this.e9_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 39) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).o17 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.b1z_1, this.c1z_1, completion);
    i.d1z_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.u20_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 10;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            this.f9_1 = 6;
            this.f9_1 = 3;
            this.e9_1 = 2;
            suspendResult = outgoingProcessorLoop(this.u20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w20_1 = suspendResult;
            this.f9_1 = 10;
            this.e9_1 = 8;
            continue $sm;
          case 3:
            this.f9_1 = 6;
            var tmp_0 = this.h9_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              this.x20_1 = this.h9_1;
              var tmp_1 = this;
              tmp_1.w20_1 = Unit_instance;
              this.f9_1 = 10;
              this.e9_1 = 8;
              continue $sm;
            } else {
              var tmp_2 = this.h9_1;
              if (tmp_2 instanceof ClosedReceiveChannelException) {
                this.y20_1 = this.h9_1;
                var tmp_3 = this;
                tmp_3.w20_1 = Unit_instance;
                this.f9_1 = 10;
                this.e9_1 = 8;
                continue $sm;
              } else {
                var tmp_4 = this.h9_1;
                if (tmp_4 instanceof CancellationException) {
                  this.z20_1 = this.h9_1;
                  this.e9_1 = 4;
                  suspendResult = sendCloseSequence$default(this.u20_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_5 = this.h9_1;
                  if (tmp_5 instanceof ChannelIOException) {
                    this.a21_1 = this.h9_1;
                    var tmp_6 = this;
                    tmp_6.w20_1 = Unit_instance;
                    this.f9_1 = 10;
                    this.e9_1 = 8;
                    continue $sm;
                  } else {
                    var tmp_7 = this.h9_1;
                    if (tmp_7 instanceof Error) {
                      this.b21_1 = this.h9_1;
                      this.u20_1.u1x_1.xf(CancellationException_init_$Create$('Failed to send frame', this.b21_1));
                      this.e9_1 = 5;
                      suspendResult = closeExceptionally(this.u20_1.q1x_1, this.b21_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.h9_1;
                    }
                  }
                }
              }
            }

          case 4:
            this.w20_1 = suspendResult;
            this.f9_1 = 10;
            this.e9_1 = 8;
            continue $sm;
          case 5:
            this.w20_1 = suspendResult;
            this.f9_1 = 10;
            this.e9_1 = 8;
            continue $sm;
          case 6:
            this.f9_1 = 10;
            this.c21_1 = this.h9_1;
            this.u20_1.u1x_1.hw();
            this.e9_1 = 7;
            suspendResult = close(this.u20_1.q1x_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            throw this.c21_1;
          case 8:
            this.f9_1 = 10;
            this.u20_1.u1x_1.hw();
            this.e9_1 = 9;
            suspendResult = close(this.u20_1.q1x_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 10) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).o17 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.u20_1, completion);
    i.v20_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.l21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).n21 = function (it, $completion) {
    var tmp = this.o21(it, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).ea = function (p1, $completion) {
    return this.n21(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = sendCloseSequence(this.l21_1, this.m21_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).o21 = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.l21_1, completion);
    i.m21_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.n21(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1w_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$0).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 7;
            this.y1w_1 = this.x1w_1.u1x_1.p();
            this.e9_1 = 1;
            continue $sm;
          case 1:
            this.e9_1 = 2;
            suspendResult = this.y1w_1.st(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.e9_1 = 6;
              continue $sm;
            }

            this.z1w_1 = this.y1w_1.r();
            get_LOGGER().i1k('Sending ' + this.z1w_1 + ' from session ' + this.x1w_1);
            this.a1x_1 = this.z1w_1;
            var tmp_0 = this.a1x_1;
            if (tmp_0 instanceof Close) {
              this.e9_1 = 3;
              suspendResult = sendCloseSequence$default(this.x1w_1, readReason(this.z1w_1), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1;
              var tmp_2 = this.a1x_1;
              if (tmp_2 instanceof Text) {
                tmp_1 = true;
              } else {
                var tmp_3 = this.a1x_1;
                tmp_1 = tmp_3 instanceof Binary;
              }
              if (tmp_1) {
                this.b1x_1 = processOutgoingExtensions(this.x1w_1, this.z1w_1);
                this.e9_1 = 4;
                continue $sm;
              } else {
                this.b1x_1 = this.z1w_1;
                this.e9_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.e9_1 = 6;
            var tmp_4 = this;
            continue $sm;
          case 4:
            this.c1x_1 = this.b1x_1;
            this.e9_1 = 5;
            suspendResult = this.x1w_1.q1x_1.m1w().yv(this.c1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.e9_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 7) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$1(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1x_1 = _this__u8e3s4;
    this.m1x_1 = reason;
    this.n1x_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$1).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 6;
            if (!tryClose(this.l1x_1))
              return Unit_instance;
            get_LOGGER().i1k('Sending Close Sequence for session ' + this.l1x_1 + ' with reason ' + this.m1x_1 + ' and exception ' + this.n1x_1);
            this.l1x_1.w1x_1.lk();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.m1x_1;
            tmp_0.o1x_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            this.f9_1 = 5;
            runOrCancelPinger(this.l1x_1);
            if (!(this.o1x_1.f1w_1 === Codes_CLOSED_ABNORMALLY_getInstance().b1w_1)) {
              this.e9_1 = 2;
              suspendResult = this.l1x_1.q1x_1.m1w().yv(Close_init_$Create$(this.o1x_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 3;
              continue $sm;
            }

          case 2:
            this.e9_1 = 3;
            continue $sm;
          case 3:
            this.p1x_1 = Unit_instance;
            this.f9_1 = 6;
            this.e9_1 = 4;
            continue $sm;
          case 4:
            this.f9_1 = 6;
            this.l1x_1.s1x_1.ik(this.o1x_1);
            if (!(this.n1x_1 == null)) {
              this.l1x_1.u1x_1.dw(this.n1x_1);
              this.l1x_1.t1x_1.dw(this.n1x_1);
            }

            return Unit_instance;
          case 5:
            this.f9_1 = 6;
            var t = this.h9_1;
            this.l1x_1.s1x_1.ik(this.o1x_1);
            if (!(this.n1x_1 == null)) {
              this.l1x_1.u1x_1.dw(this.n1x_1);
              this.l1x_1.t1x_1.dw(this.n1x_1);
            }

            throw t;
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
  function $checkMaxFrameSizeCOROUTINE$2(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1y_1 = _this__u8e3s4;
    this.n1y_1 = packet;
    this.o1y_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$2).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.o1y_1.f20_1.length;
            var tmp0_safe_receiver = this.n1y_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i();
            tmp_0.p1y_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (toLong(this.p1y_1).u7(this.m1y_1.k1w()) > 0) {
              var tmp2_safe_receiver = this.n1y_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.sk();
              }
              this.e9_1 = 2;
              suspendResult = close(this.m1y_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.p1y_1 + '. Max size is ' + this.m1y_1.k1w().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(toLong(this.p1y_1));
          case 3:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 3) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingInterval, timeoutMillis) {
    Companion_getInstance_0();
    this.q1x_1 = raw;
    this.r1x_1 = atomic$ref$1(null);
    this.s1x_1 = CompletableDeferred();
    this.t1x_1 = Channel(8);
    this.u1x_1 = Channel(get_OUTGOING_CHANNEL_CAPACITY());
    this.v1x_1 = atomic$boolean$1(false);
    this.w1x_1 = Job(this.q1x_1.re().m9(Key_instance));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.x1x_1 = ArrayList_init_$Create$();
    this.y1x_1 = atomic$boolean$1(false);
    this.z1x_1 = this.q1x_1.re().sb(this.w1x_1).sb(new CoroutineName('ws-default'));
    this.a1y_1 = pingInterval;
    this.b1y_1 = timeoutMillis;
    this.c1y_1 = this.s1x_1;
  }
  protoOf(DefaultWebSocketSessionImpl).l1w = function () {
    return this.t1x_1;
  };
  protoOf(DefaultWebSocketSessionImpl).m1w = function () {
    return this.u1x_1;
  };
  protoOf(DefaultWebSocketSessionImpl).q1y = function () {
    return this.x1x_1;
  };
  protoOf(DefaultWebSocketSessionImpl).re = function () {
    return this.z1x_1;
  };
  protoOf(DefaultWebSocketSessionImpl).j1w = function (value) {
    this.q1x_1.j1w(value);
  };
  protoOf(DefaultWebSocketSessionImpl).k1w = function () {
    return this.q1x_1.k1w();
  };
  protoOf(DefaultWebSocketSessionImpl).i1w = function (negotiatedExtensions) {
    if (!this.y1x_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + this + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    get_LOGGER().i1k('Starting default WebSocketSession(' + this + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions)));
    this.x1x_1.n(negotiatedExtensions);
    runOrCancelPinger(this);
    runIncomingProcessor(this, ponger(this, this.m1w()));
    runOutgoingProcessor(this);
  };
  protoOf(DefaultWebSocketSessionImpl).o1w = function ($completion) {
    return this.q1x_1.o1w($completion);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
    }
  }
  function readText(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!_this__u8e3s4.d20_1) {
      // Inline function 'io.ktor.websocket.readText.<anonymous>' call
      var message = 'Text could be only extracted from non-fragmented frame';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = Charsets_getInstance().c1b_1.f1b();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readText.<anonymous>' call
        writeFully(builder, _this__u8e3s4.f20_1);
        tmp$ret$1 = builder.g14();
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
    return decode(tmp, tmp$ret$1);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).sh = function () {
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.f20_1.length < 2) {
      return null;
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readReason.<anonymous>' call
        writeFully(builder, _this__u8e3s4.f20_1);
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
    var packet = tmp$ret$0;
    var code = readShort(packet);
    var message = packet.t1a();
    return new CloseReason(code, message);
  }
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    captureStack(this, FrameTooBigException);
    this.p21_1 = frameSize;
  }
  protoOf(FrameTooBigException).p5 = function () {
    return 'Frame is too big: ' + this.p21_1.toString();
  };
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var this_0 = values_0();
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_0.length === 0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = this_0[0];
      var lastIndex = get_lastIndex(this_0);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
      var maxValue = maxElem.t21_1;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = this_0[i];
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          var v = e.t21_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.u21_1 = ensureNotNull(tmp$ret$1).t21_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.u21_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = fillArrayVal(Array(tmp_2), null);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var indexedObject = values_0();
        var inductionVariable_0 = 0;
        var last = indexedObject.length;
        while (inductionVariable_0 < last) {
          var element = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
          if (element.t21_1 === tmp_4) {
            if (found) {
              tmp$ret$6 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        tmp$ret$6 = single;
      }
      tmp_3[tmp_4] = tmp$ret$6;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.v21_1 = tmp_3;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_instance;
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.s21_1 = controlFrame;
    this.t21_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    Factory_getInstance();
    var channel = Channel(2147483647);
    var tmp = actorJob.sb(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.re().m9(Key_instance));
    tmp_0.sf(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.e22_1 = $channel;
    this.f22_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(ponger$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 14;
            this.f9_1 = 13;
            var tmp_0 = this;
            tmp_0.h22_1 = this.e22_1;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.j22_1 = this.h22_1;
            this.k22_1 = null;
            this.e9_1 = 2;
            continue $sm;
          case 2:
            this.e9_1 = 3;
            continue $sm;
          case 3:
            this.f9_1 = 10;
            this.f9_1 = 9;
            var tmp_2 = this;
            tmp_2.m22_1 = this.j22_1;
            this.n22_1 = this.m22_1.p();
            this.e9_1 = 4;
            continue $sm;
          case 4:
            this.e9_1 = 5;
            suspendResult = this.n22_1.st(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.e9_1 = 7;
              continue $sm;
            }

            this.o22_1 = this.n22_1.r();
            var tmp_3 = this;
            tmp_3.p22_1 = this.o22_1;
            get_LOGGER().i1k('Received ping message, sending pong message');
            this.e9_1 = 6;
            suspendResult = this.f22_1.yv(new Pong(this.p22_1.f20_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.e9_1 = 4;
            continue $sm;
          case 7:
            this.l22_1 = Unit_instance;
            this.e9_1 = 8;
            var tmp_4 = this;
            continue $sm;
          case 8:
            this.f9_1 = 13;
            var tmp_5 = this;
            cancelConsumed(this.j22_1, this.k22_1);
            tmp_5.i22_1 = Unit_instance;
            this.e9_1 = 12;
            continue $sm;
          case 9:
            this.f9_1 = 10;
            var tmp_6 = this.h9_1;
            if (tmp_6 instanceof Error) {
              var e = this.h9_1;
              var tmp_7 = this;
              this.k22_1 = e;
              throw e;
            } else {
              throw this.h9_1;
            }

          case 10:
            this.f9_1 = 13;
            var t = this.h9_1;
            cancelConsumed(this.j22_1, this.k22_1);
            throw t;
          case 11:
            this.f9_1 = 13;
            cancelConsumed(this.j22_1, this.k22_1);
            if (false) {
              this.e9_1 = 1;
              continue $sm;
            }

            this.e9_1 = 12;
            continue $sm;
          case 12:
            this.f9_1 = 14;
            this.e9_1 = 15;
            continue $sm;
          case 13:
            this.f9_1 = 14;
            var tmp_8 = this.h9_1;
            if (tmp_8 instanceof ClosedSendChannelException) {
              var _ = this.h9_1;
              this.e9_1 = 15;
              continue $sm;
            } else {
              throw this.h9_1;
            }

          case 14:
            throw this.h9_1;
          case 15:
            this.f9_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.f9_1 === 14) {
          throw e_0;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).o17 = function ($this$launch, completion) {
    var i = new ponger$slambda(this.e22_1, this.f22_1, completion);
    i.g22_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.y22_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).n17 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.o17($this$withTimeoutOrNull, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(pinger$slambda$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 3;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.e9_1 = 4;
              continue $sm;
            }

            this.e9_1 = 2;
            suspendResult = this.y22_1.bw(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e9_1 = 1;
            continue $sm;
          case 3:
            throw this.h9_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 3) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).o17 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.y22_1, completion);
    i.z22_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.n17($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.i23_1 = $outgoing;
    this.j23_1 = $pingMessage;
    this.k23_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).n17 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.o17($this$withTimeoutOrNull, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(pinger$slambda$slambda_1).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 6;
            get_LOGGER().i1k('WebSocket Pinger: sending ping frame');
            this.e9_1 = 1;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.j23_1;
              var charset = Charsets_getInstance().d1b_1;
              if (charset.equals(Charsets_getInstance().c1b_1)) {
                tmp$ret$0 = encodeToByteArray(this_0);
                break l$ret$1;
              }
              tmp$ret$0 = encodeToByteArray_0(charset.g1b(), this_0, 0, this_0.length);
            }
             while (false);
            suspendResult = this.i23_1.yv(new Ping(tmp$ret$0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.e9_1 = 5;
              continue $sm;
            }

            this.e9_1 = 3;
            suspendResult = this.k23_1.bw(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var msg = suspendResult;
            if (String_0(msg.f20_1, VOID, VOID, Charsets_getInstance().d1b_1) === this.j23_1) {
              get_LOGGER().i1k('WebSocket Pinger: received valid pong frame ' + msg);
              this.e9_1 = 5;
              continue $sm;
            } else {
              this.e9_1 = 4;
              continue $sm;
            }

          case 4:
            get_LOGGER().i1k('WebSocket Pinger: received invalid pong frame ' + msg + ', continue waiting');
            this.e9_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
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
  protoOf(pinger$slambda$slambda_1).o17 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.i23_1, this.j23_1, this.k23_1, completion);
    i.l23_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.n17($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.u23_1 = $periodMillis;
    this.v23_1 = $timeoutMillis;
    this.w23_1 = $onTimeout;
    this.x23_1 = $channel;
    this.y23_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(pinger$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 9;
            get_LOGGER().i1k('Starting WebSocket pinger coroutine with period ' + this.u23_1.toString() + ' ms and timeout ' + this.v23_1.toString() + ' ms');
            this.a24_1 = Random(getTimeMillis());
            this.b24_1 = new Int8Array(32);
            this.f9_1 = 7;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.e9_1 = 6;
              continue $sm;
            }

            this.e9_1 = 2;
            suspendResult = withTimeoutOrNull(this.u23_1, pinger$slambda$slambda_0(this.x23_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a24_1.zb(this.b24_1);
            this.c24_1 = '[ping ' + hex(this.b24_1) + ' ping]';
            this.e9_1 = 3;
            suspendResult = withTimeoutOrNull(this.v23_1, pinger$slambda$slambda_2(this.y23_1, this.c24_1, this.x23_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.d24_1 = suspendResult;
            if (this.d24_1 == null) {
              get_LOGGER().i1k('WebSocket pinger has timed out');
              this.e9_1 = 5;
              suspendResult = this.w23_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 4;
              continue $sm;
            }

          case 4:
            this.e9_1 = 1;
            continue $sm;
          case 5:
            this.e9_1 = 6;
            continue $sm;
          case 6:
            this.f9_1 = 9;
            this.e9_1 = 8;
            continue $sm;
          case 7:
            this.f9_1 = 9;
            var tmp_0 = this.h9_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.h9_1;
              this.e9_1 = 8;
              continue $sm;
            } else {
              var tmp_1 = this.h9_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.h9_1;
                this.e9_1 = 8;
                continue $sm;
              } else {
                var tmp_2 = this.h9_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.h9_1;
                  this.e9_1 = 8;
                  continue $sm;
                } else {
                  throw this.h9_1;
                }
              }
            }

          case 8:
            this.f9_1 = 9;
            return Unit_instance;
          case 9:
            throw this.h9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 9) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).o17 = function ($this$launch, completion) {
    var i = new pinger$slambda(this.u23_1, this.v23_1, this.w23_1, this.x23_1, this.y23_1, completion);
    i.z23_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.yf();
      return Unit_instance;
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (!properties_initialized_PingPong_kt_fbfhmc) {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e24_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.f24_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).g14 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.e24_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'io.ktor.websocket.WebSocketExtensionsConfig.build.<anonymous>' call
      var tmp$ret$0 = item();
      destination.m(tmp$ret$0);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.h24_1.w() ? '' : ', ' + joinToString($this.h24_1, ',');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.g24_1 = name;
    this.h24_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.g24_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>' call
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_0 = this_2.p();
      while (tmp0_iterator_0.q()) {
        var item_0 = tmp0_iterator_0.r();
        // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$2 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.m(tmp$ret$2);
      }
      var parameters = destination_0;
      var tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      destination.m(tmp$ret$5);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$3(_this__u8e3s4, reason, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$3(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q24_1 = _this__u8e3s4;
    this.r24_1 = reason;
  }
  protoOf($closeCOROUTINE$3).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 4;
            this.f9_1 = 3;
            this.e9_1 = 1;
            suspendResult = this.q24_1.n1w(Close_init_$Create$(this.r24_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e9_1 = 2;
            suspendResult = this.q24_1.o1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f9_1 = 4;
            this.e9_1 = 5;
            continue $sm;
          case 3:
            this.f9_1 = 4;
            var tmp_0 = this.h9_1;
            if (tmp_0 instanceof Error) {
              var _ = this.h9_1;
              this.e9_1 = 5;
              continue $sm;
            } else {
              throw this.h9_1;
            }

          case 4:
            throw this.h9_1;
          case 5:
            this.f9_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.f9_1 === 4) {
          throw e;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e;
        }
      }
     while (true);
  };
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var charset = Charsets_getInstance().c1b_1;
      if (charset.equals(Charsets_getInstance().c1b_1)) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(charset.g1b(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.f1w_1);
        writeText(builder, reason.g1w_1);
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
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes(packet));
    return $this;
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_2().k20_1);
    return $this;
  }
  function Close_init_$Create$_0() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.k20_1 = new Int8Array(0);
  }
  protoOf(Companion_2).l20 = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.o7_1) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_2();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.d20_1 = fin;
    this.e20_1 = frameType;
    this.f20_1 = data;
    this.g20_1 = disposableHandle;
    this.h20_1 = rsv1;
    this.i20_1 = rsv2;
    this.j20_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.e20_1 + ' (fin=' + this.d20_1 + ', buffer len = ' + this.f20_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return 8;
  }
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).n1w = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.p5();
  });
  //endregion
  //region block: init
  NonDisposableHandle_instance = new NonDisposableHandle();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = send;
  _.$_$.d = Binary_init_$Create$;
  _.$_$.e = Close_init_$Create$;
  _.$_$.f = Text_init_$Create$;
  _.$_$.g = Companion_getInstance;
  _.$_$.h = CloseReason;
  _.$_$.i = DefaultWebSocketSession_0;
  _.$_$.j = DefaultWebSocketSession;
  _.$_$.k = Text;
  _.$_$.l = WebSocketExtensionsConfig;
  _.$_$.m = WebSocketSession;
  _.$_$.n = parseWebSocketExtensions;
  _.$_$.o = readText;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
