import React from "react";
import SimpleSearch from "../shared/SimpleSearch";

function List({ teachers, Title }) {
  return (
    <div
      className="bg-white p-4 w-full shadow overflow-y-auto mt-5 rounded-md"
      style={{ maxHeight: "20rem" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mr-20 mt-2">{Title}</h2>
        <SimpleSearch text={Title} />
      </div>

      <ul>
        {teachers.map((teacher, index) => (
          <li key={index} className="flex items-center my-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">{teacher.name}</p>
              <p className="text-gray-500">{teacher.price}</p>
            </div>
            <div className="ml-auto">
              <p className="text-gray-500">{teacher.country}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
