import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { connect } from 'react-redux';

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
  const onSubmit = data => {
    console.log(data);
    getImageFromApi(data.inputSearch)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group col-md-6 offset-md-3 mt-5 ">
            <label htmlFor="exampleInputEmail1">Search:</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputSearch" 
              {...register("inputSearch")} />
            <small id="emailHelp" className="form-text text-muted">Search anything you want</small>
          </div>
          <button type="submit" className="btn btn-primary col-md-4 offset-md-4 mt-3">Submit</button>
      </form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSumit);  