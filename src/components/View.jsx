export function View({ className = '', children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
