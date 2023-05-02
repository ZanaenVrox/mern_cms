import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menusName, setMenusName] = useState([]);
  const [title, setTitle] = useState([]);
  const [url, setUrl] = useState([]);
  const [parentId, setParentId] = useState([]);
  const [order, setOrder] = useState([]);
  const [level, setLevel] = useState([]);

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Menus</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">Menus</li>
                      <li className="breadcrumb-item active">Menus</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Select a menu to edit:
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          id="example-text-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Text
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          value={title}
                          onChange={() => setTitle()}
                          id="example-text-input"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Url
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          value={url}
                          onChange={() => setUrl()}
                          id="example-text-input"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Parent Id
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          value={parentId}
                          onChange={() => setParentId()}
                          id="example-text-input"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Order
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          value={order}
                          onChange={() => setOrder()}
                          id="example-text-input"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Level
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          value={level}
                          onChange={() => setLevel()}
                          id="example-text-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3 row">
                      <label
                        for="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Menu Name
                      </label>
                      <div className="col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          value={menusName}
                          onChange={() => setMenusName()}
                          id="example-text-input"
                        />
                      </div>
                      <div className="col-md-6">
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          style={{
                            position: "absolute",
                            right: 0,
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
