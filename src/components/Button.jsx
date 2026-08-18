export function Button({ className = '', children, onPress, ...props }) {
  return (
    <button
      type="button"
      className={className}
      onClick={onPress}
      {...props}
    >
      {children}
    </button>
  );
}
