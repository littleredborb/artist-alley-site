import tableList from '../db/dbTables.json';

function TableList(){

  const tableArray = tableList.map(table => {
    return ( <li>{table.tablenumber} : {table.tablename} </li> )
    
    }
  );

  return (
    <div>
      <ul>
      {tableArray}
      </ul>
    </div>
  )
}

export default TableList;