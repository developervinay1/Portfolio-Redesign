import { projectData } from "@/data/ProjectsData";
import React from "react";

export default function page({ params }) {
  const id = params.id;
  console.log(id);
  const filteredData = projectData.filter(
    (item) => Number(item.id) === Number(id)
  );

  // Assuming projectData is an array of objects with an 'id' property

  console.log("Filtered Data", filteredData);
  return (
    <div>
      <div className="pt-10 mt-10 max-w-4xl m-auto">
        {filteredData ? (
          <div>
            {filteredData.map((data, index) => {
              return (
                <div className="space-y-8" key={index}>
                  <h1 className="text-4xl tracking-wider">{data.name}</h1>
                  <p className="leading-8 text-lg tracking-wider">
                    {data.description}
                  </p>
                  <p className="tracking-wider">
                    <span className="font-bold">Role: </span>
                    {data.role}
                  </p>
                  <p className="tracking-wider">
                    <span className="font-bold">Technology Used: </span>
                    {data.technology}
                  </p>
                  <div className="keyFeaturesMargin">
                    <p className="font-bold">Key Features: </p>
                    {data.detailedFeatures.map((data, index) => {
                      return (
                        <div key={index} className="ml-0 lg:ml-10">
                          <p className="text-md font-medium">
                            {index + 1}: {data.title}
                          </p>
                          <ul className="list-decimal ml-0 lg:ml-20">
                            {data.features.map((data, index) => {
                              return (
                                <li key={index} className="my-5 space-y-4">
                                  <p className="font-medium">{data.title}</p>
                                  <p>{data.description}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-lg tracking-wider leading-10">
                    <span className="font-bold">Challanges: </span>
                    {data.challanges}
                  </p>
                  <p className="text-lg tracking-wider leading-10">
                    <span className="font-bold">Solution: </span>
                    {data.solution}
                  </p>
                  <p className="text-lg tracking-wider leading-10">
                    <span className="font-bold">Results: </span>
                    {data.results}
                  </p>
                  <p className="text-lg tracking-wider leading-10">
                    <span className="font-bold">Learnings: </span>
                    {data.learnings}
                  </p>
                  <p className="text-lg tracking-wider leading-10">
                    <span className="font-bold">Future Improvements: </span>
                    {data.futureImporvements}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No Information Found</p>
        )}
      </div>
    </div>
  );
}
