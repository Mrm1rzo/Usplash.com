import FormInput from "./FormInput";

import { Form, useActionData } from "react-router-dom";

const Search = () => {
  return (
    <>
      <Form
        method="post"
        className="flex gap-2 mx-auto max-w-96 w-full align-elements"
      >
        <FormInput type="text" placeholder="Search" name="search" />
        <button className="btn btn-primary md:hidden btn-sm">Search</button>
      </Form>
    </>
  );
};

export default Search;
