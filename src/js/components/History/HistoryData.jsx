import React from 'react';


class HistoryData extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { lineItems} = this.props;
    return (
      <div>
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
                {lineItems.map((item, i) => {
                  return (
                  <tr key={i}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                )})
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryData;