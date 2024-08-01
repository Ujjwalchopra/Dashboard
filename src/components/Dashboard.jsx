import React from 'react';
import ActivityChart from './ActivityChart';
import Order from './Order';
import Feedback from './FeedBack';
import StatCard from './StatCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard title="Total Orders" value="75" />
        <StatCard title="Total Delivered" value="70" />
        <StatCard title="Total Cancelled" value="5" />
        <StatCard title="Total Revenue" value="$12k" />
        <StatCard title="Net Profit" value="$6759.25" />
      </div>
      <ActivityChart />
      <div className="orders-feedback">
        <Orders />
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
