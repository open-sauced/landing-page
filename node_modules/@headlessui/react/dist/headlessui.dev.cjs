var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Combobox: () => Combobox2,
  Dialog: () => Dialog2,
  Disclosure: () => Disclosure,
  FocusTrap: () => FocusTrap,
  Listbox: () => Listbox,
  Menu: () => Menu,
  Popover: () => Popover,
  Portal: () => Portal,
  RadioGroup: () => RadioGroup,
  Switch: () => Switch,
  Tab: () => Tab,
  Transition: () => Transition
});

// src/components/combobox/combobox.tsx
var import_react13 = __toESM(require("react"), 1);

// src/hooks/use-disposables.ts
var import_react = require("react");

// src/utils/disposables.ts
function disposables() {
  let disposables2 = [];
  let queue = [];
  let api = {
    enqueue(fn) {
      queue.push(fn);
    },
    requestAnimationFrame(...args) {
      let raf = requestAnimationFrame(...args);
      api.add(() => cancelAnimationFrame(raf));
    },
    nextFrame(...args) {
      api.requestAnimationFrame(() => {
        api.requestAnimationFrame(...args);
      });
    },
    setTimeout(...args) {
      let timer = setTimeout(...args);
      api.add(() => clearTimeout(timer));
    },
    add(cb) {
      disposables2.push(cb);
    },
    dispose() {
      for (let dispose of disposables2.splice(0)) {
        dispose();
      }
    },
    async workQueue() {
      for (let handle of queue.splice(0)) {
        await handle();
      }
    }
  };
  return api;
}

// src/hooks/use-disposables.ts
function useDisposables() {
  let [d] = (0, import_react.useState)(disposables);
  (0, import_react.useEffect)(() => () => d.dispose(), [d]);
  return d;
}

// src/hooks/use-id.ts
var import_react4 = require("react");

// src/hooks/use-iso-morphic-effect.ts
var import_react2 = require("react");
var useIsoMorphicEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// src/hooks/use-server-handoff-complete.ts
var import_react3 = require("react");
var state = { serverHandoffComplete: false };
function useServerHandoffComplete() {
  let [serverHandoffComplete, setServerHandoffComplete] = (0, import_react3.useState)(state.serverHandoffComplete);
  (0, import_react3.useEffect)(() => {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0, import_react3.useEffect)(() => {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}

// src/hooks/use-id.ts
var id = 0;
function generateId() {
  return ++id;
}
function useId() {
  let ready = useServerHandoffComplete();
  let [id2, setId] = (0, import_react4.useState)(ready ? generateId : null);
  useIsoMorphicEffect(() => {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
}

// src/hooks/use-computed.ts
var import_react6 = require("react");

// src/hooks/use-latest-value.ts
var import_react5 = require("react");
function useLatestValue(value) {
  let cache = (0, import_react5.useRef)(value);
  (0, import_react5.useEffect)(() => {
    cache.current = value;
  }, [value]);
  return cache;
}

// src/hooks/use-computed.ts
function useComputed(cb, dependencies) {
  let [value, setValue] = (0, import_react6.useState)(cb);
  let cbRef = useLatestValue(cb);
  useIsoMorphicEffect(() => setValue(cbRef.current), [cbRef, setValue, ...dependencies]);
  return value;
}

// src/hooks/use-sync-refs.ts
var import_react7 = require("react");
function useSyncRefs(...refs) {
  let cache = (0, import_react7.useRef)(refs);
  (0, import_react7.useEffect)(() => {
    cache.current = refs;
  }, [refs]);
  return (0, import_react7.useCallback)((value) => {
    for (let ref of cache.current) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
}

// src/utils/render.ts
var import_react8 = require("react");

// src/utils/match.ts
function match(value, lookup, ...args) {
  if (value in lookup) {
    let returnValue = lookup[value];
    return typeof returnValue === "function" ? returnValue(...args) : returnValue;
  }
  let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup).map((key) => `"${key}"`).join(", ")}.`);
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// src/utils/render.ts
function render({
  props,
  slot,
  defaultTag,
  features,
  visible = true,
  name
}) {
  if (visible)
    return _render(props, slot, defaultTag, name);
  let featureFlags = features != null ? features : 0 /* None */;
  if (featureFlags & 2 /* Static */) {
    let { static: isStatic = false, ...rest } = props;
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & 1 /* RenderStrategy */) {
    let { unmount = true, ...rest } = props;
    let strategy = unmount ? 0 /* Unmount */ : 1 /* Hidden */;
    return match(strategy, {
      [0 /* Unmount */]() {
        return null;
      },
      [1 /* Hidden */]() {
        return _render({ ...rest, ...{ hidden: true, style: { display: "none" } } }, slot, defaultTag, name);
      }
    });
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot = {}, tag, name) {
  let {
    as: Component = tag,
    children,
    refName = "ref",
    ...passThroughProps
  } = omit(props, ["unmount", "static"]);
  let refRelatedProps = props.ref !== void 0 ? { [refName]: props.ref } : {};
  let resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (passThroughProps.className && typeof passThroughProps.className === "function") {
    ;
    passThroughProps.className = passThroughProps.className(slot);
  }
  if (Component === import_react8.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0, import_react8.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error([
          'Passing props on "Fragment"!',
          "",
          `The current component <${name} /> is rendering a "Fragment".`,
          `However we need to passthrough the following props:`,
          Object.keys(passThroughProps).map((line) => `  - ${line}`).join("\n"),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element."
          ].map((line) => `  - ${line}`).join("\n")
        ].join("\n"));
      }
      return (0, import_react8.cloneElement)(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, [
        "onClick"
      ]), refRelatedProps));
    }
  }
  return (0, import_react8.createElement)(Component, Object.assign({}, omit(passThroughProps, ["ref"]), Component !== import_react8.Fragment && refRelatedProps), resolvedChildren);
}
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  let clone = Object.assign({}, passThroughProps);
  for (let func of functionsToMerge) {
    if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
      Object.assign(clone, {
        [func](event) {
          if (!event.defaultPrevented)
            passThroughProps[func](event);
          if (!event.defaultPrevented)
            existingProps[func](event);
        }
      });
    }
  }
  return clone;
}
function forwardRefWithAs(component) {
  var _a;
  return Object.assign((0, import_react8.forwardRef)(component), {
    displayName: (_a = component.displayName) != null ? _a : component.name
  });
}
function compact(object) {
  let clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit = []) {
  let clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// src/utils/calculate-active-index.ts
function assertNever(x) {
  throw new Error("Unexpected object: " + x);
}
function calculateActiveIndex(action, resolvers) {
  let items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  let currentActiveIndex = resolvers.resolveActiveIndex();
  let activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  let nextActiveIndex = (() => {
    switch (action.focus) {
      case 0 /* First */:
        return items.findIndex((item) => !resolvers.resolveDisabled(item));
      case 1 /* Previous */: {
        let idx = items.slice().reverse().findIndex((item, idx2, all) => {
          if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 2 /* Next */:
        return items.findIndex((item, idx) => {
          if (idx <= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
      case 3 /* Last */: {
        let idx = items.slice().reverse().findIndex((item) => !resolvers.resolveDisabled(item));
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 4 /* Specific */:
        return items.findIndex((item) => resolvers.resolveId(item) === action.id);
      case 5 /* Nothing */:
        return null;
      default:
        assertNever(action);
    }
  })();
  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

// src/utils/bugs.ts
function isDisabledReactIssue7711(element) {
  let parent = element.parentElement;
  let legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  let isParentDisabled = (parent == null ? void 0 : parent.getAttribute("disabled")) === "";
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  let previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// src/hooks/use-window-event.ts
var import_react9 = require("react");
function useWindowEvent(type, listener, options) {
  let listenerRef = (0, import_react9.useRef)(listener);
  listenerRef.current = listener;
  (0, import_react9.useEffect)(() => {
    function handler(event) {
      listenerRef.current.call(window, event);
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/internal/open-closed.tsx
var import_react10 = __toESM(require("react"), 1);
var Context = (0, import_react10.createContext)(null);
Context.displayName = "OpenClosedContext";
function useOpenClosed() {
  return (0, import_react10.useContext)(Context);
}
function OpenClosedProvider({ value, children }) {
  return /* @__PURE__ */ import_react10.default.createElement(Context.Provider, {
    value
  }, children);
}

// src/hooks/use-resolve-button-type.ts
var import_react11 = require("react");
function resolveType(props) {
  var _a;
  if (props.type)
    return props.type;
  let tag = (_a = props.as) != null ? _a : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  let [type, setType] = (0, import_react11.useState)(() => resolveType(props));
  useIsoMorphicEffect(() => {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(() => {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// src/hooks/use-tree-walker.ts
var import_react12 = require("react");
function useTreeWalker({
  container,
  accept,
  walk,
  enabled = true
}) {
  let acceptRef = (0, import_react12.useRef)(accept);
  let walkRef = (0, import_react12.useRef)(walk);
  (0, import_react12.useEffect)(() => {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  useIsoMorphicEffect(() => {
    if (!container)
      return;
    if (!enabled)
      return;
    let accept2 = acceptRef.current;
    let walk2 = walkRef.current;
    let acceptNode = Object.assign((node) => accept2(node), { acceptNode: accept2 });
    let walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);
    while (walker.nextNode())
      walk2(walker.currentNode);
  }, [container, enabled, acceptRef, walkRef]);
}

// src/components/combobox/combobox.tsx
var reducers = {
  [1 /* CloseCombobox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.comboboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, comboboxState: 1 /* Closed */ };
  },
  [0 /* OpenCombobox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.comboboxState === 0 /* Open */)
      return state2;
    return { ...state2, comboboxState: 0 /* Open */ };
  },
  [2 /* SetDisabled */](state2, action) {
    if (state2.disabled === action.disabled)
      return state2;
    return { ...state2, disabled: action.disabled };
  },
  [3 /* GoToOption */](state2, action) {
    if (state2.disabled)
      return state2;
    if (state2.optionsRef.current && !state2.optionsPropsRef.current.static && state2.comboboxState === 1 /* Closed */)
      return state2;
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => state2.options,
      resolveActiveIndex: () => state2.activeOptionIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    if (state2.activeOptionIndex === activeOptionIndex)
      return state2;
    return { ...state2, activeOptionIndex };
  },
  [4 /* RegisterOption */]: (state2, action) => {
    var _a;
    let currentActiveOption = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex] : null;
    let orderMap = Array.from((_a = state2.optionsRef.current) == null ? void 0 : _a.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
    let options = [...state2.options, { id: action.id, dataRef: action.dataRef }].sort((a, z) => orderMap[a.id] - orderMap[z.id]);
    return {
      ...state2,
      options,
      activeOptionIndex: (() => {
        if (currentActiveOption === null)
          return null;
        return options.indexOf(currentActiveOption);
      })()
    };
  },
  [5 /* UnregisterOption */]: (state2, action) => {
    let nextOptions = state2.options.slice();
    let currentActiveOption = state2.activeOptionIndex !== null ? nextOptions[state2.activeOptionIndex] : null;
    let idx = nextOptions.findIndex((a) => a.id === action.id);
    if (idx !== -1)
      nextOptions.splice(idx, 1);
    return {
      ...state2,
      options: nextOptions,
      activeOptionIndex: (() => {
        if (idx === state2.activeOptionIndex)
          return null;
        if (currentActiveOption === null)
          return null;
        return nextOptions.indexOf(currentActiveOption);
      })()
    };
  }
};
var ComboboxContext = (0, import_react13.createContext)(null);
ComboboxContext.displayName = "ComboboxContext";
function useComboboxContext(component) {
  let context = (0, import_react13.useContext)(ComboboxContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useComboboxContext);
    throw err;
  }
  return context;
}
var ComboboxActions = (0, import_react13.createContext)(null);
ComboboxActions.displayName = "ComboboxActions";
function useComboboxActions() {
  let context = (0, import_react13.useContext)(ComboboxActions);
  if (context === null) {
    let err = new Error(`ComboboxActions is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useComboboxActions);
    throw err;
  }
  return context;
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_COMBOBOX_TAG = import_react13.Fragment;
var ComboboxRoot = forwardRefWithAs(function Combobox(props, ref) {
  let { value, onChange, disabled = false, ...passThroughProps } = props;
  let comboboxPropsRef = (0, import_react13.useRef)({
    value,
    onChange
  });
  let optionsPropsRef = (0, import_react13.useRef)({
    static: false,
    hold: false
  });
  let inputPropsRef = (0, import_react13.useRef)({
    displayValue: void 0
  });
  let reducerBag = (0, import_react13.useReducer)(stateReducer, {
    comboboxState: 1 /* Closed */,
    comboboxPropsRef,
    optionsPropsRef,
    inputPropsRef,
    labelRef: (0, import_react13.createRef)(),
    inputRef: (0, import_react13.createRef)(),
    buttonRef: (0, import_react13.createRef)(),
    optionsRef: (0, import_react13.createRef)(),
    disabled,
    options: [],
    activeOptionIndex: null
  });
  let [{ comboboxState, options, activeOptionIndex, optionsRef, inputRef, buttonRef }, dispatch] = reducerBag;
  useIsoMorphicEffect(() => {
    comboboxPropsRef.current.value = value;
  }, [value, comboboxPropsRef]);
  useIsoMorphicEffect(() => {
    comboboxPropsRef.current.onChange = onChange;
  }, [onChange, comboboxPropsRef]);
  useIsoMorphicEffect(() => dispatch({ type: 2 /* SetDisabled */, disabled }), [disabled]);
  useWindowEvent("mousedown", (event) => {
    var _a, _b, _c;
    let target = event.target;
    if (comboboxState !== 0 /* Open */)
      return;
    if ((_a = buttonRef.current) == null ? void 0 : _a.contains(target))
      return;
    if ((_b = inputRef.current) == null ? void 0 : _b.contains(target))
      return;
    if ((_c = optionsRef.current) == null ? void 0 : _c.contains(target))
      return;
    dispatch({ type: 1 /* CloseCombobox */ });
  });
  let activeOption = activeOptionIndex === null ? null : options[activeOptionIndex].dataRef.current.value;
  let slot = (0, import_react13.useMemo)(() => ({
    open: comboboxState === 0 /* Open */,
    disabled,
    activeIndex: activeOptionIndex,
    activeOption
  }), [comboboxState, disabled, options, activeOptionIndex]);
  let syncInputValue = (0, import_react13.useCallback)(() => {
    if (!inputRef.current)
      return;
    if (value === void 0)
      return;
    let displayValue = inputPropsRef.current.displayValue;
    if (typeof displayValue === "function") {
      inputRef.current.value = displayValue(value);
    } else if (typeof value === "string") {
      inputRef.current.value = value;
    }
  }, [value, inputRef, inputPropsRef]);
  let selectOption = (0, import_react13.useCallback)((id2) => {
    let option = options.find((item) => item.id === id2);
    if (!option)
      return;
    let { dataRef } = option;
    comboboxPropsRef.current.onChange(dataRef.current.value);
    syncInputValue();
  }, [options, comboboxPropsRef, inputRef]);
  let selectActiveOption = (0, import_react13.useCallback)(() => {
    if (activeOptionIndex !== null) {
      let { dataRef } = options[activeOptionIndex];
      comboboxPropsRef.current.onChange(dataRef.current.value);
      syncInputValue();
    }
  }, [activeOptionIndex, options, comboboxPropsRef, inputRef]);
  let actionsBag = (0, import_react13.useMemo)(() => ({ selectOption, selectActiveOption }), [selectOption, selectActiveOption]);
  useIsoMorphicEffect(() => {
    if (comboboxState !== 1 /* Closed */)
      return;
    syncInputValue();
  }, [syncInputValue, comboboxState]);
  useIsoMorphicEffect(syncInputValue, [syncInputValue]);
  return /* @__PURE__ */ import_react13.default.createElement(ComboboxActions.Provider, {
    value: actionsBag
  }, /* @__PURE__ */ import_react13.default.createElement(ComboboxContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react13.default.createElement(OpenClosedProvider, {
    value: match(comboboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    props: ref === null ? passThroughProps : { ...passThroughProps, ref },
    slot,
    defaultTag: DEFAULT_COMBOBOX_TAG,
    name: "Combobox"
  }))));
});
var DEFAULT_INPUT_TAG = "input";
var Input = forwardRefWithAs(function Input2(props, ref) {
  var _a, _b;
  let { value, onChange, displayValue, ...passThroughProps } = props;
  let [state2, dispatch] = useComboboxContext("Combobox.Input");
  let actions = useComboboxActions();
  let inputRef = useSyncRefs(state2.inputRef, ref);
  let inputPropsRef = state2.inputPropsRef;
  let id2 = `headlessui-combobox-input-${useId()}`;
  let d = useDisposables();
  let onChangeRef = useLatestValue(onChange);
  useIsoMorphicEffect(() => {
    inputPropsRef.current.displayValue = displayValue;
  }, [displayValue, inputPropsRef]);
  let handleKeyDown = (0, import_react13.useCallback)((event) => {
    switch (event.key) {
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        actions.selectActiveOption();
        dispatch({ type: 1 /* CloseCombobox */ });
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return match(state2.comboboxState, {
          [0 /* Open */]: () => {
            return dispatch({ type: 3 /* GoToOption */, focus: 2 /* Next */ });
          },
          [1 /* Closed */]: () => {
            dispatch({ type: 0 /* OpenCombobox */ });
            d.nextFrame(() => {
              if (!state2.comboboxPropsRef.current.value) {
                dispatch({ type: 3 /* GoToOption */, focus: 0 /* First */ });
              }
            });
          }
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return match(state2.comboboxState, {
          [0 /* Open */]: () => {
            return dispatch({ type: 3 /* GoToOption */, focus: 1 /* Previous */ });
          },
          [1 /* Closed */]: () => {
            dispatch({ type: 0 /* OpenCombobox */ });
            d.nextFrame(() => {
              if (!state2.comboboxPropsRef.current.value) {
                dispatch({ type: 3 /* GoToOption */, focus: 3 /* Last */ });
              }
            });
          }
        });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 3 /* GoToOption */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 3 /* GoToOption */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        if (state2.optionsRef.current && !state2.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        return dispatch({ type: 1 /* CloseCombobox */ });
      case "Tab" /* Tab */:
        actions.selectActiveOption();
        dispatch({ type: 1 /* CloseCombobox */ });
        break;
    }
  }, [d, dispatch, state2, actions]);
  let handleChange = (0, import_react13.useCallback)((event) => {
    var _a2;
    dispatch({ type: 0 /* OpenCombobox */ });
    (_a2 = onChangeRef.current) == null ? void 0 : _a2.call(onChangeRef, event);
  }, [dispatch, onChangeRef]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id].join(" ");
  }, [state2.labelRef.current]);
  let slot = (0, import_react13.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let propsWeControl = {
    ref: inputRef,
    id: id2,
    role: "combobox",
    type: "text",
    "aria-controls": (_a = state2.optionsRef.current) == null ? void 0 : _a.id,
    "aria-expanded": state2.disabled ? void 0 : state2.comboboxState === 0 /* Open */,
    "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_b = state2.options[state2.activeOptionIndex]) == null ? void 0 : _b.id,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onKeyDown: handleKeyDown,
    onChange: handleChange
  };
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_INPUT_TAG,
    name: "Combobox.Input"
  });
});
var DEFAULT_BUTTON_TAG = "button";
var Button = forwardRefWithAs(function Button2(props, ref) {
  var _a;
  let [state2, dispatch] = useComboboxContext("Combobox.Button");
  let actions = useComboboxActions();
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-combobox-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react13.useCallback)((event) => {
    switch (event.key) {
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        if (state2.comboboxState === 1 /* Closed */) {
          dispatch({ type: 0 /* OpenCombobox */ });
          d.nextFrame(() => {
            if (!state2.comboboxPropsRef.current.value) {
              dispatch({ type: 3 /* GoToOption */, focus: 0 /* First */ });
            }
          });
        }
        return d.nextFrame(() => {
          var _a2;
          return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        if (state2.comboboxState === 1 /* Closed */) {
          dispatch({ type: 0 /* OpenCombobox */ });
          d.nextFrame(() => {
            if (!state2.comboboxPropsRef.current.value) {
              dispatch({ type: 3 /* GoToOption */, focus: 3 /* Last */ });
            }
          });
        }
        return d.nextFrame(() => {
          var _a2;
          return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
        });
      case "Escape" /* Escape */:
        event.preventDefault();
        if (state2.optionsRef.current && !state2.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        dispatch({ type: 1 /* CloseCombobox */ });
        return d.nextFrame(() => {
          var _a2;
          return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
        });
    }
  }, [d, dispatch, state2, actions]);
  let handleClick = (0, import_react13.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (state2.comboboxState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseCombobox */ });
    } else {
      event.preventDefault();
      dispatch({ type: 0 /* OpenCombobox */ });
    }
    d.nextFrame(() => {
      var _a2;
      return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }, [dispatch, d, state2]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id, id2].join(" ");
  }, [state2.labelRef.current, id2]);
  let slot = (0, import_react13.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let passthroughProps = props;
  let propsWeControl = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    tabIndex: -1,
    "aria-haspopup": true,
    "aria-controls": (_a = state2.optionsRef.current) == null ? void 0 : _a.id,
    "aria-expanded": state2.disabled ? void 0 : state2.comboboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Combobox.Button"
  });
});
var DEFAULT_LABEL_TAG = "label";
function Label(props) {
  let [state2] = useComboboxContext("Combobox.Label");
  let id2 = `headlessui-combobox-label-${useId()}`;
  let handleClick = (0, import_react13.useCallback)(() => {
    var _a;
    return (_a = state2.inputRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }, [state2.inputRef]);
  let slot = (0, import_react13.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let propsWeControl = { ref: state2.labelRef, id: id2, onClick: handleClick };
  return render({
    props: { ...props, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: "Combobox.Label"
  });
}
var DEFAULT_OPTIONS_TAG = "ul";
var OptionsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Options = forwardRefWithAs(function Options2(props, ref) {
  var _a;
  let { hold = false, ...passthroughProps } = props;
  let [state2] = useComboboxContext("Combobox.Options");
  let { optionsPropsRef } = state2;
  let optionsRef = useSyncRefs(state2.optionsRef, ref);
  let id2 = `headlessui-combobox-options-${useId()}`;
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.comboboxState === 0 /* Open */;
  })();
  useIsoMorphicEffect(() => {
    var _a2;
    optionsPropsRef.current.static = (_a2 = props.static) != null ? _a2 : false;
  }, [optionsPropsRef, props.static]);
  useIsoMorphicEffect(() => {
    optionsPropsRef.current.hold = hold;
  }, [hold, optionsPropsRef]);
  useTreeWalker({
    container: state2.optionsRef.current,
    enabled: state2.comboboxState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "option")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let labelledby = useComputed(() => {
    var _a2, _b, _c;
    return (_c = (_a2 = state2.labelRef.current) == null ? void 0 : _a2.id) != null ? _c : (_b = state2.buttonRef.current) == null ? void 0 : _b.id;
  }, [state2.labelRef.current, state2.buttonRef.current]);
  let slot = (0, import_react13.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */ }), [state2]);
  let propsWeControl = {
    "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_a = state2.options[state2.activeOptionIndex]) == null ? void 0 : _a.id,
    "aria-labelledby": labelledby,
    role: "listbox",
    id: id2,
    ref: optionsRef
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible,
    name: "Combobox.Options"
  });
});
var DEFAULT_OPTION_TAG = "li";
function Option(props) {
  let { disabled = false, value, ...passthroughProps } = props;
  let [state2, dispatch] = useComboboxContext("Combobox.Option");
  let actions = useComboboxActions();
  let id2 = `headlessui-combobox-option-${useId()}`;
  let active = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex].id === id2 : false;
  let selected = state2.comboboxPropsRef.current.value === value;
  let bag = (0, import_react13.useRef)({ disabled, value });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    bag.current.value = value;
  }, [bag, value]);
  useIsoMorphicEffect(() => {
    var _a, _b;
    bag.current.textValue = (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, id2]);
  let select = (0, import_react13.useCallback)(() => actions.selectOption(id2), [actions, id2]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 4 /* RegisterOption */, id: id2, dataRef: bag });
    return () => dispatch({ type: 5 /* UnregisterOption */, id: id2 });
  }, [bag, id2]);
  useIsoMorphicEffect(() => {
    if (state2.comboboxState !== 0 /* Open */)
      return;
    if (!selected)
      return;
    dispatch({ type: 3 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [state2.comboboxState, selected, id2]);
  useIsoMorphicEffect(() => {
    if (state2.comboboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a, _b;
      (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.scrollIntoView) == null ? void 0 : _b.call(_a, { block: "nearest" });
    });
    return d.dispose;
  }, [
    id2,
    active,
    state2.comboboxState,
    state2.activeOptionIndex
  ]);
  let handleClick = (0, import_react13.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    select();
    dispatch({ type: 1 /* CloseCombobox */ });
    disposables().nextFrame(() => {
      var _a;
      return (_a = state2.inputRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
    });
  }, [dispatch, state2.inputRef, disabled, select]);
  let handleFocus = (0, import_react13.useCallback)(() => {
    if (disabled)
      return dispatch({ type: 3 /* GoToOption */, focus: 5 /* Nothing */ });
    dispatch({ type: 3 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, id2, dispatch]);
  let handleMove = (0, import_react13.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({ type: 3 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, active, id2, dispatch]);
  let handleLeave = (0, import_react13.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    if (state2.optionsPropsRef.current.hold)
      return;
    dispatch({ type: 3 /* GoToOption */, focus: 5 /* Nothing */ });
  }, [disabled, active, dispatch, state2.comboboxState, state2.comboboxPropsRef]);
  let slot = (0, import_react13.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let propsWeControl = {
    id: id2,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: "Combobox.Option"
  });
}
var Combobox2 = Object.assign(ComboboxRoot, {
  Input,
  Button,
  Label,
  Options,
  Option
});

// src/components/dialog/dialog.tsx
var import_react20 = __toESM(require("react"), 1);

// src/hooks/use-focus-trap.ts
var import_react15 = require("react");

// src/utils/focus-management.ts
var focusableSelector = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map(false ? (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])` : (selector) => `${selector}:not([tabindex='-1'])`).join(",");
function getFocusableElements(container = document.body) {
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
function isFocusableElement(element, mode = 0 /* Strict */) {
  if (element === document.body)
    return false;
  return match(mode, {
    [0 /* Strict */]() {
      return element.matches(focusableSelector);
    },
    [1 /* Loose */]() {
      let next = element;
      while (next !== null) {
        if (next.matches(focusableSelector))
          return true;
        next = next.parentElement;
      }
      return false;
    }
  });
}
function focusElement(element) {
  element == null ? void 0 : element.focus({ preventScroll: true });
}
function focusIn(container, focus) {
  let elements = Array.isArray(container) ? container.slice().sort((a, z) => {
    let position = a.compareDocumentPosition(z);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING)
      return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING)
      return 1;
    return 0;
  }) : getFocusableElements(container);
  let active = document.activeElement;
  let direction = (() => {
    if (focus & (1 /* First */ | 4 /* Next */))
      return 1 /* Next */;
    if (focus & (2 /* Previous */ | 8 /* Last */))
      return -1 /* Previous */;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let startIndex = (() => {
    if (focus & 1 /* First */)
      return 0;
    if (focus & 2 /* Previous */)
      return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & 4 /* Next */)
      return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & 8 /* Last */)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let focusOptions = focus & 32 /* NoScroll */ ? { preventScroll: true } : {};
  let offset = 0;
  let total = elements.length;
  let next = void 0;
  do {
    if (offset >= total || offset + total <= 0)
      return 0 /* Error */;
    let nextIdx = startIndex + offset;
    if (focus & 16 /* WrapAround */) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return 3 /* Underflow */;
      if (nextIdx >= total)
        return 1 /* Overflow */;
    }
    next = elements[nextIdx];
    next == null ? void 0 : next.focus(focusOptions);
    offset += direction;
  } while (next !== document.activeElement);
  if (!next.hasAttribute("tabindex"))
    next.setAttribute("tabindex", "0");
  return 2 /* Success */;
}

// src/hooks/use-is-mounted.ts
var import_react14 = require("react");
function useIsMounted() {
  let mounted = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// src/hooks/use-focus-trap.ts
function useFocusTrap(container, features = 30 /* All */, {
  initialFocus,
  containers
} = {}) {
  let restoreElement = (0, import_react15.useRef)(typeof window !== "undefined" ? document.activeElement : null);
  let previousActiveElement = (0, import_react15.useRef)(null);
  let mounted = useIsMounted();
  let featuresRestoreFocus = Boolean(features & 16 /* RestoreFocus */);
  let featuresInitialFocus = Boolean(features & 2 /* InitialFocus */);
  (0, import_react15.useEffect)(() => {
    if (!featuresRestoreFocus)
      return;
    restoreElement.current = document.activeElement;
  }, [featuresRestoreFocus]);
  (0, import_react15.useEffect)(() => {
    if (!featuresRestoreFocus)
      return;
    return () => {
      focusElement(restoreElement.current);
      restoreElement.current = null;
    };
  }, [featuresRestoreFocus]);
  (0, import_react15.useEffect)(() => {
    if (!featuresInitialFocus)
      return;
    if (!container.current)
      return;
    let activeElement = document.activeElement;
    if (initialFocus == null ? void 0 : initialFocus.current) {
      if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
        previousActiveElement.current = activeElement;
        return;
      }
    } else if (container.current.contains(activeElement)) {
      previousActiveElement.current = activeElement;
      return;
    }
    if (initialFocus == null ? void 0 : initialFocus.current) {
      focusElement(initialFocus.current);
    } else {
      if (focusIn(container.current, 1 /* First */) === 0 /* Error */) {
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
    }
    previousActiveElement.current = document.activeElement;
  }, [container, initialFocus, featuresInitialFocus]);
  useWindowEvent("keydown", (event) => {
    if (!(features & 4 /* TabLock */))
      return;
    if (!container.current)
      return;
    if (event.key !== "Tab" /* Tab */)
      return;
    event.preventDefault();
    if (focusIn(container.current, (event.shiftKey ? 2 /* Previous */ : 4 /* Next */) | 16 /* WrapAround */) === 2 /* Success */) {
      previousActiveElement.current = document.activeElement;
    }
  });
  useWindowEvent("focus", (event) => {
    if (!(features & 8 /* FocusLock */))
      return;
    let allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    if (!allContainers.size)
      return;
    let previous = previousActiveElement.current;
    if (!previous)
      return;
    if (!mounted.current)
      return;
    let toElement = event.target;
    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        focusElement(previous);
      } else {
        previousActiveElement.current = toElement;
        focusElement(toElement);
      }
    } else {
      focusElement(previousActiveElement.current);
    }
  }, true);
}
function contains(containers, element) {
  var _a;
  for (let container of containers) {
    if ((_a = container.current) == null ? void 0 : _a.contains(element))
      return true;
  }
  return false;
}

// src/hooks/use-inert-others.ts
var interactables = /* @__PURE__ */ new Set();
var originals = /* @__PURE__ */ new Map();
function inert(element) {
  element.setAttribute("aria-hidden", "true");
  element.inert = true;
}
function restore(element) {
  let original = originals.get(element);
  if (!original)
    return;
  if (original["aria-hidden"] === null)
    element.removeAttribute("aria-hidden");
  else
    element.setAttribute("aria-hidden", original["aria-hidden"]);
  element.inert = original.inert;
}
function useInertOthers(container, enabled = true) {
  useIsoMorphicEffect(() => {
    if (!enabled)
      return;
    if (!container.current)
      return;
    let element = container.current;
    interactables.add(element);
    for (let original of originals.keys()) {
      if (original.contains(element)) {
        restore(original);
        originals.delete(original);
      }
    }
    document.querySelectorAll("body > *").forEach((child) => {
      if (!(child instanceof HTMLElement))
        return;
      for (let interactable of interactables) {
        if (child.contains(interactable))
          return;
      }
      if (interactables.size === 1) {
        originals.set(child, {
          "aria-hidden": child.getAttribute("aria-hidden"),
          inert: child.inert
        });
        inert(child);
      }
    });
    return () => {
      interactables.delete(element);
      if (interactables.size > 0) {
        document.querySelectorAll("body > *").forEach((child) => {
          if (!(child instanceof HTMLElement))
            return;
          if (originals.has(child))
            return;
          for (let interactable of interactables) {
            if (child.contains(interactable))
              return;
          }
          originals.set(child, {
            "aria-hidden": child.getAttribute("aria-hidden"),
            inert: child.inert
          });
          inert(child);
        });
      } else {
        for (let element2 of originals.keys()) {
          restore(element2);
          originals.delete(element2);
        }
      }
    };
  }, [enabled]);
}

// src/components/portal/portal.tsx
var import_react17 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// src/internal/portal-force-root.tsx
var import_react16 = __toESM(require("react"), 1);
var ForcePortalRootContext = (0, import_react16.createContext)(false);
function usePortalRoot() {
  return (0, import_react16.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return /* @__PURE__ */ import_react16.default.createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}

// src/components/portal/portal.tsx
function usePortalTarget() {
  let forceInRoot = usePortalRoot();
  let groupTarget = (0, import_react17.useContext)(PortalGroupContext);
  let [target, setTarget] = (0, import_react17.useState)(() => {
    if (!forceInRoot && groupTarget !== null)
      return null;
    if (typeof window === "undefined")
      return null;
    let existingRoot = document.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    let root = document.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    return document.body.appendChild(root);
  });
  (0, import_react17.useEffect)(() => {
    if (target === null)
      return;
    if (!document.body.contains(target)) {
      document.body.appendChild(target);
    }
  }, [target]);
  (0, import_react17.useEffect)(() => {
    if (forceInRoot)
      return;
    if (groupTarget === null)
      return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
}
var DEFAULT_PORTAL_TAG = import_react17.Fragment;
function Portal(props) {
  let passthroughProps = props;
  let target = usePortalTarget();
  let [element] = (0, import_react17.useState)(() => typeof window === "undefined" ? null : document.createElement("div"));
  let ready = useServerHandoffComplete();
  useIsoMorphicEffect(() => {
    if (!target)
      return;
    if (!element)
      return;
    target.appendChild(element);
    return () => {
      var _a;
      if (!target)
        return;
      if (!element)
        return;
      target.removeChild(element);
      if (target.childNodes.length <= 0) {
        (_a = target.parentElement) == null ? void 0 : _a.removeChild(target);
      }
    };
  }, [target, element]);
  if (!ready)
    return null;
  return !target || !element ? null : (0, import_react_dom.createPortal)(render({ props: passthroughProps, defaultTag: DEFAULT_PORTAL_TAG, name: "Portal" }), element);
}
var DEFAULT_GROUP_TAG = import_react17.Fragment;
var PortalGroupContext = (0, import_react17.createContext)(null);
function Group(props) {
  let { target, ...passthroughProps } = props;
  return /* @__PURE__ */ import_react17.default.createElement(PortalGroupContext.Provider, {
    value: target
  }, render({
    props: passthroughProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: "Popover.Group"
  }));
}
Portal.Group = Group;

// src/components/description/description.tsx
var import_react18 = __toESM(require("react"), 1);
var DescriptionContext = (0, import_react18.createContext)(null);
function useDescriptionContext() {
  let context = (0, import_react18.useContext)(DescriptionContext);
  if (context === null) {
    let err = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }
  return context;
}
function useDescriptions() {
  let [descriptionIds, setDescriptionIds] = (0, import_react18.useState)([]);
  return [
    descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0,
    (0, import_react18.useMemo)(() => {
      return function DescriptionProvider(props) {
        let register = (0, import_react18.useCallback)((value) => {
          setDescriptionIds((existing) => [...existing, value]);
          return () => setDescriptionIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        }, []);
        let contextBag = (0, import_react18.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react18.default.createElement(DescriptionContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setDescriptionIds])
  ];
}
var DEFAULT_DESCRIPTION_TAG = "p";
function Description(props) {
  let context = useDescriptionContext();
  let id2 = `headlessui-description-${useId()}`;
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let passThroughProps = props;
  let propsWeControl = { ...context.props, id: id2 };
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || "Description"
  });
}

// src/internal/stack-context.tsx
var import_react19 = __toESM(require("react"), 1);
var StackContext = (0, import_react19.createContext)(() => {
});
StackContext.displayName = "StackContext";
function useStackContext() {
  return (0, import_react19.useContext)(StackContext);
}
function StackProvider({
  children,
  onUpdate,
  type,
  element
}) {
  let parentUpdate = useStackContext();
  let notify = (0, import_react19.useCallback)((...args) => {
    onUpdate == null ? void 0 : onUpdate(...args);
    parentUpdate(...args);
  }, [parentUpdate, onUpdate]);
  useIsoMorphicEffect(() => {
    notify(0 /* Add */, type, element);
    return () => notify(1 /* Remove */, type, element);
  }, [notify, type, element]);
  return /* @__PURE__ */ import_react19.default.createElement(StackContext.Provider, {
    value: notify
  }, children);
}

// src/components/dialog/dialog.tsx
var reducers2 = {
  [0 /* SetTitleId */](state2, action) {
    if (state2.titleId === action.id)
      return state2;
    return { ...state2, titleId: action.id };
  }
};
var DialogContext = (0, import_react20.createContext)(null);
DialogContext.displayName = "DialogContext";
function useDialogContext(component) {
  let context = (0, import_react20.useContext)(DialogContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Dialog2.displayName} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDialogContext);
    throw err;
  }
  return context;
}
function stateReducer2(state2, action) {
  return match(action.type, reducers2, state2, action);
}
var DEFAULT_DIALOG_TAG = "div";
var DialogRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var DialogRoot = forwardRefWithAs(function Dialog(props, ref) {
  let { open, onClose, initialFocus, ...rest } = props;
  let [nestedDialogCount, setNestedDialogCount] = (0, import_react20.useState)(0);
  let usesOpenClosedState = useOpenClosed();
  if (open === void 0 && usesOpenClosedState !== null) {
    open = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  let containers = (0, import_react20.useRef)(/* @__PURE__ */ new Set());
  let internalDialogRef = (0, import_react20.useRef)(null);
  let dialogRef = useSyncRefs(internalDialogRef, ref);
  let hasOpen = props.hasOwnProperty("open") || usesOpenClosedState !== null;
  let hasOnClose = props.hasOwnProperty("onClose");
  if (!hasOpen && !hasOnClose) {
    throw new Error(`You have to provide an \`open\` and an \`onClose\` prop to the \`Dialog\` component.`);
  }
  if (!hasOpen) {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but forgot an \`open\` prop.`);
  }
  if (!hasOnClose) {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but forgot an \`onClose\` prop.`);
  }
  if (typeof open !== "boolean") {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${open}`);
  }
  if (typeof onClose !== "function") {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${onClose}`);
  }
  let dialogState = open ? 0 /* Open */ : 1 /* Closed */;
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return dialogState === 0 /* Open */;
  })();
  let [state2, dispatch] = (0, import_react20.useReducer)(stateReducer2, {
    titleId: null,
    descriptionId: null
  });
  let close = (0, import_react20.useCallback)(() => onClose(false), [onClose]);
  let setTitleId = (0, import_react20.useCallback)((id3) => dispatch({ type: 0 /* SetTitleId */, id: id3 }), [dispatch]);
  let ready = useServerHandoffComplete();
  let enabled = ready && dialogState === 0 /* Open */;
  let hasNestedDialogs = nestedDialogCount > 1;
  let hasParentDialog = (0, import_react20.useContext)(DialogContext) !== null;
  let position = !hasNestedDialogs ? "leaf" : "parent";
  useFocusTrap(internalDialogRef, enabled ? match(position, {
    parent: 16 /* RestoreFocus */,
    leaf: 30 /* All */
  }) : 1 /* None */, { initialFocus, containers });
  useInertOthers(internalDialogRef, hasNestedDialogs ? enabled : false);
  useWindowEvent("mousedown", (event) => {
    var _a;
    let target = event.target;
    if (dialogState !== 0 /* Open */)
      return;
    if (hasNestedDialogs)
      return;
    if ((_a = internalDialogRef.current) == null ? void 0 : _a.contains(target))
      return;
    close();
  });
  useWindowEvent("keydown", (event) => {
    if (event.key !== "Escape" /* Escape */)
      return;
    if (dialogState !== 0 /* Open */)
      return;
    if (hasNestedDialogs)
      return;
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  (0, import_react20.useEffect)(() => {
    if (dialogState !== 0 /* Open */)
      return;
    if (hasParentDialog)
      return;
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [dialogState, hasParentDialog]);
  (0, import_react20.useEffect)(() => {
    if (dialogState !== 0 /* Open */)
      return;
    if (!internalDialogRef.current)
      return;
    let observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return () => observer.disconnect();
  }, [dialogState, internalDialogRef, close]);
  let [describedby, DescriptionProvider] = useDescriptions();
  let id2 = `headlessui-dialog-${useId()}`;
  let contextBag = (0, import_react20.useMemo)(() => [{ dialogState, close, setTitleId }, state2], [dialogState, state2, close, setTitleId]);
  let slot = (0, import_react20.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let propsWeControl = {
    ref: dialogRef,
    id: id2,
    role: "dialog",
    "aria-modal": dialogState === 0 /* Open */ ? true : void 0,
    "aria-labelledby": state2.titleId,
    "aria-describedby": describedby,
    onClick(event) {
      event.stopPropagation();
    }
  };
  let passthroughProps = rest;
  return /* @__PURE__ */ import_react20.default.createElement(StackProvider, {
    type: "Dialog",
    element: internalDialogRef,
    onUpdate: (0, import_react20.useCallback)((message, type, element) => {
      if (type !== "Dialog")
        return;
      match(message, {
        [0 /* Add */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count + 1);
        },
        [1 /* Remove */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count - 1);
        }
      });
    }, [])
  }, /* @__PURE__ */ import_react20.default.createElement(ForcePortalRoot, {
    force: true
  }, /* @__PURE__ */ import_react20.default.createElement(Portal, null, /* @__PURE__ */ import_react20.default.createElement(DialogContext.Provider, {
    value: contextBag
  }, /* @__PURE__ */ import_react20.default.createElement(Portal.Group, {
    target: internalDialogRef
  }, /* @__PURE__ */ import_react20.default.createElement(ForcePortalRoot, {
    force: false
  }, /* @__PURE__ */ import_react20.default.createElement(DescriptionProvider, {
    slot,
    name: "Dialog.Description"
  }, render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible,
    name: "Dialog"
  }))))))));
});
var DEFAULT_OVERLAY_TAG = "div";
var Overlay = forwardRefWithAs(function Overlay2(props, ref) {
  let [{ dialogState, close }] = useDialogContext("Dialog.Overlay");
  let overlayRef = useSyncRefs(ref);
  let id2 = `headlessui-dialog-overlay-${useId()}`;
  let handleClick = (0, import_react20.useCallback)((event) => {
    if (event.target !== event.currentTarget)
      return;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  }, [close]);
  let slot = (0, import_react20.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let propsWeControl = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  let passthroughProps = props;
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: "Dialog.Overlay"
  });
});
var DEFAULT_TITLE_TAG = "h2";
function Title(props) {
  let [{ dialogState, setTitleId }] = useDialogContext("Dialog.Title");
  let id2 = `headlessui-dialog-title-${useId()}`;
  (0, import_react20.useEffect)(() => {
    setTitleId(id2);
    return () => setTitleId(null);
  }, [id2, setTitleId]);
  let slot = (0, import_react20.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let propsWeControl = { id: id2 };
  let passthroughProps = props;
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: "Dialog.Title"
  });
}
var Dialog2 = Object.assign(DialogRoot, { Overlay, Title, Description });

// src/components/disclosure/disclosure.tsx
var import_react21 = __toESM(require("react"), 1);
var reducers3 = {
  [0 /* ToggleDisclosure */]: (state2) => ({
    ...state2,
    disclosureState: match(state2.disclosureState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* CloseDisclosure */]: (state2) => {
    if (state2.disclosureState === 1 /* Closed */)
      return state2;
    return { ...state2, disclosureState: 1 /* Closed */ };
  },
  [4 /* LinkPanel */](state2) {
    if (state2.linkedPanel === true)
      return state2;
    return { ...state2, linkedPanel: true };
  },
  [5 /* UnlinkPanel */](state2) {
    if (state2.linkedPanel === false)
      return state2;
    return { ...state2, linkedPanel: false };
  },
  [2 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [3 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var DisclosureContext = (0, import_react21.createContext)(null);
DisclosureContext.displayName = "DisclosureContext";
function useDisclosureContext(component) {
  let context = (0, import_react21.useContext)(DisclosureContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Disclosure.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }
  return context;
}
var DisclosureAPIContext = (0, import_react21.createContext)(null);
DisclosureAPIContext.displayName = "DisclosureAPIContext";
function useDisclosureAPIContext(component) {
  let context = (0, import_react21.useContext)(DisclosureAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Disclosure.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }
  return context;
}
var DisclosurePanelContext = (0, import_react21.createContext)(null);
DisclosurePanelContext.displayName = "DisclosurePanelContext";
function useDisclosurePanelContext() {
  return (0, import_react21.useContext)(DisclosurePanelContext);
}
function stateReducer3(state2, action) {
  return match(action.type, reducers3, state2, action);
}
var DEFAULT_DISCLOSURE_TAG = import_react21.Fragment;
function Disclosure(props) {
  let { defaultOpen = false, ...passthroughProps } = props;
  let buttonId = `headlessui-disclosure-button-${useId()}`;
  let panelId = `headlessui-disclosure-panel-${useId()}`;
  let reducerBag = (0, import_react21.useReducer)(stateReducer3, {
    disclosureState: defaultOpen ? 0 /* Open */ : 1 /* Closed */,
    linkedPanel: false,
    buttonId,
    panelId
  });
  let [{ disclosureState }, dispatch] = reducerBag;
  (0, import_react21.useEffect)(() => dispatch({ type: 2 /* SetButtonId */, buttonId }), [buttonId, dispatch]);
  (0, import_react21.useEffect)(() => dispatch({ type: 3 /* SetPanelId */, panelId }), [panelId, dispatch]);
  let close = (0, import_react21.useCallback)((focusableElement) => {
    dispatch({ type: 1 /* CloseDisclosure */ });
    let restoreElement = (() => {
      if (!focusableElement)
        return document.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return document.getElementById(buttonId);
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, buttonId]);
  let api = (0, import_react21.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react21.useMemo)(() => ({ open: disclosureState === 0 /* Open */, close }), [disclosureState, close]);
  return /* @__PURE__ */ import_react21.default.createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react21.default.createElement(DisclosureAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react21.default.createElement(OpenClosedProvider, {
    value: match(disclosureState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    props: passthroughProps,
    slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: "Disclosure"
  }))));
}
var DEFAULT_BUTTON_TAG2 = "button";
var Button3 = forwardRefWithAs(function Button4(props, ref) {
  let [state2, dispatch] = useDisclosureContext("Disclosure.Button");
  let internalButtonRef = (0, import_react21.useRef)(null);
  let buttonRef = useSyncRefs(internalButtonRef, ref);
  let panelContext = useDisclosurePanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  let handleKeyDown = (0, import_react21.useCallback)((event) => {
    var _a;
    if (isWithinPanel) {
      if (state2.disclosureState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          (_a = document.getElementById(state2.buttonId)) == null ? void 0 : _a.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          break;
      }
    }
  }, [dispatch, isWithinPanel, state2.disclosureState, state2.buttonId]);
  let handleKeyUp = (0, import_react21.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react21.useCallback)((event) => {
    var _a;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 0 /* ToggleDisclosure */ });
      (_a = document.getElementById(state2.buttonId)) == null ? void 0 : _a.focus();
    } else {
      dispatch({ type: 0 /* ToggleDisclosure */ });
    }
  }, [dispatch, props.disabled, state2.buttonId, isWithinPanel]);
  let slot = (0, import_react21.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */ }), [state2]);
  let type = useResolveButtonType(props, internalButtonRef);
  let passthroughProps = props;
  let propsWeControl = isWithinPanel ? { ref: buttonRef, type, onKeyDown: handleKeyDown, onClick: handleClick } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.disclosureState === 0 /* Open */,
    "aria-controls": state2.linkedPanel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_BUTTON_TAG2,
    name: "Disclosure.Button"
  });
});
var DEFAULT_PANEL_TAG = "div";
var PanelRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel = forwardRefWithAs(function Panel2(props, ref) {
  let [state2, dispatch] = useDisclosureContext("Disclosure.Panel");
  let { close } = useDisclosureAPIContext("Disclosure.Panel");
  let panelRef = useSyncRefs(ref, () => {
    if (state2.linkedPanel)
      return;
    dispatch({ type: 4 /* LinkPanel */ });
  });
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.disclosureState === 0 /* Open */;
  })();
  (0, import_react21.useEffect)(() => () => dispatch({ type: 5 /* UnlinkPanel */ }), [dispatch]);
  (0, import_react21.useEffect)(() => {
    var _a;
    if (state2.disclosureState === 1 /* Closed */ && ((_a = props.unmount) != null ? _a : true)) {
      dispatch({ type: 5 /* UnlinkPanel */ });
    }
  }, [state2.disclosureState, props.unmount, dispatch]);
  let slot = (0, import_react21.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */, close }), [state2, close]);
  let propsWeControl = {
    ref: panelRef,
    id: state2.panelId
  };
  let passthroughProps = props;
  return /* @__PURE__ */ import_react21.default.createElement(DisclosurePanelContext.Provider, {
    value: state2.panelId
  }, render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible,
    name: "Disclosure.Panel"
  }));
});
Disclosure.Button = Button3;
Disclosure.Panel = Panel;

// src/components/focus-trap/focus-trap.tsx
var import_react22 = require("react");
var DEFAULT_FOCUS_TRAP_TAG = "div";
function FocusTrap(props) {
  let container = (0, import_react22.useRef)(null);
  let { initialFocus, ...passthroughProps } = props;
  let ready = useServerHandoffComplete();
  useFocusTrap(container, ready ? 30 /* All */ : 1 /* None */, { initialFocus });
  let propsWeControl = {
    ref: container
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    defaultTag: DEFAULT_FOCUS_TRAP_TAG,
    name: "FocusTrap"
  });
}

// src/components/listbox/listbox.tsx
var import_react23 = __toESM(require("react"), 1);
var reducers4 = {
  [1 /* CloseListbox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, listboxState: 1 /* Closed */ };
  },
  [0 /* OpenListbox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 0 /* Open */)
      return state2;
    return { ...state2, listboxState: 0 /* Open */ };
  },
  [2 /* SetDisabled */](state2, action) {
    if (state2.disabled === action.disabled)
      return state2;
    return { ...state2, disabled: action.disabled };
  },
  [3 /* SetOrientation */](state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return { ...state2, orientation: action.orientation };
  },
  [4 /* GoToOption */](state2, action) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => state2.options,
      resolveActiveIndex: () => state2.activeOptionIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    if (state2.searchQuery === "" && state2.activeOptionIndex === activeOptionIndex)
      return state2;
    return { ...state2, searchQuery: "", activeOptionIndex };
  },
  [5 /* Search */]: (state2, action) => {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedOptions = state2.activeOptionIndex !== null ? state2.options.slice(state2.activeOptionIndex + offset).concat(state2.options.slice(0, state2.activeOptionIndex + offset)) : state2.options;
    let matchingOption = reOrderedOptions.find((option) => {
      var _a;
      return !option.dataRef.current.disabled && ((_a = option.dataRef.current.textValue) == null ? void 0 : _a.startsWith(searchQuery));
    });
    let matchIdx = matchingOption ? state2.options.indexOf(matchingOption) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeOptionIndex)
      return { ...state2, searchQuery };
    return { ...state2, searchQuery, activeOptionIndex: matchIdx };
  },
  [6 /* ClearSearch */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "" };
  },
  [7 /* RegisterOption */]: (state2, action) => {
    var _a;
    let orderMap = Array.from((_a = state2.optionsRef.current) == null ? void 0 : _a.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
    let options = [...state2.options, { id: action.id, dataRef: action.dataRef }].sort((a, z) => orderMap[a.id] - orderMap[z.id]);
    return { ...state2, options };
  },
  [8 /* UnregisterOption */]: (state2, action) => {
    let nextOptions = state2.options.slice();
    let currentActiveOption = state2.activeOptionIndex !== null ? nextOptions[state2.activeOptionIndex] : null;
    let idx = nextOptions.findIndex((a) => a.id === action.id);
    if (idx !== -1)
      nextOptions.splice(idx, 1);
    return {
      ...state2,
      options: nextOptions,
      activeOptionIndex: (() => {
        if (idx === state2.activeOptionIndex)
          return null;
        if (currentActiveOption === null)
          return null;
        return nextOptions.indexOf(currentActiveOption);
      })()
    };
  }
};
var ListboxContext = (0, import_react23.createContext)(null);
ListboxContext.displayName = "ListboxContext";
function useListboxContext(component) {
  let context = (0, import_react23.useContext)(ListboxContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Listbox.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useListboxContext);
    throw err;
  }
  return context;
}
function stateReducer4(state2, action) {
  return match(action.type, reducers4, state2, action);
}
var DEFAULT_LISTBOX_TAG = import_react23.Fragment;
function Listbox(props) {
  let { value, onChange, disabled = false, horizontal = false, ...passThroughProps } = props;
  const orientation = horizontal ? "horizontal" : "vertical";
  let reducerBag = (0, import_react23.useReducer)(stateReducer4, {
    listboxState: 1 /* Closed */,
    propsRef: { current: { value, onChange } },
    labelRef: (0, import_react23.createRef)(),
    buttonRef: (0, import_react23.createRef)(),
    optionsRef: (0, import_react23.createRef)(),
    disabled,
    orientation,
    options: [],
    searchQuery: "",
    activeOptionIndex: null
  });
  let [{ listboxState, propsRef, optionsRef, buttonRef }, dispatch] = reducerBag;
  useIsoMorphicEffect(() => {
    propsRef.current.value = value;
  }, [value, propsRef]);
  useIsoMorphicEffect(() => {
    propsRef.current.onChange = onChange;
  }, [onChange, propsRef]);
  useIsoMorphicEffect(() => dispatch({ type: 2 /* SetDisabled */, disabled }), [disabled]);
  useIsoMorphicEffect(() => dispatch({ type: 3 /* SetOrientation */, orientation }), [orientation]);
  useWindowEvent("mousedown", (event) => {
    var _a, _b, _c;
    let target = event.target;
    if (listboxState !== 0 /* Open */)
      return;
    if ((_a = buttonRef.current) == null ? void 0 : _a.contains(target))
      return;
    if ((_b = optionsRef.current) == null ? void 0 : _b.contains(target))
      return;
    dispatch({ type: 1 /* CloseListbox */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_c = buttonRef.current) == null ? void 0 : _c.focus();
    }
  });
  let slot = (0, import_react23.useMemo)(() => ({ open: listboxState === 0 /* Open */, disabled }), [listboxState, disabled]);
  return /* @__PURE__ */ import_react23.default.createElement(ListboxContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react23.default.createElement(OpenClosedProvider, {
    value: match(listboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    props: passThroughProps,
    slot,
    defaultTag: DEFAULT_LISTBOX_TAG,
    name: "Listbox"
  })));
}
var DEFAULT_BUTTON_TAG3 = "button";
var Button5 = forwardRefWithAs(function Button6(props, ref) {
  var _a;
  let [state2, dispatch] = useListboxContext("Listbox.Button");
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-listbox-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react23.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        dispatch({ type: 0 /* OpenListbox */ });
        d.nextFrame(() => {
          if (!state2.propsRef.current.value)
            dispatch({ type: 4 /* GoToOption */, focus: 0 /* First */ });
        });
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        dispatch({ type: 0 /* OpenListbox */ });
        d.nextFrame(() => {
          if (!state2.propsRef.current.value)
            dispatch({ type: 4 /* GoToOption */, focus: 3 /* Last */ });
        });
        break;
    }
  }, [dispatch, state2, d]);
  let handleKeyUp = (0, import_react23.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react23.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (state2.listboxState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseListbox */ });
      d.nextFrame(() => {
        var _a2;
        return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      dispatch({ type: 0 /* OpenListbox */ });
    }
  }, [dispatch, d, state2]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id, id2].join(" ");
  }, [state2.labelRef.current, id2]);
  let slot = (0, import_react23.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let passthroughProps = props;
  let propsWeControl = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_a = state2.optionsRef.current) == null ? void 0 : _a.id,
    "aria-expanded": state2.disabled ? void 0 : state2.listboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_BUTTON_TAG3,
    name: "Listbox.Button"
  });
});
var DEFAULT_LABEL_TAG2 = "label";
function Label2(props) {
  let [state2] = useListboxContext("Listbox.Label");
  let id2 = `headlessui-listbox-label-${useId()}`;
  let handleClick = (0, import_react23.useCallback)(() => {
    var _a;
    return (_a = state2.buttonRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }, [state2.buttonRef]);
  let slot = (0, import_react23.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let propsWeControl = { ref: state2.labelRef, id: id2, onClick: handleClick };
  return render({
    props: { ...props, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_LABEL_TAG2,
    name: "Listbox.Label"
  });
}
var DEFAULT_OPTIONS_TAG2 = "ul";
var OptionsRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Options3 = forwardRefWithAs(function Options4(props, ref) {
  var _a;
  let [state2, dispatch] = useListboxContext("Listbox.Options");
  let optionsRef = useSyncRefs(state2.optionsRef, ref);
  let id2 = `headlessui-listbox-options-${useId()}`;
  let d = useDisposables();
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.listboxState === 0 /* Open */;
  })();
  useIsoMorphicEffect(() => {
    let container = state2.optionsRef.current;
    if (!container)
      return;
    if (state2.listboxState !== 0 /* Open */)
      return;
    if (container === document.activeElement)
      return;
    container.focus({ preventScroll: true });
  }, [state2.listboxState, state2.optionsRef]);
  let handleKeyDown = (0, import_react23.useCallback)((event) => {
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 5 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseListbox */ });
        if (state2.activeOptionIndex !== null) {
          let { dataRef } = state2.options[state2.activeOptionIndex];
          state2.propsRef.current.onChange(dataRef.current.value);
        }
        disposables().nextFrame(() => {
          var _a2;
          return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
        });
        break;
      case match(state2.orientation, { vertical: "ArrowDown" /* ArrowDown */, horizontal: "ArrowRight" /* ArrowRight */ }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 2 /* Next */ });
      case match(state2.orientation, { vertical: "ArrowUp" /* ArrowUp */, horizontal: "ArrowLeft" /* ArrowLeft */ }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseListbox */ });
        return d.nextFrame(() => {
          var _a2;
          return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
        });
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 5 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 6 /* ClearSearch */ }), 350);
        }
        break;
    }
  }, [d, dispatch, searchDisposables, state2]);
  let labelledby = useComputed(() => {
    var _a2, _b, _c;
    return (_c = (_a2 = state2.labelRef.current) == null ? void 0 : _a2.id) != null ? _c : (_b = state2.buttonRef.current) == null ? void 0 : _b.id;
  }, [state2.labelRef.current, state2.buttonRef.current]);
  let slot = (0, import_react23.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */ }), [state2]);
  let propsWeControl = {
    "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_a = state2.options[state2.activeOptionIndex]) == null ? void 0 : _a.id,
    "aria-labelledby": labelledby,
    "aria-orientation": state2.orientation,
    id: id2,
    onKeyDown: handleKeyDown,
    role: "listbox",
    tabIndex: 0,
    ref: optionsRef
  };
  let passthroughProps = props;
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG2,
    features: OptionsRenderFeatures2,
    visible,
    name: "Listbox.Options"
  });
});
var DEFAULT_OPTION_TAG2 = "li";
function Option2(props) {
  let { disabled = false, value, ...passthroughProps } = props;
  let [state2, dispatch] = useListboxContext("Listbox.Option");
  let id2 = `headlessui-listbox-option-${useId()}`;
  let active = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex].id === id2 : false;
  let selected = state2.propsRef.current.value === value;
  let bag = (0, import_react23.useRef)({ disabled, value });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    bag.current.value = value;
  }, [bag, value]);
  useIsoMorphicEffect(() => {
    var _a, _b;
    bag.current.textValue = (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, id2]);
  let select = (0, import_react23.useCallback)(() => state2.propsRef.current.onChange(value), [state2.propsRef, value]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 7 /* RegisterOption */, id: id2, dataRef: bag });
    return () => dispatch({ type: 8 /* UnregisterOption */, id: id2 });
  }, [bag, id2]);
  useIsoMorphicEffect(() => {
    var _a, _b;
    if (state2.listboxState !== 0 /* Open */)
      return;
    if (!selected)
      return;
    dispatch({ type: 4 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
    (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }, [state2.listboxState]);
  useIsoMorphicEffect(() => {
    if (state2.listboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a, _b;
      (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.scrollIntoView) == null ? void 0 : _b.call(_a, { block: "nearest" });
    });
    return d.dispose;
  }, [
    id2,
    active,
    state2.listboxState,
    state2.activeOptionIndex
  ]);
  let handleClick = (0, import_react23.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    select();
    dispatch({ type: 1 /* CloseListbox */ });
    disposables().nextFrame(() => {
      var _a;
      return (_a = state2.buttonRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
    });
  }, [dispatch, state2.buttonRef, disabled, select]);
  let handleFocus = (0, import_react23.useCallback)(() => {
    if (disabled)
      return dispatch({ type: 4 /* GoToOption */, focus: 5 /* Nothing */ });
    dispatch({ type: 4 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, id2, dispatch]);
  let handleMove = (0, import_react23.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({ type: 4 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, active, id2, dispatch]);
  let handleLeave = (0, import_react23.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 4 /* GoToOption */, focus: 5 /* Nothing */ });
  }, [disabled, active, dispatch]);
  let slot = (0, import_react23.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let propsWeControl = {
    id: id2,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OPTION_TAG2,
    name: "Listbox.Option"
  });
}
Listbox.Button = Button5;
Listbox.Label = Label2;
Listbox.Options = Options3;
Listbox.Option = Option2;

// src/components/menu/menu.tsx
var import_react24 = __toESM(require("react"), 1);
var reducers5 = {
  [1 /* CloseMenu */](state2) {
    if (state2.menuState === 1 /* Closed */)
      return state2;
    return { ...state2, activeItemIndex: null, menuState: 1 /* Closed */ };
  },
  [0 /* OpenMenu */](state2) {
    if (state2.menuState === 0 /* Open */)
      return state2;
    return { ...state2, menuState: 0 /* Open */ };
  },
  [2 /* GoToItem */]: (state2, action) => {
    let activeItemIndex = calculateActiveIndex(action, {
      resolveItems: () => state2.items,
      resolveActiveIndex: () => state2.activeItemIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    if (state2.searchQuery === "" && state2.activeItemIndex === activeItemIndex)
      return state2;
    return { ...state2, searchQuery: "", activeItemIndex };
  },
  [3 /* Search */]: (state2, action) => {
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedItems = state2.activeItemIndex !== null ? state2.items.slice(state2.activeItemIndex + offset).concat(state2.items.slice(0, state2.activeItemIndex + offset)) : state2.items;
    let matchingItem = reOrderedItems.find((item) => {
      var _a;
      return ((_a = item.dataRef.current.textValue) == null ? void 0 : _a.startsWith(searchQuery)) && !item.dataRef.current.disabled;
    });
    let matchIdx = matchingItem ? state2.items.indexOf(matchingItem) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeItemIndex)
      return { ...state2, searchQuery };
    return { ...state2, searchQuery, activeItemIndex: matchIdx };
  },
  [4 /* ClearSearch */](state2) {
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "", searchActiveItemIndex: null };
  },
  [5 /* RegisterItem */]: (state2, action) => {
    var _a;
    let orderMap = Array.from((_a = state2.itemsRef.current) == null ? void 0 : _a.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
    let items = [...state2.items, { id: action.id, dataRef: action.dataRef }].sort((a, z) => orderMap[a.id] - orderMap[z.id]);
    return { ...state2, items };
  },
  [6 /* UnregisterItem */]: (state2, action) => {
    let nextItems = state2.items.slice();
    let currentActiveItem = state2.activeItemIndex !== null ? nextItems[state2.activeItemIndex] : null;
    let idx = nextItems.findIndex((a) => a.id === action.id);
    if (idx !== -1)
      nextItems.splice(idx, 1);
    return {
      ...state2,
      items: nextItems,
      activeItemIndex: (() => {
        if (idx === state2.activeItemIndex)
          return null;
        if (currentActiveItem === null)
          return null;
        return nextItems.indexOf(currentActiveItem);
      })()
    };
  }
};
var MenuContext = (0, import_react24.createContext)(null);
MenuContext.displayName = "MenuContext";
function useMenuContext(component) {
  let context = (0, import_react24.useContext)(MenuContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Menu.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useMenuContext);
    throw err;
  }
  return context;
}
function stateReducer5(state2, action) {
  return match(action.type, reducers5, state2, action);
}
var DEFAULT_MENU_TAG = import_react24.Fragment;
function Menu(props) {
  let reducerBag = (0, import_react24.useReducer)(stateReducer5, {
    menuState: 1 /* Closed */,
    buttonRef: (0, import_react24.createRef)(),
    itemsRef: (0, import_react24.createRef)(),
    items: [],
    searchQuery: "",
    activeItemIndex: null
  });
  let [{ menuState, itemsRef, buttonRef }, dispatch] = reducerBag;
  useWindowEvent("mousedown", (event) => {
    var _a, _b, _c;
    let target = event.target;
    if (menuState !== 0 /* Open */)
      return;
    if ((_a = buttonRef.current) == null ? void 0 : _a.contains(target))
      return;
    if ((_b = itemsRef.current) == null ? void 0 : _b.contains(target))
      return;
    dispatch({ type: 1 /* CloseMenu */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_c = buttonRef.current) == null ? void 0 : _c.focus();
    }
  });
  let slot = (0, import_react24.useMemo)(() => ({ open: menuState === 0 /* Open */ }), [menuState]);
  return /* @__PURE__ */ import_react24.default.createElement(MenuContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react24.default.createElement(OpenClosedProvider, {
    value: match(menuState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({ props, slot, defaultTag: DEFAULT_MENU_TAG, name: "Menu" })));
}
var DEFAULT_BUTTON_TAG4 = "button";
var Button7 = forwardRefWithAs(function Button8(props, ref) {
  var _a;
  let [state2, dispatch] = useMenuContext("Menu.Button");
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-menu-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react24.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ }));
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ }));
        break;
    }
  }, [dispatch, d]);
  let handleKeyUp = (0, import_react24.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react24.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (props.disabled)
      return;
    if (state2.menuState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseMenu */ });
      d.nextFrame(() => {
        var _a2;
        return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({ type: 0 /* OpenMenu */ });
    }
  }, [dispatch, d, state2, props.disabled]);
  let slot = (0, import_react24.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let passthroughProps = props;
  let propsWeControl = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_a = state2.itemsRef.current) == null ? void 0 : _a.id,
    "aria-expanded": props.disabled ? void 0 : state2.menuState === 0 /* Open */,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_BUTTON_TAG4,
    name: "Menu.Button"
  });
});
var DEFAULT_ITEMS_TAG = "div";
var ItemsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Items = forwardRefWithAs(function Items2(props, ref) {
  var _a, _b;
  let [state2, dispatch] = useMenuContext("Menu.Items");
  let itemsRef = useSyncRefs(state2.itemsRef, ref);
  let id2 = `headlessui-menu-items-${useId()}`;
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.menuState === 0 /* Open */;
  })();
  (0, import_react24.useEffect)(() => {
    let container = state2.itemsRef.current;
    if (!container)
      return;
    if (state2.menuState !== 0 /* Open */)
      return;
    if (container === document.activeElement)
      return;
    container.focus({ preventScroll: true });
  }, [state2.menuState, state2.itemsRef]);
  useTreeWalker({
    container: state2.itemsRef.current,
    enabled: state2.menuState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "menuitem")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = (0, import_react24.useCallback)((event) => {
    var _a2;
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 3 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        if (state2.activeItemIndex !== null) {
          let { id: id3 } = state2.items[state2.activeItemIndex];
          (_a2 = document.getElementById(id3)) == null ? void 0 : _a2.click();
        }
        disposables().nextFrame(() => {
          var _a3;
          return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 2 /* Next */ });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          var _a3;
          return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
        break;
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 3 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 4 /* ClearSearch */ }), 350);
        }
        break;
    }
  }, [dispatch, searchDisposables, state2]);
  let handleKeyUp = (0, import_react24.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let slot = (0, import_react24.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let propsWeControl = {
    "aria-activedescendant": state2.activeItemIndex === null ? void 0 : (_a = state2.items[state2.activeItemIndex]) == null ? void 0 : _a.id,
    "aria-labelledby": (_b = state2.buttonRef.current) == null ? void 0 : _b.id,
    id: id2,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: "menu",
    tabIndex: 0,
    ref: itemsRef
  };
  let passthroughProps = props;
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible,
    name: "Menu.Items"
  });
});
var DEFAULT_ITEM_TAG = import_react24.Fragment;
function Item(props) {
  let { disabled = false, onClick, ...passthroughProps } = props;
  let [state2, dispatch] = useMenuContext("Menu.Item");
  let id2 = `headlessui-menu-item-${useId()}`;
  let active = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex].id === id2 : false;
  useIsoMorphicEffect(() => {
    if (state2.menuState !== 0 /* Open */)
      return;
    if (!active)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a, _b;
      (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.scrollIntoView) == null ? void 0 : _b.call(_a, { block: "nearest" });
    });
    return d.dispose;
  }, [
    id2,
    active,
    state2.menuState,
    state2.activeItemIndex
  ]);
  let bag = (0, import_react24.useRef)({ disabled });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    var _a, _b;
    bag.current.textValue = (_b = (_a = document.getElementById(id2)) == null ? void 0 : _a.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, id2]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterItem */, id: id2, dataRef: bag });
    return () => dispatch({ type: 6 /* UnregisterItem */, id: id2 });
  }, [bag, id2]);
  let handleClick = (0, import_react24.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    dispatch({ type: 1 /* CloseMenu */ });
    disposables().nextFrame(() => {
      var _a;
      return (_a = state2.buttonRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
    });
    if (onClick)
      return onClick(event);
  }, [dispatch, state2.buttonRef, disabled, onClick]);
  let handleFocus = (0, import_react24.useCallback)(() => {
    if (disabled)
      return dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
    dispatch({ type: 2 /* GoToItem */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, id2, dispatch]);
  let handleMove = (0, import_react24.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({ type: 2 /* GoToItem */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, active, id2, dispatch]);
  let handleLeave = (0, import_react24.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
  }, [disabled, active, dispatch]);
  let slot = (0, import_react24.useMemo)(() => ({ active, disabled }), [active, disabled]);
  let propsWeControl = {
    id: id2,
    role: "menuitem",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: "Menu.Item"
  });
}
Menu.Button = Button7;
Menu.Items = Items;
Menu.Item = Item;

// src/components/popover/popover.tsx
var import_react25 = __toESM(require("react"), 1);
var reducers6 = {
  [0 /* TogglePopover */]: (state2) => ({
    ...state2,
    popoverState: match(state2.popoverState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* ClosePopover */](state2) {
    if (state2.popoverState === 1 /* Closed */)
      return state2;
    return { ...state2, popoverState: 1 /* Closed */ };
  },
  [2 /* SetButton */](state2, action) {
    if (state2.button === action.button)
      return state2;
    return { ...state2, button: action.button };
  },
  [3 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [4 /* SetPanel */](state2, action) {
    if (state2.panel === action.panel)
      return state2;
    return { ...state2, panel: action.panel };
  },
  [5 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var PopoverContext = (0, import_react25.createContext)(null);
PopoverContext.displayName = "PopoverContext";
function usePopoverContext(component) {
  let context = (0, import_react25.useContext)(PopoverContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Popover.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
}
var PopoverAPIContext = (0, import_react25.createContext)(null);
PopoverAPIContext.displayName = "PopoverAPIContext";
function usePopoverAPIContext(component) {
  let context = (0, import_react25.useContext)(PopoverAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${Popover.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}
var PopoverGroupContext = (0, import_react25.createContext)(null);
PopoverGroupContext.displayName = "PopoverGroupContext";
function usePopoverGroupContext() {
  return (0, import_react25.useContext)(PopoverGroupContext);
}
var PopoverPanelContext = (0, import_react25.createContext)(null);
PopoverPanelContext.displayName = "PopoverPanelContext";
function usePopoverPanelContext() {
  return (0, import_react25.useContext)(PopoverPanelContext);
}
function stateReducer6(state2, action) {
  return match(action.type, reducers6, state2, action);
}
var DEFAULT_POPOVER_TAG = "div";
function Popover(props) {
  let buttonId = `headlessui-popover-button-${useId()}`;
  let panelId = `headlessui-popover-panel-${useId()}`;
  let reducerBag = (0, import_react25.useReducer)(stateReducer6, {
    popoverState: 1 /* Closed */,
    button: null,
    buttonId,
    panel: null,
    panelId
  });
  let [{ popoverState, button, panel }, dispatch] = reducerBag;
  (0, import_react25.useEffect)(() => dispatch({ type: 3 /* SetButtonId */, buttonId }), [buttonId, dispatch]);
  (0, import_react25.useEffect)(() => dispatch({ type: 5 /* SetPanelId */, panelId }), [panelId, dispatch]);
  let registerBag = (0, import_react25.useMemo)(() => ({ buttonId, panelId, close: () => dispatch({ type: 1 /* ClosePopover */ }) }), [buttonId, panelId, dispatch]);
  let groupContext = usePopoverGroupContext();
  let registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  let isFocusWithinPopoverGroup = (0, import_react25.useCallback)(() => {
    var _a;
    return (_a = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _a : (button == null ? void 0 : button.contains(document.activeElement)) || (panel == null ? void 0 : panel.contains(document.activeElement));
  }, [groupContext, button, panel]);
  (0, import_react25.useEffect)(() => registerPopover == null ? void 0 : registerPopover(registerBag), [registerPopover, registerBag]);
  useWindowEvent("focus", () => {
    if (popoverState !== 0 /* Open */)
      return;
    if (isFocusWithinPopoverGroup())
      return;
    if (!button)
      return;
    if (!panel)
      return;
    dispatch({ type: 1 /* ClosePopover */ });
  }, true);
  useWindowEvent("mousedown", (event) => {
    let target = event.target;
    if (popoverState !== 0 /* Open */)
      return;
    if (button == null ? void 0 : button.contains(target))
      return;
    if (panel == null ? void 0 : panel.contains(target))
      return;
    dispatch({ type: 1 /* ClosePopover */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      button == null ? void 0 : button.focus();
    }
  });
  let close = (0, import_react25.useCallback)((focusableElement) => {
    dispatch({ type: 1 /* ClosePopover */ });
    let restoreElement = (() => {
      if (!focusableElement)
        return button;
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return button;
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, button]);
  let api = (0, import_react25.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react25.useMemo)(() => ({ open: popoverState === 0 /* Open */, close }), [popoverState, close]);
  return /* @__PURE__ */ import_react25.default.createElement(PopoverContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react25.default.createElement(PopoverAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react25.default.createElement(OpenClosedProvider, {
    value: match(popoverState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    props,
    slot,
    defaultTag: DEFAULT_POPOVER_TAG,
    name: "Popover"
  }))));
}
var DEFAULT_BUTTON_TAG5 = "button";
var Button9 = forwardRefWithAs(function Button10(props, ref) {
  let [state2, dispatch] = usePopoverContext("Popover.Button");
  let internalButtonRef = (0, import_react25.useRef)(null);
  let groupContext = usePopoverGroupContext();
  let closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  let panelContext = usePopoverPanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  let buttonRef = useSyncRefs(internalButtonRef, ref, isWithinPanel ? null : (button) => dispatch({ type: 2 /* SetButton */, button }));
  let withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  let activeElementRef = (0, import_react25.useRef)(null);
  let previousActiveElementRef = (0, import_react25.useRef)(typeof window === "undefined" ? null : document.activeElement);
  useWindowEvent("focus", () => {
    previousActiveElementRef.current = activeElementRef.current;
    activeElementRef.current = document.activeElement;
  }, true);
  let handleKeyDown = (0, import_react25.useCallback)((event) => {
    var _a, _b;
    if (isWithinPanel) {
      if (state2.popoverState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 1 /* ClosePopover */ });
          (_a = state2.button) == null ? void 0 : _a.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          if (state2.popoverState === 1 /* Closed */)
            closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          dispatch({ type: 0 /* TogglePopover */ });
          break;
        case "Escape" /* Escape */:
          if (state2.popoverState !== 0 /* Open */)
            return closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          if (!internalButtonRef.current)
            return;
          if (!internalButtonRef.current.contains(document.activeElement))
            return;
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 1 /* ClosePopover */ });
          break;
        case "Tab" /* Tab */:
          if (state2.popoverState !== 0 /* Open */)
            return;
          if (!state2.panel)
            return;
          if (!state2.button)
            return;
          if (event.shiftKey) {
            if (!previousActiveElementRef.current)
              return;
            if ((_b = state2.button) == null ? void 0 : _b.contains(previousActiveElementRef.current))
              return;
            if (state2.panel.contains(previousActiveElementRef.current))
              return;
            let focusableElements = getFocusableElements();
            let previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
            let buttonIdx = focusableElements.indexOf(state2.button);
            if (buttonIdx > previousIdx)
              return;
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, 8 /* Last */);
          } else {
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, 1 /* First */);
          }
          break;
      }
    }
  }, [
    dispatch,
    state2.popoverState,
    state2.buttonId,
    state2.button,
    state2.panel,
    internalButtonRef,
    closeOthers,
    isWithinPanel
  ]);
  let handleKeyUp = (0, import_react25.useCallback)((event) => {
    var _a;
    if (isWithinPanel)
      return;
    if (event.key === " " /* Space */) {
      event.preventDefault();
    }
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!state2.panel)
      return;
    if (!state2.button)
      return;
    switch (event.key) {
      case "Tab" /* Tab */:
        if (!previousActiveElementRef.current)
          return;
        if ((_a = state2.button) == null ? void 0 : _a.contains(previousActiveElementRef.current))
          return;
        if (state2.panel.contains(previousActiveElementRef.current))
          return;
        let focusableElements = getFocusableElements();
        let previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
        let buttonIdx = focusableElements.indexOf(state2.button);
        if (buttonIdx > previousIdx)
          return;
        event.preventDefault();
        event.stopPropagation();
        focusIn(state2.panel, 8 /* Last */);
        break;
    }
  }, [state2.popoverState, state2.panel, state2.button, isWithinPanel]);
  let handleClick = (0, import_react25.useCallback)((event) => {
    var _a, _b;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 1 /* ClosePopover */ });
      (_a = state2.button) == null ? void 0 : _a.focus();
    } else {
      if (state2.popoverState === 1 /* Closed */)
        closeOthers == null ? void 0 : closeOthers(state2.buttonId);
      (_b = state2.button) == null ? void 0 : _b.focus();
      dispatch({ type: 0 /* TogglePopover */ });
    }
  }, [
    dispatch,
    state2.button,
    state2.popoverState,
    state2.buttonId,
    props.disabled,
    closeOthers,
    isWithinPanel
  ]);
  let slot = (0, import_react25.useMemo)(() => ({ open: state2.popoverState === 0 /* Open */ }), [state2]);
  let type = useResolveButtonType(props, internalButtonRef);
  let passthroughProps = props;
  let propsWeControl = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.popoverState === 0 /* Open */,
    "aria-controls": state2.panel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_BUTTON_TAG5,
    name: "Popover.Button"
  });
});
var DEFAULT_OVERLAY_TAG2 = "div";
var OverlayRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Overlay3 = forwardRefWithAs(function Overlay4(props, ref) {
  let [{ popoverState }, dispatch] = usePopoverContext("Popover.Overlay");
  let overlayRef = useSyncRefs(ref);
  let id2 = `headlessui-popover-overlay-${useId()}`;
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return popoverState === 0 /* Open */;
  })();
  let handleClick = (0, import_react25.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    dispatch({ type: 1 /* ClosePopover */ });
  }, [dispatch]);
  let slot = (0, import_react25.useMemo)(() => ({ open: popoverState === 0 /* Open */ }), [popoverState]);
  let propsWeControl = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  let passthroughProps = props;
  return render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG2,
    features: OverlayRenderFeatures,
    visible,
    name: "Popover.Overlay"
  });
});
var DEFAULT_PANEL_TAG2 = "div";
var PanelRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel3 = forwardRefWithAs(function Panel4(props, ref) {
  let { focus = false, ...passthroughProps } = props;
  let [state2, dispatch] = usePopoverContext("Popover.Panel");
  let { close } = usePopoverAPIContext("Popover.Panel");
  let internalPanelRef = (0, import_react25.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: 4 /* SetPanel */, panel });
  });
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.popoverState === 0 /* Open */;
  })();
  let handleKeyDown = (0, import_react25.useCallback)((event) => {
    var _a;
    switch (event.key) {
      case "Escape" /* Escape */:
        if (state2.popoverState !== 0 /* Open */)
          return;
        if (!internalPanelRef.current)
          return;
        if (!internalPanelRef.current.contains(document.activeElement))
          return;
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* ClosePopover */ });
        (_a = state2.button) == null ? void 0 : _a.focus();
        break;
    }
  }, [state2, internalPanelRef, dispatch]);
  (0, import_react25.useEffect)(() => () => dispatch({ type: 4 /* SetPanel */, panel: null }), [dispatch]);
  (0, import_react25.useEffect)(() => {
    var _a;
    if (props.static)
      return;
    if (state2.popoverState === 1 /* Closed */ && ((_a = props.unmount) != null ? _a : true)) {
      dispatch({ type: 4 /* SetPanel */, panel: null });
    }
  }, [state2.popoverState, props.unmount, props.static, dispatch]);
  (0, import_react25.useEffect)(() => {
    if (!focus)
      return;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    let activeElement = document.activeElement;
    if (internalPanelRef.current.contains(activeElement))
      return;
    focusIn(internalPanelRef.current, 1 /* First */);
  }, [focus, internalPanelRef, state2.popoverState]);
  useWindowEvent("keydown", (event) => {
    var _a;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    if (event.key !== "Tab" /* Tab */)
      return;
    if (!document.activeElement)
      return;
    if (!internalPanelRef.current)
      return;
    if (!internalPanelRef.current.contains(document.activeElement))
      return;
    event.preventDefault();
    let result = focusIn(internalPanelRef.current, event.shiftKey ? 2 /* Previous */ : 4 /* Next */);
    if (result === 3 /* Underflow */) {
      return (_a = state2.button) == null ? void 0 : _a.focus();
    } else if (result === 1 /* Overflow */) {
      if (!state2.button)
        return;
      let elements = getFocusableElements();
      let buttonIdx = elements.indexOf(state2.button);
      let nextElements = elements.splice(buttonIdx + 1).filter((element) => {
        var _a2;
        return !((_a2 = internalPanelRef.current) == null ? void 0 : _a2.contains(element));
      });
      if (focusIn(nextElements, 1 /* First */) === 0 /* Error */) {
        focusIn(document.body, 1 /* First */);
      }
    }
  });
  useWindowEvent("focus", () => {
    var _a;
    if (!focus)
      return;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    if ((_a = internalPanelRef.current) == null ? void 0 : _a.contains(document.activeElement))
      return;
    dispatch({ type: 1 /* ClosePopover */ });
  }, true);
  let slot = (0, import_react25.useMemo)(() => ({ open: state2.popoverState === 0 /* Open */, close }), [state2, close]);
  let propsWeControl = {
    ref: panelRef,
    id: state2.panelId,
    onKeyDown: handleKeyDown
  };
  return /* @__PURE__ */ import_react25.default.createElement(PopoverPanelContext.Provider, {
    value: state2.panelId
  }, render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_PANEL_TAG2,
    features: PanelRenderFeatures2,
    visible,
    name: "Popover.Panel"
  }));
});
var DEFAULT_GROUP_TAG2 = "div";
function Group2(props) {
  let groupRef = (0, import_react25.useRef)(null);
  let [popovers, setPopovers] = (0, import_react25.useState)([]);
  let unregisterPopover = (0, import_react25.useCallback)((registerbag) => {
    setPopovers((existing) => {
      let idx = existing.indexOf(registerbag);
      if (idx !== -1) {
        let clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  }, [setPopovers]);
  let registerPopover = (0, import_react25.useCallback)((registerbag) => {
    setPopovers((existing) => [...existing, registerbag]);
    return () => unregisterPopover(registerbag);
  }, [setPopovers, unregisterPopover]);
  let isFocusWithinPopoverGroup = (0, import_react25.useCallback)(() => {
    var _a;
    let element = document.activeElement;
    if ((_a = groupRef.current) == null ? void 0 : _a.contains(element))
      return true;
    return popovers.some((bag) => {
      var _a2, _b;
      return ((_a2 = document.getElementById(bag.buttonId)) == null ? void 0 : _a2.contains(element)) || ((_b = document.getElementById(bag.panelId)) == null ? void 0 : _b.contains(element));
    });
  }, [groupRef, popovers]);
  let closeOthers = (0, import_react25.useCallback)((buttonId) => {
    for (let popover of popovers) {
      if (popover.buttonId !== buttonId)
        popover.close();
    }
  }, [popovers]);
  let contextBag = (0, import_react25.useMemo)(() => ({
    registerPopover,
    unregisterPopover,
    isFocusWithinPopoverGroup,
    closeOthers
  }), [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
  let slot = (0, import_react25.useMemo)(() => ({}), []);
  let propsWeControl = { ref: groupRef };
  let passthroughProps = props;
  return /* @__PURE__ */ import_react25.default.createElement(PopoverGroupContext.Provider, {
    value: contextBag
  }, render({
    props: { ...passthroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_GROUP_TAG2,
    name: "Popover.Group"
  }));
}
Popover.Button = Button9;
Popover.Overlay = Overlay3;
Popover.Panel = Panel3;
Popover.Group = Group2;

// src/components/radio-group/radio-group.tsx
var import_react28 = __toESM(require("react"), 1);

// src/hooks/use-flags.ts
var import_react26 = require("react");
function useFlags(initialFlags = 0) {
  let [flags, setFlags] = (0, import_react26.useState)(initialFlags);
  let addFlag = (0, import_react26.useCallback)((flag) => setFlags((flags2) => flags2 | flag), [setFlags]);
  let hasFlag = (0, import_react26.useCallback)((flag) => Boolean(flags & flag), [flags]);
  let removeFlag = (0, import_react26.useCallback)((flag) => setFlags((flags2) => flags2 & ~flag), [setFlags]);
  let toggleFlag = (0, import_react26.useCallback)((flag) => setFlags((flags2) => flags2 ^ flag), [setFlags]);
  return { addFlag, hasFlag, removeFlag, toggleFlag };
}

// src/components/label/label.tsx
var import_react27 = __toESM(require("react"), 1);
var LabelContext = (0, import_react27.createContext)(null);
function useLabelContext() {
  let context = (0, import_react27.useContext)(LabelContext);
  if (context === null) {
    let err = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useLabelContext);
    throw err;
  }
  return context;
}
function useLabels() {
  let [labelIds, setLabelIds] = (0, import_react27.useState)([]);
  return [
    labelIds.length > 0 ? labelIds.join(" ") : void 0,
    (0, import_react27.useMemo)(() => {
      return function LabelProvider(props) {
        let register = (0, import_react27.useCallback)((value) => {
          setLabelIds((existing) => [...existing, value]);
          return () => setLabelIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        }, []);
        let contextBag = (0, import_react27.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react27.default.createElement(LabelContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setLabelIds])
  ];
}
var DEFAULT_LABEL_TAG3 = "label";
function Label3(props) {
  let { passive = false, ...passThroughProps } = props;
  let context = useLabelContext();
  let id2 = `headlessui-label-${useId()}`;
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let propsWeControl = { ...context.props, id: id2 };
  let allProps = { ...passThroughProps, ...propsWeControl };
  if (passive)
    delete allProps["onClick"];
  return render({
    props: allProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG3,
    name: context.name || "Label"
  });
}

// src/components/radio-group/radio-group.tsx
var reducers7 = {
  [0 /* RegisterOption */](state2, action) {
    return {
      ...state2,
      options: [
        ...state2.options,
        { id: action.id, element: action.element, propsRef: action.propsRef }
      ]
    };
  },
  [1 /* UnregisterOption */](state2, action) {
    let options = state2.options.slice();
    let idx = state2.options.findIndex((radio) => radio.id === action.id);
    if (idx === -1)
      return state2;
    options.splice(idx, 1);
    return { ...state2, options };
  }
};
var RadioGroupContext = (0, import_react28.createContext)(null);
RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext(component) {
  let context = (0, import_react28.useContext)(RadioGroupContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <${RadioGroup.name} /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useRadioGroupContext);
    throw err;
  }
  return context;
}
function stateReducer7(state2, action) {
  return match(action.type, reducers7, state2, action);
}
var DEFAULT_RADIO_GROUP_TAG = "div";
function RadioGroup(props) {
  let { value, onChange, disabled = false, ...passThroughProps } = props;
  let [{ options }, dispatch] = (0, import_react28.useReducer)(stateReducer7, {
    options: []
  });
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let id2 = `headlessui-radiogroup-${useId()}`;
  let radioGroupRef = (0, import_react28.useRef)(null);
  let firstOption = (0, import_react28.useMemo)(() => options.find((option) => {
    if (option.propsRef.current.disabled)
      return false;
    return true;
  }), [options]);
  let containsCheckedOption = (0, import_react28.useMemo)(() => options.some((option) => option.propsRef.current.value === value), [options, value]);
  let triggerChange = (0, import_react28.useCallback)((nextValue) => {
    var _a;
    if (disabled)
      return false;
    if (nextValue === value)
      return false;
    let nextOption = (_a = options.find((option) => option.propsRef.current.value === nextValue)) == null ? void 0 : _a.propsRef.current;
    if (nextOption == null ? void 0 : nextOption.disabled)
      return false;
    onChange(nextValue);
    return true;
  }, [onChange, value, disabled, options]);
  useTreeWalker({
    container: radioGroupRef.current,
    accept(node) {
      if (node.getAttribute("role") === "radio")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = (0, import_react28.useCallback)((event) => {
    let container = radioGroupRef.current;
    if (!container)
      return;
    let all = options.filter((option) => option.propsRef.current.disabled === false).map((radio) => radio.element.current);
    switch (event.key) {
      case "ArrowLeft" /* ArrowLeft */:
      case "ArrowUp" /* ArrowUp */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 2 /* Previous */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === document.activeElement);
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case "ArrowRight" /* ArrowRight */:
      case "ArrowDown" /* ArrowDown */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 4 /* Next */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === document.activeElement);
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case " " /* Space */:
        {
          event.preventDefault();
          event.stopPropagation();
          let activeOption = options.find((option) => option.element.current === document.activeElement);
          if (activeOption)
            triggerChange(activeOption.propsRef.current.value);
        }
        break;
    }
  }, [radioGroupRef, options, triggerChange]);
  let registerOption = (0, import_react28.useCallback)((option) => {
    dispatch({ type: 0 /* RegisterOption */, ...option });
    return () => dispatch({ type: 1 /* UnregisterOption */, id: option.id });
  }, [dispatch]);
  let api = (0, import_react28.useMemo)(() => ({
    registerOption,
    firstOption,
    containsCheckedOption,
    change: triggerChange,
    disabled,
    value
  }), [registerOption, firstOption, containsCheckedOption, triggerChange, disabled, value]);
  let propsWeControl = {
    ref: radioGroupRef,
    id: id2,
    role: "radiogroup",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    onKeyDown: handleKeyDown
  };
  return /* @__PURE__ */ import_react28.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react28.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, /* @__PURE__ */ import_react28.default.createElement(RadioGroupContext.Provider, {
    value: api
  }, render({
    props: { ...passThroughProps, ...propsWeControl },
    defaultTag: DEFAULT_RADIO_GROUP_TAG,
    name: "RadioGroup"
  }))));
}
var DEFAULT_OPTION_TAG3 = "div";
function Option3(props) {
  let optionRef = (0, import_react28.useRef)(null);
  let id2 = `headlessui-radiogroup-option-${useId()}`;
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let { addFlag, removeFlag, hasFlag } = useFlags(1 /* Empty */);
  let { value, disabled = false, ...passThroughProps } = props;
  let propsRef = (0, import_react28.useRef)({ value, disabled });
  useIsoMorphicEffect(() => {
    propsRef.current.value = value;
  }, [value, propsRef]);
  useIsoMorphicEffect(() => {
    propsRef.current.disabled = disabled;
  }, [disabled, propsRef]);
  let {
    registerOption,
    disabled: radioGroupDisabled,
    change,
    firstOption,
    containsCheckedOption,
    value: radioGroupValue
  } = useRadioGroupContext("RadioGroup.Option");
  useIsoMorphicEffect(() => registerOption({ id: id2, element: optionRef, propsRef }), [id2, registerOption, optionRef, props]);
  let handleClick = (0, import_react28.useCallback)(() => {
    var _a;
    if (!change(value))
      return;
    addFlag(2 /* Active */);
    (_a = optionRef.current) == null ? void 0 : _a.focus();
  }, [addFlag, change, value]);
  let handleFocus = (0, import_react28.useCallback)(() => addFlag(2 /* Active */), [addFlag]);
  let handleBlur = (0, import_react28.useCallback)(() => removeFlag(2 /* Active */), [removeFlag]);
  let isFirstOption = (firstOption == null ? void 0 : firstOption.id) === id2;
  let isDisabled = radioGroupDisabled || disabled;
  let checked = radioGroupValue === value;
  let propsWeControl = {
    ref: optionRef,
    id: id2,
    role: "radio",
    "aria-checked": checked ? "true" : "false",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    "aria-disabled": isDisabled ? true : void 0,
    tabIndex: (() => {
      if (isDisabled)
        return -1;
      if (checked)
        return 0;
      if (!containsCheckedOption && isFirstOption)
        return 0;
      return -1;
    })(),
    onClick: isDisabled ? void 0 : handleClick,
    onFocus: isDisabled ? void 0 : handleFocus,
    onBlur: isDisabled ? void 0 : handleBlur
  };
  let slot = (0, import_react28.useMemo)(() => ({ checked, disabled: isDisabled, active: hasFlag(2 /* Active */) }), [checked, isDisabled, hasFlag]);
  return /* @__PURE__ */ import_react28.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react28.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_OPTION_TAG3,
    name: "RadioGroup.Option"
  })));
}
RadioGroup.Option = Option3;
RadioGroup.Label = Label3;
RadioGroup.Description = Description;

// src/components/switch/switch.tsx
var import_react29 = __toESM(require("react"), 1);
var GroupContext = (0, import_react29.createContext)(null);
GroupContext.displayName = "GroupContext";
var DEFAULT_GROUP_TAG3 = import_react29.Fragment;
function Group3(props) {
  let [switchElement, setSwitchElement] = (0, import_react29.useState)(null);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let context = (0, import_react29.useMemo)(() => ({ switch: switchElement, setSwitch: setSwitchElement, labelledby, describedby }), [switchElement, setSwitchElement, labelledby, describedby]);
  return /* @__PURE__ */ import_react29.default.createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, /* @__PURE__ */ import_react29.default.createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick() {
        if (!switchElement)
          return;
        switchElement.click();
        switchElement.focus({ preventScroll: true });
      }
    }
  }, /* @__PURE__ */ import_react29.default.createElement(GroupContext.Provider, {
    value: context
  }, render({ props, defaultTag: DEFAULT_GROUP_TAG3, name: "Switch.Group" }))));
}
var DEFAULT_SWITCH_TAG = "button";
function Switch(props) {
  let { checked, onChange, ...passThroughProps } = props;
  let id2 = `headlessui-switch-${useId()}`;
  let groupContext = (0, import_react29.useContext)(GroupContext);
  let internalSwitchRef = (0, import_react29.useRef)(null);
  let switchRef = useSyncRefs(internalSwitchRef, groupContext === null ? null : groupContext.setSwitch);
  let toggle = (0, import_react29.useCallback)(() => onChange(!checked), [onChange, checked]);
  let handleClick = (0, import_react29.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    toggle();
  }, [toggle]);
  let handleKeyUp = (0, import_react29.useCallback)((event) => {
    if (event.key !== "Tab" /* Tab */)
      event.preventDefault();
    if (event.key === " " /* Space */)
      toggle();
  }, [toggle]);
  let handleKeyPress = (0, import_react29.useCallback)((event) => event.preventDefault(), []);
  let slot = (0, import_react29.useMemo)(() => ({ checked }), [checked]);
  let propsWeControl = {
    id: id2,
    ref: switchRef,
    role: "switch",
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: 0,
    "aria-checked": checked,
    "aria-labelledby": groupContext == null ? void 0 : groupContext.labelledby,
    "aria-describedby": groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_SWITCH_TAG,
    name: "Switch"
  });
}
Switch.Group = Group3;
Switch.Label = Label3;
Switch.Description = Description;

// src/components/tabs/tabs.tsx
var import_react30 = __toESM(require("react"), 1);
var reducers8 = {
  [0 /* SetSelectedIndex */](state2, action) {
    if (state2.selectedIndex === action.index)
      return state2;
    return { ...state2, selectedIndex: action.index };
  },
  [1 /* SetOrientation */](state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return { ...state2, orientation: action.orientation };
  },
  [2 /* SetActivation */](state2, action) {
    if (state2.activation === action.activation)
      return state2;
    return { ...state2, activation: action.activation };
  },
  [3 /* RegisterTab */](state2, action) {
    if (state2.tabs.includes(action.tab))
      return state2;
    return { ...state2, tabs: [...state2.tabs, action.tab] };
  },
  [4 /* UnregisterTab */](state2, action) {
    return { ...state2, tabs: state2.tabs.filter((tab) => tab !== action.tab) };
  },
  [5 /* RegisterPanel */](state2, action) {
    if (state2.panels.includes(action.panel))
      return state2;
    return { ...state2, panels: [...state2.panels, action.panel] };
  },
  [6 /* UnregisterPanel */](state2, action) {
    return { ...state2, panels: state2.panels.filter((panel) => panel !== action.panel) };
  },
  [7 /* ForceRerender */](state2) {
    return { ...state2 };
  }
};
var TabsContext = (0, import_react30.createContext)(null);
TabsContext.displayName = "TabsContext";
function useTabsContext(component) {
  let context = (0, import_react30.useContext)(TabsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useTabsContext);
    throw err;
  }
  return context;
}
function stateReducer8(state2, action) {
  return match(action.type, reducers8, state2, action);
}
var DEFAULT_TABS_TAG = import_react30.Fragment;
function Tabs(props) {
  let {
    defaultIndex = 0,
    vertical = false,
    manual = false,
    onChange,
    selectedIndex = null,
    ...passThroughProps
  } = props;
  const orientation = vertical ? "vertical" : "horizontal";
  const activation = manual ? "manual" : "auto";
  let [state2, dispatch] = (0, import_react30.useReducer)(stateReducer8, {
    selectedIndex: null,
    tabs: [],
    panels: [],
    orientation,
    activation
  });
  let slot = (0, import_react30.useMemo)(() => ({ selectedIndex: state2.selectedIndex }), [state2.selectedIndex]);
  let onChangeRef = (0, import_react30.useRef)(() => {
  });
  (0, import_react30.useEffect)(() => {
    dispatch({ type: 1 /* SetOrientation */, orientation });
  }, [orientation]);
  (0, import_react30.useEffect)(() => {
    dispatch({ type: 2 /* SetActivation */, activation });
  }, [activation]);
  (0, import_react30.useEffect)(() => {
    if (typeof onChange === "function") {
      onChangeRef.current = onChange;
    }
  }, [onChange]);
  (0, import_react30.useEffect)(() => {
    if (state2.tabs.length <= 0)
      return;
    if (selectedIndex === null && state2.selectedIndex !== null)
      return;
    let tabs = state2.tabs.map((tab) => tab.current).filter(Boolean);
    let focusableTabs = tabs.filter((tab) => !tab.hasAttribute("disabled"));
    let indexToSet = selectedIndex != null ? selectedIndex : defaultIndex;
    if (indexToSet < 0) {
      dispatch({ type: 0 /* SetSelectedIndex */, index: tabs.indexOf(focusableTabs[0]) });
    } else if (indexToSet > state2.tabs.length) {
      dispatch({
        type: 0 /* SetSelectedIndex */,
        index: tabs.indexOf(focusableTabs[focusableTabs.length - 1])
      });
    } else {
      let before = tabs.slice(0, indexToSet);
      let after = tabs.slice(indexToSet);
      let next = [...after, ...before].find((tab) => focusableTabs.includes(tab));
      if (!next)
        return;
      dispatch({ type: 0 /* SetSelectedIndex */, index: tabs.indexOf(next) });
    }
  }, [defaultIndex, selectedIndex, state2.tabs, state2.selectedIndex]);
  let lastChangedIndex = (0, import_react30.useRef)(state2.selectedIndex);
  (0, import_react30.useEffect)(() => {
    lastChangedIndex.current = state2.selectedIndex;
  }, [state2.selectedIndex]);
  let providerBag = (0, import_react30.useMemo)(() => [
    state2,
    {
      dispatch,
      change(index) {
        if (lastChangedIndex.current !== index)
          onChangeRef.current(index);
        lastChangedIndex.current = index;
        dispatch({ type: 0 /* SetSelectedIndex */, index });
      }
    }
  ], [state2, dispatch]);
  return /* @__PURE__ */ import_react30.default.createElement(TabsContext.Provider, {
    value: providerBag
  }, render({
    props: { ...passThroughProps },
    slot,
    defaultTag: DEFAULT_TABS_TAG,
    name: "Tabs"
  }));
}
var DEFAULT_LIST_TAG = "div";
function List(props) {
  let [{ selectedIndex, orientation }] = useTabsContext("Tab.List");
  let slot = { selectedIndex };
  let propsWeControl = {
    role: "tablist",
    "aria-orientation": orientation
  };
  let passThroughProps = props;
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: "Tabs.List"
  });
}
var DEFAULT_TAB_TAG = "button";
function Tab(props) {
  var _a, _b;
  let id2 = `headlessui-tabs-tab-${useId()}`;
  let [{ selectedIndex, tabs, panels, orientation, activation }, { dispatch, change }] = useTabsContext(Tab.name);
  let internalTabRef = (0, import_react30.useRef)(null);
  let tabRef = useSyncRefs(internalTabRef, (element) => {
    if (!element)
      return;
    dispatch({ type: 7 /* ForceRerender */ });
  });
  useIsoMorphicEffect(() => {
    dispatch({ type: 3 /* RegisterTab */, tab: internalTabRef });
    return () => dispatch({ type: 4 /* UnregisterTab */, tab: internalTabRef });
  }, [dispatch, internalTabRef]);
  let myIndex = tabs.indexOf(internalTabRef);
  let selected = myIndex === selectedIndex;
  let handleKeyDown = (0, import_react30.useCallback)((event) => {
    let list = tabs.map((tab) => tab.current).filter(Boolean);
    if (event.key === " " /* Space */ || event.key === "Enter" /* Enter */) {
      event.preventDefault();
      event.stopPropagation();
      change(myIndex);
      return;
    }
    switch (event.key) {
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return focusIn(list, 1 /* First */);
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return focusIn(list, 8 /* Last */);
    }
    return match(orientation, {
      vertical() {
        if (event.key === "ArrowUp" /* ArrowUp */)
          return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
        if (event.key === "ArrowDown" /* ArrowDown */)
          return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
        return;
      },
      horizontal() {
        if (event.key === "ArrowLeft" /* ArrowLeft */)
          return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
        if (event.key === "ArrowRight" /* ArrowRight */)
          return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
        return;
      }
    });
  }, [tabs, orientation, myIndex, change]);
  let handleFocus = (0, import_react30.useCallback)(() => {
    var _a2;
    (_a2 = internalTabRef.current) == null ? void 0 : _a2.focus();
  }, [internalTabRef]);
  let handleSelection = (0, import_react30.useCallback)(() => {
    var _a2;
    (_a2 = internalTabRef.current) == null ? void 0 : _a2.focus();
    change(myIndex);
  }, [change, myIndex, internalTabRef]);
  let slot = (0, import_react30.useMemo)(() => ({ selected }), [selected]);
  let propsWeControl = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onFocus: activation === "manual" ? handleFocus : handleSelection,
    onClick: handleSelection,
    id: id2,
    role: "tab",
    type: useResolveButtonType(props, internalTabRef),
    "aria-controls": (_b = (_a = panels[myIndex]) == null ? void 0 : _a.current) == null ? void 0 : _b.id,
    "aria-selected": selected,
    tabIndex: selected ? 0 : -1
  };
  let passThroughProps = props;
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: "Tabs.Tab"
  });
}
var DEFAULT_PANELS_TAG = "div";
function Panels(props) {
  let [{ selectedIndex }] = useTabsContext("Tab.Panels");
  let slot = (0, import_react30.useMemo)(() => ({ selectedIndex }), [selectedIndex]);
  return render({
    props,
    slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: "Tabs.Panels"
  });
}
var DEFAULT_PANEL_TAG3 = "div";
var PanelRenderFeatures3 = 1 /* RenderStrategy */ | 2 /* Static */;
function Panel5(props) {
  var _a, _b;
  let [{ selectedIndex, tabs, panels }, { dispatch }] = useTabsContext("Tab.Panel");
  let id2 = `headlessui-tabs-panel-${useId()}`;
  let internalPanelRef = (0, import_react30.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, (element) => {
    if (!element)
      return;
    dispatch({ type: 7 /* ForceRerender */ });
  });
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterPanel */, panel: internalPanelRef });
    return () => dispatch({ type: 6 /* UnregisterPanel */, panel: internalPanelRef });
  }, [dispatch, internalPanelRef]);
  let myIndex = panels.indexOf(internalPanelRef);
  let selected = myIndex === selectedIndex;
  let slot = (0, import_react30.useMemo)(() => ({ selected }), [selected]);
  let propsWeControl = {
    ref: panelRef,
    id: id2,
    role: "tabpanel",
    "aria-labelledby": (_b = (_a = tabs[myIndex]) == null ? void 0 : _a.current) == null ? void 0 : _b.id,
    tabIndex: selected ? 0 : -1
  };
  let passThroughProps = props;
  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_PANEL_TAG3,
    features: PanelRenderFeatures3,
    visible: selected,
    name: "Tabs.Panel"
  });
}
Tab.Group = Tabs;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel5;

// src/components/transitions/transition.tsx
var import_react32 = __toESM(require("react"), 1);

// src/hooks/use-is-initial-render.ts
var import_react31 = require("react");
function useIsInitialRender() {
  let initial = (0, import_react31.useRef)(true);
  (0, import_react31.useEffect)(() => {
    initial.current = false;
  }, []);
  return initial.current;
}

// src/utils/once.ts
function once(cb) {
  let state2 = { called: false };
  return (...args) => {
    if (state2.called)
      return;
    state2.called = true;
    return cb(...args);
  };
}

// src/components/transitions/utils/transition.ts
function addClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.add(...classes);
}
function removeClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.remove(...classes);
}
function waitForTransition(node, done) {
  let d = disposables();
  if (!node)
    return d.dispose;
  let { transitionDuration, transitionDelay } = getComputedStyle(node);
  let [durationMs, delaysMs] = [transitionDuration, transitionDelay].map((value) => {
    let [resolvedValue = 0] = value.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((a, z) => z - a);
    return resolvedValue;
  });
  if (durationMs !== 0) {
    d.setTimeout(() => {
      done("finished" /* Finished */);
    }, durationMs + delaysMs);
  } else {
    done("finished" /* Finished */);
  }
  d.add(() => done("cancelled" /* Cancelled */));
  return d.dispose;
}
function transition(node, base, from, to, entered, done) {
  let d = disposables();
  let _done = done !== void 0 ? once(done) : () => {
  };
  removeClasses(node, ...entered);
  addClasses(node, ...base, ...from);
  d.nextFrame(() => {
    removeClasses(node, ...from);
    addClasses(node, ...to);
    d.add(waitForTransition(node, (reason) => {
      removeClasses(node, ...to, ...base);
      addClasses(node, ...entered);
      return _done(reason);
    }));
  });
  d.add(() => removeClasses(node, ...base, ...from, ...to, ...entered));
  d.add(() => _done("cancelled" /* Cancelled */));
  return d.dispose;
}

// src/components/transitions/transition.tsx
function useSplitClasses(classes = "") {
  return (0, import_react32.useMemo)(() => classes.split(" ").filter((className) => className.trim().length > 1), [classes]);
}
var TransitionContext = (0, import_react32.createContext)(null);
TransitionContext.displayName = "TransitionContext";
function useTransitionContext() {
  let context = (0, import_react32.useContext)(TransitionContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
function useParentNesting() {
  let context = (0, import_react32.useContext)(NestingContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
var NestingContext = (0, import_react32.createContext)(null);
NestingContext.displayName = "NestingContext";
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.current.filter(({ state: state2 }) => state2 === "visible" /* Visible */).length > 0;
}
function useNesting(done) {
  let doneRef = (0, import_react32.useRef)(done);
  let transitionableChildren = (0, import_react32.useRef)([]);
  let mounted = useIsMounted();
  (0, import_react32.useEffect)(() => {
    doneRef.current = done;
  }, [done]);
  let unregister = (0, import_react32.useCallback)((childId, strategy = 1 /* Hidden */) => {
    var _a;
    let idx = transitionableChildren.current.findIndex(({ id: id2 }) => id2 === childId);
    if (idx === -1)
      return;
    match(strategy, {
      [0 /* Unmount */]() {
        transitionableChildren.current.splice(idx, 1);
      },
      [1 /* Hidden */]() {
        transitionableChildren.current[idx].state = "hidden" /* Hidden */;
      }
    });
    if (!hasChildren(transitionableChildren) && mounted.current) {
      (_a = doneRef.current) == null ? void 0 : _a.call(doneRef);
    }
  }, [doneRef, mounted, transitionableChildren]);
  let register = (0, import_react32.useCallback)((childId) => {
    let child = transitionableChildren.current.find(({ id: id2 }) => id2 === childId);
    if (!child) {
      transitionableChildren.current.push({ id: childId, state: "visible" /* Visible */ });
    } else if (child.state !== "visible" /* Visible */) {
      child.state = "visible" /* Visible */;
    }
    return () => unregister(childId, 0 /* Unmount */);
  }, [transitionableChildren, unregister]);
  return (0, import_react32.useMemo)(() => ({
    children: transitionableChildren,
    register,
    unregister
  }), [register, unregister, transitionableChildren]);
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var _a;
  let result = {};
  for (let name of eventNames) {
    result[name] = (_a = events[name]) != null ? _a : noop;
  }
  return result;
}
function useEvents(events) {
  let eventsRef = (0, import_react32.useRef)(ensureEventHooksExist(events));
  (0, import_react32.useEffect)(() => {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = 1 /* RenderStrategy */;
function TransitionChild(props) {
  let {
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave,
    enter,
    enterFrom,
    enterTo,
    entered,
    leave,
    leaveFrom,
    leaveTo,
    ...rest
  } = props;
  let container = (0, import_react32.useRef)(null);
  let [state2, setState] = (0, import_react32.useState)("visible" /* Visible */);
  let strategy = rest.unmount ? 0 /* Unmount */ : 1 /* Hidden */;
  let { show, appear, initial } = useTransitionContext();
  let { register, unregister } = useParentNesting();
  let id2 = useId();
  let isTransitioning = (0, import_react32.useRef)(false);
  let nesting = useNesting(() => {
    if (!isTransitioning.current) {
      setState("hidden" /* Hidden */);
      unregister(id2);
      events.current.afterLeave();
    }
  });
  useIsoMorphicEffect(() => {
    if (!id2)
      return;
    return register(id2);
  }, [register, id2]);
  useIsoMorphicEffect(() => {
    if (strategy !== 1 /* Hidden */)
      return;
    if (!id2)
      return;
    if (show && state2 !== "visible" /* Visible */) {
      setState("visible" /* Visible */);
      return;
    }
    match(state2, {
      ["hidden" /* Hidden */]: () => unregister(id2),
      ["visible" /* Visible */]: () => register(id2)
    });
  }, [state2, id2, register, unregister, show, strategy]);
  let enterClasses = useSplitClasses(enter);
  let enterFromClasses = useSplitClasses(enterFrom);
  let enterToClasses = useSplitClasses(enterTo);
  let enteredClasses = useSplitClasses(entered);
  let leaveClasses = useSplitClasses(leave);
  let leaveFromClasses = useSplitClasses(leaveFrom);
  let leaveToClasses = useSplitClasses(leaveTo);
  let events = useEvents({ beforeEnter, afterEnter, beforeLeave, afterLeave });
  let ready = useServerHandoffComplete();
  (0, import_react32.useEffect)(() => {
    if (ready && state2 === "visible" /* Visible */ && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state2, ready]);
  let skip = initial && !appear;
  useIsoMorphicEffect(() => {
    let node = container.current;
    if (!node)
      return;
    if (skip)
      return;
    isTransitioning.current = true;
    if (show)
      events.current.beforeEnter();
    if (!show)
      events.current.beforeLeave();
    return show ? transition(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, (reason) => {
      isTransitioning.current = false;
      if (reason === "finished" /* Finished */)
        events.current.afterEnter();
    }) : transition(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, (reason) => {
      isTransitioning.current = false;
      if (reason !== "finished" /* Finished */)
        return;
      if (!hasChildren(nesting)) {
        setState("hidden" /* Hidden */);
        unregister(id2);
        events.current.afterLeave();
      }
    });
  }, [
    events,
    id2,
    isTransitioning,
    unregister,
    nesting,
    container,
    skip,
    show,
    enterClasses,
    enterFromClasses,
    enterToClasses,
    leaveClasses,
    leaveFromClasses,
    leaveToClasses
  ]);
  let propsWeControl = { ref: container };
  let passthroughProps = rest;
  return /* @__PURE__ */ import_react32.default.createElement(NestingContext.Provider, {
    value: nesting
  }, /* @__PURE__ */ import_react32.default.createElement(OpenClosedProvider, {
    value: match(state2, {
      ["visible" /* Visible */]: 0 /* Open */,
      ["hidden" /* Hidden */]: 1 /* Closed */
    })
  }, render({
    props: { ...passthroughProps, ...propsWeControl },
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition.Child"
  })));
}
function Transition(props) {
  let { show, appear = false, unmount, ...passthroughProps } = props;
  let usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    show = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  let [state2, setState] = (0, import_react32.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let nestingBag = useNesting(() => {
    setState("hidden" /* Hidden */);
  });
  let initial = useIsInitialRender();
  let transitionBag = (0, import_react32.useMemo)(() => ({ show, appear: appear || !initial, initial }), [show, appear, initial]);
  (0, import_react32.useEffect)(() => {
    if (show) {
      setState("visible" /* Visible */);
    } else if (!hasChildren(nestingBag)) {
      setState("hidden" /* Hidden */);
    }
  }, [show, nestingBag]);
  let sharedProps = { unmount };
  return /* @__PURE__ */ import_react32.default.createElement(NestingContext.Provider, {
    value: nestingBag
  }, /* @__PURE__ */ import_react32.default.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, render({
    props: {
      ...sharedProps,
      as: import_react32.Fragment,
      children: /* @__PURE__ */ import_react32.default.createElement(TransitionChild, {
        ...sharedProps,
        ...passthroughProps
      })
    },
    defaultTag: import_react32.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition"
  })));
}
Transition.Child = function Child(props) {
  let hasTransitionContext = (0, import_react32.useContext)(TransitionContext) !== null;
  let hasOpenClosedContext = useOpenClosed() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? /* @__PURE__ */ import_react32.default.createElement(Transition, {
    ...props
  }) : /* @__PURE__ */ import_react32.default.createElement(TransitionChild, {
    ...props
  });
};
Transition.Root = Transition;
module.exports = __toCommonJS(src_exports);
