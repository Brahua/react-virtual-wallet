import React from "react";
import { Grid, Row, Col } from "rsuite";

export default function Main() {
  return (
    <Grid className="mt-5">
      <Row className="show-grid">
        <Col md={6} sm={8} xs={12} style={{ height: "200px", backgroundColor: "red" }}>
          dksadksandsa
        </Col>
        <Col md={18} sm={16} xs={12}></Col>
      </Row>
    </Grid>
  );
}
