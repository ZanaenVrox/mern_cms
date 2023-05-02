import React, { useState } from "react";
import { Link as Links } from "react-router-dom";
import CkEditor from "../../../Reuseable/Editor/Ckeditor";

const CreatePost = () => {
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Create Post</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Links to="/posts">Posts</Links>
                      </li>
                      <li className="breadcrumb-item">Create Post</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form
            // onSubmit={(e) => handelCreatePost(e)}
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          // value={title}
                          // onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Description
                        </label>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                        /> */}

                        <CkEditor
                          editorContent={description}
                          setEditorContent={setDescription}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Meta Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          // onChange={(e) => setMetaTitle(e.target.value)}
                          // value={metaTitle}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Meta Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          // value={metaDescription}
                          id="formrow-firstname-input"
                          // onChange={(e) => setMetaDescription(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Category
                        </label>
                        {/* <Select
                          options={categoryList}
                          isMulti
                          components={animatedComponents}
                          styles={SelectStyle}
                          onChange={(e) => handleCategory(e)}
                        /> */}
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Featured Image
                        </label>
                        <div
                          style={{
                            display: "block",
                            width: "100%",
                          }}
                        >
                          {/* <ImageUpload image={image} setImage={setImage} /> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
