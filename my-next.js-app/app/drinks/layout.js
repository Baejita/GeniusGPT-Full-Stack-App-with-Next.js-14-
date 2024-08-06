function DringkLayout({ children }) {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
}

export default DringkLayout;
