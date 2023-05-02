import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostServices from "../../../services/PostServices";
import moment from "moment";
import Table from "../../../Reuseable/Table";

const Posts = () => {
  const navigate = useNavigate();
  const columns = ["#", "Image", "Title", "Author", "Category", "Created At"];

  const [allPosts, setAllPosts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const getAllPosts = useCallback(() => {
    PostServices.getAllPosts()
      .then((res) => {
        let newData = [];
        for (let i = 0; i < res.data?.length; i++) {
          const element = res.data[i];

          let obj = {
            "#": i + 1,
            Image: (
              <img
                src={element?.image}
                alt=""
                width={60}
                crossorigin="anonymous"
                onError={(e) => (e.target.src = "/assets/images/noimage.jpg")}
                style={{
                  objectFit: "cover",
                  border: "solid 1px",
                  borderColor: "#151b2685",
                  borderRadius: "5px",
                }}
              />
            ),
            Title: element?.title,
            Author: element?.author,
            Category: element?.category && element?.category[0],
            "Created At": moment(element?.createdAt).format("DD MMM,YYYY"),
            id: element?._id,
            createdAt: element?.createdAt,
          };
          newData.push(obj);
        }
        setAllPosts(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleDelete = (id) => {};
  const handleEdit = (id) => {};

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Posts</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">All Posts</Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0"> </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <button
                          type="button"
                          onClick={() => navigate("/post/create")}
                          className="btn btn-primary btn-sm waves-effect waves-light"
                          style={{ marginLeft: "5px" }}
                        >
                          <i
                            className="mdi mdi-plus"
                            style={{ marginRight: "5px" }}
                          />
                          Add Post
                        </button>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ marginTop: "10px" }}>
              <div className="card">
                <div className="card-body">
                  <Table
                    columns={columns}
                    data={allPosts}
                    itemsPerPage={itemsPerPage}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    setItemsPerPage={setItemsPerPage}
                    addButton="Add Post"
                    addButtonLink={() => navigate("/post/create")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
