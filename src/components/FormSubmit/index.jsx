import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Prompt } from "react-router";

import { getImageFromApi } from '../../actions/image'


const mapStateToProps = (state) => {
  return {
    imageList: state.image.list,
  }
}

const mapDispatchToProps = {
  getImageFromApi,
}

function FormSumit({getImageFromApi, imageList})  {
  const { register, handleSubmit } = useForm();
  let [isBlocking, setIsBlocking] = useState(false);

  const onSubmit = data => {
    console.log(data);
    getImageFromApi(data.inputSearch);
    setIsBlocking(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group col-md-6 offset-md-3 mt-5 ">
            <label htmlFor="exampleInputEmail1">Search:</label>
            <Prompt
              when={isBlocking}
              message={location =>
                `Are you sure you want to go to ${location.pathname}`
              }
            />
            <input 
              type="text" 
              className="form-control" 
              id="inputSearch" 
              {...register("inputSearch")}
              onChange={event => {
                setIsBlocking(event.target.value.length > 0);
              }} />
            <small id="emailHelp" className="form-text text-muted">Search anything you want</small>
          </div>
          <button type="submit" className="btn btn-primary col-md-4 offset-md-4 mt-3">Submit</button>
      </form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSumit);  