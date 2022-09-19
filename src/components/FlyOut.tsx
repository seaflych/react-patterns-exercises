import React from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

// Usage:

// We still have to specify a type, but no default!
interface IFlyOutContext {
  open: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  toggle: () => void;
}
export const [useFlyOutContext, FlyOutContextProvider] =
  createCtx<IFlyOutContext>();

function FlyOut(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContextProvider value={{ open, toggle, value, setValue }}>
      <div className="flyout">{props.children}</div>
    </FlyOutContextProvider>
  );
}

function Input(props) {
  const { value, toggle, setValue } = useFlyOutContext();

  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}

function List({ children }) {
  const { open } = useFlyOutContext();

  return open ? (
    <div className="flyout-list">
      <ul>{children}</ul>
    </div>
  ) : null;
}

function ListItem({ children, value }) {
  const { setValue } = useFlyOutContext();

  return (
    <li
      onMouseDown={() => {
        setValue(value);
      }}
      className="flyout-list-item"
    >
      {children}
    </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export { FlyOut };
