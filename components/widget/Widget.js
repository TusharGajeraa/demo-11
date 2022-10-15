import "./widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget1">
        <strong>
          <small>Welcome,</small>
        </strong>
      </div>
      <div className="widget2">
        <strong>admin</strong>
      </div>
      <div className="widget3">
        <small>
          {" "}
          <small>
            You are a wonderful person with a wonderful view
            <br /> of life. Your companionship is always an
            <br /> opportunity to learn. A warm welcome to you to
            <br /> join us!{" "}
          </small>
        </small>

        <div className="widget4">
          <img
            className="style"
            src="https://admin.knowitallquiz.co.uk/static/media/knowitall.f0cbc75e0b225a7f2394.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Widget;
