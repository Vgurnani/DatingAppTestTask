import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Layout from "common/Layout";
import { pushNotification } from "utils/notifications";
import Texts from "constants/staticText";

const Dashboard = props => {
  const { getList } = props;
  return (
    <Layout>
      <span>This is dashboard page.</span>
    </Layout>
  );
};

Dashboard.propTypes = {
  getList: PropTypes.func
};

export default Dashboard;
