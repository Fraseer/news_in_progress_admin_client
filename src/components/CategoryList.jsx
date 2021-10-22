import React, { useEffect } from "react";
import _ from "lodash";

const CategoryList = () => {
  const options = [
    "World News",
    "Science & Enviroment",
    "Business",
    "Tech",
    "Entertainment",
    "Culture & Health",
    "Sports",
  ];

  useEffect(() => {
    optionsLoop();
  }, []);

  let categoryOptions = [];
  const optionsLoop = () => {
    
    options?.forEach((options) => {
      categoryOptions.push({
        text: options,
        value: _.camelCase(options),
      });
    });
  };

  return (categoryOptions);
};

export default CategoryList;
