import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MenuArranger = ({ menuItems, handleMenuChange }) => {
  // Initialize the state to hold the menu items
  const [items, setItems] = useState(menuItems);

  // Handle the drag and drop event
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = Array.from(items);

    if (result.source.droppableId.includes("submenu-")) {
      const [sourceSubmenuId, sourceSubIndex] =
        result.source.droppableId.split("-");
      const sourceMenuItem = newItems.find(
        (item) => item.id === sourceSubmenuId
      );
      const [draggedSubItem] = sourceMenuItem.subItems.splice(
        result.source.index,
        1
      );

      if (result.destination.droppableId.includes("submenu-")) {
        const [destSubmenuId, destSubIndex] =
          result.destination.droppableId.split("-");
        if (sourceSubmenuId === destSubmenuId) {
          sourceMenuItem.subItems.splice(
            parseInt(destSubIndex),
            0,
            draggedSubItem
          );
        } else {
          const destMenuItem = newItems.find(
            (item) => item.id === destSubmenuId
          );
          destMenuItem.subItems.splice(
            parseInt(destSubIndex),
            0,
            draggedSubItem
          );
        }
      } else {
        const [draggedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, draggedItem);
        const destMenuItem = newItems.find(
          (item) => item.id === result.destination.droppableId
        );
        destMenuItem.subItems.splice(
          parseInt(sourceSubIndex),
          0,
          draggedSubItem
        );
      }
    } else {
      const [draggedItem] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, draggedItem);

      if (result.destination.droppableId.includes("submenu-")) {
        const [destSubmenuId, destSubIndex] =
          result.destination.droppableId.split("-");
        const destMenuItem = newItems.find((item) => item.id === destSubmenuId);
        destMenuItem.subItems.splice(parseInt(destSubIndex), 0, draggedItem);
      }
    }

    setItems(newItems);
    handleMenuChange(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {items.map((item, index) => (
        <Droppable key={item.id} droppableId={item.id}>
          {(provided) => (
            <li {...provided.droppableProps} ref={provided.innerRef}>
              <div>
                <span>{item.title}</span>
                {item.subItems && (
                  <Droppable
                    droppableId={`${item.id}-submenu`}
                    direction="horizontal"
                  >
                    {(provided, snapshot) => (
                      <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          listStyleType: "none",
                          margin: 0,
                          padding: 0,
                          backgroundColor: snapshot.isDraggingOver
                            ? "lightgray"
                            : "white",
                        }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <Draggable
                            key={subItem.id}
                            draggableId={subItem.id}
                            index={subIndex}
                          >
                            {(provided) => (
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  userSelect: "none",
                                  padding: "8px",
                                  margin: "0 4px",
                                  borderRadius: "4px",
                                  backgroundColor: "white",
                                  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {subItem.title}
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                )}
              </div>
              <Droppable
                droppableId={`${item.id}-submenu`}
                direction="horizontal"
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      visibility: snapshot.isDraggingOver
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "blue",
                      }}
                    >
                      +
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </li>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default MenuArranger;
