import React from 'react'
import "./timeline.css"
import {Box} from "@mui/material"
import step1 from "../../assets/step1.png"
import step2 from "../../assets/step2.png"
import step3 from "../../assets/step3.png"
import step4 from "../../assets/step4.png"
import step5 from "../../assets/step5.png"

function Timeline() {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title">Step 1</h3>
        <p>The two parties involved in the transaction aggree to terms </p>
      <img src={step1} alt="step 1" />
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Step 2</h3>
        <p>Buyer sends payment to Kejepay </p>
        <img src={step2} alt="step 2" />
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Step 3</h3>
        <p>Seller ships goods or renders service to buyer </p>
        <img src={step3} alt="step 3" />
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Step 4</h3>
        <p>Buyer confirms and approves goods or service </p>
        <img src={step4} alt="step 4" />
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Step 5</h3>
        <p>Kejepay releases payment to seller </p>
        <img src={step5} alt="step 5" />
      </div>
    </div>
  </div>
</div>
    </Box>
  )
}

export default Timeline