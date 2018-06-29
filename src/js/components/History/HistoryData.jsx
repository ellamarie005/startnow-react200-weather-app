import React from 'react';

class HistoryData extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { lineItems } = this.props;
    console.log(lineItems);
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
                {Object.keys(lineItems).map((item, i) => {
                  <tr key={i}>
                    <td>{item}</td>
                  </tr>
                })}
                {/* {Object.keys(lineItems).map((item, i) => {
                  console.log();
                  return (
                    <tr key={i}>
                      <td>{item.data && item.data.name}</td>
                    </tr>)
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryData;