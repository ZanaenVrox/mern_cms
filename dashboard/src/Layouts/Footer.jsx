import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">{moment().year()} © Embrace.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger" />{" "}
                by&nbsp;
                <a
                  href="https://websouls.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Websouls
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
