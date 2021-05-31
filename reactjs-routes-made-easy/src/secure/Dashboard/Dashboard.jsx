import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as appActions from '../../store/actions/app';
import { DashboardService } from '../../core/services/DashboardService';
import Table from '../../shared/components/Table/Table';

export default function Dashboard() {

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { users } = useSelector(store => store.app);

  useEffect(onLoad, [dispatch]);

  function onLoad() {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const res = await DashboardService.doGetEmployees();

        setLoading(false);
        dispatch(appActions.saveEmployees(res.users));
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    fetchEmployees();
  }

  return (
    <>
      <h2>Dashboard</h2>
      {loading && <h4>Fetching employee info....</h4>}
      {users.length > 0 &&
        <Table headings={Object.keys(users[0])} rows={users} />}
    </>
  );
}