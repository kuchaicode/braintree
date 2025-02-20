
> [!NOTE] Rules
> - called **inside** React *function* components, *not class components*.
> - called at the **top level** of a component
> - cannot be conditional

Reusable built-in functions in [[React]]. 

[[useState]] 
- State tracking

useEffect
- Perform an effect, such as acquiring data, making DOM changes, timers

useRef
- Store persistent changeable values that do not trigger re-rendering
- Can use for direct DOM access

useReducer
- Similar to useState, allowing for custom state tracking involving complex logic


useContext
- Global state management
- *changes in 19?*

useCallback
- Cache functions that do not need recalculation, performance optimization
- *changes in 19?*

useMemo
- Similar to useCallback but for values instead of functions
- *changes in 19?*

--- 

Custom React Hooks
- Example: making a hook that involves both useState and useEffect