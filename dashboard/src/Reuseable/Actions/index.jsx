import React from "react";

const Actions = ({ row, onDelete, onEdit }) => {
  return (
    <div>
      <td className="icondiv">
        <i
          className="mdi mdi-trash-can-outline iconsize"
          onClick={() => onDelete(row.id)}
        />
        <i
          className="mdi mdi-pencil-box-outline iconsize"
          onClick={() => onEdit(row.id)}
        />
      </td>
    </div>
  );
};

export default Actions;
