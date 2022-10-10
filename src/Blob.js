const Blob = (props) => {
  const { text, className } = props;
  return (
    <div className="blob-wrapper">
      <div className={className}></div>
      <p>{text}</p>
    </div>
  );
};
export default Blob;
