import "./_LayoutForm.scss";

const LayoutForm = (props) => {
  return (
    <div className="layoutForm">
      <h2 className="layoutForm__title">{props.title}</h2>
      <div className="layoutForm__body">{props.children}</div>
    </div>
  );
};

export default LayoutForm;
