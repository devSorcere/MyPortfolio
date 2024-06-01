import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/f2ce4039c99cf35adde738583ab0fbcd60eaafccf1e949884bda91d0b5c819ce/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="" />
              <h3>HTML</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/0da944f181647261c840e34b20ed7e3ca44ddc150869c6ea550cf98d06c81a37/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667" alt="" />
              <h3>CSS</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/16bbe3c62e06c0099a8bd86816b7993b3eb49d8cd21eb74c7bff7db7dc3787b7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
              <h3>JavaScript</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/1db61c6addeea372992e36ab3091421da01238e1343f733c050fb2baedca3b19/68747470733a2f2f69636f6e67722e616d2f64657669636f6e2f70687073746f726d2d6f726967696e616c2e7376673f73697a653d31323826636f6c6f723d63757272656e74436f6c6f72" alt="" />
              <h3>PHP</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/e0d5d96ee1590645c142a3138043bf351dfa9dc1c3572798f1032970a1216ae3/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6c61726176656c2f6c61726176656c2d6f726967696e616c2e737667" alt="" />
              <h3>Laravel</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/aed5f69c00ea3fd8c8bc70b89d236efae340eb3024526fd11bcba51c80c4aa40/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" alt="" />
              <h3>React</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/25551d6795d6d2ab4d8e802bceb480e8bba584214de3fa085884639b74c17aad/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f616e67756c61722f616e67756c61722d6f726967696e616c2e737667" alt="" />
              <h3>Angular</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/894f372b0d1d12ee20f3c292186337245ee01cb0ad5b1179680f5c156de2f81b/68747470733a2f2f69636f6e67722e616d2f64657669636f6e2f7675656a732d6f726967696e616c2e7376673f73697a653d31323826636f6c6f723d63757272656e74436f6c6f72" alt="" />
              <h3>Vue</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/eb4e7351d0d312a4854656674717f0e162ccc6811d5d874fe7caf84dac406219/68747470733a2f2f69636f6e67722e616d2f64657669636f6e2f747970657363726970742d6f726967696e616c2e7376673f73697a653d31323826636f6c6f723d63757272656e74436f6c6f72" alt="" />
              <h3>TypeScript</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/575b33e86739b657387aaf2598c4f9d6677a60a33718d65e11e0d81cbb7cc09c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736173732f736173732d6f726967696e616c2e737667" alt="" />
              <h3>Sass</h3>
            </Col>
            <Col md={2}>
              <img width="100%" src="https://camo.githubusercontent.com/2cde166000bd4271614ef8c0a7e435af8a087c05f4d5a36f1945663d363bd463/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" alt="" />
              <h3>Node</h3>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
}
