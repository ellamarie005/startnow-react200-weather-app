import React from 'react';

export default class History extends React.Component {
  render() {
    const {searchItems} = this.props;
    return (
      <div className='card'>
        <h5 className='card-header alert alert-primary'>Search History</h5>
        <div className='card-body'>
          <table className='table table-striped'>
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