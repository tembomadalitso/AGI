export function Container({ children, className = '' }) {
  return (
    <div className={`container-fluid max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
