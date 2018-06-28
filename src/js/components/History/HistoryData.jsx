import React from 'react';

class History extends React.Component {
  render() {
    const { searchItems } = this.props;
    return (
      <div className='card'>
        <h5 className='card-header alert alert-primary'>Search History</h5>
        <div className='card-body'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>City</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {searchItems.map(searchItem => {
                return (
                  <tr>
                    <td>{searchItem.name}</td>
                    <td></td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default History;