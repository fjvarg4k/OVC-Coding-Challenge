import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

export class Table extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const users = this.props.users;
    const userRows = users.map((user, key) => {
      return (
        <tr key={key}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
    return (
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {userRows}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.data.data
});

export default connect(mapStateToProps)(Table);
