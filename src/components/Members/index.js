import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Layout from "common/Layout";
import { pushNotification } from "utils/notifications";
import Texts from "constants/staticText";
import ReactTable from "react-table";
import Moment from "react-moment";

const Member = props => {
  useEffect(() => {
    props.getMemberList();

    // eslint-disable-next-line
  }, []);

  const data =
    props.memberData && props.memberData.results
      ? props.memberData.results
      : [];

  const columns = [
    {
      Header: "Picture",
      accessor: "picture", // String-based value accessors!
      Cell: props => (
        <span className="">
          <img src={props.value.thumbnail} />
        </span>
      )
    },
    {
      Header: "Full Name",
      accessor: "name", // String-based value accessors!
      Cell: props => (
        <span className="number">
          {props.value.first + " " + props.value.last}
        </span>
      )
    },
    {
      Header: "City",
      accessor: "location", // String-based value accessors!
      Cell: props => <span>{props.value.city}</span>
    },
    {
      Header: "Email",
      accessor: "email" // String-based value accessors!
    },
    {
      Header: "Gender",
      accessor: "gender" // String-based value accessors!
    },
    {
      Header: "Date of birth",
      accessor: "dob", // String-based value accessors!
      Cell: props => (
        <span className="number">
          <Moment format="DD/MM/YYYY">{props.value.date}</Moment>
        </span>
      )
    },
    {
      Header: "Registered since",
      accessor: "registered", // String-based value accessors!
      Cell: props => (
        <span className="number">
          <Moment format="DD/MM/YYYY">{props.value.date}</Moment>
        </span>
      )
    }
  ];

  return (
    <Layout>
      <span>This is Members page.</span>
      {console.log("members info is ", props.memberData)}
      <ReactTable data={data} columns={columns} />
    </Layout>
  );
};

Member.propTypes = {
  getList: PropTypes.func
};

export default Member;
