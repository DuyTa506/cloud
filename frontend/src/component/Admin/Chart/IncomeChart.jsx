import React from 'react'

const IncomeChart = () => {
  return (
    <div style={{width:"100%", height:"500px"}}>
    <h1 style={{textAlign:"center", padding:"1vh"}}>Biểu đồ Thu nhập từng tháng</h1>
  <iframe 
  style={{width:"100%", height:"500px"}}
  src="https://charts.mongodb.com/charts-ercomerce-hpcar/embed/charts?id=636bbaec-730c-4220-8db1-935b2dcdd4e4&maxDataAge=60&theme=light&autoRefresh=true"
  title="YouTube video"
></iframe>
</div>
  )
}

export default IncomeChart