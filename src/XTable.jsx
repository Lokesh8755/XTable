import React,{useState} from 'react'

const XTable = () => {

// Add state for sorting
const [data, setData] = useState([

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]);

// sort functions

// sortByDate with secondary sort by views

const sortByDate = () => {
    const sortedData = [...data].sort((a,b) => {
        const dateComparison = new Date(b.date) - new Date(a.date);  // Descending order of date

        // If dates are equal, sort by views
        if(dateComparison === 0){
            return new Date(b.views) - new Date(a.views) // Descending order of views
        }
        return dateComparison;
    });
    setData(sortedData);
}

const sortByViews = () => {
    const sortedData = [...data].sort((a,b) => {
        const viewsComparison = b.views - a.views;

        // If views are equal, sort by date
        if(viewsComparison === 0){
            return b.date - a.date;
        }
        return viewsComparison; 
    })
    setData(sortedData);
}

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Views</td>
            <td>Article</td>
          </tr>
        </thead>

        <tbody>
            {data.map((item,index) => (
                <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                    <td>{item.article}</td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default XTable
