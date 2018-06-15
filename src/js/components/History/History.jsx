import React from 'react';

export default class History extends React.Component {
  render() {
    return (
      <div className='card'>
        <h5 className='card-header alert alert-primary'>Search History</h5>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>city</td>
                <td>date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}