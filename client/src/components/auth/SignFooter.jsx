import { Link } from "react-router-dom";

export const SignFooter = () => {
  return (
    <>
      <hr width="100%" />
      <div className="copyright">
        <div className="copyright-end">
          <div>
            <Link to="/">Conditions of Use</Link>
          </div>
          <div>
            <Link to="/">Privacy Notice.</Link>
          </div>
          <div>
            <Link to="/">Help</Link>
          </div>
        </div>
        <p>2021, Gandalph.com, Inc. or its affiliates </p>
      </div>
    </>
  );
}
