import React, { FunctionComponent, useState } from "react";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { uniq } from "lodash";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Box = ({ week, year }) => {
  return <div className="p-3 m-1 border"></div>;
};

const App = () => {
  const [selected, setSelected] = useState([]);
  const extractIds = (els) =>
    els
      .map((v) => v.getAttribute("data-key"))
      .filter(Boolean)
      .map(String);

  const onStart = ({ event, selection }) => {
    console.log("On Start");
    if (!event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }) => {
    if (added.length > 0) {
      // TODO: 
      // Create selector > 1

      setSelected((prev) => {
        let currentArray = [...prev];
        const addedItems = extractIds(added);
        // Add new items to current array

        // To filter out selected items to be pushed if they already exist on current array
        // currentArray =
        //   currentArray.filter((val) => !addedItems.includes(val));
        currentArray = addedItems.filter((val) => !currentArray.includes(val));
        addedItems.forEach((id) => currentArray.push(id));

        // selectedArray.forEach((id) =>
        //   currentArray.splice(currentArray.indexOf(id), 1)
        // );

        // if (removed.length > 0) {
        //   // console.log("removed", removed);
        //   const removedItems = extractIds(removed);
        //   // Replace 1 item with empty, at index of current array index that matched removed items
        //   removedItems.forEach((id) =>
        //     currentArray.splice(currentArray.indexOf(id), 1)
        //   );
        //   console.log("currentArray 3", currentArray);
        // }

        return [...currentArray];
      });
      // console.log(selected)
    }
  };

  return (
    // <SelectionArea onStart={onStart} onMove={onMove} selectables=".selectable">
    <div>
      {[...Array(78)].fill(0).map((n, year) => (
        <div key={year} className="container flex">
          {year}
          {[...Array(52)].fill(0).map((n, week) => {
            const idKey = `Y${year}W${week}`;
            return (
              <div
                data-key={idKey}
                key={idKey}
                className={`border m-1 p-3 ${selected.includes(idKey)
                  ? "selected selectable"
                  : "selectable"
                  }`}
              >
                {idKey}
              </div>
            );
          })}
        </div>
      ))}
    </div>
    // </SelectionArea>
  );
};

export default App;
