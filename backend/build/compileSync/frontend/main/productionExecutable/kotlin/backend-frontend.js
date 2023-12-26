(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-client-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-client-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'backend'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'backend'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'backend'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'backend'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'backend'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'backend'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'backend'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'backend'.");
    }
    if (typeof this['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'backend'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'backend'.");
    }
    root.backend = factory(typeof backend === 'undefined' ? {} : backend, this['ktor-ktor-client-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-http'], this['ktor-ktor-websockets']);
  }
}(this, function (_, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.d;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var VOID = kotlin_kotlin.$_$.d;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var CoroutineImpl = kotlin_kotlin.$_$.u4;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var toInt = kotlin_kotlin.$_$.j7;
  var webSocketSession = kotlin_io_ktor_ktor_client_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g4;
  var protoOf = kotlin_kotlin.$_$.w5;
  var classMeta = kotlin_kotlin.$_$.d5;
  var setMetadataFor = kotlin_kotlin.$_$.x5;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var readText = kotlin_io_ktor_ktor_websockets.$_$.o;
  var Text = kotlin_io_ktor_ktor_websockets.$_$.k;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.q5;
  var WebSocketException = kotlin_io_ktor_ktor_client_core.$_$.c;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Exception = kotlin_kotlin.$_$.v7;
  var charSequenceLength = kotlin_kotlin.$_$.b5;
  //endregion
  //region block: pre-declaration
  setMetadataFor($connectCOROUTINE$2, '$connectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($sendCOROUTINE$3, '$sendCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($receiveCOROUTINE$4, '$receiveCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(WsClient, 'WsClient', classMeta, VOID, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(main$slambda, 'main$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(main$lambda$lambda$slambda, 'main$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(main$lambda$lambda$slambda_1, 'main$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(initConnection$lambda$slambda, 'initConnection$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($initConnectionCOROUTINE$0, '$initConnectionCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($sendMessageCOROUTINE$1, '$sendMessageCOROUTINE$1', classMeta, CoroutineImpl);
  //endregion
  function main() {
    var wsClient = new WsClient(HttpClient(main$lambda));
    var tmp = GlobalScope_instance;
    launch(tmp, VOID, VOID, main$slambda_0(wsClient, null));
    var tmp_0 = document;
    tmp_0.addEventListener('DOMContentLoaded', main$lambda_0(wsClient));
  }
  function initConnection(wsClient, $completion) {
    var tmp = new $initConnectionCOROUTINE$0(wsClient, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function sendMessage(client, input, $completion) {
    var tmp = new $sendMessageCOROUTINE$1(client, input, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  }
  function writeMessage(message) {
    var tmp = document.createElement('p');
    var line = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    line.className = 'message';
    line.textContent = message;
    var tmp_0 = document.getElementById('messages');
    var messagesBlock = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    messagesBlock.appendChild(line);
    messagesBlock.scrollTop = line.offsetTop;
  }
  function $connectCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r35_1 = _this__u8e3s4;
  }
  protoOf($connectCOROUTINE$2).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = webSocketSession(this.r35_1.s35_1, Companion_getInstance().j1q_1, window.location.hostname, toInt(window.location.port), '/ws', VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.r35_1.t35_1 = ARGUMENT;
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
  function $sendCOROUTINE$3(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c36_1 = _this__u8e3s4;
    this.d36_1 = message;
  }
  protoOf($sendCOROUTINE$3).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 3;
            this.e36_1 = this.c36_1.t35_1;
            if (this.e36_1 == null) {
              this.f36_1 = null;
              this.e9_1 = 2;
              continue $sm;
            } else {
              this.e9_1 = 1;
              suspendResult = this.e36_1.n1w(Text_init_$Create$(this.d36_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.f36_1 = Unit_instance;
            this.e9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function $receiveCOROUTINE$4(_this__u8e3s4, onReceive, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o36_1 = _this__u8e3s4;
    this.p36_1 = onReceive;
  }
  protoOf($receiveCOROUTINE$4).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 4;
            this.e9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.e9_1 = 5;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp0_safe_receiver = this.o36_1.t35_1;
            tmp_0.q36_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1w();
            if (this.q36_1 == null) {
              this.r36_1 = null;
              this.e9_1 = 3;
              continue $sm;
            } else {
              this.e9_1 = 2;
              suspendResult = this.q36_1.bw(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.r36_1 = suspendResult;
            this.e9_1 = 3;
            continue $sm;
          case 3:
            var frame = this.r36_1;
            if (frame instanceof Text) {
              this.p36_1(readText(frame));
            }

            this.e9_1 = 1;
            continue $sm;
          case 4:
            throw this.h9_1;
          case 5:
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
  function WsClient(client) {
    this.s35_1 = client;
    this.t35_1 = null;
  }
  protoOf(WsClient).s36 = function ($completion) {
    var tmp = new $connectCOROUTINE$2(this, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(WsClient).t36 = function (message, $completion) {
    var tmp = new $sendCOROUTINE$3(this, message, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(WsClient).u36 = function (onReceive, $completion) {
    var tmp = new $receiveCOROUTINE$4(this, onReceive, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  function main$lambda($this$HttpClient) {
    $this$HttpClient.u27(Plugin_getInstance());
    return Unit_instance;
  }
  function main$slambda($wsClient, resultContinuation) {
    this.d37_1 = $wsClient;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(main$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = initConnection(this.d37_1, this);
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
  protoOf(main$slambda).o17 = function ($this$launch, completion) {
    var i = new main$slambda(this.d37_1, completion);
    i.e37_1 = $this$launch;
    return i;
  };
  function main$slambda_0($wsClient, resultContinuation) {
    var i = new main$slambda($wsClient, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda$slambda($wsClient, $commandInput, resultContinuation) {
    this.n37_1 = $wsClient;
    this.o37_1 = $commandInput;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(main$lambda$lambda$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = sendMessage(this.n37_1, this.o37_1, this);
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
  protoOf(main$lambda$lambda$slambda).o17 = function ($this$launch, completion) {
    var i = new main$lambda$lambda$slambda(this.n37_1, this.o37_1, completion);
    i.p37_1 = $this$launch;
    return i;
  };
  function main$lambda$lambda$slambda_0($wsClient, $commandInput, resultContinuation) {
    var i = new main$lambda$lambda$slambda($wsClient, $commandInput, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda($wsClient, $commandInput) {
    return function (it) {
      var tmp = GlobalScope_instance;
      launch(tmp, VOID, VOID, main$lambda$lambda$slambda_0($wsClient, $commandInput, null));
      return Unit_instance;
    };
  }
  function main$lambda$lambda$slambda_1($wsClient, $commandInput, resultContinuation) {
    this.y37_1 = $wsClient;
    this.z37_1 = $commandInput;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$slambda_1).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(main$lambda$lambda$slambda_1).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$slambda_1).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = sendMessage(this.y37_1, this.z37_1, this);
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
  protoOf(main$lambda$lambda$slambda_1).o17 = function ($this$launch, completion) {
    var i = new main$lambda$lambda$slambda_1(this.y37_1, this.z37_1, completion);
    i.a38_1 = $this$launch;
    return i;
  };
  function main$lambda$lambda$slambda_2($wsClient, $commandInput, resultContinuation) {
    var i = new main$lambda$lambda$slambda_1($wsClient, $commandInput, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda_0($wsClient, $commandInput) {
    return function (e) {
      var tmp;
      if ((e instanceof KeyboardEvent ? e : THROW_CCE()).key === 'Enter') {
        var tmp_0 = GlobalScope_instance;
        launch(tmp_0, VOID, VOID, main$lambda$lambda$slambda_2($wsClient, $commandInput, null));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function main$lambda_0($wsClient) {
    return function (it) {
      var tmp = document.getElementById('sendButton');
      var sendButton = tmp instanceof HTMLElement ? tmp : THROW_CCE();
      var tmp_0 = document.getElementById('commandInput');
      var commandInput = tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE();
      sendButton.addEventListener('click', main$lambda$lambda($wsClient, commandInput));
      commandInput.addEventListener('keydown', main$lambda$lambda_0($wsClient, commandInput));
      return Unit_instance;
    };
  }
  function writeMessage$ref() {
    var l = function (p0) {
      writeMessage(p0);
      return Unit_instance;
    };
    l.callableName = 'writeMessage';
    return l;
  }
  function initConnection$lambda$slambda($wsClient, resultContinuation) {
    this.j38_1 = $wsClient;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(initConnection$lambda$slambda).n17 = function ($this$launch, $completion) {
    var tmp = this.o17($this$launch, $completion);
    tmp.g9_1 = Unit_instance;
    tmp.h9_1 = null;
    return tmp.r9();
  };
  protoOf(initConnection$lambda$slambda).ea = function (p1, $completion) {
    return this.n17((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(initConnection$lambda$slambda).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 2;
            this.e9_1 = 1;
            suspendResult = initConnection(this.j38_1, this);
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
  protoOf(initConnection$lambda$slambda).o17 = function ($this$launch, completion) {
    var i = new initConnection$lambda$slambda(this.j38_1, completion);
    i.k38_1 = $this$launch;
    return i;
  };
  function initConnection$lambda$slambda_0($wsClient, resultContinuation) {
    var i = new initConnection$lambda$slambda($wsClient, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n17($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function initConnection$lambda($wsClient) {
    return function () {
      var tmp = GlobalScope_instance;
      return launch(tmp, VOID, VOID, initConnection$lambda$slambda_0($wsClient, null));
    };
  }
  function $initConnectionCOROUTINE$0(wsClient, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y34_1 = wsClient;
  }
  protoOf($initConnectionCOROUTINE$0).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 4;
            this.f9_1 = 3;
            this.e9_1 = 1;
            suspendResult = this.y34_1.s36(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e9_1 = 2;
            suspendResult = this.y34_1.u36(writeMessage$ref(), this);
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
            if (tmp_0 instanceof Exception) {
              var e = this.h9_1;
              if (e instanceof ClosedReceiveChannelException) {
                writeMessage('Disconnected. ' + e.message + '.');
              } else {
                if (e instanceof WebSocketException) {
                  writeMessage('Unable to connect.');
                }
              }
              var tmp_1 = window;
              tmp_1.setTimeout(initConnection$lambda(this.y34_1), 5000);
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
        var e_0 = $p;
        if (this.f9_1 === 4) {
          throw e_0;
        } else {
          this.e9_1 = this.f9_1;
          this.h9_1 = e_0;
        }
      }
     while (true);
  };
  function $sendMessageCOROUTINE$1(client, input, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h35_1 = client;
    this.i35_1 = input;
  }
  protoOf($sendMessageCOROUTINE$1).r9 = function () {
    var suspendResult = this.g9_1;
    $sm: do
      try {
        var tmp = this.e9_1;
        switch (tmp) {
          case 0:
            this.f9_1 = 3;
            var this_0 = this.i35_1.value;
            if (charSequenceLength(this_0) > 0) {
              this.e9_1 = 1;
              suspendResult = this.h35_1.t36(this.i35_1.value, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e9_1 = 2;
              continue $sm;
            }

          case 1:
            this.i35_1.value = '';
            this.e9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  main();
  return _;
}));

//# sourceMappingURL=backend-frontend.js.map
