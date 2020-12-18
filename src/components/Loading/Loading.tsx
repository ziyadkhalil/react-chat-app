const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ flex: 1 }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
