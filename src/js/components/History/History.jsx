import React from 'react';

export default class History extends React.Component {
  render() {
    const {searchItems} = this.props;
    return (
      <div className='card'>
        <h5 className='card-header alert alert-primary'>Search History</h5>
        <div className='card-body'>
          <table>
            <tbody>
             {searchItems.map(searchItem => {
                <tr>
                <td>{searchItem.name}</td>
              </tr>
             })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}