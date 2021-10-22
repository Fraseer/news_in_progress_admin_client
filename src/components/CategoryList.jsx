import React, { useEffect } from "react";
import { Form } from "semantic-ui-react";
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
    options.forEach((options) => {
      categoryOptions.push({
        text: options,
        value: _.camelCase(options),
      });
    });
  };

  return (
    <Form.Select
      data-cy="category-input"
      placeholder="Category"
      options={categoryOptions}
      name="category"
      value={categoryOptions.value}
      // onChange={(e, { name, value }) => {
      //   setValue(name, value);
      // }}
    />
  );
};

export default CategoryList;
