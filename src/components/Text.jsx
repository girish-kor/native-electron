export function Text({ className = '', children, ...props }) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}
